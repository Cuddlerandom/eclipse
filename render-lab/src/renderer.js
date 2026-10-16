/** Pixel-crisp sprite drawing. Source images are never edited or resampled into new files. */
export function drawFrame(ctx, image, frame, options) {
  if (!ctx || !image || !frame || !options) throw new TypeError("Renderer arguments are required.");
  const { frameWidth, frameHeight, anchorX, anchorY, scale = 1, x, y } = options;
  for (const [name, value] of Object.entries({ frameWidth, frameHeight, anchorX, anchorY, scale, x, y })) {
    if (!Number.isFinite(value)) throw new TypeError("Invalid renderer option: " + name);
  }
  if (frameWidth <= 0 || frameHeight <= 0 || scale <= 0 ||
      !Number.isInteger(frame.index) || frame.index < 0 ||
      (frame.index + 1) * frameWidth > image.naturalWidth ||
      frameHeight > image.naturalHeight) {
    throw new RangeError("Frame geometry exceeds the verified image bounds.");
  }

  ctx.save();
  ctx.imageSmoothingEnabled = false;
  ctx.translate(Math.round(x), Math.round(y));
  ctx.scale(frame.facing < 0 ? -scale : scale, scale);
  ctx.drawImage(
    image,
    frame.index * frameWidth, 0, frameWidth, frameHeight,
    -anchorX, -anchorY, frameWidth, frameHeight
  );
  ctx.restore();
  return true;
}
