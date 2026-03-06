# Hot Tea Time Web — Jewel Tone / Burlesque Color Palette Redesign

## Context
The current site uses a warm cream + burnt orange + forest green palette. The goal is to shift to a richer, sexier jewel-tone burlesque aesthetic inspired by the reference images (deep velvet burgundy curtains, silver trays with pearls, dark moody lighting with red glove pops). The user wants alternating dark/light sections and mixed gold + silver metallics. Work is on the `v2` branch.

## New Color Palette

### CSS Custom Properties (replacing `:root` in styles.css)

| Variable | Old Value | New Value | Role |
|----------|-----------|-----------|------|
| `--cream` | `#FDFBF7` | `#FAF3EB` | Warm champagne (light section bg) |
| `--orange` | `#CC5500` | `#C9A55C` | Antique gold (primary accent) |
| `--orange-d` | `#AA4400` | `#A8884A` | Dark gold (hover states) |
| `--orange-l` | `#E8835A` | `#D4B87A` | Light gold |
| `--green` | `#2E4A3D` | `#2D0F1E` | Deep burgundy-black (headings, dark sections) |
| `--green-l` | `#4A7A6A` | `#6B2140` | Rich burgundy (secondary) |
| `--charcoal` | `#1A1A1A` | `#110B0E` | Near-black with warm undertone |
| `--muted` | `#6B5F58` | `#7A6872` | Muted mauve (body text) |
| `--parchment` | `#F5F0E8` | `#F0E8E0` | Warm parchment (alt light bg) |
| `--blush` | `#F2D9CF` | `#E8C8D0` | Soft rose (marquee text) |
| `--card-bg` | `#F8F4EE` | `#F5EDE5` | Card background |

### New additional variables to add
| Variable | Value | Role |
|----------|-------|------|
| `--silver` | `#B8B0A8` | Silver/pearl for decorative accents |
| `--crimson` | `#8B1A2B` | Rich crimson for bold pops |
| `--plum` | `#3D1F33` | Deep plum for gradients |

### Variable renaming (for clarity)
Rename CSS variables to match new semantic meaning:
- `--orange` → `--gold` (etc.) — **Skip this.** Keep variable names as-is to minimize changes. The values change but the variable names stay the same for simplicity.

## Changes by File

### 1. `styles.css` (primary changes)

**`:root` block (line 1-13):** Replace all 11 color values with new palette values above. Add 3 new variables.

**Damask pattern (line 25-27):** Change SVG fill from `%23CC5500` (orange) to `%232D0F1E` (burgundy) at same 4% opacity — gives a subtle burgundy damask instead of orange.

**Nav (lines 30-46):**
- Background blur stays similar but shift to champagne base `rgba(250,243,235,0.94)`
- Border-bottom: shift green rgba to burgundy `rgba(45,15,30,0.15)`

**Hero background gradient (line 55-62):** Update rgba values from cream to new champagne.

**Marquee (line ~80):** Background changes from green to `var(--green)` (now burgundy-black) — this will auto-update via variable.

**How It Works pattern SVG (line ~90):** Change `%232E4A3D` to `%232D0F1E`.

**Marketplace card gradients (lines ~175-178):** These are hardcoded hex, not variables. Replace:
- `.mt1`: `linear-gradient(135deg, #8B1A2B, #C9A55C)` (crimson to gold)
- `.mt2`: `linear-gradient(135deg, #2D0F1E, #6B2140)` (deep burgundy to rich burgundy)
- `.mt3`: `linear-gradient(135deg, #3D1F33, #C9A55C)` (plum to gold)
- `.mt4`: `linear-gradient(135deg, #2D0F1E, #3D1F33)` (burgundy-black to plum)

**Brew section pattern SVG:** Change `%23FDFBF7` to `%23FAF3EB`.

**Pricing section pattern SVG:** Change `%23CC5500` to `%23C9A55C`.

**Footer newsletter gradient:** Change from `var(--orange-d), var(--orange)` to same vars (auto-updates to gold gradient).

**All rgba hardcoded values:** Update approximately 30+ instances of:
- `rgba(204,85,0,...)` → `rgba(201,165,92,...)` (gold)
- `rgba(46,74,61,...)` → `rgba(45,15,30,...)` (burgundy)
- `rgba(253,251,247,...)` → `rgba(250,243,235,...)` (champagne)

### 2. `styles.css` — Section alternation enhancement

To achieve the dark/light alternation the user wants, make these sections dark-background:
- **Hero** — Add deep burgundy-black background option (keep hero image but darken overlay)
- **Stories** — Flip to dark: `var(--green)` background with light text
- **Pricing** — Keep light

This creates the pattern:
1. Hero — **Dark** (moody image + dark overlay)
2. Marquee — **Dark** accent strip
3. How It Works — **Light** (champagne/parchment)
4. Features — **Light** (cream)
5. Stories — **Dark** (burgundy-black)
6. Marketplace — **Light** (cream)
7. Brew — **Dark** (already dark)
8. Pricing — **Light** (parchment)
9. Footer — **Dark** (already dark)

For newly-dark sections, add CSS rules to flip text colors:
- Headings: `var(--cream)` instead of `var(--green)`
- Body text: `rgba(250,243,235,0.7)`
- Cards on dark backgrounds: keep light card-bg or use semi-transparent light

### 3. `index.html` — Minimal changes

- No structural HTML changes needed
- The color changes are all CSS-driven via variables and direct value updates

### 4. `styles.css` — SVG pattern updates

All inline SVG patterns use URL-encoded hex colors. Update:
- Damask body pattern: `%23CC5500` → `%232D0F1E`
- How-it-works star: `%232E4A3D` → `%232D0F1E`
- Brew star: `%23FDFBF7` → `%23FAF3EB`
- Pricing star: `%23CC5500` → `%23C9A55C`

## Files to Modify
- `/tmp/hot-tea-time-web/styles.css` — All color changes (primary file)
- `/tmp/hot-tea-time-web/index.html` — Possibly minor class additions for dark sections

## Verification
1. Open `index.html` in a browser locally to visually verify the palette
2. Check all sections render correctly with proper contrast (dark text on light, light text on dark)
3. Verify hover states still work (buttons, links, cards)
4. Check mobile responsive view still looks correct
5. Commit to `v2` branch and push — can preview on Vercel via branch deploy
