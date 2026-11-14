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
		heroPlay: 'Jouer dans le navigateur',
		heroWiki: 'Ouvrir le Picness Wiki',
		alpha: 'En développement',
		version: 'Version',
		studioByline: 'Un jeu Totoludies',
		pitchTitle: 'Présentation du jeu',
		pitch: [
			"Picness Valley est un city builder de type « gestion de colonie ». Il vous faudra attribuer des tâches à des villageois pour assurer leur survie et faire prospérer la colonie : travail des champs, construction de bâtiments, récupération de ressources, etc.",
		],
		loreTitle: 'Contexte',
		lore: [
			"Votre aventure se déroule dans la petite vallée de Picness, où votre colonie s'est installée. Par chance, c'est un endroit idéal : une vallée magnifique à la flore luxuriante, bordée de hautes montagnes érigées comme des remparts. Elles forment un large massif riche en carrières de pierre et en minerais précieux, et sont la source de rivières poissonneuses qui viennent irriguer les terres extrêmement fertiles de la vallée. Le cœur de cet éden abrite de grandes forêts plantureuses, qui fournissent du bois en quantité pour la construction et le chauffage de votre colonie.",
		],
		loreQuote: ['Cependant, vivre dans la vallée de Picness a un prix.', 'Ce prix est celui du sang.'],
		loreEnd: [
			"En effet, cette vallée est gardée par l'invincible dragon Zebor. En échange du droit de s'installer dans la vallée, il exige d'être nourri de vies humaines. S'il n'est pas repu, il rasera votre village.",
			"À vous d'organiser votre société pour que vos villageois consentent au sacrifice ultime, afin de contenter Zebor et de garantir ainsi la prospérité de votre colonie !",
		],
		mechanicsTitle: 'Mécaniques principales',
		mechanicsIntro:
			"Au fil de votre développement, vous devez vous assurer qu'un nombre suffisant de vos citoyens soient prêts à se sacrifier. Pour ce faire, vous pouvez favoriser quatre courants de pensée :",
		factions: [
			{ key: 'deists', name: 'Les déistes', text: 'Ils vouent un culte à Zebor et sont toujours prêts à se sacrifier pour lui.' },
			{ key: 'liberals', name: 'Les libéraux', text: "Ils veulent développer l'économie et s'enrichir. Selon eux, tout est monnayable dans ce monde, même la vie." },
			{ key: 'bayesians', name: 'Les bayésiens', text: "Rationnels, ils cherchent à s'élever par la science et le doute. Selon eux, chaque vérité est le résultat d'un calcul de probabilité bien posé." },
			{ key: 'visionaries', name: 'Les visionnaires', text: "Ils ne supportent pas l'argument du « réel » qui s'imposerait à eux. Ils ont soif de justice et veulent améliorer leur condition : pour eux, si le monde est injuste, il faut le changer." },
		],
		mechanicsOutro: [
			"Chaque communauté a ses avantages et ses inconvénients. Des synergies existent entre les bâtiments et plusieurs stratégies sont possibles : se spécialiser dans une faction ou favoriser des associations de communautés.",
			"Et si un revirement opportun vous permettait de vous libérer définitivement du coût du sang ?",
		],
		mechanicsWarning: 'Mais trop de visionnaires vous condamnera à coup sûr.',
		illustrationAlt:
			"La vallée de Picness : quatre villageois devant leur village de chaumières, entre champs, moulin et forêts, au pied de hautes montagnes survolées par un dragon vert.",
		resourcesTitle: 'Ressources et survie',
		resourcesIntro:
			"Vos villageois mangent, se chauffent et se reposent tout seuls. À vous de veiller à ce que le village ne manque de rien, surtout quand l'hiver approche.",
		resourcesSubtitle: 'Les ressources de la vallée',
		resources: [
			{ icon: 'log', name: 'Bûches', text: 'Abattues par les bûcherons, elles servent à construire et se fendent en bois de chauffe.' },
			{ icon: 'wood', name: 'Bois de chauffe', text: "Fendu à l'atelier de coupe de bois (1 bûche = 2 bois), il chauffe les maisons." },
			{ icon: 'stone', name: 'Pierre', text: 'Cassée dans les rochers par les mineurs, pour construire et paver les routes.' },
			{ icon: 'berry', name: 'Baies', text: 'Cueillies sur les buissons, qui se remplissent au début de chaque été.' },
			{ icon: 'potato', name: 'Pommes de terre', text: "Cultivées dans les champs et récoltées à l'automne." },
			{ icon: 'stump', name: 'Souches', text: 'Déracinées par les cueilleurs, elles permettent de replanter des buissons.' },
		],
		resourcesTip: "Rien n'est récolté sans place pour le ranger : construisez vite un stockage.",
		needsTitle: 'Les besoins des habitants',
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
		heroPlay: 'Play in your browser',
		heroWiki: 'Open the Picness Wiki',
		alpha: 'In development',
		version: 'Version',
		studioByline: 'A Totoludies game',
		pitchTitle: 'Game overview',
		pitch: [
			'Picness Valley is a "colony management" city builder. You will assign tasks to villagers to keep them alive and make the colony thrive: working the fields, raising buildings, gathering resources and more.',
		],
		loreTitle: 'The story',
		lore: [
			'Your adventure takes place in the small valley of Picness, where your colony has settled. As luck would have it, the spot is ideal: a stunning valley with lush plant life, lined with high mountains standing like ramparts. They form a wide range, rich in stone quarries and precious ores, and they feed rivers full of fish that water the extremely fertile lands of the valley. At the heart of this Eden lie great, plentiful forests, providing all the wood your colony needs to build and keep warm.',
		],
		loreQuote: ['Yet living in the valley of Picness comes at a price.', 'That price is blood.'],
		loreEnd: [
			'For this valley is guarded by Zebor, the invincible dragon. In exchange for the right to settle here, he demands to be fed human lives. If he is not satisfied, he will raze your village.',
			'It is up to you to organise your society so that your villagers agree to the ultimate sacrifice, to satisfy Zebor and secure the prosperity of your colony!',
		],
		mechanicsTitle: 'Core mechanics',
		mechanicsIntro:
			'As your colony grows, you must make sure that enough of your citizens are ready to sacrifice themselves. To do so, you can encourage four schools of thought:',
		factions: [
			{ key: 'deists', name: 'The Deists', text: 'They worship Zebor and are always ready to sacrifice themselves for him.' },
			{ key: 'liberals', name: 'The Liberals', text: 'They want to grow the economy and get rich. To them, everything in this world has a price, even life.' },
			{ key: 'bayesians', name: 'The Bayesians', text: 'Rational minds, they seek to rise through science and doubt. To them, every truth is the outcome of a well-posed probability calculation.' },
			{ key: 'visionaries', name: 'The Visionaries', text: 'They cannot stand being told that "reality" leaves them no choice. They thirst for justice and want to better their lot: if the world is unfair, it must be changed.' },
		],
		mechanicsOutro: [
			'Each community has its strengths and weaknesses. Buildings have synergies with each other and several strategies are possible: specialise in one faction or combine communities.',
			'Unless a timely change of course could free you from the blood price for good?',
		],
		mechanicsWarning: 'But too many Visionaries will doom you for sure.',
		illustrationAlt:
			'The valley of Picness: four villagers in front of their thatched village, among fields, a windmill and forests, below high mountains with a green dragon flying overhead.',
		resourcesTitle: 'Resources and survival',
		resourcesIntro:
			'Your villagers eat, warm up and rest on their own. It is up to you to make sure the village lacks nothing, especially as winter draws near.',
		resourcesSubtitle: 'Resources of the valley',
		resources: [
			{ icon: 'log', name: 'Logs', text: 'Cut down by foresters, they are used for building and split into firewood.' },
			{ icon: 'wood', name: 'Firewood', text: 'Split at the Woodcutting Workshop (1 log = 2 firewood), it heats the houses.' },
			{ icon: 'stone', name: 'Stone', text: 'Broken out of rocks by miners, for building and paving roads.' },
			{ icon: 'berry', name: 'Berries', text: 'Picked from bushes, which fill up again at the start of every summer.' },
			{ icon: 'potato', name: 'Potatoes', text: 'Grown in fields and harvested in autumn.' },
			{ icon: 'stump', name: 'Stumps', text: 'Dug up by gatherers, they let you replant bushes.' },
		],
		resourcesTip: 'Nothing is harvested without room to store it: build a storage area early.',
		needsTitle: "Villagers' needs",
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
