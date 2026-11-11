import { getCollection, type CollectionEntry } from 'astro:content';
import type { Lang } from '../i18n';

export type Note = CollectionEntry<'notes'>;

/** Notes de version d'une langue, la plus récente d'abord. */
export async function getNotes(lang: Lang): Promise<Note[]> {
	const notes = await getCollection('notes', (n) => n.id.startsWith(`${lang}/`));
	return notes.sort((a, b) => b.data.date.getTime() - a.data.date.getTime());
}

/** Nom de fichier sans la langue : « 2026-11-10 ». */
export function noteSlug(note: Note) {
	return note.id.split('/')[1];
}

export function versionRange(note: Note) {
	return note.data.from === note.data.to ? note.data.to : `${note.data.from} → ${note.data.to}`;
}
