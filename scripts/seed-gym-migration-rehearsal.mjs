import { readFile } from "node:fs/promises";
import { resolve } from "node:path";
import { createGymRehearsalClient } from "./gym-rehearsal-pg-client.mjs";

const connectionString = process.env.GYM_REHEARSAL_DATABASE_URL;
const safeDatabaseErrorCode = (error) => {
  const code = typeof error === "object" && error && "code" in error ? error.code : undefined;
  return ["ECONNREFUSED", "ECONNRESET", "ENOTFOUND", "ETIMEDOUT", "28P01", "3D000", "42501", "42710", "42P07"].includes(code)
    ? code
    : "unknown";
};

if (!connectionString) {
  console.error("Refusing to connect: set GYM_REHEARSAL_DATABASE_URL in ignored .env.local.");
  process.exit(1);
}

const fixture = JSON.parse(await readFile(resolve(process.cwd(), "fixtures/gym-migration-rehearsal.json"), "utf8"));
const client = createGymRehearsalClient(connectionString);

try {
  await client.connect();
  await client.query("BEGIN");

  for (const site of fixture.sites) {
    await client.query(
      "INSERT INTO customers (id, display_name) VALUES ($1, $2) ON CONFLICT (id) DO UPDATE SET display_name = EXCLUDED.display_name, updated_at = now()",
      [site.customerId, site.content.name],
    );
    await client.query(
      "INSERT INTO sites (id, customer_id, template_key, display_name, status, visual_variant) VALUES ($1, $2, 'gym', $3, 'active', $4) ON CONFLICT (id) DO UPDATE SET customer_id = EXCLUDED.customer_id, display_name = EXCLUDED.display_name, status = EXCLUDED.status, visual_variant = EXCLUDED.visual_variant, updated_at = now()",
      [site.siteId, site.customerId, site.content.name, site.visualVariant],
    );
    await client.query(
      "INSERT INTO domains (site_id, hostname, status, is_primary) VALUES ($1, $2, 'active', true) ON CONFLICT (hostname) DO UPDATE SET site_id = EXCLUDED.site_id, status = EXCLUDED.status, is_primary = EXCLUDED.is_primary",
      [site.siteId, site.domain],
    );
    await client.query(
      "INSERT INTO site_content (site_id, schema_version, content, source) VALUES ($1, 1, $2::jsonb, 'migration_rehearsal') ON CONFLICT (site_id) DO UPDATE SET schema_version = EXCLUDED.schema_version, content = EXCLUDED.content, source = EXCLUDED.source, updated_at = now()",
      [site.siteId, JSON.stringify(site.content)],
    );
    await client.query("DELETE FROM leads WHERE site_id = $1", [site.siteId]);
    for (let index = 1; index <= site.leadCount; index += 1) {
      await client.query(
        "INSERT INTO leads (site_id, name, email, phone, subject, message) VALUES ($1, $2, $3, $4, $5, $6)",
        [site.siteId, `Synthetic Lead ${index}`, `lead-${index}@example.test`, "+94 00 000 0000", "Synthetic rehearsal", "This is synthetic rehearsal data."],
      );
    }
  }

  await client.query("COMMIT");
  console.log(`Gym rehearsal fixture seeded: ${fixture.sites.length} synthetic sites.`);
} catch (error) {
  await client.query("ROLLBACK").catch(() => {});
  console.error(`Gym rehearsal seed was not completed (${safeDatabaseErrorCode(error)}). Verify the local rehearsal URL and schema without sharing the URL.`);
  process.exitCode = 1;
} finally {
  await client.end().catch(() => {});
}
