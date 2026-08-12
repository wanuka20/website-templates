import { readFile } from "node:fs/promises";
import { resolve } from "node:path";
import { describe, expect, it } from "vitest";
import { parseGymContentRecord } from "@/lib/gym-content-model";

const seedPath = resolve(
  process.cwd(),
  "db/foundation/seeds/0001_two_isolated_gym_sites.sql",
);

async function readSeed() {
  return readFile(seedPath, "utf8");
}

function extractContent(seed: string, label: "northstar" | "harbour") {
  const match = seed.match(new RegExp(`\\$${label}\\$([\\s\\S]*?)\\$${label}\\$`));

  if (!match) throw new Error(`Missing ${label} content document`);
  return JSON.parse(match[1]);
}

describe("Gym foundation staging seed", () => {
  it("contains two valid and visibly different Gym content records", async () => {
    const seed = await readSeed();
    const northstar = extractContent(seed, "northstar");
    const harbour = extractContent(seed, "harbour");

    expect(() => parseGymContentRecord({
      template_key: "gym",
      schema_version: 1,
      content: northstar,
      visual_variant: "classic",
      feature_flags: {
        membership: true,
        trainers: true,
        classSchedule: true,
        testimonials: true,
        gallery: true,
        whatsapp: true,
      },
    })).not.toThrow();
    expect(() => parseGymContentRecord({
      template_key: "gym",
      schema_version: 1,
      content: harbour,
      visual_variant: "editorial",
      feature_flags: {
        membership: true,
        trainers: true,
        classSchedule: true,
        testimonials: true,
        gallery: false,
        whatsapp: false,
      },
    })).not.toThrow();
    expect(northstar.name).not.toBe(harbour.name);
    expect(northstar.city).not.toBe(harbour.city);
  });

  it("is synthetic, idempotent, and writes through the migrator capability", async () => {
    const seed = await readSeed();

    expect(seed).toContain("SET LOCAL ROLE website_templates_migrator");
    expect(seed).toContain("northstar-gym.staging.test");
    expect(seed).toContain("harbour-gym.staging.test");
    expect(seed.match(/@example\.test/g)?.length).toBe(7);
    expect(seed.match(/ON CONFLICT/g)?.length).toBe(6);
    expect(seed).not.toMatch(/\bDELETE\b|\bTRUNCATE\b|\bDROP\b/);
  });

  it("seeds two published revisions and five site-owned leads", async () => {
    const seed = await readSeed();

    expect(seed).toContain("'23000000-0000-4000-8000-000000000001'::uuid");
    expect(seed).toContain("'23000000-0000-4000-8000-000000000002'::uuid");
    expect(seed.match(/'24000000-0000-4000-8000-00000000000[1-5]'/g)?.length).toBe(5);
    expect(seed).toContain("published_revision_id = CASE id");
  });
});
