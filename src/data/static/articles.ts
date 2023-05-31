import avatar from "@/img/avatar.webp";
import post_img from "@/img/post-image.webp";
import type { T_RegularArticleCard } from "@/ts/utils";


export const articles:Array<T_RegularArticleCard> = [
  {
    title: "Jak wybrać pierwszą stajnię do nauki jazdy konnej?",
    excerpt: "Sprawdź, na co zwrócić uwagę przy wyborze stajni – od podejścia instruktorów po warunki dla koni i poziom bezpieczeństwa.",
    image: {
      alt: "Jazda konna w profesjonalnej stajni",
      src: post_img.src,
      width: post_img.width,
      height: post_img.height,
      blurDataURL: post_img.blurDataURL,
      title: "Jak wybrać pierwszą stajnię do nauki jazdy konnej",
    },
    uri: "/blog/jak-wybrac-pierwsza-stajnie",
    author: {
      image: {
        alt: "Avatar autora",
        src: avatar.src,
        width: avatar.width,
        height: avatar.height,
        blurDataURL: avatar.blurDataURL,
        title: "Anna Kowalska",
      },
      fullname: "Anna Kowalska",
    },
    release: "2026-05-29",
    category: "Dla początkujących",
  },

  {
    title: "Ile kosztuje utrzymanie konia w Polsce w 2026 roku?",
    excerpt: "Pensjonat, pasze, weterynarz, kowal i wyposażenie – sprawdzamy realne miesięczne koszty utrzymania konia.",
    image: {
      alt: "Koń w stajni podczas karmienia",
      src: post_img.src,
      width: post_img.width,
      height: post_img.height,
      blurDataURL: post_img.blurDataURL,
      title: "Koszt utrzymania konia",
    },
    uri: "/blog/koszt-utrzymania-konia",
    author: {
      image: {
        alt: "Avatar autora",
        src: avatar.src,
        width: avatar.width,
        height: avatar.height,
        blurDataURL: avatar.blurDataURL,
        title: "Michał Nowak",
      },
      fullname: "Michał Nowak",
    },
    release: "2026-05-28",
    category: "Poradniki",
  },

  {
    title: "Jazda konna dla dorosłych – czy warto zacząć po 30?",
    excerpt: "Nigdy nie jest za późno na rozpoczęcie przygody z jeździectwem. Zobacz, czego się spodziewać na pierwszych lekcjach.",
    image: {
      alt: "Dorosły jeździec podczas nauki jazdy konnej",
      src: post_img.src,
      width: post_img.width,
      height: post_img.height,
      blurDataURL: post_img.blurDataURL,
      title: "Jazda konna dla dorosłych",
    },
    uri: "/blog/jazda-konna-dla-doroslych",
    author: {
      image: {
        alt: "Avatar autora",
        src: avatar.src,
        width: avatar.width,
        height: avatar.height,
        blurDataURL: avatar.blurDataURL,
        title: "Katarzyna Wiśniewska",
      },
      fullname: "Katarzyna Wiśniewska",
    },
    release: "2026-05-27",
    category: "Lifestyle",
  },

  {
    title: "Najczęstsze błędy początkujących jeźdźców",
    excerpt: "Od złej postawy po brak cierpliwości – poznaj błędy, które popełnia niemal każdy początkujący jeździec.",
    image: {
      alt: "Początkujący jeździec podczas treningu",
      src: post_img.src,
      width: post_img.width,
      height: post_img.height,
      blurDataURL: post_img.blurDataURL,
      title: "Najczęstsze błędy początkujących jeźdźców",
    },
    uri: "/blog/bledy-poczatkujacych-jezdzcow",
    author: {
      image: {
        alt: "Avatar autora",
        src: avatar.src,
        width: avatar.width,
        height: avatar.height,
        blurDataURL: avatar.blurDataURL,
        title: "Jakub Zieliński",
      },
      fullname: "Jakub Zieliński",
    },
    release: "2026-05-26",
    category: "Trening",
  },

  {
    title: "Jak dobrać odpowiedni kask jeździecki?",
    excerpt: "Bezpieczeństwo przede wszystkim. Dowiedz się, jak dobrać rozmiar, certyfikaty i typ kasku.",
    image: {
      alt: "Kask jeździecki dla początkujących",
      src: post_img.src,
      width: post_img.width,
      height: post_img.height,
      blurDataURL: post_img.blurDataURL,
      title: "Jak dobrać odpowiedni kask jeździecki",
    },
    uri: "/blog/jak-dobrac-kask-jezdziecki",
    author: {
      image: {
        alt: "Avatar autora",
        src: avatar.src,
        width: avatar.width,
        height: avatar.height,
        blurDataURL: avatar.blurDataURL,
        title: "Anna Kowalska",
      },
      fullname: "Anna Kowalska",
    },
    release: "2026-05-25",
    category: "Sprzęt",
  },

  {
    title: "Pensjonat dla konia – na co zwrócić uwagę?",
    excerpt: "Warunki boksów, wyżywienie, padoki i opieka – wszystko, co warto sprawdzić przed wyborem stajni pensjonatowej.",
    image: {
      alt: "Pensjonat dla koni i boksy",
      src: post_img.src,
      width: post_img.width,
      height: post_img.height,
      blurDataURL: post_img.blurDataURL,
      title: "Pensjonat dla konia",
    },
    uri: "/blog/pensjonat-dla-konia",
    author: {
      image: {
        alt: "Avatar autora",
        src: avatar.src,
        width: avatar.width,
        height: avatar.height,
        blurDataURL: avatar.blurDataURL,
        title: "Michał Nowak",
      },
      fullname: "Michał Nowak",
    },
    release: "2026-05-24",
    category: "Poradniki",
  },

  {
    title: "Jak przygotować się do pierwszej jazdy konnej?",
    excerpt: "Co ubrać, czego się spodziewać i jak wygląda pierwsza lekcja jazdy konnej krok po kroku.",
    image: {
      alt: "Pierwsza lekcja jazdy konnej",
      src: post_img.src,
      width: post_img.width,
      height: post_img.height,
      blurDataURL: post_img.blurDataURL,
      title: "Jak przygotować się do pierwszej jazdy konnej",
    },
    uri: "/blog/pierwsza-jazda-konna",
    author: {
      image: {
        alt: "Avatar autora",
        src: avatar.src,
        width: avatar.width,
        height: avatar.height,
        blurDataURL: avatar.blurDataURL,
        title: "Julia Mazur",
      },
      fullname: "Julia Mazur",
    },
    release: "2026-01-23",
    category: "Dla początkujących",
  },

  {
    title: "Western czy klasyczne jeździectwo – co wybrać?",
    excerpt: "Porównujemy dwa popularne style jazdy konnej i podpowiadamy, który może pasować do Ciebie.",
    image: {
      alt: "Porównanie stylów jazdy konnej",
      src: post_img.src,
      width: post_img.width,
      height: post_img.height,
      blurDataURL: post_img.blurDataURL,
      title: "Western czy klasyczne jeździectwo",
    },
    uri: "/blog/western-czy-klasyczne",
    author: {
      image: {
        alt: "Avatar autora",
        src: avatar.src,
        width: avatar.width,
        height: avatar.height,
        blurDataURL: avatar.blurDataURL,
        title: "Katarzyna Wiśniewska",
      },
      fullname: "Katarzyna Wiśniewska",
    },
    release: "2024-05-22",
    category: "Lifestyle",
  },
];
