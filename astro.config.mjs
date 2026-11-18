import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://neverstoptolearn.github.io',
  base: '/',
  output: 'static',
  trailingSlash: 'always',
  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'zh'],
    routing: { prefixDefaultLocale: false },
  },
});
