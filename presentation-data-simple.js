// ═══════════════════════════════════════════════════════════════
//  PRÄSENTATIONSDATEN – LEICHTE SPRACHE
// ═══════════════════════════════════════════════════════════════
//
//  Diese Datei enthält die gleiche Struktur wie presentation-data.js
//  aber mit Texten in LEICHTER SPRACHE (fuer Inklusion).
//
//  ╔═══════════════════════════════════════════════════════════╗
//  ║  WICHTIG: Die Schluesselnamen muessen EXAKT gleich sein   ║
//  ║  wie in presentation-data.js!                             ║
//  ║  Nur die Texte (zwischen " ") sind anders.                ║
//  ╚═══════════════════════════════════════════════════════════╝
//
//  Die italienischen Star-Wars-Zitate sind PLATZHALTER.
//  Ersetzt sie durch eure echten Texte in leichter Sprache.
//
// ═══════════════════════════════════════════════════════════════

const PRESENTATION_DATA_SIMPLE = {

  // ── TITELFOLIE ──────────────────────────────────────────────
  title: {
    main: "RAEUME FUER JEDEN",
    subtitle: "– inklusiv, immersiv, interaktiv",
    description: "La Forza e forte nella mia famiglia.",
    semester: "SS2026",
    course: "BHT – Transformation Design & Print"
  },

  // ── TEAM RAUM – GRUNDSAETZE ────────────────────────────────
  principles: {
    title: "Team Raum – unsere (Gestaltungs-)Grundsaetze",
    items: [
      { icon: "immersiv",   title: "Immersiv",   text: "Ho un cattivo presentimento su questo." },
      { icon: "inklusiv",   title: "Inklusiv",   text: "Mai sottovalutare un Wookiee." },
      { icon: "interaktiv", title: "Interaktiv", text: "La tua occhiata puo ingannarti." }
    ]
  },

  // ── RUECKBLICK ─────────────────────────────────────────────
  flashback: {
    title: "Rueckblick",
    items: [
      "Molti dei veri credono che la verita dipenda dal proprio punto di vista.",
      "Quando novecento anni avrai, cosi bene non starai.",
      "Guerra non fa uno grande.",
      "La Forza e una energia che crea la vita."
    ]
  },

  // ── PARTNER ────────────────────────────────────────────────
  partner: {
    title: "Partner",
    name: "",
    location: "",
    description: "La calma, la pace passiva."
  },

  // ── AUSGANGSSITUATION ──────────────────────────────────────
  situation: {
    title: "Ausgangssituation",
    points: [
      "La paura e il sentiero verso il lato oscuro.",
      "La rabbia conduce all'odio.",
      "L'odio conduce alla sofferenza.",
      "Senza il lato oscuro, non possiamo percepire la luce."
    ]
  },

  // ── FORSCHUNGSFRAGE ────────────────────────────────────────
  researchQuestion: {
    title: "Forschungsfrage",
    question: "Solo cio che porti dentro te, conta."
  },

  // ── 3 HYPOTHESEN ──────────────────────────────────────────
  hypotheses: {
    title: "3 Hypothesen",
    items: [
      { number: "1", title: "", text: "Un Jedi deve avere il profondo impegno." },
      { number: "2", title: "", text: "La vita crea la Forza, rendendola crescere." },
      { number: "3", title: "", text: "Il lato oscuro nuvola ogni cosa." }
    ]
  },

  // ── INTERVENTIONSMATRIX ────────────────────────────────────
  matrix: {
    title: "Interventionsmatrix",
    categories: [
      { name: "Irritation",            color: "#ec7d23", description: "" },
      { name: "Verstaerkung",          color: "#b1dbe3", description: "" },
      { name: "Zuspitzung",            color: "#ca5482", description: "" },
      { name: "Support",               color: "#b1bfe0", description: "" },
      { name: "Physische Erfahrung",   color: "#384f9e", description: "" }
    ]
  },

  // ── KURZUEBERSICHT ──────────────────────────────────────────
  interventionsOverview: {
    title: "Kurzuebersicht aller Interventionen",
    items: [
      { name: "", status: "", categories: [], image: "" },
      { name: "", status: "", categories: [], image: "" },
      { name: "", status: "", categories: [], image: "" },
      { name: "", status: "", categories: [], image: "" }
    ]
  },

  // ── LIVE-DEMO (INCEPTION) ──────────────────────────────────
  // Hier wird die Website in der Praesentation eingebettet.
  // url: Die Adresse eurer Website.
  // title: Ueberschrift auf der Folie.
  inception: {
    title: "Kurzuebersicht aller Interventionen",
    url: "https://hierrosa.github.io/hierrosa.github.io.-/"
  },

  // ── INTERVENTION 1 ─────────────────────────────────────────
  intervention1: {
    number: 1,
    title: "Intervention 1",
    categories: [],
    status: "",
    hypothesis: "La Forza ti guidera.",
    design: {
      concept: "Impossibile vedere il futuro e.",
      steps: [
        "La fiducia porta alla forza.",
        "Ogni essere vivente e luminoso con la Forza.",
        "Il destino di un Jedi non e quello di essere un guerriero."
      ]
    },
    results: {
      modeling: "La Forza scorre attraverso ogni cosa.",
      measurement: "Sentire la Forza, devi.",
      realEffect: "La pace viene dalla consapevolezza."
    }
  },

  // ── INTERVENTION 2 ─────────────────────────────────────────
  intervention2: {
    number: 2,
    title: "Intervention 2",
    categories: [],
    status: "",
    hypothesis: "La pazienza tu devi avere, giovane Jedi.",
    design: {
      concept: "Il lato oscuro corrompe chi lo usa.",
      steps: [
        "La saggezza viene dall'esperienza.",
        "Il coraggio non e l'assenza di paura.",
        "La verita dipende dal punto di vista."
      ]
    },
    results: {
      modeling: "La Forza unisce tutte le cose.",
      measurement: "L'equilibrio e la chiave.",
      realEffect: "La luce e l'ombra coesistono."
    }
  },

  // ── INTERVENTION 3 ─────────────────────────────────────────
  intervention3: {
    number: 3,
    title: "Intervention 3",
    categories: [],
    status: "",
    hypothesis: "Senza la Forza, nulla esiste.",
    design: {
      concept: "La connessione e tutto.",
      steps: [
        "Ogni azione ha conseguenze.",
        "La scelta define il destino.",
        "L'armonia nasce dall'accettazione."
      ]
    },
    results: {
      modeling: "La Forza trascende il tempo.",
      measurement: "L'unione porta la forza.",
      realEffect: "La pace interiore riflette quella esteriore."
    }
  },

  // ── GOLDNUGGETS ────────────────────────────────────────────
  goldNuggets: {
    title: "Goldnuggets",
    items: [
      { title: "", text: "La saggezza viene dall'esperienza." },
      { title: "", text: "Il coraggio non e l'assenza di paura." },
      { title: "", text: "La verita dipende dal punto di vista." },
      { title: "", text: "La Forza unisce tutte le cose." }
    ]
  },

  // ── TEAMPROZESS ────────────────────────────────────────────
  teamProcess: {
    title: "Teamprozess",
    phases: [
      { phase: "", activities: ["La fiducia porta alla forza."] },
      { phase: "", activities: ["Ogni essere vivente e luminoso con la Forza."] },
      { phase: "", activities: ["Il destino di un Jedi non e quello di essere un guerriero."] },
      { phase: "", activities: ["La pace viene dalla consapevolezza."] }
    ]
  },

  // ── SCHLUSSFORMULIERUNG ────────────────────────────────────
  conclusion: {
    title: "Schlussformulierung",
    mainStatement: "La saggezza viene dall'esperienza.",
    keyLearnings: [
      "Il coraggio non e l'assenza di paura.",
      "La verita dipende dal punto di vista.",
      "La Forza unisce tutte le cose."
    ]
  },

// ── 3D MODEL VIEWER ─────────────────────────────────────────
modelViewer: {
  title: "3D-Modelle",

  models: [

      {
          name: "Modell 1",
          file: "models/original.glb",
          description: "Beschreibung des ersten Modells."
      },

      {
          name: "Modell 2",
          file: "models/modell2.glb",
          description: "Beschreibung des zweiten Modells."
      },

      {
          name: "Modell 3",
          file: "models/modell3.glb",
          description: "Beschreibung des dritten Modells."
      }

  ]
},

  // ── AUSBLICK ───────────────────────────────────────────────
  outlook: {
    title: "Ausblick",
    nextSteps: [
      "La Forza ti guidera.",
      "La pazienza tu devi avere, giovane Jedi.",
      "Solo cio che porti dentro te, conta."
    ],
    thanks: "La Forza e forte nella mia famiglia.",
    contact: "Team Raum – SS2026 – BHT"
  }

};

// ═══════════════════════════════════════════════════════════════
//  ENDE DER DATEN – Ab hier nichts aendern!
// ═══════════════════════════════════════════════════════════════
