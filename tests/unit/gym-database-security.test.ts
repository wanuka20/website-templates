import { readFile } from "node:fs/promises";
import { resolve } from "node:path";
import { describe, expect, it } from "vitest";

const migrationPath = resolve(
  process.cwd(),
  "db/foundation/migrations/0002_gym_database_security.sql",
);

async function readMigration() {
  return readFile(migrationPath, "utf8");
}

describe("Gym database security migration", () => {
  it("creates non-login, non-bypass capability roles", async () => {
    const migration = await readMigration();

    for (const role of [
      "website_templates_migrator",
      "website_templates_runtime",
    ]) {
      expect(migration).toMatch(new RegExp(
        `CREATE ROLE ${role}[\\s\\S]*?NOLOGIN[\\s\\S]*?NOSUPERUSER[\\s\\S]*?NOCREATEDB[\\s\\S]*?NOCREATEROLE[\\s\\S]*?NOREPLICATION[\\s\\S]*?NOBYPASSRLS`,
      ));
    }

    expect(migration).toContain(
      "rolcanlogin OR rolsuper OR rolcreatedb OR rolcreaterole OR rolreplication OR rolbypassrls",
    );
    expect(migration).not.toMatch(
      /ALTER ROLE website_templates_(?:migrator|runtime)\s+NOLOGIN/,
    );
  });

  it("enables and forces RLS on every foundation table", async () => {
    const migration = await readMigration();

    for (const table of [
      "customers",
      "sites",
      "domains",
      "site_content",
      "site_revisions",
      "leads",
    ]) {
      expect(migration).toContain(
        `ALTER TABLE public.${table} ENABLE ROW LEVEL SECURITY;`,
      );
      expect(migration).toContain(
        `ALTER TABLE public.${table} FORCE ROW LEVEL SECURITY;`,
      );
      expect(migration).toMatch(new RegExp(
        `CREATE POLICY migration_all_${table}[\\s\\S]*?ON public\\.${table}[\\s\\S]*?TO website_templates_migrator[\\s\\S]*?USING \\(true\\) WITH CHECK \\(true\\)`,
      ));
    }
  });

  it("keeps tenant context private, signed, and transaction-bound", async () => {
    const migration = await readMigration();

    expect(migration).toContain("CREATE SCHEMA app_private");
    expect(migration).toContain("REVOKE ALL ON SCHEMA app_private FROM PUBLIC");
    expect(migration).toMatch(/CREATE TABLE app_private\.tenant_context_secret/);
    expect(migration).toMatch(/gen_random_bytes\(32\)/);
    expect(migration).toMatch(/REVOKE ALL ON TABLE app_private\.tenant_context_secret[\s\S]*?website_templates_runtime/);
    expect(migration).toMatch(/pg_backend_pid\(\)/);
    expect(migration).toMatch(/pg_current_xact_id\(\)/);
    expect(migration).toMatch(/pg_current_xact_id_if_assigned\(\)/);
    expect(migration).toMatch(/hmac\(/);
    expect(migration).toMatch(/set_config\('app\.site_id'/);
    expect(migration).toMatch(/set_config\('app\.site_transaction_id'/);
    expect(migration).toMatch(/set_config\('app\.site_signature'/);
    expect(migration).toMatch(/claimed_signature <> expected_signature/);
  });

  it("activates context from an active hostname rather than a claimed site ID", async () => {
    const migration = await readMigration();
    const resolver = migration.match(
      /CREATE FUNCTION app_private\.activate_site_context\(p_hostname text\)([\s\S]*?)ALTER FUNCTION app_private\.activate_site_context/,
    )?.[1];

    expect(resolver).toBeTruthy();
    expect(resolver).toMatch(/domain\.hostname = normalized_hostname/);
    expect(resolver).toMatch(/domain\.status = 'active'/);
    expect(resolver).toMatch(/site\.status = 'active'/);
    expect(resolver).toMatch(/site\.template_key = 'gym'/);
    expect(resolver).not.toMatch(/p_site_id/);
    expect(migration).toContain(
      "REVOKE ALL ON FUNCTION app_private.activate_site_context(text) FROM PUBLIC",
    );
  });

  it("gives the runtime only published reads and site-scoped lead inserts", async () => {
    const migration = await readMigration();

    expect(migration).toMatch(
      /runtime_active_site_select[\s\S]*?id = \(SELECT app_private\.current_site_id\(\)\)[\s\S]*?status = 'active'/,
    );
    expect(migration).toMatch(
      /runtime_published_revision_select[\s\S]*?site_id = \(SELECT app_private\.current_site_id\(\)\)[\s\S]*?state = 'published'[\s\S]*?published_revision_id = site_revisions\.id/,
    );
    expect(migration).toMatch(
      /runtime_site_lead_insert[\s\S]*?FOR INSERT TO website_templates_runtime[\s\S]*?site_id = \(SELECT app_private\.current_site_id\(\)\)[\s\S]*?site\.status = 'active'[\s\S]*?site\.template_key = 'gym'/,
    );
    expect(migration).toContain(
      "GRANT SELECT ON TABLE public.sites, public.site_revisions",
    );
    expect(migration).toContain(
      "GRANT INSERT (site_id, name, email, phone, subject, message, source_route)",
    );
    expect(migration).not.toMatch(
      /GRANT (?:SELECT|UPDATE|DELETE|ALL PRIVILEGES)[^;]*public\.leads[^;]*website_templates_runtime/i,
    );
    expect(migration).not.toMatch(
      /GRANT [^;]*(?:public\.customers|public\.domains|public\.site_content)[^;]*website_templates_runtime/i,
    );
  });

  it("adds database checks for normalized flags and validated lead lengths", async () => {
    const migration = await readMigration();

    for (const flag of [
      "membership",
      "trainers",
      "classSchedule",
      "testimonials",
      "gallery",
      "whatsapp",
    ]) {
      expect(migration).toContain(`'${flag}'`);
    }

    expect(migration).toContain("site_content_schema_version_v1");
    expect(migration).toContain("site_revisions_schema_version_v1");
    expect(migration).toContain("site_content_feature_flags_valid");
    expect(migration).toContain("site_revisions_feature_flags_valid");
    expect(migration).toContain("leads_name_length");
    expect(migration).toContain("leads_email_length");
    expect(migration).toContain("leads_message_length");
  });
});
