import sharp from '/Users/recarnot/dev/linktree/node_modules/sharp/lib/index.js';
import fs from 'fs';
import path from 'path';

const WIDTH = 1200;
const HEIGHT = 630;
const AVATAR_PATH = path.join(import.meta.dir, '../public/avatar.jpg');
const OUTPUT_PATH = path.join(import.meta.dir, '../public/og-image.jpg');

async function generateCVOGImage() {
  console.log('🎨 Génération de l\'image OpenGraph pour cv.romain-ecarnot.com...');

  // 1. Préparer l'avatar circulaire
  const AVATAR_SIZE = 240;
  const avatarBuffer = fs.readFileSync(AVATAR_PATH);

  const circularAvatar = await sharp(avatarBuffer)
    .resize(AVATAR_SIZE, AVATAR_SIZE, { fit: 'cover' })
    .composite([
      {
        input: Buffer.from(`
          <svg width="${AVATAR_SIZE}" height="${AVATAR_SIZE}">
            <circle cx="${AVATAR_SIZE / 2}" cy="${AVATAR_SIZE / 2}" r="${AVATAR_SIZE / 2}" fill="white"/>
          </svg>
        `),
        blend: 'dest-in'
      }
    ])
    .png()
    .toBuffer();

  // 2. SVG Background & Typography (Dark Épuré Linear/Vercel style)
  const svgContent = `
    <svg width="${WIDTH}" height="${HEIGHT}" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <!-- Top ambient glow -->
        <radialGradient id="topGlow" cx="50%" cy="0%" r="60%">
          <stop offset="0%" stop-color="#3b3b44" stop-opacity="0.35"/>
          <stop offset="100%" stop-color="#09090b" stop-opacity="0"/>
        </radialGradient>

        <!-- Subtle Card gradient -->
        <linearGradient id="cardGrad" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stop-color="#18181b" stop-opacity="0.85"/>
          <stop offset="100%" stop-color="#111113" stop-opacity="0.95"/>
        </linearGradient>

        <linearGradient id="cardBorder" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stop-color="#3f3f46" stop-opacity="0.8"/>
          <stop offset="100%" stop-color="#27272a" stop-opacity="0.3"/>
        </linearGradient>
      </defs>

      <!-- Base background #09090b -->
      <rect width="${WIDTH}" height="${HEIGHT}" fill="#09090b"/>
      <rect width="${WIDTH}" height="${HEIGHT}" fill="url(#topGlow)"/>

      <!-- Central Card -->
      <rect x="70" y="75" width="1060" height="480" rx="24" fill="url(#cardGrad)"/>
      <rect x="70" y="75" width="1060" height="480" rx="24" fill="none" stroke="url(#cardBorder)" stroke-width="1.5"/>

      <!-- Avatar Ring -->
      <circle cx="250" cy="315" r="126" fill="none" stroke="#27272a" stroke-width="2"/>
      <circle cx="250" cy="315" r="130" fill="none" stroke="#3f3f46" stroke-width="1" opacity="0.5"/>

      <!-- Active Green Status Dot -->
      <circle cx="338" cy="403" r="14" fill="#10b981" stroke="#18181b" stroke-width="4"/>

      <!-- Header Label / Domain -->
      <g transform="translate(420, 145)">
        <rect width="210" height="32" rx="16" fill="#27272a" opacity="0.6"/>
        <circle cx="16" cy="16" r="4" fill="#10b981"/>
        <text x="30" y="21" font-family="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif" font-size="13" font-weight="600" fill="#a1a1aa" letter-spacing="0.5">
          cv.romain-ecarnot.com
        </text>
      </g>

      <!-- Main Title -->
      <text x="420" y="240" font-family="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif" font-size="50" font-weight="700" fill="#fafafa" letter-spacing="-1">
        Romain Ecarnot
      </text>

      <!-- Subtitle -->
      <text x="420" y="295" font-family="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif" font-size="25" font-weight="500" fill="#d4d4d8">
        Passeur du numérique &amp; Architecte du simple
      </text>

      <!-- Tagline -->
      <text x="420" y="340" font-family="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif" font-size="18" font-weight="400" fill="#71717a">
        25 ans d'architecture des systèmes aujourd'hui au service des usages
      </text>

      <!-- Badges Experiences A & B -->
      <g transform="translate(420, 395)">
        <!-- Expérience A -->
        <rect x="0" y="0" width="180" height="36" rx="10" fill="#0284c7" opacity="0.15"/>
        <rect x="0" y="0" width="180" height="36" rx="10" fill="none" stroke="#0284c7" stroke-width="1" opacity="0.5"/>
        <text x="90" y="23" font-family="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif" font-size="13" font-weight="600" fill="#38bdf8" text-anchor="middle">
          Console d&apos;Architecte
        </text>

        <!-- Expérience B -->
        <rect x="195" y="0" width="195" height="36" rx="10" fill="#d97706" opacity="0.15"/>
        <rect x="195" y="0" width="195" height="36" rx="10" fill="none" stroke="#d97706" stroke-width="1" opacity="0.5"/>
        <text x="292" y="23" font-family="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif" font-size="13" font-weight="600" fill="#fbbf24" text-anchor="middle">
          Scrollytelling Récit
        </text>

        <!-- Format A4 & Web -->
        <rect x="405" y="0" width="135" height="36" rx="10" fill="#27272a" opacity="0.5"/>
        <rect x="405" y="0" width="135" height="36" rx="10" fill="none" stroke="#3f3f46" stroke-width="1" opacity="0.6"/>
        <text x="472" y="23" font-family="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif" font-size="13" font-weight="500" fill="#a1a1aa" text-anchor="middle">
          Web &amp; Print 2p
        </text>
      </g>
    </svg>
  `;

  // 3. Composer l'image finale
  await sharp(Buffer.from(svgContent))
    .composite([
      {
        input: circularAvatar,
        top: 195,
        left: 130,
      }
    ])
    .jpeg({ quality: 95, mozjpeg: true })
    .toFile(OUTPUT_PATH);

  console.log('✅ Image OpenGraph générée pour le CV :', OUTPUT_PATH);
}

generateCVOGImage().catch(console.error);
