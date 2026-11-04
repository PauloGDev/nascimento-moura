import sharp from "sharp";
import { dirname, resolve } from "node:path";
import { fileURLToPath } from "node:url";

const projectRoot = resolve(dirname(fileURLToPath(import.meta.url)), "..");
const assets = resolve(projectRoot, "src", "assets");

await Promise.all([
  sharp(resolve(assets, "contract-concern.jpg"))
    .resize({ width: 1200, withoutEnlargement: true })
    .webp({ quality: 80, effort: 5 })
    .toFile(resolve(assets, "contract-concern.webp")),
  sharp(resolve(assets, "bills-analysis.jpg"))
    .resize({ width: 1800, withoutEnlargement: true })
    .webp({ quality: 80, effort: 5 })
    .toFile(resolve(assets, "bills-analysis.webp")),
  sharp(resolve(assets, "financial-planning.jpg"))
    .resize({ width: 1200, withoutEnlargement: true })
    .webp({ quality: 80, effort: 5 })
    .toFile(resolve(assets, "financial-planning.webp")),
  sharp(resolve(assets, "nascimento-moura-logo.png"))
    .resize({ width: 1000, withoutEnlargement: true })
    .png({ compressionLevel: 9, palette: true })
    .toFile(resolve(assets, "nascimento-moura-logo-optimized.png")),
  sharp(resolve(assets, "dr-lucas-office.jpg"))
    .resize({ width: 1200, withoutEnlargement: true })
    .webp({ quality: 82, effort: 5 })
    .toFile(resolve(assets, "dr-lucas-office.webp")),
  sharp(resolve(assets, "dr-lucas-casual.jpg"))
    .resize({ width: 1200, withoutEnlargement: true })
    .webp({ quality: 82, effort: 5 })
    .toFile(resolve(assets, "dr-lucas-casual.webp")),
  sharp(resolve(assets, "dr-lucas-formal.jpg"))
    .resize({ width: 1200, withoutEnlargement: true })
    .webp({ quality: 82, effort: 5 })
    .toFile(resolve(assets, "dr-lucas-formal.webp")),
]);
