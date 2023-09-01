<h1 $$ align="center">Portfolio-Astro</h1>

Portfolio-Astro est un projet de site web personnel qui utilise les technologies Astro et Tailwind CSS.

## Technologies Utilisées

- **Astro**: Astro est un framework web qui génère des sites web ultra-rapides en utilisant la technologie du rendu statique et du rendu sur le serveur (SSR) en fonction des besoins. Il permet de créer des sites web performants avec une expérience de développement moderne. [Lien](https://astro.build)

- **Tailwind CSS**: Tailwind CSS est un framework CSS utilitaire qui permet de créer rapidement et efficacement des interfaces utilisateur personnalisées en utilisant des classes CSS pré-définies. Il offre une flexibilité et une extensibilité exceptionnelles pour la conception de l'interface utilisateur. [Lien](https://tailwindcss.com/)

## Architecture des Dossiers

Voici l'architecture des dossiers de notre projet "Astro Portfolio" :

- `src/`: Ce dossier contient le code source de notre application. Il est divisé en sous-dossiers pour organiser les composants, les mises en page, les pages et les styles.

- `content/`: Ce dossier contient des fichiers Markdown (.md) qui servent à générer les pages de votre site. Chaque fichier .md peut contenir du contenu textuel et des métadonnées pour les pages.

- `data/`: Ce dossier contient des fichiers JSON (.json) qui stockent des informations structurées pour votre site. Par exemple, vous pourriez avoir un fichier projectInfo.json qui contient des données sur vos projets et un fichier siteInfo.json pour les informations globales du site.

- `layouts/`: Comme expliqué précédemment, ce dossier contient des mises en page réutilisables telles que MainLayout.astro qui définissent la structure globale de vos pages. Les composants peuvent être imbriqués dans ces mises en page pour une organisation plus modulaire.

- `astro.config.js`: Le fichier de configuration d'Astro qui permet de définir les options de build et les plugins utilisés.

- `package.json`: Le fichier de configuration npm qui répertorie les dépendances et les scripts de notre projet.

## Template

Template utilisé pour faire le site pour la partie [experience](https://astro.build/themes/details/astro-portfolio/) et pour la partie [projets](https://astro.build/themes/details/astrofy/)
