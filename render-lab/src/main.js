import { loadImageAsset } from "./asset-loader.js";

const canvas = document.querySelector("#preview");
const ctx = canvas.getContext("2d", { alpha: true });
const status = document.querySelector("#status");
const detail = document.querySelector("#detail");
const assetStatus = document.querySelector("#asset-status");

ctx.imageSmoothingEnabled = false;
ctx.clearRect(0, 0, canvas.width, canvas.height);

// Deliberately no placeholder character. Asset path is enabled only after approved
// production PNGs and their manifest have been committed to this branch.
const APPROVED_ASSET_URL = null;

async function boot() {
  if (!APPROVED_ASSET_URL) {
    status.textContent = "Blockiert · Originalasset fehlt";
    detail.textContent = "Das freigegebene Krieger-Design liegt derzeit nicht als verifiziertes Produktions-PNG in diesem Branch. Es wird bewusst keine Ersatzgrafik angezeigt.";
    assetStatus.textContent = "BLOCKIERT – Produktionsdatei und Metadaten erforderlich";
    return;
  }

  try {
    const asset = await loadImageAsset(APPROVED_ASSET_URL);
    status.textContent = "Asset geladen · QA ausstehend";
    detail.textContent = `Geladen: ${asset.url} · ${asset.width} × ${asset.height} px. Noch keine Design- oder Produktionsfreigabe.`;
    assetStatus.textContent = "Geladen; Transparenz, Framegrenzen und Anker noch zu prüfen";
    // Actual drawing is intentionally gated until the verified frame manifest is available.
  } catch (error) {
    status.textContent = "Asset-Fehler";
    detail.textContent = error instanceof Error ? error.message : String(error);
    assetStatus.textContent = "FEHLGESCHLAGEN";
  }
}

boot();
