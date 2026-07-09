// ═══════════════════════════════════════════════════════════════
//  PRÄSENTATIONSDATEN – Team Raum
// ═══════════════════════════════════════════════════════════════
//
//  ╔═══════════════════════════════════════════════════════════╗
//  ║  ANLEITUNG FÜR ALLE (besonders Noobs)                      ║
//  ╠═══════════════════════════════════════════════════════════╣
//  ║                                                           ║
//  ║  1. Texte stehen immer zwischen Anführungszeichen "..."   ║
//  ║                                                           ║
//  ║  2. Überschriften (title:) NICHT ändern!                   ║
//  ║                                                           ║
//  ║  3. Die italienischen Star-Wars-Zitate sind PLATZHALTER.   ║
//  ║     Ersetzt sie durch eure echten Inhalte.                 ║
//  ║                                                           ║
//  ║  4. Listen sehen so aus:                                  ║
//  ║     items: [                                              ║
//  ║       "Erster Punkt",                                     ║
//  ║       "Zweiter Punkt",                                   ║
//  ║       "Dritter Punkt"        ← letztes Element: KEIN Komma║
//  ║     ]                                                     ║
//  ║                                                           ║
//  ║  5. Bilder: Pfad eintragen, z.B.                          ║
//  ║     image: "images/mein-bild.jpg"                        ║
//  ║                                                           ║
//  ║  6. Nach dem Speichern: index.html im Browser neu laden.  ║
//  ║                                                           ║
//  ╚═══════════════════════════════════════════════════════════╝
//
// ═══════════════════════════════════════════════════════════════

const PRESENTATION_DATA = {

  // ── TITELFOLIE ──────────────────────────────────────────────
  title: {
    main: "RÄUME FÜR JEDEN",
    subtitle: "– inklusiv, immersiv, interaktiv",
    description: "Che la forza sia con te.",
    semester: "SS2026",
    course: "BHT – Transformation Design & Print"
  },

  // ── TEAM RAUM – GRUNDSÄTZE ──────────────────────────────────
  principles: {
    title: "Team Raum – unsere (Gestaltungs-)Grundsätze",
    items: [
      { icon: "immersiv",   title: "Immersiv",   text: "Fai o non fare. Non c'è provare." },
      { icon: "inklusiv",   title: "Inklusiv",   text: "La grandezza non si misura dalla statura." },
      { icon: "interaktiv", title: "Interaktiv", text: "Concentrati sul momento. Senti, non pensare." }
    ]
  },

  // ── RÜCKBLICK ──────────────────────────────────────────────
  flashback: {
    title: "Rückblick",
    items: [
      "In una galassia lontana, lontana...",
      "Aiutami, Obi-Wan Kenobi. Sei la mia unica speranza.",
      "La paura conduce alla rabbia, la rabbia conduce all'odio.",
      "Il futuro è sempre in movimento."
    ]
  },

  // ── PARTNER ────────────────────────────────────────────────
  partner: {
    title: "Partner",
    name: "",
    location: "",
    description: "Le vie della Forza sono misteriose."
  },

  // ── AUSGANGSSITUATION ──────────────────────────────────────
  situation: {
    title: "Ausgangssituation",
    points: [
      "È una trappola!",
      "Il lato oscuro della Forza è difficile da resistere.",
      "Non c'è emozione, c'è pace.",
      "La morte è una parte naturale della vita."
    ]
  },

  // ── FORSCHUNGSFRAGE ────────────────────────────────────────
  researchQuestion: {
    title: "Forschungsfrage",
    question: "Cerca dentro te stesso, e troverai ciò che cerchi."
  },

  // ── 3 HYPOTHESEN ──────────────────────────────────────────
  hypotheses: {
    title: "3 Hypothesen",
    items: [
      { number: "1", title: "", text: "Io sono tuo padre." },
      { number: "2", title: "", text: "La pazienza è una virtù dei Jedi." },
      { number: "3", title: "", text: "Un Jedi usa la Forza per la conoscenza e la difesa, mai per l'attacco." }
    ]
  },

  // ── INTERVENTIONSMATRIX ────────────────────────────────────
  matrix: {
    title: "Interventionsmatrix",
    categories: [
      { name: "Irritation",            color: "#ec7d23", description: "" },
      { name: "Verstärkung",           color: "#b1dbe3", description: "" },
      { name: "Zuspitzung",            color: "#ca5482", description: "" },
      { name: "Support",               color: "#b1bfe0", description: "" },
      { name: "Physische Erfahrung",   color: "#384f9e", description: "" }
    ]
  },

  // ── KURZÜBERSICHT ──────────────────────────────────────────
  interventionsOverview: {
    title: "Kurzübersicht aller Interventionen",
    items: [
      { name: "", status: "", categories: [], image: "" },
      { name: "", status: "", categories: [], image: "" },
      { name: "", status: "", categories: [], image: "" },
      { name: "", status: "", categories: [], image: "" }
    ]
  },

  // ── LIVE-DEMO (INCEPTION) ──────────────────────────────────
  inception: {
    title: "Kurzübersicht aller Interventionen",
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

  // ── INTERVENTION 1 ─────────────────────────────────────────
  intervention1: {
    number: 1,
    title: "Intervention 1",
    categories: [],
    status: "",
    hypothesis: "La forza sarà con te, sempre.",
    design: {
      concept: "Le tue armi, non ti serviranno.",
      steps: [
        "La speranza è come il sole.",
        "Se credi solo quando la vedi, non sopravvivi alla notte.",
        "Ogni generazione ha il suo eroe."
      ]
    },
    results: {
      modeling: "Difficile vedere il lato oscuro è.",
      measurement: "La Forza vive in ogni creatura vivente.",
      realEffect: "L'odio non conduce da nessuna parte."
    }
  },

  // ── INTERVENTION 2 ─────────────────────────────────────────
  intervention2: {
    number: 2,
    title: "Intervention 2",
    categories: [],
    status: "",
    hypothesis: "Io sono il Senato.",
    design: {
      concept: "Solo un apprendista di Sith tu sei.",
      steps: [
        "La vera ricompensa è il viaggio stesso.",
        "La forza ti accompagnerà sempre.",
        "Concentrati sul momento."
      ]
    },
    results: {
      modeling: "Le vie della Forza sono infinite.",
      measurement: "Cerca dentro te stesso.",
      realEffect: "Il futuro è in movimento, sempre."
    }
  },

  // ── INTERVENTION 3 ─────────────────────────────────────────
  intervention3: {
    number: 3,
    title: "Intervention 3",
    categories: [],
    status: "",
    hypothesis: "Che la forza sia con te.",
    design: {
      concept: "Non c'è emozione, c'è pace.",
      steps: [
        "Non c'è ignoranza, c'è conoscenza.",
        "Non c'è passione, c'è serenità.",
        "Non c'è caos, c'è armonia."
      ]
    },
    results: {
      modeling: "Non c'è morte, c'è la Forza.",
      measurement: "La pazienza deve essere la tua virtù principale.",
      realEffect: "Un Jedi usa la Forza per la conoscenza e la difesa."
    }
  },

  // ── GOLDNUGGETS ────────────────────────────────────────────
  goldNuggets: {
    title: "Goldnuggets",
    items: [
      { title: "", text: "Fai o non fare. Non c'è provare." },
      { title: "", text: "La grandezza non si misura dalla statura." },
      { title: "", text: "La forza sarà con te, sempre." },
      { title: "", text: "Il futuro è sempre in movimento." }
    ]
  },

  // ── TEAMPROZESS ────────────────────────────────────────────
  teamProcess: {
    title: "Teamprozess",
    phases: [
      { phase: "", activities: ["In una galassia lontana, lontana..."] },
      { phase: "", activities: ["Aiutami, Obi-Wan Kenobi."] },
      { phase: "", activities: ["È una trappola!"] },
      { phase: "", activities: ["Che la forza sia con te."] }
    ]
  },

  // ── SCHLUSSFORMULIERUNG ────────────────────────────────────
  conclusion: {
    title: "Schlussformulierung",
    mainStatement: "La forza sarà con te, sempre.",
    keyLearnings: [
      "Fai o non fare. Non c'è provare.",
      "La grandezza non si misura dalla statura.",
      "Il futuro è sempre in movimento."
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

  // ── VIDEO PLAYER ───────────────────────────────────────────
  video: {
    title: "Video",
    src: "videos/test.mp4",
    description: "Beschreibung des Videos.",
    poster: ""
  },

  // ── BILDER-GALERIE (NEU) ────────────────────────────────────
  // So trägst du deine Bilder ein:
  //   title:       Überschrift auf der Folie
  //   description: Text unter der Überschrift
  //   images:      Liste von Bildern
  //     src: Pfad zum Bild (z.B. "images/galerie/foto1.jpg")
  //     alt: Beschreibungstext (für Barrierefreiheit)
  gallery: {
    title: "Bildergalerie",
    description: "Klicke auf ein Bild für die Großansicht.",
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
      "Cerca dentro te stesso, e troverai ciò che cerchi.",
      "Le vie della Forza sono misteriose.",
      "La forza ti accompagnerà sempre."
    ],
    thanks: "Che la forza sia con te.",
    contact: "Team Raum – SS2026 – BHT"
  }

};

// ═══════════════════════════════════════════════════════════════
//  ENDE DER DATEN – Ab hier nichts ändern!
// ═══════════════════════════════════════════════════════════════

function getStatusColor(status) {
  var colors = {
    "in umsetzung": "#6a94ff",
    "pausiert": "#f8cb00",
    "abgeschlossen": "#afef73",
    "wird nicht umgesetzt": "#FF5A2F"
  };
  return colors[status] || "#999";
}

function getCategoryColor(category) {
  var colors = {
    "Irritation": "#ec7d23",
    "Verstärkung": "#b1dbe3",
    "Zuspitzung": "#ca5482",
    "Support": "#b1bfe0",
    "Physische Erfahrung": "#384f9e"
  };
  return colors[category] || "#999";
}
