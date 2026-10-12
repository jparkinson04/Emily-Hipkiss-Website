# Build plan

Run these in order. Check the dev server after each.

## 01 — Foundations
- Confirm `npm install && npm run dev` runs clean.
- Review `global.css` tokens against the sage & stone + brown direction. Adjust `--bark` darker if text contrast on stone fails WCAG AA (target 4.5:1).
- Wire fonts in `Base.astro` (Playfair Display 400/400i/600, Source Sans 3 400/600). Prefer @fontsource self-hosting if Google Fonts feels slow.

## 02 — Shell
- `Header.astro`: monogram + "Emily Hipkiss" wordmark, nav (Home, About, Walk & Talk, Blog, Contact), mobile menu that works without JS where possible.
- `Footer.astro`: BACP line, contact details, working days, privacy link, "Site by Seam Digital Studio".
- Skip link, focus styles, `max-width` content container, consistent section spacing.

## 03 — Home
- Hero: name, one-line what she does, who she helps, primary CTA "Get in touch", secondary "How I work".
- Three short panels: ADHD & autism, Walk & Talk, What to expect.
- Soft photo placeholder (she is sending photos). Latest 2 blog posts if any exist.

## 04 — About
- Portrait + story. Approach. Specialism in ADHD and autism (plain language, no clinical claims not supplied by Emily).
- Qualifications list + BACP registered line with registration number placeholder.
- Fees and session details section — only render if content provided (see `CONTENT-NEEDED.md`).

## 05 — Walk & Talk (route `/outdoor-therapy`)
- What walk and talk therapy is, who it suits, what a session looks like, practical bits (weather, locations, confidentiality outdoors).
- Photo-led layout: this page should carry 3–5 outdoor images when they arrive.

## 06 — Blog
- `/blog` index with PostCard grid, newest first.
- `/blog/[slug]` layout: title, date, reading time, body, "Get in touch" CTA at the end.
- Open Graph + Twitter card meta on posts for LinkedIn sharing. Default OG image in `public/og-default.png`.
- Keep `src/content/blog/_example.md` as the template Seam uses when Emily emails a post.

## 07 — Contact
- Form: name, email, phone (optional), message, how did you hear (optional). Honeypot. Success and error states.
- Beside the form: email, phone, working days, where she works from, what happens after you enquire.
- Privacy line under the form linking to `/privacy`.

## 08 — SEO and launch checks
- Titles and descriptions on every page. Sitemap. robots.txt. Favicon from monogram.
- Lighthouse: performance, accessibility, SEO all 90+ on mobile.
- Test form end to end to her Outlook address. Check spam folder.
- Google Business Profile: confirm with Emily whether she has one; set up or tidy at launch.
