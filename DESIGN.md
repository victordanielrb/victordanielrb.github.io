---
name: Victor Daniel — Portfolio
description: Neo-brutalist developer portfolio — thick ink borders, hard offset purple shadows, and a cursor-follow project index on a near-black ground.
colors:
  ink: "#f4f4f5"
  ground: "#0a0a0b"
  surface: "#131315"
  accent-purple: "#a855f7"
  accent-orange: "#fb923c"
  text-primary: "#ffffff"
  text-secondary: "#a1a1aa"
  text-muted: "#71717a"
typography:
  display:
    fontFamily: "Archivo, Poppins, sans-serif"
    fontWeight: 900
    letterSpacing: "-0.02em"
    textTransform: "uppercase"
  body:
    fontFamily: "Poppins, sans-serif"
    fontWeight: 400
    lineHeight: 1.6
rounded:
  pill: "9999px"
  card: "16px"
  tile: "12px"
spacing:
  section-gap: "6rem"
  card-padding: "1.5rem"
components:
  button-primary:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.text-primary}"
    rounded: "{rounded.card}"
    padding: "8px 16px"
  button-primary-hover:
    backgroundColor: "{colors.surface}"
    textColor: "#ffffff"
  tag-purple:
    backgroundColor: "{colors.accent-purple}"
    textColor: "{colors.ground}"
    rounded: "{rounded.pill}"
---

# Design System: Victor Daniel — Portfolio

## Overview

**Creative North Star: "The Sticker Sheet"**

Every surface reads like a hard-edged sticker peeled onto a near-black page: thick ink-white borders, zero-blur offset shadows in a single signature purple, and bold uppercase Archivo doing the talking instead of gradients or glow. Nothing is soft — corners are either fully sharp (dividers, section markers) or confidently rounded (cards, pills), never a timid 4px compromise. The system is proof-first: projects surface as a plain-text index because the work should be scannable in seconds, with the actual screenshots held back as a reward for curiosity (hover on desktop, a small always-on thumbnail on touch).

The purple accent and dark ground are inherited, deliberately, from the site's prior identity — this is a style change, not a rebrand. Nothing here invents a claim: no fabricated stats, no borrowed metrics. What the reference pushed toward (rounded card, dashed accent line, sticker badge, hard shadow) was adapted onto Victor's own palette rather than the reference's orange/lime.

**Key Characteristics:**
- Zero-blur, single-color (purple) offset shadows everywhere depth is needed — no soft ambient shadows anywhere in the system.
- Two interaction verbs for hover: buttons/pills **press** into their own shadow; grid tiles **lift** and grow a shadow that wasn't there at rest.
- Thick (2–3px) solid borders in off-white ink on every bordered surface; no thin hairlines, no translucent borders.
- Bold, uppercase, tight-tracked Archivo for every label, heading, button, and badge; Poppins stays reserved for reading paragraphs.

## Colors

A two-color system at heart — near-black ground with one saturated purple doing all the accenting — kept deliberately narrow so the purple stays legible as *the* signature, not one of many.

### Primary
- **Signature Purple** (`#a855f7` / Tailwind `purple-500`): the only accent color in the system. Carries every hard shadow, every active/selected state (nav tabs, language toggle, filled badges, filled tags), and the dashed accent line and photo badge on the profile card.

### Neutral
- **Void Ground** (`#0a0a0b`): the page background and the fill behind every card border, uninterrupted by texture or gradient.
- **Ink Surface** (`#131315`): card, pill, and tile fill — one step lighter than the ground so bordered shapes read as distinct objects sitting on it.
- **Border Ink** (`#f4f4f5` / Tailwind `zinc-100`): every thick border in the system, at full or partial opacity depending on whether the border needs to read as structural (full opacity) or as a quiet divider (15–30% opacity, e.g. the hairline rules between project rows).
- **Text White** (`#ffffff`): headings, active nav/tag labels.
- **Text Secondary** (`zinc-400`): body copy, bios, descriptions.
- **Text Muted** (`zinc-500`/`zinc-600`): captions, row indices, placeholder counts (`+3`).

### Named Rules
**The One Shadow Rule.** Every hard offset shadow in the system is the same purple. A second shadow color would turn the accent into decoration instead of a signature — so even the modal, the tech tiles, and the tags all borrow the identical hue.

## Typography

**Display Font:** Archivo (weights 700/800/900), with Poppins as fallback
**Body Font:** Poppins (weights 400/500/600/700)

**Character:** Archivo carries every label, heading, nav item, and button in heavy, tight-tracked uppercase — the poster-grotesque voice the brutalist direction needs. Poppins is reserved entirely for reading copy (bios, project descriptions, contribution bullets), so paragraphs stay comfortable and unshouted next to the bold display voice.

### Hierarchy
- **Display** (font-black/900, `text-4xl`–`text-5xl`, tight leading): the profile card's name, and the two-tone "SECTION" headings.
- **Headline** (font-black/900, `text-xl`–`text-3xl`, uppercase): project row titles, modal project title.
- **Label** (font-bold/700, `text-xs`–`text-sm`, uppercase, tracked): nav items, buttons, tags, badges, role pill, index numbers.
- **Body** (Poppins regular/400, `text-sm`, `leading-relaxed`): bios, project descriptions, contribution/challenge bullets. No max-width constraint is enforced beyond the column widths already set by the layout grid.

### Named Rules
**The All-Caps Label Rule.** Anything that behaves like a control or a tag (nav, buttons, badges, pills, index numbers) is uppercase Archivo with tight tracking. Anything that behaves like prose stays sentence case in Poppins. The two never mix within one text run.

## Layout

Single content column below `lg` (1024px): the profile card stacks above Projects and Technologies, each section separated by generous vertical rhythm (`space-y-24`/`gap-24`) inside a `max-w-6xl` centered container.

At `lg` and up, the page splits into two columns: a `340px` profile **aside** on the left and a flexible content **main** on the right (Projects, then Technologies), with a `2.5rem` gap between them. The aside is `position: sticky` at a `top` offset that clears the fixed nav islands, so it stays in view while the right column scrolls past it — capped at `calc(100vh - 8rem)` with internal scroll (scrollbar hidden) as a safety net on short viewports.

Navigation lives outside this grid entirely: two independent `position: fixed` "islands" — a centered pill with the three section links (no logo/mark), and a right-aligned pill with the EN/PT toggle — float above the page at every scroll position. Below the `sm` breakpoint the section-nav pill swaps its text labels for icons only, since three full words plus the language pill don't fit a phone-width viewport together.

## Elevation & Depth

Every shadow in the system is a hard, zero-blur, single-color offset block — never a soft ambient shadow, never a colored glow with no offset. Depth reads through two interaction verbs, not a shadow scale:

### Shadow Vocabulary
- **Static shadow** (`box-shadow: 6–8px 6–8px 0 0 #a855f7`): sits under structural surfaces at rest — the nav islands, the profile card, tags, the role pill, the modal. Communicates "this is a distinct object," not "this is interactive."
- **Press interaction** (`.brutal`): buttons and pills carry the static shadow at rest, then translate by the shadow's own offset on hover/active — sliding into their shadow until it disappears. Used for anything clickable that isn't a grid tile (social icons, CTA buttons, show-more).
- **Lift interaction** (`.brutal-hover`): grid tiles (technology cards) start with *no* shadow at rest and grow one on hover while translating up-and-left — the opposite motion from press, reserved for dense grids where a permanent shadow on every tile would be too heavy.

### Named Rules
**The Press-or-Lift Rule.** A bordered surface either presses into its shadow (interactive controls) or lifts to reveal one (grid tiles). It never does both, and nothing gets a shadow that just sits there decoratively without one of these two behaviors attached, except the handful of always-static structural surfaces (nav, profile card, modal, tags) that intentionally read as objects rather than controls.

## Shapes

Two silhouettes only: **pill** (`rounded-full`) for anything that behaves like a control or label — nav items, buttons, tags, badges, social icons, the role chip — and **card** (`rounded-2xl`/`rounded-xl`) for anything that behaves like a container — the profile card, project images, modal, tech tiles. Nothing in between (no `rounded-md`/`rounded-lg` compromises). Every one of these shapes carries a full-opacity 2–3px solid border in Border Ink; there are no borderless bordered-shape surfaces in the system. Section dividers and row separators are the one deliberately flat exception: plain 2–3px horizontal rules at 15% border-ink opacity, doing quiet structural work rather than object work.

## Components

### Buttons / Social Icons
- **Shape:** pill (`rounded-full`) for icon-only social links; `rounded-xl` for labeled buttons (View Project, Show more).
- **Style:** `Ink Surface` fill, full-opacity Border Ink border (2–3px), Text Secondary icon/label at rest, white on hover.
- **Hover:** press interaction — translates into its own purple shadow.

### Tags / Badges
- **Style:** pill, 2px Border Ink border. Two variants: filled (`Signature Purple` fill, `Void Ground` text) for the "Personal" badge, the role chip, and modal tags; outlined (`Ink Surface` fill, Text Secondary label) for the default project-row tag preview.
- **State:** static — no hover interaction, since tags are informational, not controls.

### Cards / Containers
- **Corner style:** `rounded-2xl` (profile card, modal), `rounded-xl` (project thumbnails, tech tiles).
- **Background:** `Ink Surface`.
- **Border:** 2–3px solid Border Ink, always full opacity.
- **Shadow:** static purple offset shadow (profile card, modal); tech tiles use the lift interaction instead (see Elevation).
- **Internal padding:** `1.5rem` (profile card), `1.5rem` (modal body), `1rem` (tech tile).

### Navigation
- Two floating pill islands, `position: fixed`, independent of each other and of scroll position. Center island: section links, active section filled white with dark text (from an `IntersectionObserver` scroll-spy), inactive links are Text Secondary. Right island: EN/PT language toggle, same active/inactive treatment. No logo or wordmark anywhere in the nav — this is a deliberate, explicit brief requirement, not an omission. Below `sm`, section links collapse to icon-only to avoid colliding with the language island.

### Signature Component: Project Index Row
The Projects section renders as a plain-text list (index number, title, personal badge, tag preview) rather than a card grid — deliberately withholding imagery until the visitor engages. On desktop/hover-capable devices, hovering a row spawns a small rotated (`-2deg`) miniature image that follows the cursor (portaled to `document.body` so it isn't trapped by any ancestor's transformed containing block), bordered and hard-shadowed like every other object in the system. Touch devices skip the hover step entirely and show a small always-visible thumbnail inline instead, since there's no hover state to rely on.

## Do's and Don'ts

### Do:
- **Do** use `#a855f7` as the only shadow/accent color anywhere a hard offset shadow appears — a second accent color would break the One Shadow Rule.
- **Do** pair every bordered pill or card with a full-opacity 2–3px Border Ink border; a borderless "brutal" surface reads as unfinished, not minimal.
- **Do** keep Archivo uppercase for controls/labels and Poppins sentence-case for prose — don't let either typeface do the other's job.
- **Do** use the press interaction for anything clickable and the lift interaction for grid tiles; pick one per component, never both.

### Don't:
- **Don't** add a soft/blurred ambient shadow anywhere — every shadow in this system is zero-blur and offset, by explicit brief.
- **Don't** reintroduce a logo/wordmark to the nav; the brief calls for its absence explicitly.
- **Don't** fabricate stats, metrics, or claims (years of experience, client counts) to fill out the profile card — PRODUCT.md records that none exist in the source content, and none should be invented to mimic the reference's stat row.
- **Don't** apply a Tailwind responsive display utility (`hidden`, `sm:block`, etc.) directly on an element that also carries Font Awesome's `fa`/`fas` classes — Font Awesome's unlayered stylesheet beats any Tailwind `@layer utilities` rule regardless of specificity or breakpoint. Wrap the icon in a plain span and put the display utility there instead.
