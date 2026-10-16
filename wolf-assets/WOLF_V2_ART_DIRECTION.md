# Wolf V2 – Pixel-Art-Designstudie (2026-10-16)

## Status
**Designstudie, nicht freigegeben.** Die vorherigen V3-Sprites und das Testfeld sind technische Prototypen mit flachem Stil und **entsprechen noch nicht** dieser neuen Pixel-Art-Konzepttafel. Neue echte Animationssprites wurden nicht erzeugt oder ins Spiel integriert.

## Art Direction
- Stilreferenz: BALL x PIT (nur Qualität/Pixel-Art-Lesbarkeit; eigenständige Gestaltung).
- Kapitel 1: Grasland.
- Silhouette: kräftiger grauer Wolf, ausgeprägter Nacken, spitze Ohren, buschiger Schwanz, klare Pfoten.
- Kontrast: dunkle Rückenlinie, warme cremefarbene Schnauze/Brust/Pfoten, goldgelbe Augen; erkennbar auch in Smartphone-Grösse.
- Details: kontrollierte Pixelcluster, wenige klare Lichtstufen statt visueller Unruhe; keine glatten Vektorkonturen.
- Farbvarianten nur als optionale Konzeptvorschläge: Standard, Dunkel, Hell, Braun, Weiss. Keine Gameplay-Unterschiede.
- Animationen für spätere tatsächliche Umsetzung: idle, walk, run, sprint, bite, hit, death. Echte, konsistente Produktionsframes stehen aus.

## Prüfpunkte
1. Kleine Darstellung auf 375px breitem Mobilgerät; Augen, Kopf, Rückenlinie und Pfoten müssen unterscheidbar bleiben.
2. Kontinuierlicher Körperanker/Bodenpunkt; Pfotenfolge und Schwerpunktwechsel in walk/run/sprint.
3. Biss klar lesbar durch Kopf-/Kieferpose, ohne Gameplay-Hitboxen festzulegen.
4. Death-Endpose stabil, Hit-Reaktion deutlich, aber nicht übertrieben.
5. Stimmigkeit mit Krieger B und neuem Grasland nach visueller Freigabe prüfen.

## Übergabe / Tests
- Branch: assets/wolf-visual-preview-v3
- Bestehende Dateien: wolf-assets/HANDOFF_V3.md, wolf-assets/testfield.html
- Neue Datei: wolf-assets/WOLF_V2_ART_DIRECTION.md
- Konzeptbild wurde im Fach-Chat erzeugt, **noch nicht als PNG auf GitHub hochgeladen**.
- Keine neuen Animations-Spritesheets; Browser-/iPhone-Tests der V2-Kunst noch nicht durchgeführt.
- Keine Änderungen an game.js, index.html, style.css, main oder Gameplay.
- Freigabe: ausstehend (Game Director). Integration: ausschliesslich Hauptzentrale.
