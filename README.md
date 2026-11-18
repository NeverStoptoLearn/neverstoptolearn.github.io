# Zhouchen — academic homepage

Astro + strict TypeScript, static output, English at `/` and Simplified Chinese at `/zh/`. Each language has Home, About, Research, Publications, Projects, CV, and Contact. Language links keep the current section. No Hexo content is migrated.

## Local development

Use Node **24** and npm **11+** (see `.nvmrc`). The current Astro release is pinned in `package.json`; commit the lockfile with source changes.

On the original Windows workspace, `./scripts/local.ps1 dev` (or `preview`, `verify`, `test:browser`) automatically uses the workspace-local Node 24 toolchain if present. This toolchain is outside the repository and does not alter the system installation.

```sh
npm ci
npm run dev
```

```sh
npm run verify
npx playwright install chromium
npm run test:browser
npm run preview
```

`verify` runs Astro/TypeScript checks, generates the static site, and tests all localized page output, internal links/assets, SEO, sitemap, and deployment guards. Browser tests cover desktop/mobile rendering, overflow, section navigation, language switching, and keyboard skip navigation. The CI workflow installs Chromium and runs the same checks before deployment.

If the Chromium download is unavailable, an installed Chrome can be used for local tests by setting `PLAYWRIGHT_CHANNEL=chrome`; CI continues to use its downloaded Chromium.

Dependency audit on 2026-11-18: Astro is updated to 7.4.12. npm still reports 12 high severity entries tracing to the single upstream [picomatch ReDoS advisory](https://github.com/advisories/GHSA-fc5q-39xc-vjpf), which currently has no patched release. These packages run in the build/tooling process; the deployed Pages output is static HTML/CSS with no Node server or user-supplied glob input. Recheck upstream before release. No audit suppression or forced downgrade is applied.

## Content editing

- `src/data/profile.ts`: biography, affiliation, contact email, research directions, education, experience, CV URL.
- `src/data/publications.ts`: nine confirmed publications, sorted by issue year and listed on Home and Publications. Supports bilingual titles, optional abstracts, authors, venue, volume and pages, DOI, and citation links.
- `src/data/projects.ts`: independent typed research project records, status, bilingual title/summary, topics, project/code URLs, and a selected flag for Research.
- `src/data/types.ts`: shared content contracts.
- `src/lib/i18n.ts`: page labels, descriptions, and locale-aware routes.

The profile, education and publication list are maintained in the data files above. To add a CV PDF, place it in `public/files/zhouchen-cv.pdf` and set `profile.cvUrl` to `/files/zhouchen-cv.pdf`.

Example record shape (replace every sample value with verified data before adding it):

```ts
{
  id: 'unique-paper-id',
  title: { en: 'Verified title', zh: '已核实的论文标题' },
  authors: ['Author name'],
  year: 2026,
  venue: 'Verified venue',
  kind: 'conference',
  abstract: { en: 'Verified abstract', zh: '已核实的摘要' },
  // Optional: doi, paperUrl, codeUrl, bibtex
}
```

## GitHub repository and deployment

Target: `NeverStoptoLearn/neverstoptolearn.github.io`.

This Astro site is the academic homepage. The former Hexo site is kept in a separate private archive.

`.github/workflows/pages.yml` validates all branch pushes and pull requests. Build/upload/deploy jobs run only when the pushed or manually selected ref equals `github.event.repository.default_branch`; this follows the actual default branch, including future renames. Pull requests cannot deploy. Permissions are scoped by job. The `github-pages` environment exposes the resulting URL.

The user homepage uses `site: 'https://neverstoptolearn.github.io'` and `base: '/'`. Do not add the repository name as a path prefix. This follows the [Astro GitHub Pages deployment guide](https://docs.astro.build/en/guides/deploy/github/).

In **Settings → Pages → Build and deployment**, choose **GitHub Actions** as the source. Private repositories need a [GitHub plan that supports Pages on private repositories](https://docs.github.com/en/pages/getting-started-with-github-pages/what-is-github-pages). The default-branch workflow validates the project, uploads `dist`, and deploys it to `https://neverstoptolearn.github.io/`.

## Design and accessibility

Simple academic layout with a white background, compact system typography, ordinary blue text links, and a narrow reading column. Decorative illustrations, slogans, oversized headings, promotional banners, and cards have been removed. No external font, analytics, or image requests. Responsive navigation works without client JavaScript. Semantic landmarks, visible focus, keyboard skip link, reduced-motion support, printable CV, canonical and alternate-language links, Open Graph metadata, sitemap, robots, favicon, and a bilingual 404 page are included.

## Scope of supplied information

Earlier full academic-site requirements were not available in this chat. This implementation follows the ten explicit requirements in the current request. Personal academic content remains to be supplied before a fully populated launch.
