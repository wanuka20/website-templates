# Production-readiness tests

These tests run against an optimized `next build`/`next start` server, not `next dev`.

## Commands

- `npm ci --cache .npm-cache` — verify a reproducible clean install.
- `npm run lint` — ESLint.
- `npm run typecheck` — TypeScript without emitting files.
- `npm run test:unit` — Vitest content, cache, timeout, fallback, URL, and form-request tests.
- `npm run build` — required before browser, probe, and Lighthouse tests.
- `npm run test:browser` — Playwright browser suite excluding real lead submissions.
- `npm run test:accessibility` — Chromium Axe checks.
- `npm run test:probes` — production response, ISR, security-header, and image-cache probes.
- `npm run test:lighthouse` — three Lighthouse runs per public route and median summary.
- `npm run test:lighthouse:summary` — rebuild the summary from existing raw Lighthouse reports.
- `npm run test:production` — lint, typecheck, unit, build, and browser gates.

## Live lead test warning

`npm run test:leads` sends one real, clearly labelled test lead to each configured production Apps Script endpoint. It does not delete rows automatically because deletion requires authenticated Google Sheets access and exact row verification. Run it only when you are prepared to verify and delete rows named `CODEX PRODUCTION TEST - DELETE` immediately afterward.

Playwright output is written under `reports/playwright`. Lighthouse and production probe summaries are written under `reports/production-readiness`.
