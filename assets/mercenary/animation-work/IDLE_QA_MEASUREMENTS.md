# Söldner B – Messprotokoll Idle-Export

Stand: 2026-10-16. Der Game Director verlangt identische, produktionsfähige PNGs und Vorschau im Spielmassstab.

Quelle: vorhandenes Chat-QA-Paket `ECLIPSE_MercenaryB_Idle_QA_Package.zip`; die Binärdateien sind noch nicht im Repository.

- PNG-Sheet: 1056 × 271 Pixel, RGBA, 8 Zellen à 132 × 271 Pixel.
- Alpha: 0 halbtransparente Pixel in allen 8 Frames; harte Binärmaske. Mögliche Randartefakte müssen manuell geprüft werden.
- Nichttransparente Bounding Boxes (links, oben, rechts exklusiv, unten exklusiv):
  - Frame 0: (5,41,127,258)
  - Frame 1: (8,42,118,262)
  - Frame 2: (6,42,124,261)
  - Frame 3: (6,42,118,261)
  - Frame 4: (6,41,120,262)
  - Frame 5: (5,41,117,262)
  - Frame 6: (5,42,127,262)
  - Frame 7: (5,41,125,261)
- Unterkante variiert 258–262 px. Das ist **kein Nachweis identischer Fussanker**; Pivot 66,263 bleibt provisorisch.
- Lokale Vergleichsgrafik `ECLIPSE_MercenaryB_Idle_1zu1_QA_Vergleich.png` wurde im Fach-Chat aus Originalausschnitt und exportiertem PNG erstellt; nicht auf GitHub hochgeladen.
- Vergleich zeigt Original, exportiertes PNG, 64/48/32 Pixel Breite (nearest-neighbor) und die 8 Frames.

**Entscheidung:** Noch keine Produktionsfreigabe. Maskenkanten und Bodenanker korrigieren, anschliessend dieselbe endgültige PNG-Datei in Spielmassstab vorlegen. Keine Gameplay-/main-Änderungen.
