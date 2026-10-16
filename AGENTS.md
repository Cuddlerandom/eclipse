# ECLIPSE — Entwicklungsanweisungen für alle Chats und Coding Agents

Diese Datei gilt als gemeinsamer Leitfaden für Arbeiten am Repository. Vor jeder Änderung zusätzlich `ECLIPSE_PROJECT.md` lesen.

## Rollen
- **Game Director:** Nutzer; bestimmt kreative Richtung und Prioritäten.
- **Hauptzentrale:** ursprünglicher Chat „mein game“; bestätigt übergreifende Entscheidungen, Roadmap und Releases.
- **Technik-Chat:** koordiniert Architektur, Integration, Qualitätssicherung, Versionskonflikte und GitHub-Dokumentation.
- **Fach-Chats:** z. B. Krieger, Wölfe, Bosse, Spielwelt, Gameplay, UI; arbeiten an klar abgegrenzten Komponenten.

## Verbindlicher Ablauf
1. Zuerst den aktuellen Repository-Stand und `ECLIPSE_PROJECT.md` prüfen. Nie von einer alten Kopie ausgehen.
2. Zuständigkeit und betroffene Dateien vor der Änderung benennen.
3. Änderungen nach Möglichkeit in separaten Modulen, Assets oder Branches vornehmen; gemeinsame Kerndateien nur koordiniert verändern.
4. Vorhandenes Spielverhalten und Originaldesigns bewahren, sofern keine ausdrückliche Änderung beschlossen wurde.
5. Änderungen auf Fehler, mobile Darstellung, Performance, Steuerung und Animationen prüfen; ungeprüfte Funktionen nicht als getestet bezeichnen.
6. Nach jeder Arbeit einen Übergabebericht liefern: Ziel, Dateien, Änderungen, Schnittstellen, Teststatus, Probleme und Commit/PR.
7. Integrations- und Architekturkonflikte an den Technik-Chat geben; grundlegende Designentscheidungen an „mein game“.
8. Keine eigenmächtigen Releases oder umfangreichen Umstrukturierungen.

## Technischer Kontext
Browsergame „ECLIPSE – Survivors“ mit HTML, CSS und JavaScript/Canvas. Die tatsächlich vorhandenen Implementierungen in GitHub sind verbindlich. Vorhandene UI umfasst unter anderem HP, XP, Gold, Wellen, Dash, Level-up und Freischaltungen.

## Animationen und Assets
- Bisheriges Krieger-Design als Referenz erhalten.
- Flüssige, konsistente Frameabfolgen; kein ungewolltes Wellenlaufen.
- Unerwünschtes weisses Samurai-Schwert nicht erneut einführen.
- Sprite-Masse, Ankerpunkte, Frametiming, Hitboxen und Dateinamen bei Übergaben dokumentieren.
- Offene Designfragen anhand der Hauptzentrale bestätigen, nicht erfinden.

## Wichtig zur Chat-Kommunikation
ChatGPT-Projekt-Chats kommunizieren nicht automatisch miteinander. Diese Datei verschickt keine Nachrichten und erzwingt keine automatische Synchronisierung. Jeder Chat muss die GitHub-Dateien aktiv lesen; Änderungen müssen dort gespeichert und in der Hauptzentrale/Technik überprüft werden.
