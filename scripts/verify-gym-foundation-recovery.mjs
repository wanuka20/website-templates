import { mkdir, readFile, writeFile } from "node:fs/promises";
import { dirname, resolve } from "node:path";
import pg from "pg";

const root = process.cwd();
const mode = process.argv[2];
const connectionString = process.env.GYM_FOUNDATION_RECOVERY_DATABASE_URL;
const target = process.env.GYM_FOUNDATION_RECOVERY_TARGET;
const manifestPath = resolve(
  root,
  process.env.GYM_FOUNDATION_RECOVERY_MANIFEST_PATH
    ?? "reports/gym-foundation-recovery/source-manifest.json",
);
const reportPath = resolve(
  root,
  process.env.GYM_FOUNDATION_RECOVERY_REPORT_PATH
    ?? "reports/gym-foundation-recovery/restore-verification.json",
);
const tables = [
  ["customers", "id"],
  ["sites", "id"],
  ["domains", "id"],
  ["site_content", "site_id"],
  ["site_revisions", "id"],
  ["leads", "id"],
];

function fail(message) {
  throw new Error(message);
}

if (!["capture", "verify"].includes(mode)) {
  fail("Usage: node scripts/verify-gym-foundation-recovery.mjs <capture|verify>");
}

if (!connectionString) {
  fail("GYM_FOUNDATION_RECOVERY_DATABASE_URL is required");
}

const expectedTarget = mode === "capture" ? "staging-source" : "staging-restore";
if (target !== expectedTarget) {
  fail(`GYM_FOUNDATION_RECOVERY_TARGET must be ${expectedTarget} for ${mode}`);
}

const client = new pg.Client({
  connectionString,
  connectionTimeoutMillis: 15_000,
});

async function inspectDatabase() {
  const timezoneResult = await client.query("SHOW timezone");
  const timestampColumnResult = await client.query(`
    SELECT count(*)::integer AS count
    FROM information_schema.columns
    WHERE table_schema = 'public'
      AND table_name = ANY($1::text[])
      AND data_type = 'timestamp without time zone'
  `, [tables.map(([table]) => table)]);
  const tableEvidence = {};

  for (const [table, key] of tables) {
    const result = await client.query(`
      SELECT
        count(*)::integer AS row_count,
        encode(
          digest(coalesce(string_agg(row_digest, '' ORDER BY row_key), ''), 'sha256'),
          'hex'
        ) AS sha256
      FROM (
        SELECT
          ${key}::text AS row_key,
          encode(digest(to_jsonb(row_data)::text, 'sha256'), 'hex') AS row_digest
        FROM public.${table} AS row_data
      ) AS stable_rows
    `);
    tableEvidence[table] = {
      rowCount: result.rows[0].row_count,
      sha256: result.rows[0].sha256,
    };
  }

  return {
    sessionTimeZone: timezoneResult.rows[0].TimeZone,
    timestampWithoutTimeZoneColumns: timestampColumnResult.rows[0].count,
    tables: tableEvidence,
  };
}

await client.connect();

try {
  await client.query("BEGIN READ ONLY");
  const evidence = await inspectDatabase();
  await client.query("COMMIT");

  if (mode === "capture") {
    const manifest = {
      formatVersion: 1,
      capturedAtUtc: new Date().toISOString(),
      target: "staging-source",
      ...evidence,
    };
    await mkdir(dirname(manifestPath), { recursive: true });
    await writeFile(manifestPath, `${JSON.stringify(manifest, null, 2)}\n`);
    console.log(`Recovery source manifest written to ${manifestPath}`);
  } else {
    const source = JSON.parse(await readFile(manifestPath, "utf8"));
    const comparisons = Object.fromEntries(
      tables.map(([table]) => [
        table,
        {
          expectedRowCount: source.tables?.[table]?.rowCount,
          restoredRowCount: evidence.tables[table].rowCount,
          rowCountMatches:
            source.tables?.[table]?.rowCount === evidence.tables[table].rowCount,
          contentHashMatches:
            source.tables?.[table]?.sha256 === evidence.tables[table].sha256,
        },
      ]),
    );
    const report = {
      formatVersion: 1,
      verifiedAtUtc: new Date().toISOString(),
      sourceCapturedAtUtc: source.capturedAtUtc,
      target: "staging-restore",
      sessionTimeZone: evidence.sessionTimeZone,
      timestampWithoutTimeZoneColumns: evidence.timestampWithoutTimeZoneColumns,
      comparisons,
      passed:
        source.formatVersion === 1
        && source.target === "staging-source"
        && source.sessionTimeZone === "UTC"
        && source.timestampWithoutTimeZoneColumns === 0
        && evidence.sessionTimeZone === "UTC"
        && evidence.timestampWithoutTimeZoneColumns === 0
        && Object.values(comparisons).every(
          (comparison) => comparison.rowCountMatches && comparison.contentHashMatches,
        ),
    };
    await mkdir(dirname(reportPath), { recursive: true });
    await writeFile(reportPath, `${JSON.stringify(report, null, 2)}\n`);
    console.log(`Recovery verification ${report.passed ? "passed" : "failed"}: ${reportPath}`);
    if (!report.passed) process.exitCode = 1;
  }
} catch (error) {
  await client.query("ROLLBACK").catch(() => undefined);
  throw error;
} finally {
  await client.end();
}
