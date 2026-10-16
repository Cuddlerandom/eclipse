# ECLIPSE – Söldner B: Übergabe an Hauptzentrale

**Status: Visueller Entwurf zur Prüfung, NICHT integrationsbereit.**

## Verifiziert auf Branch `feature/mercenary-visual-preview`
- `preview.html`: isolierte Bedienvorschau mit Original-Einzelbild und künstlichen Posen; keine echten Spriteframes.
- `mercenary-animator.js`: unabhängiger ES-Modul-Controller mit Zuständen idle, run, attack, dodge, hit, death. Die Clipzahlen sind provisorisch und die benötigte Atlas-Datei fehlt.
- `mercenary-animator.test.mjs`: Logiktests aus früherem Arbeitsstand, keine mobilen Laufzeittests.
- `PIXEL_ART_DESIGN_V02.md`: Konzeptdokument, keine exportierten Bilddateien.
- `MERCENARY_ANIMATION_SPEC.md`: Arbeitsvorschlag mit 8 Run-Frames und 96 × 112 Arbeits-Canvas, nicht freigegeben.

## Aktuelle Designrichtung
Dunkles zerzaustes Haar, braun-schwarze Lederrüstung, dunkelroter Umhang/Schal, gerades Stahlschwert; klare Pixel-Art-Silhouette, keine wellenförmige Animation, kein weisses Samurai-Schwert. BALL x PIT ausschliesslich als Stilreferenz.

## Blocker vor Spielintegration
1. Echte, transparente, konsistente Sprite-Frames mit überprüften Abmessungen und Ankern fehlen.
2. Produktions-Atlas und Metadaten fehlen.
3. Einzelbild in Preview wird extern über Adobe-Short-URL geladen (nicht dauerhaft gesichert).
4. Pixel-Art-Konzeptblätter aus dem Fach-Chat sind nicht als GitHub-Binärdateien vorhanden und dürfen nicht als fertige Animation ausgegeben werden.
5. Game-Director-Freigabe für finale Sprites und iPhone-Safari-Test fehlen.

## Integrationsvertrag (Vorschlag, nicht verbindlich)
- Zustand: `idle`, `run`, `attack`, `dodge`, `hit`, `death`.
- Gemeinsamer Bodenanker je Frame, identischer Massstab, transparente PNG-Frames.
- Erst nach Frame-QA einen horizontalen Atlas pro Zustand erzeugen; `drawMercenaryFrame(ctx,atlas,frame,opts)` erwartet derzeit alle sechs Zustände in fixen Zeilen und je Zustand feste Framezahlen. Bei nur teilweisem Atlas Controller/Renderer durch Hauptzentrale prüfen und anpassen.
- Fallback auf bisherige Kriegergrafik, bis alle Assets nachweislich geladen sind.

## Prüfstatus
- GitHub-Quellen und vorhandene Branch-Dateien gelesen.
- **Nicht durchgeführt:** Browser-, iPhone-, Sprite-Alpha-, Animations-Loop- und Integrationstests.
- **Nicht geändert:** `main`, `game.js`, `index.html`, `style.css`, Gameplay.

## Entscheidung für Hauptzentrale
Bitte **noch nicht integrieren**. Designvorschau durch Game Director prüfen lassen; danach echte Sprites exportieren, visuell testen, Assets im Feature-Branch versionieren und erst dann durch Hauptzentrale integrieren.
