# Goblin – Animation Handoff (2026-10-16)

Branch: `feature/goblin-assets`. The Game Director approved the red-hooded goblin **concept**, not these final animation frames. All animations remain visual prototypes.

## Sprite assets (uploaded on this branch)

The binary images from the supplied `eclipse_goblin_handoff_v02(1)(1).zip` are stored in `assets/goblin/animation-work/`: five PNG animation sheets, five corresponding GIF previews, five static `*_preview.png` images, and `animation_overview.png` (16 image files total). The ten animation files referenced by `animations.json` are included. No gameplay integration is performed.

| Animation | PNG | Frames | Frame size | Duration | Anchor | Loop |
|---|---|---:|---|---:|---|---|
| idle | goblin_idle.png | 4 | 64x64 | 180 ms | (32,57) | yes |
| run | goblin_run.png | 6 | 64x64 | 100 ms | (32,57) | yes |
| attack | goblin_attack.png | 6 | 64x64 | 90 ms | (32,57) | no |
| hit | goblin_hit.png | 3 | 64x64 | 110 ms | (32,57) | no |
| death | goblin_death.png | 5 | 64x64 | 150 ms | (32,57) | no |

All horizontal RGBA PNG sheets, 24 frames total. The ZIP also includes corresponding GIF previews, a contact sheet, `animations.json`, `preview.html`, and this handoff. The existing JSON and HTML are unchanged and their PNG/GIF references resolve to the uploaded files.

## Checks actually performed

Pillow inspection of existing ZIP: all 5 PNG sheets have expected pixel dimensions, RGBA with alpha extrema 0..255; all GIFs have the expected frame count, transparency index, and per-frame durations. For this upload, the extracted images were checked again: PNG dimensions, RGBA alpha range, GIF frame counts and per-frame durations match `animations.json`. All 16 images decode successfully. The existing JSON/HTML differ from the ZIP in metadata/presentation, but their animation parameters agree; ZIP sheet SHA-256 values match the uploaded bytes; the five HTML state definitions match JSON frame counts, timings and loop flags. **Not tested:** browser runtime, phone readability, visual polish against approved design, gameplay integration.

## Known issues and integration notes

The sprite prototype is visually simpler than the approved detailed concept and needs artistic refinement. Frame sizes, anchor and timing are provisional for previews, not binding gameplay or hitbox parameters. Hauptzentrale handles integration and gameplay. No modifications to `main`, `game.js`, `index.html`, `style.css`.
