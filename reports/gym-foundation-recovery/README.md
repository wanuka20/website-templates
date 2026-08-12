# Gym foundation recovery evidence

This folder contains safe proof from the separate synthetic
foundation staging project:

- `source-manifest.json` from the source branch immediately before its
  snapshot;
- `restore-verification.json` from the separate restored validation branch.

The evidence contains counts and SHA-256 hashes only. It must never contain a
database URL, credential, customer field, lead field, or production value.

The 2026-08-02 proof used Neon project `website-templates-gym-staging`, source
branch `production`, and the separate restored branch
`v0.6.0-restore-proof-2026-08-02`. All six table counts and SHA-256 content
hashes matched, both tenant runtime checks exposed only the selected Gym, and
the source manifest still matched after the restore. This is synthetic
foundation evidence; it is not production readiness or the v0.5.7 rehearsal.

The direct PostgreSQL socket path from this workstation was not available for
this run, so the same content-safe count/hash queries were executed in Neon's
authenticated SQL editor. The committed verifier remains the repeatable
read-only command for an environment with direct PostgreSQL access.
