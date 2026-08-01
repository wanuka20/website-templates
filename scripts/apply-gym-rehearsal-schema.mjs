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

const schema = await readFile(
  resolve(process.cwd(), "db/migrations/0001_gym_rehearsal_schema.sql"),
  "utf8",
);
const client = createGymRehearsalClient(connectionString);

try {
  await client.connect();
  await client.query(schema);
  const result = await client.query(
    "SELECT count(*)::int AS table_count FROM information_schema.tables WHERE table_schema = 'public' AND table_name = ANY($1::text[])",
    [["customers", "sites", "domains", "site_content", "site_revisions", "leads"]],
  );

  if (result.rows[0].table_count !== 6) {
    throw new Error("schema verification failed");
  }

  console.log("Gym rehearsal schema applied and verified (6 tables).");
} catch (error) {
  console.error(`Gym rehearsal schema was not applied (${safeDatabaseErrorCode(error)}). Verify the local rehearsal URL and database permissions without sharing the URL.`);
  process.exitCode = 1;
} finally {
  await client.end().catch(() => {});
}
