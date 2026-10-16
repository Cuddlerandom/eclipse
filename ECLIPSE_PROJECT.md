# ECLIPSE — Zentrale Projektdokumentation

Stand: 2026-10-16
Repository: https://github.com/Cuddlerandom/eclipse

## 1. Projekt und Zuständigkeiten
ECLIPSE – Survivors ist ein browserbasiertes Spiel mit HTML, CSS und JavaScript (Canvas).
Dieser Chat ist die **Hauptzentrale und technische Koordination** für Entscheidungen, Versionen und Integration. Der frühere Chat „mein game“ existiert nicht mehr. Weitere Projekt-Chats entwickeln abgegrenzte Komponenten (Krieger, Gegner/Wölfe, Bosse, Spielwelt, Gameplay, UI, Tests). GitHub ist die gemeinsame technische Quelle; Chats synchronisieren Änderungen nicht automatisch.

## 2. Verifizierter technischer Stand
- `index.html` bindet `style.css?v=080` und `game.js?v=0113` ein.
- Das Spiel nutzt ein `canvas` mit der ID `game`.
- Sichtbare UI: Lebenspunkte, Erfahrung, Level, Gold, Wellenstatus, Timer, Werte-Panel, Dash-Steuerung, Level-up-Auswahl, Endbildschirm und Freischaltungen.
- Die Oberfläche ist auf Deutsch und für mobile Bedienung ausgelegt.
- Exakte interne Implementierungen und der aktuelle Funktionsumfang sind vor jeder Änderung in den jeweiligen Quelldateien zu prüfen.

## 3. Gestaltungs- und Animationsziele
- Krieger-Design B ist die bisherige Referenz; vor verbindlichen Sprite-Änderungen Originalgrafiken und Hauptzentrale prüfen.
- Ziel: flüssige, nachvollziehbare Bewegungs- und Kampfanimationen mit konsistenten Frames.
- Bekannte Prüfpunkte aus der Entwicklung: wellenförmige Laufbewegung und unerwünschtes weisses Samurai-Schwert.
- Die 13 diskutierten Animationsarten sind im alten Chat zu verifizieren, bevor konkrete Namen/Framezahlen als endgültig dokumentiert werden.
- Wölfe und andere Gegner müssen optisch und technisch zur bestehenden Spielwelt passen.

## 4. Regeln für jeden Entwicklungs-Chat
1. Zuerst diese Datei und die betroffenen aktuellen GitHub-Dateien lesen.
2. Vor Änderungen bestehende Schnittstellen, Dateinamen und Abhängigkeiten prüfen.
3. Eigenständige Module/Assets bevorzugen; bestehende Spielmechanik nicht ungefragt ersetzen.
4. Kein unkoordiniertes Überschreiben gemeinsamer Dateien wie `game.js`.
5. Neue Grafiken mit eindeutigen Namen, konsistenten Abmessungen, transparenten Hintergründen (wenn passend) und dokumentierten Animationszuständen liefern.
6. Jede Änderung mit betroffenen Dateien, Funktionsweise, Abhängigkeiten und Teststatus dokumentieren.
7. Keine nicht getestete Änderung als fehlerfrei bezeichnen.
8. Konflikte oder Architekturentscheidungen an die Hauptzentrale zur Entscheidung zurückgeben.

## 5. Übergabeformat an die Hauptzentrale
- Bereich / Entwicklungs-Chat:
- Ziel und Ergebnis:
- Dateien neu / geändert:
- Schnittstellen und Abhängigkeiten:
- Bedienung / Animationen / Frameangaben:
- Tests (bestanden / offen / nicht durchgeführt):
- Bekannte Probleme:
- GitHub-Commit oder Pull Request (falls vorhanden):
- Integrationsschritte:

## 6. Integrationsablauf
1. Aktuelle Hauptversion prüfen.
2. Änderungen in eigenem Branch oder isolierten Dateien entwickeln, sofern möglich.
3. Komponente einzeln testen.
4. In der Hauptzentrale Konflikte, Schnittstellen und Darstellung prüfen.
5. Zusammenführung kontrolliert durchführen und das Gesamtspiel erneut testen.
6. Versionsstand und offene Probleme hier dokumentieren.

## 7. Offene Bestätigungen
- Exakte aktuelle Spielversion (Datei-Query-Parameter sind keine sichere Versionsangabe).
- Vollständige Liste der 13 Animationsarten.
- Endgültige Sprite-Masse, Frameraten, Grafikstil und Dateistruktur.
- Aktuelle Roadmap und Prioritäten aus dem vorhandenen Projektkontext.

**Grundsatz:** Der reale Repository-Stand und die bestätigten Entscheidungen des Game Directors und der Hauptzentrale haben Vorrang vor Annahmen aus Neben-Chats.

## Verbindliche Integrationsrechte für alle bestehenden und neuen Fach-Chats
1. Jeder Fach-Chat darf seine eigenen Komponenten selbstständig entwickeln, in seinem eigenen Branch einbauen und dort testen. Einbau bedeutet **nicht** automatisch Freigabe für `main`.
2. Vor der Arbeit aktuelle GitHub-Dateien `AGENTS.md`, `ECLIPSE_PROJECT.md`, `ECLIPSE_STATUS.md`, `ECLIPSE_DESIGN.md` und betroffene Quelldateien prüfen.
3. Fach-Chats dürfen neue isolierte Dateien und Assets für ihren Bereich erstellen. Änderungen an gemeinsam genutzten Dateien (insbesondere `game.js`, `index.html`, `style.css`), öffentlichen Schnittstellen oder fremden Komponenten **vorher mit der Hauptzentrale abstimmen**; nicht eigenmächtig auf `main` schreiben.
4. Für übergreifende Anpassungen eine konkrete Änderung samt betroffenen Dateien und Abhängigkeiten vorschlagen und auf Freigabe warten; bevorzugt Pull Request/Branch statt direkter Änderung der Hauptversion.
5. Vor einer Übergabe eigene Tests dokumentieren und Commit/Branch/PR, Dateien, Schnittstellen, offene Fehler und Integrationsanleitung nennen. Ohne Nachweis kein Status „integriert“ oder „getestet“.
6. Nur die Hauptzentrale koordiniert das Zusammenführen in `main`, prüft Konflikte und Regressionen und dokumentiert den Integrationsstatus in `ECLIPSE_STATUS.md`. Releases und grosse Architekturänderungen benötigen Koordination; kreative Entscheidungen trifft der Game Director.
7. Diese Regeln gelten auch für **neu erstellte Chats**. Projektanweisungen sind der Einstieg; GitHub bleibt die aktuelle Wahrheit. Chats kommunizieren nicht automatisch miteinander.
