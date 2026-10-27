// @ts-check
import { fileURLToPath } from 'node:url';
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import { sidebarFromMeta } from './src/utils/sidebar-from-meta.mjs';
import { remarkResolveLinks } from './src/utils/remark-resolve-links.mjs';
import { unified } from '@astrojs/markdown-remark';

const docsDir = fileURLToPath(new URL('./src/content/docs/docs', import.meta.url));
const calloutPath = fileURLToPath(new URL('./src/components/Callout.astro', import.meta.url));

const remarkPlugins = [[remarkResolveLinks, { docsDir, slugBase: 'docs' }]];

// https://astro.build/config
export default defineConfig({
	site: 'https://swift-android.com',
	markdown: {
		processor: unified({ remarkPlugins }),
		remarkPlugins,
	},
	integrations: [
		starlight({
			title: 'Swift For Android',
			logo: {
				src: './src/assets/logo-swift.png',
				replacesTitle: false,
			},
			favicon: '/favicon.ico',
			social: [
				{ icon: 'github', label: 'GitHub', href: 'https://github.com/scade-platform' },
				{ icon: 'discord', label: 'Discord', href: 'https://discord.gg/qVWq5vmB' },
			],
			sidebar: sidebarFromMeta(docsDir, 'docs', { excludeEntries: ['index'] }),
		}),
	],
	vite: {
		plugins: [
			{
				name: 'scade-docs-callout-shim',
				enforce: 'pre',
				transform(code, id) {
					if (!id.startsWith(docsDir) || !id.endsWith('.mdx')) return;
					const importLine = `import Callout from '${calloutPath}';\n\n`;
					const frontmatter = code.match(/^---\r?\n[\s\S]*?\r?\n---\r?\n?/);
					if (!frontmatter) return importLine + code;
					const end = frontmatter[0].length;
					return code.slice(0, end) + importLine + code.slice(end);
				},
			},
		],
	},
});
