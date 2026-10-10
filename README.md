# Aan Coco Surf School Bali website

Static single-page site: `index.html`, `styles.css`, `script.js`, `images/`. No build step, no framework.

## Run locally
    python3 -m http.server 8000      # then open http://localhost:8000
(or `npx serve .`). Opening index.html directly also works, but the map embed behaves best over http.

## Placeholders to fill in
Search the project for `[` and `YOUR-DOMAIN` to find each one. Placeholders shown on the page are highlighted in yellow (`<mark class="ph">`).

| Placeholder | Where |
|---|---|
| `[OPENING TIME]` | Location section, footer, JSON-LD `opens` (use 24h format, e.g. `08:00`) |
| `[DAYS OPEN]` | Location section, footer, JSON-LD `dayOfWeek` (e.g. `["Monday","Tuesday",...]`) |
| `[FACEBOOK URL]` | Contact section, footer, JSON-LD `sameAs` |
| `[GETYOURGUIDE URL]` | 3 links currently point to a GetYourGuide search for the school; swap for the direct activity link (also in JSON-LD `makesOffer`) |
| `[GOOGLE REVIEWS URL]` | "Read all 261 reviews" + footer link currently use a Google Maps search; swap for your Business Profile link |
| `[CONFIRM PRICE]` | 250k IDR / 2h beginner lesson (from a customer review). Confirm it and say if it is group or private |
| `[PRIVATE LESSON PRICE]`, `[PRIVATE LESSON DURATION]` | Private lesson card |
| `[PACKAGE PRICE]`, `[NUMBER OF DAYS]` | Multi-day package card |
| `[SUNSET SESSION PRICE & TIMES]` | Sunset strip under the lesson cards |
| `https://YOUR-DOMAIN.com` | canonical, Open Graph, JSON-LD, robots.txt, sitemap.xml |
| `images/og-image.jpg` | Add a 1200x630 JPG for social sharing previews |
| `images/*.svg` | 10 photo placeholders (hero, about, 3 lessons, 5 gallery). Replace with your own photos as WebP/JPG, keep similar proportions, update `src` in index.html, and keep or adjust the alt text |

Keep placeholders in JSON-LD valid before launch: either fill them or delete the `openingHoursSpecification` / `sameAs` blocks.

## Deploy
Any static host works. Upload the whole folder.
- **Netlify:** drag the folder onto app.netlify.com/drop.
- **Vercel:** `npx vercel` in this folder.
- **Cloudflare Pages / GitHub Pages:** push to a repo and point the service at the root (no build command, output dir `/`).

After deploying: set your domain, replace `YOUR-DOMAIN.com`, submit `sitemap.xml` in Google Search Console, test the JSON-LD with Google's Rich Results Test, and add the website link to your Google Business Profile.
