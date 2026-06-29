import sharp from "sharp";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const imagesDir = path.join(__dirname, "../public/images");

function isBackground(r: number, g: number, b: number, mode: "light" | "dark") {
  if (mode === "light") {
    const brightness = (r + g + b) / 3;
    const isWhite = r > 248 && g > 248 && b > 248;
    const isCream = r > 235 && g > 228 && b > 218 && r - b < 25;
    const isLightGray = brightness > 240 && Math.abs(r - g) < 8 && Math.abs(g - b) < 8;
    return isWhite || isCream || isLightGray;
  }

  const isBlack = r < 15 && g < 15 && b < 15;
  const isNearBlack = r < 30 && g < 30 && b < 30;
  return isBlack || isNearBlack;
}

async function removeBackground(
  filename: string,
  outputName: string,
  mode: "light" | "dark" = "light"
) {
  const input = path.join(imagesDir, filename);
  const output = path.join(imagesDir, outputName);

  const { data, info } = await sharp(input)
    .ensureAlpha()
    .raw()
    .toBuffer({ resolveWithObject: true });

  const pixels = Buffer.from(data);

  for (let i = 0; i < pixels.length; i += 4) {
    const r = pixels[i];
    const g = pixels[i + 1];
    const b = pixels[i + 2];

    if (isBackground(r, g, b, mode)) {
      pixels[i + 3] = 0;
    }
  }

  await sharp(pixels, {
    raw: { width: info.width, height: info.height, channels: 4 },
  })
    .png()
    .toFile(output);

  console.log(`✓ ${outputName}`);
}

async function main() {
  await removeBackground("logo-everfit.png", "logo-everfit-transparent.png", "light");
  await removeBackground("logo-original.png", "logo-original-transparent.png", "light");
  await removeBackground("logo-naranja.png", "logo-naranja-transparent.png", "dark");
  await removeBackground("isotipo-vino.png", "isotipo-vino-transparent.png", "dark");
  await removeBackground("isotipo-naranja.png", "isotipo-naranja-transparent.png", "dark");
}

main().catch(console.error);
