# Söldner B – Übergabe zur Freigabeprüfung durch Hauptzentrale
Stand: 2026-10-16
Branch: `feature/mercenary-visual-preview`
PR: https://github.com/Cuddlerandom/eclipse/pull/5 (**Draft / nicht merge-bereit**)

## Entscheidungsstatus
**Nur zur technischen Sichtung und Produktionsfreigabe-Vorbereitung. KEINE Integrationsfreigabe.** Der Game Director hat die visuelle Charaktervorlage bestätigt, aber nicht die tatsächlichen exportierten PNG-Dateien als Produktionsassets freigegeben.

## Reale Lieferdateien
Das Chat-Artefakt `ECLIPSE_MercenaryB_Production_Review.zip` muss separat heruntergeladen und auf den Branch hochgeladen werden. Es befindet sich noch **nicht** als Binärdatei auf GitHub.
- `mercenary_B_idle_sheet.png` – echtes RGBA-PNG, 1056 × 271 px, 8 Frames horizontal, jeweils 132 × 271 px.
- `idle_00.png` bis `idle_07.png` – dieselben Bilddaten einzeln.
- `preview.html` – isolierte Browser-Vorschau lädt das tatsächliche PNG-Sheet, kein separates Konzeptbild.
- `REAL_ASSET_PREVIEW.png` – aus den realen PNGs erstellte Vergleichstafel mit 48 px Darstellung.
- `QA_STATUS.txt` – bekannte Grenzen.

SHA-256 des ZIPs: `6d1ae392aba25ba646816b0ddb0d227e1fe85363d8b94bf8b4fc240c00ab3a61`
SHA-256 des Idle-Sheets: `a7ee81b28b5c849e90d26d68b15c95ce953ba67a73cd08d36cc7cdf189167a26`

## Vorschau- und Schnittstellenhinweise
- Idle: 8 Frames; Demo-Timing 8 FPS (nur Vorschau).
- Fussanker: bisher **nicht final verifiziert**. Früherer Vorschlag (66,263) ist nicht freigegeben.
- Die Darstellung mit 48 px Höhe ist ein QA-Beispiel, keine von der Hauptzentrale festgelegte endgültige Spielgrösse.
- Das bestehende `mercenary-animator.js` erwartet sechs Atlas-Zeilen und ist mit dem einzelnen Idle-Strip **nicht direkt kompatibel**. Die Hauptzentrale bestimmt gemeinsame Schnittstellen.
- Run, Attack, Dodge, Hit und Death sind **nicht als verwendbare Produktionsframes vorhanden**. Früherer Export v0.3 hat sichtbare Fehler und ist gesperrt.

## Tatsächlich geprüft
- ZIP und PNG-Dateien lokal vorhanden und lesbar.
- RGBA-Sheet 1056 × 271 bestätigt; acht einzelne Frames vorhanden.
- Alpha nur 0 oder 255; potenziell harte Freistellungsränder.
- Isolierte HTML-Vorschau erstellt, aber **nicht im Browser/iPhone ausgeführt**.
- Kein erfolgreicher 1:1-Qualitätsnachweis, kein bestätigter Loop oder einheitlicher Fussanker.
- Keine Spielintegration, kein iPhone-Gesamtspieltest, kein Release.

## Arbeitsauftrag für die Hauptzentrale
1. ZIP aus der Chat-Übergabe übernehmen und unverändert auf den Fach-Branch hochladen; SHA-256 vergleichen.
2. PNGs direkt im tatsächlichen Spielmassstab auf iPhone prüfen, Transparenzränder und Fussanker dokumentieren.
3. Bei Qualitätsmängeln an den Krieger-Fach-Chat zur visuellen Korrektur zurückgeben; keine stillen Vereinfachungen.
4. Erst nach ausdrücklicher **Asset-Datei-Freigabe** des Game Directors und vollständigen, geprüften Animationsassets technische Integration planen.
5. Draft-PR nicht mergen; keine Änderungen an `main`, `game.js`, `index.html`, `style.css` oder Gameplay durch Fach-Chat.

## Blocker
Der verfügbare GitHub-Connector kann nur UTF-8-Text schreiben, nicht die lokalen Binär-PNGs. Deshalb ist die GitHub-Übergabe aktuell **Dokumentation + separates ZIP**, nicht vollständig im Repository.
