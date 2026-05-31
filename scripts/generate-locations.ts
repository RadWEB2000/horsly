import fs from "fs";
import path from "path";

const BDL_BASE = "https://bdl.stat.gov.pl/api/v1";
const OUTPUT_PATH = path.join(process.cwd(), "src/data/static/locations.json");
const PAGE_SIZE = 100;
const RATE_LIMIT_MS = 120;

// ─── Types ───────────────────────────────────────────────────────────────────

interface BDLUnit {
  id: string;
  name: string;
  level: number;
  parentId: string;
  kind: string;
}

interface BDLResponse {
  totalRecords: number;
  page: number;
  pageSize: number;
  results: BDLUnit[];
}

interface Commune {
  label: string;
  value: string;
}

interface District {
  label: string;
  value: string;
  commune: Commune[];
}

interface Voivodeship {
  label: string;
  value: string;
  districts: District[];
}

type Locations = Array<{ vivodeship: Voivodeship }>;

// ─── Helpers ─────────────────────────────────────────────────────────────────

function slugify(text: string): string {
  const map: Record<string, string> = {
    ą: "a",
    ć: "c",
    ę: "e",
    ł: "l",
    ń: "n",
    ó: "o",
    ś: "s",
    ź: "z",
    ż: "z",
    Ą: "a",
    Ć: "c",
    Ę: "e",
    Ł: "l",
    Ń: "n",
    Ó: "o",
    Ś: "s",
    Ź: "z",
    Ż: "z",
  };
  return text
    .split("")
    .map((c) => map[c] ?? c)
    .join("")
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
}

// Converts ALL-CAPS BDL voivodeship names to title case (e.g. MAŁOPOLSKIE → Małopolskie, ŚLĄSKIE → Śląskie)
// Uses Unicode \p{L} so Polish letters like ś, ł, ź are correctly capitalized.
function toTitleCase(text: string): string {
  return text
    .toLowerCase()
    .replace(/(^|[-\s])(\p{L})/gu, (_, sep, char: string) => sep + char.toUpperCase());
}

function sleep(ms: number): Promise<void> {
  return new Promise((r) => setTimeout(r, ms));
}

// ─── API ─────────────────────────────────────────────────────────────────────

async function fetchAllUnits(level: number): Promise<BDLUnit[]> {
  const all: BDLUnit[] = [];
  let page = 0;

  while (true) {
    const url = `${BDL_BASE}/units?level=${level}&page=${page}&page-size=${PAGE_SIZE}&format=json`;
    const res = await fetch(url);

    if (!res.ok) {
      throw new Error(
        `BDL API error ${res.status} ${res.statusText} — level=${level} page=${page}`
      );
    }

    const data = (await res.json()) as BDLResponse;
    all.push(...data.results);

    process.stdout.write(`\r    ${all.length} / ${data.totalRecords}`);

    if (all.length >= data.totalRecords) break;
    page++;
    await sleep(RATE_LIMIT_MS);
  }

  process.stdout.write("\n");
  return all;
}

// ─── Hierarchy builder ────────────────────────────────────────────────────────

// BDL unit IDs are 12-char strings: MM WW pp ppp gg g
//   MM = makroregion (2 digits)
//   WW = województwo TERYT code (2 digits)  ← used to map powiat → województwo
//   pp = podregion discriminator (2 digits)
//  ppp = powiat code within podregion (3 digits)
//   gg = gmina code within powiat (2 digits)
//    g = gmina kind/type (1 digit)
function extractWojCode(bdlId: string): string {
  return bdlId.substring(2, 4);
}

// ─── Main ─────────────────────────────────────────────────────────────────────

async function main(): Promise<void> {
  console.log("Pobieranie danych z GUS BDL API...\n");

  console.log("  Województwa (level 2):");
  const voivodeships = await fetchAllUnits(2);

  console.log("  Powiaty (level 5):");
  const powiaty = await fetchAllUnits(5);

  console.log("  Gminy (level 6):");
  const allGminy = await fetchAllUnits(6);

  // kind=4 = miasto w gminie miejsko-wiejskiej (sub-part of kind=3)
  // kind=5 = obszar wiejski w gminie miejsko-wiejskiej (sub-part of kind=3)
  // These are statistical subdivisions, not standalone administrative units.
  const gminy = allGminy.filter((g) => g.kind !== "4" && g.kind !== "5");

  console.log(`\nWyniki:`);
  console.log(`  Województwa:  ${voivodeships.length}`);
  console.log(`  Powiaty:      ${powiaty.length}`);
  console.log(`  Gminy (net):  ${gminy.length} (z ${allGminy.length} łącznie)\n`);

  // Group powiaty by WOJ code (positions 2-3 of BDL ID)
  const powiatyByWoj = new Map<string, BDLUnit[]>();
  for (const pow of powiaty) {
    const woj = extractWojCode(pow.id);
    if (!powiatyByWoj.has(woj)) powiatyByWoj.set(woj, []);
    powiatyByWoj.get(woj)!.push(pow);
  }

  // Group gminy by their parentId (= powiat BDL ID)
  const gminyByPowiat = new Map<string, BDLUnit[]>();
  for (const g of gminy) {
    if (!gminyByPowiat.has(g.parentId)) gminyByPowiat.set(g.parentId, []);
    gminyByPowiat.get(g.parentId)!.push(g);
  }

  // Assemble output
  const locations: Locations = voivodeships.map((voj) => {
    const wojCode = extractWojCode(voj.id);
    const vojLabel = toTitleCase(voj.name);

    const vojPowiaty = (powiatyByWoj.get(wojCode) ?? []).sort((a, b) =>
      a.name.localeCompare(b.name, "pl")
    );

    const districts: District[] = vojPowiaty.map((pow) => {
      const powGminy = (gminyByPowiat.get(pow.id) ?? []).sort((a, b) =>
        a.name.localeCompare(b.name, "pl")
      );

      const seen = new Set<string>();
      const commune: Commune[] = powGminy.flatMap((g) => {
        const value = slugify(g.name);
        if (seen.has(value)) return [];
        seen.add(value);
        return [{ label: g.name, value }];
      });

      return {
        label: pow.name,
        value: slugify(pow.name),
        commune,
      };
    });

    return {
      vivodeship: {
        label: vojLabel,
        value: slugify(vojLabel),
        districts,
      },
    };
  });

  // Write output
  fs.mkdirSync(path.dirname(OUTPUT_PATH), { recursive: true });
  fs.writeFileSync(OUTPUT_PATH, JSON.stringify(locations, null, 2), "utf-8");

  const stats = {
    voivodeships: locations.length,
    districts: locations.reduce((s, l) => s + l.vivodeship.districts.length, 0),
    communes: locations.reduce(
      (s, l) =>
        s + l.vivodeship.districts.reduce((ds, d) => ds + d.commune.length, 0),
      0
    ),
  };

  console.log(`Zapisano: ${OUTPUT_PATH}`);
  console.log(`  Województwa: ${stats.voivodeships}`);
  console.log(`  Powiaty:     ${stats.districts}`);
  console.log(`  Gminy:       ${stats.communes}`);
}

main().catch((err: Error) => {
  console.error("\nBłąd:", err.message);
  process.exit(1);
});
