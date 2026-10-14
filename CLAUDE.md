# Emily Hipkiss Counselling & Therapy — website

Client site built by Seam Digital Studio. Read this fully before touching anything.

## Who it's for
Emily Hipkiss BSc MA, BACP Registered Psychotherapist. Counsellor specialising in ADHD and autism,
also offers outdoor "walk and talk" therapy. First website. Purpose: credibility (somewhere to send
people who want to know who she is and how she works), plus a blog so the site stays active for search.
Working days: Mon–Thu. Email: emilyhipkisscounselling@outlook.com. Her phone number is NOT shown anywhere on the site (client request, 14 Oct 2026).
In-person in Pontefract, plus video, telephone and Walk & Talk. BACP registered member (MBACP) 407026.
Emily's supplied content lives in `CONTENT.md` (her words verbatim); badges in `public/images/`.

## Pages (five, plus privacy)
1. `/` Home — warm first impression, who she helps, clear route to contact
2. `/about` — her story, approach, ADHD & autism specialism, qualifications, BACP membership
3. `/outdoor-therapy` — "Walk & Talk" outdoor therapy (Emily's name for it; use it everywhere): what it is, who it suits, what a session looks like
4. `/blog` + `/blog/[slug]` — posts added by Seam from Markdown files Emily emails over, roughly monthly
5. `/contact` — enquiry form to her email, how sessions work, working days
6. `/privacy` — short privacy notice (form collects personal data; she's in a confidential profession)

## Design direction (agreed with client)
"Sage & stone", with the dark green swapped for a warm brown. Calm, earthy, soft. Nothing stark.
- Tokens live in `src/styles/global.css` only. Never hardcode colours in components.
- Text and headings: warm brown (`--bark`). Backgrounds: cream and stone. Sage for accents, panels, hovers.
- Headings: Playfair Display (italic for emphasis). Body: Source Sans 3. Loaded in `Base.astro`.
- Monogram logo: "EH" in Playfair italic, brown. `src/components/Monogram.astro`. Final vector version TBC.
- Generous whitespace, large comfortable type (18px body), soft rounded corners throughout (radius tokens in `global.css`; pill buttons, inset rounded bands), no drop shadows.
- Contrast: brown on mid-sage is borderline. Use `--bark` on cream/stone; on sage panels use cream text.

## Stack and conventions
- Astro, plain CSS (no Tailwind), component-split architecture, single `global.css` for tokens.
- Content collection for blog posts at `src/content/blog/*.md`. Frontmatter schema in `src/content.config.ts`.
- Contact form uses Web3Forms (static-friendly, sends to her inbox). Access key goes in `ContactForm.astro`
  as `PUBLIC_WEB3FORMS_KEY` env var. Honeypot field included. Do not add a backend.
- Deploy: Vercel. Domain to be registered in Emily's name (likely emilyhipkisscounselling.co.uk).
- SEO: every page sets `title` and `description` via `Base.astro`. Open Graph image per page optional.
  Blog posts get article meta and a shareable preview. Sitemap via @astrojs/sitemap.
- Accessibility: semantic headings, visible focus states, alt text on every image, form labels, skip link.

## Content status
Placeholder copy is marked `[TODO: ...]`. Emily and a copywriter friend are sending real content.
See `docs/CONTENT-NEEDED.md` for what's outstanding. Replace placeholders; do not invent clinical claims,
qualifications, fees or registration numbers.

## Build order
Follow `docs/BUILD-PLAN.md` step by step. Each step is self-contained; finish and check one before the next.
