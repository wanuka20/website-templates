# v0.5.6 Gym Visual Baselines

## Purpose

These local screenshots are the pre-database-migration visual reference for
the Gym route. Compare future database-backed rendering against them at the
same viewport sizes before approving a publish/cutover. They are not customer
content exports and no contact form was submitted while capturing them.

## Captured artifacts

| Design | Viewport | File | Capture evidence |
| --- | --- | --- | --- |
| Editorial | 1440 x 1000 desktop | [editorial-desktop-1440.png](./editorial-desktop-1440.png) | Local `http://127.0.0.1:3113/templates/gym` used a process-only loopback fixture; after the hero animation settled, it visibly rendered the headline, description, and both hero CTAs. |
| Editorial | 390 x 844 mobile | [editorial-mobile-390.png](./editorial-mobile-390.png) | The same local-only fixture route rendered the compact header, settled headline and description, stacked CTAs, and mobile statistics. |
| Classic | 1440 x 1000 desktop | [classic-desktop-1440.png](./classic-desktop-1440.png) | Local `http://127.0.0.1:3111/templates/gym` used a process-only loopback fallback and rendered the Classic orange navigation, hero, CTAs, and statistics. |
| Classic | 390 x 844 mobile | [classic-mobile-390.png](./classic-mobile-390.png) | The same local-only fallback route rendered the Classic compact header, stacked CTAs, and mobile statistics. |

Capture dates: Editorial recaptured on 2026-07-30 after its hero animation
settled; Classic on 2026-07-29, before database
migration work.

## Verification performed

- Used the local development route only; no Vercel deployment, Google Sheet,
  domain, or form submission was changed.
- For the Editorial replacement, used a complete process-only loopback fixture
  at `127.0.0.1` and waited 2.2 seconds after each page load. Confirmed the
  loaded DOM and both PNGs showed the `Forge Your Best Self` headline,
  descriptive hero copy, `Start Free Trial`, `View Schedule`, and the mobile
  navigation control.
- Started a separate temporary local process with
  `GYM_GOOGLE_SHEET_WEB_APP_URL` set only for that process to an unused
  `127.0.0.1` port. Its fetch failed locally, so the existing content loader
  used built-in Gym fallback data with no `themeTemplate`; the existing
  `resolveGymDesign()` fallback therefore selected Classic. No Google Sheet
  request or configuration write occurred.
- Confirmed the Classic DOM showed `IronPeak Fitness`, the `Join 1,200+ Members`
  badge, the orange Classic navigation/CTA treatment, and the mobile navigation
  control.
- Visually inspected all four saved PNGs after capture. They are representative
  first-viewport baselines rather than misleading full-page captures.

## Baseline completion

Both currently supported Gym renderers now have desktop and mobile visual
references. The temporary Editorial and Classic preview processes were stopped
immediately after capture; they did not modify source code, `.env.local`,
Google Sheets, Vercel, or lead data.
