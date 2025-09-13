import adapter from '@sveltejs/adapter-static';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';

const config = {
	preprocess: vitePreprocess(),
	kit: {
		adapter: adapter({
			fallback: 'index.html' // important for SPA routing in Capacitor
		}),
		paths: {
			base: '',
			assets: ''
		},
		prerender: {
			entries: ['*']
		}
	}
};

export default config;
