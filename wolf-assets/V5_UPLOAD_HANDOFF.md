# Wolf V5 – GitHub Upload Handoff

Branch: `assets/wolf-visual-preview-v3`. PR #3 remains draft. This document and `animations_v5.json` are on GitHub. **The six PNG binaries and GIF are NOT uploaded.**

Local ZIP: `eclipse_wolf_github_upload_ready.zip`. Extract and upload to this branch under `wolf-assets/sprites/idle.png`, `walk.png`, `run.png`, `bite.png`, `hit.png`, `death.png` and the ZIP's `wolf-assets/` metadata/preview files. GitHub web UI: switch branch, Add file > Upload files, drag files into exact directory, commit directly to this feature branch, never main. Verify each image displays as a real PNG. Alternatively use `git checkout assets/wolf-visual-preview-v3`, copy the extracted `wolf-assets/` folder, `git add wolf-assets/`, `git commit`, and `git push origin assets/wolf-visual-preview-v3`.

Frame format: 96x64 RGBA, right-facing, proposed visual anchor (48,56). Each horizontal strip has `frames * 96` width and height 64. `animations_v5.json` records counts, preview FPS, frame durations, paths and loop flags.

QA performed: six PNGs opened and dimensions, alpha transparency and frame uniqueness checked; 50 distinct frames in total. Bite touches right frame boundary in 6/8 frames, hit in 2/6 frames. Browser and iPhone not tested. Sprint not created. Artwork is a prototype below the V2 concept detail level. No design approval or gameplay integration.

Only wolf visual assets are in scope; goblin is another specialist branch. No gameplay, shared files or main changed.
