import sharp from 'sharp';
import { readdirSync, statSync, existsSync, mkdirSync, cpSync } from 'fs';
import { join, extname, basename } from 'path';

const ASSETS_DIR = 'public/assets/images';
const BACKUP_DIR = 'public/assets/images_backup';

const TARGET_WIDTHS = {
  banner: 1200,
  executive: 600,
  news: 800,
  shape: 400,
  background: 1600,
  icons: 200,
  partners: 300,
  cards: 400,
};

const QUALITY = {
  webp: 80,
  jpeg: 85,
  png: 90,
};

function ensureDir(dir) {
  if (!existsSync(dir)) {
    mkdirSync(dir, { recursive: true });
  }
}

function getTargetWidth(folder, filename) {
  if (folder === 'banner') {
    if (filename.startsWith('executive')) return TARGET_WIDTHS.executive;
    if (filename.includes('banner-') || filename.includes('image')) return TARGET_WIDTHS.banner;
    if (filename.includes('card') || filename.includes('holding') || filename.includes('utility')) return TARGET_WIDTHS.cards;
    if (filename.includes('atm') || filename.includes('support')) return TARGET_WIDTHS.banner;
  }
  if (folder === 'shape') return TARGET_WIDTHS.shape;
  if (folder === 'news') return TARGET_WIDTHS.news;
  if (folder === 'background') return TARGET_WIDTHS.background;
  if (folder === 'icons') return TARGET_WIDTHS.icons;
  if (folder === 'partners') return TARGET_WIDTHS.partners;
  return 1200;
}

async function optimizeImage(inputPath, outputPath, width, format = 'webp') {
  try {
    const pipeline = sharp(inputPath)
      .rotate() // Auto-rotate based on EXIF
      .resize({ width, withoutEnlargement: true });

    if (format === 'webp') {
      pipeline.webp({ quality: QUALITY.webp, effort: 6 });
    } else if (format === 'jpeg') {
      pipeline.jpeg({ quality: QUALITY.jpeg, mozjpeg: true });
    } else if (format === 'png') {
      pipeline.png({ quality: QUALITY.png, compressionLevel: 9, adaptiveFiltering: true });
    }

    await pipeline.toFile(outputPath);
    const stats = statSync(outputPath);
    return stats.size;
  } catch (err) {
    console.error(`Error optimizing ${inputPath}:`, err.message);
    return null;
  }
}

async function processFolder(folder) {
  const inputDir = join(ASSETS_DIR, folder);
  const outputDir = join(ASSETS_DIR, folder);
  ensureDir(outputDir);

  const files = readdirSync(inputDir).filter(f => {
    const ext = extname(f).toLowerCase();
    return ['.jpg', '.jpeg', '.png', '.webp'].includes(ext) && !f.includes('_originals');
  });

  let totalOriginal = 0;
  let totalOptimized = 0;

  for (const file of files) {
    const inputPath = join(inputDir, file);
    const stats = statSync(inputPath);
    totalOriginal += stats.size;

    const ext = extname(file).toLowerCase();
    const name = basename(file, ext);
    const targetWidth = getTargetWidth(folder, file);

    // For PNGs, convert to WebP (except small icons/logos)
    const shouldConvertToWebp = ext === '.png' && stats.size > 10000;

    let outputFormat = ext === '.png' ? 'png' : (ext === '.webp' ? 'webp' : 'jpeg');
    if (shouldConvertToWebp) outputFormat = 'webp';

    const outputExt = outputFormat === 'jpeg' ? '.jpg' : `.${outputFormat}`;
    const outputFile = `${name}${outputExt}`;
    const outputPath = join(outputDir, outputFile);

    // Skip if optimized version already exists and is newer
    if (existsSync(outputPath)) {
      const outStats = statSync(outputPath);
      if (outStats.mtime >= stats.mtime) {
        totalOptimized += outStats.size;
        continue;
      }
    }

    const optimizedSize = await optimizeImage(inputPath, outputPath, targetWidth, outputFormat);
    if (optimizedSize) {
      totalOptimized += optimizedSize;
      const savings = ((stats.size - optimizedSize) / stats.size * 100).toFixed(1);
      console.log(`  ${file} (${(stats.size/1024).toFixed(1)}KB) -> ${outputFile} (${(optimizedSize/1024).toFixed(1)}KB) [${savings}% smaller]`);

      // If we converted to WebP and original was PNG/JPG, we can optionally remove the original
      // For now, keep both for backward compatibility
    }
  }

  console.log(`  ${folder}: ${(totalOriginal/1024).toFixed(1)}KB -> ${(totalOptimized/1024).toFixed(1)}KB (${((totalOriginal-totalOptimized)/totalOriginal*100).toFixed(1)}% reduction)`);
  return { original: totalOriginal, optimized: totalOptimized };
}

async function main() {
  console.log('Starting image optimization...\n');

  // Backup originals first
  if (!existsSync(BACKUP_DIR)) {
    console.log('Creating backup...');
    cpSync(ASSETS_DIR, BACKUP_DIR, { recursive: true });
    console.log('Backup created.\n');
  }

  const folders = readdirSync(ASSETS_DIR, { withFileTypes: true })
    .filter(d => d.isDirectory() && d.name !== '_originals' && d.name !== 'images_backup')
    .map(d => d.name);

  let grandOriginal = 0;
  let grandOptimized = 0;

  for (const folder of folders) {
    console.log(`Processing ${folder}/...`);
    const result = await processFolder(folder);
    grandOriginal += result.original;
    grandOptimized += result.optimized;
  }

  console.log('\n=== SUMMARY ===');
  console.log(`Total: ${(grandOriginal/1024/1024).toFixed(2)}MB -> ${(grandOptimized/1024/1024).toFixed(2)}MB`);
  console.log(`Reduction: ${((grandOriginal-grandOptimized)/grandOriginal*100).toFixed(1)}%`);
  console.log(`Saved: ${((grandOriginal-grandOptimized)/1024/1024).toFixed(2)}MB`);
}

main().catch(console.error);