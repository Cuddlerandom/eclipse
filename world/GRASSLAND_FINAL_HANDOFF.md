# ECLIPSE – Grasland: Fachübergabe nach Designfreigabe

Branch: feature/chapter1-grassland-world
Freigabe: Game Director hat die visuelle Konzept-Richtung bestätigt. Die tatsächlich exportierten Grafiken müssen im Spiel nochmals visuell beurteilt werden.

## Gelieferte Dateien
- world/grassland.js: isolierter Pixelbodenrenderer, organische Farbvariationen, geschwungene Wege, Blüten, Kiesel, bewegte Grashalme; 64x64 Kachelcache.
- world/grassland-art.js: isolierte Asset-Zeichenfunktion mit expliziten Weltkoordinaten, Ankern und Skalierung.
- world/preview/grassland-final.html: isolierte Szene mit kuratierter Dekoration (keine Gameplay-Platzierung).
- assets/grassland/oak-mature.svg, pine.svg, amber-tree.svg, blossom-tree.svg: jeweils 112x128, Anker (56,128).
- assets/grassland/bush-lush.svg, bush-berry.svg: jeweils 72x56, Anker (36,56).
- assets/grassland/rock-moss.svg, rock-cluster.svg: jeweils 80x72, Anker (40,72).
- assets/grassland/grass-tuft.svg: 48x48, Anker (24,48).
- assets/grassland/stump.svg: 64x56, Anker (32,56).
- assets/grassland/flowers.svg: 48x40, Anker (24,40).
- Ältere Prototypen oak.svg, bush.svg, rock.svg bleiben im Branch zur Kompatibilität, sollten nicht für die finale Gestaltung verwendet werden.

## Einbindung durch Hauptzentrale
- Boden: EclipseGrassland.createGrassland({quality:'low'|'high'}).render(ctx,cameraX,cameraY,viewportWidth,viewportHeight,timeSeconds).
- Art: EclipseGrasslandArt.createRenderer('assets/grassland/').drawAt(ctx,name,worldX,worldY,scale).
- Alternativ: .drawObjects(ctx,[{name:'oak-mature',x:100,y:200,scale:1},...]).
- Bild-Anker sind der **visuelle Fussmittelpunkt**, nicht die Hitbox. Die Hauptzentrale bestimmt Objektpositionen, Layering, Kollisions- und Spawnlogik.
- Alte Weltobjekte nicht doppelt zeichnen. Bereits bestehende Gameplay-Objekte können rein visuell neu dargestellt werden, ohne ihre Kollisionen anzupassen.
- SVGs haben transparente Hintergründe und harte Pixelkanten. Auf Retina/iPhone im Canvas imageSmoothingEnabled=false setzen und Renderauflösung/Skalierung prüfen.
- Asset-Ladevorgang asynchron: drawAt liefert false, bis das Bild geladen ist. Keine Exceptions bei fehlenden Bildern vorgesehen; Fallback-Darstellung obliegt der Hauptzentrale.

## Tatsächliche Prüfungen
- Projektregeln und existierende Renderer auf GitHub gelesen.
- GitHub hat die Asset- und Preview-Commits bestätigt.
- Keine Browser-, iPhone-, FPS- oder Ingame-Tests durchgeführt.
- Pixelgrafiken sind eigenständig, aber vereinfachte SVG-Pixelgrafik, keine aus dem Konzeptbild extrahierten Sprite-Sheets.
- Kein Merge, keine Änderungen an main, game.js, index.html oder style.css.

## Noch offen
- Qualität im tatsächlichen Spielausschnitt visuell beurteilen.
- Z-Order vor/hinter Krieger und Gegnern festlegen; alte Objektgrafiken austauschen.
- Desktop- und iPhone-Performance sowie Asset-Pfade prüfen.
- Optional echte gerasterte PNG-Spriteatlanten erstellen, falls SVG im Zielbrowser unerwünscht ist.
