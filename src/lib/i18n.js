import { init, register } from 'svelte-i18n';

register('en', () => import('./locales/en.json'));
register('id', () => import('./locales/id.json'));

init({
  fallbackLocale: 'en',
  initialLocale: 'en',
});
