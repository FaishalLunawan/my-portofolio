import adapter from '@sveltejs/adapter-static';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	preprocess: vitePreprocess(),
	kit: {
		adapter: adapter({
			pages: 'build',
			assets: 'build',
			fallback: '404.html', // Ganti dari index.html ke 404.html
			precompress: false,
			strict: true
		}),
		paths: {
			// Base path untuk GitHub Pages
			base: process.argv.includes('dev') ? '' : '/my-portofolio'
		}
	}
};

export default config;