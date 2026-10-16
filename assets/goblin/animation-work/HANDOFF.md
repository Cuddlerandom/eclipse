# Goblin – Animation Handoff (2026-10-16)

Branch: `feature/goblin-assets`. The Game Director approved the red-hooded goblin **concept**, not these final animation frames. All animations remain visual prototypes.

## Sprite assets (ZIP only, not uploaded to GitHub)

The complete ZIP `eclipse_goblin_handoff_v02.zip` is attached in the Goblin Fach-Chat. Extract its `assets/goblin/animation-work/` directory into the matching repository path on this branch and commit the **actual binary** PNG/GIF files. GitHub connector supports base64 blobs, but no available authorized transfer of the local file bytes into that connector was established in this session. **Do not treat this documentation as an uploaded sprite asset.**

| Animation | PNG | Frames | Frame size | Duration | Anchor | Loop |
|---|---|---:|---|---:|---|---|
| idle | goblin_idle.png | 4 | 64x64 | 180 ms | (32,57) | yes |
| run | goblin_run.png | 6 | 64x64 | 100 ms | (32,57) | yes |
| attack | goblin_attack.png | 6 | 64x64 | 90 ms | (32,57) | no |
| hit | goblin_hit.png | 3 | 64x64 | 110 ms | (32,57) | no |
| death | goblin_death.png | 5 | 64x64 | 150 ms | (32,57) | no |

All horizontal RGBA PNG sheets, 24 frames total. The ZIP also includes corresponding GIF previews, a contact sheet, `animations.json`, `preview.html`, and this handoff. JSON and HTML are also committed as text on the branch; HTML will not display the sprite until the actual PNGs are uploaded.

## Checks actually performed

Pillow inspection of existing ZIP: all 5 PNG sheets have expected pixel dimensions, RGBA with alpha extrema 0..255; all GIFs have the expected frame count, transparency index, and per-frame durations. ZIP was repackaged. **Not tested:** browser runtime, phone readability, visual polish against approved design, gameplay integration.

## Known issues and integration notes

The sprite prototype is visually simpler than the approved detailed concept and needs artistic refinement. Frame sizes, anchor and timing are provisional for previews, not binding gameplay or hitbox parameters. Hauptzentrale handles integration and gameplay. No modifications to `main`, `game.js`, `index.html`, `style.css`.
