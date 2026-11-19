# Moazzem Labs logo

Chosen 2026-11-19. Design record: https://claude.ai/artifact/LhxSufTnUEmQK8LoQjTKyY (boards "Logo · …").

## The idea

A lowercase **m** whose two openings are pointed arches. Read it as the initial, or as a
pair of doorways: into the masjid, and into the lab. Square on the left, one round shoulder
on the right, like a real lowercase m.

It replaces the M-and-flask mark. Flasks, circuit lines and gradients were ruled out as the
standard clichés for anything called "Labs".

## Files (`public/brand/`)

| File | Use |
|---|---|
| `mark-black.svg`, `mark-white.svg`, `mark-ice.svg` | The mark alone |
| `lockup-black.svg`, `lockup-white.svg` | Mark with the name beside it (text is outlined, no font needed) |
| `lockup-stacked-black.svg`, `lockup-stacked-white.svg` | Mark above the name |
| `app-icon.svg`, `app-icon-180.png`, `app-icon-512.png` | Full-bleed square: black mark on ice blue |
| `icon-rounded.svg` | Rounded tile with a larger mark, for favicons and small sizes |

On the site: `components/Logo.tsx` (`Mark`, `Lockup`), `app/icon.svg`, `app/favicon.ico`,
`app/apple-icon.png`. To regenerate, change the path in `components/Logo.tsx` and the files
together; they share one path.

## Colour

- **Main: black `#05080f` on ice blue `#a9dcff`.** Use for the app icon, favicon and social avatar.
- On the dark site: ice blue mark, white name.
- One colour only when needed: all black or all white. Never a gradient.

## Type

The name is set in Space Grotesk Bold, tracking -3%, always "Moazzem Labs" in title case.

## Rules

- Smallest size: 16 px for the mark, 90 px wide for the horizontal lockup.
- Keep clear space around it equal to the width of one stem of the m.
- Do not stretch, rotate, outline, add effects, or put the mark in a different shape of tile.
- Do not rebuild the name in another typeface.

## Not done

No trademark search has been made. Get a professional search before registering the mark.
