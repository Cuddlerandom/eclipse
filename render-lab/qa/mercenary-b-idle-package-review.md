# Söldner B Idle Package – QA-Prüfbericht

**Prüfdatum:** 2026-10-16  
**Quelle:** `ECLIPSE_MercenaryB_Production_Review.zip` aus der aktuellen Chat-Übergabe  
**Prüfumfang:** Archivinhalt, PNG-Masse, Alpha-Kanal, Sprite-Sheet-Konsistenz und isolierte Vorschau  
**Status:** Teilprüfung abgeschlossen; keine Produktionsfreigabe

## 1. Archivinhalt

Das ZIP enthält:
- acht Idle-Einzelbilder: `idle_00.png` bis `idle_07.png`
- Sprite-Sheet: `mercenary_B_idle_sheet.png`
- visuelle Referenz: `REAL_ASSET_PREVIEW.png`
- Vorschau: `preview.html`
- Statusdatei: `QA_STATUS.txt`

Die Quelldatei selbst wurde nicht verändert.

## 2. PNG-Integrität

| Prüfung | Ergebnis |
|---|---|
| Alle acht Idle-Frames vorhanden | Bestanden |
| Einzelbild-Abmessungen | Alle 132 × 271 px |
| Sprite-Sheet-Abmessungen | 1056 × 271 px |
| RGBA / Alpha-Kanal | Bei allen acht Einzelbildern vorhanden |
| Vollständig leere Einzelbilder | Keine festgestellt |
| Einzelbilder gegen Sheet-Crops | Bestanden: alle acht Frames pixelgenau identisch zu ihrem jeweiligen 132 × 271 Crop |
| Produktionsfreigabe | Nicht erteilt |

SHA-256 der Original-PNGs:
- `idle_00.png`: `e6c3dbc1505d2aa808ecc93492a6b3328d7695f07c118e4c2a3efd7783460fb0`
- `idle_01.png`: `5b65d4721fb132d483b0200d0700446dff99bec1a346559cd28c351739d97850`
- `idle_02.png`: `23239259ec0f5c3c3d579eb8023d15e0cde271dc38281fc661a88c2aa2a5952e`
- `idle_03.png`: `9495cadd1f523c04992c2017f08e0f655c3e6bae4588cef9abf1ae5d3abe348b`
- `idle_04.png`: `44c419c0eca79d472fbd4c22e73303f0c102268bc15fcafea1eba2520cdfd005`
- `idle_05.png`: `4c8cb8caff9f61962909e939a6694c17f996547b45d3ca8fbf6beebddb8b7e1f`
- `idle_06.png`: `e0e63ccdd93fa49353d917f9c8a4f709c8232a406121dac05589f678632ace64`
- `idle_07.png`: `4e7d8d1a38e12c1b23573f0a10e500fe508005857a8988c91e4c0569057ebd93`

## 3. Transparenz und Anker

Alle Einzelbilder enthalten transparente Pixel und vollständig deckende Pixel. Der sichtbare Alpha-Bounding-Box-Boden variiert zwischen den Frames (y = 258 bis 262 in den jeweiligen Einzelbild-Koordinaten). Das allein beweist keinen Fehler, zeigt aber, dass ein gemeinsamer Fuss-/Bodenanker nicht allein aus den Bildabmessungen abgeleitet werden darf.

Vor Produktionsfreigabe:
1. Animationsframes visuell bei 1:1-Pixelgrösse vergleichen.
2. Fuss-/Bodenanker und tatsächlichen Bodenkontakt pro Frame prüfen.
3. Freistellung und Alpha-Kanten gegen die freigegebene Referenz prüfen.
4. Animation in Bewegung beurteilen; ein statischer Bildvergleich reicht nicht.

## 4. Vorschau und Browserprüfung

Die vorhandene `preview.html` referenziert das echte lokale Sprite-Sheet und deaktiviert Canvas-Bildglättung. Ein automatisierter Chromium-Lauf wurde versucht, aber die Browsernavigation wurde in der Laufzeitumgebung mit `ERR_BLOCKED_BY_ADMINISTRATOR` blockiert.

Daher:
- HTML-Datei statisch geprüft: ja
- Browserlauf erfolgreich: **Nicht geprüft – Umgebung blockiert**
- echter iPhone/Safari-Test: **Nicht geprüft**
- Produktionsintegration: **Nicht freigegeben**

## 5. Bekannte Einschränkungen

Die beiliegende `QA_STATUS.txt` erklärt ausdrücklich, dass Transparenz und Fussanker noch nicht produktionsfreigegeben sind und Run/Attack/Dodge/Hit/Death fehlerhaft und ausgeschlossen sind. Der Umfang dieses Pakets ist deshalb auf die Idle-Frames begrenzt.

## 6. Nächste Schritte

1. Die acht Original-PNGs und das Sheet unverändert als Assets im Branch ablegen, sobald ein geeigneter Binärdatei-Uploadweg verfügbar ist.
2. Asset-Manifest mit Frame-Reihenfolge, Timing und freizugebendem Anker definieren.
3. Preview auf die tatsächlich versionierten Assets verweisen lassen.
4. Browserlauf in einer erlaubten Testumgebung und danach echten iPhone-Test durchführen.
5. QA-Bericht ergänzen; Designfreigabe und technische Produktionsfreigabe getrennt einholen.

**Keine Produktionsfreigabe:** Dieser Bericht bestätigt Archiv- und Bildkonsistenz, nicht die visuelle Qualität der Freistellung, den korrekten Fussanker oder die Spielintegration.
