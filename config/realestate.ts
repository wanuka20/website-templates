import type { RealEstateConfig } from "@/types";

export const realestateConfig: RealEstateConfig = {
  name: "Keshan Realty",
  tagline: "Finding You Home",
  description:
    "Colombo's most trusted real estate agent. From luxury apartments to family homes, Keshan de Silva makes property buying and selling effortless.",
  phone: "+94 77 567 8901",
  email: "keshan@keshanrealty.lk",
  address: "55 Flower Road",
  city: "Colombo 07, Sri Lanka",
  heroTitle: "Find Your\nPerfect Home",
  heroSubtitle:
    "Trusted by over 500 families across Colombo. Let Sri Lanka's leading property agent guide you to your dream property.",
  heroCtaText: "View Properties",
  heroImage:
    "https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=1600&q=80",
  socialLinks: {
    facebook: "https://facebook.com/keshanrealty",
    instagram: "https://instagram.com/keshanrealty",
    linkedin: "https://linkedin.com/in/keshandesilva",
  },
  whatsapp: {
    phone: "94775678901",
    defaultMessage:
      "Hello Keshan! I found your listing and I'm interested in learning more about properties available in Colombo. Can we connect?",
  },
  seo: {
    title: "Keshan Realty | Top Real Estate Agent in Colombo, Sri Lanka",
    description:
      "Find your dream home in Colombo with Keshan de Silva, Sri Lanka's most trusted real estate agent. Homes, apartments & villas for sale and rent.",
    keywords: [
      "real estate colombo",
      "houses for sale sri lanka",
      "apartments colombo",
      "property agent",
      "buy house colombo",
      "property for sale",
    ],
    ogImage:
      "https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=1200&q=80",
  },
  agent: {
    name: "Keshan de Silva",
    title: "Principal Agent & Licensed Realtor",
    image:
      "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400&q=80",
    bio: "With over 12 years of real estate experience, Keshan de Silva has built an unmatched reputation for integrity, market knowledge, and exceptional client service. He has facilitated over 500 successful property transactions in the Colombo district, covering everything from studio apartments to luxury penthouses.\n\nKeshan believes that buying or selling a home is one of life's biggest decisions — and he treats it that way. His data-driven approach, combined with genuine care for his clients, makes every transaction smooth and stress-free.",
    experience: "12 Years",
    totalSales: "LKR 2.8B+",
    clientsServed: "500+",
    phone: "+94 77 567 8901",
    email: "keshan@keshanrealty.lk",
    certifications: [
      "Licensed Realtor (RICS)",
      "Certified Property Valuer",
      "NAREB Member",
    ],
    languages: ["Sinhala", "English", "Tamil"],
  },
  properties: [
    {
      id: "p1",
      title: "Luxury Penthouse — Cinnamon Life",
      type: "Apartment",
      status: "For Sale",
      price: 95000000,
      currency: "LKR",
      bedrooms: 4,
      bathrooms: 4,
      area: 4200,
      areaUnit: "sq ft",
      location: "Colombo 02",
      description:
        "An extraordinary penthouse at the iconic Cinnamon Life tower. Panoramic views of the Indian Ocean and city skyline. Features a private rooftop terrace, chef's kitchen, and concierge services.",
      features: [
        "Ocean view",
        "Private rooftop",
        "Chef's kitchen",
        "Smart home",
        "2 parking bays",
        "24/7 concierge",
        "Swimming pool access",
        "Gym access",
      ],
      images: [
        "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=800&q=80",
        "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=800&q=80",
      ],
      featured: true,
    },
    {
      id: "p2",
      title: "Modern 3BR Apartment — Rajagiriya",
      type: "Apartment",
      status: "For Sale",
      price: 28500000,
      currency: "LKR",
      bedrooms: 3,
      bathrooms: 2,
      area: 1850,
      areaUnit: "sq ft",
      location: "Rajagiriya",
      description:
        "Contemporary 3-bedroom apartment in a secure gated complex. Open-plan living, modern kitchen, and a balcony with garden views. Walking distance to Rajagiriya town.",
      features: [
        "Gated security",
        "Balcony",
        "Open-plan living",
        "Modern kitchen",
        "Car park",
        "Generator backup",
        "Water tank",
      ],
      images: [
        "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=800&q=80",
      ],
      featured: true,
    },
    {
      id: "p3",
      title: "Elegant Family Villa — Battaramulla",
      type: "Villa",
      status: "For Sale",
      price: 62000000,
      currency: "LKR",
      bedrooms: 5,
      bathrooms: 4,
      area: 5500,
      areaUnit: "sq ft",
      location: "Battaramulla",
      description:
        "A stunning contemporary villa on a 20-perch plot. Features a private swimming pool, landscaped gardens, and a separate servant's quarters.",
      features: [
        "Private pool",
        "Landscaped garden",
        "Home theatre",
        "Study room",
        "Servant's quarters",
        "Double garage",
        "Solar panels",
        "Bore water",
      ],
      images: [
        "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=800&q=80",
      ],
      featured: true,
    },
    {
      id: "p4",
      title: "Studio Apartment — Kollupitiya",
      type: "Apartment",
      status: "For Rent",
      price: 65000,
      currency: "LKR",
      area: 650,
      areaUnit: "sq ft",
      location: "Colombo 03",
      description:
        "A stylish studio apartment in the heart of Colombo 3. Fully furnished with modern appliances. Ideal for young professionals.",
      features: [
        "Fully furnished",
        "Modern appliances",
        "Security",
        "Car park",
        "Gym access",
        "Rooftop pool",
      ],
      images: [
        "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?w=800&q=80",
      ],
    },
    {
      id: "p5",
      title: "Commercial Space — Maradana",
      type: "Commercial",
      status: "For Rent",
      price: 150000,
      currency: "LKR",
      area: 3000,
      areaUnit: "sq ft",
      location: "Maradana",
      description:
        "Prime commercial space on a high-traffic road. Ground floor with large display windows. Suitable for retail, showroom, or office.",
      features: [
        "Street frontage",
        "High foot traffic",
        "Car parking (10 bays)",
        "Backup generator",
        "Loading bay",
      ],
      images: [
        "https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&q=80",
      ],
    },
    {
      id: "p6",
      title: "Luxury 2BR Apartment — Havelock City",
      type: "Apartment",
      status: "For Sale",
      price: 38000000,
      currency: "LKR",
      bedrooms: 2,
      bathrooms: 2,
      area: 1450,
      areaUnit: "sq ft",
      location: "Colombo 05",
      description:
        "Brand new apartment in Havelock City with world-class amenities. Modern finishes, spacious layout, and stunning city views.",
      features: [
        "City view",
        "Modern finishes",
        "24/7 security",
        "Multiple pools",
        "Children's play area",
        "Supermarket access",
        "Car park",
      ],
      images: [
        "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=800&q=80",
      ],
      featured: true,
    },
  ],
  services: [
    {
      id: "sv1",
      name: "Property Buying",
      description:
        "From shortlisting to signing — we guide you through every step of buying your perfect property.",
      icon: "Home",
    },
    {
      id: "sv2",
      name: "Property Selling",
      description:
        "Maximum exposure, strategic pricing, and expert negotiation to get you the best possible price.",
      icon: "TrendingUp",
    },
    {
      id: "sv3",
      name: "Property Rental",
      description:
        "Find quality tenants fast or your ideal rental property. Full property management available.",
      icon: "Key",
    },
    {
      id: "sv4",
      name: "Property Valuation",
      description:
        "Accurate market valuations by a certified valuer. Know your property's true worth.",
      icon: "BarChart3",
    },
    {
      id: "sv5",
      name: "Investment Advice",
      description:
        "Data-driven property investment guidance to maximise your returns in the Sri Lankan market.",
      icon: "PieChart",
    },
    {
      id: "sv6",
      name: "Legal Support",
      description:
        "Coordination with leading property lawyers to ensure seamless, legally sound transactions.",
      icon: "FileText",
    },
  ],
  testimonials: [
    {
      id: "ts1",
      name: "Rohan & Minoli Jayasuriya",
      role: "Home Buyers",
      content:
        "Keshan found us our dream home in Battaramulla within 3 weeks. His knowledge of the market is extraordinary. We couldn't be happier!",
      rating: 5,
      avatar:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&q=80",
    },
    {
      id: "ts2",
      name: "Damitha Wickramasinghe",
      role: "Property Seller",
      content:
        "Sold my apartment at Cinnamon Life for 8% above asking price. Keshan's negotiation skills are second to none. Highly recommended!",
      rating: 5,
      avatar:
        "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&q=80",
    },
    {
      id: "ts3",
      name: "Suresh Patel",
      role: "Property Investor",
      content:
        "I've bought 3 investment properties through Keshan in the past 4 years. His market insights and integrity are unmatched in Colombo.",
      rating: 5,
      avatar:
        "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&q=80",
    },
  ],
  areas: [
    "Colombo 01–07",
    "Rajagiriya",
    "Battaramulla",
    "Nugegoda",
    "Maharagama",
    "Dehiwala",
    "Mount Lavinia",
    "Malabe",
  ],
};
