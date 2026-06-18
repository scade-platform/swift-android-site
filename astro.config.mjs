// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
	site: 'https://swift-android.com',
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
		}),
	],
});
