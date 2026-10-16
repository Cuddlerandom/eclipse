# Söldner B – Animations-Extraktion QA v0.3

2026-10-16. Der Game Director hat die Fortsetzung der Animationen beauftragt.

Es wurde lokal ein ZIP mit echten transparenten PNG-Exports für Idle (8), Run (8), Attack (8), Dodge (6), Hit (6), Death (8), Manifest und Browser-Vorschau erzeugt. Die Quelldatei ist jedoch ein **Präsentationsblatt** und kein echter Produktionsatlas.

**Sichtprüfung: fehlgeschlagen.** Bei Run, Attack, Dodge, Hit und Death enthalten viele ausgeschnittene Frames abgeschnittene Charakterteile, Trennlinien, Pixelreste und/oder fehlende Ausrüstung. Das Paket ist ausdrücklich **nicht zur Integration geeignet**. Die ursprüngliche Designfreigabe gilt nicht für diese Exporte.

Das QA-ZIP `ECLIPSE_MercenaryB_Animation_QA_v03.zip` wurde im Chat bereitgestellt, ist aber nicht als Binärdatei im GitHub-Branch. Die visuellen Mängel sind in `CONTACT_SHEET_EXPORTED.png` innerhalb des ZIPs sichtbar. Frame-Raster 160×160 und Pivot (80,148) sind nur Testwerte. Die 1:1-Regel verbietet, solche fehlerhaften Frames als fertige Assets auszugeben.

**Blocker:** Zur sauberen Produktion sind originale, einzeln gerenderte, transparente Charakterposen ohne Präsentationsrahmen/Schachbrett erforderlich. Erst danach Frame-Konsistenz, Fussanker, Originalvergleich und Darstellung in Spielgrösse prüfen.

Keine Änderung an main, Gameplay oder gemeinsamen Dateien; keine iPhone-/Spieltests durchgeführt.
