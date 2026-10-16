/** Same-origin asset loading for ECLIPSE Render Lab.
 * Never substitutes art when an approved production file is missing.
 */
export async function loadImageAsset(url) {
  if (typeof url !== "string" || !url.trim()) {
    throw new TypeError("A non-empty production asset URL is required.");
  }
  const parsed = new URL(url, document.baseURI);
  if (parsed.origin !== location.origin) {
    throw new Error("Production assets must be local/same-origin; external preview URLs are not accepted.");
  }

  const image = new Image();
  image.decoding = "async";
  image.src = parsed.href;
  try {
    if (typeof image.decode === "function") await image.decode();
    else await new Promise((resolve, reject) => {
      image.onload = resolve;
      image.onerror = () => reject(new Error("Production asset failed to load: " + parsed.pathname));
    });
  } catch {
    throw new Error("Production asset failed to load: " + parsed.pathname);
  }

  if (!image.naturalWidth || !image.naturalHeight) {
    throw new Error("Production asset has invalid dimensions: " + parsed.pathname);
  }
  return Object.freeze({
    image,
    width: image.naturalWidth,
    height: image.naturalHeight,
    url: parsed.pathname
  });
}
