# ECLIPSE Goblin V0.7 – animation polish review

Based on accepted V0.5 real 64x64 RGBA goblin sprite. Idle frame 00 is pixel-identical to the approved PNG.

Changes relative to V0.6: six run frames now have independently drawn boot strides and blade poses; six attack frames have staged wind-up, slash and recovery with consistent hand, handle and steel palette. All PNGs generated at native 64x64, no interpolation. Death and hit are retained from V0.6; idle is retained.

Known limitations: procedural pixel animation remains a prototype, not a hand-animated premium sprite. Run boots and attack slash require Game Director visual assessment. This is not a production approval. No in-game/iPhone runtime test.

QA: 24 PNGs, 5 sheets, RGBA and transparent alpha verified. Anchors provisional (32,60). No gameplay, hitboxes, shared files or main changed. ZIP not uploaded to GitHub.
