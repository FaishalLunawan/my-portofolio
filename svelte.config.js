// GANTI ISI FILE svelte.config.js DENGAN INI:
import adapter from '@sveltejs/adapter-static';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	preprocess: vitePreprocess(),
	kit: {
		adapter: adapter({
			pages: 'build',
			assets: 'build',
			fallback: 'index.html', // PENTING untuk SPA
			precompress: false,
			strict: true
		})
	}
};

export default config;