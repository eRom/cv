# CV Romain Ecarnot

Site CV professionnel pour Romain Ecarnot, architecte cloud et développeur.

## 🚀 Technologies

- **Next.js 15** - Framework React pour le rendu côté serveur
- **TypeScript** - Typage statique pour JavaScript
- **Tailwind CSS** - Framework CSS utility-first
- **ShadCN UI** - Composants UI accessibles et modernes
- **Lucide React** - Icônes SVG

## ✨ Fonctionnalités

### SEO Optimisé
- ✅ Métadonnées complètes (title, description, keywords)
- ✅ Open Graph pour les réseaux sociaux
- ✅ Twitter Cards
- ✅ JSON-LD Schema.org (Person)
- ✅ Sitemap.xml automatique
- ✅ Robots.txt configuré
- ✅ Manifest.json pour PWA

### Accessibilité
- ✅ Conformité WCAG AA
- ✅ Rôles ARIA appropriés
- ✅ Labels descriptifs
- ✅ Navigation au clavier
- ✅ Contraste de couleurs optimal

### Performance
- ✅ Génération statique
- ✅ Optimisation des images
- ✅ Code splitting automatique
- ✅ CSS optimisé avec Tailwind

## 📦 Installation

\`\`\`bash
# Installer les dépendances
npm install

# Lancer le serveur de développement
npm run dev

# Construire pour la production
npm run build

# Démarrer le serveur de production
npm start
\`\`\`

## 🔧 Configuration

### Google Search Console

1. Remplacer le code de vérification dans \`src/app/page.tsx\`:
\`\`\`typescript
verification: {
  google: "VOTRE_CODE_VERIFICATION_GOOGLE_ICI",
}
\`\`\`

### Domaine personnalisé

Mettre à jour l'URL dans les fichiers suivants:
- \`src/app/layout.tsx\` - metadataBase
- \`src/app/page.tsx\` - metadata.openGraph.url et metadata.alternates.canonical
- \`src/app/sitemap.ts\` - baseUrl
- \`public/robots.txt\` - Sitemap URL

### Images Open Graph

Ajouter une image Open Graph optimisée:
- Taille: 1200x630 pixels
- Format: JPG ou PNG
- Emplacement: \`public/og-image.jpg\`

### Icônes PWA

Ajouter les icônes pour le manifest:
- \`public/icon-192.png\` (192x192 pixels)
- \`public/icon-512.png\` (512x512 pixels)

## 📁 Structure du projet

\`\`\`
cv/
├── public/
│   ├── robots.txt          # Configuration pour les moteurs de recherche
│   └── manifest.json       # Manifest PWA
├── src/
│   ├── app/
│   │   ├── layout.tsx      # Layout principal avec métadonnées
│   │   ├── page.tsx        # Page d'accueil (CV)
│   │   ├── sitemap.ts      # Génération du sitemap
│   │   └── globals.css     # Styles globaux
│   ├── components/
│   │   └── ui/             # Composants ShadCN UI
│   └── lib/
│       └── utils.ts        # Utilitaires
└── package.json
\`\`\`

## 🚢 Déploiement

### Vercel (Recommandé)

\`\`\`bash
# Installer Vercel CLI
npm i -g vercel

# Se connecter à Vercel
vercel login

# Déployer
vercel --prod
\`\`\`

### GitHub + Vercel

\`\`\`bash
# Initialiser Git
git init
git add .
git commit -m "Initial commit"

# Créer le repo GitHub
gh repo create cv --public --push --source=.

# Connecter à Vercel via le dashboard
# https://vercel.com/new
\`\`\`

## 📝 Personnalisation

### Modifier le contenu

Éditer \`src/app/page.tsx\` pour mettre à jour:
- Informations personnelles
- Compétences et expertise
- Projets
- Liens vers les réseaux sociaux

### Personnaliser les couleurs

Les couleurs sont définies dans \`src/app/globals.css\` avec les variables CSS:
- \`--background\`
- \`--foreground\`
- \`--primary\`
- \`--secondary\`
- etc.

### Ajouter des sections

Utiliser les composants ShadCN UI disponibles:
- Card, CardHeader, CardTitle, CardDescription, CardContent
- Button
- Badge
- Separator

## 🔍 SEO Best Practices

- ✅ URL canonique définie
- ✅ Structure HTML sémantique
- ✅ Balises alt sur les images
- ✅ Liens avec rel="noopener noreferrer"
- ✅ Responsive design (mobile-first)
- ✅ Temps de chargement optimisé

## 📱 Responsive Design

Le site est entièrement responsive avec des breakpoints Tailwind:
- Mobile: < 640px
- Tablet: 640px - 1024px
- Desktop: > 1024px

## 🌐 Liens utiles

- [Documentation Next.js](https://nextjs.org/docs)
- [Documentation ShadCN UI](https://ui.shadcn.com/)
- [Documentation Tailwind CSS](https://tailwindcss.com/docs)
- [Schema.org Person](https://schema.org/Person)
- [Open Graph Protocol](https://ogp.me/)

## 📄 Licence

Propriété de Romain Ecarnot. Tous droits réservés.

## 👤 Auteur

**Romain Ecarnot**
- LinkedIn: [@romainecarnot](https://www.linkedin.com/in/romainecarnot/)
- GitHub: [@eRom](https://github.com/eRom)
- Website: [Health In Cloud](https://www.healthincloud.app/)
- Tipeee: [Rebondir après l'AVC](https://fr.tipeee.com/rebondir-apres-lavc-ma-carriere-dans-la-tech/)
