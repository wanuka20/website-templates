import { describe, expect, it } from "vitest";
import { gymConfig } from "@/config/gym";
import {
  defaultGymFeatureFlags,
  GYM_CONTENT_SCHEMA_VERSION,
  GYM_TEMPLATE_KEY,
  gymContentRecordSchema,
  gymFeatureFlagsSchema,
  gymVisualVariants,
  parseGymContentRecord,
} from "@/lib/gym-content-model";

function validRecord() {
  const { themeTemplate: _legacyTheme, ...content } = gymConfig;

  return {
    template_key: GYM_TEMPLATE_KEY,
    schema_version: GYM_CONTENT_SCHEMA_VERSION,
    content,
    visual_variant: "classic",
    feature_flags: defaultGymFeatureFlags,
  };
}

describe("Gym database content model", () => {
  it("accepts the current Gym content with a separate named visual variant", () => {
    const record = parseGymContentRecord(validRecord());

    expect(record.template_key).toBe("gym");
    expect(record.schema_version).toBe(1);
    expect(record.visual_variant).toBe("classic");
    expect(record.content).not.toHaveProperty("themeTemplate");
    expect(gymVisualVariants).toEqual(["classic", "editorial"]);
  });

  it("defaults every named feature to today's enabled behavior", () => {
    expect(gymFeatureFlagsSchema.parse({})).toEqual({
      membership: true,
      trainers: true,
      classSchedule: true,
      testimonials: true,
      gallery: true,
      whatsapp: true,
    });
  });

  it("rejects another template, unknown variants, flags, and content fields", () => {
    expect(gymContentRecordSchema.safeParse({
      ...validRecord(),
      template_key: "salon",
    }).success).toBe(false);

    expect(gymContentRecordSchema.safeParse({
      ...validRecord(),
      visual_variant: "customer-special",
    }).success).toBe(false);

    expect(gymContentRecordSchema.safeParse({
      ...validRecord(),
      feature_flags: { ...defaultGymFeatureFlags, customerName: true },
    }).success).toBe(false);

    expect(gymContentRecordSchema.safeParse({
      ...validRecord(),
      content: { ...validRecord().content, customCss: "body { display: none }" },
    }).success).toBe(false);
  });

  it("rejects unsafe links and duplicate nested IDs", () => {
    const record = validRecord();
    const firstPlan = record.content.membership[0];

    expect(gymContentRecordSchema.safeParse({
      ...record,
      content: {
        ...record.content,
        membership: [{ ...firstPlan, link: "javascript:alert(1)" }],
      },
    }).success).toBe(false);

    expect(gymContentRecordSchema.safeParse({
      ...record,
      content: {
        ...record.content,
        membership: [{ ...firstPlan, link: "//untrusted.example/checkout" }],
      },
    }).success).toBe(false);

    expect(gymContentRecordSchema.safeParse({
      ...record,
      content: {
        ...record.content,
        socialLinks: { facebook: "https://user:password@example.com" },
      },
    }).success).toBe(false);

    expect(gymContentRecordSchema.safeParse({
      ...record,
      content: {
        ...record.content,
        membership: [firstPlan, { ...firstPlan }],
      },
    }).success).toBe(false);
  });
});
