# heramb.tech

Personal portfolio of Heramb Devbhankar, live at **https://www.heramb.tech**.

Next.js (App Router, static export), React and Tailwind CSS, deployed to GitHub Pages.

## Commands

```bash
npm install          # once
npm run dev          # dev server with hot reload: http://localhost:3000
npm test             # unit tests (Vitest)
npm run lint         # ESLint
npm run build        # production build: static site written to ./out
npm start            # serve ./out locally: http://localhost:3000
```

## Updating content

All text on the site lives in the `model/` files of the entities. Edit those, not the components.

| File | What it holds |
| --- | --- |
| `src/entities/profile/model/profile.ts` | Name, headline, summary, impact stats, contact details, social links, resume PDF path |
| `src/entities/experience/model/experience.ts` | Roles (key results, bullets, tags) and education |
| `src/entities/project/model/projects.ts` | Project cards |
| `src/entities/skill/model/skills.ts` | Skill groups with brand logos, Core Expertise cards |

Unit tests keep the copy tight: experience bullets must stay under 130 characters and project descriptions under 140. A test also fails if the resume PDF or an image path doesn't exist.

To replace the resume, put the new PDF in `public/assets/pdf/` and update `profile.resume.href`. Skill logos come from [Simple Icons](https://simpleicons.org): import `siName` from `simple-icons`, or pass a `lucide-react` icon when a brand has no logo.

## Architecture: Feature-Sliced Design

The code in `src/` follows [Feature-Sliced Design](https://feature-sliced.design). Each layer may import only from the layers below it:

```
app/          Next.js routes, root layout, providers   (FSD "app" layer)
src/views/    one composition per page                 (FSD "pages"; renamed so Next.js doesn't treat it as routes)
src/widgets/  page sections: hero, experience-timeline, projects-grid, tech-stack, sidebar, footer
src/features/ user interactions: contact-form, theme-toggle, download-resume, scroll-to-top, analytics
src/entities/ business data and its display: profile, experience, project, skill
src/shared/   reusable, domain-free code: ui/, lib/, config/
```

- Every slice (e.g. `src/entities/profile`) exposes a public API in `index.ts`. Code outside the slice imports `@/entities/profile`, never a file inside it.
- Slices on the same layer don't import each other.
- Inside a slice, code is split into segments: `model/` (data, types), `ui/` (components), `api/` (network) and `lib/` (helpers).
- Tests sit next to the code they test (`*.test.ts(x)`).

These rules are enforced by ESLint (`no-restricted-imports` in `.eslintrc.json`), so `npm run lint` fails on a violation.

## Google Analytics

Analytics loads only when the `NEXT_PUBLIC_GA_MEASUREMENT_ID` environment variable is set at build time. The deploy workflow reads it from the repository variable `GA_MEASUREMENT_ID` (**Settings → Secrets and variables → Actions → Variables**). Local builds don't send analytics unless you set the variable yourself.

## Deployment

`.github/workflows/deploy.yml` runs lint, tests and the build on every push and pull request to `master`. On pushes to `master` it also deploys `./out` to GitHub Pages. This requires **Settings → Pages → Source** to be **GitHub Actions**.

## SEO

- Titles, descriptions and canonical URLs come from each page's `metadata` export. Shared defaults and the JSON-LD live in `app/layout.tsx`.
- `sitemap.xml` and `robots.txt` are generated from `app/sitemap.ts` and `app/robots.ts`. To add a page to the sitemap, add it to `ROUTES` in `lib/site.ts`.
