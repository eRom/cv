#!/usr/bin/env node
/**
 * Script de génération de l'image Open Graph personnalisée
 * Crée une image professionnelle 1200x630 pour les partages sociaux
 */

import sharp from 'sharp';
import { promises as fs } from 'fs';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const projectRoot = join(__dirname, '..');

async function generateOGImage() {
  console.log('🎨 Génération de l\'image Open Graph professionnelle...\n');

  const sourcePath = join(projectRoot, 'profil-mcu.png');
  const outputPath = join(projectRoot, 'public', 'og-image.jpg');

  // Dimensions Open Graph standard
  const width = 1200;
  const height = 630;

  // Couleurs du thème
  const backgroundColor = '#ffffff';
  const primaryColor = '#000000';
  const accentColor = '#3b82f6'; // Bleu moderne

  try {
    // 1. Préparer la photo de profil (cercle)
    const profileSize = 280;
    const profileImage = await sharp(sourcePath)
      .resize(profileSize, profileSize, {
        fit: 'cover',
        position: 'center'
      })
      .composite([{
        input: Buffer.from(
          `<svg width="${profileSize}" height="${profileSize}">
            <circle cx="${profileSize/2}" cy="${profileSize/2}" r="${profileSize/2}" fill="white"/>
          </svg>`
        ),
        blend: 'dest-in'
      }])
      .png()
      .toBuffer();

    // 2. Créer le SVG avec le design complet
    const svg = `
      <svg width="${width}" height="${height}" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <linearGradient id="bgGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" style="stop-color:#f0f9ff;stop-opacity:1" />
            <stop offset="100%" style="stop-color:#e0f2fe;stop-opacity:1" />
          </linearGradient>

          <filter id="shadow">
            <feDropShadow dx="0" dy="4" stdDeviation="8" flood-opacity="0.1"/>
          </filter>
        </defs>

        <!-- Fond dégradé -->
        <rect width="${width}" height="${height}" fill="url(#bgGradient)"/>

        <!-- Cercle décoratif en haut à droite -->
        <circle cx="1050" cy="80" r="150" fill="${accentColor}" opacity="0.1"/>

        <!-- Cercle décoratif en bas à gauche -->
        <circle cx="150" cy="550" r="120" fill="${accentColor}" opacity="0.08"/>

        <!-- Ligne d'accent -->
        <rect x="80" y="200" width="8" height="230" fill="${accentColor}" rx="4"/>

        <!-- Container blanc pour le contenu -->
        <rect x="120" y="150" width="960" height="330" fill="white" rx="24" filter="url(#shadow)" opacity="0.95"/>

        <!-- Texte: Nom -->
        <text x="450" y="260" font-family="system-ui, -apple-system, sans-serif" font-size="64" font-weight="700" fill="${primaryColor}">
          Romain Ecarnot
        </text>

        <!-- Texte: Titre -->
        <text x="450" y="330" font-family="system-ui, -apple-system, sans-serif" font-size="36" font-weight="400" fill="#64748b">
          Architecte Cloud &amp; Développeur
        </text>

        <!-- Barre de séparation -->
        <rect x="450" y="350" width="180" height="3" fill="${accentColor}" rx="2"/>

        <!-- Badges de compétences -->
        <g font-family="system-ui, -apple-system, sans-serif">
          <!-- Badge 1 -->
          <rect x="450" y="375" width="210" height="40" fill="${accentColor}" opacity="0.1" rx="20"/>
          <text x="555" y="401" font-size="18" font-weight="600" fill="${accentColor}" text-anchor="middle">Cloud Architecture</text>

          <!-- Badge 2 -->
          <rect x="675" y="375" width="120" height="40" fill="${accentColor}" opacity="0.1" rx="20"/>
          <text x="735" y="401" font-size="18" font-weight="600" fill="${accentColor}" text-anchor="middle">DevOps</text>

          <!-- Badge 3 -->
          <rect x="810" y="375" width="160" height="40" fill="${accentColor}" opacity="0.1" rx="20"/>
          <text x="890" y="401" font-size="18" font-weight="600" fill="${accentColor}" text-anchor="middle">AWS • Azure</text>
        </g>

        <!-- Footer: URL -->
        <text x="${width/2}" y="580" font-family="system-ui, -apple-system, sans-serif" font-size="24" font-weight="500" fill="${accentColor}" text-anchor="middle">
          cv.romain-ecarnot.com
        </text>
      </svg>
    `;

    // 3. Créer l'image de base avec le SVG
    const baseImage = await sharp(Buffer.from(svg))
      .png()
      .toBuffer();

    // 4. Ajouter la photo de profil par-dessus
    const finalImage = await sharp(baseImage)
      .composite([{
        input: profileImage,
        top: Math.round((height - profileSize) / 2),
        left: 140,
      }])
      .jpeg({
        quality: 95,
        chromaSubsampling: '4:4:4'
      })
      .toFile(outputPath);

    const stats = await fs.stat(outputPath);
    const sizeKB = (stats.size / 1024).toFixed(1);

    console.log(`✅ Image Open Graph créée avec succès!`);
    console.log(`   Fichier: ${outputPath}`);
    console.log(`   Dimensions: ${width}x${height}px`);
    console.log(`   Taille: ${sizeKB} KB`);
    console.log(`\n📋 Prochaines étapes:`);
    console.log(`   1. Vérifier l'aperçu de l'image`);
    console.log(`   2. Tester avec https://www.opengraph.xyz/`);
    console.log(`   3. Commit et déployer`);

  } catch (error) {
    console.error('❌ Erreur lors de la génération:', error.message);
    process.exit(1);
  }
}

// Exécuter le script
generateOGImage();
