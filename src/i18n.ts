// Textes et adresses des pages du site (hors wiki, traduit par Starlight).
export type Lang = 'fr' | 'en';

export const routes = {
	fr: { home: '/', play: '/jouer/', notes: '/notes/', wiki: '/wiki/' },
	en: { home: '/en/', play: '/en/play/', notes: '/en/notes/', wiki: '/en/wiki/' },
} as const;

const strings = {
	fr: {
		siteDescription:
			"Picness Valley, un jeu de village en 3D : guidez quatre habitants dans une vallée sauvage, au fil des saisons. Jouable dans le navigateur.",
		navGame: 'Le jeu',
		navPlay: 'Jouer',
		navNotes: 'Notes de version',
		navWiki: 'Picness Wiki',
		otherLang: 'English',
		heroTagline: 'Un village à bâtir, quatre habitants à guider, une vallée qui change avec les saisons.',
		heroPlay: 'Jouer dans le navigateur',
		heroWiki: 'Ouvrir le Picness Wiki',
		alpha: 'En développement',
		version: 'Version',
		pitchTitle: 'Le jeu',
		pitch: [
			"Au fond d'une vallée, quatre habitants arrivent avec rien : pas de maison, pas de réserves. Autour d'eux, une forêt, des buissons à baies et des rochers.",
			"Sélectionnez-les, envoyez-les couper du bois, cueillir ou casser des pierres. Posez les premiers chantiers, tracez les routes, et laissez-les vivre : ils mangent, se réchauffent et se reposent tout seuls.",
			"Une année passe en quelques minutes. Les arbres fleurissent, jaunissent puis se couvrent de neige. Quand l'hiver arrive, mieux vaut avoir du bois de chauffe dans chaque maison.",
		],
		needsTitle: 'Des habitants qui vivent leur vie',
		needs: [
			{ icon: 'food', name: 'Faim', text: 'Baies et pommes de terre, rangées dans les maisons et les celliers.' },
			{ icon: 'cold', name: 'Froid', text: "Le bois de chauffe brûle dans les maisons, d'autant plus vite que la saison est froide." },
			{ icon: 'energy', name: 'Énergie', text: "Le travail fatigue : un habitant épuisé s'arrête pour se reposer." },
			{ icon: 'health', name: 'Santé', text: 'Chaque habitant a ses points de vie, affichés sur sa fiche.' },
		],
		seasonsTitle: 'Quatre saisons, une vallée vivante',
		seasons: [
			{ key: 'spring', name: 'Printemps', text: 'La neige fond, les arbres fleurissent, on laboure les champs.' },
			{ key: 'summer', name: 'Été', text: 'Les buissons se couvrent de baies, de jeunes arbres poussent.' },
			{ key: 'autumn', name: 'Automne', text: 'Les feuilles jaunissent et tombent, on récolte les pommes de terre.' },
			{ key: 'winter', name: 'Hiver', text: 'La neige recouvre tout : les maisons doivent rester chauffées.' },
		],
		jobsTitle: 'Un métier pour chacun',
		jobsIntro: "Un clic droit sur un arbre, un buisson ou un rocher donne le métier qui va avec. Ou attachez vos habitants à une cabane.",
		jobs: [
			{ icon: 'forester', name: 'Bûcheron' },
			{ icon: 'gatherer', name: 'Cueilleur' },
			{ icon: 'miner', name: 'Mineur' },
			{ icon: 'builder', name: 'Bâtisseur' },
			{ icon: 'woodcutter', name: 'Fendeur' },
			{ icon: 'farmer', name: 'Cultivateur' },
			{ icon: 'peddler', name: 'Logisticien' },
		],
		notesTitle: 'Dernières nouveautés',
		notesAll: 'Toutes les notes de version',
		ctaTitle: 'Prêt à poser la première maison ?',
		footer: 'Picness Valley, un jeu de Totoludies.',
		playTitle: 'Jouer à Picness Valley',
		playIntro: "Le jeu se lance directement dans le navigateur, sans installation. Un ordinateur avec souris et clavier est conseillé.",
		playSoon: 'La version navigateur arrive très bientôt.',
		playSoonText: "En attendant, découvrez le jeu dans le Picness Wiki et suivez les nouveautés dans les notes de version.",
		playFullscreen: 'Ouvrir en plein écran',
		notesIntro: 'Ce qui change dans Picness Valley, mise à jour après mise à jour.',
		notesBack: '← Toutes les notes de version',
		versions: 'Versions',
	},
	en: {
		siteDescription:
			'Picness Valley, a 3D village game: guide four villagers through a wild valley, season after season. Playable in your browser.',
		navGame: 'The game',
		navPlay: 'Play',
		navNotes: 'Patch notes',
		navWiki: 'Picness Wiki',
		otherLang: 'Français',
		heroTagline: 'A village to build, four villagers to guide, a valley that changes with the seasons.',
		heroPlay: 'Play in your browser',
		heroWiki: 'Open the Picness Wiki',
		alpha: 'In development',
		version: 'Version',
		pitchTitle: 'The game',
		pitch: [
			'Deep in a valley, four villagers arrive with nothing: no house, no supplies. Around them, a forest, berry bushes and rocks.',
			'Select them, send them to chop wood, pick berries or break stones. Lay down the first building sites, draw the roads, and let them live: they eat, warm up and rest on their own.',
			'A year goes by in a few minutes. Trees blossom, turn yellow, then get covered in snow. When winter comes, every house had better have firewood.',
		],
		needsTitle: 'Villagers with a life of their own',
		needs: [
			{ icon: 'food', name: 'Hunger', text: 'Berries and potatoes, stored in houses and cellars.' },
			{ icon: 'cold', name: 'Cold', text: 'Firewood burns in the houses, faster as the season gets colder.' },
			{ icon: 'energy', name: 'Energy', text: 'Work is tiring: an exhausted villager stops to rest.' },
			{ icon: 'health', name: 'Health', text: 'Each villager has health points, shown on their card.' },
		],
		seasonsTitle: 'Four seasons, a living valley',
		seasons: [
			{ key: 'spring', name: 'Spring', text: 'Snow melts, trees blossom, fields are ploughed.' },
			{ key: 'summer', name: 'Summer', text: 'Bushes fill with berries, young trees sprout.' },
			{ key: 'autumn', name: 'Autumn', text: 'Leaves turn yellow and fall, potatoes are harvested.' },
			{ key: 'winter', name: 'Winter', text: 'Snow covers everything: houses must stay heated.' },
		],
		jobsTitle: 'A job for everyone',
		jobsIntro: 'Right-click a tree, a bush or a rock to give the matching job. Or assign your villagers to a hut.',
		jobs: [
			{ icon: 'forester', name: 'Forester' },
			{ icon: 'gatherer', name: 'Gatherer' },
			{ icon: 'miner', name: 'Miner' },
			{ icon: 'builder', name: 'Carpenter' },
			{ icon: 'woodcutter', name: 'Woodcutter' },
			{ icon: 'farmer', name: 'Farmer' },
			{ icon: 'peddler', name: 'Logistician' },
		],
		notesTitle: "What's new",
		notesAll: 'All patch notes',
		ctaTitle: 'Ready to build the first house?',
		footer: 'Picness Valley, a game by Totoludies.',
		playTitle: 'Play Picness Valley',
		playIntro: 'The game runs right in your browser, nothing to install. A computer with a mouse and keyboard is recommended.',
		playSoon: 'The browser version is coming very soon.',
		playSoonText: 'Meanwhile, discover the game in the Picness Wiki and follow the news in the patch notes.',
		playFullscreen: 'Open full screen',
		notesIntro: 'What changes in Picness Valley, update after update.',
		notesBack: '← All patch notes',
		versions: 'Versions',
	},
} as const;

export function t(lang: Lang) {
	return strings[lang];
}

export function formatDate(date: Date, lang: Lang) {
	return date.toLocaleDateString(lang === 'fr' ? 'fr-FR' : 'en-GB', {
		day: 'numeric',
		month: 'long',
		year: 'numeric',
		timeZone: 'UTC',
	});
}
