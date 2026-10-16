# ECLIPSE Wolf V5 – verified asset handoff

**Scope:** Visual wolf animation prototype only. **Design approval pending**; gameplay integration by Hauptzentrale only.

## GitHub delivery
- Branch: `assets/wolf-visual-preview-v3`; PR #3 remains draft.
- Binary sprite upload commit: `950b8b699a5f5ade430c2d428b174ced5ca7513e` (five sheets), prior hit sheet `1b7d24189e58ef011104c82c67f00438721b3dbd`.
- Six **real PNG files committed** in `wolf-assets/sprites/`: `idle.png`, `walk.png`, `run.png`, `bite.png`, `hit.png`, `death.png`.
- Standalone preview: `wolf-assets/preview_v5.html`. Metadata: `wolf-assets/animations_v5.json`.
- GIF and contact sheet are **not uploaded**; not required to play the six PNG animations.
- No files modified in `main`.

## Animation layout (preview-only timing)
All strips: horizontal, right-facing, **96 x 64 px per frame**; proposed visual anchor **(48,56)**; transparent background. Pixel colors preserved losslessly in indexed PNG files.

| Animation | Path relative to repository | Frames | Strip size | Preview FPS | Frame ms | Loop |
|---|---|---:|---|---:|---:|---|
| Idle | wolf-assets/sprites/idle.png | 8 | 768x64 | 8 | 125 | yes |
| Walk | wolf-assets/sprites/walk.png | 8 | 768x64 | 11 | 90.91 | yes |
| Run | wolf-assets/sprites/run.png | 10 | 960x64 | 15 | 66.67 | yes |
| Bite | wolf-assets/sprites/bite.png | 8 | 768x64 | 13 | 76.92 | no |
| Hit | wolf-assets/sprites/hit.png | 6 | 576x64 | 10 | 100 | no |
| Death | wolf-assets/sprites/death.png | 10 | 960x64 | 10 | 100 | no |

## Tests actually performed
- Local source PNGs opened with Pillow: correct 96x64 frame grid, RGBA transparency, differing frames, 50 frames in total.
- Lossless indexed-PNG conversion checked pixel-for-pixel against the original RGBA source for all six local strips (optimized versions of five newly uploaded PNGs).
- GitHub tree API checked after commit: **six blob entries** with nonzero binary sizes and matching SHA for uploaded blobs.
- GitHub standalone HTML preview created, but **browser runtime and iPhone playback not tested** after upload. No integrated game tests.

## Known limitations
- V5 is an **animated prototype**, not the highly detailed V2 art-direction concept and not Game Director-approved.
- Bite: right-edge clipping on 6/8 frames; Hit: right-edge clipping on 2/6 frames.
- Sprint state absent; no confirmed mobile readability or match with Warrior B and revised grassland.
- Proposed visual anchor, preview FPS and states are not binding gameplay interfaces.
- The earlier V3 testfield uses different 256x160 assets; **use V5 paths and V5 preview, not V3 testfield**, for this handoff.

## Integration guidance
Hauptzentrale can retrieve all six PNGs and `animations_v5.json` directly from this branch; slice each horizontal sheet into 96x64 cells, draw with nearest-neighbor pixel scaling and align using proposed anchor (48,56). First obtain explicit visual design approval; define gameplay/animation interfaces and hitboxes centrally. Do not merge PR #3 or change main without central QA and approval.
