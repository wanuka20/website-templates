import { readFile } from "node:fs/promises";
import { resolve } from "node:path";
import { describe, expect, it } from "vitest";

const migrationPath = resolve(process.cwd(), "db/foundation/migrations/0001_gym_multitenant_schema.sql");

async function readMigration() {
  return readFile(migrationPath, "utf8");
}

describe("Gym multi-tenant foundation migration", () => {
  it("creates the required shared-schema tables", async () => {
    const migration = await readMigration();

    for (const table of ["customers", "sites", "domains", "site_content", "site_revisions", "leads"]) {
      expect(migration).toMatch(new RegExp(`CREATE TABLE ${table} \\(`));
    }
  });

  it("anchors every tenant-owned table to one site", async () => {
    const migration = await readMigration();

    for (const table of ["domains", "site_content", "site_revisions", "leads"]) {
      const tableBody = migration.match(new RegExp(`CREATE TABLE ${table} \\(([\\s\\S]*?)(?:\\n\\);)`));
      expect(tableBody?.[1]).toMatch(/site_id uuid (?:(?:NOT NULL )?(?:PRIMARY KEY )|NOT NULL )REFERENCES sites\(id\) ON DELETE RESTRICT/);
    }

    expect(migration).toMatch(/customer_id uuid NOT NULL REFERENCES customers\(id\) ON DELETE RESTRICT/);
  });

  it("enforces unique normalized hostnames and prevents cross-site published revisions", async () => {
    const migration = await readMigration();

    expect(migration).toMatch(/CONSTRAINT domains_hostname_unique UNIQUE \(hostname\)/);
    expect(migration).toMatch(/hostname = lower\(hostname\)/);
    expect(migration).toMatch(/FOREIGN KEY \(published_revision_id, id\)[\s\S]*?REFERENCES site_revisions \(id, site_id\)/);
    expect(migration).toMatch(/FOREIGN KEY \(supersedes_revision_id, site_id\)[\s\S]*?REFERENCES site_revisions \(id, site_id\)/);
  });

  it("stores only Gym records with named variants and separate content data", async () => {
    const migration = await readMigration();

    expect(migration).toMatch(/template_key text NOT NULL CHECK \(template_key = 'gym'\)/);
    expect(migration).toMatch(/content jsonb NOT NULL CHECK \(jsonb_typeof\(content\) = 'object'\)/);
    expect(migration).toMatch(/visual_variant text NOT NULL CHECK \(visual_variant IN \('classic', 'editorial'\)\)/);
    expect(migration).toMatch(/feature_flags jsonb NOT NULL DEFAULT '\{\}'::jsonb CHECK \(jsonb_typeof\(feature_flags\) = 'object'\)/);
  });
});
