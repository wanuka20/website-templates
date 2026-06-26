import { gymConfig } from "@/config/gym";
import { realestateConfig } from "@/config/realestate";
import { restaurantConfig } from "@/config/restaurant";
import { salonConfig } from "@/config/salon";
import { tuitionConfig } from "@/config/tuition";
import type {
  Achievement,
  AgentProfile,
  BeforeAfterImage,
  BusinessConfig,
  ClassSchedule,
  GalleryImage,
  GymClass,
  GymConfig,
  GymTrainer,
  MenuItem,
  OpeningHours,
  PricingPlan,
  Property,
  RealEstateConfig,
  RealEstateService,
  RestaurantConfig,
  SalonConfig,
  SalonService,
  SalonStylist,
  StudentResult,
  Subject,
  Teacher,
  Testimonial,
  TuitionConfig,
} from "@/types";

type TemplateId = "gym" | "restaurant" | "salon" | "realestate" | "tuition";

type SheetPayload = {
  ok?: boolean;
  content?: Record<string, unknown>;
  site?: unknown;
  error?: string;
};

export type TemplateContentResult<T> = {
  config: T;
  source: "sheet" | "fallback";
  reason?: string;
};

const TEMPLATE_URLS: Record<TemplateId, string | undefined> = {
  gym:
    process.env.GYM_GOOGLE_SHEET_WEB_APP_URL ||
    process.env.GOOGLE_SHEET_WEB_APP_URL ||
    process.env.NEXT_PUBLIC_GYM_GOOGLE_APPS_SCRIPT_URL ||
    process.env.NEXT_PUBLIC_GOOGLE_APPS_SCRIPT_URL,
  restaurant:
    process.env.RESTAURANT_GOOGLE_SHEET_WEB_APP_URL ||
    process.env.NEXT_PUBLIC_RESTAURANT_GOOGLE_APPS_SCRIPT_URL ||
    process.env.NEXT_PUBLIC_GOOGLE_APPS_SCRIPT_URL,
  salon:
    process.env.SALON_GOOGLE_SHEET_WEB_APP_URL ||
    process.env.NEXT_PUBLIC_SALON_GOOGLE_APPS_SCRIPT_URL ||
    process.env.NEXT_PUBLIC_GOOGLE_APPS_SCRIPT_URL,
  realestate:
    process.env.REALESTATE_GOOGLE_SHEET_WEB_APP_URL ||
    process.env.NEXT_PUBLIC_REALESTATE_GOOGLE_APPS_SCRIPT_URL ||
    process.env.NEXT_PUBLIC_GOOGLE_APPS_SCRIPT_URL,
  tuition:
    process.env.TUITION_GOOGLE_SHEET_WEB_APP_URL ||
    process.env.NEXT_PUBLIC_TUITION_GOOGLE_APPS_SCRIPT_URL ||
    process.env.NEXT_PUBLIC_GOOGLE_APPS_SCRIPT_URL,
};

function text(value: unknown, fallback = "") {
  return typeof value === "string" && value.trim() ? value.trim() : fallback;
}

function numberValue(value: unknown, fallback: number) {
  const parsed =
    typeof value === "number" ? value : Number(String(value ?? "").replace(/,/g, ""));

  return Number.isFinite(parsed) ? parsed : fallback;
}

function booleanValue(value: unknown, fallback = false) {
  if (typeof value === "boolean") {
    return value;
  }

  const normalized = String(value ?? "").trim().toLowerCase();

  if (["true", "yes", "1", "y"].includes(normalized)) {
    return true;
  }

  if (["false", "no", "0", "n"].includes(normalized)) {
    return false;
  }

  return fallback;
}

function normalizeImageUrl(value: unknown, fallback = "") {
  const imageUrl = text(value, fallback);

  if (!imageUrl) {
    return "";
  }

  const driveFileMatch = imageUrl.match(/drive\.google\.com\/file\/d\/([^/]+)/);
  const driveIdMatch = imageUrl.match(/[?&]id=([^&]+)/);
  const driveId = driveFileMatch?.[1] || driveIdMatch?.[1];

  if (driveId) {
    return `https://drive.google.com/thumbnail?id=${encodeURIComponent(
      driveId,
    )}&sz=w1600`;
  }

  return imageUrl;
}

function get(content: Record<string, unknown>, key: string) {
  return Object.prototype.hasOwnProperty.call(content, key)
    ? content[key]
    : undefined;
}

function listFromKeys(
  content: Record<string, unknown>,
  prefix: string,
  fallback: string[],
) {
  const values = Object.entries(content)
    .map(([key, value]) => {
      const match = key.match(new RegExp(`^${prefix.replace(".", "\\.")}\\.(\\d+)$`));
      return match ? { order: Number(match[1]), value: text(value) } : null;
    })
    .filter((item): item is { order: number; value: string } => !!item && !!item.value)
    .sort((a, b) => a.order - b.order)
    .map((item) => item.value);

  return values.length ? values : fallback;
}

function objectIndexes(content: Record<string, unknown>, prefix: string) {
  return Array.from(
    new Set(
      Object.keys(content)
        .map((key) => key.match(new RegExp(`^${prefix.replace(".", "\\.")}\\.(\\d+)\\.`))?.[1])
        .filter(Boolean),
    ),
  )
    .map(Number)
    .sort((a, b) => a - b);
}

function mergeCommon<T extends BusinessConfig>(
  content: Record<string, unknown>,
  fallback: T,
) {
  return {
    name: text(get(content, "name"), fallback.name),
    tagline: text(get(content, "tagline"), fallback.tagline),
    description: text(get(content, "description"), fallback.description),
    phone: text(get(content, "phone"), fallback.phone),
    email: text(get(content, "email"), fallback.email),
    address: text(get(content, "address"), fallback.address),
    city: text(get(content, "city"), fallback.city),
    heroTitle: text(get(content, "heroTitle"), fallback.heroTitle),
    heroSubtitle: text(get(content, "heroSubtitle"), fallback.heroSubtitle),
    heroCtaText: text(get(content, "heroCtaText"), fallback.heroCtaText),
    heroImage: normalizeImageUrl(get(content, "heroImage"), fallback.heroImage),
    logo: normalizeImageUrl(get(content, "logo"), fallback.logo),
    socialLinks: {
      facebook: text(get(content, "socialLinks.facebook"), fallback.socialLinks.facebook),
      instagram: text(
        get(content, "socialLinks.instagram"),
        fallback.socialLinks.instagram,
      ),
      twitter: text(get(content, "socialLinks.twitter"), fallback.socialLinks.twitter),
      youtube: text(get(content, "socialLinks.youtube"), fallback.socialLinks.youtube),
      linkedin: text(get(content, "socialLinks.linkedin"), fallback.socialLinks.linkedin),
    },
    whatsapp: {
      phone: text(get(content, "whatsapp.phone"), fallback.whatsapp.phone),
      defaultMessage: text(
        get(content, "whatsapp.defaultMessage"),
        fallback.whatsapp.defaultMessage,
      ),
    },
    seo: {
      title: text(get(content, "seo.title"), fallback.seo.title),
      description: text(get(content, "seo.description"), fallback.seo.description),
      keywords: listFromKeys(content, "seo.keywords", fallback.seo.keywords),
      ogImage: normalizeImageUrl(get(content, "seo.ogImage"), fallback.seo.ogImage),
    },
  };
}

function buildTestimonials(
  content: Record<string, unknown>,
  fallback: Testimonial[],
): Testimonial[] {
  const items = objectIndexes(content, "testimonials").map((index): Testimonial | null => {
    const item = fallback[index - 1];

    if (!item) {
      return null;
    }

    return {
      id: text(get(content, `testimonials.${index}.id`), item.id),
      name: text(get(content, `testimonials.${index}.name`), item.name),
      role: text(get(content, `testimonials.${index}.role`), item.role),
      content: text(get(content, `testimonials.${index}.content`), item.content),
      rating: numberValue(get(content, `testimonials.${index}.rating`), item.rating),
      avatar: normalizeImageUrl(get(content, `testimonials.${index}.avatar`), item.avatar),
    };
  });

  return items.filter((item): item is Testimonial => !!item).length
    ? items.filter((item): item is Testimonial => !!item)
    : fallback;
}

function buildGalleryImages(
  content: Record<string, unknown>,
  fallback: GalleryImage[],
): GalleryImage[] {
  const items = objectIndexes(content, "galleryImages").map((index): GalleryImage | null => {
    const item = fallback[index - 1];

    if (!item) {
      return null;
    }

    return {
      id: text(get(content, `galleryImages.${index}.id`), item.id),
      src: normalizeImageUrl(get(content, `galleryImages.${index}.src`), item.src),
      alt: text(get(content, `galleryImages.${index}.alt`), item.alt),
      category: text(get(content, `galleryImages.${index}.category`), item.category),
    };
  });

  return items.filter((item): item is GalleryImage => !!item).length
    ? items.filter((item): item is GalleryImage => !!item)
    : fallback;
}

function buildGymPricingPlans(content: Record<string, unknown>): PricingPlan[] {
  const items = objectIndexes(content, "membership").map((index): PricingPlan | null => {
    const item = gymConfig.membership[index - 1];

    if (!item) {
      return null;
    }

    return {
      id: text(get(content, `membership.${index}.id`), item.id),
      name: text(get(content, `membership.${index}.name`), item.name),
      price: numberValue(get(content, `membership.${index}.price`), item.price),
      currency: text(get(content, `membership.${index}.currency`), item.currency),
      period: text(get(content, `membership.${index}.period`), item.period),
      description: text(get(content, `membership.${index}.description`), item.description),
      features: listFromKeys(content, `membership.${index}.features`, item.features),
      highlighted: booleanValue(
        get(content, `membership.${index}.highlighted`),
        item.highlighted,
      ),
      badge: text(get(content, `membership.${index}.badge`), item.badge),
    };
  });

  return items.filter((item): item is PricingPlan => !!item).length
    ? items.filter((item): item is PricingPlan => !!item)
    : gymConfig.membership;
}

function buildGymTrainers(content: Record<string, unknown>): GymTrainer[] {
  const items = objectIndexes(content, "trainers").map((index): GymTrainer | null => {
    const item = gymConfig.trainers[index - 1];

    if (!item) {
      return null;
    }

    return {
      id: text(get(content, `trainers.${index}.id`), item.id),
      name: text(get(content, `trainers.${index}.name`), item.name),
      specialization: text(
        get(content, `trainers.${index}.specialization`),
        item.specialization,
      ),
      experience: text(get(content, `trainers.${index}.experience`), item.experience),
      image: normalizeImageUrl(get(content, `trainers.${index}.image`), item.image),
      bio: text(get(content, `trainers.${index}.bio`), item.bio),
      certifications: listFromKeys(
        content,
        `trainers.${index}.certifications`,
        item.certifications,
      ),
    };
  });

  return items.filter((item): item is GymTrainer => !!item).length
    ? items.filter((item): item is GymTrainer => !!item)
    : gymConfig.trainers;
}

function normalizeGymLevel(value: unknown, fallback: GymClass["level"]) {
  const level = text(value, fallback);
  const allowed: GymClass["level"][] = [
    "Beginner",
    "Intermediate",
    "Advanced",
    "All Levels",
  ];

  return allowed.includes(level as GymClass["level"])
    ? (level as GymClass["level"])
    : fallback;
}

function buildGymClasses(content: Record<string, unknown>): GymClass[] {
  const items = objectIndexes(content, "classes").map((index): GymClass | null => {
    const item = gymConfig.classes[index - 1];

    if (!item) {
      return null;
    }

    return {
      id: text(get(content, `classes.${index}.id`), item.id),
      name: text(get(content, `classes.${index}.name`), item.name),
      instructor: text(get(content, `classes.${index}.instructor`), item.instructor),
      day: text(get(content, `classes.${index}.day`), item.day),
      time: text(get(content, `classes.${index}.time`), item.time),
      duration: text(get(content, `classes.${index}.duration`), item.duration),
      level: normalizeGymLevel(get(content, `classes.${index}.level`), item.level),
      spots: numberValue(get(content, `classes.${index}.spots`), item.spots),
    };
  });

  return items.filter((item): item is GymClass => !!item).length
    ? items.filter((item): item is GymClass => !!item)
    : gymConfig.classes;
}

function normalizeGymConfig(content: Record<string, unknown>): GymConfig {
  return {
    ...mergeCommon(content, gymConfig),
    amenities: listFromKeys(content, "amenities", gymConfig.amenities),
    membership: buildGymPricingPlans(content),
    trainers: buildGymTrainers(content),
    classes: buildGymClasses(content),
    testimonials: buildTestimonials(content, gymConfig.testimonials),
    galleryImages: buildGalleryImages(content, gymConfig.galleryImages),
  };
}

function buildOpeningHours(content: Record<string, unknown>): OpeningHours[] {
  const items = objectIndexes(content, "openingHours").map((index): OpeningHours | null => {
    const item = restaurantConfig.openingHours[index - 1];

    if (!item) {
      return null;
    }

    return {
      day: text(get(content, `openingHours.${index}.day`), item.day),
      open: text(get(content, `openingHours.${index}.open`), item.open),
      close: text(get(content, `openingHours.${index}.close`), item.close),
      closed: booleanValue(get(content, `openingHours.${index}.closed`), item.closed),
    };
  });

  return items.filter((item): item is OpeningHours => !!item).length
    ? items.filter((item): item is OpeningHours => !!item)
    : restaurantConfig.openingHours;
}

function buildMenu(content: Record<string, unknown>): MenuItem[] {
  const items = objectIndexes(content, "menu").map((index): MenuItem | null => {
    const item = restaurantConfig.menu[index - 1];

    if (!item) {
      return null;
    }

    return {
      id: text(get(content, `menu.${index}.id`), item.id),
      name: text(get(content, `menu.${index}.name`), item.name),
      description: text(get(content, `menu.${index}.description`), item.description),
      price: numberValue(get(content, `menu.${index}.price`), item.price),
      category: text(get(content, `menu.${index}.category`), item.category),
      image: normalizeImageUrl(get(content, `menu.${index}.image`), item.image),
      tags: listFromKeys(content, `menu.${index}.tags`, item.tags || []),
      featured: booleanValue(get(content, `menu.${index}.featured`), item.featured),
      vegetarian: booleanValue(get(content, `menu.${index}.vegetarian`), item.vegetarian),
      spicy: booleanValue(get(content, `menu.${index}.spicy`), item.spicy),
    };
  });

  return items.filter((item): item is MenuItem => !!item).length
    ? items.filter((item): item is MenuItem => !!item)
    : restaurantConfig.menu;
}

function normalizeRestaurantConfig(content: Record<string, unknown>): RestaurantConfig {
  const menu = buildMenu(content);

  return {
    ...mergeCommon(content, restaurantConfig),
    cuisine: text(get(content, "cuisine"), restaurantConfig.cuisine),
    reservationPhone: text(
      get(content, "reservationPhone"),
      restaurantConfig.reservationPhone,
    ),
    openingHours: buildOpeningHours(content),
    menuCategories: listFromKeys(
      content,
      "menuCategories",
      restaurantConfig.menuCategories,
    ),
    menu,
    featuredDishes: menu.filter((item) => item.featured),
    testimonials: buildTestimonials(content, restaurantConfig.testimonials),
    galleryImages: buildGalleryImages(content, restaurantConfig.galleryImages),
  };
}

function buildSalonServices(
  content: Record<string, unknown>,
  prefix: "services" | "pricing",
  fallback: SalonService[],
): SalonService[] {
  const items = objectIndexes(content, prefix).map((index): SalonService | null => {
    const item = fallback[index - 1];

    if (!item) {
      return null;
    }

    return {
      id: text(get(content, `${prefix}.${index}.id`), item.id),
      name: text(get(content, `${prefix}.${index}.name`), item.name),
      description: text(get(content, `${prefix}.${index}.description`), item.description),
      duration: text(get(content, `${prefix}.${index}.duration`), item.duration),
      price: numberValue(get(content, `${prefix}.${index}.price`), item.price),
      category: text(get(content, `${prefix}.${index}.category`), item.category),
      image: normalizeImageUrl(get(content, `${prefix}.${index}.image`), item.image),
    };
  });

  return items.filter((item): item is SalonService => !!item).length
    ? items.filter((item): item is SalonService => !!item)
    : fallback;
}

function buildStylists(content: Record<string, unknown>): SalonStylist[] {
  const items = objectIndexes(content, "stylists").map((index): SalonStylist | null => {
    const item = salonConfig.stylists[index - 1];

    if (!item) {
      return null;
    }

    return {
      id: text(get(content, `stylists.${index}.id`), item.id),
      name: text(get(content, `stylists.${index}.name`), item.name),
      role: text(get(content, `stylists.${index}.role`), item.role),
      experience: text(get(content, `stylists.${index}.experience`), item.experience),
      image: normalizeImageUrl(get(content, `stylists.${index}.image`), item.image),
      specialties: listFromKeys(content, `stylists.${index}.specialties`, item.specialties),
      bio: text(get(content, `stylists.${index}.bio`), item.bio),
    };
  });

  return items.filter((item): item is SalonStylist => !!item).length
    ? items.filter((item): item is SalonStylist => !!item)
    : salonConfig.stylists;
}

function buildBeforeAfter(content: Record<string, unknown>): BeforeAfterImage[] {
  const items = objectIndexes(content, "beforeAfter").map(
    (index): BeforeAfterImage | null => {
      const item = salonConfig.beforeAfter[index - 1];

      if (!item) {
        return null;
      }

      return {
        id: text(get(content, `beforeAfter.${index}.id`), item.id),
        before: normalizeImageUrl(get(content, `beforeAfter.${index}.before`), item.before),
        after: normalizeImageUrl(get(content, `beforeAfter.${index}.after`), item.after),
        treatment: text(get(content, `beforeAfter.${index}.treatment`), item.treatment),
      };
    },
  );

  return items.filter((item): item is BeforeAfterImage => !!item).length
    ? items.filter((item): item is BeforeAfterImage => !!item)
    : salonConfig.beforeAfter;
}

function normalizeSalonConfig(content: Record<string, unknown>): SalonConfig {
  return {
    ...mergeCommon(content, salonConfig),
    bookingUrl: text(get(content, "bookingUrl"), salonConfig.bookingUrl),
    serviceCategories: listFromKeys(
      content,
      "serviceCategories",
      salonConfig.serviceCategories,
    ),
    services: buildSalonServices(content, "services", salonConfig.services),
    pricing: buildSalonServices(content, "pricing", salonConfig.pricing),
    stylists: buildStylists(content),
    beforeAfter: buildBeforeAfter(content),
    testimonials: buildTestimonials(content, salonConfig.testimonials),
  };
}

function buildAgent(content: Record<string, unknown>): AgentProfile {
  return {
    name: text(get(content, "agent.name"), realestateConfig.agent.name),
    title: text(get(content, "agent.title"), realestateConfig.agent.title),
    image: normalizeImageUrl(get(content, "agent.image"), realestateConfig.agent.image),
    bio: text(get(content, "agent.bio"), realestateConfig.agent.bio),
    experience: text(
      get(content, "agent.experience"),
      realestateConfig.agent.experience,
    ),
    totalSales: text(
      get(content, "agent.totalSales"),
      realestateConfig.agent.totalSales,
    ),
    clientsServed: text(
      get(content, "agent.clientsServed"),
      realestateConfig.agent.clientsServed,
    ),
    phone: text(get(content, "agent.phone"), realestateConfig.agent.phone),
    email: text(get(content, "agent.email"), realestateConfig.agent.email),
    certifications: listFromKeys(
      content,
      "agent.certifications",
      realestateConfig.agent.certifications,
    ),
    languages: listFromKeys(
      content,
      "agent.languages",
      realestateConfig.agent.languages,
    ),
  };
}

function normalizePropertyType(value: unknown, fallback: Property["type"]) {
  const propertyType = text(value, fallback);
  const allowed: Property["type"][] = ["House", "Apartment", "Villa", "Commercial", "Land"];

  return allowed.includes(propertyType as Property["type"])
    ? (propertyType as Property["type"])
    : fallback;
}

function normalizePropertyStatus(value: unknown, fallback: Property["status"]) {
  const status = text(value, fallback);
  const allowed: Property["status"][] = ["For Sale", "For Rent", "Sold", "Rented"];

  return allowed.includes(status as Property["status"])
    ? (status as Property["status"])
    : fallback;
}

function buildProperties(content: Record<string, unknown>): Property[] {
  const items = objectIndexes(content, "properties").map((index): Property | null => {
    const item = realestateConfig.properties[index - 1];

    if (!item) {
      return null;
    }

    return {
      id: text(get(content, `properties.${index}.id`), item.id),
      title: text(get(content, `properties.${index}.title`), item.title),
      type: normalizePropertyType(get(content, `properties.${index}.type`), item.type),
      status: normalizePropertyStatus(
        get(content, `properties.${index}.status`),
        item.status,
      ),
      price: numberValue(get(content, `properties.${index}.price`), item.price),
      currency: text(get(content, `properties.${index}.currency`), item.currency),
      bedrooms: numberValue(
        get(content, `properties.${index}.bedrooms`),
        item.bedrooms || 0,
      ),
      bathrooms: numberValue(
        get(content, `properties.${index}.bathrooms`),
        item.bathrooms || 0,
      ),
      area: numberValue(get(content, `properties.${index}.area`), item.area),
      areaUnit: text(get(content, `properties.${index}.areaUnit`), item.areaUnit),
      location: text(get(content, `properties.${index}.location`), item.location),
      description: text(
        get(content, `properties.${index}.description`),
        item.description,
      ),
      features: listFromKeys(content, `properties.${index}.features`, item.features),
      images: listFromKeys(content, `properties.${index}.images`, item.images).map((image) =>
        normalizeImageUrl(image),
      ),
      featured: booleanValue(get(content, `properties.${index}.featured`), item.featured),
    };
  });

  return items.filter((item): item is Property => !!item).length
    ? items.filter((item): item is Property => !!item)
    : realestateConfig.properties;
}

function buildRealEstateServices(content: Record<string, unknown>): RealEstateService[] {
  const items = objectIndexes(content, "services").map(
    (index): RealEstateService | null => {
      const item = realestateConfig.services[index - 1];

      if (!item) {
        return null;
      }

      return {
        id: text(get(content, `services.${index}.id`), item.id),
        name: text(get(content, `services.${index}.name`), item.name),
        description: text(
          get(content, `services.${index}.description`),
          item.description,
        ),
        icon: text(get(content, `services.${index}.icon`), item.icon),
      };
    },
  );

  return items.filter((item): item is RealEstateService => !!item).length
    ? items.filter((item): item is RealEstateService => !!item)
    : realestateConfig.services;
}

function normalizeRealEstateConfig(content: Record<string, unknown>): RealEstateConfig {
  return {
    ...mergeCommon(content, realestateConfig),
    agent: buildAgent(content),
    properties: buildProperties(content),
    services: buildRealEstateServices(content),
    testimonials: buildTestimonials(content, realestateConfig.testimonials),
    areas: listFromKeys(content, "areas", realestateConfig.areas),
  };
}

function buildSubjects(content: Record<string, unknown>): Subject[] {
  const items = objectIndexes(content, "subjects").map((index): Subject | null => {
    const item = tuitionConfig.subjects[index - 1];

    if (!item) {
      return null;
    }

    return {
      id: text(get(content, `subjects.${index}.id`), item.id),
      name: text(get(content, `subjects.${index}.name`), item.name),
      description: text(get(content, `subjects.${index}.description`), item.description),
      levels: listFromKeys(content, `subjects.${index}.levels`, item.levels),
      icon: text(get(content, `subjects.${index}.icon`), item.icon),
      studentsCount: numberValue(
        get(content, `subjects.${index}.studentsCount`),
        item.studentsCount,
      ),
    };
  });

  return items.filter((item): item is Subject => !!item).length
    ? items.filter((item): item is Subject => !!item)
    : tuitionConfig.subjects;
}

function buildTeachers(content: Record<string, unknown>): Teacher[] {
  const items = objectIndexes(content, "teachers").map((index): Teacher | null => {
    const item = tuitionConfig.teachers[index - 1];

    if (!item) {
      return null;
    }

    return {
      id: text(get(content, `teachers.${index}.id`), item.id),
      name: text(get(content, `teachers.${index}.name`), item.name),
      subject: text(get(content, `teachers.${index}.subject`), item.subject),
      qualification: text(
        get(content, `teachers.${index}.qualification`),
        item.qualification,
      ),
      experience: text(get(content, `teachers.${index}.experience`), item.experience),
      image: normalizeImageUrl(get(content, `teachers.${index}.image`), item.image),
      bio: text(get(content, `teachers.${index}.bio`), item.bio),
      rating: numberValue(get(content, `teachers.${index}.rating`), item.rating),
      studentsCount: numberValue(
        get(content, `teachers.${index}.studentsCount`),
        item.studentsCount,
      ),
    };
  });

  return items.filter((item): item is Teacher => !!item).length
    ? items.filter((item): item is Teacher => !!item)
    : tuitionConfig.teachers;
}

function buildResults(content: Record<string, unknown>): StudentResult[] {
  const items = objectIndexes(content, "results").map((index): StudentResult | null => {
    const item = tuitionConfig.results[index - 1];

    if (!item) {
      return null;
    }

    return {
      id: text(get(content, `results.${index}.id`), item.id),
      studentName: text(get(content, `results.${index}.studentName`), item.studentName),
      subject: text(get(content, `results.${index}.subject`), item.subject),
      grade: text(get(content, `results.${index}.grade`), item.grade),
      year: text(get(content, `results.${index}.year`), item.year),
      testimonial: text(get(content, `results.${index}.testimonial`), item.testimonial),
      avatar: normalizeImageUrl(get(content, `results.${index}.avatar`), item.avatar),
    };
  });

  return items.filter((item): item is StudentResult => !!item).length
    ? items.filter((item): item is StudentResult => !!item)
    : tuitionConfig.results;
}

function buildSchedule(content: Record<string, unknown>): ClassSchedule[] {
  const items = objectIndexes(content, "schedule").map((index): ClassSchedule | null => {
    const item = tuitionConfig.schedule[index - 1];

    if (!item) {
      return null;
    }

    return {
      id: text(get(content, `schedule.${index}.id`), item.id),
      subject: text(get(content, `schedule.${index}.subject`), item.subject),
      teacher: text(get(content, `schedule.${index}.teacher`), item.teacher),
      day: text(get(content, `schedule.${index}.day`), item.day),
      time: text(get(content, `schedule.${index}.time`), item.time),
      duration: text(get(content, `schedule.${index}.duration`), item.duration),
      level: text(get(content, `schedule.${index}.level`), item.level),
      seatsAvailable: numberValue(
        get(content, `schedule.${index}.seatsAvailable`),
        item.seatsAvailable,
      ),
    };
  });

  return items.filter((item): item is ClassSchedule => !!item).length
    ? items.filter((item): item is ClassSchedule => !!item)
    : tuitionConfig.schedule;
}

function buildAchievements(content: Record<string, unknown>): Achievement[] {
  const items = objectIndexes(content, "achievements").map((index): Achievement | null => {
    const item = tuitionConfig.achievements[index - 1];

    if (!item) {
      return null;
    }

    return {
      id: text(get(content, `achievements.${index}.id`), item.id),
      label: text(get(content, `achievements.${index}.label`), item.label),
      value: text(get(content, `achievements.${index}.value`), item.value),
      icon: text(get(content, `achievements.${index}.icon`), item.icon),
    };
  });

  return items.filter((item): item is Achievement => !!item).length
    ? items.filter((item): item is Achievement => !!item)
    : tuitionConfig.achievements;
}

function normalizeTuitionConfig(content: Record<string, unknown>): TuitionConfig {
  return {
    ...mergeCommon(content, tuitionConfig),
    subjects: buildSubjects(content),
    teachers: buildTeachers(content),
    results: buildResults(content),
    schedule: buildSchedule(content),
    testimonials: buildTestimonials(content, tuitionConfig.testimonials),
    achievements: buildAchievements(content),
  };
}

function appendTemplateParam(webAppUrl: string, template: TemplateId) {
  const separator = webAppUrl.includes("?") ? "&" : "?";
  return `${webAppUrl}${separator}action=${template}Content&template=${template}`;
}

async function fetchContent<T>(
  template: TemplateId,
  fallback: T,
  normalize: (content: Record<string, unknown>) => T,
): Promise<TemplateContentResult<T>> {
  const url = TEMPLATE_URLS[template];

  if (!url) {
    return {
      config: fallback,
      source: "fallback",
      reason: `Missing Google Apps Script URL for ${template}.`,
    };
  }

  try {
    const response = await fetch(appendTemplateParam(url, template), {
      cache: "no-store",
      next: { revalidate: 0 },
    });

    if (!response.ok) {
      return {
        config: fallback,
        source: "fallback",
        reason: `Google Apps Script returned HTTP ${response.status}.`,
      };
    }

    const payload = (await response.json()) as SheetPayload;

    if (!payload.ok) {
      return {
        config: fallback,
        source: "fallback",
        reason: payload.error || "Google Apps Script returned ok=false.",
      };
    }

    if (payload.content && typeof payload.content === "object") {
      return {
        config: normalize(payload.content),
        source: "sheet",
      };
    }

    return {
      config: fallback,
      source: "fallback",
      reason: "Google Apps Script response did not include a content map.",
    };
  } catch {
    return {
      config: fallback,
      source: "fallback",
      reason: "Could not fetch or parse Google Apps Script response.",
    };
  }
}

export async function getGymContent() {
  const result = await fetchContent("gym", gymConfig, normalizeGymConfig);

  return result.config;
}

export async function getRestaurantContent() {
  const result = await fetchContent(
    "restaurant",
    restaurantConfig,
    normalizeRestaurantConfig,
  );

  return result.config;
}

export async function getSalonContent() {
  const result = await fetchContent("salon", salonConfig, normalizeSalonConfig);

  return result.config;
}

export async function getRealEstateContent() {
  const result = await fetchContent(
    "realestate",
    realestateConfig,
    normalizeRealEstateConfig,
  );

  return result.config;
}

export async function getTuitionContent() {
  const result = await fetchContent("tuition", tuitionConfig, normalizeTuitionConfig);

  return result.config;
}
