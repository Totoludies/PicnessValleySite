// Réglages du site à modifier à la main.

/**
 * Adresse de la version navigateur du jeu.
 * - null : la page « Jouer » annonce que la version arrive bientôt.
 * - '/play/index.html' : build WebGL copiée dans public/play/ (voir README).
 * - une adresse complète (itch.io…) : le jeu est affiché dans un cadre.
 */
export const PLAY_URL: string | null = '/play/index.html';

/** Version actuelle du jeu (Version.json du jeu : code 0.N = dernier ADR). */
export const GAME_VERSION = '0.140';
