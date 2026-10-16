# ECLIPSE – spielbarer Grasland-Visualtest

Branch: `integration/grassland-visual-playtest`.
Ausgangspunkt: `cd8133c5b474c8952c83167d32d92aa81694a006`.
Separater Test, keine Designfreigabe, kein Merge nach main, keine reguläre Spielveröffentlichung.

## Einbindung

- `index.html` lädt Boden-, Art- und Testintegrationsmodul vor `game.js`.
- `game.js` ersetzt nur den bisherigen Bodenblock und `drawTerrain` sowie initialisiert den visuellen Renderer. Steuerung, Bewegung, Kampf, Kollisionen, Hindernisgenerierung, Spawnwerte, Speicherlogik und Fortschritt bleiben bytegleich ausserhalb dieser visuellen Blöcke.
- `world/grassland-playtest.js` zeichnet vorhandene Terrainobjekte einmal an ihren bisherigen Weltpositionen. Baumgrafiken erhalten einen Kontaktbodenschatten bis zum bestehenden unteren Kollisionsrand; Felsgrafiken werden rein visuell um `o.r + 8*o.scale` nach unten versetzt, damit der sichtbare Felskörper zur bestehenden Kreisfläche passt. Die bisherigen `terrainAt`-Objekte und Kollisionsradien bleiben unverändert. Der vorhandene Boss-Arena-Ausblendfilter bleibt erhalten.
- Keine Verwendung der isolierten Demo-Verteilung aus `grassland-decor.js`; keine zweite Hindernisschicht.
- Die bisherige dekorative Zelldichte und Positionen werden weiterverwendet; neue Dekoration erzeugt keine Kollisionsobjekte. Variantenwahl verwendet getrennte Hash-Koordinaten, damit die Platzierungsbedingung nicht zwei Varianten ausschliesst.
- Bilder sind asynchron. Für noch nicht geladene/fehlende Hindernisgrafiken wird eine sichtbare Pixel-Ersatzfläche am bestehenden Collider gezeichnet. Fehlende dekorative Grafiken werden ausgelassen.
- Weltkoordinaten und vorhandene Kameratransformation bleiben erhalten; Pixelglättung ist aus. Viewports unter 900 CSS-Pixel Breite verwenden den vorhandenen `low`-Bodenrenderer mit Kachelcache, sonst `high`. Der Cache wurde auf den aktuellen Viewport-Arbeitssatz plus Randreserve angepasst, damit ein kompletter Bildausschnitt bei ungünstigen Kamerapositionen nicht pro Frame neu berechnet wird.

## Assetbestand und tatsächliche Prüfgrenze

Der echte Spiel-Zeichenpfad ist auf folgende elf neue SVGs verdrahtet und wurde automatisiert mit simulierten Canvas-/Image-Objekten über 121 Kamerapositionen aufgerufen. Alle elf wurden dabei als Zeichenaufruf beobachtet. Das ist **kein Nachweis eines echten Browserbildes**.

| Gruppe | Im Spiel verwendete Assets |
|---|---|
| Bestehende Baumhindernisse | oak-mature.svg, pine.svg, amber-tree.svg, blossom-tree.svg |
| Bestehende Felshindernisse | rock-moss.svg, rock-cluster.svg |
| Dekoration ohne zusätzliche Kollision | bush-lush.svg, bush-berry.svg, grass-tuft.svg, stump.svg, flowers.svg |

Ältere `oak.svg`, `bush.svg`, `rock.svg` bleiben im Repository, sind aber nicht in diesen Spiel-Zeichenpfad eingebunden. Keine Raster-Spriteatlanten vorhanden; die gelieferten Grafiken sind vereinfachte SVG-Pixelgrafiken.

## Tatsächlich durchgeführt

- Aktuelle Branch-Regeln und betroffene Quelldateien gelesen.
- 14 vorhandene SVG-Dateien erfolgreich als XML geparst.
- Syntaxprüfung von `game.js`, `world/grassland.js` und `world/grassland-playtest.js` erfolgreich.
- `git diff --check` erfolgreich.
- Zusätzliche unabhängige Codeprüfung hat Cache-Thrashing und Felsanker-Versatz aufgedeckt; beide mit zuvor fehlschlagenden Regressionstests korrigiert.
- `node --test tests/grassland-playtest.test.cjs assets/mercenary/animation-work/mercenary-animator.test.mjs`: 10 erfolgreiche Testeinträge, 0 Fehler.
- Tests prüfen: ein Zeichenaufruf je bestehendem Collider, Fussanker, sichtbare Ladefehler-Ersatzgrafiken, deterministische Dekoration, unveränderte Objektwerte, unveränderte Kameraübergabe, unveränderten Nicht-Visual-Code, alle elf Assets im integrierten Terrain-Zeichenpfad, Boss-Arena-Filter und Wiederverwendung von Bodenkacheln bei mobilem Viewport sowie bei Kameraoffset (63,63) in 390x844 und 1920x1080.
- Der neue Integrationstest hat anfangs zwei fehlende Dekorvarianten aufgedeckt: korrelierte Hashwerte. Die rein visuelle Variantenwahl wurde korrigiert; danach alle Tests grün.

## Nicht durchgeführt / offene Probleme

- Der für Sites vorgeschriebene `control-browser`-Zugang ist nicht verfügbar. Keine echten Browser-, Screenshot-, Safari-/iPhone-, FPS- oder Touch-Laufzeittests durchgeführt. Simulierte Tests bestätigen nicht die gesamte Spielbarkeit.
- SVG-Ausgabe, Pixelkanten auf Retina, Gesamtgestaltung und Performance müssen am iPhone beurteilt werden. Keine Designfreigabe behauptet.
- Die vorhandene Zeichenreihenfolge bleibt erhalten: Terrain vor Gegnern und Krieger. Es gibt keine neue dynamische Verdeckung von Figuren durch Baumkronen.
- Dekorative Büsche/Stümpfe sind passierbar; ihre Grafik fügt keine Hitbox hinzu. Bestehende Hindernisse behalten die alten Kollisionsradien, nicht die komplette neue sichtbare Silhouette.
- Ladefehler-Ersatzflächen sind bewusst sichtbare Platzhalter, keine freigegebenen Grafiken.
- Neuer Website-Ursprung: der Browser-Spielstand der regulären Version wird nicht auf diese Testseite übertragen.

## Bereitstellung

Die separate private Testseite wird aus diesem Branchstand bereitgestellt. Die tatsächliche Deployment-Bestätigung und URL werden im Chat gemeldet; dieses Dokument allein ist keine Erreichbarkeitsbestätigung.
