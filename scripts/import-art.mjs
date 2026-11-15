// Copie les images du jeu (dépôt Picness-Valley, à côté de ce dépôt) vers le site,
// converties en WebP et redimensionnées. Relançable sans risque :
//   node scripts/import-art.mjs [chemin du dépôt du jeu]
import sharp from 'sharp';
import { mkdir, copyFile } from 'node:fs/promises';
import { dirname, join, resolve } from 'node:path';

const game = resolve(process.argv[2] ?? '../Picness-Valley');
const site = resolve('.');
const res = 'Assets/PicnessValley/Resources/Icons';
const items = 'Assets/PicnessValley/Art/Sprites/Icons/Items';

// [source dans le jeu, destination dans le site, largeur max (0 = taille d'origine)]
const images = [
	['Assets/PicnessValley/UI/PV main fond.png', 'src/assets/key-art.webp', 2000],
	[`${res}/TownParchment.png`, 'public/ui/parchment.webp', 1024],
	[`${res}/TownResourceBarBackground.png`, 'public/ui/plank.webp', 2000],
	[`${res}/TownToolBarBackground.png`, 'public/ui/toolbar.webp', 0],
	[`${res}/TownSeasonFrameSpring.png`, 'public/ui/frame-spring.webp', 2000],
	[`${res}/TownSeasonFrameSummer.png`, 'public/ui/frame-summer.webp', 2000],
	[`${res}/TownSeasonFrameAutumn.png`, 'public/ui/frame-autumn.webp', 2000],
	[`${res}/TownSeasonFrameWinter.png`, 'public/ui/frame-winter.webp', 2000],
	[`${res}/TownSeasonStrip.png`, 'public/ui/season-strip.webp', 0],
	[`${res}/TownMenuButton.png`, 'public/ui/gear.webp', 128],
	[`${res}/TownToolSelectedFrame.png`, 'public/ui/selected-frame.webp', 256],
	[`${res}/TownNeedFood.png`, 'public/icons/needs/food.webp', 192],
	[`${res}/TownNeedCold.png`, 'public/icons/needs/cold.webp', 192],
	[`${res}/TownNeedEnergy.png`, 'public/icons/needs/energy.webp', 192],
	[`${res}/TownNeedHealth.png`, 'public/icons/needs/health.webp', 192],
	...['Builder', 'Farmer', 'Forester', 'Gatherer', 'Miner', 'Peddler', 'Woodcutter'].map((j) => [
		`${res}/Jobs/Town${j}.png`, `public/icons/jobs/${j.toLowerCase()}.webp`, 192,
	]),
	...['Berry', 'Log', 'Potato', 'Stone', 'Stump', 'Wood'].map((i) => [
		`${items}/Town${i}.png`, `public/icons/items/${i.toLowerCase()}.webp`, 192,
	]),
	...[
		'SimpleHouse', 'BarnBuilding', 'SmallStorageArea', 'PotatoField', 'BerryHut',
		'LogisticsCenter', 'WoodcuttingWorkshop', 'RangerCabin', 'DirtRoad', 'PavedRoad',
	].map((t) => [`${res}/Tools/Town${t}Tool.png`, `public/icons/buildings/${t}.webp`, 192]),
];

// Recadrages : la planche du compteur de ressources perd son bord droit et son ombre du bas,
// pour se répéter comme une texture de bois.
const crops = {
	'public/ui/plank.webp': { left: 0, top: 0, width: 1900, height: 290 },
};

for (const [from, to, width] of images) {
	const out = join(site, to);
	await mkdir(dirname(out), { recursive: true });
	let img = sharp(join(game, from));
	if (crops[to]) img = img.extract(crops[to]);
	if (width) img = img.resize({ width, withoutEnlargement: true });
	await img.webp({ quality: 86 }).toFile(out);
	console.log('✓', to);
}

// Favicon : les quatre courants (src/assets/source/favicon-currents.png), fond rendu transparent,
// déjà en place dans public/favicon.png : ce script ne le régénère plus.
// Police du jeu, copiée telle quelle.
await mkdir(join(site, 'public/fonts'), { recursive: true });
await copyFile(join(game, 'Assets/PicnessValley/UI/Fonts/PicnessValley-Regular.ttf'), join(site, 'public/fonts/PicnessValley-Regular.ttf'));
console.log('✓ police');
