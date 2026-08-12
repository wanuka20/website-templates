import { readFile } from "node:fs/promises";
import { resolve } from "node:path";
import { describe, expect, it } from "vitest";

const root = process.cwd();

describe("Gym timestamp and recovery foundation", () => {
  it("uses timestamptz for every timestamp column in the foundation schema", async () => {
    const schema = await readFile(
      resolve(root, "db/foundation/migrations/0001_gym_multitenant_schema.sql"),
      "utf8",
    );

    expect(schema).not.toMatch(/\btimestamp(?!tz)\b/i);
    expect(schema.match(/\btimestamptz\b/g)?.length).toBe(13);
  });

  it("sets database and capability-role timezone defaults to UTC", async () => {
    const migration = await readFile(
      resolve(root, "db/foundation/migrations/0003_gym_timestamps_and_recovery.sql"),
      "utf8",
    );

    expect(migration).toContain("ALTER DATABASE %I SET timezone TO %L");
    expect(migration).toContain("current_database()");
    expect(migration).toContain(
      "ALTER ROLE website_templates_migrator SET timezone TO 'UTC'",
    );
    expect(migration).toContain(
      "ALTER ROLE website_templates_runtime SET timezone TO 'UTC'",
    );
  });

  it("keeps recovery comparison read-only and excludes row contents", async () => {
    const script = await readFile(
      resolve(root, "scripts/verify-gym-foundation-recovery.mjs"),
      "utf8",
    );

    expect(script).toContain('client.query("BEGIN READ ONLY")');
    expect(script).toContain("digest(to_jsonb(row_data)::text, 'sha256')");
    expect(script).toContain("rowCountMatches");
    expect(script).toContain("contentHashMatches");
    expect(script).not.toMatch(/SELECT \*/i);
    expect(script).not.toMatch(/console\.(?:log|error)\([^\n]*connectionString/);
  });

  it("retains a passing, content-safe staging restore report", async () => {
    const source = JSON.parse(await readFile(
      resolve(root, "reports/gym-foundation-recovery/source-manifest.json"),
      "utf8",
    ));
    const report = JSON.parse(await readFile(
      resolve(root, "reports/gym-foundation-recovery/restore-verification.json"),
      "utf8",
    ));

    expect(source.target).toBe("staging-source");
    expect(source.sessionTimeZone).toBe("UTC");
    expect(source.timestampWithoutTimeZoneColumns).toBe(0);
    expect(report.target).toBe("staging-restore");
    expect(report.sourceUnchanged).toBe(true);
    expect(report.passed).toBe(true);
    expect(Object.keys(report.comparisons)).toEqual([
      "customers",
      "sites",
      "domains",
      "site_content",
      "site_revisions",
      "leads",
    ]);
    const comparisons = Object.values(report.comparisons as Record<string, {
      rowCountMatches: boolean;
      contentHashMatches: boolean;
    }>);
    expect(comparisons.every((comparison) => (
      comparison.rowCountMatches && comparison.contentHashMatches
    ))).toBe(true);
    expect(JSON.stringify({ source, report })).not.toMatch(
      /postgres(?:ql)?:\/\/|password|connectionString|@(?:gmail|hotmail|outlook)\./i,
    );
  });
});
