import fs from 'node:fs';
import path from 'node:path';
import { slug as githubSlug } from 'github-slugger';
import matter from 'gray-matter';

function readMeta(dir) {
	const metaPath = path.join(dir, 'meta.json');
	if (!fs.existsSync(metaPath)) return null;
	return JSON.parse(fs.readFileSync(metaPath, 'utf-8'));
}

function readTitle(filePath) {
	const { data } = matter.read(filePath);
	return data?.title ?? null;
}

function findFile(dir, baseName) {
	for (const ext of ['md', 'mdx']) {
		const filePath = path.join(dir, `${baseName}.${ext}`);
		if (fs.existsSync(filePath)) return filePath;
	}
	return null;
}

/**
 * Builds a Starlight sidebar tree from a directory of `meta.json` files
 * (Fumadocs-style navigation), so the submodule's content stays untouched.
 * Directories without a `meta.json` are skipped, not guessed at.
 * @param {string} dir
 * @param {string} slugPrefix
 * @param {{ excludeEntries?: string[] }} [options]
 */
export function sidebarFromMeta(dir, slugPrefix, { excludeEntries = [] } = {}) {
	const meta = readMeta(dir);
	if (!meta) return [];

	const items = [];
	for (const rawEntry of meta.pages ?? []) {
		const entry = rawEntry.replace(/\.(mdx|md)$/, '');
		if (excludeEntries.includes(entry)) continue;

		const filePath = findFile(dir, entry);
		if (filePath) {
			const title = readTitle(filePath) ?? entry;
			const slug = entry === 'index' ? slugPrefix : `${slugPrefix}/${githubSlug(entry)}`;
			items.push({ label: title, slug });
			continue;
		}

		const subDir = path.join(dir, entry);
		if (fs.existsSync(subDir) && fs.statSync(subDir).isDirectory()) {
			const subMeta = readMeta(subDir);
			if (!subMeta) {
				console.warn(`[sidebar-from-meta] skipping "${subDir}": no meta.json`);
				continue;
			}
			const subItems = sidebarFromMeta(subDir, `${slugPrefix}/${githubSlug(entry)}`);
			items.push({ label: subMeta.title ?? entry, items: subItems });
			continue;
		}

		console.warn(`[sidebar-from-meta] skipping "${rawEntry}" in ${dir}: not found`);
	}

	return items;
}
