# Kapitel 1 — Grasland (Fach-Übergabe)
Bereich: Spielwelt. Game-Director-Entscheid: Kapitel 1 ist Grasland.

## Dateien
- Neu: `world/grassland.js` (isolierter Canvas-Hintergrundrenderer)
- Keine bestehenden Dateien verändert.

## Schnittstelle
Nach Freigabe durch Hauptzentrale Script vor `game.js` laden:
`<script src="world/grassland.js"></script>`
Instanz: `const grassland = window.EclipseGrassland.createGrassland({quality:'high'});`
In der Weltkoordinaten-Zeichenphase, vor Spielfiguren/Gegnern: `grassland.render(ctx,cameraX,cameraY,W,H,t);`
Wichtig: `game.js` zeichnet bereits einen kompletten Terrain-Hintergrund. Die Hauptzentrale muss die bestehende Boden-Zeichenschleife gezielt ersetzen oder umschalten, sonst überdeckt sie das Modul. Die bestehende `drawTerrain`-Funktion für Hindernisse nicht blind entfernen.

## Gestaltung
Helle Wiesen mit organischen Grünflächen, geschwungenem Erdweg, kleinen Blumen, Kieseln und dezent animierten Grashalmen. Weltkoordinaten-stabile, deterministische Verteilung. Option `quality:'low'` reduziert Grasstriche und Animation für Mobilgeräte.

## Teststatus
Code geschrieben; Browser-/iPhone-Laufzeittests und Integration offen. Keine Aussagen zu FPS oder Fehlerfreiheit. Keine Änderungen an Steuerung, Kampf, Hitboxen, Spawns oder Speicherstand.

## Integration
Hauptzentrale prüft den aktuellen `draw()`-Hintergrundblock in `game.js`, entscheidet über Renderreihenfolge und mobile Qualitätswahl und führt Integrationstests durch. Keine eigenmächtige Änderung an `main`.
