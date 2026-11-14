# Site de Picness Valley

Site officiel de Picness Valley : présentation du jeu, version navigateur, notes de version et **Picness Wiki**.
Bilingue, français par défaut (`/`) et anglais (`/en/`). Construit avec [Astro](https://astro.build) et [Starlight](https://starlight.astro.build) (wiki), hébergé sur Vercel.

## Lancer le site en local

```bash
npm install
npm run dev
```

Le site s'ouvre sur http://localhost:4321. `npm run build` produit le site final dans `dist/`.

## Où modifier quoi

| Quoi | Où |
|---|---|
| Textes de l'accueil, de la page Jouer et de la navigation (FR et EN) | `src/i18n.ts` |
| Adresse de la version navigateur, numéro de version affiché | `src/site.config.ts` |
| Page d'accueil (mise en page) | `src/components/Home.astro` |
| Couleurs et polices | `src/styles/tokens.css` ; site : `src/styles/site.css` ; wiki : `src/styles/wiki.css` |
| Notes de version | `src/content/notes/fr/AAAA-MM-JJ.md` et sa traduction dans `src/content/notes/en/` (même nom de fichier) |
| Pages du wiki | `src/content/docs/wiki/` (FR) et `src/content/docs/en/wiki/` (EN, mêmes noms de fichiers) |
| Menu du wiki | `sidebar` dans `astro.config.mjs` |
| Images du jeu (icônes, cadres, parchemin, illustration) | `node scripts/import-art.mjs` les recopie depuis le dépôt `Picness-Valley` voisin |
| Modèles 3D du wiki (`public/models/*.glb`) | `bash scripts/export-models.sh` les réexporte depuis les `.blend` du dépôt `Picness-Valley` (Blender 5.2, animations comprises) |
| Lecteur 3D (rotation, animations, rendu cartoon) | `src/components/Model3D.astro` et `src/scripts/model-viewer.ts` ; dans une page `.mdx` : `<Model3D title="…" src="house-a" />` |

## Ajouter une note de version

1. Copier `src/content/notes/fr/2026-11-10.md` sous la date du jour.
2. Remplir `title`, `date`, `from` et `to` (versions du jeu couvertes, code `0.N` = numéro du dernier ADR), `summary`, puis le texte.
3. Faire la même chose en anglais dans `src/content/notes/en/`.
4. Mettre à jour `GAME_VERSION` dans `src/site.config.ts`.

## Mettre en ligne la version navigateur

1. Dans Unity, faire une build WebGL du jeu.
2. Copier le contenu du dossier de build dans `public/play/` (on doit avoir `public/play/index.html` et `public/play/Build/`).
3. Dans `src/site.config.ts`, mettre `PLAY_URL = '/play/index.html'`.

`vercel.json` envoie les en-têtes demandés par les fichiers compressés de Unity (`.br` et `.gz`). Limites à connaître : GitHub refuse les fichiers de plus de 100 Mo, et une build pèse lourd dans le dépôt ; si elle grossit, l'héberger ailleurs (itch.io…) et mettre son adresse dans `PLAY_URL`.

## Déploiement sur Vercel

Sur vercel.com : *Add New… > Project*, importer le dépôt GitHub `PicnessValleySite` ; Vercel reconnaît Astro tout seul (build `npm run build`, sortie `dist`). Chaque push sur `main` met le site à jour, chaque branche a son aperçu.

Une fois l'adresse connue, la mettre dans `site` de `astro.config.mjs` (sitemap et images de partage).
