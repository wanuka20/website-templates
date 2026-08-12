# Gym Multi-Tenant Foundation Migrations

The future Neon-backed Gym lineage currently contains:

- `migrations/0001_gym_multitenant_schema.sql` for the shared tenant schema;
- `migrations/0002_gym_database_security.sql` for least-privilege capability
  roles, forced row-level security, transaction-bound hostname context,
  runtime policies, and additional write constraints;
- `migrations/0003_gym_timestamps_and_recovery.sql` for UTC database and
  capability-role session defaults;
- `seeds/0001_two_isolated_gym_sites.sql` for two idempotent, synthetic-only
  Gym tenants with distinct content, domains, leads, variants, and features.

These files are **not** replacements for the synthetic v0.5.7 rehearsal file
under `db/migrations/` and are not yet wired to a guarded apply command.

That separation is intentional:

- `db/migrations/0001_gym_rehearsal_schema.sql` and its scripts are retained
  only as synthetic rehearsal evidence. They must not be pointed at local,
  staging, or production customer databases.
- This foundation lineage is the future source for a guarded migration runner.
  The runner still requires a future explicit local, staging, or production
  target guard. The 2026-08-02 approved staging apply was performed through
  Neon's authenticated SQL editor because direct PostgreSQL access was not
  available from this workstation.

## Ownership model

The migration creates one shared schema. `customers` is the commercial owner;
`sites` belongs to a customer; every tenant-owned table (`domains`,
`site_content`, `site_revisions`, and `leads`) contains a non-null `site_id`
foreign key. The database does not create a schema, project, or database per
customer.

`sites.published_revision_id` uses a composite foreign key to
`site_revisions (id, site_id)`. A revision from one site therefore cannot be
set as the published revision of another site, even if its UUID is known.

The migrations still leave the server repository, authenticated internal
manager policies, environment-specific LOGIN roles, guarded apply runner, and
production connection to planned follow-up tasks. They must not be applied to
production or connected to Vercel without separate explicit approval.

## Timestamps and recovery

All foundation timestamp columns use `timestamptz`; migration `0003` keeps
database and capability-role sessions in UTC. Human-facing operational times
are formatted in `Asia/Colombo` through `lib/operational-time.ts`.

The read-only recovery verifier captures row counts and SHA-256 hashes before
a staging snapshot, then compares them with a separate restored branch. It
does not emit row contents or credentials. The approved 2026-08-02 synthetic
staging proof matched all six tables, kept the source unchanged, and retained
the snapshot/restore branch for inspection. See
`docs/v0.6.0-timestamps-backup-and-recovery.md` for the exact gate and runbook.

## Gym content contract

The code-owned runtime contract is defined in
`lib/gym-content-model.ts` and documented in
`docs/v0.6.0-gym-content-model.md`. It fixes `template_key` to `gym`, versions
the nested Gym marketing content independently from shared renderer code, and
uses the same `classic`/`editorial` allowlist as the renderer selector.

The initial named feature flags are `membership`, `trainers`,
`classSchedule`, `testimonials`, `gallery`, and `whatsapp`. They default to the
current enabled behavior. Future database writes and publishing must parse the
complete record with this schema; the JSON object checks in PostgreSQL do not
replace nested runtime validation.

## Security model

`migrations/0002_gym_database_security.sql` creates separate NOLOGIN migrator
and runtime capability roles. Both are non-superuser and `NOBYPASSRLS`. Forced
RLS applies to every foundation table, while the runtime can only resolve an
active Gym hostname, read that site's selected published revision, and insert
a lead whose `site_id` matches the transaction context.

The transaction context is stored in the private `app_private` schema and is
bound to the PostgreSQL backend plus transaction ID. The runtime cannot set a
raw site ID. It has no direct customer/domain/draft/lead-read access and no
update or delete grants. See `docs/v0.6.0-database-security.md` for credential
separation, policy details, and the required disposable-local verification
before any staging or production apply.
