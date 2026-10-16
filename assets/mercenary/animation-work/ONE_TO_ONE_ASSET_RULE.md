# ECLIPSE – verbindliche 1:1-Asset-Regel (Söldner B)

Stand: 2026-10-16. Anweisung des Game Directors.

1. Designvorschauen beruhen auf echten exportierbaren Produktionsdateien.
2. Das später gelieferte Asset ist exakt die zur Freigabe gezeigte Grafik.
3. Keine Vereinfachung, Neuzeichnung oder stilistische Änderung nach Freigabe ohne erneute Zustimmung.
4. Animationen erhalten Identität, Proportionen, Farben, Ausrüstung und Detailqualität.
5. Echte PNGs mit geprüfter Alpha-Transparenz, gemeinsame Anker und Masse.
6. Vorschau zeigt **dieselbe PNG-Datei** zusätzlich im tatsächlichen Spielmassstab, ohne weichzeichnende Interpolation.
7. Sichtbare Freistellungs-, Skalierungs- oder Animationsartefakte sind Blocker; vor Übergabe beheben und erneut vorlegen.
8. Produktionsfreigabe nur durch ausdrückliche Zustimmung des Game Directors **zur tatsächlichen Asset-Datei**.

## Auswirkungen auf bisherige Arbeiten
- Frühere Präsentationsblätter sind Referenzen, **keine** Sprite-Sheets, auch wenn sie so beschriftet sind.
- Das bisherige `ECLIPSE_MercenaryB_Idle_QA_Package.zip` enthält einen automatisch freigestellten Prototyp. Dieser ist **nicht produktionsfreigegeben** und bedarf pixelgenauer QA.
- Vorhandene `preview.html` zeigt weiterhin ein externes Einzelbild, nicht den finalen Asset-Export; sie ist **kein** Nachweis der 1:1-Regel.
- Eine Designzustimmung zum Bild ist **nicht automatisch** eine Freigabe der exportierten PNGs.

## QA-Gates für die nächste Lieferung
- Exportierte PNGs öffnen und echte Alpha-Kanäle kontrollieren.
- Mit dem freigegebenen Original visuell vergleichen: Kopf, Kleidung, Umhang, Waffe, Farbwerte, Pixelkanten.
- Fussanker und Framegrössen pro Zustand messen; kein unbeabsichtigtes Wackeln.
- Isolierte Vorschau lädt die gelieferten Dateien und zeigt 1× sowie Spielmassstab mit nearest-neighbor.
- Erst nach expliziter Dateifreigabe durch den Game Director als integrationsfähig kennzeichnen.

Keine Gameplay-Änderungen, kein Merge nach `main`; Integration durch Hauptzentrale.
