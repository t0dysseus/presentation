/* ═══════════════════════════════════════════════════════════════
   PRESENTATION.JS – Team Raum
   Baut die komplette Präsentation aus slides-config.js +
   slide-templates.js und kümmert sich um Reveal.js, Parallax,
   Lightbox, 3D-Viewer, Layer-Umschaltung (leichte Sprache),
   Navigation und Tastatursteuerung.

   Diese Datei musst du normalerweise NICHT anfassen, um Inhalte
   zu ändern – das passiert in slides-config.js!
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

// jede Folie bekommt automatisch eine interne ID, falls im
// Config-Objekt keine "_id" gesetzt wurde. Wird für Verhalten
// (3D-Buttons, Galerie-Lightbox, Dannenmann-Zoom) gebraucht,
// damit mehrere Folien vom selben Layout sich nicht in die
// Quere kommen.
SLIDES.forEach((slide, i) => {
  if (!slide._id) slide._id = slide.layout + '-' + i;
});

// Registry: pro Folien-ID die Rohdaten, die nach dem Rendern noch
// per JS gebraucht werden (z.B. Modell-Liste für die Buttons).
const SLIDE_REGISTRY = {};
SLIDES.forEach(slide => { SLIDE_REGISTRY[slide._id] = slide; });

// ── DOM ──────────────────────────────────────────────────────
const shapes = document.querySelectorAll('.hero-bg svg .shape');

// ═══════════════════════════════════════════════════════════
// RENDERING: baut alle <section>-Folien aus SLIDES
// ═══════════════════════════════════════════════════════════
function renderDeck() {
  const root = document.getElementById('slides-root');
  root.innerHTML = '';

  SLIDES.forEach(slide => {
    const tpl = TEMPLATES[slide.layout];
    let html;
    if (!tpl) {
      html = `<section><div class="slide-content">
        <h2>⚠️ Unbekanntes Layout: "${slide.layout}"</h2>
        <p>Prüfe die Schreibweise von "layout" in slides-config.js.
        Verfügbare Layouts stehen im Kommentar am Dateianfang.</p>
      </div></section>`;
    } else {
      try {
        html = tpl(slide, currentLayer);
      } catch (err) {
        console.error('Fehler beim Rendern der Folie', slide, err);
        html = `<section><div class="slide-content">
          <h2>⚠️ Fehler in dieser Folie</h2>
          <p>Layout: ${slide.layout}<br>${err.message}</p>
        </div></section>`;
      }
    }
    const wrapper = document.createElement('div');
    wrapper.innerHTML = html.trim();
    const section = wrapper.firstElementChild;
    root.appendChild(section);
    attachBehavior(section, slide);
  });
}

// ═══════════════════════════════════════════════════════════
// VERHALTEN NACH DEM RENDERN
// (alles, was Interaktivität braucht: iframe-Lazyload,
//  3D-Modell-Buttons, Video-Poster, Galerie + Lightbox,
//  Dannenmann-Zoom-Bild)
// ═══════════════════════════════════════════════════════════
function attachBehavior(section, slide) {

  // ── LIVE-DEMO IFRAME (nur beim ersten Rendern laden) ──────
  if (slide.layout === 'embedded-website') {
    const iframe = section.querySelector('.inception-iframe');
    if (iframe && !iframe.getAttribute('data-loaded')) {
      iframe.src = iframe.getAttribute('data-url');
      iframe.setAttribute('data-loaded', 'true');
    }
  }

  // ── 3D-MODELL-VIEWER MIT UMSCHALT-BUTTONS ─────────────────
  if (slide.layout === 'model-viewer-3d') {
    const viewer = section.querySelector('.model-viewer-el');
    const description = section.querySelector('.model-description');
    const buttonContainer = section.querySelector('.model-buttons');

    function loadModel(index) {
      const model = slide.models[index];
      viewer.src = model.file;
      description.textContent = model.description || '';
      [...buttonContainer.children].forEach((btn, i) => btn.classList.toggle('active', i === index));
    }

    buttonContainer.innerHTML = '';
    slide.models.forEach((model, index) => {
      const button = document.createElement('button');
      button.textContent = model.name;
      button.onclick = () => loadModel(index);
      buttonContainer.appendChild(button);
    });
    if (slide.models.length) loadModel(0);
  }

  // ── DANNENMANN: ZOOMBARES EINZELBILD ──────────────────────
  if (slide.layout === 'media-grid-2x2') {
    const img = section.querySelector('.dannenmann-zoomable');
    if (img && img.getAttribute('src')) {
      img.onclick = (e) => {
        e.stopPropagation(); // verhindert Sprung zur nächsten Folie
        openSingleImage(img.getAttribute('src'));
      };
    }
  }

  // ── BILDERGALERIE ──────────────────────────────────────────
  if (slide.layout === 'image-gallery') {
    const grid = section.querySelector('.gallery-grid');
    grid.innerHTML = '';
    (slide.images || []).forEach((image, index) => {
      const item = document.createElement('div');
      item.className = 'gallery-item';
      const img = document.createElement('img');
      img.src = image.src;
      img.alt = image.alt || '';
      img.loading = 'lazy';
      img.onclick = () => openLightbox(slide._id, index);
      item.appendChild(img);
      grid.appendChild(item);
    });
  }
}

// ═══════════════════════════════════════════════════════════
// LIGHTBOX (Galerie: mit Vor/Zurück · Einzelbild: ohne Pfeile)
// ═══════════════════════════════════════════════════════════
let activeGalleryId = null;
let galleryCurrentIndex = 0;

function openLightbox(galleryId, index) {
  activeGalleryId = galleryId;
  galleryCurrentIndex = index;
  const images = SLIDE_REGISTRY[galleryId].images;

  document.querySelector('.gallery-lightbox-prev').style.display = '';
  document.querySelector('.gallery-lightbox-next').style.display = '';

  const lightboxImg = document.getElementById('gallery-lightbox-img');
  lightboxImg.src = images[index].src;
  lightboxImg.alt = images[index].alt || '';
  document.getElementById('gallery-lightbox').classList.add('active');
}

function openSingleImage(src) {
  activeGalleryId = null;
  document.querySelector('.gallery-lightbox-prev').style.display = 'none';
  document.querySelector('.gallery-lightbox-next').style.display = 'none';

  const lightboxImg = document.getElementById('gallery-lightbox-img');
  lightboxImg.src = src;
  document.getElementById('gallery-lightbox').classList.add('active');
}

function closeLightbox() {
  document.getElementById('gallery-lightbox').classList.remove('active');
  document.querySelector('.gallery-lightbox-prev').style.display = '';
  document.querySelector('.gallery-lightbox-next').style.display = '';
}

function nextLightbox() {
  if (!activeGalleryId) return;
  const images = SLIDE_REGISTRY[activeGalleryId].images;
  galleryCurrentIndex = (galleryCurrentIndex + 1) % images.length;
  const lightboxImg = document.getElementById('gallery-lightbox-img');
  lightboxImg.src = images[galleryCurrentIndex].src;
  lightboxImg.alt = images[galleryCurrentIndex].alt || '';
}

function prevLightbox() {
  if (!activeGalleryId) return;
  const images = SLIDE_REGISTRY[activeGalleryId].images;
  galleryCurrentIndex = (galleryCurrentIndex - 1 + images.length) % images.length;
  const lightboxImg = document.getElementById('gallery-lightbox-img');
  lightboxImg.src = images[galleryCurrentIndex].src;
  lightboxImg.alt = images[galleryCurrentIndex].alt || '';
}

// ── STILLES LAYER-SWITCHING ────────────────────────────────
function switchLayer(layer) {
  if (layer === currentLayer) return;
  currentLayer = layer;

  const reveal = document.querySelector('.reveal');
  reveal.style.opacity = '0.3';
  reveal.style.transition = 'opacity 0.15s ease';

  // aktuellen Folienindex merken, damit man nach dem Neuaufbau
  // an derselben Stelle weiterschaut
  const indices = Reveal.getIndices();

  setTimeout(function () {
    renderDeck();
    Reveal.sync();
    Reveal.slide(indices.h, indices.v);
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

// ═══════════════════════════════════════════════════════════
// INITIALISIERUNG
// ═══════════════════════════════════════════════════════════

// Folien einmal bauen, BEVOR Reveal.js initialisiert wird
renderDeck();

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
  const lightbox = document.getElementById('gallery-lightbox');
  if (lightbox && lightbox.classList.contains('active')) {
    if (e.key === 'Escape') { e.preventDefault(); e.stopPropagation(); closeLightbox(); return; }
    if (e.key === 'ArrowRight') { e.preventDefault(); e.stopPropagation(); nextLightbox(); return; }
    if (e.key === 'ArrowLeft') { e.preventDefault(); e.stopPropagation(); prevLightbox(); return; }
  }

  if (e.key === 'ArrowUp') { e.preventDefault(); e.stopPropagation(); switchLayer('simple'); return; }
  if (e.key === 'ArrowDown') { e.preventDefault(); e.stopPropagation(); switchLayer('standard'); return; }
  if (e.key === 'h' || e.key === 'H') { helpOverlay.classList.toggle('active'); }
  if (e.key === 'Escape') { helpOverlay.classList.remove('active'); }
}, true);

// ── REVEAL EVENTS ────────────────────────────────────────────
Reveal.on('ready', () => {
  const total = Reveal.getTotalSlides();
  const current = Reveal.getIndices().h + 1;
  updateProgress(current, total);
  updateParallax(0);
});

Reveal.on('slidechanged', (event) => {
  const total = Reveal.getTotalSlides();
  const current = event.indexh + 1;
  updateProgress(current, total);
  updateParallax(event.indexh);

  // Fokus aus dem Live-Demo-iframe nehmen, wenn man wegklickt
  document.querySelectorAll('.inception-iframe').forEach(iframe => {
    if (!event.currentSlide.contains(iframe) && document.activeElement === iframe) {
      iframe.blur();
    }
  });
});
