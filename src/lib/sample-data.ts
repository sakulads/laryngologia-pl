import { User } from "@/lib/interfaces/index";

export const sampleUserData: User[] = [
  {
    id: 1,
    name: "Dr hab.n.med. Mariola Popko Zagor",
    image: "/mariola.webp",
    description:
      "Specjalista chirurg plastyczny i rekonstrukcyjny twarzy, EBCFPRS Board Certified Facial Plastic Surgeon, otorynolaryngolog, były pracownik Kliniki",
    itemsList: [
      {
        id: 11,
        title:
          "endoskopowa chirurgia zatok przynosowych i operacje plastyczne nosa zewnętrznego rynoplastyki",
        title2: "ultrasonografia głowy i szyi",
        title3:
          "badania naukowe nad podłożem immunologicznym schorzeń zatok przynosowych oraz funkcjonalną anatomią nosa zewnętrznego",
        title4: "Fellowships: Holandia, Niemcy, Dania, Szwajcaria, USA",
        title5: "",
        title6: "",
      },
    ],
    description2: "",
  },
  {
    id: 2,
    name: "Dr n. med. Krzysztof Cecherz",
    image: "/cecherz.webp",
    description:
      "Absolwent Wojskowej Akademii Medycznej w Łodzi. Długoletni pracownik Wojskowego Instytutu Medycyny Lotniczej w Warszawie, adiunkt i zastępca. Stale podnosi swoje kwalifikacje, uczestnicząc w licznych kursach i szkoleniach z zakresu laryngologii oraz medycyny estetycznej w Polsce oraz zagranicą." +
      "  " +
      "Warto podkreślić że jest jednym z najbardziej doświadczonych chirurgów przeprowadzających innowacyjne, małoinwazyjne zabiegi laryngologiczne m.in. metodą endoskopową.",
    description2:
      "Postęp medycyny jest bardzo szybki, a w dziedzinie laryngologii w ostatnich latach dokonał się prawdziwy skok, zwłaszcza przez wprowadzenie nowoczesnego instrumentarium. W wielu przypadkach nie trzeba już przeprowadzać uciążliwych dla pacjenta operacji, tylko małoinwazyjne zabiegi, po których można wrócić do normalnego funkcjonowania w ciągu kilkunastu godzin – mówi dr Cecherz.",
    itemsList: [
      {
        id: 12,
        title: "Zakres leczenia to między innymi:",
        title2: "diagnostyka laryngologiczna",
        title3: "operacje zatok",
        title4: "operacje skrzywienie przegrody nosowej i małżowin nosowych",
        title5: "operacje usuwania migdałków",
        title6:
          "operacje w leczeniu obturacyjnego bezdechu podczas snu i chrapania.",
      },
    ],
  },
  {
    id: 3,
    name: "lek. med. Marika Jabłonowska",
    image: "/marika.webp",
    description:
      "Doświadczenie: Szkolenie specjalizacyjne w Klinice Otorynolaryngologii Warszawskiego Uniwersytetu Medycznego w Szpitalu Czerniakowskim",
    description2:
      "Regularne uczestnictwo w wielu szkoleniach i kursach z dziedziny otolaryngologii w Polsce i zagranicą",
    itemsList: [
      {
        id: 13,
        title: "Staż podyplomowy – Szpital Praski (2009 – 2010 r.),",
        title2:
          "Staż – Klinika Chirurgii Czaszkowo – Szczękowo – Twarzowej – Szpital Kliniczny Dzieciątka Jezus (2010 r.),",
        title3:
          "Staż – Oddział Laryngologii Dziecięcej – SPZOZ im. Dzieci Warszawy w Dziekanowie Leśnym (2013 r.),",
        title4:
          "Staż – Klinika Nowotworów Głowy i Szyi – Centrum Onkologii (2014 r.),",
        title5:
          "Staż – Oddział Kliniczny Chirurgii Plastycznej, Rekonsytukcyjnej i Leczenia Oparzeń – WIM (2015 r.),",
        title6: "",
      },
    ],
  },
];

// import { User } from "@/interfaces/index";

// /** Dummy user data. */
// export const sampleUserData: User[] = [
//   { id: 101, name: "Alice" },
//   { id: 102, name: "Bob" },
//   { id: 103, name: "Caroline" },
//   { id: 104, name: "Dave" },
// ];
