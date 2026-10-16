# Produktions-PNG-QA: Söldner B (2026-10-16)

**Nicht integrationsfreigegeben.** Der Game Director verlangt Produktionsdateien, die 1:1 mit der gezeigten Vorschau identisch sind.

## Tatsächlich erzeugte Dateien (Chat-Paket)
- `ECLIPSE_MercenaryB_Production_Review.zip` (in dieser Unterhaltung bereitgestellt, **nicht** auf GitHub)
- `mercenary_B_idle_sheet.png`: RGBA, 1056 × 271 px, 8 × (132 × 271) Frames.
- `idle_00.png` bis `idle_07.png`: exakt aus diesem Sheet geschnittene RGBA-PNGs.
- `preview.html`: lädt **genau dieses Sheet** und zeigt es in Originalgrösse sowie mit 48 px Charakterhöhe und nearest-neighbor; 8 FPS nur visueller Testwert.
- `REAL_ASSET_PREVIEW.png`: aus denselben acht PNGs generierte Prüftafel, keine neue Konzeptzeichnung.

## Tatsächliche Prüfungen
- PNG-Sheet und Frames exportiert, Dateiformate mit Pillow geöffnet.
- Alpha enthält ausschliesslich 0 oder 255 (harte Maske), Randqualität nicht abgenommen.
- Keine erfolgreiche iPhone-/Browser-Laufzeitprüfung.
- Fussanker und Loop-Konsistenz noch nicht ausreichend verifiziert.
- Run, Attack, Dodge, Hit und Death aus vorigem Extraktionsversuch sind fehlerhaft und bleiben gesperrt.

## GitHub-Blocker
Der aktuell verfügbare GitHub-Connector schreibt **nur UTF-8-Textdateien**, keine binären PNGs. Der Versuch, GitHub aus dem lokalen Dateisystem über git zu erreichen, scheiterte an fehlender DNS-/Netzverbindung. Daher sind die Original-PNGs **noch nicht auf dem Feature-Branch**. Die Dateien müssen über eine binärfähige GitHub-Verbindung oder manuell aus dem ZIP auf diesen Branch übertragen werden. Bis dahin keine Integrationsfreigabe.

Keine Änderung an Gameplay, Hauptspieldateien oder main.
