// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
	// Adresse publique du site : à remplacer par l'adresse Vercel ou le nom de domaine définitif.
	// site: 'https://picness-valley.vercel.app',
	integrations: [
		starlight({
			title: 'Picness Wiki',
			description: 'Toutes les infos de Picness Valley : habitants, métiers, bâtiments, ressources et saisons.',
			favicon: '/favicon.png',
			defaultLocale: 'root',
			locales: {
				root: { label: 'Français', lang: 'fr' },
				en: { label: 'English', lang: 'en' },
			},
			customCss: ['@fontsource-variable/nunito', './src/styles/tokens.css', './src/styles/wiki.css'],
			components: {
				// Liens vers le reste du site (accueil, jouer, notes) dans l'en-tête du wiki.
				SocialIcons: './src/components/WikiNav.astro',
			},
			sidebar: [
				{
					label: 'Picness Wiki',
					translations: { en: 'Picness Wiki' },
					items: [{ slug: 'wiki' }, { slug: 'wiki/bien-demarrer' }, { slug: 'wiki/commandes' }],
				},
				{
					label: 'Le village',
					translations: { en: 'The village' },
					items: [
						{ slug: 'wiki/habitants' },
						{ slug: 'wiki/metiers' },
						{ slug: 'wiki/batiments' },
						{ slug: 'wiki/ressources' },
					],
				},
				{
					label: 'Le monde',
					translations: { en: 'The world' },
					items: [{ slug: 'wiki/saisons' }],
				},
			],
		}),
	],
});
