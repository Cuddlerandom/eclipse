# ECLIPSE – Zentrale Projektdokumentation
Stand: 2026-10-16
Repository: https://github.com/Cuddlerandom/eclipse

## Verbindliche visuelle Richtung
ECLIPSE orientiert sich stilistisch an **BALL x PIT**: hochwertige, gut lesbare Pixel-Art mit atmosphärischen Umgebungen, eigenständigen Sprites und stimmigen Effekten. Die Referenz betrifft ausschliesslich die visuelle Gestaltung, nicht Gameplay-Mechaniken oder das Kopieren fremder Grafiken. Die detaillierten Anforderungen stehen in `ECLIPSE_DESIGN.md`; alle Fach-Chats prüfen sie vor visueller Arbeit. Der Game Director genehmigt Vorschauen vor der Integration.

## Spiel und technische Grundlage
ECLIPSE – Survivors ist ein browserbasiertes Action-Survivors-Spiel mit HTML, CSS und JavaScript/Canvas. Der aktuelle Code auf GitHub ist verbindlich.

Bei der Prüfung vom 2026-10-16 wurden `index.html`, `game.js` und `style.css` als Kerndateien vorgefunden. `index.html` enthält das Canvas `game` und bindet `style.css?v=080` sowie `game.js?v=0113` ein. Diese Query-Parameter sind keine verifizierte Spielversionsnummer. Die Oberfläche enthält unter anderem HP, XP, Gold, Wellenstatus, Timer, Dash, Level-up, Werte und Freischaltungen. Tatsächliche Funktion und Balancing sind vor Änderungen am Code zu prüfen.

## Verbindliche Rollen
- **Game Director:** Nutzer; entscheidet über Vision, Design, Prioritäten und Zuständigkeiten.
- **Hauptzentrale:** Nur der vom Game Director ausdrücklich bestimmte Chat; technische Leitung, Gameplay, Programmierung, Balancing, Integration und Qualitätssicherung.
- **Fach-Chats:** Alle übrigen Chats, jeweils nur für den zugewiesenen visuellen Bereich. Neue Chats ohne Auftrag fragen den Game Director. Niemand ernennt sich selbst zur Hauptzentrale.

## Zuständigkeiten
Fach-Chats liefern ausschliesslich visuelle Designs, Sprites, Animationen, visuelle Effekte, Umgebungen und isolierte Vorschauen. Eigene Branches und Asset-Dateien sind erlaubt. Platzhalterwerte für Vorschauen sind ausdrücklich unverbindlich.

Nur die Hauptzentrale entscheidet und programmiert Gameplay-Werte und -Mechaniken: HP, Schaden, Rüstung, Bewegung, Angriff, KI, Hitboxen, Spawn, XP, Gold, Talente, Fähigkeiten, Progression, Balancing und gemeinsame Spielschnittstellen. Fach-Chats ändern diese nicht eigenmächtig.

## GitHub und Integration
1. Vor jeder Entwicklungsaufgabe `AGENTS.md`, `ECLIPSE_PROJECT.md`, `ECLIPSE_STATUS.md`, `ECLIPSE_DESIGN.md` sowie betroffene aktuelle Quelldateien prüfen.
2. Fach-Chats entwickeln Assets und isolierte Vorschauen möglichst in eigenen Branches; sie verändern `game.js`, `index.html`, `style.css`, Gameplay-Module oder fremde Komponenten nur mit vorheriger Freigabe der Hauptzentrale.
3. Die Hauptzentrale koordiniert Änderungen an `main`, überprüft Schnittstellen und Regressionen und integriert Komponenten in die spielbare Hauptversion.
4. Bestehende Funktionen und bestätigte Designs bleiben erhalten, solange der Game Director nichts anderes beschliesst.
5. Chats kommunizieren nicht automatisch. GitHub ist der gemeinsame Übergabepunkt.

## Übergabeformat
- Fachbereich, Auftrag und Ergebnis
- Neu erstellte oder geänderte Dateien
- Branch, Commit oder Pull Request
- Sprite-Masse, Ankerpunkte, Animationszustände und Frametiming (falls relevant)
- Schnittstellen und Abhängigkeiten
- Durchgeführte Tests und nicht getestete Teile
- Bekannte Probleme und Hinweise für die Hauptzentrale

## Werkzeuge und Freigaben
Passende verfügbare, verbundene und autorisierte Plugins/Werkzeuge werden je nach Aufgabe eingesetzt, nicht pauschal alle. Werkzeuge ändern keine Zuständigkeiten: Fach-Chats bleiben für isolierte visuelle Arbeiten zuständig; Hauptzentrale verantwortet Integration, Gameplay und QA. Die verbindliche Prozessregel steht in `AGENTS.md`.

## Veröffentlichung und Rückmeldung
Asset-Fertigstellung, Designfreigabe, Integration, Merge nach `main`, Laufzeittest und öffentliche Website-Veröffentlichung sind getrennte Zustände. Die Hauptzentrale meldet nach jeder Entwicklungsarbeit den belegten Stand, offene Probleme und einen Testlink nur bei bestätigter Verfügbarkeit. Cache-Query-Parameter sind keine bestätigte Versionsnummer.

## Entwicklungsstatus
Aktuelle Fortschritte, bestätigte Übergaben und Integrationsstatus stehen in `ECLIPSE_STATUS.md`. Gestalterische Vorgaben stehen in `ECLIPSE_DESIGN.md`. Nicht belegte Angaben sind offen und dürfen nicht als endgültig ausgegeben werden.
