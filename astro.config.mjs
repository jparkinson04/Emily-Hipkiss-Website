import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import vercel from '@astrojs/vercel';

export default defineConfig({
  // Live address for now; switch to Emily's domain when it is registered (link previews and the sitemap use this)
  site: 'https://emily-hipkiss-website.vercel.app',
  integrations: [sitemap()],
  // Only src/pages/api/contact.ts opts out of prerendering; the rest of the site is still static HTML
  adapter: vercel(),
  devToolbar: { enabled: false },
});
