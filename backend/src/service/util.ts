export const genId = require("uuid").v4;
/// get all pre-filled assets
/// will use to randomize json items photos
export function getAssets(): string[] {
  const assets: string[] = [];
  const files = "./assets/";
  const fs = require("fs");
  fs.readdirSync(files).forEach((file: string) => {
    if (file.match(/\.jpg/i)) {
      assets.push(file);
    }
  });

  return assets;
}

export const assets = getAssets();

export function randomizeImageFileName(): string {
  return getRandomImageFilename(assets);
}
export function getRandomImageFilename(images: string[]): string {
  return images[Math.floor(Math.random() * images.length)];
}
