# Wolf V6 – visual review candidate (not yet on GitHub as binary)

A revised six-state sprite prototype was generated locally with 112x72 transparent RGBA frames and a proposed visual anchor (56,64). Idle 8 at 8 FPS, walk 8 at 11 FPS, run 10 at 15 FPS, bite 8 at 13 FPS, hit 6 at 10 FPS, death 10 at 10 FPS. A self-contained side-by-side HTML comparison, contact sheet, metadata and ZIP are provided in the wolf specialist chat as `eclipse_wolf_v6_review.zip`.

Local Pillow tests: six strips correctly sized, 50 unique frames, all nonempty, zero opaque pixels on the rightmost frame edge (including bite and hit). Visual review found anatomy and fur-detail improvements still needed. Browser, iPhone and runtime transitions not tested. No final design approval.

IMPORTANT: **V6 binary PNGs are NOT uploaded to GitHub**. The existing `wolf-assets/sprites/*.png` remain V5; do not mistake them for V6. Upload of revised binaries is pending a supported file-transfer path. Do not integrate V6 yet. No gameplay, shared files or main changed.