export interface BusinessConfig {
  name: string;
  tagline: string;
  description: string;
  phone: string;
  email: string;
  address: string;
  city: string;
  heroTitle: string;
  heroSubtitle: string;
  heroCtaText: string;
  heroImage: string;
  logo?: string;
  socialLinks: SocialLinks;
  whatsapp: WhatsAppConfig;
  seo: SEOConfig;
}

export interface WhatsAppConfig {
  phone: string;
  defaultMessage: string;
}

export interface SocialLinks {
  facebook?: string;
  instagram?: string;
  twitter?: string;
  youtube?: string;
  linkedin?: string;
}

export interface SEOConfig {
  title: string;
  description: string;
  keywords: string[];
  ogImage?: string;
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  content: string;
  rating: number;
  avatar?: string;
}

export interface PricingPlan {
  id: string;
  name: string;
  price: number;
  currency: string;
  period: string;
  description: string;
  features: string[];
  highlighted?: boolean;
  badge?: string;
}

// Gym-specific types
export interface GymTrainer {
  id: string;
  name: string;
  specialization: string;
  experience: string;
  image: string;
  bio: string;
  certifications: string[];
}

export interface GymClass {
  id: string;
  name: string;
  instructor: string;
  day: string;
  time: string;
  duration: string;
  level: "Beginner" | "Intermediate" | "Advanced" | "All Levels";
  spots: number;
}

export interface GymConfig extends BusinessConfig {
  membership: PricingPlan[];
  trainers: GymTrainer[];
  classes: GymClass[];
  testimonials: Testimonial[];
  galleryImages: GalleryImage[];
  amenities: string[];
}

// Salon-specific types
export interface SalonService {
  id: string;
  name: string;
  description: string;
  duration: string;
  price: number;
  category: string;
  image?: string;
}

export interface SalonStylist {
  id: string;
  name: string;
  role: string;
  experience: string;
  image: string;
  specialties: string[];
  bio: string;
}

export interface BeforeAfterImage {
  id: string;
  before: string;
  after: string;
  treatment: string;
}

export interface SalonConfig extends BusinessConfig {
  services: SalonService[];
  serviceCategories: string[];
  stylists: SalonStylist[];
  pricing: SalonService[];
  beforeAfter: BeforeAfterImage[];
  testimonials: Testimonial[];
  bookingUrl?: string;
}

// Restaurant-specific types
export interface MenuItem {
  id: string;
  name: string;
  description: string;
  price: number;
  category: string;
  image?: string;
  tags?: string[];
  featured?: boolean;
  vegetarian?: boolean;
  spicy?: boolean;
}

export interface RestaurantConfig extends BusinessConfig {
  menuCategories: string[];
  menu: MenuItem[];
  featuredDishes: MenuItem[];
  openingHours: OpeningHours[];
  testimonials: Testimonial[];
  galleryImages: GalleryImage[];
  reservationPhone: string;
  cuisine: string;
}

// Tuition-specific types
export interface Subject {
  id: string;
  name: string;
  description: string;
  levels: string[];
  icon: string;
  studentsCount: number;
}

export interface Teacher {
  id: string;
  name: string;
  subject: string;
  qualification: string;
  experience: string;
  image: string;
  bio: string;
  rating: number;
  studentsCount: number;
}

export interface StudentResult {
  id: string;
  studentName: string;
  subject: string;
  grade: string;
  year: string;
  testimonial?: string;
  avatar?: string;
}

export interface ClassSchedule {
  id: string;
  subject: string;
  teacher: string;
  day: string;
  time: string;
  duration: string;
  level: string;
  seatsAvailable: number;
}

export interface TuitionConfig extends BusinessConfig {
  subjects: Subject[];
  teachers: Teacher[];
  results: StudentResult[];
  schedule: ClassSchedule[];
  testimonials: Testimonial[];
  achievements: Achievement[];
}

// Real Estate-specific types
export interface Property {
  id: string;
  title: string;
  type: "House" | "Apartment" | "Villa" | "Commercial" | "Land";
  status: "For Sale" | "For Rent" | "Sold" | "Rented";
  price: number;
  currency: string;
  bedrooms?: number;
  bathrooms?: number;
  area: number;
  areaUnit: string;
  location: string;
  description: string;
  features: string[];
  images: string[];
  featured?: boolean;
}

export interface AgentProfile {
  name: string;
  title: string;
  image: string;
  bio: string;
  experience: string;
  totalSales: string;
  clientsServed: string;
  phone: string;
  email: string;
  certifications: string[];
  languages: string[];
}

export interface RealEstateService {
  id: string;
  name: string;
  description: string;
  icon: string;
}

export interface RealEstateConfig extends BusinessConfig {
  agent: AgentProfile;
  properties: Property[];
  services: RealEstateService[];
  testimonials: Testimonial[];
  areas: string[];
}

// Shared types
export interface GalleryImage {
  id: string;
  src: string;
  alt: string;
  category?: string;
}

export interface OpeningHours {
  day: string;
  open: string;
  close: string;
  closed?: boolean;
}

export interface Achievement {
  id: string;
  label: string;
  value: string;
  icon?: string;
}

export interface NavItem {
  label: string;
  href: string;
}

export interface TemplateCard {
  id: string;
  name: string;
  category: string;
  description: string;
  image: string;
  previewUrl: string;
  tags: string[];
  color: string;
}

export interface MarketplacePricingPlan {
  id: string;
  name: string;
  price: number;
  period: string;
  description: string;
  features: string[];
  highlighted?: boolean;
  badge?: string;
}

export interface ContactFormData {
  name: string;
  email: string;
  phone?: string;
  subject: string;
  message: string;
}
