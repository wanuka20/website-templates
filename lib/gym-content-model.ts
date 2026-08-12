import { z } from "zod";

export const GYM_TEMPLATE_KEY = "gym" as const;
export const GYM_CONTENT_SCHEMA_VERSION = 1 as const;

export const gymVisualVariants = ["classic", "editorial"] as const;
export const gymVisualVariantSchema = z.enum(gymVisualVariants);
export type GymVisualVariant = z.infer<typeof gymVisualVariantSchema>;

export const gymFeatureFlagNames = [
  "membership",
  "trainers",
  "classSchedule",
  "testimonials",
  "gallery",
  "whatsapp",
] as const;

export const gymFeatureFlagsSchema = z
  .object({
    membership: z.boolean().default(true),
    trainers: z.boolean().default(true),
    classSchedule: z.boolean().default(true),
    testimonials: z.boolean().default(true),
    gallery: z.boolean().default(true),
    whatsapp: z.boolean().default(true),
  })
  .strict();

export type GymFeatureFlags = z.infer<typeof gymFeatureFlagsSchema>;

export const defaultGymFeatureFlags: GymFeatureFlags =
  gymFeatureFlagsSchema.parse({});

const shortText = z.string().trim().min(1).max(200);
const paragraphText = z.string().trim().min(1).max(5_000);
const itemId = z
  .string()
  .trim()
  .min(1)
  .max(100)
  .regex(/^[a-zA-Z0-9][a-zA-Z0-9_-]*$/);
const nonNegativeNumber = z.number().finite().nonnegative();

const httpsUrl = z.string().trim().url().refine((value) => {
  try {
    const url = new URL(value);
    return url.protocol === "https:" && !url.username && !url.password;
  } catch {
    return false;
  }
}, "Must be an HTTPS URL without embedded credentials");

const isRootRelativePath = (value: string) => {
  return /^\/(?!\/)[^\\\s]*$/.test(value);
};

const imageReference = z.string().trim().min(1).max(2_048).refine((value) => {
  return isRootRelativePath(value) || httpsUrl.safeParse(value).success;
}, "Must be a root-relative path or HTTPS URL");

const actionReference = z.string().trim().min(1).max(2_048).refine((value) => {
  return value.startsWith("#") || isRootRelativePath(value) || httpsUrl.safeParse(value).success;
}, "Must be an anchor, root-relative path, or HTTPS URL");

const uniqueIds = <T extends { id: string }>(items: T[]) => {
  return new Set(items.map((item) => item.id)).size === items.length;
};

const socialLinksSchema = z
  .object({
    facebook: httpsUrl.optional(),
    instagram: httpsUrl.optional(),
    twitter: httpsUrl.optional(),
    youtube: httpsUrl.optional(),
    linkedin: httpsUrl.optional(),
  })
  .strict();

const pricingPlanSchema = z
  .object({
    id: itemId,
    name: shortText,
    price: nonNegativeNumber,
    currency: z.string().trim().min(3).max(10),
    period: shortText,
    description: paragraphText,
    link: actionReference.optional(),
    features: z.array(shortText).max(30),
    highlighted: z.boolean().optional(),
    badge: shortText.optional(),
  })
  .strict();

const trainerSchema = z
  .object({
    id: itemId,
    name: shortText,
    specialization: shortText,
    experience: shortText,
    image: imageReference,
    bio: paragraphText,
    certifications: z.array(shortText).max(30),
  })
  .strict();

const gymClassSchema = z
  .object({
    id: itemId,
    name: shortText,
    instructor: shortText,
    day: shortText,
    time: shortText,
    duration: shortText,
    level: z.enum(["Beginner", "Intermediate", "Advanced", "All Levels"]),
    spots: z.number().int().nonnegative(),
  })
  .strict();

const testimonialSchema = z
  .object({
    id: itemId,
    name: shortText,
    role: shortText,
    content: paragraphText,
    rating: z.number().int().min(1).max(5),
    avatar: imageReference.optional(),
  })
  .strict();

const galleryImageSchema = z
  .object({
    id: itemId,
    src: imageReference,
    alt: shortText,
    category: shortText.optional(),
  })
  .strict();

export const gymContentSchema = z
  .object({
    name: shortText,
    tagline: shortText,
    description: paragraphText,
    phone: shortText,
    email: z.string().trim().email().max(320),
    address: shortText,
    city: shortText,
    heroTitle: z.string().trim().min(1).max(300),
    heroSubtitle: paragraphText,
    heroCtaText: shortText,
    heroImage: imageReference,
    logo: imageReference.optional(),
    socialLinks: socialLinksSchema,
    whatsapp: z
      .object({
        phone: z.string().trim().regex(/^\d{7,15}$/),
        defaultMessage: paragraphText,
      })
      .strict(),
    seo: z
      .object({
        title: z.string().trim().min(1).max(70),
        description: z.string().trim().min(1).max(180),
        keywords: z.array(shortText).max(30),
        ogImage: imageReference.optional(),
      })
      .strict(),
    aboutImage: imageReference,
    membership: z.array(pricingPlanSchema).max(20).refine(uniqueIds, "Membership IDs must be unique"),
    trainers: z.array(trainerSchema).max(50).refine(uniqueIds, "Trainer IDs must be unique"),
    classes: z.array(gymClassSchema).max(100).refine(uniqueIds, "Class IDs must be unique"),
    testimonials: z.array(testimonialSchema).max(50).refine(uniqueIds, "Testimonial IDs must be unique"),
    galleryImages: z.array(galleryImageSchema).max(100).refine(uniqueIds, "Gallery image IDs must be unique"),
    amenities: z.array(shortText).max(100),
  })
  .strict();

export type GymContent = z.infer<typeof gymContentSchema>;

export const gymContentRecordSchema = z
  .object({
    template_key: z.literal(GYM_TEMPLATE_KEY),
    schema_version: z.literal(GYM_CONTENT_SCHEMA_VERSION),
    content: gymContentSchema,
    visual_variant: gymVisualVariantSchema,
    feature_flags: gymFeatureFlagsSchema,
  })
  .strict();

export type GymContentRecord = z.infer<typeof gymContentRecordSchema>;

export function parseGymContentRecord(input: unknown): GymContentRecord {
  return gymContentRecordSchema.parse(input);
}
