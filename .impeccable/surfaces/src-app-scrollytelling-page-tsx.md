---
version: 1
slug: "src-app-scrollytelling-page-tsx"
primary_target: "src/app/scrollytelling/page.tsx"
related_targets: []
---

# Surface brief : le grand reportage (le CV en questions)

## Scope and mode

- Surface : `/scrollytelling` (`src/app/scrollytelling/page.tsx`, ex-HTML statique de `public/scrollytelling/`). L'URL ne change pas.
- Mode : Read. Le recruteur comprend le profil, puis écrit à Romain.

## Audience, job, action

- Recruteur ou employeur arrivé par le bulletin de l'accueil : il veut savoir ce que Romain fait, ce qui le prouve, son parcours, sa disponibilité.
- Action principale (noir inversé) : « Écrire à Romain », `contact@romain-ecarnot.com`. Secondaires : le PDF, LinkedIn, retour au bulletin.
- Contenu : les réponses sont les textes du CV d'origine, mot pour mot (`src/data/reportage.ts`). Les questions et le chapeau sont une copie nouvelle, à faire valider par Romain.
- AVC discret (choix de Romain) : une question courte, « Et 2025 ? », après le parcours ; la phrase « Je sais où le numérique perd les gens : j'y suis passé » y reste, comme argument professionnel.
- Retirés par le monde : bascule clair/sombre, compteurs animés, jauge de progression. La progression passe au crayon du lecteur.

## Direction contract

THESIS : le grand reportage est un entretien de page Portrait dont les questions sont celles du recruteur et les réponses les mots de Romain, tels qu'ils sont dans son CV ; chaque preuve est un encadré posé sous la réponse qu'elle prouve, entre deux questions, comme sur la carte validée par Romain. Il refuse le scrollytelling par défaut : compteurs animés, jauge de progression, bascule clair/sombre.

OWN-WORLD : le monde page Portrait inchangé (papier saumon, encre noire chaude, aucune autre teinte ; noir inversé réservé au bloc « Écrire à Romain »). Questions en grotesque condensée grasse, numérotées dans une colonne de marge en chiffres de titraille ; réponses en Source Serif à la première personne, sur une colonne de lecture d'environ 65 caractères, en drapeau, la première ouverte en petites capitales (des réponses de trois à six lignes ne se coupent pas en colonnes de journal : l'œil y ferait l'aller-retour pour rien) ; encadrés de 3px pour les preuves ; repères en lignes pleine largeur, la rupture de 2025 en pointillé. Motion : le crayon du lecteur coche dans le sommaire chaque question vraiment lue (tenue dans la bande de lecture assez longtemps ; un saut par le sommaire ne coche rien), souligne celle en cours, et au retour marque l'endroit où la lecture s'était arrêtée. Sur mobile, un titre courant posé en haut de l'écran donne la question en cours et ramène au sommaire. Raises : l'état est une marque (banc de montage) ; numérotation stricte en marge (pliage de la grue).

STORY : en un regard, le portrait et le titre-citation disent qui parle ; le sommaire des neuf questions dit ce que le recruteur va apprendre ; en lisant, chaque réponse s'adosse à sa preuve ; la dernière question mène au bloc noir « Écrire à Romain ».

FIRST VIEWPORT (1440) : folio pleine largeur. Gauche 4/12 : portrait noir et blanc au format 4:3, légende, puis le sommaire des neuf questions (numéro, question, coche au crayon), seul à rester collé à l'écran pendant la lecture : portrait et sommaire ensemble dépasseraient un écran de portable. Droite 8/12 : le titre « Romain Ecarnot : « Je parle la langue des ingénieurs, celle des métiers et celle des usagers » » en titraille condensée, le chapeau serif gras, un filet de 3px, puis la question 1 et sa réponse. Encadrés, listes, filets et bloc final prennent toute la largeur de la colonne ; le texte des réponses garde sa mesure de lecture (38rem), comme le texte courant d'un journal à côté de ses encadrés.

FORM : le CV en questions, candidat 3 de ma liste ordonnée (6 candidats), seed 8e51affa.

FINISH : unreviewed and undocumented is unfinished; this build ends with the finish review, the verdict, DESIGN.md, and every shipping raster carrying its provenance

## Unresolved decisions

- Questions, chapeau et titre (citation tirée de la réponse sur la transmission) à faire valider par Romain. Chapeau corrigé le 23/09 après la revue de fin : les rôles repris tels que le CV les nomme (« architecte logiciel sur les services Bbox TV », « architecte solutions AWS sur la migration du SI de Veolia »).
- Six challengers du tirage écartés (grue en origami, plongée profonde, raies d'émission, banc de montage, labanotation, calendrier) : deux ont donné une discipline (voir Raises).
