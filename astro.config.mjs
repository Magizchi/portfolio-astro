import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import tailwind from "@astrojs/tailwind";

import image from "@astrojs/image";

// https://astro.build/config
export default defineConfig({
  site: 'https://magizchi.github.io/portfolio_astro/',
  integrations: [mdx(), sitemap(), tailwind({}), image()],
  redirects: {
    '/': '/experiences'
  }
});