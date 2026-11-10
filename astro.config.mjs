import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  // Live address for now; switch to Emily's domain when it is registered (link previews and the sitemap use this)
  site: 'https://emily-hipkiss-website.vercel.app',
  integrations: [sitemap()],
  devToolbar: { enabled: false },
});
