import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';

export default defineConfig({
  plugins: [sveltekit()],
  server: {
    port: 3000,
    host: true
  },
  optimizeDeps: {
    include: ['intl-messageformat', '@formatjs/icu-messageformat-parser']
  },
  ssr: {
    noExternal: ['svelte-i18n', 'intl-messageformat', '@formatjs/icu-messageformat-parser']
  }
});