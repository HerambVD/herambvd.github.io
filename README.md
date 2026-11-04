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

These rules are enforced by ESLint (`no-restricted-imports` in `eslint.config.mjs`), so `npm run lint` fails on a violation.

## Google Analytics

Analytics loads only when the `NEXT_PUBLIC_GA_MEASUREMENT_ID` environment variable is set at build time. The deploy workflow reads it from the repository variable `GA_MEASUREMENT_ID` (**Settings → Secrets and variables → Actions → Variables**). Local builds don't send analytics unless you set the variable yourself.

## Deployment

`.github/workflows/deploy.yml` runs lint, tests and the build on every push and pull request to `master`. On pushes to `master` it also deploys `./out` to GitHub Pages. This requires **Settings → Pages → Source** to be **GitHub Actions**.

## Search, answer engines and AI (SEO · AEO · GEO)

What the site does to be found for "Heramb Devbhankar", "Devbhankar", "heramb.tech" and related searches, by search engines and AI assistants:

| Area | Where |
| --- | --- |
| **Identity facts**: full name, name variants, factual bio, FAQ | `src/entities/profile/model/profile.ts` (single source for everything below) |
| **Structured data**: `ProfilePage` + `Person` (home), `FAQPage` (home), `ItemList` (projects), `ContactPage`, site-wide `WebSite`; all linked by `@id` | `src/entities/*/lib/structured-data.ts`, `src/views/*/lib/structured-data.ts`, `app/layout.tsx` |
| **Visible FAQ**: short, quotable answers for answer engines | `src/widgets/faq` |
| **llms.txt**: Markdown summary for AI assistants | `app/llms.txt/` → `/llms.txt` |
| **Crawler access**: all crawlers allowed; major AI crawlers listed explicitly | `app/robots.ts`, `AI_CRAWLERS` in `src/shared/config/site.ts` |
| **Sitemap** with the profile photo for image search | `app/sitemap.ts` |
| **Share card** (1200×630, used by LinkedIn, X, Slack and search previews) | `app/og.png/` → `/og.png` |
| **Titles, descriptions, canonical URLs, Open Graph** for every page | `app/layout.tsx`, `src/shared/lib/page-metadata.ts` |
| **IndexNow**: Bing, Yandex, Naver and Seznam are notified after every deploy (Bing also feeds DuckDuckGo and ChatGPT search) | `scripts/submit-indexnow.mjs`, key file `public/<key>.txt`, deploy workflow |
| **Ownership verification** for Google and Bing | Repository variables `GOOGLE_SITE_VERIFICATION`, `BING_SITE_VERIFICATION` |

### One-time setup (after the site is live)

1. **Google Search Console** (search.google.com/search-console): add the property `https://www.heramb.tech`, choose the "HTML tag" method, and save the `content="..."` value as the repository variable `GOOGLE_SITE_VERIFICATION`. Redeploy, click Verify, then submit `sitemap.xml`.
2. **Bing Webmaster Tools** (bing.com/webmasters): you can import the site from Search Console, or use the HTML tag method with the `BING_SITE_VERIFICATION` variable. Submit `sitemap.xml`. This also covers DuckDuckGo, Yahoo and ChatGPT search.
3. Test the structured data with Google's Rich Results Test and validator.schema.org.

### Off-site signals (these matter as much as the code)

Search engines and AI models decide who "Heramb Devbhankar" is by checking that many sources agree. Use the same name, title and link everywhere:

- **LinkedIn**: put `https://www.heramb.tech` in the Website field and "Senior Software Engineer at Apollo Global Management" in the headline.
- **GitHub**: set the profile Website to heramb.tech, and add a profile README (repo `HerambVD/HerambVD`) with your name, title and a link back.
- **PyPI**: add `https://www.heramb.tech` as the Homepage URL of `spoken2written`.
- **Medium, X, Instagram**: link to heramb.tech in each bio.
- Once Google shows a Knowledge Panel for your name, claim it ("Claim this knowledge panel").

Ranking for the exact name "Heramb Devbhankar" or "heramb.tech" is very achievable. "Heramb" alone also refers to the Hindu deity Heramba (a form of Ganesha), so a #1 result for that single word can't be guaranteed.

