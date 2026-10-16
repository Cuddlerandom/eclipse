# ECLIPSE – Warrior Render Lab (isolated prototype)

**Status:** Technical scaffold only; not production-ready and not integrated into the game.  
**Purpose:** Build a separated rendering/animation test bed for the Game Director-approved warrior design while preserving the existing game.

## Critical asset rule
The approved Söldner B / warrior design reference is currently documented in `assets/mercenary/animation-work/DESIGN_APPROVAL_IDLE.md`, but the reference sheet and verified production PNGs are not present as binary assets in this repository. The current PNG export is explicitly marked not production-ready because its background was automatically masked, alpha edges and foot anchor are not approved, and the animation loop is unverified.

Therefore this prototype intentionally renders **no substitute character art**. It shows a missing-asset state until the exact approved source/production PNGs are provided and verified.

## Planned module responsibilities
- `src/asset-loader.js`: load same-origin production assets and fail closed if missing.
- `src/animator.js`: elapsed-time animation sampling independent from render FPS.
- `src/renderer.js`: nearest-neighbour drawing with documented anchor and integer scaling.
- `src/main.js`: isolated diagnostics; no gameplay code or gameplay state.

## Current exclusions
- No changes to `game.js`, gameplay, hitboxes, balancing, saves, main game UI or deployment.
- No external Adobe short URLs as production assets.
- No generated or simplified replacement sprite.
- No claim of browser/iPhone testing until actually performed.

## Entry criteria for the real warrior
1. Approved original design image or manually cleaned production PNGs supplied as files.
2. Exact production assets added to this branch without re-drawing or style changes.
3. Frame dimensions, alpha, frame order and ground anchor measured.
4. Design approval and technical QA remain separate gates.

## QA status
- Repository design/QA handoff documents inspected.
- Browser runtime: **Not tested**.
- Real iPhone: **Not tested**.
- Production assets loaded: **Blocked – no approved production PNG in repository**.
