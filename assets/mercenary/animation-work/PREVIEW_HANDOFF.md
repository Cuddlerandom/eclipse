# Söldner B – isolierte visuelle Testszene
Stand: 2026-10-16

## Bereich / Ziel
Krieger-Fach-Chat: Originalkrieger in einer eigenständigen, berührungsfreundlichen Vorschau ansehen, ohne das Hauptspiel zu verändern.

## Dateien / Branch
- Branch: `feature/mercenary-visual-preview`
- Neu: `assets/mercenary/animation-work/preview.html`
- Bestehend (unverändert): `mercenary-animator.js`, `mercenary-animator.test.mjs`
- Keine Änderung an `game.js`, `index.html`, `style.css` oder Gameplay.

## Bedienung
- Im Browser `preview.html` öffnen.
- Buttons: Stehen, Laufen, Angriff, Ausweichen, Treffer, Richtung wechseln.
- Tastatur: Pfeil links/rechts für Laufrichtung; Leertaste für Angriffs-Pose.
- Der sichtbare Krieger verwendet die Originalbild-URL aus der bestehenden `game.js`.

## Grafische Vorschau-Metadaten
- Keine Sprite-Frames vorhanden: **ein** Originalbild, nur visuelle Pose-Transformationen.
- Darstellungsfläche: 800 × 500 Canvas; Krieger in Vorschau 160 × 220 px.
- Fussanker: (80, 220) relativ zum dargestellten Bild, Canvasposition (400, 375).
- Animationszustände der Vorschau: idle, run, attack, dodge, hit.
- Zeitverhalten: Vorschau-Loop über requestAnimationFrame; **keine verbindlichen FPS/Gameplay-Timings**.
- Sämtliche Verschiebungen und Winkelausschläge sind **Dummy-Werte für die Vorschau**.
- Kein Gameplay, keine Hitboxen, kein Schaden, keine KI oder Geschwindigkeit.
- Diese Datei ist **kein** Ersatz für die noch fehlenden echten, konsistenten Spriteframes.

## Tests
- GitHub-Datei erfolgreich angelegt.
- Laufzeit auf Desktop/iPhone Safari: **nicht getestet**.
- Bildladeverhalten: **nicht verifiziert**, Adobe-Short-URL kann auslaufen.
- Modul-Logiktests aus vorheriger Übergabe: bestanden, aber **nicht** identisch mit Browser-Test der Vorschau.

## Bekannte Probleme
- Externe Originalgrafik ist nicht als dauerhaftes Repo-Asset verfügbar.
- Der sichtbare Effekt bleibt eine Einzelbild-Vorschau, keine echte Laufanimation.
- GitHub Pages veröffentlicht standardmässig nicht automatisch Dateien eines Feature-Branches. Hauptzentrale muss für Online-Test Branch-Preview hosten oder Datei lokal öffnen.
- Die tatsächliche Spielintegration und Gesamtspieltests sind **nicht erfolgt**.

## Für die Hauptzentrale
1. Branch-Vorschau prüfen und dem Game Director zugänglich machen.
2. Originalbild dauerhaft sichern und freigegebene konsistente Spriteframes erstellen lassen.
3. Erst danach Integration in das Hauptspiel und QA durch Hauptzentrale.
4. Kein Merge oder Release durch den Fach-Chat.
