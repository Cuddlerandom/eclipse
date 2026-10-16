# Kapitel 1 – Grasland: Asset-Übergabe, Stand 2026-10-16

**Fach-Chat:** Spielwelt. **Status:** erster echter Asset-Satz und isolierte Vorschau; **nicht final freigegeben**.

## Dateien
- `assets/grassland/oak.svg` — 96 × 112 px; Anker (48,112), Baumfuss
- `assets/grassland/bush.svg` — 64 × 48 px; Anker (32,48), Bodenmitte
- `assets/grassland/rock.svg` — 64 × 56 px; Anker (32,56), Bodenmitte
- `assets/grassland/flowers.svg` — 48 × 40 px; Anker (24,40), Stielbasis
- `world/grassland-decor.js` — isolierter dekorativer Canvas-Renderer
- `world/preview/index.html` — Vorschau ohne Gameplay
- `world/grassland.js` — bisheriger Bodenrenderer, **noch nicht visuell final überarbeitet**

## Visualisierung und Schnittstelle
SVG-Grafiken mit Pixelkanten (`shape-rendering:crispEdges`), transparente Hintergründe, gemeinsame Grasland-Palette. Assets werden im Browser als Bilder geladen. `window.EclipseGrasslandDecor.createDecor({assetBase:'assets/grassland/'})` erstellt einen Renderer; `decor.render(ctx,cameraX,cameraY,width,height)` zeichnet dekorative Objekte in Weltkoordinaten. `decor.items` enthält die visuellen Masse und Ankerpunkte.

**Wichtig:** Die prozedurale Vorschau-Platzierung ist ausschliesslich ein **visueller Platzhalter**. Sie darf nicht als tatsächliche Objekt-Spawn- oder Kollisionslogik übernommen werden. Die Hauptzentrale muss die Positionen anhand des bestehenden Spiels und dessen Gameplay-Regeln festlegen. Keine Gameplay-Hitboxen definiert.

## Tests und offene Punkte
- Verifiziert: GitHub-Commits für die Text/SVG-Dateien erstellt.
- Nicht durchgeführt: Browser-/iPhone-Rendering, FPS, Integration, Kollisions-/Gameplay-Tests.
- Offen: Bodenrenderer umfassend überarbeiten (weniger flächige Farben, organische Übergänge), zusätzliche Vegetation/Felsenvarianten, zusammenhängendes endgültiges Sprite-Set, finale Designfreigabe durch Game Director.
- `main`, `game.js`, `index.html`, `style.css` nicht verändert.

## Für Hauptzentrale
Die Vorschau und den Asset-Satz prüfen, **noch nicht integrieren**, bis der Game Director die tatsächlichen Spielgrafiken freigibt. Die bisherigen Konzeptbilder sind Art-Direction-Referenzen, keine exportierten Ingame-Sprite-Sheets.
