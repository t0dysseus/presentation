# Bedienungsanleitung – Präsentation "Räume für jeden"

## 1. Dateien

| Datei | Anfassen? | Zweck |
|---|---|---|
| `slides-config.js` | **Ja, ständig** | Alle Inhalte + Reihenfolge der Folien |
| `slide-templates.js` | Nur bei neuem Layout-Typ | Baupläne der Layouts |
| `presentation.js` | Nein | Technik (Reveal.js, Lightbox, 3D, Nav) |
| `index.html` | Nein | Grundgerüst |
| `presentation.css` | Nur für Design-Änderungen | Optik/Styling |

## 2. Folie hinzufügen

1. `slides-config.js` öffnen.
2. Ein bestehendes Objekt mit passendem Layout kopieren.
3. An der gewünschten Stelle in der Liste einfügen (Position = Reihenfolge in der Präsentation).
4. Inhalte anpassen (Text, Bilder, Titel).

```js
{
  layout: "image-text-thumbs-3",
  number: "02",
  title: "Meine neue Seite",
  text: "<ul><li>Punkt 1</li><li>Punkt 2</li></ul>",
  media: "images/mein-bild.jpg",
  thumbs: ["images/t1.jpg", "images/t2.jpg", "images/t3.jpg"]
}
```

## 3. Folie löschen / Reihenfolge ändern

- **Löschen:** Objekt in `slides-config.js` entfernen.
- **Reihenfolge:** Objekte in der Liste nach oben/unten verschieben.

## 4. Layout wechseln

Nur den Wert hinter `layout:` ändern. Welche Felder das neue Layout braucht, steht:
- im Kommentarblock ganz oben in `slides-config.js` (Kurzübersicht aller Layouts), oder
- direkt über der jeweiligen Funktion in `slide-templates.js` ("Benötigt: ...").

### Verfügbare Layouts

| Name | Aufbau |
|---|---|
| `title-slide` | Titelfolie |
| `icon-card-row` | 3 Kacheln mit Icon |
| `bullet-list` | Einfache Aufzählung |
| `quote-highlight` | Großes Zitat |
| `numbered-card-row` | 3 nummerierte Kacheln |
| `color-legend-list` | Farbige Legende |
| `media-card-grid` | Karten-Raster (Bild+Status) |
| `embedded-website` | Website im iframe |
| `text-image-thumbs-1/2/3` | Text + Bild + 1/2/3 Thumbnails |
| `dual-text-boxes` | 2 Textspalten + 3 Boxen |
| `image-text-image` | Bild \| Text \| Bild |
| `media-grid-2x2` | 2×2 Raster (Bild/3D/GIF) |
| `images-row-text-below` | 3 Bilder oben, Text unten |
| `section-divider` | Kapitel-Trenner |
| `badge-title-tags` | Nummer + Titel + Tags |
| `hypothesis-quote` | Hypothese als Zitat |
| `concept-steps` | Konzept + nummerierte Schritte |
| `result-cards-3` | 3 Ergebnis-Karten |
| `text-card-grid-2x2` | Karten-Raster mit Text |
| `phase-cards-4` | 4 Phasen-Karten |
| `statement-list` | Statement + Liste |
| `model-viewer-3d` | Interaktiver 3D-Viewer |
| `video-player` | Video |
| `image-gallery` | Bildergalerie mit Lightbox |
| `closing-list` | Ausblick + Dank |

## 5. Zweisprachigkeit (Standard / Leichte Sprache)

Bei jedem Textfeld statt eines Strings möglich:

```js
text: { standard: "Normaler Text", simple: "Einfacher Text" }
```

Pfeiltaste **↑** = leichte Sprache, **↓** = Standard. Ohne `{standard, simple}` gilt der Text für beide Ebenen.

## 6. Steuerung während der Präsentation

| Taste | Aktion |
|---|---|
| → / Space | Nächste Folie |
| ← | Vorherige Folie |
| ↑ / ↓ | Sprachebene wechseln |
| O | Übersichtsmodus |
| F | Vollbild |
| H | Diese Hilfe einblenden |
| Esc | Hilfe/Übersicht schließen |

## 7. Wenn etwas nicht angezeigt wird

- Browser-Konsole öffnen (F12 → Tab "Console").
- Erscheint eine Folie mit **⚠️-Warnung**: Layout-Name in `slides-config.js` falsch geschrieben – Schreibweise mit der Tabelle oben vergleichen.
- Andere Folien bleiben davon unberührt, nur die betroffene zeigt die Warnung.
