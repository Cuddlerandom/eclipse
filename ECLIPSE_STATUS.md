# ECLIPSE – Status und Übergaben
Stand: 2026-10-16
Verantwortlich für den Gesamtstatus: Hauptzentrale.

## Verifizierte technische Basis
- Browser-Spiel mit HTML, CSS und JavaScript/Canvas.
- Kerndateien: `index.html`, `game.js`, `style.css`.
- Vorhandene UI-Elemente: HP, XP, Gold, Wellen, Timer, Dash, Level-up, Werte und Freischaltungen.
- Dies bestätigt vorhandenen Code bzw. UI, nicht automatisch erfolgreiche Laufzeittests.

## Bereiche und Zuständigkeiten
| Bereich | Zuständig | Status |
|---|---|---|
| Gameplay, Werte, KI, Hitboxen, Integration, QA | Hauptzentrale | Zuständigkeit bestätigt; technische Bestandsaufnahme offen |
| Kriegerdesign und Animationen | Zugewiesener Krieger-Fach-Chat | Übergabe und Commit noch zu verifizieren |
| Wolfsdesign und Animationen | Zugewiesener Wolfs-Fach-Chat | Übergabe und Commit noch zu verifizieren |
| Visuelle Spielwelt | Zugewiesener Spielwelt-Fach-Chat | Übergabe und Commit noch zu verifizieren |
| Weitere visuelle Fachbereiche | Nach Zuweisung durch Game Director | Noch nicht verifiziert |

**Wichtig:** Fach-Chats sind nicht für Gameplay-Werte, KI, Balancing oder Einbindung in `main` zuständig. Isolierte visuelle Vorschauen sind erlaubt; Vorschauwerte sind Platzhalter.

## Grasland – bestätigter Integrationsstand
- Grasland-Renderer ist in `main` integriert; GitHub-Integration ist **nicht** gleichbedeutend mit visuell freigegebener oder erfolgreich auf dem iPhone getesteter Version.
- Game Director hat die Darstellung abgelehnt: zu gleichförmiger grüner Boden, alte Bäume/Felsen/Büsche weiterhin sichtbar.
- Überarbeitung durch Spielwelt-Fach-Chat nach BALL-x-PIT-inspirierter Pixel-Art-Stilvorgabe und Designfreigabe erforderlich. Bis dahin ist die neue Grasland-Gestaltung **nicht freigegeben**.
- Öffentliche Website-Bereitstellung und mobile Laufzeittests wurden nicht verifiziert.

## Offene Prüfungen
- Exakte aktuelle Spielversion und Gesamtspiel-Laufzeittests.
- Vollständiger Asset-Bestand und tatsächliche Fach-Commits.
- Animationsschnittstellen und Originalreferenzen.
- Integrations- und Regressionstests auf Desktop und mobilen Geräten.

## Statusdefinition
Geplant → in Entwicklung → Design/Asset fertig → isoliert getestet → zur Integration bereit → durch Hauptzentrale in `main` integriert → im Gesamtspiel getestet.

Nur verifizierte Übergaben, Commits und Tests als abgeschlossen markieren. Nach jeder Übergabe betroffene Dateien, Commit, offene Probleme und Integrationsstatus dokumentieren.

## Goblin – vorläufige visuelle Integration (2026-10-16)
- Fach-Branch `feature/goblin-assets`: fünf PNG-Sprite-Sheets, fünf GIFs und sechs Vorschau-PNGs auf GitHub vorhanden; ursprüngliche Animationsprototypen sind **nicht endgültig designfreigegeben**.
- Hauptzentrale: `game.js` zeichnet bei Gegner-Typ `normal` vorläufig Goblin-Spriteframes (Run, Attack, Hit), mit Fallback zur alten Darstellung. Die Sprites werden zurzeit per `raw.githubusercontent.com` aus dem Fach-Branch geladen; das ist eine technische Zwischenlösung, **keine endgültige Asset-Übernahme nach main**.
- `index.html` Cache-Query für `game.js` aktualisiert. Bestehende Gameplay-Werte, KI, Hitboxen, Spawnlogik nicht absichtlich verändert.
- Offene Arbeit: Bilder als lokale Assets auf `main` übernehmen, Animationen optisch überprüfen, Browser-/iPhone-Laufzeit prüfen, Animationen künstlerisch verfeinern, weitere Zustände (Idle/Death) im Spielablauf sauber anbinden.
- **Nicht durchgeführt:** Browser-Laufzeittest, iPhone-Test, öffentliche Website-/Deployment-Verifikation. Ein Commit beweist keine erfolgreiche Veröffentlichung.
