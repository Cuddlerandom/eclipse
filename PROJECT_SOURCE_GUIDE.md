# ECLIPSE – Projektquellen und gemeinsame Regeln
Stand: 2026-10-16
Repository: https://github.com/Cuddlerandom/eclipse

## Dokumentzuständigkeiten
- ChatGPT-Projektanweisungen: kompakte Rollen und Arbeitsregeln; müssen vom Game Director separat aktualisiert werden.
- AGENTS.md: detaillierte Zuständigkeiten, Werkzeuge, Übergaben und Fertigmeldungen.
- ECLIPSE_PROJECT.md: Projektbeschreibung und Arbeitsorganisation.
- ECLIPSE_DESIGN.md: verbindliche visuelle Stilvorgaben und Designfreigaben.
- ECLIPSE_STATUS.md: belegter Entwicklungsstand und Teststatus.
- Quelldateien: tatsächlicher Code- und Assetstand, kein automatischer Test- oder Freigabenachweis.

## Autoritative Quellen
Die aktuellen GitHub-Dateien `AGENTS.md`, `ECLIPSE_PROJECT.md`, `ECLIPSE_STATUS.md`, `ECLIPSE_DESIGN.md` und der betroffene Code sind für Entwicklungsarbeiten massgeblich. Hochgeladene ChatGPT-Projektquellen synchronisieren sich nicht zwangsläufig automatisch mit GitHub.

## Rollen
Der Nutzer ist Game Director. Nur ein von ihm ausdrücklich ernannter Chat ist Hauptzentrale und zuständig für Gameplay, technische Leitung, Balancing, Programmierung, Integration und QA. Alle anderen Chats sind Fach-Chats für ihren zugewiesenen visuellen Bereich. Neue Chats ohne Auftrag fragen zuerst den Game Director. Niemand ernennt sich selbst zur Hauptzentrale.

## Fach-Chats
Erlaubt: Designs, Sprites, Animationen, visuelle Effekte, isolierte Vorschauen und eigene Assets/Branches. Nicht erlaubt ohne ausdrückliche Freigabe der Hauptzentrale: Gameplay-Werte, KI, Hitboxen, Balancing, gemeinsame Dateien (`game.js`, `index.html`, `style.css`), fremde Komponenten und Merges in `main`. Vorschauwerte sind Platzhalter.

## Übergabe und Zusammenarbeit
Fach-Chats übergeben Dateien, Branch/Commit/PR, Animationsangaben, Tests und bekannte Probleme. Nur die Hauptzentrale koordiniert die Integration ins Hauptspiel. Bestehende Funktionen und bestätigte Designs erhalten. Chats kommunizieren nicht automatisch; GitHub ist der gemeinsame Übergabepunkt.

## Projektanweisungen
Die kompakten Projektanweisungen des Game Directors sind der Einstieg für alle Chats. Diese GitHub-Dokumentation erläutert dieselben Regeln ausführlicher. Änderungen an Rollen und Zuständigkeiten darf nur der Game Director vornehmen.

## Plugins und Veröffentlichungen
Geeignete verbundene und berechtigte Werkzeuge zweckmässig nutzen, nicht alle automatisch. Plugins verändern keine Chat-Rollen. Ein Merge nach main bestätigt weder Laufzeittests noch Website-Bereitstellung. Hauptzentrale meldet diese Zustände getrennt und nennt Testlinks nur nach Prüfung.
