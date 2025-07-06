import adapter from '@sveltejs/adapter-static';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';

export default {
  preprocess: vitePreprocess(),
  kit: {
    adapter: adapter({
      pages: 'build',
      assets: 'build',
      fallback: 'index.html', // Changed from null to handle client-side routing
      precompress: false,
      strict: true
    }),
    paths: {
      base: ''
    }
  }
};