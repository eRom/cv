---
version: 1
slug: "src-app-page-tsx"
primary_target: "src/app/page.tsx"
related_targets: []
---

# Surface brief : accueil du CV (hub)

## Scope and mode

- Surface : `/` (`src/app/page.tsx`). Le grand reportage (`/scrollytelling`) a son propre brief ; la Console (`/dashboard`) reste intacte.
- Mode : Persuade. Le recruteur choisit sa lecture et l'ouvre.

## Audience, job, action

- Recruteur ou employeur, souvent arrivé par « Suite : le CV complet » de romain-ecarnot.com, peu de temps.
- Action principale (noir inversé, choix de Romain le 23/09/2026) : lire le grand reportage. Secondaires : la Console, le PDF (2 pages). Contact : `contact@romain-ecarnot.com`.
- Fonctions à garder : raccourcis clavier C ou 1 (Console), S ou 2 (reportage) ; le portrait mène à www.romain-ecarnot.com dans le même onglet ; LinkedIn, GitHub, romain-ecarnot.com, email.

## Direction contract

THESIS : l'accueil du CV est un bulletin de lecture imprimé dans la page ; le recruteur coche au crayon la lecture qu'il veut et la page s'ouvre. Il refuse le hub par défaut : deux cartes « A contre B » côte à côte sur fond sombre.

OWN-WORLD : le monde page Portrait de romain-ecarnot.com, inchangé : papier saumon, encre noire chaude, aucune autre teinte ; noir inversé réservé à la ligne du grand reportage ; titraille Archivo condensée, texte Source Serif 4, folio à double filet. Le bulletin est un coupon à découper : son bord est le pointillé du monde (signe de rupture, ici la ligne de découpe), qui le distingue des encadrés pleins de 3px ; colonnes fixes (case, libellé, format, référence) séparées de filets de 1px ; les lignes parlent à la première personne du lecteur, comme un vrai coupon (« Je lis le grand reportage »). Motion : le crayon du lecteur trace la coche dans la case au survol et au focus, souligne le libellé (en couleur papier sur la ligne en noir inversé), et garde cochées les lectures déjà faites. Raises : colonnes fixes (tableau des départs) ; mémoire des lectures faites (pile HyperCard).

STORY : en une seconde, le titre dit à qui est ce CV ; en trois, le bulletin montre les deux lectures et le PDF avec leur format ; le recruteur coche, lit, revient, et sa lecture reste cochée. Le contact est la ligne « Bulletin à renvoyer à » du coupon.

FIRST VIEWPORT (1440) : folio pleine largeur (date du jour · « Suite de la page Portrait » vers romain-ecarnot.com ; sommaire Le CV, Reportage, Console, PDF), double filet. Gauche 7/12 : titre « Romain Ecarnot, à lire au choix. » au plafond de 6rem, chapeau serif gras sur 38ch, puis la ligne signature : vignette carrée du portrait (lien vers romain-ecarnot.com) et « Ailleurs » LinkedIn, GitHub. Droite 5/12 : le bulletin à découper, rubrique « Bulletin de lecture », trois lignes à cocher (grand reportage en noir inversé avec sa durée de lecture calculée sur le texte, réf. S ; Console, 4 vues, réf. C ; PDF, 2 pages, réf. P), puis « Bulletin à renvoyer à : contact@romain-ecarnot.com ». Sous ces deux colonnes, sur toute la largeur, « Dans le grand reportage » : les neuf questions de l'entretien en trois colonnes, chacune menant à sa réponse et portant la coche du crayon si elle a été lue.

FORM : le bulletin de lecture, candidat 6 de ma liste ordonnée (7 candidats), seed 34bdb3c1.

FINISH : unreviewed and undocumented is unfinished; this build ends with the finish review, the verdict, DESIGN.md, and every shipping raster carrying its provenance

## Unresolved decisions

- Copie nouvelle (titre, chapeau, lignes du bulletin) à faire valider par Romain avant la mise en ligne ; tous les faits viennent du CV.
- Raccourci P (PDF) ajouté pour que chaque ligne du bulletin ait sa référence. Les raccourcis d'une seule touche se coupent depuis le bulletin (« couper » / « rétablir le clavier »), exigence WCAG 2.1.4 relevée par la revue de fin ; les références ne s'affichent qu'en grand écran et tant que le clavier est actif.
- Revue de fin du 23/09 : chapeau réaligné sur le bulletin (deux lectures et une version imprimée).
- Image de partage `public/og-image.jpg` encore dans l'ancien monde sombre.
- Six challengers du tirage écartés (HyperCard, tableau des départs, cartes numérotées, signal télé, notice de montage, néon) : aucun ne gagnait en identification ni en clarté ; deux ont donné une discipline (voir Raises).
