# Söldner B – Pixel-Art Designvorschau v0.2
Stand: 2026-10-16
Status: **Konzept zur ausdrücklichen Freigabe durch Game Director, nicht integriert**

## Grundlage
- GitHub-Regeln AGENTS.md, ECLIPSE_PROJECT.md, ECLIPSE_STATUS.md, ECLIPSE_DESIGN.md geprüft.
- Branch: `feature/mercenary-visual-preview`.
- Vorhandene `preview.html` ist weiterhin eine Einzelbild-Demo mit Transformations-Platzhaltern, **kein** produktionsfähiger Sprite-Atlas.
- Die neue Designvorschau wurde im Fach-Chat als Bild erstellt; sie ist **noch nicht als binäres Bildasset in GitHub abgelegt**.

## Neue visuelle Richtung
- Eigenständiger Söldner B in detailreicher, klar lesbarer Pixel-Art, inspiriert von BALL x PIT ohne kopierte Assets.
- Dunkles zerzaustes Haar, braun-schwarze Lederrüstung mit abgenutzten Metallplatten, dunkelroter Schal/Umhang, Stahl-Langschwert.
- Eindeutige Kopf-, Schulter-, Waffen- und Stiefelsilhouette für Smartphone-Darstellung.
- Gedämpfte dunkle Basisfarben; gezielte helle Metall-Highlights und roter Umhang als Wiedererkennung.
- Angriffe mit separaten Lichtbögen, Staub und Trefferpartikeln; keine Gameplay-Hitboxen.

## Dargestellte Konzeptzustände (keine geprüften Spriteframes)
- Idle, Run, Schwertschlag, Wirbelschlag, Ausweichen, Treffer, Tod.
- Die in der Illustration beschrifteten Framezahlen sind **grafische Konzeptangaben**, nicht tatsächlich exportierte, konsistente Einzelbilder und nicht final freigegeben.
- Animations- und Fussanker müssen erst nach Export einzelner PNGs gemessen und verifiziert werden.

## Nächster Produktionsschritt
1. Ausdrückliche Designfreigabe durch Game Director abwarten.
2. Danach echte transparente Einzelbilder pro Animation erstellen, beginnend mit Run; Frame-zu-Frame-Konsistenz prüfen.
3. Smartphone-Lesbarkeit in 32–64 px Darstellung, Alpha, gleichbleibende Ausrüstung und Bodenanker visuell prüfen.
4. Erst danach Atlas und isolierte animierte Vorschau erstellen und auf dem Branch dokumentieren.
5. Hauptzentrale koordiniert jede Integration in main und die tatsächlichen Gameplay-/Safari-Tests.

## Tests / Grenzen
- GitHub-Quellen und bestehende Vorschau: gelesen.
- Konzeptgrafik: erstellt, aber **kein Frame-Test, kein Safari-Test, kein Spieltest**.
- Keine Änderung an `game.js`, `index.html`, `style.css`, Gameplay oder `main`.
