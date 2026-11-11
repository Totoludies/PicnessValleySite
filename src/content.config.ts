import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';
import { docsLoader } from '@astrojs/starlight/loaders';
import { docsSchema } from '@astrojs/starlight/schema';

export const collections = {
	// Picness Wiki (Starlight) : src/content/docs/wiki/ en français, src/content/docs/en/wiki/ en anglais.
	docs: defineCollection({ loader: docsLoader(), schema: docsSchema() }),

	// Notes de version : un fichier par mise à jour, src/content/notes/fr/AAAA-MM-JJ.md et sa traduction dans en/.
	notes: defineCollection({
		loader: glob({ pattern: '{fr,en}/*.md', base: './src/content/notes' }),
		schema: z.object({
			title: z.string(),
			date: z.coerce.date(),
			/** Versions du jeu couvertes, de la plus ancienne à la plus récente (code 0.N du jeu). */
			from: z.string(),
			to: z.string(),
			summary: z.string(),
		}),
	}),
};
