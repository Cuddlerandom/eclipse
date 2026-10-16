# Söldner B – echter transparenter Idle-Export (QA-Paket)

Stand: 2026-10-16 · Status: **isoliert exportiert, noch nicht produktionsreif**

## Erzeugte Dateien
Ein ZIP-Paket wurde im Krieger-Fach-Chat erstellt: `ECLIPSE_MercenaryB_Idle_QA_Package.zip`. Es liegt **als herunterladbare Chat-Datei vor, nicht als Binärdatei im GitHub-Repository**. Die Hauptzentrale muss es herunterladen und prüfen.

Inhalt:
- `mercenary_B_idle_sheet.png`: **echtes transparentes RGBA-PNG**, 1056 × 271 px, acht horizontale Frames.
- `frames/idle/idle_00.png` bis `idle_07.png`: acht transparente PNG-Frames, jeweils 132 × 271 px.
- `idle_checker_preview.png`: Vergleichsbild mit Schachbretthintergrund, nicht für das Spiel.
- `preview.html`: isolierte Animation mit 8 FPS als unverbindlichem Vorschauwert, Pause/Einzelbild.
- `manifest.json`: Format- und Ankerinformationen.
- `README.md`: Einschränkungen.

## Herkunft und Qualität
Die Bilder wurden **direkt aus dem vom Game Director freigegebenen Idle-Designblatt v0.2 ausgeschnitten** und der dort eingebackene Schachbretthintergrund wurde per automatischer Maskierung entfernt. Die Original-Farbpixel des Söldners bleiben weitgehend erhalten. Anders als neue KI-Bilder sind dies tatsächlich exportierte Einzelbilder. Die Maskierung ist nicht manuell pixelgenau nachgearbeitet; Ränder, lose Pixel, Restschatten und mögliche Transparenzfehler müssen überprüft werden. Die Frames des Konzeptblatts sind leicht unterschiedlich und **noch nicht als nahtloser Idle-Loop verifiziert**.

## Provisorischer visueller Vertrag
- Frame: 132 × 271 px, 8 Frames, horizontale Anordnung.
- Vorgeschlagener Pivot: x=66, y=263 (muss vor Integration mit Fussposition geprüft werden).
- Transparenz: RGBA PNG, Alpha vorhanden.
- Vorschau: 8 FPS, **kein Gameplay-Frametiming**.
- Keine Spielgeschwindigkeit, Hitbox, Kollision oder Gameplay-Werte.
- Der vorhandene `mercenary-animator.js` erwartet dagegen 6 Reihen in einem Gesamtatlas; dieser **einreihige Idle-Export ist damit noch nicht direkt kompatibel**. Anpassung gemeinsamer Schnittstellen durch Hauptzentrale.

## Tests
- Dateiexport mit Pillow/OpenCV abgeschlossen; PNGs und ZIP geschrieben.
- Sichtprüfung einer zusammengesetzten Schachbrett-Vorschau erfolgt.
- **Nicht getestet:** Browser-Vorschau auf iPhone, exakte Alpha-Kanten, nahtloser Loop, Renderqualität im echten Spiel, übrige fünf Animationen.

## Nächste Schritte
1. ZIP in GitHub-Branch als echte Binärdateien hochladen (GitHub-Connector dieses Fach-Chats kann nur UTF-8-Textdateien schreiben).
2. Game Director / Hauptzentrale prüfen Idle-Animation auf iPhone und geben die tatsächlichen Produktionsframes ausdrücklich frei.
3. Run, Attack, Dodge, Hit, Death als echte, konsistente PNG-Frames produzieren und isoliert prüfen.
4. Hauptzentrale legt Integrationsschnittstelle fest und übernimmt Integration/QA nach Freigabe.

**Kein Merge nach main und keine Gameplay-Änderung.**
