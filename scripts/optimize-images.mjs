// Convierte los assets de imagen a WebP (máx. 1600px de ancho, calidad 78).
// Uso: node scripts/optimize-images.mjs
import { readdir, stat } from 'node:fs/promises';
import { extname, join } from 'node:path';
import sharp from 'sharp';

const ROOT = new URL('../src/assets/', import.meta.url).pathname;
const VALID = new Set(['.jpg', '.jpeg', '.png']);
const MAX_WIDTH = 1600;
const QUALITY = 78;

async function* walk(dir) {
  for (const entry of await readdir(dir, { withFileTypes: true })) {
    const path = join(dir, entry.name);
    if (entry.isDirectory()) yield* walk(path);
    else yield path;
  }
}

let total = 0;
for await (const file of walk(ROOT)) {
  if (!VALID.has(extname(file).toLowerCase())) continue;
  const out = file.replace(/\.(jpe?g|png)$/i, '.webp');
  const { size: before } = await stat(file);
  await sharp(file)
    .rotate()
    .resize({ width: MAX_WIDTH, withoutEnlargement: true })
    .webp({ quality: QUALITY })
    .toFile(out);
  const { size: after } = await stat(out);
  total += before - after;
  console.log(
    `${file.replace(ROOT, '')} ${(before / 1024).toFixed(0)}KB -> ${(after / 1024).toFixed(0)}KB`
  );
}
console.log(`Ahorro total: ${(total / 1024 / 1024).toFixed(2)} MB`);
