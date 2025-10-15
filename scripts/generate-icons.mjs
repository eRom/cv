#!/usr/bin/env node
/**
 * Script de génération des icônes pour SEO, PWA et favicon
 * Génère toutes les tailles nécessaires à partir de l'image source
 */

import sharp from 'sharp';
import { promises as fs } from 'fs';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const projectRoot = join(__dirname, '..');

// Configuration des icônes à générer
const icons = [
  // Favicon
  { name: 'favicon.ico', size: 32, format: 'png' }, // On génère un PNG, le navigateur l'accepte
  { name: 'favicon-16x16.png', size: 16, format: 'png' },
  { name: 'favicon-32x32.png', size: 32, format: 'png' },

  // Apple Touch Icons
  { name: 'apple-touch-icon.png', size: 180, format: 'png' },

  // PWA Icons (manifest.json)
  { name: 'icon-192.png', size: 192, format: 'png' },
  { name: 'icon-512.png', size: 512, format: 'png' },

  // Open Graph / Social Media (on garde l'aspect carré et on centre sur fond)
  { name: 'og-image.jpg', width: 1200, height: 630, format: 'jpeg', quality: 90 },
];

async function generateIcons() {
  console.log('🎨 Génération des icônes...\n');

  const sourcePath = join(projectRoot, 'profil-mcu.png');
  const publicDir = join(projectRoot, 'public');

  // Vérifier que l'image source existe
  try {
    await fs.access(sourcePath);
  } catch {
    console.error('❌ Image source non trouvée:', sourcePath);
    process.exit(1);
  }

  // Créer le dossier public si nécessaire
  await fs.mkdir(publicDir, { recursive: true });

  // Générer chaque icône
  for (const icon of icons) {
    const outputPath = join(publicDir, icon.name);

    try {
      let sharpInstance = sharp(sourcePath);

      if (icon.width && icon.height) {
        // Pour Open Graph: créer un fond blanc et centrer l'image
        const sourceImage = await sharp(sourcePath)
          .resize(Math.min(icon.height, 600), Math.min(icon.height, 600), {
            fit: 'contain',
            background: { r: 255, g: 255, b: 255, alpha: 1 }
          })
          .toBuffer();

        sharpInstance = sharp({
          create: {
            width: icon.width,
            height: icon.height,
            channels: 3,
            background: { r: 255, g: 255, b: 255 }
          }
        })
        .composite([{
          input: sourceImage,
          gravity: 'center'
        }]);
      } else {
        // Pour les icônes carrées: simple redimensionnement
        sharpInstance = sharpInstance.resize(icon.size, icon.size, {
          fit: 'cover',
          position: 'center'
        });
      }

      // Appliquer le format
      if (icon.format === 'jpeg') {
        sharpInstance = sharpInstance.jpeg({ quality: icon.quality || 90 });
      } else {
        sharpInstance = sharpInstance.png({ compressionLevel: 9 });
      }

      await sharpInstance.toFile(outputPath);

      const stats = await fs.stat(outputPath);
      const sizeKB = (stats.size / 1024).toFixed(1);
      console.log(`✅ ${icon.name.padEnd(25)} (${sizeKB} KB)`);

    } catch (error) {
      console.error(`❌ Erreur pour ${icon.name}:`, error.message);
    }
  }

  console.log('\n🎉 Génération terminée!\n');
  console.log('📁 Fichiers créés dans:', publicDir);
  console.log('\n📋 Prochaines étapes:');
  console.log('   1. Vérifier les icônes générées dans /public');
  console.log('   2. Tester le site en local');
  console.log('   3. Commit et push pour déployer');
}

// Exécuter le script
generateIcons().catch(error => {
  console.error('❌ Erreur:', error);
  process.exit(1);
});
