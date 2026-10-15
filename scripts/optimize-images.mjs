// public/images altındaki fotoğraflardan sayfada kullanılan küçük WebP kopyalarını üretir.
// Orijinallere dokunmaz; çıktılar public/images/_opt altına yazılır (git'e girmez).
// `npm run dev` ve `npm run build` öncesinde otomatik çalışır. Güncel olan dosyaları atlar.
// Boyutlar src/utils/imageUtils.ts içindeki optimizedSrc() ile aynı olmalı.
import { mkdir, readdir, stat } from "node:fs/promises";
import path from "node:path";
import sharp from "sharp";

const ROOT = path.join(process.cwd(), "public", "images");
const OUT = path.join(ROOT, "_opt");
const SOURCE_EXT = new Set([".jpg", ".jpeg", ".png", ".webp"]);

const VARIANTS = [
  // Menü listesindeki kare küçük resim (80–96px kutu, 2–3x ekranlar için)
  { suffix: "thumb", resize: { width: 240, height: 240, fit: "cover" }, quality: 72 },
  // Kartlar ve mobil ekranlar
  { suffix: "640", resize: { width: 640, height: 640, fit: "inside", withoutEnlargement: true }, quality: 74 },
  // 2–2.7x yoğunluklu telefonlar (ihtiyaç ~700–950px): 1280'i indirmek zorunda kalmasınlar
  { suffix: "960", resize: { width: 960, height: 960, fit: "inside", withoutEnlargement: true }, quality: 75 },
  // Büyütülmüş fotoğraf ve geniş ekranlar
  { suffix: "1280", resize: { width: 1280, height: 1280, fit: "inside", withoutEnlargement: true }, quality: 76 },
  // Logo ekranda en fazla ~112px: 1x–3x ekranlar için iki küçük kopya (yalnızca logo için üretilir).
  // Logo 3–4 renkli ama yıpranmış dokusu kayıplı WebP'yi zorluyor; 16 renkli paletli PNG aynı
  // görünümde ~2.5 kat küçük (192px: 4.6 KB, 384px: 10 KB)
  { suffix: "192", resize: { width: 192, height: 192, fit: "inside" }, png: true, only: "logo.png" },
  { suffix: "384", resize: { width: 384, height: 384, fit: "inside" }, png: true, only: "logo.png" },
];

const walk = async (dir) => {
  const entries = await readdir(dir, { withFileTypes: true });
  const files = [];
  for (const entry of entries) {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      if (full !== OUT) files.push(...(await walk(full)));
    } else if (SOURCE_EXT.has(path.extname(entry.name).toLowerCase())) {
      files.push(full);
    }
  }
  return files;
};

const isFresh = async (source, target) => {
  try {
    return (await stat(target)).mtimeMs >= (await stat(source)).mtimeMs;
  } catch {
    return false;
  }
};

const started = Date.now();
const sources = await walk(ROOT);
let written = 0;

await Promise.all(
  sources.map(async (source) => {
    const rel = path.relative(ROOT, source);
    const base = rel.slice(0, -path.extname(rel).length);
    for (const variant of VARIANTS) {
      if (variant.only && rel !== variant.only) continue;
      const target = path.join(OUT, `${base}-${variant.suffix}.${variant.png ? "png" : "webp"}`);
      if (await isFresh(source, target)) continue;
      await mkdir(path.dirname(target), { recursive: true });
      const image = sharp(source)
        .rotate() // telefon fotoğraflarındaki EXIF yönünü uygula
        .resize(variant.resize);
      await (variant.png
        ? image.png({ palette: true, colors: 16, effort: 10, compressionLevel: 9 })
        : image.webp({ quality: variant.quality, effort: 5 })
      ).toFile(target);
      written++;
    }
  })
);

console.log(
  `optimize-images: ${sources.length} fotoğraf, ${written} dosya üretildi (${Date.now() - started} ms)`
);
