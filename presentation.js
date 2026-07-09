/* ═══════════════════════════════════════════════════════════════
   PRESENTATION.JS – Team Raum
   Reveal.js + Slide-Parallax + stilles Layer-Switching
   Pfeil hoch → leichte Sprache, Pfeil runter → Standard
   + Inception: Live-Website im iframe auf Slide 9a
   ═══════════════════════════════════════════════════════════════ */

// ── PARALLAX CONFIG ──────────────────────────────────────────
const PARALLAX_CONFIGS = [
  { x:  15, y: -10 },
  { x: -12, y:   8 },
  { x:   8, y:  12 },
  { x: -10, y:  -6 },
  { x:  20, y:  18 },
  { x:  -6, y: -12 }
];

// ── LAYER STATE ─────────────────────────────────────────────
let currentLayer = 'standard';
let D = PRESENTATION_DATA;

// ── REVEAL.JS INITIALISIERUNG ────────────────────────────────
Reveal.initialize({
  controls: false,
  progress: false,
  slideNumber: false,
  hash: false,
  overview: true,
  center: false,
  transition: 'slide',
  transitionSpeed: 'slow',
  backgroundTransition: 'none',
  width: 1600,
  height: 900,
  margin: 0,
  minScale: 0.2,
  maxScale: 2.0
});

// ── DOM ──────────────────────────────────────────────────────
const shapes = document.querySelectorAll('.hero-bg svg .shape');

// ── CONTENT RENDERING ────────────────────────────────────────
function renderContent() {

  // TITEL
  document.getElementById('title-main').textContent = D.title.main;
  document.getElementById('title-sub').textContent = D.title.subtitle;
  document.getElementById('title-meta').textContent =
    D.title.description + '  ·  ' + D.title.semester + '  ·  ' + D.title.course;

  // PRINCIPLES
  document.getElementById('principles-title').textContent = D.principles.title;
  document.getElementById('principles-grid').innerHTML = D.principles.items.map(item => {
    const colors = { immersiv: 'var(--hero-orange)', inklusiv: 'var(--hero-lightblue)', interaktiv: 'var(--hero-pink)' };
    const icons = { immersiv: '◉', inklusiv: '✦', interaktiv: '◈' };
    return `
      <div class="principle-card">
        <div class="icon-circle" style="background:${colors[item.icon] || 'var(--hero-orange)'};color:#fff;">${icons[item.icon] || '◉'}</div>
        <h3>${item.title}</h3>
        <p>${item.text}</p>
      </div>`;
  }).join('');

  // FLASHBACK
  document.getElementById('flashback-title').textContent = D.flashback.title;
  document.getElementById('flashback-list').innerHTML =
    D.flashback.items.map(item => `<li>${item}</li>`).join('');

  // PARTNER
  document.getElementById('partner-title').textContent = D.partner.title;
  document.getElementById('partner-name').textContent = D.partner.name;
  document.getElementById('partner-location').textContent = D.partner.location;
  document.getElementById('partner-desc').textContent = D.partner.description;

  // SITUATION
  document.getElementById('situation-title').textContent = D.situation.title;
  document.getElementById('situation-list').innerHTML =
    D.situation.points.map(item => `<li>${item}</li>`).join('');

  // RESEARCH QUESTION
  document.getElementById('rq-title').textContent = D.researchQuestion.title;
  document.getElementById('rq-question').textContent = D.researchQuestion.question;

  // HYPOTHESES
  document.getElementById('hypotheses-title').textContent = D.hypotheses.title;
  document.getElementById('hypotheses-grid').innerHTML = D.hypotheses.items.map(item => `
    <div class="hypothesis-card">
      <div class="hypo-number">${item.number}</div>
      <h3>${item.title}</h3>
      <p>${item.text}</p>
    </div>`).join('');

  // MATRIX
  document.getElementById('matrix-title').textContent = D.matrix.title;
  document.getElementById('matrix-legend').innerHTML = D.matrix.categories.map(cat => `
    <div class="matrix-item">
      <div class="matrix-color" style="background:${cat.color};"></div>
      <span class="matrix-name">${cat.name}</span>
      <span class="matrix-desc">${cat.description}</span>
    </div>`).join('');

  // INTERVENTIONS OVERVIEW
  document.getElementById('overview-title').textContent = D.interventionsOverview.title;
  document.getElementById('interventions-grid').innerHTML = D.interventionsOverview.items.map(item => {
    const cats = (item.categories || []).map(c =>
      `<span class="kategorie" style="background:${getCategoryColor(c)};">${c}</span>`
    ).join('');
    const img = item.image
      ? `<img src="${item.image}" alt="${item.name}">`
      : `<div style="width:100%;height:240px;background:var(--bg-soft);border-radius:12px;display:flex;align-items:center;justify-content:center;font-size:14px;color:var(--muted);">Bild einfügen</div>`;
    return `
      <div class="intervention-card">
        ${img}
        <div class="card-content">
          ${cats}
          <h3>${item.name || '—'}</h3>
          <span class="status" data-status="${item.status}">${item.status || '—'}</span>
        </div>
      </div>`;
  }).join('');

  // INCEPTION (Live-Website im iframe)
  document.getElementById('inception-title').textContent = D.inception.title;

  // INTERVENTIONS
  renderIntervention(1, D.intervention1);
  renderIntervention(2, D.intervention2);
  renderIntervention(3, D.intervention3);

  // GOLDNUGGETS
  document.getElementById('nuggets-title').textContent = D.goldNuggets.title;
  document.getElementById('nuggets-grid').innerHTML = D.goldNuggets.items.map(item => `
    <div class="nugget-card">
      <h3>${item.title}</h3>
      <p>${item.text}</p>
    </div>`).join('');

  // TEAMPROCESS
  document.getElementById('team-title').textContent = D.teamProcess.title;
  document.getElementById('team-timeline').innerHTML = D.teamProcess.phases.map((p, i) => `
    <div class="phase-card">
      <div class="phase-number">${String(i + 1).padStart(2, '0')}</div>
      <div class="phase-title">${p.phase}</div>
      <ul class="phase-activities">
        ${p.activities.map(a => `<li>${a}</li>`).join('')}
      </ul>
    </div>`).join('');

  // CONCLUSION
  document.getElementById('conclusion-title').textContent = D.conclusion.title;
  document.getElementById('conclusion-statement').textContent = D.conclusion.mainStatement;
  document.getElementById('conclusion-learnings').innerHTML =
    D.conclusion.keyLearnings.map(item => `<li>${item}</li>`).join('');

  // OUTLOOK
  document.getElementById('outlook-title').textContent = D.outlook.title;
  document.getElementById('outlook-list').innerHTML =
    D.outlook.nextSteps.map(item => `<li>${item}</li>`).join('');
  document.getElementById('outlook-thanks').textContent = D.outlook.thanks;
  document.getElementById('outlook-contact').textContent = D.outlook.contact;

  // MODEL VIEWER
  renderModelViewer();

  // VIDEO PLAYER
  renderVideo();

  // GALLERY
  renderGallery();

}

function renderIntervention(num, data) {
  const prefix = 'int' + num;

  document.getElementById(prefix + '-badge').textContent = String(data.number).padStart(2, '0');
  document.getElementById(prefix + '-title').textContent = data.title;
  document.getElementById(prefix + '-categories').innerHTML = (data.categories || []).map(c =>
    `<span class="kategorie" style="background:${getCategoryColor(c)};">${c}</span>`
  ).join('');

  document.getElementById(prefix + '-hypothesis').textContent = data.hypothesis;

  const designEl = document.getElementById(prefix + '-design');
  designEl.innerHTML = `
    <div class="design-concept">${data.design.concept}</div>
    <ol class="design-steps">
      ${data.design.steps.map(s => `<li>${s}</li>`).join('')}
    </ol>`;

  const resultsEl = document.getElementById(prefix + '-results');
  resultsEl.innerHTML = `
    <div class="result-card">
      <div class="result-label">Modellierung</div>
      <div class="result-text">${data.results.modeling}</div>
    </div>
    <div class="result-card">
      <div class="result-label">${num === 1 ? 'Validierung' : 'Messen'}</div>
      <div class="result-text">${data.results.measurement}</div>
    </div>
    <div class="result-card">
      <div class="result-label">${num === 1 ? 'Ergebnis' : 'Reale Wirkung'}</div>
      <div class="result-text">${data.results.realEffect}</div>
    </div>`;
}

 // ═══════════════════════════════════════════════════════
    // BEISPIEL-FOLIEN (Layout A–D)
    // ═══════════════════════════════════════════════════════
    if (D.example1) {
        document.getElementById('ex1-num').textContent = D.example1.number;
        document.getElementById('ex1-title').textContent = D.example1.title;
        document.getElementById('ex1-text').innerHTML = D.example1.text;
        if (D.example1.media) document.getElementById('ex1-media').src = D.example1.media;
        if (D.example1.thumbs[0]) document.getElementById('ex1-thumb1').src = D.example1.thumbs[0];
        if (D.example1.thumbs[1]) document.getElementById('ex1-thumb2').src = D.example1.thumbs[1];
    }
    if (D.example2) {
        document.getElementById('ex2-num').textContent = D.example2.number;
        document.getElementById('ex2-title').textContent = D.example2.title;
        document.getElementById('ex2-text').innerHTML = D.example2.text;
        if (D.example2.media) document.getElementById('ex2-media').src = D.example2.media;
        if (D.example2.thumbs[0]) document.getElementById('ex2-thumb1').src = D.example2.thumbs[0];
        if (D.example2.thumbs[1]) document.getElementById('ex2-thumb2').src = D.example2.thumbs[1];
        if (D.example2.thumbs[2]) document.getElementById('ex2-thumb3').src = D.example2.thumbs[2];
    }
    if (D.example3) {
        document.getElementById('ex3-num').textContent = D.example3.number;
        document.getElementById('ex3-title').textContent = D.example3.title;
        document.getElementById('ex3-text').innerHTML = D.example3.text;
        if (D.example3.media) document.getElementById('ex3-media').src = D.example3.media;
        if (D.example3.thumbs[0]) document.getElementById('ex3-thumb1').src = D.example3.thumbs[0];
    }
    if (D.example4) {
        document.getElementById('ex4-num').textContent = D.example4.number;
        document.getElementById('ex4-title').textContent = D.example4.title;
        document.getElementById('ex4-text').innerHTML = D.example4.text;
        if (D.example4.text2) document.getElementById('ex4-text2').innerHTML = D.example4.text2;
        if (D.example4.boxes) {
            if (D.example4.boxes[0]) document.getElementById('ex4-box1').textContent = D.example4.boxes[0];
            if (D.example4.boxes[1]) document.getElementById('ex4-box2').textContent = D.example4.boxes[1];
            if (D.example4.boxes[2]) document.getElementById('ex4-box3').textContent = D.example4.boxes[2];
        }
    }    // ═══════════════════════════════════════════════════════
    // DANNENMANN-FOLIEN
    // ═══════════════════════════════════════════════════════
    if (D.dannenmann1) {
        document.getElementById('dannenmann1-title').textContent = D.dannenmann1.title;
        document.getElementById('dannenmann1-content').innerHTML = D.dannenmann1.content;
        if (D.dannenmann1.leftImage) document.getElementById('dannenmann1-img-left').src = D.dannenmann1.leftImage;
        if (D.dannenmann1.rightImage) document.getElementById('dannenmann1-img-right').src = D.dannenmann1.rightImage;
    }
    if (D.dannenmann2) {
        document.getElementById('dannenmann2-title').textContent = D.dannenmann2.title;
        if (D.dannenmann2.image) document.getElementById('dannenmann2-img').src = D.dannenmann2.image;
        if (D.dannenmann2.models) {
           if (D.dannenmann2.models[0]) document.getElementById('dannenmann2-model1').setAttribute('src', D.dannenmann2.models[0]);
if (D.dannenmann2.models[1]) document.getElementById('dannenmann2-model2').setAttribute('src', D.dannenmann2.models[1]);
if (D.dannenmann2.models[2]) document.getElementById('dannenmann2-model3').setAttribute('src', D.dannenmann2.models[2]);
        }
    }
    if (D.dannenmann3) {
        document.getElementById('dannenmann3-title').textContent = D.dannenmann3.title;
        if (D.dannenmann3.images) {
            if (D.dannenmann3.images[0]) document.getElementById('dannenmann3-img1').src = D.dannenmann3.images[0];
            if (D.dannenmann3.images[1]) document.getElementById('dannenmann3-img2').src = D.dannenmann3.images[1];
            if (D.dannenmann3.images[2]) document.getElementById('dannenmann3-img3').src = D.dannenmann3.images[2];
        }
        if (D.dannenmann3.text) document.getElementById('dannenmann3-text').innerHTML = D.dannenmann3.text;
    }

// ─────────────────────────────────────────────
// 3D MODEL VIEWER
// ─────────────────────────────────────────────

let currentModel = 0;

function renderModelViewer(){

    if(!D.modelViewer) return;

    document.getElementById("modelviewer-title").textContent =
        D.modelViewer.title;

    const viewer =
        document.getElementById("model-viewer");

    const description =
        document.getElementById("modelviewer-description");

    const buttonContainer =
        document.getElementById("model-buttons");

    buttonContainer.innerHTML="";

    function loadModel(index){

        currentModel=index;

        const model=D.modelViewer.models[index];

        viewer.src=model.file;

        description.textContent=model.description || "";

        [...buttonContainer.children].forEach((btn,i)=>{
            btn.classList.toggle("active",i===index);
        });

    }

    D.modelViewer.models.forEach((model,index)=>{

        const button=document.createElement("button");

        button.textContent=model.name;

        button.onclick=()=>loadModel(index);

        buttonContainer.appendChild(button);

    });

    loadModel(0);

}

// ─────────────────────────────────────────────
// VIDEO PLAYER
// ─────────────────────────────────────────────

function renderVideo() {

  if (!D.video) return;

  document.getElementById("video-title").textContent = D.video.title;
  document.getElementById("video-description").textContent = D.video.description || "";

  var player = document.getElementById("video-player");
  player.src = D.video.src;

  if (D.video.poster) {
    player.poster = D.video.poster;
  }

}

// ─────────────────────────────────────────────
// BILDER-GALERIE (NEU)
// Genau das gleiche Muster wie renderModelViewer()
// ─────────────────────────────────────────────

// Variable: welches Bild ist gerade in der Lightbox offen
var galleryCurrentIndex = 0;

function renderGallery() {

  // Wenn keine Galerie-Daten vorhanden sind: nichts machen
  if (!D.gallery) return;

  // Überschrift aus presentation-data.js holen und einfügen
  document.getElementById("gallery-title").textContent = D.gallery.title;

  // Beschreibungstext aus presentation-data.js holen und einfügen
  document.getElementById("gallery-description").textContent = D.gallery.description || "";

  // Das Raster (Grid) aus dem HTML holen
  var grid = document.getElementById("gallery-grid");

  // Raster leeren (falls schon Bilder drin waren)
  grid.innerHTML = "";

  // Für jedes Bild in der Liste: ein Bild-Element erstellen
  D.gallery.images.forEach(function(image, index) {

    // Ein <div> mit der Klasse "gallery-item" erstellen
    var item = document.createElement("div");
    item.className = "gallery-item";

    // Ein <img> Tag erstellen
    var img = document.createElement("img");
    img.src = image.src;           // Pfad zum Bild
    img.alt = image.alt || "";     // Alternativtext (für Barrierefreiheit)
    img.loading = "lazy";          // Bild lädt erst wenn es sichtbar wird

    // Beim Klick auf das Bild: Lightbox öffnen
    img.onclick = function() {
      openLightbox(index);
    };

    // Bild in das Item einfügen
    item.appendChild(img);

    // Item in das Raster einfügen
    grid.appendChild(item);

  });

}

// ─────────────────────────────────────────────
// LIGHTBOX (Vollbild-Ansicht)
// ─────────────────────────────────────────────

// Diese Funktion öffnet die Lightbox mit einem bestimmten Bild
function openLightbox(index) {

  galleryCurrentIndex = index;

  // Das Lightbox-Element holen
  var lightbox = document.getElementById("gallery-lightbox");

  // Das Bild in der Lightbox holen
  var lightboxImg = document.getElementById("gallery-lightbox-img");

  // Das richtige Bild setzen
  lightboxImg.src = D.gallery.images[index].src;
  lightboxImg.alt = D.gallery.images[index].alt || "";

  // Lightbox sichtbar machen
  lightbox.classList.add("active");

}

// Diese Funktion schließt die Lightbox
function closeLightbox() {
  document.getElementById("gallery-lightbox").classList.remove("active");
}

// Diese Funktion geht zum nächsten Bild
function nextLightbox() {

  // Index um 1 erhöhen
  // Wenn wir am Ende sind: wieder von vorne beginnen
  galleryCurrentIndex = (galleryCurrentIndex + 1) % D.gallery.images.length;

  // Neues Bild laden
  var lightboxImg = document.getElementById("gallery-lightbox-img");
  lightboxImg.src = D.gallery.images[galleryCurrentIndex].src;
  lightboxImg.alt = D.gallery.images[galleryCurrentIndex].alt || "";

}

// Diese Funktion geht zum vorherigen Bild
function prevLightbox() {

  // Index um 1 verringern
  // Wenn wir am Anfang sind: zum letzten Bild springen
  galleryCurrentIndex = (galleryCurrentIndex - 1 + D.gallery.images.length) % D.gallery.images.length;

  // Neues Bild laden
  var lightboxImg = document.getElementById("gallery-lightbox-img");
  lightboxImg.src = D.gallery.images[galleryCurrentIndex].src;
  lightboxImg.alt = D.gallery.images[galleryCurrentIndex].alt || "";

}

// ── STILLES LAYER-SWITCHING ────────────────────────────────
function switchLayer(layer) {
  if (layer === currentLayer) return;
  if (layer === 'simple' && typeof PRESENTATION_DATA_SIMPLE === 'undefined') return;

  currentLayer = layer;
  D = (layer === 'simple') ? PRESENTATION_DATA_SIMPLE : PRESENTATION_DATA;

  const reveal = document.querySelector('.reveal');
  reveal.style.opacity = '0.3';
  reveal.style.transition = 'opacity 0.15s ease';

  setTimeout(function() {
    renderContent();
    reveal.style.opacity = '1';
  }, 150);
}

// ── PARALLAX ─────────────────────────────────────────────────
function updateParallax(slideIndex) {
  shapes.forEach((shape, i) => {
    const cfg = PARALLAX_CONFIGS[i] || PARALLAX_CONFIGS[0];
    const moveX = slideIndex * cfg.x;
    const moveY = slideIndex * cfg.y;
    shape.style.transform = `translate(${moveX}px, ${moveY}px)`;
  });
}

// ── PROGRESS BAR ─────────────────────────────────────────────
function updateProgress(current, total) {
  const pct = (current / total) * 100;
  document.getElementById('progress-fill').style.width = pct + '%';
  document.getElementById('slide-counter').textContent = `${current} / ${total}`;
}

// ── NAV BUTTONS ─────────────────────────────────────────────
document.getElementById('prev-btn').addEventListener('click', () => Reveal.prev());
document.getElementById('next-btn').addEventListener('click', () => Reveal.next());
document.getElementById('overview-btn').addEventListener('click', () => Reveal.toggleOverview());
document.getElementById('fullscreen-btn').addEventListener('click', () => {
  if (!document.fullscreenElement) {
    document.documentElement.requestFullscreen();
  } else {
    document.exitFullscreen();
  }
});

// ── HELP OVERLAY ─────────────────────────────────────────────
const helpOverlay = document.createElement('div');
helpOverlay.className = 'help-overlay';
helpOverlay.innerHTML = `
  <div class="help-box">
    <h2>Tastatur-Steuerung</h2>
    <table>
      <tr><td>→ / Space</td><td>Nächste Folie</td></tr>
      <tr><td>←</td><td>Vorherige Folie</td></tr>
      <tr><td>↑</td><td>Andere Ebene</td></tr>
      <tr><td>↓</td><td>Zurück</td></tr>
      <tr><td>O</td><td>Übersichtsmodus</td></tr>
      <tr><td>F</td><td>Vollbild</td></tr>
      <tr><td>H</td><td>Diese Hilfe</td></tr>
      <tr><td>Esc</td><td>Hilfe / Übersicht schließen</td></tr>
      <tr><td>Home / End</td><td>Erste / Letzte Folie</td></tr>
    </table>
    <p style="font-size:14px;color:var(--muted);margin-top:20px;line-height:1.5;">
      Auf der Live-Demo-Folie: In die Website klicken zum Ausprobieren.
      Außerhalb klicken, um zur Präsentation zurückzukehren.
    </p>
  </div>`;
document.body.appendChild(helpOverlay);

helpOverlay.addEventListener('click', (e) => {
  if (e.target === helpOverlay) helpOverlay.classList.remove('active');
});

// ── KEYBOARD (Capture-Phase, vor Reveal.js!) ─────────────────
document.addEventListener('keydown', (e) => {
  // Wenn die Lightbox offen ist: Pfeiltasten für Galerie, ESC zum Schließen
  var lightbox = document.getElementById("gallery-lightbox");
  if (lightbox && lightbox.classList.contains("active")) {
    if (e.key === "Escape") {
      e.preventDefault();
      e.stopPropagation();
      closeLightbox();
      return;
    }
    if (e.key === "ArrowRight") {
      e.preventDefault();
      e.stopPropagation();
      nextLightbox();
      return;
    }
    if (e.key === "ArrowLeft") {
      e.preventDefault();
      e.stopPropagation();
      prevLightbox();
      return;
    }
  }

  // Pfeil hoch/runter: Layer wechseln, NICHT an Reveal.js weitergeben
  if (e.key === 'ArrowUp') {
    e.preventDefault();
    e.stopPropagation();
    switchLayer('simple');
    return;
  }
  if (e.key === 'ArrowDown') {
    e.preventDefault();
    e.stopPropagation();
    switchLayer('standard');
    return;
  }
  if (e.key === 'h' || e.key === 'H') {
    helpOverlay.classList.toggle('active');
  }
  if (e.key === 'Escape') {
    helpOverlay.classList.remove('active');
  }
}, true); // CAPTURE: läuft VOR Reveal.js!

// ── REVEAL EVENTS ────────────────────────────────────────────
Reveal.on('ready', () => {
  renderContent();
  const total = Reveal.getTotalSlides();
  const current = Reveal.getIndices().h + 1;
  updateProgress(current, total);
  updateParallax(0);

  var iframe = document.getElementById('inception-iframe');
  if (iframe && !iframe.getAttribute('data-loaded')) {
    iframe.src = D.inception.url;
    iframe.setAttribute('data-loaded', 'true');
  }
});

   
Reveal.on('slidechanged', (event) => {
  const total = Reveal.getTotalSlides();
  const current = event.indexh + 1;
  updateProgress(current, total);
  updateParallax(event.indexh);

  var iframe = document.getElementById('inception-iframe');
  if (iframe && !event.currentSlide.classList.contains('slide-inception')) {
    if (document.activeElement === iframe) {
      iframe.blur();
    }
  }
});
