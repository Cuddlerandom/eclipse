# ECLIPSE Wolf – V3 visual handoff

Scope: wolf visual sprites and isolated animation preview only. No gameplay edits.

Local asset archive: eclipse_wolf_visual_handoff_v3.zip (not yet uploaded to GitHub). Contains seven transparent RGBA spritesheets, animations.json, preview.html, contact_sheet.png, HANDOFF.md, QA.txt.

Frame size: 256 x 160 px. Right facing. Proposed visual anchor (128,139). Horizontal strips: frame i at x = i*256.

| Animation | Frames | Preview FPS | Loop |
|---|---:|---:|---|
| idle | 12 | 10 | yes |
| walk | 16 | 14 | yes |
| run | 20 | 20 | yes |
| sprint | 12 | 22 | yes |
| bite | 18 | 18 | no |
| hit | 8 | 12 | no |
| death | 16 | 12 | no |

All values are preview-only, NOT gameplay settings or approved final animation specs.

QA passed: dimensions, RGBA transparency and frame uniqueness on all 102 frames. Browser, iPhone, artistic consistency and gameplay integration NOT tested.

Known issues: flat vector-like prototype art; final visual style and Warrior B matching unconfirmed. No hitboxes or AI. Binary assets must be added to this branch before integration.

Central team: review visuals and import assets; define gameplay interfaces independently; no merge without approval.
