# Guide de Déploiement

## 🚀 Déploiement rapide avec Vercel

### Prérequis
- Compte GitHub
- Compte Vercel (gratuit)

### Étapes

#### 1. Préparer le repository Git

\`\`\`bash
# Vérifier le statut Git
git status

# Si non initialisé, initialiser Git
git init

# Ajouter tous les fichiers
git add .

# Créer le premier commit
git commit -m "Initial commit: CV Romain Ecarnot"
\`\`\`

#### 2. Pousser vers GitHub

**Option A: Avec GitHub CLI (recommandé)**
\`\`\`bash
# Vérifier l'authentification
gh auth status

# Si non connecté
gh auth login

# Créer et pousser le repo
gh repo create cv-romain-ecarnot --public --push --source=.
\`\`\`

**Option B: Manuellement**
1. Créer un nouveau repo sur GitHub.com
2. Suivre les instructions affichées

#### 3. Déployer sur Vercel

**Option A: Via Vercel CLI**
\`\`\`bash
# Installer Vercel CLI (si pas déjà fait)
npm i -g vercel

# Se connecter
vercel login

# Déployer en production
vercel --prod
\`\`\`

**Option B: Via Dashboard Vercel**
1. Aller sur https://vercel.com/new
2. Importer le repo GitHub
3. Cliquer sur "Deploy"

## ⚙️ Configuration post-déploiement

### 1. Domaine personnalisé
- Aller dans Project Settings > Domains
- Ajouter votre domaine (ex: romainecarnot.fr)
- Configurer les DNS selon les instructions

### 2. Variables d'environnement (si nécessaire)
- Aller dans Project Settings > Environment Variables
- Ajouter les variables nécessaires

### 3. Google Search Console

Une fois déployé:
1. Aller sur https://search.google.com/search-console
2. Ajouter votre propriété
3. Copier le code de vérification
4. Mettre à jour \`src/app/page.tsx\`:
\`\`\`typescript
verification: {
  google: "VOTRE_CODE_ICI",
}
\`\`\`
5. Redéployer

### 4. Mettre à jour les URLs

Remplacer \`https://romainecarnot.fr\` par votre URL réelle dans:
- \`src/app/layout.tsx\` (ligne 20)
- \`src/app/page.tsx\` (lignes 46, 68, 85)
- \`src/app/sitemap.ts\` (ligne 8)
- \`public/robots.txt\` (ligne 7)

## 📊 Monitoring

### Analytics (optionnel)
Vercel Analytics est automatiquement activé sur les projets Vercel.

Pour ajouter Google Analytics:
1. Créer une propriété GA4
2. Ajouter le script dans \`src/app/layout.tsx\`

### Performance
- Vercel Analytics: Activé par défaut
- Web Vitals: Suivis automatiquement
- Lighthouse: Accessible via DevTools Chrome

## 🔄 Déploiement continu

Chaque push sur la branche principale déclenchera automatiquement:
1. Build de l'application
2. Tests de lint
3. Déploiement en production

Pour les branches de feature:
- Vercel crée automatiquement des preview deployments
- URL unique pour chaque PR

## 🛠️ Commandes utiles

\`\`\`bash
# Voir les logs de déploiement
vercel logs

# Lister les déploiements
vercel ls

# Promouvoir un déploiement en production
vercel promote [deployment-url]

# Rollback vers un déploiement précédent
vercel rollback

# Ouvrir le projet dans Vercel
vercel open
\`\`\`

## 📱 Tester le déploiement

Après déploiement, vérifier:
- [ ] La page s'affiche correctement
- [ ] Tous les liens fonctionnent
- [ ] Les images Open Graph s'affichent sur les réseaux sociaux
- [ ] Le sitemap est accessible (/sitemap.xml)
- [ ] Le robots.txt est accessible (/robots.txt)
- [ ] Le manifest est accessible (/manifest.json)
- [ ] Le site est responsive (mobile, tablet, desktop)
- [ ] Les performances Lighthouse sont bonnes (>90)

## 🐛 Dépannage

### Erreur de build
\`\`\`bash
# Tester localement
npm run build

# Vérifier les logs
vercel logs
\`\`\`

### Problème de domaine
- Vérifier les enregistrements DNS
- Attendre la propagation DNS (peut prendre 24-48h)
- Vérifier dans Vercel Dashboard > Domains

### Images manquantes
- Vérifier que les images sont dans \`public/\`
- Vérifier les chemins (commencent par \`/\`)

## 📚 Ressources

- [Documentation Vercel](https://vercel.com/docs)
- [Next.js Deployment](https://nextjs.org/docs/deployment)
- [Vercel CLI Reference](https://vercel.com/docs/cli)
- [Custom Domains](https://vercel.com/docs/concepts/projects/domains)
