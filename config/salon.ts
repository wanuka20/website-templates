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
  heroImage: "/placeholder_images/salon-adminsheet/settings-brand-d12.jpg",
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
    ogImage: "/placeholder_images/salon-adminsheet/settings-brand-d17.jpg",
  },
  bookingUrl: "",
  openingHoursText: "Mon–Sat: 9am–8pm | Sun: 10am–6pm",
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
      image: "/placeholder_images/salon-adminsheet/settings-stylists-d6.jpg",
      specialties: ["Balayage", "Editorial Cuts", "Colour Correction"],
      bio: "Trained in Paris and London, Amara brings international expertise to every client. Her work has been featured in Vogue Lanka and Harper's Bazaar.",
    },
    {
      id: "st2",
      name: "Kavindra Rajapaksa",
      role: "Senior Colourist",
      experience: "10 years",
      image: "/placeholder_images/salon-adminsheet/settings-stylists-d15.jpg",
      specialties: ["Ombre", "Highlights", "Toning"],
      bio: "Kavindra is renowned for her colour transformations. A L'Oréal Professionnel certified colourist with a portfolio that speaks for itself.",
    },
    {
      id: "st3",
      name: "Niroshan Fernando",
      role: "Skin & Spa Specialist",
      experience: "8 years",
      image: "/placeholder_images/salon-adminsheet/settings-stylists-d24.jpg",
      specialties: ["HydraFacial", "Chemical Peels", "Anti-Ageing"],
      bio: "A licensed aesthetician with advanced training in clinical skincare. Niroshan's treatments consistently deliver visible, lasting results.",
    },
    {
      id: "st4",
      name: "Thilini Senarathna",
      role: "Makeup Artist & Nail Technician",
      experience: "7 years",
      image: "/placeholder_images/salon-adminsheet/settings-stylists-d33.jpg",
      specialties: ["Bridal Makeup", "Nail Art", "Airbrush"],
      bio: "Thilini has beautified over 500 brides across Sri Lanka. Her attention to detail and artistic flair make every look uniquely stunning.",
    },
  ],
  beforeAfter: [
    {
      id: "ba1",
      before: "/placeholder_images/salon-adminsheet/settings-gallery-d3.jpg",
      after: "/placeholder_images/salon-adminsheet/settings-gallery-d4.jpg",
      treatment: "Balayage Transformation",
    },
    {
      id: "ba2",
      before: "/placeholder_images/salon-adminsheet/settings-gallery-d7.jpg",
      after: "/placeholder_images/salon-adminsheet/settings-gallery-d8.jpg",
      treatment: "HydraFacial Glow",
    },
    {
      id: "ba3",
      before: "/placeholder_images/salon-adminsheet/settings-gallery-d11.jpg",
      after: "/placeholder_images/salon-adminsheet/settings-gallery-d12.jpg",
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
      avatar: "/placeholder_images/salon-adminsheet/settings-reviews-d7.jpg",
    },
    {
      id: "te2",
      name: "Dilrukshi Wickramasinghe",
      role: "Bridal Client",
      content:
        "Thilini made me feel like a queen on my wedding day. Flawless makeup that lasted all evening. Highly recommend Lumière to every bride!",
      rating: 5,
      avatar: "/placeholder_images/salon-adminsheet/settings-reviews-d13.jpg",
    },
    {
      id: "te3",
      name: "Priyanka Aluthge",
      role: "Spa Member",
      content:
        "The HydraFacial with Niroshan is life-changing. My skin has never been this clear and glowing. The spa ambience is pure luxury.",
      rating: 5,
      avatar: "/placeholder_images/salon-adminsheet/settings-reviews-d19.jpg",
    },
  ],
};
