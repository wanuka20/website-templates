# Gym Migration Rehearsal (v0.5.7)

## Purpose and boundary

This package rehearses the first Gym database migration without contacting Google Sheets, Apps Script, Vercel, customer domains, live leads, or production databases. It is Gym-only and uses the checked-in synthetic fixture in `fixtures/gym-migration-rehearsal.json`.

No fixture value may be copied from a customer, a live lead, or an unexported Sheet. `*.rehearsal.test` hostnames and `example.test` email addresses are reserved test-only values.

## Existing Gym field map

The current loader accepts flat Google Sheets keys and normalizes them in `lib/template-content.ts`. The database target is a validated Gym content JSON document plus relational site/domain/lead records.

| Current category | Rehearsal target |
| --- | --- |
| Brand, hero, address, social, and WhatsApp | `site_content.content` |
| SEO title, description, keywords, and Open Graph image | `site_content.content.seo` |
| About and gallery image references | `site_content.content`; asset ownership remains v0.6.4 work |
| Amenities, plans, trainers, classes, and testimonials | `site_content.content` |
| Theme Template | `sites.visual_variant` (`classic` or `editorial`) |
| Google Sheets Leads rows | `leads`, scoped by trusted server-derived `site_id` in v0.6.3 |
| Apps Script settings, help, and formulas | future admin screens, migration audit exports, or retirement after the pilot |

This is a code-based map, not proof of parity with a live Gym Sheet. A separately approved read-only export and reconciliation is required in v0.6.2 before production cutover.

## Local dry run

Run `npm.cmd run test:migration:rehearsal`. It validates the two fixed synthetic sites, content/image/lead counts, and cross-site request/target pairs without making a cloud connection. The deterministic report is written to `reports/gym-migration-rehearsal/dry-run.json`.

## Neon rehearsal result

On 2026-08-02, the approved Neon Free project `website-templates-gym-rehearsal` was verified before writing. Its `neondb` database contained zero rehearsal tables. The schema and fixture were then applied atomically through Neon SQL Editor because the local Node driver path was timing out.

The committed result contains six tables, two synthetic customers/sites/domains/content documents, zero revisions, and five synthetic leads. Read-only checks passed for schema count, per-site content/image/lead parity, synthetic-only email/domain markers, and both cross-site request/target directions returning zero rows.

The first browser transaction failed on a missing UUID cast in the SQL Editor-only lead statement and was explicitly rolled back before retrying. The corrected transaction committed successfully. The checked-in JavaScript seed runner uses query parameters and did not contain that SQL Editor-only type issue.

## Local timeout root cause and workaround

Safe diagnostics confirmed all of the following on Node 24.16.0 and Windows:

- Neon DNS returned both IPv4 and IPv6 records.
- Raw IPv4 TCP connections to pooled and direct Neon endpoints succeeded.
- The PostgreSQL SSL request and certificate-verified TLS 1.3 handshake succeeded over IPv4.
- IPv6 candidates timed out.
- The positional `net.Socket.connect(port, host)` path used by `pg` 8.22.0 timed out for both pooled and direct endpoints, while `connect({ port, host, family: 4 })` succeeded.

`scripts/gym-rehearsal-pg-client.mjs` therefore forces IPv4 only for these guarded rehearsal commands and sets `sslmode=verify-full`. This is a local runner workaround, not a production database design decision.

## Guarded local commands

Keep the non-production connection string only in ignored `.env.local`:

```text
GYM_REHEARSAL_DATABASE_URL=postgresql://USER:PASSWORD@HOST/REHEARSAL_DB?sslmode=verify-full
```

Never paste the value into chat, commit it, configure it in Vercel, or reuse production credentials. The original 7948 task worktree and its ignored secret were removed during task handoff; no secret was copied into this worktree.

The remote schema already exists, so do not rerun `db:rehearsal:apply` against the current project unless starting with a new empty rehearsal database. `npm.cmd run db:rehearsal:seed` is idempotent for the two fixed synthetic site IDs and can refresh only their fixture rows after a new local non-production URL is configured.

## Acceptance boundary and remaining work

The data-shape, two-site fixture, and synthetic backup-restoration rehearsal passed. Runtime roles and row-level security remain deliberately deferred to v0.6.0, so this result does not prove production-grade authorization. Do not connect this database to the site, Vercel, Sheets, Apps Script, or live lead paths.

Before any production cutover, separately prove least-privilege runtime access, server-derived `site_id`, row-level defense in depth, approved live-source reconciliation, backup restoration, browser behavior, and rollback.

## Synthetic backup-restoration proof

On 2026-08-02, the Neon Free project's `production` branch was checked before backup using one read-only count query. A manual snapshot named `v0.5.7 synthetic baseline 2026-08-02` was then restored with Neon's multi-step workflow into the separate `v0.5.7-restore-proof-2026-08-02` branch. Multi-step restore was chosen because it creates an inspectable branch and leaves the source branch and its connection unchanged.

The restore completed in 0.55 seconds. The same read-only query was run against the restored branch and then against the original branch again. All three checkpoints matched:

| Check | Source before | Restored branch | Source after |
| --- | ---: | ---: | ---: |
| `customers` | 2 | 2 | 2 |
| `sites` | 2 | 2 | 2 |
| `domains` | 2 | 2 | 2 |
| `site_content` | 2 | 2 | 2 |
| `site_revisions` | 0 | 0 | 0 |
| `leads` | 5 | 5 | 5 |
| Northstar leads | 2 | 2 | 2 |
| Harbour leads | 3 | 3 | 3 |
| Domains outside `*.rehearsal.test` | 0 | 0 | 0 |
| Lead emails outside `*@example.test` | 0 | 0 | 0 |

The safe machine-readable record is in `reports/gym-migration-rehearsal/backup-restore-2026-08-02.json`. It contains branch IDs and counts but no database URL, role password, lead message text, customer data, or other secret.

The snapshot and restored branch are retained temporarily as inspectable rehearsal evidence. They are not default, are not wired to any application or deployment, and contain only the checked-in synthetic fixture. They can be deleted later through an explicitly approved cleanup after the evidence is reviewed.

This completes the **v0.5.7 synthetic rehearsal acceptance gate only**. It does not complete the later production-readiness gate or replace the v0.6.2 live-source backup/reconciliation and v0.6.0 security work.

Neon's current snapshot workflow supports restoring to a separate preview branch for inspection: [Database versioning with snapshots](https://neon.com/docs/ai/ai-database-versioning).
