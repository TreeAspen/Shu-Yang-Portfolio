import sharp from "sharp";
import { promises as fs } from "node:fs";
import path from "node:path";

const galleryDir = path.resolve("src/assets/gallery");
const targets = [
  "68d12b3da8de42382063842d61bba452.jpg",
  "bf461d6f24fcd969f62743f23632b5f7.jpg",
];

const MAX_WIDTH = 1600;
const QUALITY = 82;

for (const name of targets) {
  const file = path.join(galleryDir, name);
  const before = (await fs.stat(file)).size;

  const buf = await sharp(file)
    .rotate()
    .resize({ width: MAX_WIDTH, withoutEnlargement: true })
    .jpeg({ quality: QUALITY, mozjpeg: true })
    .toBuffer();

  const tmp = file + ".tmp";
  await fs.writeFile(tmp, buf);
  await fs.rm(file);
  await fs.rename(tmp, file);
  const after = buf.length;
  const pct = ((1 - after / before) * 100).toFixed(1);
  console.log(`${name}: ${(before / 1024 / 1024).toFixed(2)} MB -> ${(after / 1024 / 1024).toFixed(2)} MB  (-${pct}%)`);
}
