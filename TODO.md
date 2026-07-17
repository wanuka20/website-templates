# Website Performance Roadmap


# v.0.5.0
## High Priority
- [x] Optimize images with `next/image`
  - Converted all raw site image elements to `next/image` and configured supported remote image hosts.
- [x] Lazy-load below-the-fold images and prioritize hero images
  - Hero images use `priority`; galleries, cards, profiles, and menu images use responsive `sizes` hints and Next Image's default lazy loading.
- [x] Replace invalid Unsplash image URLs that return 404 responses
  - Identified five failed sources, replaced their spreadsheet values with public Google Drive image links, and removed the broken homepage/template-gallery preview source.
- [x] Cache Google Apps Script content responses
  - Added persistent Next.js Data Cache support with configurable `GOOGLE_SHEETS_REVALIDATE_SECONDS` (default: 300 seconds).
  - Before caching, template requests took 4,300 ms (Gym) to 6,800 ms (Salon), including up to 5,000 ms in application code while waiting for Google Apps Script.
  - After caching, first-load time dropped to roughly 210-235 ms.
- [x] Remove `force-dynamic` from template pages where possible
  - Converted all five template routes to static ISR pages; the current local configuration revalidates them every 30 seconds.
- [x] Avoid duplicate content requests during metadata and page rendering
  - Identical content fetches are automatically memoized across `generateMetadata()` and the template page render.
- [x] Remove the global transition rule from all elements
  - Removed the universal CSS transition rule while retaining explicit component-level transitions; observed first-load time improved from roughly 200-210 ms to 130-150 ms.
- [x] Add a function to delete and/or refresh .next/cache
  - Added `npm run cache:clear` to remove the local `.next/cache` directory.
  - Added `npm run dev:fresh` to clear the cache and then start the local Next.js development server.
  - The command is intentionally local-only; Vercel manages its production cache automatically.
- [x] Run a full production-readiness bug test
  - Added reusable Vitest, Playwright, Axe, Lighthouse, production-probe, and live Apps Script test commands.
  - Tested the production build across Chromium, WebKit, mobile Chrome, and mobile Safari; Firefox was blocked by a local headless compositor error.
  - Verified all public routes, five template sites, caching, local images, accessibility, SEO, responsive behavior, resilience, and one labeled live form submission per template.
  - Cleaned up all five temporary live form submissions after verification; no test leads remain in the Sheets.
  - Recorded findings as `BUG-001` through `BUG-016` in `reports/production-readiness/REPORT.md`. Release verdict: blocked until the P1 issues are addressed.

## Medium Priority
- [x] Reduce Framer Motion usage and replace simple animations with CSS
  - Replaced shared scroll-reveal, template-card, navbar, and WhatsApp button animations with CSS and the browser's native `IntersectionObserver`; kept Framer Motion only for richer hero entrances.
- [x] Add `prefers-reduced-motion` support
  - Respects operating-system reduced-motion settings by disabling non-essential animation, transitions, and smooth scrolling.
- [x] Optimize navbar scroll handling with `requestAnimationFrame` or `IntersectionObserver`
  - All six navbars now share a `requestAnimationFrame`-throttled scroll hook, avoiding repeated state updates during a single screen repaint.
- [x] Simplify expensive `backdrop-blur`, shadow, and image-transform effects
  - Removed backdrop blur from navbars, hero controls, image labels, and template cards; reduced prominent card shadows and removed non-essential card/image hover movement.
- [x] Add request timeouts for Google Apps Script content fetching
  - Added configurable `GOOGLE_SHEETS_REQUEST_TIMEOUT_MS` (default: 10,000 ms, allowing the measured 6.84-second Apps Script cold response to complete). ISR retains the last cached page when the content service is unavailable during revalidation.

## Low Priority
- [x] Move placeholder images from remote URLs to local assets under `public/placeholder_images`
  - Added the five business image folders under `public/placeholder_images` and replaced every config fallback image—including heroes, teams, menus, galleries, reviews, teachers, and properties—with its matching local asset.
- [x] Upload valid placeholder images to Google Drive and mirror them locally in `Placeholder Images (G-Drive)`
  - Downloaded 71 valid image sources, uploaded them as publicly accessible Drive placeholders, and mirrored the complete 76-file placeholder collection locally.
- [x] Update spreadsheet image and Help cells with local placeholder paths
  - Updated only the identified image-related spreadsheet cells, using matching public Drive file links and preserving the source-sheet/cell filename convention.
- [x] Measure Lighthouse performance before and after each optimization
  - Added repeatable production Lighthouse reports under `reports/`. The final Gym template audit scored Performance 95, Accessibility 85, Best Practices 92, and SEO 100, with FCP 1.1 s, LCP 2.9 s, TBT 70 ms, and CLS 0.
- [x] Profile scrolling and hydration with Chrome Performance tools
  - Chrome trace showed no forced reflows or layout shifts. Replaced the WhatsApp box-shadow pulse with a transform/opacity ring so its continuous animation can be composited efficiently.
- [x] Re-check client bundle sizes and remove unnecessary client-side JavaScript
  - Removed Framer Motion from all five sellable template heroes and converted them to server-rendered CSS animations. Lighthouse TBT improved from 230 ms to 70 ms across the before/after Gym audits.
