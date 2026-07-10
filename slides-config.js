// ═══════════════════════════════════════════════════════════════
//  SLIDES-CONFIG – Team Raum
// ═══════════════════════════════════════════════════════════════
//
//  ╔═══════════════════════════════════════════════════════════╗
//  ║  SO FÜGST DU EINE NEUE FOLIE HINZU:                        ║
//  ╠═══════════════════════════════════════════════════════════╣
//  ║  1. Kopiere ein bestehendes Objekt aus der Liste unten,    ║
//  ║     das das gewünschte Layout hat (z.B. "example-b" für    ║
//  ║     "großes Bild + Text + 3 kleine Bilder unten").         ║
//  ║  2. Füge die Kopie an der Stelle ein, an der die Folie     ║
//  ║     erscheinen soll (Reihenfolge in der Liste = Reihen-    ║
//  ║     folge in der Präsentation).                            ║
//  ║  3. Ändere die Inhalte (title, text, media, ...).          ║
//  ║  4. Fertig – nichts in index.html oder presentation.js     ║
//  ║     muss angefasst werden!                                 ║
//  ╚═══════════════════════════════════════════════════════════╝
//
//  VERFÜGBARE LAYOUTS (layout: "...")
//  ───────────────────────────────────────────────────────────────
//  title-slide             – Titelfolie
//  icon-card-row           – 3 Grundsatz-Kacheln mit Icon
//  bullet-list             – einfache Aufzählungsliste
//  quote-highlight         – große Zitat-/Frage-Folie
//  numbered-card-row       – 3 nummerierte Hypothesen-Kacheln
//  color-legend-list       – Farbige Kategorie-Legende
//  media-card-grid         – Karten-Raster (Bild+Status+Kategorie)
//  embedded-website        – Website live im iframe
//  text-image-thumbs-2     – Text li. | Bild re. | 2 Thumbs
//  image-text-thumbs-3     – Bild li.  | Text re. | 3 Thumbs (unten, volle Breite)
//  text-image-thumbs-1     – Text li. | Bild re. (hoch) | 1 Thumb
//  dual-text-boxes         – Text li. | Text mitte | 3 Boxen re.
//  image-text-image        – Bild | Text | Bild
//  media-grid-2x2          – 2×2 Raster (Bild, 2×3D-Modell, GIF)
//  images-row-text-below   – 3 Bilder oben, Text unten
//  section-divider         – Große Kapitelnummer + Titel
//  badge-title-tags        – Nummer-Badge + Titel + Kategorie-Tags
//  hypothesis-quote        – Hebelhypothese-Zitat
//  concept-steps           – Konzept + Nummerierte Schritte
//  result-cards-3          – 3 Ergebnis-Karten
//  text-card-grid-2x2      – Karten-Raster mit Titel+Text
//  phase-cards-4           – 4 Phasen-Karten
//  statement-list          – Statement + Liste der Learnings
//  model-viewer-3d         – Interaktiver 3D-Modell-Viewer
//  video-player            – Video-Player
//  image-gallery           – Bildergalerie mit Lightbox
//  closing-list            – Ausblick + Dank + Kontakt
//
//  MEHRSPRACHIGKEIT (Standard- vs. leichte Sprache)
//  ───────────────────────────────────────────────────────────────
//  Bei jedem TEXT-Feld kannst du statt eines einfachen Strings
//  auch schreiben:
//      { standard: "Normaler Text", simple: "Einfacher Text" }
//  Pfeiltaste hoch/runter schaltet dann zwischen beiden um.
//  Wenn du nur einen String angibst, wird er in BEIDEN Ebenen
//  gleich angezeigt (praktisch für Bilder, Zahlen, Farben, Links
//  – die bleiben ja ohnehin gleich).
//
// ═══════════════════════════════════════════════════════════════

const SLIDES = [

  // ── 01: TITEL ────────────────────────────────────────────────
  {
    layout: "title-slide",
    title: { standard: "RÄUME FÜR JEDEN", simple: "RAEUME FUER JEDEN" },
    subtitle: "– inklusiv, immersiv, interaktiv",
    meta: {
      description: { standard: "Che la forza sia con te.", simple: "La Forza e forte nella mia famiglia." },
      semester: "SS2026",
      course: "BHT – Transformation Design & Print"
    }
  },

  // ── 02: TEAM RAUM – GRUNDSÄTZE ───────────────────────────────
  {
    layout: "icon-card-row",
    title: "Team Raum – unsere (Gestaltungs-)Grundsätze",
    items: [
      { icon: "immersiv",   title: "Immersiv",   text: { standard: "Fai o non fare. Non c'è provare.", simple: "Ho un cattivo presentimento su questo." } },
      { icon: "inklusiv",   title: "Inklusiv",   text: { standard: "La grandezza non si misura dalla statura.", simple: "Mai sottovalutare un Wookiee." } },
      { icon: "interaktiv", title: "Interaktiv", text: { standard: "Concentrati sul momento. Senti, non pensare.", simple: "La tua occhiata puo ingannarti." } }
    ]
  },

  // ── 03: RÜCKBLICK ────────────────────────────────────────────
  {
    layout: "bullet-list",
    title: "Rückblick",
    items: {
      standard: [
        "In una galassia lontana, lontana...",
        "Aiutami, Obi-Wan Kenobi. Sei la mia unica speranza.",
        "La paura conduce alla rabbia, la rabbia conduce all'odio.",
        "Il futuro è sempre in movimento."
      ],
      simple: [
        "Molti dei veri credono che la verita dipenda dal proprio punto di vista.",
        "Quando novecento anni avrai, cosi bene non starai.",
        "Guerra non fa uno grande.",
        "La Forza e una energia che crea la vita."
      ]
    }
  },

  // ── 04: PARTNER (Layout B: Bild li. | Text re. | 3 Thumbs) ──
  {
    layout: "image-text-thumbs-3",
    number: "",
    title: "Partner",
    text: {
      standard: "<h3></h3><p class=\"partner-location\"></p><p>Le vie della Forza sono misteriose.</p>",
      simple: "<h3></h3><p class=\"partner-location\"></p><p>La calma, la pace passiva.</p>"
    },
    media: "images/partner-hero.jpg",
    thumbs: ["images/partner-thumb1.jpg", "images/partner-thumb2.jpg", "images/partner-thumb3.jpg"]
  },

  // ── 05: AUSGANGSSITUATION ────────────────────────────────────
  {
    layout: "bullet-list",
    title: "Ausgangssituation",
    items: {
      standard: [
        "È una trappola!",
        "Il lato oscuro della Forza è difficile da resistere.",
        "Non c'è emozione, c'è pace.",
        "La morte è una parte naturale della vita."
      ],
      simple: [
        "La paura e il sentiero verso il lato oscuro.",
        "La rabbia conduce all'odio.",
        "L'odio conduce alla sofferenza.",
        "Senza il lato oscuro, non possiamo percepire la luce."
      ]
    }
  },

  // ── 06: FORSCHUNGSFRAGE ──────────────────────────────────────
  {
    layout: "quote-highlight",
    title: "Forschungsfrage",
    question: { standard: "Cerca dentro te stesso, e troverai ciò che cerchi.", simple: "Solo cio che porti dentro te, conta." }
  },

  // ── 07: 3 HYPOTHESEN ─────────────────────────────────────────
  {
    layout: "numbered-card-row",
    title: "3 Hypothesen",
    items: [
      { number: "1", title: "", text: { standard: "Io sono tuo padre.", simple: "Un Jedi deve avere il profondo impegno." } },
      { number: "2", title: "", text: { standard: "La pazienza è una virtù dei Jedi.", simple: "La vita crea la Forza, rendendola crescere." } },
      { number: "3", title: "", text: { standard: "Un Jedi usa la Forza per la conoscenza e la difesa, mai per l'attacco.", simple: "Il lato oscuro nuvola ogni cosa." } }
    ]
  },

  // ── 08: INTERVENTIONSMATRIX ──────────────────────────────────
  {
    layout: "color-legend-list",
    title: "Interventionsmatrix",
    categories: [
      { name: "Irritation",            color: "#ec7d23", description: "" },
      { name: "Verstärkung",           color: "#b1dbe3", description: "" },
      { name: "Zuspitzung",            color: "#ca5482", description: "" },
      { name: "Support",               color: "#b1bfe0", description: "" },
      { name: "Physische Erfahrung",   color: "#384f9e", description: "" }
    ]
  },

  // ── 09: KURZÜBERSICHT ────────────────────────────────────────
  {
    layout: "media-card-grid",
    title: "Kurzübersicht aller Interventionen",
    items: [
      { name: "", status: "", categories: [], image: "" },
      { name: "", status: "", categories: [], image: "" },
      { name: "", status: "", categories: [], image: "" },
      { name: "", status: "", categories: [], image: "" }
    ]
  },

  // ── 09a: LIVE-DEMO ───────────────────────────────────────────
  {
    layout: "embedded-website",
    _id: "inception-1",
    title: "Kurzübersicht aller Interventionen",
    url: "https://hierrosa.github.io/hierrosa.github.io.-/"
  },

  // ── BEISPIEL A ───────────────────────────────────────────────
  {
    layout: "text-image-thumbs-2",
    number: "01",
    title: "Intervention 1",
    text: "<ul><li>Erste Erkenntnis aus der Recherche</li><li>Zweiter wichtiger Punkt</li><li>Dritter Aspekt der Intervention</li><li>Vierter Gedanke zur Umsetzung</li></ul>",
    media: "images/beispiel1.jpg",
    thumbs: ["images/thumb1a.jpg", "images/thumb1b.jpg"]
  },

  // ── BEISPIEL B ───────────────────────────────────────────────
  {
    layout: "image-text-thumbs-3",
    number: "01",
    title: "Intervention 1",
    text: "<ul><li>Analyse der Ausgangslage</li><li>Identifikation der Hebel</li><li>Erste Modellierung</li></ul>",
    media: "images/beispiel2.jpg",
    thumbs: ["images/thumb2a.jpg", "images/thumb2b.jpg", "images/thumb2c.jpg"]
  },

  // ── BEISPIEL C ───────────────────────────────────────────────
  {
    layout: "text-image-thumbs-1",
    number: "01",
    title: "Intervention 1",
    text: "<ul><li>Kontext der Intervention</li><li>Beteiligte Akteure</li><li>Zeitlicher Rahmen</li><li>Räumliche Gegebenheiten</li></ul>",
    media: "images/beispiel3.jpg",
    thumbs: ["images/thumb3a.jpg"]
  },

  // ── BEISPIEL D ───────────────────────────────────────────────
  {
    layout: "dual-text-boxes",
    number: "01",
    title: "Intervention 1",
    text: "<ul><li>Problemstellung</li><li>Forschungslücke</li><li>Zielsetzung</li></ul>",
    text2: "<ul><li>Methode A</li><li>Methode B</li><li>Methode C</li></ul>",
    boxes: ["Ergebnis 1", "Ergebnis 2", "Ergebnis 3"]
  },

  // ── DANNENMANN 1: Bild | Text | Bild ────────────────────────
  {
    layout: "image-text-image",
    title: "Dannenmann",
    content: {
      standard: "<p>La Forza sia con te.</p><p>Io sono tuo padre.</p><p>Fare o non fare. Non c'è provare.</p><p>Aiutami, Obi-Wan Kenobi. Sei la mia sola speranza.</p>",
      simple:   "<p>La Forza sia con te.</p><p>Io sono tuo padre.</p><p>Fare o non fare. Non c'è provare.</p><p>Aiutami, Obi-Wan Kenobi. Sei la mia sola speranza.</p>"
    },
    leftImage: ["images/kampf1.jpeg","images/kampf2.jpeg"],
    rightImage: ["images/z1.jpg","images/z2.jpg"],
  },

  // ── DANNENMANN 2: 2×2 Grid ───────────────────────────────────
  {
    layout: "media-grid-2x2",
    _id: "dannenmann-2",
    title: "Dannenmann",
    image: "images/original.jpeg",
    models: ["models/original.glb", "models/cut.glb"],
    gif: "images/3d.gif"
  },

  // ── DANNENMANN 3: Bilder oben, Text unten ───────────────────
  {
    layout: "images-row-text-below",
    title: "Dannenmann",
    images: ["images/d1.jpeg", "images/d2.jpeg", "images/d3.jpeg"],
    text: "<p>Hier steht der Begleittext zu den Bildern. Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>"
  },

  // ── 10: SECTION – IHRE INTERVENTIONEN ───────────────────────
  {
    layout: "section-divider",
    number: "01",
    title: "Ihre Interventionen"
  },

  // ── INTERVENTION 1 ───────────────────────────────────────────
  {
    layout: "badge-title-tags",
    badge: "01",
    title: "Intervention 1",
    categories: []
  },
  {
    layout: "hypothesis-quote",
    hypothesis: { standard: "La forza sarà con te, sempre.", simple: "La Forza ti guidera." }
  },
  {
    layout: "concept-steps",
    concept: { standard: "Le tue armi, non ti serviranno.", simple: "Impossibile vedere il futuro e." },
    steps: {
      standard: [
        "La speranza è come il sole.",
        "Se credi solo quando la vedi, non sopravvivi alla notte.",
        "Ogni generazione ha il suo eroe."
      ],
      simple: [
        "La fiducia porta alla forza.",
        "Ogni essere vivente e luminoso con la Forza.",
        "Il destino di un Jedi non e quello di essere un guerriero."
      ]
    }
  },
  {
    layout: "result-cards-3",
    resultsHeading: "Modellierung, Validierung und Ergebnis",
    measurementLabel: "Validierung",
    effectLabel: "Ergebnis",
    modeling: { standard: "Difficile vedere il lato oscuro è.", simple: "La Forza scorre attraverso ogni cosa." },
    measurement: { standard: "La Forza vive in ogni creatura vivente.", simple: "Sentire la Forza, devi." },
    realEffect: { standard: "L'odio non conduce da nessuna parte.", simple: "La pace viene dalla consapevolezza." }
  },

  // ── INTERVENTION 2 ───────────────────────────────────────────
  {
    layout: "badge-title-tags",
    badge: "02",
    title: "Intervention 2",
    categories: []
  },
  {
    layout: "hypothesis-quote",
    hypothesis: { standard: "Io sono il Senato.", simple: "La pazienza tu devi avere, giovane Jedi." }
  },
  {
    layout: "concept-steps",
    concept: { standard: "Solo un apprendista di Sith tu sei.", simple: "Il lato oscuro corrompe chi lo usa." },
    steps: {
      standard: [
        "La vera ricompensa è il viaggio stesso.",
        "La forza ti accompagnerà sempre.",
        "Concentrati sul momento."
      ],
      simple: [
        "La saggezza viene dall'esperienza.",
        "Il coraggio non e l'assenza di paura.",
        "La verita dipende dal punto di vista."
      ]
    }
  },
  {
    layout: "result-cards-3",
    resultsHeading: "Modellierung, Messen und reale Wirkung",
    measurementLabel: "Messen",
    effectLabel: "Reale Wirkung",
    modeling: { standard: "Le vie della Forza sono infinite.", simple: "La Forza unisce tutte le cose." },
    measurement: { standard: "Cerca dentro te stesso.", simple: "L'equilibrio e la chiave." },
    realEffect: { standard: "Il futuro è in movimento, sempre.", simple: "La luce e l'ombra coesistono." }
  },

  // ── INTERVENTION 3 ───────────────────────────────────────────
  {
    layout: "badge-title-tags",
    badge: "03",
    title: "Intervention 3",
    categories: []
  },
  {
    layout: "hypothesis-quote",
    hypothesis: { standard: "Che la forza sia con te.", simple: "Senza la Forza, nulla esiste." }
  },
  {
    layout: "concept-steps",
    concept: { standard: "Non c'è emozione, c'è pace.", simple: "La connessione e tutto." },
    steps: {
      standard: [
        "Non c'è ignoranza, c'è conoscenza.",
        "Non c'è passione, c'è serenità.",
        "Non c'è caos, c'è armonia."
      ],
      simple: [
        "Ogni azione ha conseguenze.",
        "La scelta define il destino.",
        "L'armonia nasce dall'accettazione."
      ]
    }
  },
  {
    layout: "result-cards-3",
    resultsHeading: "Modellierung, Messen und reale Wirkung",
    measurementLabel: "Messen",
    effectLabel: "Reale Wirkung",
    modeling: { standard: "Non c'è morte, c'è la Forza.", simple: "La Forza trascende il tempo." },
    measurement: { standard: "La pazienza deve essere la tua virtù principale.", simple: "L'unione porta la forza." },
    realEffect: { standard: "Un Jedi usa la Forza per la conoscenza e la difesa.", simple: "La pace interiore riflette quella esteriore." }
  },

  // ── GOLDNUGGETS ──────────────────────────────────────────────
  {
    layout: "text-card-grid-2x2",
    title: "Goldnuggets",
    items: [
      { title: "", text: { standard: "Fai o non fare. Non c'è provare.", simple: "La saggezza viene dall'esperienza." } },
      { title: "", text: { standard: "La grandezza non si misura dalla statura.", simple: "Il coraggio non e l'assenza di paura." } },
      { title: "", text: { standard: "La forza sarà con te, sempre.", simple: "La verita dipende dal punto di vista." } },
      { title: "", text: { standard: "Il futuro è sempre in movimento.", simple: "La Forza unisce tutte le cose." } }
    ]
  },

  // ── TEAMPROZESS ──────────────────────────────────────────────
  {
    layout: "phase-cards-4",
    title: "Teamprozess",
    phases: [
      { phase: "", activities: { standard: ["In una galassia lontana, lontana..."], simple: ["La fiducia porta alla forza."] } },
      { phase: "", activities: { standard: ["Aiutami, Obi-Wan Kenobi."], simple: ["Ogni essere vivente e luminoso con la Forza."] } },
      { phase: "", activities: { standard: ["È una trappola!"], simple: ["Il destino di un Jedi non e quello di essere un guerriero."] } },
      { phase: "", activities: { standard: ["Che la forza sia con te."], simple: ["La pace viene dalla consapevolezza."] } }
    ]
  },

  // ── SCHLUSSFORMULIERUNG ──────────────────────────────────────
  {
    layout: "statement-list",
    title: "Schlussformulierung",
    mainStatement: { standard: "La forza sarà con te, sempre.", simple: "La saggezza viene dall'esperienza." },
    keyLearnings: {
      standard: [
        "Fai o non fare. Non c'è provare.",
        "La grandezza non si misura dalla statura.",
        "Il futuro è sempre in movimento."
      ],
      simple: [
        "Il coraggio non e l'assenza di paura.",
        "La verita dipende dal punto di vista.",
        "La Forza unisce tutte le cose."
      ]
    }
  },

  // ── 3D-MODELLE ───────────────────────────────────────────────
  {
    layout: "model-viewer-3d",
    _id: "model-viewer-1",
    title: "3D-Modelle",
    models: [
      { name: "Modell 1", file: "models/original.glb", description: "Beschreibung des ersten Modells." },
      { name: "Modell 2", file: "models/modell2.glb",  description: "Beschreibung des zweiten Modells." },
      { name: "Modell 3", file: "models/modell3.glb",  description: "Beschreibung des dritten Modells." }
    ]
  },

  // ── VIDEO ────────────────────────────────────────────────────
  {
    layout: "video-player",
    title: "Video",
    description: "Beschreibung des Videos.",
    src: "videos/test.mp4",
    poster: ""
  },

  // ── BILDERGALERIE ────────────────────────────────────────────
  {
    layout: "image-gallery",
    _id: "gallery-1",
    title: "Bildergalerie",
    description: "Klicke auf ein Bild für die Großansicht.",
    images: [
      { src: "images/galerie/bild1.jpeg", alt: "Beschreibung 1" },
      { src: "images/galerie/bild2.jpeg", alt: "Beschreibung 2" },
      { src: "images/galerie/bild3.jpeg", alt: "Beschreibung 3" },
      { src: "images/galerie/bild4.jpeg", alt: "Beschreibung 4" }
    ]
  },

  // ── 26: AUSBLICK ─────────────────────────────────────────────
  {
    layout: "closing-list",
    title: "Ausblick",
    nextSteps: {
      standard: [
        "Cerca dentro te stesso, e troverai ciò che cerchi.",
        "Le vie della Forza sono misteriose.",
        "La forza ti accompagnerà sempre."
      ],
      simple: [
        "La Forza ti guidera.",
        "La pazienza tu devi avere, giovane Jedi.",
        "Solo cio che porti dentro te, conta."
      ]
    },
    thanks: { standard: "Che la forza sia con te.", simple: "La Forza e forte nella mia famiglia." },
    contact: "Team Raum – SS2026 – BHT"
  }

];
