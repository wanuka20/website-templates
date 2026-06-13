import type { SalonConfig } from "@/types";

export const salonConfig: SalonConfig = {
  name: "Lumière Beauty Studio",
  tagline: "Where Beauty Meets Artistry",
  description:
    "Colombo's most luxurious beauty destination. Experience world-class hair, skin, and beauty treatments by award-winning stylists.",
  phone: "+94 11 456 7890",
  email: "hello@lumierebeauty.lk",
  address: "15 Union Place",
  city: "Colombo 02, Sri Lanka",
  heroTitle: "Where Beauty\nMeets Artistry",
  heroSubtitle:
    "Indulge in a transformative beauty experience. Our award-winning stylists craft looks that make you feel extraordinary every single day.",
  heroCtaText: "Book Your Appointment",
  heroImage:
    "https://images.unsplash.com/photo-1560066984-138dadb4c035?w=1600&q=80",
  socialLinks: {
    facebook: "https://facebook.com/lumierebeauty",
    instagram: "https://instagram.com/lumierebeauty",
  },
  whatsapp: {
    phone: "94114567890",
    defaultMessage:
      "Hello Lumière! I'd like to book an appointment. Please let me know your available slots.",
  },
  seo: {
    title: "Lumière Beauty Studio | Luxury Salon in Colombo, Sri Lanka",
    description:
      "Experience luxury hair, skin & beauty treatments at Lumière Beauty Studio in Colombo. Book with award-winning stylists today.",
    keywords: [
      "beauty salon colombo",
      "hair salon sri lanka",
      "luxury salon",
      "hair coloring",
      "skin care",
      "bridal makeup",
    ],
    ogImage:
      "https://images.unsplash.com/photo-1560066984-138dadb4c035?w=1200&q=80",
  },
  bookingUrl: "#booking",
  serviceCategories: ["Hair", "Skin", "Nails", "Makeup", "Spa"],
  services: [
    {
      id: "s1",
      name: "Signature Haircut & Style",
      description:
        "Precision cut tailored to your face shape with professional blow-dry and styling.",
      duration: "60 min",
      price: 3500,
      category: "Hair",
    },
    {
      id: "s2",
      name: "Hair Colouring",
      description:
        "Full colour, highlights, balayage or ombre using premium L'Oréal Professionnel products.",
      duration: "120 min",
      price: 8500,
      category: "Hair",
    },
    {
      id: "s3",
      name: "Keratin Treatment",
      description:
        "Smooth, frizz-free hair for up to 3 months. Safe for all hair types.",
      duration: "180 min",
      price: 15000,
      category: "Hair",
    },
    {
      id: "s4",
      name: "Hydra Facial",
      description:
        "Medical-grade facial that cleanses, extracts, and hydrates for radiant skin.",
      duration: "75 min",
      price: 9500,
      category: "Skin",
    },
    {
      id: "s5",
      name: "Classic Manicure & Pedicure",
      description:
        "Relaxing nail care with cuticle treatment, shaping, and polish of your choice.",
      duration: "90 min",
      price: 4500,
      category: "Nails",
    },
    {
      id: "s6",
      name: "Bridal Makeup",
      description:
        "Full bridal makeup with premium products for your most important day.",
      duration: "120 min",
      price: 25000,
      category: "Makeup",
    },
    {
      id: "s7",
      name: "Aromatherapy Massage",
      description:
        "Full body relaxation massage with essential oils in our private spa suite.",
      duration: "90 min",
      price: 7500,
      category: "Spa",
    },
    {
      id: "s8",
      name: "Lash Extension",
      description:
        "Individual silk lash extensions for fuller, longer lashes that last 4-6 weeks.",
      duration: "120 min",
      price: 6500,
      category: "Makeup",
    },
  ],
  pricing: [
    {
      id: "s1",
      name: "Signature Haircut & Style",
      description: "Precision cut & blow-dry",
      duration: "60 min",
      price: 3500,
      category: "Hair",
    },
    {
      id: "s2",
      name: "Hair Colouring",
      description: "Full colour or highlights",
      duration: "120 min",
      price: 8500,
      category: "Hair",
    },
    {
      id: "s3",
      name: "Keratin Treatment",
      description: "Smoothing & frizz control",
      duration: "180 min",
      price: 15000,
      category: "Hair",
    },
    {
      id: "s4",
      name: "Hydra Facial",
      description: "Medical-grade skin treatment",
      duration: "75 min",
      price: 9500,
      category: "Skin",
    },
    {
      id: "s5",
      name: "Manicure & Pedicure",
      description: "Full nail care treatment",
      duration: "90 min",
      price: 4500,
      category: "Nails",
    },
    {
      id: "s6",
      name: "Bridal Makeup",
      description: "Complete bridal glam",
      duration: "120 min",
      price: 25000,
      category: "Makeup",
    },
    {
      id: "s7",
      name: "Aromatherapy Massage",
      description: "Full body relaxation",
      duration: "90 min",
      price: 7500,
      category: "Spa",
    },
    {
      id: "s8",
      name: "Lash Extension",
      description: "Individual silk lashes",
      duration: "120 min",
      price: 6500,
      category: "Makeup",
    },
  ],
  stylists: [
    {
      id: "st1",
      name: "Amara De Silva",
      role: "Creative Director & Master Stylist",
      experience: "15 years",
      image:
        "https://images.unsplash.com/photo-1580618672591-eb180b1a973f?w=400&q=80",
      specialties: ["Balayage", "Editorial Cuts", "Colour Correction"],
      bio: "Trained in Paris and London, Amara brings international expertise to every client. Her work has been featured in Vogue Lanka and Harper's Bazaar.",
    },
    {
      id: "st2",
      name: "Kavindra Rajapaksa",
      role: "Senior Colourist",
      experience: "10 years",
      image:
        "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&q=80",
      specialties: ["Ombre", "Highlights", "Toning"],
      bio: "Kavindra is renowned for her colour transformations. A L'Oréal Professionnel certified colourist with a portfolio that speaks for itself.",
    },
    {
      id: "st3",
      name: "Niroshan Fernando",
      role: "Skin & Spa Specialist",
      experience: "8 years",
      image:
        "https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?w=400&q=80",
      specialties: ["HydraFacial", "Chemical Peels", "Anti-Ageing"],
      bio: "A licensed aesthetician with advanced training in clinical skincare. Niroshan's treatments consistently deliver visible, lasting results.",
    },
    {
      id: "st4",
      name: "Thilini Senarathna",
      role: "Makeup Artist & Nail Technician",
      experience: "7 years",
      image:
        "https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?w=400&q=80",
      specialties: ["Bridal Makeup", "Nail Art", "Airbrush"],
      bio: "Thilini has beautified over 500 brides across Sri Lanka. Her attention to detail and artistic flair make every look uniquely stunning.",
    },
  ],
  beforeAfter: [
    {
      id: "ba1",
      before:
        "https://images.unsplash.com/photo-1562322140-8baeececf3df?w=400&q=80",
      after:
        "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?w=400&q=80",
      treatment: "Balayage Transformation",
    },
    {
      id: "ba2",
      before:
        "https://images.unsplash.com/photo-1519699047748-de8e457a634e?w=400&q=80",
      after:
        "https://images.unsplash.com/photo-1487412840181-b83a50bb0a69?w=400&q=80",
      treatment: "HydraFacial Glow",
    },
    {
      id: "ba3",
      before:
        "https://images.unsplash.com/photo-1527799820374-87036042f33e?w=400&q=80",
      after:
        "https://images.unsplash.com/photo-1604079628040-94301bb21b91?w=400&q=80",
      treatment: "Keratin Smoothing",
    },
  ],
  testimonials: [
    {
      id: "te1",
      name: "Sashini Ranatunga",
      role: "Regular Client",
      content:
        "Lumière is my absolute haven. Amara did the most stunning balayage — I've never received so many compliments on my hair!",
      rating: 5,
      avatar:
        "https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?w=100&q=80",
    },
    {
      id: "te2",
      name: "Dilrukshi Wickramasinghe",
      role: "Bridal Client",
      content:
        "Thilini made me feel like a queen on my wedding day. Flawless makeup that lasted all evening. Highly recommend Lumière to every bride!",
      rating: 5,
      avatar:
        "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=100&q=80",
    },
    {
      id: "te3",
      name: "Priyanka Aluthge",
      role: "Spa Member",
      content:
        "The HydraFacial with Niroshan is life-changing. My skin has never been this clear and glowing. The spa ambience is pure luxury.",
      rating: 5,
      avatar:
        "https://images.unsplash.com/photo-1488426862026-3ee34a7d66df?w=100&q=80",
    },
  ],
};
