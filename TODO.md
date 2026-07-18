# Website Performance Roadmap

# v.0.6.5  (Upcoming) 
## Pilot Launch and Google Sheets Retirement
- [ ] Run a two-customer Gym isolation pilot
  - Create two Gym sites with different content, leads, preview URLs, and custom domains while sharing the same Gym components.
  - Verify that neither customer can read, modify, cache, or receive the other customer's data.
- [ ] Migrate and verify the remaining template families
  - Verify Gym, Restaurant, Salon, Real Estate, and Tuition content against their existing Sheets and fallback configs.
- [ ] Remove Google Sheets from the production request path
  - Keep read-only exports and rollback documentation for an agreed retention period.
  - Remove obsolete Apps Script environment variables only after the database rollout is proven.
- [ ] Complete the database-backed production-readiness gate
  - Re-run linting, type checking, unit tests, browser tests, accessibility checks, production builds, lead tests, domain tests, and backup restoration.
  - Launch the first real pilot customer only after every isolation and rollback test passes.

# v.0.6.4  (Upcoming)
## Internal Site Management
- [ ] Add administrator authentication and deny access by default
  - Keep database administrator/service credentials server-side and out of browser bundles.
- [ ] Build an internal customer and site manager
  - Create customers and sites, select a template, edit structured content, manage status, and view site domains.
- [ ] Add draft, preview, publish, and rollback states
  - Keep unpublished changes away from customer domains and retain the last known-good published revision.
- [ ] Add internal lead management
  - View, filter, and update lead status without exposing leads from another site.
- [ ] Add image upload and ownership rules
  - Store uploads under site-specific paths and validate type, size, ownership, and deletion behavior.

# v.0.6.3  (Upcoming)
## Multi-Tenant Domains and Lead Routing
- [ ] Resolve each request hostname to exactly one active site
  - Support local development hosts, platform preview subdomains, and verified custom domains.
  - Return a safe not-found state for unknown, duplicate, disabled, or unverified domains.
- [ ] Render templates from the resolved site record
  - Select the shared template family using `template_key` and load only that site's published content.
- [ ] Make metadata and caching site-aware
  - Generate customer-specific canonicals, SEO metadata, sitemap entries, and cache tags.
  - Prevent one customer's cached content from appearing on another customer's domain.
- [ ] Make lead submission site-aware
  - Derive the site identity from trusted server-side domain resolution instead of trusting browser-supplied business names or template IDs.
  - Store leads against `site_id` and verify cross-site isolation.
- [ ] Add a manual Vercel custom-domain onboarding workflow
  - Track requested, pending-verification, active, failed, and removed domain states before automating the Vercel API.

# v.0.6.2  (Upcoming)
## Safe Google Sheets Migration
- [ ] Back up all five Sheets before migration
  - Export immutable copies of Settings, content, image references, and Leads data.
- [ ] Build an idempotent migration tool with dry-run support
  - Map existing Sheet fields to validated per-template content schemas without modifying the source Sheets.
  - Make repeated migration runs safe and report skipped, transformed, and invalid values.
- [ ] Migrate one Gym site first
  - Compare every migrated field, image, SEO value, and lead count with its Sheet source.
- [ ] Add a temporary database-first fallback mode
  - Read from PostgreSQL first and use the existing Sheet/config fallback only while migration is being verified.
  - Avoid permanent dual writes; define one source of truth at each migration stage.
- [ ] Document and test rollback
  - Restore the previous content path without deleting migrated data if verification fails.

# v.0.6.1  (Upcoming)
## Site-Aware Data Access
- [ ] Create a server-only data-access layer
  - Load customers, sites, domains, content, revisions, and leads without exposing database credentials.
- [ ] Replace template-wide content lookup with site-specific lookup
  - Change cache identity from template-only keys such as `template-content:gym` to site-specific keys.
- [ ] Keep template components shared
  - Continue passing validated site configuration into the existing Gym, Restaurant, Salon, Real Estate, and Tuition components.
- [ ] Add template-specific content validation
  - Validate database content with a schema for each template before rendering or publishing.
- [ ] Add tenant-isolation tests
  - Prove two Gym sites can share template code while keeping content, domains, leads, uploads, and cache entries separate.

# v.0.6.0  (Upcoming)
## Multi-Tenant Database Foundation
- [ ] Select and document the managed PostgreSQL stack
  - Compare the operational needs and costs, with Supabase/PostgreSQL as the current recommended starting point.
  - Separate local, staging, and production environments and never use production data for automated tests.
- [ ] Define the initial multi-tenant schema
  - Add migrations for `customers`, `sites`, `domains`, `site_content`, `site_revisions`, and `leads`.
  - Give every customer-owned record an explicit `site_id` or `customer_id` relationship.
- [ ] Define the template and content model
  - Store a stable `template_key` on each site and validated template-specific content separately from shared template code.
  - Support feature flags and named visual variants without customer-name checks in shared components.
- [ ] Establish database security
  - Use least-privilege server credentials, deny-by-default access policies, validated writes, and tenant-isolation constraints.
- [ ] Establish timestamps, backups, and recovery
  - Store canonical timestamps in UTC and display operational time using `Asia/Colombo`.
  - Configure backups and prove that a staging restore can recover customer content and leads.
- [ ] Seed two isolated Gym sites for development
  - Use different domains, branding, content, leads, and feature settings to expose isolation bugs early.

# v.0.5.7  (Upcoming)
## Database Migration Staging
- [ ] Create a non-production migration rehearsal environment
  - Use copied test data with no real customer secrets or live lead delivery.
- [ ] Inventory and map all existing Google Sheets fields
  - Record required, optional, repeated, image, SEO, contact, and template-specific fields.
- [ ] Define migration acceptance criteria
  - Require field parity, image parity, lead-count parity, tenant isolation, rollback, and backup restoration before production cutover.
- [ ] Document the Google Sheets deprecation path
  - Identify which Sheets features become database fields, internal admin screens, exports, or retired behavior.

# v.0.5.6  (Upcoming)
## Database Architecture and Risk Plan
- [ ] Write the multi-tenant architecture decision
  - Confirm one codebase and one primary deployment with shared template families and isolated customer site records.
- [ ] Define customer-specific customization boundaries
  - Use content configuration, feature flags, named variants, and isolated integration modules instead of duplicated template code.
- [ ] Define data ownership and lifecycle rules
  - Cover customer creation, site suspension, cancellation, export, retention, deletion, and domain removal.
- [ ] Define database cost and growth assumptions
  - Estimate initial sites, leads, images, storage, backups, bandwidth, and expected monthly operating cost before choosing a paid plan.
- [ ] Create a migration risk register
  - Include data loss, cross-tenant access, cache leakage, failed lead delivery, broken domains, provider outage, and rollback risks.

# v.0.5.5  (Upcoming)
## Production Observability
- [ ] Define the production event and error logging policy
  - Log operational events such as lead submission started, succeeded, timed out, rejected, or failed.
  - Log safe metadata only: event name, template, route, provider, HTTP status, duration, request ID, and error code.
  - Never log names, email addresses, phone numbers, message content, credentials, tokens, or environment-variable values.
- [ ] Add structured server-side logging for the lead-submission API
  - Emit consistent JSON logs that can be searched in Vercel Runtime Logs.
  - Add a unique request ID to connect all events from one submission.
- [ ] Add production error monitoring and alerts
  - Capture uncaught server errors and failed lead submissions with useful context.
  - Configure an alert for lead-delivery failures or an unusual failure rate.
- [ ] Add a safe operational log viewer guide
  - Document where to view Vercel runtime logs, error-monitoring events, and Google Apps Script execution failures.
  - Document how to investigate a customer-reported missing lead using its request ID.
- [ ] Add observability tests
  - Verify successful, rejected, timed-out, and failed submissions create the expected safe log events.
  - Verify tests cannot expose personally identifiable information or secrets in logs.
- [ ] Standardize business timestamps on Sri Lanka time
  - Use the IANA timezone `Asia/Colombo` (UTC+05:30) as the human-readable project timezone; do not label it as India Standard Time.
  - Configure all five Google Sheets and their Apps Script projects to use `Asia/Colombo` so Leads timestamps display consistently.
  - Ensure future server logs record an ISO UTC timestamp for reliable machine processing plus an `Asia/Colombo` timestamp for operations and support.
  - Add tests covering the expected Sri Lanka timestamp format and date boundary around midnight.

# v.0.5.4  (Upcoming)
## Business Template Visual Enhancement
- [ ] Review and polish all five business templates
  - Audit Gym, Restaurant, Salon, Real Estate, and Tuition independently on desktop, tablet, and mobile.
  - Improve visual hierarchy, spacing, typography, imagery, section flow, and consistency without redesigning stable components unnecessarily.
- [ ] Strengthen each template's primary customer journey
  - Make Gym membership enquiries, Restaurant reservations, Salon bookings, Real Estate property enquiries, and Tuition enrolment actions obvious and consistent.
- [ ] Improve business-specific credibility and conversion elements
  - Review testimonials, ratings, trainer/staff/agent profiles, service details, pricing, schedules, contact information, and calls to action for each industry.
- [ ] Verify real customer content remains visually resilient
  - Test long business names, long headings, missing optional fields, different image ratios, large item lists, and incomplete content without broken layouts.
- [ ] Define reusable template visual variants
  - Record supported hero, navigation, section, color, and typography variants without creating customer-specific template copies.
- [ ] Capture visual regression baselines before database migration
  - Save representative desktop and mobile screenshots for all five templates so database work can be checked for unintended appearance changes.
- [ ] Keep marketplace-page work out of this release
  - Limit homepage, template-gallery, pricing, and marketplace-branding changes to fixes required for navigation, correctness, security, or accessibility.

# v.0.5.3  (Upcoming)
## Production Quality
- [ ] Add spam protection to public lead forms
  - Add server-side validation, rate limiting, and a honeypot field.
- [ ] Fix accessibility violations
  - Add `aria-invalid` and `aria-describedby` to form fields.
  - Add accessible error/live regions.
  - Fix contrast, link names, heading order, and nested interactive elements.
- [ ] Remove placeholder `href="#"` links
  - Add real destinations or render them as non-links.
- [ ] Add production security headers
  - Add CSP, X-Content-Type-Options, Referrer-Policy, Permissions-Policy, and frame protection.
- [ ] Add SEO infrastructure
  - Add canonical URLs, `robots.txt`, `sitemap.xml`, and favicon/metadata assets.
- [ ] Fix Gym content inconsistency
  - Align business name, trainer names, biographies, schedules, and lead data.
- [ ] Fix Restaurant horizontal overflow at 200% zoom.
- [ ] Verify Vercel preview deployment
  - Test HTTPS, headers, ISR, image caching, custom-domain behavior, and lead submission.
- [ ] Update incorrect Next.js 15 metadata to Next.js 16 or remove the version claim.
- [ ] Document image replacement and cache behavior.)

# v.0.5.2  (Pushed)
## Reliable lead submissions
### Completed
- [x] Re-run live lead tests after the fixes
  - Submitted one labelled lead through the local production build for Gym, Restaurant, Salon, Real Estate, and Tuition; all five forms displayed the confirmed success state within the 15-second limit.
  - Verified exactly one row per template with the correct template, business name, source route, email, subject, and message.
  - Confirmed every `+94 00 000 0000` phone cell had string-valued user-entered and effective values, with no formula or `#ERROR!`.
  - Re-ran Chromium failure tests for network failure, HTTP 500, and timeout; all three showed the correct error state, preserved values, and no false success.
  - Reread and deleted only Gym row 8, Restaurant row 4, and row 3 in Salon, Real Estate, and Tuition; final bounded searches found zero test markers in every Leads sheet.
- [x] Add a bounded contact-form submission timeout
  - Added a browser-side `AbortController` timeout to the shared lead-submission helper, covering all five template forms.
  - The default is 15 seconds and can be configured with `NEXT_PUBLIC_LEAD_SUBMISSION_TIMEOUT_MS` in `.env.local` or Vercel.
  - Timeout failures now say “This is taking longer than expected. Please try again.”, while HTTP 500, network, and invalid-response failures retain the generic error message.
  - The form keeps entered values and re-enables its submit button after timeout.
  - Verified with 37 unit tests, TypeScript, ESLint, a production build, and Chromium regression tests for timeout, HTTP 500, and network failure behavior.
- [x] Fix false “Message Sent!” success on HTTP 500 responses
  - Replaced direct browser `no-cors` submissions with the same-origin `POST /api/leads` server proxy.
  - The proxy validates each request, selects the template's server-side Apps Script endpoint, and reports success only after an HTTP-successful response containing `{ "ok": true }`.
  - Failed, malformed, rejected, unreachable, and HTTP-error responses now display the existing error state without clearing the visitor's form values.
  - Added route and browser regression tests for success, HTTP 500, `ok: false`, malformed JSON, network failure, duplicate clicks, and value preservation.
  - Verified `npm run test:unit` (36 tests), type checking, linting, the production build, and the targeted Chromium resilience tests.
  - Sent one labelled lead through the new production-built proxy for each template, confirmed exactly one correct row per Leads sheet with the `+94 00 000 0000` phone preserved as text, then deleted the five exact rows; final searches found zero test rows.
- [x] Fix phone numbers beginning with `+` being stored as `#ERROR!`
  - Moved the five local reference scripts into `GoogleAppsScript/` and updated each Apps Script to format the Leads Phone column as text.
  - Added text-safe handling for all user-entered lead fields so values beginning with `=`, `+`, `-`, or `@` cannot be interpreted as spreadsheet formulas.
  - Deployed all five Apps Script versions and submitted one labelled `+94 00 000 0000` test lead per template.
  - Verified all five Phone cells had string-valued user-entered and effective values with the leading `+` preserved and no formula or `#ERROR!`.
  - Deleted the five exact test rows after rereading them; final searches confirmed zero test rows remain in every Leads sheet.
- [x] Roll out Gym membership button links to the live Google Sheet
  - Update/deploy `GoogleAppsScript/gym-google-apps-script.js`, run `addMissingSettingsRows()`, and populate `membership.1.link`, `membership.2.link`, and `membership.3.link` in the Gym sheet.

# v.0.5.1  (Pushed)
## Completed
- [x] Add an environment-controlled image-host policy
  - Added `ALLOW_ANY_IMAGE_HOSTS=true` to allow any HTTPS image hostname through `next/image` when desired.
  - The default remains the restricted `remotePatterns` allowlist when the variable is missing or not set to `true`.
- [x] Render the spreadsheet `logo` value in template branding
  - Added reusable `BrandLogo` rendering with the existing template icon as a fallback.
  - Applied it to desktop/mobile navbars and footers across all five templates.
- [x] Complete the remaining Google Sheets-to-site mappings
  - All configured social links now render in every template footer.
  - Salon booking links now open a configured HTTP(S) booking service, with a safe Contact fallback for blank, unsafe, and legacy `#booking` values.
  - Real Estate property cards now use the Sheet type, currency, features, and every supplied image.
  - Tuition now displays Sheet testimonials and achievement icons.
  - Gym and Restaurant About images, plus Salon opening-hours text, are now editable from Settings sheets.
- [x] Make the new Settings fields safe to add to existing Google Sheets
  - Added `addMissingSettingsRows()` to the Gym, Restaurant, and Salon Apps Script files; it appends only missing Settings rows and does not clear existing entries.


# v.0.5.0  (Pushed)
## Performance Enhancement Update
### High Priority
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

### Medium Priority
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

### Low Priority
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
