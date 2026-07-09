/* ═══════════════════════════════════════════════════════════════
   PRESENTATION.JS – Team Raum
   Reveal.js + Slide-Parallax + stilles Layer-Switching
   Pfeil hoch → leichte Sprache, Pfeil runter → Standard
   + Inception: Live-Website im iframe auf Slide 9a
   + NEU: Video Player, Bildergalerie, 3D-Modell Viewer
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

  // ═══════════════════════════════════════════════════════════
  // NEU: NEUE MEDIEN RENDERN
  // ═══════════════════════════════════════════════════════════
  renderVideo();      // Video Player
  renderGallery();    // Bildergalerie
  // 3D-Modell wird bei slidechanged geladen (weil es rechenintensiv ist)
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
}, true);

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

  // ═══════════════════════════════════════════════════════════
  // NEU: 3D-Modell laden wenn wir auf den 3D-Folio sind
  // ═══════════════════════════════════════════════════════════
  if (event.currentSlide.classList.contains('slide-media-3d')) {
    // 3D-Folio betreten → Modell laden
    load3DModel();
  } else {
    // 3D-Folio verlassen → aufräumen (spart Rechenleistung)
    cleanup3DViewer();
  }
});

// ═══════════════════════════════════════════════════════════════
// NEUE FUNKTIONEN: VIDEO, GALERIE, 3D-MODELL
// ═══════════════════════════════════════════════════════════════

// ── 1. VIDEO PLAYER RENDER ────────────────────────────────────
function renderVideo() {
  var videoData = D.video;
  if (!videoData) return;

  document.getElementById('video-title').textContent = videoData.title || 'Video';

  var source = document.getElementById('video-source');
  if (source && videoData.src) {
    source.src = videoData.src;
  }

  var player = document.getElementById('video-player');
  if (player && videoData.poster) {
    player.poster = videoData.poster;
  }

  document.getElementById('video-caption').textContent = videoData.caption || '';
}

// ── 2. BILDERGALERIE RENDER ───────────────────────────────────
function renderGallery() {
  var galleryData = D.gallery;
  if (!galleryData) return;

  document.getElementById('gallery-title').textContent = galleryData.title || 'Galerie';

  var grid = document.getElementById('gallery-grid');
  grid.innerHTML = '';

  (galleryData.images || []).forEach(function(img, index) {
    var item = document.createElement('div');
    item.className = 'gallery-item';
    item.dataset.index = index;

    var imgEl = document.createElement('img');
    imgEl.src = img.src;
    imgEl.alt = img.alt || 'Galeriebild ' + (index + 1);
    imgEl.loading = 'lazy';

    item.appendChild(imgEl);
    grid.appendChild(item);

    item.addEventListener('click', function() {
      openGalleryModal(index);
    });
  });
}

// ── 3. GALERIE MODAL (Vollbild-Ansicht) ──────────────────────
var currentGalleryIndex = 0;
var galleryImages = [];

function openGalleryModal(index) {
  galleryImages = (D.gallery && D.gallery.images) ? D.gallery.images : [];

  if (galleryImages.length === 0) return;

  currentGalleryIndex = index;

  var modal = document.getElementById('gallery-modal');
  var img = document.getElementById('gallery-modal-img');

  img.src = galleryImages[index].src;
  updateGalleryCounter();
  modal.classList.add('active');
}

function updateGalleryCounter() {
  var counter = document.getElementById('gallery-modal-counter');
  counter.textContent = (currentGalleryIndex + 1) + ' / ' + galleryImages.length;
}

function closeGalleryModal() {
  document.getElementById('gallery-modal').classList.remove('active');
}

function nextGalleryImage() {
  if (galleryImages.length === 0) return;
  currentGalleryIndex = (currentGalleryIndex + 1) % galleryImages.length;
  document.getElementById('gallery-modal-img').src = galleryImages[currentGalleryIndex].src;
  updateGalleryCounter();
}

function prevGalleryImage() {
  if (galleryImages.length === 0) return;
  currentGalleryIndex = (currentGalleryIndex - 1 + galleryImages.length) % galleryImages.length;
  document.getElementById('gallery-modal-img').src = galleryImages[currentGalleryIndex].src;
  updateGalleryCounter();
}

document.getElementById('gallery-modal-close').addEventListener('click', closeGalleryModal);
document.getElementById('gallery-modal-next').addEventListener('click', nextGalleryImage);
document.getElementById('gallery-modal-prev').addEventListener('click', prevGalleryImage);

document.getElementById('gallery-modal').addEventListener('click', function(e) {
  if (e.target === this) closeGalleryModal();
});

document.addEventListener('keydown', function(e) {
  var modal = document.getElementById('gallery-modal');
  if (!modal.classList.contains('active')) return;

  if (e.key === 'ArrowRight') nextGalleryImage();
  if (e.key === 'ArrowLeft') prevGalleryImage();
  if (e.key === 'Escape') closeGalleryModal();
});

// ── 4. THREE.JS 3D MODELL VIEWER ─────────────────────────────
var scene3D, camera3D, renderer3D, model3D, animationId3D;
var is3DInitialized = false;

function init3DViewer() {
  var container = document.getElementById('model3d-container');
  if (!container) return;

  if (is3DInitialized) return;
  is3DInitialized = true;

  // Szene
  scene3D = new THREE.Scene();
  scene3D.background = new THREE.Color(0xf0f2f5);

  // Kamera
  var width = container.clientWidth;
  var height = container.clientHeight;
  camera3D = new THREE.PerspectiveCamera(50, width / height, 0.1, 1000);
  camera3D.position.set(0, 1, 3);

  // Renderer
  renderer3D = new THREE.WebGLRenderer({ antialias: true });
  renderer3D.setSize(width, height);
  renderer3D.setPixelRatio(window.devicePixelRatio);
  renderer3D.shadowMap.enabled = true;

  document.getElementById('model3d-canvas').appendChild(renderer3D.domElement);

  // Lichter
  var ambientLight = new THREE.AmbientLight(0xffffff, 0.6);
  scene3D.add(ambientLight);

  var sunLight = new THREE.DirectionalLight(0xffffff, 0.8);
  sunLight.position.set(5, 10, 7);
  sunLight.castShadow = true;
  scene3D.add(sunLight);

  // Boden
  var floorGeometry = new THREE.PlaneGeometry(10, 10);
  var floorMaterial = new THREE.MeshStandardMaterial({ 
    color: 0xe0e0e0,
    roughness: 0.8
  });
  var floor = new THREE.Mesh(floorGeometry, floorMaterial);
  floor.rotation.x = -Math.PI / 2;
  floor.position.y = -1;
  floor.receiveShadow = true;
  scene3D.add(floor);

  // Maus-Steuerung
  setupSimpleOrbitControls();

  // Animation
  animate3D();

  // Resize
  window.addEventListener('resize', onWindowResize3D);
}

function onWindowResize3D() {
  var container = document.getElementById('model3d-container');
  if (!container || !camera3D || !renderer3D) return;

  var width = container.clientWidth;
  var height = container.clientHeight;

  camera3D.aspect = width / height;
  camera3D.updateProjectionMatrix();
  renderer3D.setSize(width, height);
}

function animate3D() {
  animationId3D = requestAnimationFrame(animate3D);

  if (model3D) {
    model3D.rotation.y += 0.003;
  }

  renderer3D.render(scene3D, camera3D);
}

function setupSimpleOrbitControls() {
  var container = document.getElementById('model3d-container');
  if (!container) return;

  var isMouseDown = false;
  var previousMousePosition = { x: 0, y: 0 };
  var spherical = { theta: 0, phi: Math.PI / 2, radius: 4 };

  container.addEventListener('mousedown', function(e) {
    isMouseDown = true;
    previousMousePosition = { x: e.clientX, y: e.clientY };
  });

  container.addEventListener('mousemove', function(e) {
    if (!isMouseDown || !model3D) return;

    var deltaX = e.clientX - previousMousePosition.x;
    var deltaY = e.clientY - previousMousePosition.y;

    spherical.theta -= deltaX * 0.01;
    spherical.phi = Math.max(0.1, Math.min(Math.PI - 0.1, spherical.phi + deltaY * 0.01));

    updateCameraPosition();
    previousMousePosition = { x: e.clientX, y: e.clientY };
  });

  container.addEventListener('mouseup', function() {
    isMouseDown = false;
  });

  container.addEventListener('mouseleave', function() {
    isMouseDown = false;
  });

  container.addEventListener('wheel', function(e) {
    e.preventDefault();
    spherical.radius = Math.max(1, Math.min(10, spherical.radius + e.deltaY * 0.01));
    updateCameraPosition();
  });

  function updateCameraPosition() {
    camera3D.position.x = spherical.radius * Math.sin(spherical.phi) * Math.sin(spherical.theta);
    camera3D.position.y = spherical.radius * Math.cos(spherical.phi);
    camera3D.position.z = spherical.radius * Math.sin(spherical.phi) * Math.cos(spherical.theta);
    camera3D.lookAt(0, 0, 0);
  }

  updateCameraPosition();
}

function load3DModel() {
  var modelData = D.model3d;

  if (!modelData || !modelData.src) return;

  document.getElementById('model3d-title').textContent = modelData.title || '3D-Modell';
  document.getElementById('model3d-caption').textContent = modelData.caption || '';
  document.getElementById('model3d-loading').classList.remove('hidden');

  if (typeof THREE === 'undefined' || typeof THREE.GLTFLoader === 'undefined') {
    console.warn('Three.js oder GLTFLoader nicht geladen!');
    document.getElementById('model3d-loading').querySelector('p').textContent = 'Fehler: Three.js nicht geladen';
    return;
  }

  init3DViewer();

  var loader = new THREE.GLTFLoader();

  loader.load(
    modelData.src,
    function(gltf) {
      model3D = gltf.scene;

      var box = new THREE.Box3().setFromObject(model3D);
      var center = box.getCenter(new THREE.Vector3());
      var size = box.getSize(new THREE.Vector3());

      var maxDim = Math.max(size.x, size.y, size.z);
      var scale = 2 / maxDim;
      model3D.scale.setScalar(scale);

      model3D.position.sub(center.multiplyScalar(scale));

      model3D.traverse(function(child) {
        if (child.isMesh) {
          child.castShadow = true;
          child.receiveShadow = true;
        }
      });

      scene3D.add(model3D);

      document.getElementById('model3d-loading').classList.add('hidden');
    },
    function(progress) {
      var percent = (progress.loaded / progress.total * 100).toFixed(0);
      document.getElementById('model3d-loading').querySelector('p').textContent = 
        'Lädt... ' + percent + '%';
    },
    function(error) {
      console.error('3D-Modell konnte nicht geladen werden:', error);
      document.getElementById('model3d-loading').querySelector('p').textContent = 
        'Fehler beim Laden des 3D-Modells';
    }
  );
}

function cleanup3DViewer() {
  if (animationId3D) {
    cancelAnimationFrame(animationId3D);
    animationId3D = null;
  }

  if (renderer3D) {
    renderer3D.dispose();
    renderer3D = null;
  }

  if (scene3D) {
    scene3D.traverse(function(object) {
      if (object.geometry) object.geometry.dispose();
      if (object.material) {
        if (Array.isArray(object.material)) {
          object.material.forEach(function(mat) { mat.dispose(); });
        } else {
          object.material.dispose();
        }
      }
    });
    scene3D = null;
  }

  model3D = null;
  is3DInitialized = false;

  var canvas = document.getElementById('model3d-canvas');
  if (canvas) canvas.innerHTML = '';
}
