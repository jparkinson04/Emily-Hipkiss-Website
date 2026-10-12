import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://emilyhipkisscounselling.co.uk',
  integrations: [sitemap()],
  devToolbar: { enabled: false },
});
