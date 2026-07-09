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

example1: {
    number: "01",
    title: "Intervention 1",
    text: "<ul><li>Erste Erkenntnis aus der Recherche</li><li>Zweiter wichtiger Punkt</li><li>Dritter Aspekt der Intervention</li><li>Vierter Gedanke zur Umsetzung</li></ul>",
    media: "images/beispiel1.jpg",
    thumbs: ["images/thumb1a.jpg", "images/thumb1b.jpg"]
},
example2: {
    number: "01",
    title: "Intervention 1",
    text: "<ul><li>Analyse der Ausgangslage</li><li>Identifikation der Hebel</li><li>Erste Modellierung</li></ul>",
    media: "images/beispiel2.jpg",
    thumbs: ["images/thumb2a.jpg", "images/thumb2b.jpg", "images/thumb2c.jpg"]
},
example3: {
    number: "01",
    title: "Intervention 1",
    text: "<ul><li>Kontext der Intervention</li><li>Beteiligte Akteure</li><li>Zeitlicher Rahmen</li><li>Räumliche Gegebenheiten</li></ul>",
    media: "images/beispiel3.jpg",
    thumbs: ["images/thumb3a.jpg"]
},
example4: {
    number: "01",
    title: "Intervention 1",
    text: "<ul><li>Problemstellung</li><li>Forschungslücke</li><li>Zielsetzung</li></ul>",
    text2: "<ul><li>Methode A</li><li>Methode B</li><li>Methode C</li></ul>",
    boxes: ["Ergebnis 1", "Ergebnis 2", "Ergebnis 3"]
},

 dannenmann1: {
    title: "Dannenmann",
    content: "<p>La Forza sia con te.</p><p>Io sono tuo padre.</p><p>Fare o non fare. Non c'è provare.</p><p>Aiutami, Obi-Wan Kenobi. Sei la mia sola speranza.</p>",
    leftImage: "",
    rightImage: ""
},
dannenmann2: {
    title: "Dannenmann",
    image: "",
    models: ["", "", ""]
},
dannenmann3: {
    title: "Dannenmann",
    images: ["", "", ""],
    text: "<p>Hier steht der Begleittext zu den Bildern. Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>"
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

  // ── VIDEO PLAYER (NEU) ─────────────────────────────────────
  // Gleiche Struktur wie in presentation-data.js
  // Nur die Texte koennen hier in leichter Sprache stehen
  video: {
    title: "Video",
    src: "videos/test.mp4",
    description: "Beschreibung des Videos.",
    poster: ""
  },

  // ── BILDER-GALERIE (NEU) ────────────────────────────────────
  // Gleiche Struktur wie in presentation-data.js
  gallery: {
    title: "Bildergalerie",
    description: "Klicke auf ein Bild fuer die Grossansicht.",
    images: [
      { src: "images/galerie/bild1.jpeg", alt: "Beschreibung 1" },
      { src: "images/galerie/bild2.jpeg", alt: "Beschreibung 2" },
      { src: "images/galerie/bild3.jpeg", alt: "Beschreibung 3" },
      { src: "images/galerie/bild4.jpeg", alt: "Beschreibung 4" }
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
