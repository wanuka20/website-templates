# Production-readiness audit — 2026-07-17

## Release verdict

**BLOCKED**

The production build, type checking, linting, reproducible install, cache behavior, routes, desktop Chromium, WebKit, Mobile Chrome, and Mobile Safari are stable. Release is blocked by two reproducible P1 lead-flow defects:

1. Phone numbers beginning with `+` are stored as `#ERROR!` in every production Leads sheet.
2. An Apps Script HTTP 500 is reported to the visitor as “Message Sent!” because the browser submission uses an opaque `no-cors` response.

No production application bug was fixed during this audit. Changes are limited to test infrastructure, dependencies/scripts for testing, reports, and deletion of the five temporary test rows.

## Gate results

| Gate | Result | Evidence |
| --- | --- | --- |
| Clean `npm ci` | Pass | 640 packages installed from lockfile |
| ESLint | Pass | `npm run lint` |
| TypeScript | Pass | `npm run typecheck` |
| Vitest | Pass | 14/14 tests |
| Next production build | Pass | 11 routes generated; five templates use 30-second ISR |
| Chromium routes | Pass | 15/15 |
| WebKit desktop routes | Pass | 15/15 |
| Mobile Chrome | Pass | 16/16 applicable; 4 Chromium-only checks skipped |
| Mobile Safari | Pass | 16/16 applicable; 4 Chromium-only checks skipped |
| Firefox desktop | Not completed | Headless Firefox failed before navigation due local SWGL framebuffer/compositor errors |
| Chromium interactions/resilience | Mixed | 12 passed, 10 failed, 1 skipped |
| Axe and SEO assertions | Mixed | 6 passed, 14 failed |
| HTTP 500 submission fixture | Failed | False success reproduced |
| Live form integration | Mixed | 5/5 rows created exactly once; 3/5 did not show success within 4 seconds |
| Live test cleanup | Pass | 5/5 rows deleted; post-cleanup searches returned zero matches |

Final deterministic browser total, excluding live writes and superseded harness attempts: **80 passed, 25 failed, 9 skipped**. Unit total: **14 passed**.

## Route/browser matrix

| Coverage | Chromium | WebKit | Mobile Chrome | Mobile Safari | Firefox |
| --- | --- | --- | --- | --- | --- |
| `/`, `/templates`, `/pricing`, `/contact` | Pass | Pass | Pass | Pass | Environment blocked |
| Five `/templates/*` routes | Pass | Pass | Pass | Pass | Environment blocked |
| `/api/gym-content` | Pass | Pass | Pass | Pass | Environment blocked |
| Local static image and Next image rendering | Pass | Pass | Pass | Pass | Environment blocked |
| 404 response/page | Pass | Pass | Pass | Pass | Environment blocked |
| Template anchor targets | Pass | Pass | Pass | Pass | Environment blocked |
| Mobile menu open/navigate/close | N/A | N/A | Pass | Pass | N/A |

Route tests also checked page/runtime errors, same-origin HTTP failures, broken rendered images, horizontal overflow at normal zoom, initial rendering, and direct deep links.

## Lighthouse medians

Targets: Performance ≥90, Accessibility ≥90, Best Practices ≥90, SEO ≥95, LCP ≤2.5s, CLS ≤0.1, TBT ≤200ms.

| Route | Perf | A11y | BP | SEO | LCP | CLS | TBT | Script transfer | Unused JS |
| --- | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: |
| `/` | 76 | 92 | 100 | 100 | 5.10s | 0 | 249ms | 389KB | 119KB |
| `/templates` | 95 | 96 | 100 | 100 | 2.90s | 0 | 80ms | 303KB | 140KB |
| `/pricing` | 98 | 91 | 100 | 100 | 2.24s | 0 | 83ms | 266KB | 117KB |
| `/contact` | 97 | 96 | 100 | 100 | 2.53s | 0 | 120ms | 258KB | 90KB |
| `/templates/gym` | 94 | 85 | 96 | 100 | 2.85s | 0 | 112ms | 213KB | 55KB |
| `/templates/restaurant` | 92 | 85 | 96 | 100 | 3.10s | 0 | 158ms | 212KB | 55KB |
| `/templates/salon` | 91 | 83 | 96 | 100 | 2.84s | 0 | 230ms | 216KB | 55KB |
| `/templates/realestate` | 92 | 85 | 96 | 100 | 3.14s | 0 | 202ms | 212KB | 55KB |
| `/templates/tuition` | 95 | 85 | 96 | 100 | 2.81s | 0 | 117ms | 212KB | 55KB |

Every template misses the LCP target. All template accessibility scores miss the target. Salon misses TBT; Real Estate is 1.8ms over the target. The homepage is included for completeness even though it is planned for removal when templates are sold separately.

## Cache and image behavior

- Warm production template medians were **6.3–8.8ms**, all well below the 500ms threshold.
- Initial stale ISR responses were served immediately with `s-maxage=30, stale-while-revalidate=31535970`; all five cache states became `HIT` after background refresh.
- Unit tests confirmed independent tags for all five templates, configurable revalidation, valid Sheets content precedence, field-level fallback, malformed JSON fallback, HTTP-error fallback, `ok=false` fallback, missing URL fallback, and configured request timeout.
- A direct local image returns `public, max-age=0`.
- The optimized image returns `public, max-age=14400, must-revalidate` and `x-nextjs-cache: HIT`.
- `settings-brand-d12.jpg` and `settings-brand-d12-v2.jpg` produced different optimized ETags/cache keys. Use a versioned filename when replacing an image; replacing bytes under the same optimized URL can remain stale for up to four hours locally.

## Live lead verification and cleanup

Test label: `CODEX PRODUCTION TEST - DELETE`

| Template | Temporary row | Timestamp | Business | Source | Result |
| --- | ---: | --- | --- | --- | --- |
| Gym | 7 | 2026-07-16 16:44:21 (Sheet locale) | IronPulse Gym 10 | `/templates/gym` | Created once; deleted |
| Restaurant | 3 | 2026-07-16 16:42:11 | Spice Kitchen | `/templates/restaurant` | Created once; deleted |
| Salon | 3 | 2026-07-16 16:42:18 | Lumière Beauty Studio | `/templates/salon` | Created once; deleted |
| Real Estate | 3 | 2026-07-16 16:42:25 | Keshan Realty | `/templates/realestate` | Created once; deleted |
| Tuition | 3 | 2026-07-16 16:42:31 | Apex Academy | `/templates/tuition` | Created once; deleted |

All five rows had the correct template, business, name, email, subject, message, and source path. All five phone cells contained `#ERROR!`. Exact-row rereads were performed before deletion. Post-cleanup searches over `Leads!A1:Z200` returned zero matching rows in every spreadsheet.

## Bugs

### BUG-001 — P1 — Lead phone numbers are corrupted

- Category: Functional / data integrity
- Affected: All five template contact forms and all five `Leads` tabs
- Browser/viewport: Chromium desktop; live Apps Script endpoints
- Reproduction: Submit a valid form with phone `+94 00 000 0000`, then inspect the inserted row.
- Expected: The exact phone string is stored as text.
- Actual: The phone cell becomes `#ERROR!` in every sheet, consistent with formula interpretation of a leading `+`.
- Evidence: Live verification rows listed above.
- Suspected subsystem: Apps Script row-writing/value sanitization.

### BUG-002 — P1 — HTTP 500 is falsely reported as success

- Category: Functional / integration reliability
- Affected: All five template contact forms
- Browser/viewport: Chromium desktop; mocked Apps Script fixture
- Reproduction: Intercept the template Apps Script POST and return HTTP 500 with `{ "ok": false }`.
- Expected: The form displays an error and retains the entered values.
- Actual: The form displays “Message Sent!” because `mode: "no-cors"` exposes only an opaque response and the code never checks status or body.
- Evidence: `reports/playwright/http-error-handling.json` and its failure screenshot/trace.
- Suspected subsystem: `lib/googleSheets.ts` browser-to-Apps-Script transport.

### BUG-003 — P2 — Live form feedback can remain stuck on “Sending…”

- Category: Functional / performance
- Affected: All template forms; reproduced on Gym, Restaurant, and Salon in the first live pass
- Browser/viewport: Chromium desktop
- Reproduction: Submit the labelled live test lead and wait four seconds.
- Expected: Prompt success/failure feedback with a bounded timeout.
- Actual: Three forms still showed disabled “Sending…” at four seconds. Restaurant and Salon rows had already been inserted; Gym required a retry and completed in about ten seconds.
- Evidence: `reports/playwright/live-leads.json` and `live-lead-gym-retry.json`.
- Suspected subsystem: Apps Script POST latency and missing client submission timeout.

### BUG-004 — P2 — Placeholder links are interactive but go nowhere

- Category: Functional / content
- Affected: Marketplace footer; contact/location/hour cards and social links across the template sites
- Browser/viewport: Chromium desktop
- Reproduction: Inspect or activate links whose `href` is `#`.
- Expected: A real destination, map URL, non-link text, or disabled semantic element.
- Actual: Every audited route contains one or more placeholder links. Examples include Privacy Policy, Terms of Service, addresses, business hours, and some icon-only social links.
- Evidence: Nine failed link-semantic tests in `chromium-interactions.json`.
- Suspected subsystem: Footer/contact component markup and Sheet/fallback content.

### BUG-005 — P2 — Serious accessibility violations across templates

- Category: Accessibility
- Affected: All audited routes
- Browser/viewport: Chromium desktop; Axe 4.12
- Reproduction: Run `npm run test:accessibility`.
- Expected: Zero serious/moderate automated violations.
- Actual: Recurring `color-contrast`, `link-name`, `heading-order`, `nested-interactive`, and `region` violations. Real Estate has six nested-interactive nodes; Salon has one. The floating WhatsApp link is outside a landmark. The green WhatsApp button uses white text at approximately 1.98:1 contrast in one audited state.
- Evidence: `reports/playwright/chromium-a11y-seo.json` and attached Axe JSON per route.
- Suspected subsystem: Shared WhatsApp/footer components, icon links, heading hierarchy, and card/button composition.

### BUG-006 — P2 — Form validation errors are not programmatically announced

- Category: Accessibility / forms
- Affected: Marketplace and all five template forms
- Browser/viewport: Code inspection plus keyboard audit
- Reproduction: Submit an empty form with a screen reader or inspect input accessibility relationships.
- Expected: `aria-invalid`, `aria-describedby`, and an alert/live region connect each error to its field.
- Actual: Errors are plain paragraphs without these relationships; the submit error also lacks an alert/live region.
- Evidence: `components/shared/ContactForm.tsx`.
- Suspected subsystem: Shared contact form accessibility markup.

### BUG-007 — P2 — Core Web Vitals targets are missed

- Category: Performance
- Affected: All five templates; homepage and template index also affected
- Browser/viewport: Lighthouse simulated mobile, three-run medians
- Reproduction: Run `npm run test:lighthouse`.
- Expected: LCP ≤2.5s and TBT ≤200ms.
- Actual: Template LCP ranges 2.81–3.14s. Salon TBT is 230ms; Real Estate is 202ms. Homepage performance is 76 with 5.10s LCP and 249ms TBT.
- Evidence: `reports/production-readiness/lighthouse/summary.json`.
- Suspected subsystem: Hero image delivery, client JavaScript, and above-the-fold rendering.

### BUG-008 — P2 — Security headers are absent in the local production response

- Category: Security
- Affected: All routes
- Browser/viewport: HTTP production probe
- Reproduction: Request any route and inspect headers.
- Expected: At minimum a considered CSP, anti-framing policy, nosniff, referrer policy, and permissions policy; HSTS should be confirmed at deployment HTTPS level.
- Actual: CSP, HSTS, X-Frame-Options, X-Content-Type-Options, Referrer-Policy, and Permissions-Policy are absent locally.
- Evidence: `reports/production-readiness/production-probes.json`.
- Suspected subsystem: Next configuration / deployment headers.

### BUG-009 — P2 — Dependency audit reports 21 moderate findings

- Category: Security / dependencies
- Affected: Build and test dependency graph
- Browser/viewport: N/A
- Reproduction: Run `npm audit --json`.
- Expected: No unresolved moderate-or-higher production dependency findings before release.
- Actual: 21 moderate findings. Direct packages reported are `next` (through PostCSS) and test-only `lighthouse` (through Sentry/OpenTelemetry). npm currently reports no automatic fix.
- Evidence: npm audit output from this audit.
- Suspected subsystem: Dependency graph; assess production reachability separately from test-only dependencies.

### BUG-010 — P2 — Marketplace SEO assets and canonicals are incomplete

- Category: SEO
- Affected: `/`, `/templates`, `/pricing`, `/contact`, static SEO assets
- Browser/viewport: Chromium desktop
- Reproduction: Inspect `<head>` and request `/robots.txt`, `/sitemap.xml`, and `/favicon.ico`.
- Expected: One canonical per public page and 200 responses for the static SEO assets.
- Actual: Marketplace pages have no canonical. `/robots.txt` is 404; the combined asset test stops at that first failure, and source inspection confirms no robots/sitemap/favicon routes/files.
- Evidence: `chromium-a11y-seo.json`.
- Suspected subsystem: App Router metadata and static/app metadata routes.

### BUG-011 — P2 — Restaurant overflows horizontally at 200% zoom

- Category: Accessibility / responsive layout
- Affected: `/templates/restaurant`
- Browser/viewport: Chromium desktop at CSS zoom 200%
- Reproduction: Load the route, apply 200% zoom, compare document and viewport widths.
- Expected: No horizontal page overflow for reflowable content.
- Actual: 15px horizontal overflow.
- Evidence: `chromium-interactions.json` failure screenshot/trace.
- Suspected subsystem: Restaurant layout width, fixed element, or transformed media.

### BUG-012 — P2 — Gym branding and trainer content are inconsistent

- Category: Content consistency
- Affected: `/templates/gym`, SEO/contact lead business name
- Browser/viewport: All
- Reproduction: Compare navbar/footer/contact business name, hero copy, and first trainer card.
- Expected: One business identity and matching trainer name/biography.
- Actual: Navbar/footer/live lead use `IronPulse Gym 10`; hero and body copy use `IronPeak Fitness`. The first trainer is `Oshan Fernando`, while the biography says `Kamal` and schedule rows still reference `Kamal Perera`.
- Evidence: Live lead row and Playwright accessibility snapshot.
- Suspected subsystem: Mixed Google Sheets and fallback content.

### BUG-013 — P2 — Public lead endpoints have no visible spam controls

- Category: Security / abuse resistance
- Affected: All template forms
- Browser/viewport: All
- Reproduction: Inspect client bundles and submit repeated valid requests.
- Expected: Server-side validation plus rate limiting, honeypot, CAPTCHA, or equivalent abuse control.
- Actual: Apps Script deployment URLs are necessarily present in five built client chunks, and no app-side abuse control is present. Duplicate clicks in one page instance are prevented, but independent automated requests are not.
- Evidence: Built chunk scan and contact submission implementation.
- Suspected subsystem: Apps Script endpoint and form architecture.

### BUG-014 — P3 — Avoidable client JavaScript remains

- Category: Performance
- Affected: All routes
- Browser/viewport: Lighthouse simulated mobile
- Reproduction: Inspect Lighthouse resource and unused-JavaScript audits.
- Expected: Route-specific client bundles with minimal unused code.
- Actual: Templates transfer approximately 212–216KB of script and Lighthouse flags about 55KB unused. Marketplace pages transfer 258–389KB and flag 90–140KB unused.
- Evidence: `lighthouse/summary.json`.
- Suspected subsystem: Shared client components, animation/theme/form libraries, and route bundling.

### BUG-015 — P3 — Site metadata advertises the wrong Next.js version

- Category: Content / metadata
- Affected: Default site description
- Browser/viewport: All
- Reproduction: Inspect the default metadata description.
- Expected: Framework version is accurate or omitted.
- Actual: It says “built with Next.js 15”; the project uses Next.js 16.2.9.
- Evidence: `app/layout.tsx` and `package.json`.
- Suspected subsystem: Static metadata copy.

### BUG-016 — P3 — Same-filename image replacement can stay stale for four hours

- Category: Content operations / cache
- Affected: Images rendered through `next/image`
- Browser/viewport: Production probe
- Reproduction: Replace bytes while retaining the same local URL, then request the optimized URL.
- Expected: Editors have a documented immediate refresh path.
- Actual: Optimized responses use `max-age=14400`; the same URL remains the same cache key. A versioned filename produces a distinct ETag and cache key.
- Evidence: `production-probes.json`.
- Suspected subsystem: Next image optimizer cache and content update workflow.

## Passed resilience and quality checks

- Required/minimum-length/email form validation passed on marketplace and all five templates.
- Duplicate-click test produced one request.
- Network-abort fixture displayed an error and did not display success.
- Reduced-motion test passed.
- Theme choice persisted after reload.
- Keyboard focus was visible for the sampled Gym tab sequence.
- All template deep links retained readable server-rendered content with JavaScript disabled.
- Normal-width desktop/mobile routes had no horizontal overflow.
- Final Chromium, WebKit, Mobile Chrome, and Mobile Safari route runs had no broken rendered images, runtime errors, or same-origin HTTP failures.
- Local asset casing/path and `/api/gym-content` passed.
- Homepage contact behavior remained simulated and did not create a live lead.

## Known limitations

- Firefox desktop compatibility is unverified because the local Playwright Firefox process failed in its headless software compositor before navigation. This is test-environment evidence, not an application failure.
- Vercel CDN behavior, regional ISR propagation, production HTTPS/HSTS, and Vercel environment-variable configuration are outside this local-only pass.
- Offline was assessed through JavaScript-disabled/direct-render resilience and mocked network failures; the application has no service worker, so full offline navigation is not expected.
- System-theme preference and mobile focus return were not manually screen-reader tested beyond automated checks.
- Google Sheets changing-data scenarios used fixtures; live content cells were not edited for cache tests.
- Upstream request deduplication cannot be proven from black-box response headers alone; independent cache tags and warm cache behavior were verified.

## Recommended release order

1. Fix BUG-001 and BUG-002, then rerun live form verification and cleanup.
2. Triage all P2 issues, especially accessibility, placeholder links, LCP, security headers, SEO assets, and 200% reflow.
3. Re-run `npm run test:production`, `npm run test:probes`, and `npm run test:lighthouse`.
4. Complete Firefox validation in a different local/CI environment.
5. Deploy to a preview environment and separately verify Vercel headers, CDN image caching, and regional ISR behavior.
