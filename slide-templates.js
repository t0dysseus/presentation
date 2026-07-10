/* ═══════════════════════════════════════════════════════════════
   SLIDE-TEMPLATES – Team Raum
   ═══════════════════════════════════════════════════════════════
   Hier steckt für JEDES Layout, das in slides-config.js per
   `layout: "..."` benutzt werden kann, eine kleine Funktion, die
   aus den Inhalten das fertige Folien-HTML baut.

   WICHTIG:
   - Diese Datei musst du im Normalfall NICHT anfassen.
   - Nur wenn du ein komplett NEUES Layout brauchst (das es hier
     noch nicht gibt), fügst du unten eine neue Funktion hinzu und
     trägst sie in TEMPLATES ein.
   - Für neue Inhalte auf vorhandenen Layouts: slides-config.js!

   Jede Template-Funktion bekommt:
     (slide, layer)
   - slide: das Konfigurations-Objekt aus slides-config.js
   - layer: "standard" oder "simple" (leichte Sprache)
   und gibt einen HTML-String zurück, der mit <section ...> beginnt.

   Für Text, der sich zwischen Standard- und Leichter-Sprache
   unterscheiden soll, benutze in slides-config.js:
     { standard: "...", simple: "..." }
   statt eines einfachen Strings. Die Hilfsfunktion t() unten
   löst das automatisch auf (mit Rückfall auf "standard").
   ═══════════════════════════════════════════════════════════════ */

// ── HILFSFUNKTIONEN ──────────────────────────────────────────

// Löst {standard, simple}-Objekte nach aktuellem Layer auf.
// Normale Strings/Arrays/Zahlen werden unverändert durchgereicht.
function t(field, layer) {
  if (field && typeof field === 'object' && !Array.isArray(field) &&
      ('standard' in field || 'simple' in field)) {
    return (layer === 'simple' && field.simple !== undefined) ? field.simple : field.standard;
  }
  return field;
}

function esc(str) {
  if (str === undefined || str === null) return '';
  return String(str);
}

const CATEGORY_COLORS = {
  "Irritation": "#ec7d23",
  "Verstärkung": "#b1dbe3",
  "Zuspitzung": "#ca5482",
  "Support": "#b1bfe0",
  "Physische Erfahrung": "#384f9e"
};
function getCategoryColor(category) {
  return CATEGORY_COLORS[category] || "#999";
}

const PRINCIPLE_COLORS = { immersiv: 'var(--hero-orange)', inklusiv: 'var(--hero-lightblue)', interaktiv: 'var(--hero-pink)' };
const PRINCIPLE_ICONS  = { immersiv: '◉', inklusiv: '✦', interaktiv: '◈' };

// Baut ein data-slide-id Attribut, über das Verhalten (Model-Viewer-
// Buttons, Galerie-Lightbox, Dannenmann-Zoom) die richtigen Daten
// zu einer Folie wiederfindet, auch wenn es mehrere Folien vom
// selben Layout-Typ gibt.
function sid(slide) {
  return esc(slide._id);
}

// ── TEMPLATES ─────────────────────────────────────────────────

const TEMPLATES = {

  // Benötigt: title, subtitle, meta:{description, semester, course}
  'title-slide': (s, layer) => `
    <section class="slide-title">
      <div class="slide-content">
        <h1>${esc(t(s.title, layer))}</h1>
        <p class="subtitle">${esc(t(s.subtitle, layer))}</p>
        <p class="meta">${esc(t(s.meta && s.meta.description, layer))} · ${esc(s.meta && s.meta.semester)} · ${esc(s.meta && s.meta.course)}</p>
      </div>
    </section>`,

  // Benötigt: title, items:[{icon, title, text}]
  'icon-card-row': (s, layer) => `
    <section class="slide-principles">
      <div class="slide-content">
        <h2>${esc(t(s.title, layer))}</h2>
        <div class="principles-grid">
          ${(s.items || []).map(item => `
            <div class="principle-card">
              <div class="icon-circle" style="background:${PRINCIPLE_COLORS[item.icon] || 'var(--hero-orange)'};color:#fff;">${PRINCIPLE_ICONS[item.icon] || '◉'}</div>
              <h3>${esc(t(item.title, layer))}</h3>
              <p>${esc(t(item.text, layer))}</p>
            </div>`).join('')}
        </div>
      </div>
    </section>`,

  // Benötigt: title, items:[string]  → einfache Aufzählungsliste
  'bullet-list': (s, layer) => `
    <section class="slide-content-page">
      <div class="slide-content">
        <h2>${esc(t(s.title, layer))}</h2>
        <ul class="content-list">
          ${(t(s.items, layer) || []).map(item => `<li>${esc(item)}</li>`).join('')}
        </ul>
      </div>
    </section>`,

  // Benötigt: title, question
  'quote-highlight': (s, layer) => `
    <section class="slide-quote">
      <div class="slide-content">
        <h2>${esc(t(s.title, layer))}</h2>
        <p class="quote-text">${esc(t(s.question, layer))}</p>
      </div>
    </section>`,

  // Benötigt: title, items:[{number, title, text}]
  'numbered-card-row': (s, layer) => `
    <section class="slide-hypotheses">
      <div class="slide-content">
        <h2>${esc(t(s.title, layer))}</h2>
        <div class="hypotheses-grid">
          ${(s.items || []).map(item => `
            <div class="hypothesis-card">
              <div class="hypo-number">${esc(item.number)}</div>
              <h3>${esc(t(item.title, layer))}</h3>
              <p>${esc(t(item.text, layer))}</p>
            </div>`).join('')}
        </div>
      </div>
    </section>`,

  // Benötigt: title, categories:[{name, color, description}]
  'color-legend-list': (s, layer) => `
    <section class="slide-matrix">
      <div class="slide-content">
        <h2>${esc(t(s.title, layer))}</h2>
        <div class="matrix-legend">
          ${(s.categories || []).map(cat => `
            <div class="matrix-item">
              <div class="matrix-color" style="background:${esc(cat.color)};"></div>
              <span class="matrix-name">${esc(cat.name)}</span>
              <span class="matrix-desc">${esc(t(cat.description, layer))}</span>
            </div>`).join('')}
        </div>
      </div>
    </section>`,

  // Benötigt: title, items:[{name, status, categories:[], image}]
  'media-card-grid': (s, layer) => `
    <section class="slide-content-page">
      <div class="slide-content">
        <h2>${esc(t(s.title, layer))}</h2>
        <div class="interventions-grid">
          ${(s.items || []).map(item => {
            const cats = (item.categories || []).map(c =>
              `<span class="kategorie" style="background:${getCategoryColor(c)};">${esc(c)}</span>`).join('');
            const img = item.image
              ? `<img src="${esc(item.image)}" alt="${esc(item.name)}">`
              : `<div style="width:100%;height:240px;background:var(--bg-soft);border-radius:12px;display:flex;align-items:center;justify-content:center;font-size:14px;color:var(--muted);">Bild einfügen</div>`;
            return `
              <div class="intervention-card">
                ${img}
                <div class="card-content">
                  ${cats}
                  <h3>${esc(item.name || '—')}</h3>
                  <span class="status" data-status="${esc(item.status)}">${esc(item.status || '—')}</span>
                </div>
              </div>`;
          }).join('')}
        </div>
      </div>
    </section>`,

  // Benötigt: title, url
  'embedded-website': (s, layer) => `
    <section class="slide-inception" data-slide-id="${sid(s)}">
      <div class="slide-content">
        <h2>${esc(t(s.title, layer))}</h2>
        <div class="inception-frame">
          <iframe class="inception-iframe" data-url="${esc(s.url)}" src="" frameborder="0" allowfullscreen></iframe>
        </div>
      </div>
    </section>`,

  // Benötigt: number, title, text, media, thumbs:[2]
  'text-image-thumbs-2': (s, layer) => `
    <section class="slide-example">
      <div class="slide-content">
        <div class="example-header">
          <span class="example-number">${esc(s.number)}</span>
          <h2>${esc(t(s.title, layer))}</h2>
        </div>
        <div class="example-layout-a">
          <div class="example-text">${t(s.text, layer) || ''}</div>
          <div class="example-media"><img src="${esc(s.media)}" alt=""></div>
          <div class="example-thumbs">
            <div class="example-thumb"><img src="${esc((s.thumbs||[])[0])}" alt=""></div>
            <div class="example-thumb"><img src="${esc((s.thumbs||[])[1])}" alt=""></div>
          </div>
        </div>
      </div>
    </section>`,

  // Benötigt: number, title, text, media, thumbs:[3]
  'image-text-thumbs-3': (s, layer) => `
    <section class="slide-example">
      <div class="slide-content">
        <div class="example-header">
          <span class="example-number">${esc(s.number)}</span>
          <h2>${esc(t(s.title, layer))}</h2>
        </div>
        <div class="example-layout-b">
          <div class="example-media"><img src="${esc(s.media)}" alt=""></div>
          <div class="example-text">${t(s.text, layer) || ''}</div>
          <div class="example-thumbs">
            <div class="example-thumb"><img src="${esc((s.thumbs||[])[0])}" alt=""></div>
            <div class="example-thumb"><img src="${esc((s.thumbs||[])[1])}" alt=""></div>
            <div class="example-thumb"><img src="${esc((s.thumbs||[])[2])}" alt=""></div>
          </div>
        </div>
      </div>
    </section>`,

  // Benötigt: number, title, text, media, thumbs:[1]
  'text-image-thumbs-1': (s, layer) => `
    <section class="slide-example">
      <div class="slide-content">
        <div class="example-header">
          <span class="example-number">${esc(s.number)}</span>
          <h2>${esc(t(s.title, layer))}</h2>
        </div>
        <div class="example-layout-c">
          <div class="example-text">${t(s.text, layer) || ''}</div>
          <div class="example-media"><img src="${esc(s.media)}" alt=""></div>
          <div class="example-thumbs">
            <div class="example-thumb"><img src="${esc((s.thumbs||[])[0])}" alt=""></div>
          </div>
        </div>
      </div>
    </section>`,

  // Benötigt: number, title, text, text2, boxes:[3]
  'dual-text-boxes': (s, layer) => `
    <section class="slide-example">
      <div class="slide-content">
        <div class="example-header">
          <span class="example-number">${esc(s.number)}</span>
          <h2>${esc(t(s.title, layer))}</h2>
        </div>
        <div class="example-layout-d">
          <div class="example-text">${t(s.text, layer) || ''}</div>
          <div class="example-text-2">${t(s.text2, layer) || ''}</div>
          <div class="example-boxes">
            ${((s.boxes)||[]).map(b => `<div class="example-card">${esc(t(b, layer))}</div>`).join('')}
          </div>
        </div>
      </div>
    </section>`,

  // Benötigt: title, content, leftImage, rightImage
  'image-text-image': (s, layer) => `
    <section class="slide-dannenmann slide-dannenmann-center">
      <div class="slide-content">
        <h2>${esc(t(s.title, layer))}</h2>
        <div class="dannenmann-triple">
          <div class="dannenmann-side-box"><img src="${esc(s.leftImage)}" alt=""></div>
          <div class="dannenmann-center-content">${t(s.content, layer) || ''}</div>
          <div class="dannenmann-side-box"><img src="${esc(s.rightImage)}" alt=""></div>
        </div>
      </div>
    </section>`,

  // Benötigt: title, image, models:[2], gif
  'media-grid-2x2': (s, layer) => `
    <section class="slide-dannenmann slide-dannenmann-grid" data-slide-id="${sid(s)}">
      <div class="slide-content">
        <h2>${esc(t(s.title, layer))}</h2>
        <div class="dannenmann-grid-2x2">
          <div class="dannenmann-cell dannenmann-image">
            <img class="dannenmann-zoomable" src="${esc(s.image)}" alt="" style="${s.image ? 'cursor:zoom-in;' : ''}">
          </div>
          <div class="dannenmann-cell dannenmann-model">
            <model-viewer src="${esc((s.models||[])[0])}" alt="" camera-controls auto-rotate></model-viewer>
          </div>
          <div class="dannenmann-cell dannenmann-model">
            <model-viewer src="${esc((s.models||[])[1])}" alt="" camera-controls auto-rotate></model-viewer>
          </div>
          <div class="dannenmann-cell">
            <img src="${esc(s.gif)}" alt="">
          </div>
        </div>
      </div>
    </section>`,

  // Benötigt: title, images:[3], text
  'images-row-text-below': (s, layer) => `
    <section class="slide-dannenmann slide-dannenmann-topimages">
      <div class="slide-content">
        <h2>${esc(t(s.title, layer))}</h2>
        <div class="dannenmann-images-row">
          <img src="${esc((s.images||[])[0])}" alt="">
          <img src="${esc((s.images||[])[1])}" alt="">
          <img src="${esc((s.images||[])[2])}" alt="">
        </div>
        <div class="dannenmann-bottom-text">${t(s.text, layer) || ''}</div>
      </div>
    </section>`,

  // Benötigt: number, title
  'section-divider': (s, layer) => `
    <section class="slide-section">
      <div class="slide-content">
        <span class="section-number">${esc(s.number)}</span>
        <h2>${esc(t(s.title, layer))}</h2>
      </div>
    </section>`,

  // Benötigt: badge, title, categories:[string]
  'badge-title-tags': (s, layer) => `
    <section class="slide-intervention-intro">
      <div class="slide-content">
        <div class="intervention-badge">${esc(s.badge)}</div>
        <h2>${esc(t(s.title, layer))}</h2>
        <div class="intervention-categories">
          ${(s.categories || []).map(c => `<span class="kategorie" style="background:${getCategoryColor(c)};">${esc(c)}</span>`).join('')}
        </div>
      </div>
    </section>`,

  // Benötigt: hypothesis
  'hypothesis-quote': (s, layer) => `
    <section class="slide-intervention-hypothesis">
      <div class="slide-content">
        <h3>Hebelhypothese</h3>
        <p class="hypothesis-text">${esc(t(s.hypothesis, layer))}</p>
      </div>
    </section>`,

  // Benötigt: concept, steps:[string]
  'concept-steps': (s, layer) => `
    <section class="slide-intervention-design">
      <div class="slide-content">
        <h3>Gestaltung und Umsetzung</h3>
        <div class="design-content">
          <div class="design-concept">${esc(t(s.concept, layer))}</div>
          <ol class="design-steps">
            ${(t(s.steps, layer) || []).map(step => `<li>${esc(step)}</li>`).join('')}
          </ol>
        </div>
      </div>
    </section>`,

  // Benötigt: resultsHeading, measurementLabel, effectLabel, modeling, measurement, realEffect
  'result-cards-3': (s, layer) => `
    <section class="slide-intervention-results">
      <div class="slide-content">
        <h3>${esc(s.resultsHeading)}</h3>
        <div class="results-grid">
          <div class="result-card">
            <div class="result-label">Modellierung</div>
            <div class="result-text">${esc(t(s.modeling, layer))}</div>
          </div>
          <div class="result-card">
            <div class="result-label">${esc(s.measurementLabel)}</div>
            <div class="result-text">${esc(t(s.measurement, layer))}</div>
          </div>
          <div class="result-card">
            <div class="result-label">${esc(s.effectLabel)}</div>
            <div class="result-text">${esc(t(s.realEffect, layer))}</div>
          </div>
        </div>
      </div>
    </section>`,

  // Benötigt: title, items:[{title, text}]
  'text-card-grid-2x2': (s, layer) => `
    <section class="slide-goldnuggets">
      <div class="slide-content">
        <h2>${esc(t(s.title, layer))}</h2>
        <div class="nuggets-grid">
          ${(s.items || []).map(item => `
            <div class="nugget-card">
              <h3>${esc(t(item.title, layer))}</h3>
              <p>${esc(t(item.text, layer))}</p>
            </div>`).join('')}
        </div>
      </div>
    </section>`,

  // Benötigt: title, phases:[{phase, activities:[string]}]
  'phase-cards-4': (s, layer) => `
    <section class="slide-teamprocess">
      <div class="slide-content">
        <h2>${esc(t(s.title, layer))}</h2>
        <div class="process-timeline">
          ${(s.phases || []).map((p, i) => `
            <div class="phase-card">
              <div class="phase-number">${String(i + 1).padStart(2, '0')}</div>
              <div class="phase-title">${esc(t(p.phase, layer))}</div>
              <ul class="phase-activities">
                ${(t(p.activities, layer) || []).map(a => `<li>${esc(a)}</li>`).join('')}
              </ul>
            </div>`).join('')}
        </div>
      </div>
    </section>`,

  // Benötigt: title, mainStatement, keyLearnings:[string]
  'statement-list': (s, layer) => `
    <section class="slide-conclusion">
      <div class="slide-content">
        <h2>${esc(t(s.title, layer))}</h2>
        <p class="conclusion-statement">${esc(t(s.mainStatement, layer))}</p>
        <div class="key-learnings">
          ${(t(s.keyLearnings, layer) || []).map(item => `<li>${esc(item)}</li>`).join('')}
        </div>
      </div>
    </section>`,

  // Benötigt: title, models:[{name, file, description}]
  'model-viewer-3d': (s, layer) => `
    <section class="slide-3d" data-slide-id="${sid(s)}">
      <div class="slide-content">
        <h2>${esc(t(s.title, layer))}</h2>
        <p class="model-description"></p>
        <model-viewer
          class="model-viewer-el"
          camera-controls
          auto-rotate
          shadow-intensity="1"
          exposure="1"
          interaction-prompt="auto"></model-viewer>
        <div class="model-buttons"></div>
      </div>
    </section>`,

  // Benötigt: title, description, src, poster
  'video-player': (s, layer) => `
    <section class="slide-video">
      <div class="slide-content">
        <h2>${esc(t(s.title, layer))}</h2>
        <p>${esc(t(s.description, layer))}</p>
        <video class="video-player-el" controls src="${esc(s.src)}" ${s.poster ? `poster="${esc(s.poster)}"` : ''}></video>
      </div>
    </section>`,

  // Benötigt: title, description, images:[{src, alt}]
  'image-gallery': (s, layer) => `
    <section class="slide-gallery" data-slide-id="${sid(s)}">
      <div class="slide-content">
        <h2>${esc(t(s.title, layer))}</h2>
        <p>${esc(t(s.description, layer))}</p>
        <div class="gallery-grid"></div>
      </div>
    </section>`,

  // Benötigt: title, nextSteps:[string], thanks, contact
  'closing-list': (s, layer) => `
    <section class="slide-closing">
      <div class="slide-content">
        <h2>${esc(t(s.title, layer))}</h2>
        <ul class="outlook-list">
          ${(t(s.nextSteps, layer) || []).map(item => `<li>${esc(item)}</li>`).join('')}
        </ul>
        <p class="closing-thanks">${esc(t(s.thanks, layer))}</p>
        <p class="closing-contact">${esc(s.contact)}</p>
      </div>
    </section>`,
};
