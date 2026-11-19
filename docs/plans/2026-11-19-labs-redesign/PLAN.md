# Moazzem Labs website redesign

Goal: Rebuild moazzemlabs.com as the home of the lab: who we are, what we make, how it is funded, with one clear ask (support).
By: not set (Sadik to give a date)
Project: Moazzem Labs website

Design canvas (private until shared): https://claude.ai/artifact/LhxSufTnUEmQK8LoQjTKyY
Status: plan only. No site code has been changed.

## Why

The current site serves four audiences at once (clients, donors, employers, My Local Masjid
users), flips between "we" and "my", and describes My Local Masjid with out-of-date facts
(Flask stack, "500+ masajid", "digital displays coming soon"). It is a generic dark
purple-gradient template that does not look related to anything the lab makes.

## Decisions (2026-11-19, all made by Sadik on the canvas)

| Topic | Decision | Rejected |
|---|---|---|
| Purpose | Trust and support first, with Sadik known by name | Studio for hire; pure personal site; product-news lab |
| Voice | "We, Moazzem Labs" on every Labs page | First person; mixed |
| Scope | The lab as a whole. My Local Masjid is the flagship, not the subject. Broader products are coming | A My Local Masjid brochure |
| Character | Muslim-led and says so. Islamic wording stays where it is natural | Neutral home page |
| Headline | "Built for the ummah, not for the algorithm." | "Built for people…", "Innovation, with integrity", "Everything revolves around the masjid", "Five times a day, we are there" |
| Look | Direction B, cinematic: black ground, glowing ring, glass nav, large italic serif | Living sky, editorial, product stage, arch, glass panels, warm orbit, cinematic sky |
| Colour | Ice blue accent `#a9dcff` | Violet, purple to magenta, plum and gold |
| Motion | Drawn in code (CSS), not a video file | Looping 3D video |
| Donations | A `/support` page here and the same options on mylocalmasjid.com | One site only |
| Support tiers | Six amounts only (£2, £5, £10 monthly; £5, £10, £25 once). Tier names dropped | Named tiers; custom amount |
| Cost figures | None published. Funding is explained in words | Real monthly figures; proportions |
| About Me | Stays at `/about-me`, stand-alone, first person, not in the nav, no donation prompts | Separate domain; a normal nav page |
| Client work | No "Start a project" form | Keeping the enquiry form |
| Promise copy | Softened, lab-wide wording (see canvas, "The promise") | "No adverts. Ever."; "No account needed"; "every decision is made by people who pray…" |

## Structure

Nav: Work · About · Funding · **Support** (button).

Home (`/`), one scroll:
1. Hero: headline, one line, buttons "Explore the work" and "Who we are".
2. Our work: My Local Masjid (flagship card), SalahTimez, one "In the lab" slot per new project.
3. The promise: four plain statements.
4. Who we are: short story from SalahTimez (2016) to now; Sadik named; one quiet link to `/about-me`.
5. How it is funded: three things support pays for, then the ask.
6. Footer: email address, socials, mylocalmasjid.com.

Other pages:
- `/work/mylocalmasjid`, `/work/salahtimez`: case studies, rewritten. `/case-studies/*` redirects here.
- `/support`: monthly and one-off amounts on the existing Stripe links, and what support pays for.
- `/about-me`: Sadik's CV page. Own header (Experience, Skills, Projects, Get in touch).

Removed: floating donation bar, floating About Me button, "Start a project" form,
"More projects coming soon / Get Notified".

## Design tokens (from the canvas)

- Ground `#05080f` and `#000000`; hero glow `radial-gradient(#0d2440 → #05080f → #000)`.
- Accent `#a9dcff`; body text on dark `#c9d3e2`; white for headings and primary buttons.
- Display type: Instrument Serif (italic for the one accented word). Body: Inter.
- Glass: `rgba(255,255,255,0.06–0.09)` fill, 1px `rgba(255,255,255,0.18)` border, backdrop blur, pill radius for nav and buttons, 24–28px for cards.
- Ring: two masked conic gradients on a tilted plane, rotating in opposite directions (14s and 22s), with a soft pulsing core. Must honour `prefers-reduced-motion`.

## Assumptions

- Stack stays as it is: Next.js 15 App Router, Tailwind 4, React 19, deployed on Vercel.
- framer-motion can be dropped if nothing else needs it; the motion on the canvas is CSS only.
- Existing Stripe payment links are reused unchanged.
- `public/images/sadik-profile.jpg` is the photo for the Who we are card and `/about-me`.

## Phases

| Phase | Theme | Ships as |
|---|---|---|
| 0 | Foundations: tokens, fonts, shared nav and footer, remove the floating elements | PR 1 |
| 1 | Home page: hero and the four sections, desktop and phone | PR 2 |
| 2 | Other pages: support, case studies with redirects, stand-alone about-me | PR 3 |
| 3 | Finish: metadata, social image, accessibility and performance pass | PR 4 |

## Tickets

| Status | ID | Phase | Deps | Description |
|---|---|---|---|---|
| [ ] | 1 | 0 | - | Replace the colour and gradient utilities in `app/globals.css` with the tokens above; load Instrument Serif and Inter with `next/font` |
| [ ] | 2 | 0 | 1 | New `Navigation`: glass pill, Work / About / Funding / Support; phone version with Support button and a menu button (44px targets) |
| [ ] | 3 | 0 | 1 | New `Footer`: email address, LinkedIn, GitHub, mylocalmasjid.com. Confirm whether the Twitter link stays |
| [ ] | 4 | 0 | - | Remove `FloatingDonationBar` from `app/layout.tsx` and the floating About Me button from `Navigation` |
| [ ] | 5 | 1 | 1,2 | `Hero`: CSS ring, headline, buttons; reduced-motion fallback; phone layout as on the canvas |
| [ ] | 6 | 1 | 1 | `OurWork` section driven by one `projects` data file, so adding a project is one entry |
| [ ] | 7 | 1 | 1 | `Promise` section, four statements, wording from the canvas |
| [ ] | 8 | 1 | 1 | `WhoWeAre` section with the Sadik card and link to `/about-me` |
| [ ] | 9 | 1 | 1 | `Funding` section, no figures, link to `/support` |
| [ ] | 10 | 1 | 5-9 | Compose `app/page.tsx`; delete `About`, `Contact`, `FeaturedProject`, `ProjectsGrid` once unused |
| [ ] | 11 | 2 | 1,2 | `/support`: six amount buttons on the existing Stripe links; "what it pays for" list |
| [ ] | 12 | 2 | 6 | `/work/mylocalmasjid`: rewrite with current facts; real screenshots of app, watch, widget, masjid site |
| [ ] | 13 | 2 | 6 | `/work/salahtimez`: restyle and trim |
| [ ] | 14 | 2 | 12,13 | Permanent redirects from `/case-studies/mylocalmasjid` and `/case-studies/salahtimez` in `next.config.ts` |
| [ ] | 15 | 2 | 1 | `/about-me`: stand-alone layout and header, first person, no Labs nav, no donation prompts; URL unchanged |
| [ ] | 16 | 3 | 10 | Metadata: title, description, `en_GB` locale, move `viewport` to its own export, Open Graph image in the new style |
| [ ] | 17 | 3 | all | Accessibility pass: contrast, focus states, keyboard nav, reduced motion |
| [ ] | 18 | 3 | all | Performance pass on a phone: check the blurred ring does not drop frames; simplify if it does |
| [ ] | 19 | 3 | 11 | Mirror the six giving options on mylocalmasjid.com (separate PR in that repo, its own design language) |

## Open questions for Sadik

1. A target date for the goal.
2. The "In the lab" card: name and one line for the next project, or leave the slot out until there is one.
3. Facts for the My Local Masjid case study: which numbers are safe to publish (directory size, ratings), and screenshots.
4. Confirm the softened promise lines as final wording, especially "we collect as little as we can".
5. Contact email address for the footer and for `/about-me`.
6. Does SalahTimez still run, and should its case study say so?
7. Keep or drop the Twitter link.

## Not in this plan

- Any change to mylocalmasjid.com beyond ticket 19.
- A blog, changelog or newsletter.
- A client enquiry flow.
