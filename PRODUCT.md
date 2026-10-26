# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Users

Recruiters, hiring managers, and prospective clients evaluating Victor Daniel as a fullstack developer — landing from a resume link, LinkedIn, or GitHub profile, scanning quickly to judge skill and fit before reaching out.

## Product Purpose

A personal portfolio site for Victor Daniel, a fullstack developer. It exists to prove real shipped work (team and personal projects, technology depth) and make it effortless to get in touch or pull his CV. Success is a visitor understanding his skill set in seconds and contacting him or downloading his resume.

## Positioning

Not a generic template resume page — the site demonstrates engineering range directly: full end-to-end ownership (architecture through UI) on personal projects (Vibez, TrackerFi), plus PO/Scrum Master leadership on team projects (Themis, NectoPoint, Skytrack), spanning AI/ML pipelines, mobile, cloud, and classic web stacks.

## Operating Context

Single-page site, bilingual (English/Portuguese) via `/` and `/pt` routes. Sections: About (photo, bio, social links, CV download), Projects (list with detail modal per project), Technologies (grid of tools/languages, expandable). No blog, no auth, no backend — static content authored in `src/i18n/translations.ts`.

## Capabilities and Constraints

- React 18 + TypeScript + Vite + Tailwind CSS v4, React Router for the `/:lang?` route.
- All copy is bilingual and lives in `translations.ts`; a redesign must not drop either language.
- Project data (title, description, contributions, challenges, tags, link, image, personal flag) is real and must not be fabricated or altered.
- No analytics/CMS backend; images are static assets under `public/img`.

## Brand Commitments

- Name: Victor Daniel. Role: Fullstack Developer.
- Existing identity: dark theme with a purple accent — this is a durable brand color, kept through the current neo-brutalist style redesign (style changes, color identity does not).
- Real assets: profile photo, project screenshots, CV PDFs (EN/PT), GitHub/LinkedIn/email links — all existing and must stay wired to the real destinations already in `translations.ts`.

## Evidence on Hand

- Five real projects with real GitHub links and screenshots (Vibez, Themis, TrackerFi, Skytrack, NectoPoint) — no placeholder projects.
- No claimed metrics (years of experience, client count, etc.) exist in current copy; none should be invented for the redesign.

## Product Principles

- Content stays factual: only real projects, real tech, real links — nothing fabricated to fill a template's stat blocks.
- Bilingual parity is non-negotiable; every visible string flows through `translations.ts`.
- The purple-on-dark identity is the through-line across style changes; it is Victor's, not the template's.
- Scannability for a busy recruiter matters more than depth — projects and skills must read in seconds, detail lives one click away.
