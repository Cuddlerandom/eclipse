# Goblin V0.4 – technical cleanup (NOT final)

Local deliverable: eclipse_goblin_v04_cleanup.zip attached in Goblin Fach-Chat. Contains 24 true RGBA PNG frames, 5 horizontal PNG sheets, animations.json, preview.html, comparison.png. The PNGs are NOT uploaded to GitHub: container network DNS to github.com fails and there is no authorized binary transfer bridge into the GitHub connector.

Frames: 256x256, provisional anchor (128,230). Timings: idle 4x180ms; run 6x100ms; attack 6x90ms; hit 3x110ms; death 5x150ms. These are visual preview values, not gameplay values.

Changes: alpha fringe cleanup and nearest-neighbor pixel resampling. No intentional recoloring or redesign. Missing contours/details from V0.3 extraction cannot be automatically recovered. Remaining pose inconsistencies mean this is still a prototype, not approved production art.

Tests: decoded 24 source PNGs; generated 24 RGBA PNG frames and 5 sheets; created comparison image. No game/iPhone/browser runtime tests. Renderer smoothing not verified; Hauptzentrale should inspect imageSmoothingEnabled, pixel alignment and scaling.

Upload: extract ZIP into assets/goblin/animation-work/ on feature/goblin-assets, commit real PNG binaries; do not integrate without explicit Game Director approval. No main/gameplay changes.
