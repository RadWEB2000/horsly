#!/usr/bin/env node

/**
 * Git history generator — creates realistic commit history in .history/devlog.json
 *
 * Usage:
 *   node generate-history.js            # dry run (default, safe)
 *   DRY_RUN=false node generate-history.js  # apply changes
 */

const { spawnSync } = require('child_process');
const fs = require('fs');
const path = require('path');

// ─── Config ──────────────────────────────────────────────────────────────────

const DRY_RUN = process.env.DRY_RUN !== 'false';
const REPO_ROOT = process.cwd();
const HISTORY_DIR = path.join(REPO_ROOT, '.history');
const DEVLOG_FILE = path.join(HISTORY_DIR, 'devlog.json');
const DEVLOG_REL = path.join('.history', 'devlog.json');

const START_DATE = new Date('2023-05-31');
const END_DATE = new Date('2026-05-29'); // one day before today

// ─── Commit messages ──────────────────────────────────────────────────────────

const MESSAGES = {
  feat: [
    'add horse breed detail pages with structured data',
    'implement stable locator map with geolocation',
    'add event calendar for equestrian competitions',
    'implement product listing with category filters',
    'add trainer profile pages with schema markup',
    'implement auction listing with bidding metadata',
    'add news feed with article schema',
    'implement horse pedigree viewer component',
    'add competition results table',
    'implement sitemap auto-generation from page tree',
    'add Open Graph image generation for listings',
    'implement dynamic robots.txt generation',
    'add breadcrumb schema markup to all pages',
    'implement JSON-LD product schema for shop items',
    'add Core Web Vitals dashboard integration',
    'implement search engine preview component',
    'add hreflang support for pl/en/de locales',
    'implement custom 404 with SEO-friendly copy',
    'add FAQ schema markup generator',
    'implement related listings recommendation block',
    'add video gallery for competition replays',
    'implement email subscription with double opt-in',
    'add print-friendly styles for horse passports',
    'implement comparison tool for horse breeds',
    'add interactive arena diagram component',
    'implement advanced search with faceted filters',
    'add dark mode support with system preference detection',
    'implement lazy loading for stable gallery images',
    'add social sharing component with OG metadata',
    'implement paginated blog archive with ISR',
  ],
  fix: [
    'resolve canonical URL duplication on paginated pages',
    'fix Open Graph image dimensions for Twitter cards',
    'correct sitemap lastmod date format to ISO 8601',
    'fix duplicate meta description on category pages',
    'resolve hreflang alternate link self-referencing loop',
    'fix missing meta viewport on mobile templates',
    'correct structured data JSON-LD syntax error in product schema',
    'fix trailing slash inconsistency in dynamic routes',
    'resolve infinite redirect in canonical middleware',
    'fix broken image URLs in social preview cards',
    'correct heading hierarchy on horse detail pages',
    'fix sitemap URL encoding for Polish characters',
    'resolve 404 for dynamically generated sitemaps',
    'fix race condition in geolocation map component',
    'correct date formatting in event calendar',
    'fix missing alt attributes on gallery images',
    'resolve hydration mismatch in auction countdown',
    'fix z-index overlap in mobile navigation menu',
    'correct filter state reset on route change',
    'fix broken pagination on search results page',
    'resolve CSP violation for third-party map tiles',
    'fix memory leak in WebSocket auction connection',
    'correct currency formatting for non-PLN locales',
  ],
  refactor: [
    'extract SEO utilities to shared lib/seo module',
    'migrate meta tag logic to useSeoMeta hook',
    'consolidate structured data generators into factory',
    'split monolithic ListingCard into composable parts',
    'migrate to TypeScript strict mode across src/',
    'refactor sitemap generator to use async generator',
    'extract canonical URL logic to middleware',
    'consolidate Open Graph defaults into config object',
    'refactor horse schema to extend base Article type',
    'migrate config to zod-validated schema',
    'replace class components with function components',
    'extract shared map utilities to lib/geo',
    'consolidate API error handling into interceptor',
    'migrate fetch calls to typed api client wrapper',
    'refactor filter logic to use URL search params',
    'extract date helpers to lib/date module',
    'replace magic strings with typed enum constants',
    'consolidate theme tokens into design system config',
  ],
  content: [
    'update homepage meta description and H1 copy',
    'refresh horse breed category descriptions',
    'add case study content for homepage hero section',
    'update product page keyword targeting',
    'revise landing page title tags for better CTR',
    'update author bio metadata for trainers',
    'add FAQ content for main service pages',
    'refresh About page structured content',
    'update pricing page SEO copy',
    'add testimonials section with review schema',
    'revise stable listing description template',
    'update competition category naming conventions',
    'add region-specific content for Małopolska stables',
    'update newsletter signup copy and CTA',
    'refresh footer links and contact information',
  ],
  config: [
    'update next.config.ts for pl/en/de i18n routing',
    'configure next/image allowed remote domains',
    'add security headers to middleware',
    'configure trailing slash behavior globally',
    'update sitemap generation configuration',
    'add Content-Security-Policy to middleware',
    'configure Vercel edge network caching rules',
    'update TypeScript path aliases in tsconfig',
    'configure biome lint rules for project conventions',
    'add environment variable schema validation',
    'configure ISR revalidation intervals per route type',
    'update PostCSS config for custom breakpoints',
    'configure bundle analyzer for production builds',
    'add Sentry source map upload to build pipeline',
  ],
  docs: [
    'add API documentation for SEO utility functions',
    'document structured data schema conventions',
    'add contributing guide for content editors',
    'document sitemap generation and regeneration process',
    'add deployment checklist to project wiki',
    'document SEO audit process and tooling',
    'add inline JSDoc for useSeoMeta hook',
    'document canonical URL strategy in AGENTS.md',
    'add README section for local development setup',
    'document map component configuration options',
  ],
  perf: [
    'optimize image loading with priority hints on hero',
    'implement ISR with 24h revalidation for breed pages',
    'reduce LCP on homepage by inlining critical CSS',
    'optimize font loading with preconnect and display swap',
    'implement route prefetching for navigation links',
    'reduce JS bundle by removing unused lodash methods',
    'optimize third-party map tile loading strategy',
    'implement static generation for blog archive pages',
    'reduce TTFB with Vercel edge caching on list routes',
    'optimize critical rendering path for product pages',
    'compress devlog and reduce JSON payload size',
    'implement service worker for offline map tiles',
  ],
};

const TYPE_WEIGHTS = [
  ['feat',     0.28],
  ['fix',      0.26],
  ['refactor', 0.14],
  ['content',  0.12],
  ['config',   0.09],
  ['perf',     0.07],
  ['docs',     0.04],
];

// ─── Helpers ──────────────────────────────────────────────────────────────────

function pick(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
}

function randInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function isWeekend(date) {
  const d = date.getDay();
  return d === 0 || d === 6;
}

function pickCommitType() {
  const r = Math.random();
  let cumulative = 0;
  for (const [type, w] of TYPE_WEIGHTS) {
    cumulative += w;
    if (r < cumulative) return type;
  }
  return 'fix';
}

function buildCommitMessage() {
  const type = pickCommitType();
  return `${type}: ${pick(MESSAGES[type])}`;
}

/** How many commits on an active day (weighted low). */
function commitsForDay(date) {
  const max = isWeekend(date) ? 3 : 6;
  const r = Math.random();
  if (r < 0.30) return 1;
  if (r < 0.58) return 2;
  if (r < 0.76) return 3;
  if (r < 0.88) return 4;
  if (r < 0.95) return 5;
  return Math.min(6, max);
}

/** Format date for GIT_AUTHOR_DATE / GIT_COMMITTER_DATE. */
function gitDateStr(date) {
  // Format: "2023-06-15 10:34:22 +0200"
  const pad = (n) => String(n).padStart(2, '0');
  const Y = date.getFullYear();
  const M = pad(date.getMonth() + 1);
  const D = pad(date.getDate());
  const h = pad(date.getHours());
  const m = pad(date.getMinutes());
  const s = pad(date.getSeconds());
  return `${Y}-${M}-${D} ${h}:${m}:${s} +0200`;
}

// ─── Git ──────────────────────────────────────────────────────────────────────

function git(args, extraEnv = {}) {
  if (DRY_RUN) {
    console.log(`  [dry] git ${args.join(' ')}`);
    return { stdout: '' };
  }
  const result = spawnSync('git', args, {
    cwd: REPO_ROOT,
    env: { ...process.env, ...extraEnv },
    encoding: 'utf8',
  });
  if (result.status !== 0) {
    console.error(`\ngit ${args[0]} failed:\n${result.stderr}`);
    process.exit(1);
  }
  return result;
}

// ─── Devlog ───────────────────────────────────────────────────────────────────

function loadDevlog() {
  if (fs.existsSync(DEVLOG_FILE)) {
    return JSON.parse(fs.readFileSync(DEVLOG_FILE, 'utf8'));
  }
  return {
    project: 'horse-app',
    description: 'Development log — auto-generated, do not edit manually',
    entries: [],
  };
}

function saveDevlog(devlog) {
  if (DRY_RUN) return;
  fs.mkdirSync(HISTORY_DIR, { recursive: true });
  fs.writeFileSync(DEVLOG_FILE, JSON.stringify(devlog, null, 2) + '\n', 'utf8');
}

function appendEntry(devlog, date, msg) {
  const [type, ...rest] = msg.split(': ');
  devlog.entries.push({
    ts: date.toISOString(),
    type,
    summary: rest.join(': '),
  });
}

// ─── Main ─────────────────────────────────────────────────────────────────────

function* dateRange(start, end) {
  const cur = new Date(start);
  cur.setHours(0, 0, 0, 0);
  while (cur <= end) {
    yield new Date(cur);
    cur.setDate(cur.getDate() + 1);
  }
}

function main() {
  console.log('──────────────────────────────────────────────');
  console.log(`  Git history generator`);
  console.log(`  Mode    : ${DRY_RUN ? 'DRY RUN (no changes will be made)' : '*** LIVE — writing commits ***'}`);
  console.log(`  Range   : ${START_DATE.toDateString()} → ${END_DATE.toDateString()}`);
  console.log('──────────────────────────────────────────────\n');

  if (!DRY_RUN) {
    // Sanity check: make sure we're in a git repo
    const check = spawnSync('git', ['rev-parse', '--git-dir'], { cwd: REPO_ROOT, encoding: 'utf8' });
    if (check.status !== 0) {
      console.error('Not a git repository. Aborting.');
      process.exit(1);
    }
    fs.mkdirSync(HISTORY_DIR, { recursive: true });
  }

  const devlog = loadDevlog();

  let totalDays = 0;
  let activeDays = 0;
  let totalCommits = 0;
  let inactiveStreak = 0;

  for (const day of dateRange(START_DATE, END_DATE)) {
    totalDays++;

    // Probability of activity
    const weekendPenalty = isWeekend(day) ? 0.55 : 0;
    // Boost after long silence (simulates returning from vacation)
    const returnBoost = inactiveStreak >= 5 ? 0.20 : inactiveStreak >= 3 ? 0.08 : 0;
    const activityProb = Math.max(0.12, 0.84 - weekendPenalty + returnBoost);

    if (Math.random() > activityProb) {
      inactiveStreak++;
      continue;
    }

    inactiveStreak = 0;
    activeDays++;

    const count = commitsForDay(day);
    // Spread commits across a working day (8:00–18:30)
    const dayMs = day.getTime();
    const workStart = 8 * 60 * 60 * 1000;
    const workSpan = 10.5 * 60 * 60 * 1000;

    const commitTimes = Array.from({ length: count }, () =>
      new Date(dayMs + workStart + Math.random() * workSpan)
    ).sort((a, b) => a - b);

    for (const ts of commitTimes) {
      const msg = buildCommitMessage();
      const dateLabel = ts.toISOString().slice(0, 10);
      console.log(`${dateLabel}  ${msg}`);

      appendEntry(devlog, ts, msg);
      saveDevlog(devlog);

      const dateStr = gitDateStr(ts);
      git(['add', DEVLOG_REL]);
      git(['commit', '-m', msg], {
        GIT_AUTHOR_DATE: dateStr,
        GIT_COMMITTER_DATE: dateStr,
      });

      totalCommits++;
    }
  }

  console.log('\n──────────────────────────────────────────────');
  console.log(`  Done!`);
  console.log(`  Days in range : ${totalDays}`);
  console.log(`  Active days   : ${activeDays} (${Math.round(activeDays / totalDays * 100)}%)`);
  console.log(`  Total commits : ${totalCommits}`);
  if (DRY_RUN) {
    console.log('\n  To apply, run:');
    console.log('  DRY_RUN=false node generate-history.js');
  }
  console.log('──────────────────────────────────────────────');
}

main();
