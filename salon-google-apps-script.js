const SHEET_ID = "1uDuWbCSqMoUTkhphfpa5NyyfrYkJcVO6NuM-ESZmU2A";
const TEMPLATE_ID = "salon";
const TEMPLATE_LABEL = "Salon";
const LEAD_SHEET_NAME = "Leads";

const LEAD_HEADERS = ["Timestamp", "Template", "Business Name", "Name", "Email", "Phone", "Subject", "Message", "Source Page"];
const CONTENT_HEADERS = ["Section", "Key", "Label", "Value", "Help"];
const SETTINGS_SHEETS = [
  {
    "name": "Settings - Brand",
    "rows": [
      [
        "Basic Info",
        "name",
        "Business name",
        "Lumière Beauty Studio",
        "Brand name in navbars, footers, forms, and metadata."
      ],
      [
        "Basic Info",
        "tagline",
        "Tagline",
        "Where Beauty Meets Artistry",
        "Short brand tagline."
      ],
      [
        "Basic Info",
        "description",
        "Description",
        "Colombo's most luxurious beauty destination. Experience world-class hair, skin, and beauty treatments by award-winning stylists.",
        "About/summary description."
      ],
      [
        "Basic Info",
        "phone",
        "Phone",
        "+94 11 456 7890",
        "Main phone number."
      ],
      [
        "Basic Info",
        "email",
        "Email",
        "hello@lumierebeauty.lk",
        "Main email address."
      ],
      [
        "Basic Info",
        "address",
        "Address",
        "15 Union Place",
        "Street address."
      ],
      [
        "Basic Info",
        "city",
        "City",
        "Colombo 02, Sri Lanka",
        "City/location text."
      ],
      [
        "Basic Info",
        "heroTitle",
        "Hero title",
        "Where Beauty\nMeets Artistry",
        "Hero headline. Line breaks are preserved."
      ],
      [
        "Basic Info",
        "heroSubtitle",
        "Hero subtitle",
        "Indulge in a transformative beauty experience. Our award-winning stylists craft looks that make you feel extraordinary every single day.",
        "Hero supporting copy."
      ],
      [
        "Basic Info",
        "heroCtaText",
        "Hero CTA text",
        "Book Your Appointment",
        "Main hero button text."
      ],
      [
        "Basic Info",
        "heroImage",
        "Hero image URL",
        "https://images.unsplash.com/photo-1560066984-138dadb4c035?w=1600&q=80",
        "Use a direct image URL or public Google Drive link."
      ],
      [
        "Basic Info",
        "logo",
        "Logo URL",
        "",
        "Optional logo image URL."
      ],
      [
        "Business Details",
        "bookingUrl",
        "Booking URL",
        "#booking",
        "Appointment booking link or page anchor."
      ],
      [
        "SEO",
        "seo.title",
        "SEO title",
        "Lumière Beauty Studio | Luxury Salon in Colombo, Sri Lanka",
        "Browser/search title."
      ],
      [
        "SEO",
        "seo.description",
        "SEO description",
        "Experience luxury hair, skin & beauty treatments at Lumière Beauty Studio in Colombo. Book with award-winning stylists today.",
        "Search/social description."
      ],
      [
        "SEO",
        "seo.ogImage",
        "Open Graph image",
        "https://images.unsplash.com/photo-1560066984-138dadb4c035?w=1200&q=80",
        "Social sharing image."
      ],
      [
        "SEO",
        "seo.keywords.1",
        "SEO keyword 1",
        "beauty salon colombo",
        "One keyword or phrase per row."
      ],
      [
        "SEO",
        "seo.keywords.2",
        "SEO keyword 2",
        "hair salon sri lanka",
        "One keyword or phrase per row."
      ],
      [
        "SEO",
        "seo.keywords.3",
        "SEO keyword 3",
        "luxury salon",
        "One keyword or phrase per row."
      ],
      [
        "SEO",
        "seo.keywords.4",
        "SEO keyword 4",
        "hair coloring",
        "One keyword or phrase per row."
      ],
      [
        "SEO",
        "seo.keywords.5",
        "SEO keyword 5",
        "skin care",
        "One keyword or phrase per row."
      ],
      [
        "SEO",
        "seo.keywords.6",
        "SEO keyword 6",
        "bridal makeup",
        "One keyword or phrase per row."
      ],
      [
        "Social WhatsApp",
        "socialLinks.facebook",
        "Facebook URL",
        "https://facebook.com/lumierebeauty",
        "Leave blank if unused."
      ],
      [
        "Social WhatsApp",
        "socialLinks.instagram",
        "Instagram URL",
        "https://instagram.com/lumierebeauty",
        "Leave blank if unused."
      ],
      [
        "Social WhatsApp",
        "socialLinks.twitter",
        "Twitter URL",
        "",
        "Leave blank if unused."
      ],
      [
        "Social WhatsApp",
        "socialLinks.youtube",
        "Youtube URL",
        "",
        "Leave blank if unused."
      ],
      [
        "Social WhatsApp",
        "socialLinks.linkedin",
        "Linkedin URL",
        "",
        "Leave blank if unused."
      ],
      [
        "Social WhatsApp",
        "whatsapp.phone",
        "WhatsApp phone",
        "94114567890",
        "Country code + number, no plus sign or spaces."
      ],
      [
        "Social WhatsApp",
        "whatsapp.defaultMessage",
        "WhatsApp default message",
        "Hello Lumière! I'd like to book an appointment. Please let me know your available slots.",
        "Pre-filled WhatsApp message."
      ]
    ]
  },
  {
    "name": "Settings - Services",
    "rows": [
      [
        "Service Categories",
        "serviceCategories.1",
        "Service category 1",
        "Hair",
        "Used for service filters."
      ],
      [
        "Service Categories",
        "serviceCategories.2",
        "Service category 2",
        "Skin",
        "Used for service filters."
      ],
      [
        "Service Categories",
        "serviceCategories.3",
        "Service category 3",
        "Nails",
        "Used for service filters."
      ],
      [
        "Service Categories",
        "serviceCategories.4",
        "Service category 4",
        "Makeup",
        "Used for service filters."
      ],
      [
        "Service Categories",
        "serviceCategories.5",
        "Service category 5",
        "Spa",
        "Used for service filters."
      ],
      [
        "Services",
        "services.1.id",
        "Service 1 id",
        "s1",
        "Keep stable unless you update related rows."
      ],
      [
        "Services",
        "services.1.name",
        "Service 1 name",
        "Signature Haircut & Style",
        ""
      ],
      [
        "Services",
        "services.1.description",
        "Service 1 description",
        "Precision cut tailored to your face shape with professional blow-dry and styling.",
        ""
      ],
      [
        "Services",
        "services.1.duration",
        "Service 1 duration",
        "60 min",
        ""
      ],
      [
        "Services",
        "services.1.price",
        "Service 1 price",
        "3500",
        "Numbers only."
      ],
      [
        "Services",
        "services.1.category",
        "Service 1 category",
        "Hair",
        "Must match one service category."
      ],
      [
        "Services",
        "services.1.image",
        "Service 1 image",
        "",
        "Optional image URL."
      ],
      [
        "Services",
        "services.2.id",
        "Service 2 id",
        "s2",
        "Keep stable unless you update related rows."
      ],
      [
        "Services",
        "services.2.name",
        "Service 2 name",
        "Hair Colouring",
        ""
      ],
      [
        "Services",
        "services.2.description",
        "Service 2 description",
        "Full colour, highlights, balayage or ombre using premium L'Oréal Professionnel products.",
        ""
      ],
      [
        "Services",
        "services.2.duration",
        "Service 2 duration",
        "120 min",
        ""
      ],
      [
        "Services",
        "services.2.price",
        "Service 2 price",
        "8500",
        "Numbers only."
      ],
      [
        "Services",
        "services.2.category",
        "Service 2 category",
        "Hair",
        "Must match one service category."
      ],
      [
        "Services",
        "services.2.image",
        "Service 2 image",
        "",
        "Optional image URL."
      ],
      [
        "Services",
        "services.3.id",
        "Service 3 id",
        "s3",
        "Keep stable unless you update related rows."
      ],
      [
        "Services",
        "services.3.name",
        "Service 3 name",
        "Keratin Treatment",
        ""
      ],
      [
        "Services",
        "services.3.description",
        "Service 3 description",
        "Smooth, frizz-free hair for up to 3 months. Safe for all hair types.",
        ""
      ],
      [
        "Services",
        "services.3.duration",
        "Service 3 duration",
        "180 min",
        ""
      ],
      [
        "Services",
        "services.3.price",
        "Service 3 price",
        "15000",
        "Numbers only."
      ],
      [
        "Services",
        "services.3.category",
        "Service 3 category",
        "Hair",
        "Must match one service category."
      ],
      [
        "Services",
        "services.3.image",
        "Service 3 image",
        "",
        "Optional image URL."
      ],
      [
        "Services",
        "services.4.id",
        "Service 4 id",
        "s4",
        "Keep stable unless you update related rows."
      ],
      [
        "Services",
        "services.4.name",
        "Service 4 name",
        "Hydra Facial",
        ""
      ],
      [
        "Services",
        "services.4.description",
        "Service 4 description",
        "Medical-grade facial that cleanses, extracts, and hydrates for radiant skin.",
        ""
      ],
      [
        "Services",
        "services.4.duration",
        "Service 4 duration",
        "75 min",
        ""
      ],
      [
        "Services",
        "services.4.price",
        "Service 4 price",
        "9500",
        "Numbers only."
      ],
      [
        "Services",
        "services.4.category",
        "Service 4 category",
        "Skin",
        "Must match one service category."
      ],
      [
        "Services",
        "services.4.image",
        "Service 4 image",
        "",
        "Optional image URL."
      ],
      [
        "Services",
        "services.5.id",
        "Service 5 id",
        "s5",
        "Keep stable unless you update related rows."
      ],
      [
        "Services",
        "services.5.name",
        "Service 5 name",
        "Classic Manicure & Pedicure",
        ""
      ],
      [
        "Services",
        "services.5.description",
        "Service 5 description",
        "Relaxing nail care with cuticle treatment, shaping, and polish of your choice.",
        ""
      ],
      [
        "Services",
        "services.5.duration",
        "Service 5 duration",
        "90 min",
        ""
      ],
      [
        "Services",
        "services.5.price",
        "Service 5 price",
        "4500",
        "Numbers only."
      ],
      [
        "Services",
        "services.5.category",
        "Service 5 category",
        "Nails",
        "Must match one service category."
      ],
      [
        "Services",
        "services.5.image",
        "Service 5 image",
        "",
        "Optional image URL."
      ],
      [
        "Services",
        "services.6.id",
        "Service 6 id",
        "s6",
        "Keep stable unless you update related rows."
      ],
      [
        "Services",
        "services.6.name",
        "Service 6 name",
        "Bridal Makeup",
        ""
      ],
      [
        "Services",
        "services.6.description",
        "Service 6 description",
        "Full bridal makeup with premium products for your most important day.",
        ""
      ],
      [
        "Services",
        "services.6.duration",
        "Service 6 duration",
        "120 min",
        ""
      ],
      [
        "Services",
        "services.6.price",
        "Service 6 price",
        "25000",
        "Numbers only."
      ],
      [
        "Services",
        "services.6.category",
        "Service 6 category",
        "Makeup",
        "Must match one service category."
      ],
      [
        "Services",
        "services.6.image",
        "Service 6 image",
        "",
        "Optional image URL."
      ],
      [
        "Services",
        "services.7.id",
        "Service 7 id",
        "s7",
        "Keep stable unless you update related rows."
      ],
      [
        "Services",
        "services.7.name",
        "Service 7 name",
        "Aromatherapy Massage",
        ""
      ],
      [
        "Services",
        "services.7.description",
        "Service 7 description",
        "Full body relaxation massage with essential oils in our private spa suite.",
        ""
      ],
      [
        "Services",
        "services.7.duration",
        "Service 7 duration",
        "90 min",
        ""
      ],
      [
        "Services",
        "services.7.price",
        "Service 7 price",
        "7500",
        "Numbers only."
      ],
      [
        "Services",
        "services.7.category",
        "Service 7 category",
        "Spa",
        "Must match one service category."
      ],
      [
        "Services",
        "services.7.image",
        "Service 7 image",
        "",
        "Optional image URL."
      ],
      [
        "Services",
        "services.8.id",
        "Service 8 id",
        "s8",
        "Keep stable unless you update related rows."
      ],
      [
        "Services",
        "services.8.name",
        "Service 8 name",
        "Lash Extension",
        ""
      ],
      [
        "Services",
        "services.8.description",
        "Service 8 description",
        "Individual silk lash extensions for fuller, longer lashes that last 4-6 weeks.",
        ""
      ],
      [
        "Services",
        "services.8.duration",
        "Service 8 duration",
        "120 min",
        ""
      ],
      [
        "Services",
        "services.8.price",
        "Service 8 price",
        "6500",
        "Numbers only."
      ],
      [
        "Services",
        "services.8.category",
        "Service 8 category",
        "Makeup",
        "Must match one service category."
      ],
      [
        "Services",
        "services.8.image",
        "Service 8 image",
        "",
        "Optional image URL."
      ],
      [
        "Pricing",
        "pricing.1.id",
        "Pricin 1 id",
        "s1",
        "Keep stable unless you update related rows."
      ],
      [
        "Pricing",
        "pricing.1.name",
        "Pricin 1 name",
        "Signature Haircut & Style",
        ""
      ],
      [
        "Pricing",
        "pricing.1.description",
        "Pricin 1 description",
        "Precision cut & blow-dry",
        ""
      ],
      [
        "Pricing",
        "pricing.1.duration",
        "Pricin 1 duration",
        "60 min",
        ""
      ],
      [
        "Pricing",
        "pricing.1.price",
        "Pricin 1 price",
        "3500",
        "Numbers only."
      ],
      [
        "Pricing",
        "pricing.1.category",
        "Pricin 1 category",
        "Hair",
        "Must match one service category."
      ],
      [
        "Pricing",
        "pricing.1.image",
        "Pricin 1 image",
        "",
        "Optional image URL."
      ],
      [
        "Pricing",
        "pricing.2.id",
        "Pricin 2 id",
        "s2",
        "Keep stable unless you update related rows."
      ],
      [
        "Pricing",
        "pricing.2.name",
        "Pricin 2 name",
        "Hair Colouring",
        ""
      ],
      [
        "Pricing",
        "pricing.2.description",
        "Pricin 2 description",
        "Full colour or highlights",
        ""
      ],
      [
        "Pricing",
        "pricing.2.duration",
        "Pricin 2 duration",
        "120 min",
        ""
      ],
      [
        "Pricing",
        "pricing.2.price",
        "Pricin 2 price",
        "8500",
        "Numbers only."
      ],
      [
        "Pricing",
        "pricing.2.category",
        "Pricin 2 category",
        "Hair",
        "Must match one service category."
      ],
      [
        "Pricing",
        "pricing.2.image",
        "Pricin 2 image",
        "",
        "Optional image URL."
      ],
      [
        "Pricing",
        "pricing.3.id",
        "Pricin 3 id",
        "s3",
        "Keep stable unless you update related rows."
      ],
      [
        "Pricing",
        "pricing.3.name",
        "Pricin 3 name",
        "Keratin Treatment",
        ""
      ],
      [
        "Pricing",
        "pricing.3.description",
        "Pricin 3 description",
        "Smoothing & frizz control",
        ""
      ],
      [
        "Pricing",
        "pricing.3.duration",
        "Pricin 3 duration",
        "180 min",
        ""
      ],
      [
        "Pricing",
        "pricing.3.price",
        "Pricin 3 price",
        "15000",
        "Numbers only."
      ],
      [
        "Pricing",
        "pricing.3.category",
        "Pricin 3 category",
        "Hair",
        "Must match one service category."
      ],
      [
        "Pricing",
        "pricing.3.image",
        "Pricin 3 image",
        "",
        "Optional image URL."
      ],
      [
        "Pricing",
        "pricing.4.id",
        "Pricin 4 id",
        "s4",
        "Keep stable unless you update related rows."
      ],
      [
        "Pricing",
        "pricing.4.name",
        "Pricin 4 name",
        "Hydra Facial",
        ""
      ],
      [
        "Pricing",
        "pricing.4.description",
        "Pricin 4 description",
        "Medical-grade skin treatment",
        ""
      ],
      [
        "Pricing",
        "pricing.4.duration",
        "Pricin 4 duration",
        "75 min",
        ""
      ],
      [
        "Pricing",
        "pricing.4.price",
        "Pricin 4 price",
        "9500",
        "Numbers only."
      ],
      [
        "Pricing",
        "pricing.4.category",
        "Pricin 4 category",
        "Skin",
        "Must match one service category."
      ],
      [
        "Pricing",
        "pricing.4.image",
        "Pricin 4 image",
        "",
        "Optional image URL."
      ],
      [
        "Pricing",
        "pricing.5.id",
        "Pricin 5 id",
        "s5",
        "Keep stable unless you update related rows."
      ],
      [
        "Pricing",
        "pricing.5.name",
        "Pricin 5 name",
        "Manicure & Pedicure",
        ""
      ],
      [
        "Pricing",
        "pricing.5.description",
        "Pricin 5 description",
        "Full nail care treatment",
        ""
      ],
      [
        "Pricing",
        "pricing.5.duration",
        "Pricin 5 duration",
        "90 min",
        ""
      ],
      [
        "Pricing",
        "pricing.5.price",
        "Pricin 5 price",
        "4500",
        "Numbers only."
      ],
      [
        "Pricing",
        "pricing.5.category",
        "Pricin 5 category",
        "Nails",
        "Must match one service category."
      ],
      [
        "Pricing",
        "pricing.5.image",
        "Pricin 5 image",
        "",
        "Optional image URL."
      ],
      [
        "Pricing",
        "pricing.6.id",
        "Pricin 6 id",
        "s6",
        "Keep stable unless you update related rows."
      ],
      [
        "Pricing",
        "pricing.6.name",
        "Pricin 6 name",
        "Bridal Makeup",
        ""
      ],
      [
        "Pricing",
        "pricing.6.description",
        "Pricin 6 description",
        "Complete bridal glam",
        ""
      ],
      [
        "Pricing",
        "pricing.6.duration",
        "Pricin 6 duration",
        "120 min",
        ""
      ],
      [
        "Pricing",
        "pricing.6.price",
        "Pricin 6 price",
        "25000",
        "Numbers only."
      ],
      [
        "Pricing",
        "pricing.6.category",
        "Pricin 6 category",
        "Makeup",
        "Must match one service category."
      ],
      [
        "Pricing",
        "pricing.6.image",
        "Pricin 6 image",
        "",
        "Optional image URL."
      ],
      [
        "Pricing",
        "pricing.7.id",
        "Pricin 7 id",
        "s7",
        "Keep stable unless you update related rows."
      ],
      [
        "Pricing",
        "pricing.7.name",
        "Pricin 7 name",
        "Aromatherapy Massage",
        ""
      ],
      [
        "Pricing",
        "pricing.7.description",
        "Pricin 7 description",
        "Full body relaxation",
        ""
      ],
      [
        "Pricing",
        "pricing.7.duration",
        "Pricin 7 duration",
        "90 min",
        ""
      ],
      [
        "Pricing",
        "pricing.7.price",
        "Pricin 7 price",
        "7500",
        "Numbers only."
      ],
      [
        "Pricing",
        "pricing.7.category",
        "Pricin 7 category",
        "Spa",
        "Must match one service category."
      ],
      [
        "Pricing",
        "pricing.7.image",
        "Pricin 7 image",
        "",
        "Optional image URL."
      ],
      [
        "Pricing",
        "pricing.8.id",
        "Pricin 8 id",
        "s8",
        "Keep stable unless you update related rows."
      ],
      [
        "Pricing",
        "pricing.8.name",
        "Pricin 8 name",
        "Lash Extension",
        ""
      ],
      [
        "Pricing",
        "pricing.8.description",
        "Pricin 8 description",
        "Individual silk lashes",
        ""
      ],
      [
        "Pricing",
        "pricing.8.duration",
        "Pricin 8 duration",
        "120 min",
        ""
      ],
      [
        "Pricing",
        "pricing.8.price",
        "Pricin 8 price",
        "6500",
        "Numbers only."
      ],
      [
        "Pricing",
        "pricing.8.category",
        "Pricin 8 category",
        "Makeup",
        "Must match one service category."
      ],
      [
        "Pricing",
        "pricing.8.image",
        "Pricin 8 image",
        "",
        "Optional image URL."
      ]
    ]
  },
  {
    "name": "Settings - Stylists",
    "rows": [
      [
        "Stylists",
        "stylists.1.id",
        "Stylist 1 id",
        "st1",
        ""
      ],
      [
        "Stylists",
        "stylists.1.name",
        "Stylist 1 name",
        "Amara De Silva",
        ""
      ],
      [
        "Stylists",
        "stylists.1.role",
        "Stylist 1 role",
        "Creative Director & Master Stylist",
        ""
      ],
      [
        "Stylists",
        "stylists.1.experience",
        "Stylist 1 experience",
        "15 years",
        ""
      ],
      [
        "Stylists",
        "stylists.1.image",
        "Stylist 1 image",
        "https://images.unsplash.com/photo-1580618672591-eb180b1a973f?w=400&q=80",
        ""
      ],
      [
        "Stylists",
        "stylists.1.bio",
        "Stylist 1 bio",
        "Trained in Paris and London, Amara brings international expertise to every client. Her work has been featured in Vogue Lanka and Harper's Bazaar.",
        ""
      ],
      [
        "Stylist Specialties",
        "stylists.1.specialties.1",
        "Stylist 1 specialty 1",
        "Balayage",
        ""
      ],
      [
        "Stylist Specialties",
        "stylists.1.specialties.2",
        "Stylist 1 specialty 2",
        "Editorial Cuts",
        ""
      ],
      [
        "Stylist Specialties",
        "stylists.1.specialties.3",
        "Stylist 1 specialty 3",
        "Colour Correction",
        ""
      ],
      [
        "Stylists",
        "stylists.2.id",
        "Stylist 2 id",
        "st2",
        ""
      ],
      [
        "Stylists",
        "stylists.2.name",
        "Stylist 2 name",
        "Kavindra Rajapaksa",
        ""
      ],
      [
        "Stylists",
        "stylists.2.role",
        "Stylist 2 role",
        "Senior Colourist",
        ""
      ],
      [
        "Stylists",
        "stylists.2.experience",
        "Stylist 2 experience",
        "10 years",
        ""
      ],
      [
        "Stylists",
        "stylists.2.image",
        "Stylist 2 image",
        "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&q=80",
        ""
      ],
      [
        "Stylists",
        "stylists.2.bio",
        "Stylist 2 bio",
        "Kavindra is renowned for her colour transformations. A L'Oréal Professionnel certified colourist with a portfolio that speaks for itself.",
        ""
      ],
      [
        "Stylist Specialties",
        "stylists.2.specialties.1",
        "Stylist 2 specialty 1",
        "Ombre",
        ""
      ],
      [
        "Stylist Specialties",
        "stylists.2.specialties.2",
        "Stylist 2 specialty 2",
        "Highlights",
        ""
      ],
      [
        "Stylist Specialties",
        "stylists.2.specialties.3",
        "Stylist 2 specialty 3",
        "Toning",
        ""
      ],
      [
        "Stylists",
        "stylists.3.id",
        "Stylist 3 id",
        "st3",
        ""
      ],
      [
        "Stylists",
        "stylists.3.name",
        "Stylist 3 name",
        "Niroshan Fernando",
        ""
      ],
      [
        "Stylists",
        "stylists.3.role",
        "Stylist 3 role",
        "Skin & Spa Specialist",
        ""
      ],
      [
        "Stylists",
        "stylists.3.experience",
        "Stylist 3 experience",
        "8 years",
        ""
      ],
      [
        "Stylists",
        "stylists.3.image",
        "Stylist 3 image",
        "https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?w=400&q=80",
        ""
      ],
      [
        "Stylists",
        "stylists.3.bio",
        "Stylist 3 bio",
        "A licensed aesthetician with advanced training in clinical skincare. Niroshan's treatments consistently deliver visible, lasting results.",
        ""
      ],
      [
        "Stylist Specialties",
        "stylists.3.specialties.1",
        "Stylist 3 specialty 1",
        "HydraFacial",
        ""
      ],
      [
        "Stylist Specialties",
        "stylists.3.specialties.2",
        "Stylist 3 specialty 2",
        "Chemical Peels",
        ""
      ],
      [
        "Stylist Specialties",
        "stylists.3.specialties.3",
        "Stylist 3 specialty 3",
        "Anti-Ageing",
        ""
      ],
      [
        "Stylists",
        "stylists.4.id",
        "Stylist 4 id",
        "st4",
        ""
      ],
      [
        "Stylists",
        "stylists.4.name",
        "Stylist 4 name",
        "Thilini Senarathna",
        ""
      ],
      [
        "Stylists",
        "stylists.4.role",
        "Stylist 4 role",
        "Makeup Artist & Nail Technician",
        ""
      ],
      [
        "Stylists",
        "stylists.4.experience",
        "Stylist 4 experience",
        "7 years",
        ""
      ],
      [
        "Stylists",
        "stylists.4.image",
        "Stylist 4 image",
        "https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?w=400&q=80",
        ""
      ],
      [
        "Stylists",
        "stylists.4.bio",
        "Stylist 4 bio",
        "Thilini has beautified over 500 brides across Sri Lanka. Her attention to detail and artistic flair make every look uniquely stunning.",
        ""
      ],
      [
        "Stylist Specialties",
        "stylists.4.specialties.1",
        "Stylist 4 specialty 1",
        "Bridal Makeup",
        ""
      ],
      [
        "Stylist Specialties",
        "stylists.4.specialties.2",
        "Stylist 4 specialty 2",
        "Nail Art",
        ""
      ],
      [
        "Stylist Specialties",
        "stylists.4.specialties.3",
        "Stylist 4 specialty 3",
        "Airbrush",
        ""
      ]
    ]
  },
  {
    "name": "Settings - Gallery",
    "rows": [
      [
        "Before After",
        "beforeAfter.1.id",
        "Before/after 1 id",
        "ba1",
        ""
      ],
      [
        "Before After",
        "beforeAfter.1.before",
        "Before/after 1 before",
        "https://images.unsplash.com/photo-1562322140-8baeececf3df?w=400&q=80",
        ""
      ],
      [
        "Before After",
        "beforeAfter.1.after",
        "Before/after 1 after",
        "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?w=400&q=80",
        ""
      ],
      [
        "Before After",
        "beforeAfter.1.treatment",
        "Before/after 1 treatment",
        "Balayage Transformation",
        ""
      ],
      [
        "Before After",
        "beforeAfter.2.id",
        "Before/after 2 id",
        "ba2",
        ""
      ],
      [
        "Before After",
        "beforeAfter.2.before",
        "Before/after 2 before",
        "https://images.unsplash.com/photo-1519699047748-de8e457a634e?w=400&q=80",
        ""
      ],
      [
        "Before After",
        "beforeAfter.2.after",
        "Before/after 2 after",
        "https://images.unsplash.com/photo-1487412840181-b83a50bb0a69?w=400&q=80",
        ""
      ],
      [
        "Before After",
        "beforeAfter.2.treatment",
        "Before/after 2 treatment",
        "HydraFacial Glow",
        ""
      ],
      [
        "Before After",
        "beforeAfter.3.id",
        "Before/after 3 id",
        "ba3",
        ""
      ],
      [
        "Before After",
        "beforeAfter.3.before",
        "Before/after 3 before",
        "https://images.unsplash.com/photo-1527799820374-87036042f33e?w=400&q=80",
        ""
      ],
      [
        "Before After",
        "beforeAfter.3.after",
        "Before/after 3 after",
        "https://images.unsplash.com/photo-1604079628040-94301bb21b91?w=400&q=80",
        ""
      ],
      [
        "Before After",
        "beforeAfter.3.treatment",
        "Before/after 3 treatment",
        "Keratin Smoothing",
        ""
      ]
    ]
  },
  {
    "name": "Settings - Reviews",
    "rows": [
      [
        "Testimonials",
        "testimonials.1.id",
        "Testimonial 1 id",
        "te1",
        ""
      ],
      [
        "Testimonials",
        "testimonials.1.name",
        "Testimonial 1 name",
        "Sashini Ranatunga",
        ""
      ],
      [
        "Testimonials",
        "testimonials.1.role",
        "Testimonial 1 role",
        "Regular Client",
        ""
      ],
      [
        "Testimonials",
        "testimonials.1.content",
        "Testimonial 1 content",
        "Lumière is my absolute haven. Amara did the most stunning balayage — I've never received so many compliments on my hair!",
        ""
      ],
      [
        "Testimonials",
        "testimonials.1.rating",
        "Testimonial 1 rating",
        "5",
        "1 to 5."
      ],
      [
        "Testimonials",
        "testimonials.1.avatar",
        "Testimonial 1 avatar",
        "https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?w=100&q=80",
        ""
      ],
      [
        "Testimonials",
        "testimonials.2.id",
        "Testimonial 2 id",
        "te2",
        ""
      ],
      [
        "Testimonials",
        "testimonials.2.name",
        "Testimonial 2 name",
        "Dilrukshi Wickramasinghe",
        ""
      ],
      [
        "Testimonials",
        "testimonials.2.role",
        "Testimonial 2 role",
        "Bridal Client",
        ""
      ],
      [
        "Testimonials",
        "testimonials.2.content",
        "Testimonial 2 content",
        "Thilini made me feel like a queen on my wedding day. Flawless makeup that lasted all evening. Highly recommend Lumière to every bride!",
        ""
      ],
      [
        "Testimonials",
        "testimonials.2.rating",
        "Testimonial 2 rating",
        "5",
        "1 to 5."
      ],
      [
        "Testimonials",
        "testimonials.2.avatar",
        "Testimonial 2 avatar",
        "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=100&q=80",
        ""
      ],
      [
        "Testimonials",
        "testimonials.3.id",
        "Testimonial 3 id",
        "te3",
        ""
      ],
      [
        "Testimonials",
        "testimonials.3.name",
        "Testimonial 3 name",
        "Priyanka Aluthge",
        ""
      ],
      [
        "Testimonials",
        "testimonials.3.role",
        "Testimonial 3 role",
        "Spa Member",
        ""
      ],
      [
        "Testimonials",
        "testimonials.3.content",
        "Testimonial 3 content",
        "The HydraFacial with Niroshan is life-changing. My skin has never been this clear and glowing. The spa ambience is pure luxury.",
        ""
      ],
      [
        "Testimonials",
        "testimonials.3.rating",
        "Testimonial 3 rating",
        "5",
        "1 to 5."
      ],
      [
        "Testimonials",
        "testimonials.3.avatar",
        "Testimonial 3 avatar",
        "https://images.unsplash.com/photo-1488426862026-3ee34a7d66df?w=100&q=80",
        ""
      ]
    ]
  }
];

function jsonResponse(payload) {
  return ContentService.createTextOutput(JSON.stringify(payload)).setMimeType(
    ContentService.MimeType.JSON,
  );
}

function getSpreadsheet() {
  return SpreadsheetApp.openById(SHEET_ID);
}

function getOrCreateSheet(name) {
  const spreadsheet = getSpreadsheet();
  return spreadsheet.getSheetByName(name) || spreadsheet.insertSheet(name);
}

function getLeadSheet() {
  const sheet = getOrCreateSheet(LEAD_SHEET_NAME);

  if (sheet.getLastRow() === 0) {
    sheet.appendRow(LEAD_HEADERS);
    formatLeadSheet(sheet);
  }

  return sheet;
}

function formatLeadSheet(sheet) {
  sheet.setFrozenRows(1);
  sheet.setColumnWidths(1, 1, 140);
  sheet.setColumnWidths(2, 1, 110);
  sheet.setColumnWidths(3, 1, 190);
  sheet.setColumnWidths(4, 1, 170);
  sheet.setColumnWidths(5, 1, 220);
  sheet.setColumnWidths(6, 1, 140);
  sheet.setColumnWidths(7, 1, 190);
  sheet.setColumnWidths(8, 1, 360);
  sheet.setColumnWidths(9, 1, 160);

  sheet
    .getRange(1, 1, 1, LEAD_HEADERS.length)
    .setBackground("#0f766e")
    .setFontColor("#ffffff")
    .setFontWeight("bold")
    .setHorizontalAlignment("center")
    .setVerticalAlignment("middle");

  if (sheet.getLastRow() > 1) {
    sheet
      .getRange(2, 1, sheet.getLastRow() - 1, LEAD_HEADERS.length)
      .setBackground("#ffffff")
      .setVerticalAlignment("middle")
      .setWrap(true);
  }

  applyFilter(sheet);
}

function formatSettingsSheet(sheet, rowCount) {
  sheet.setFrozenRows(1);
  sheet.setColumnWidths(1, 1, 160);
  sheet.setColumnWidths(2, 1, 230);
  sheet.setColumnWidths(3, 1, 210);
  sheet.setColumnWidths(4, 1, 430);
  sheet.setColumnWidths(5, 1, 400);

  sheet
    .getRange(1, 1, 1, CONTENT_HEADERS.length)
    .setBackground("#e2e8f0")
    .setFontColor("#0f172a")
    .setFontWeight("bold")
    .setHorizontalAlignment("center")
    .setVerticalAlignment("middle");

  if (rowCount > 0) {
    sheet
      .getRange(2, 1, rowCount, CONTENT_HEADERS.length)
      .setVerticalAlignment("middle")
      .setWrap(true);

    sheet
      .getRange(2, 2, rowCount, 2)
      .setBackground("#f8fafc");

    sheet
      .getRange(2, 4, rowCount, 1)
      .setBackground("#fffbeb")
      .setNumberFormat("@");

    sheet
      .getRange(2, 5, rowCount, 1)
      .setBackground("#f8fafc")
      .setFontColor("#475569");

    colorSectionColumn(sheet, rowCount);
  }

  sheet.getDataRange().setBorder(true, true, true, true, true, true, "#e2e8f0", null);
  applyFilter(sheet);
}

function colorSectionColumn(sheet, rowCount) {
  const colors = [
    "#ddf7f1",
    "#dbeafe",
    "#dcfce7",
    "#fef3c7",
    "#e0e7ff",
    "#ede9fe",
    "#fce7f3",
    "#fae8ff",
    "#ffedd5",
    "#ffe4e6",
  ];
  const sectionColors = {};
  const sections = sheet.getRange(2, 1, rowCount, 1).getDisplayValues();
  let nextColor = 0;

  for (let index = 0; index < sections.length; index += 1) {
    const section = String(sections[index][0]).trim();

    if (!sectionColors[section]) {
      sectionColors[section] = colors[nextColor % colors.length];
      nextColor += 1;
    }

    sheet
      .getRange(index + 2, 1, 1, 1)
      .setBackground(sectionColors[section])
      .setFontWeight("bold")
      .setFontColor("#334155");
  }
}

function applyFilter(sheet) {
  const existingFilter = sheet.getFilter();

  if (existingFilter) {
    existingFilter.remove();
  }

  sheet.getDataRange().createFilter();
}

function writeSettingsSheet(settingsSheet, shouldClear) {
  const sheet = getOrCreateSheet(settingsSheet.name);

  if (shouldClear) {
    sheet.clear();
  }

  sheet
    .getRange(1, 1, settingsSheet.rows.length + 1, CONTENT_HEADERS.length)
    .setValues([CONTENT_HEADERS].concat(settingsSheet.rows));

  formatSettingsSheet(sheet, settingsSheet.rows.length);

  return sheet;
}

function setupSettingsSheets() {
  SETTINGS_SHEETS.forEach(function(settingsSheet) {
    writeSettingsSheet(settingsSheet, true);
  });

  SpreadsheetApp.flush();

  return SETTINGS_SHEETS.map(function(settingsSheet) {
    return settingsSheet.name;
  });
}

function ensureSettingsSheets() {
  SETTINGS_SHEETS.forEach(function(settingsSheet) {
    const sheet = getSpreadsheet().getSheetByName(settingsSheet.name);

    if (!sheet || sheet.getLastRow() < 2) {
      writeSettingsSheet(settingsSheet, true);
    }
  });

  SpreadsheetApp.flush();

  return SETTINGS_SHEETS.map(function(settingsSheet) {
    return getSpreadsheet().getSheetByName(settingsSheet.name);
  });
}

function getHeaderIndex(headers, name) {
  const requestedName = String(name).trim().toLowerCase();

  for (let index = 0; index < headers.length; index += 1) {
    if (String(headers[index]).trim().toLowerCase() === requestedName) {
      return index;
    }
  }

  throw new Error('Missing required header "' + name + '".');
}

function getRichTextLinkUrl(richTextValue) {
  if (!richTextValue) {
    return "";
  }

  if (typeof richTextValue.getLinkUrl === "function") {
    const directUrl = richTextValue.getLinkUrl();

    if (directUrl) {
      return directUrl;
    }
  }

  if (typeof richTextValue.getRuns !== "function") {
    return "";
  }

  const runs = richTextValue.getRuns();

  for (let index = 0; index < runs.length; index += 1) {
    const runUrl = runs[index].getLinkUrl();

    if (runUrl) {
      return runUrl;
    }
  }

  return "";
}

function readContentMap() {
  const sheets = ensureSettingsSheets();
  const content = {};

  sheets.forEach(function(sheet) {
    if (!sheet || sheet.getLastRow() < 2) {
      return;
    }

    const range = sheet.getDataRange();
    const values = range.getDisplayValues();
    const richTextValues = range.getRichTextValues();
    const headers = values[0];
    const keyIndex = getHeaderIndex(headers, "Key");
    const valueIndex = getHeaderIndex(headers, "Value");

    for (let rowIndex = 1; rowIndex < values.length; rowIndex += 1) {
      const row = values[rowIndex];
      const key = String(row[keyIndex]).trim();
      const linkedValue = getRichTextLinkUrl(richTextValues[rowIndex][valueIndex]);
      const value = String(linkedValue || row[valueIndex]).trim();

      if (key) {
        content[key] = value;
      }
    }
  });

  if (Object.keys(content).length === 0) {
    throw new Error(TEMPLATE_LABEL + " settings sheets have no editable rows.");
  }

  return content;
}

function isSetupAction(action) {
  return action === "setupSettings" ||
    action === "setupContent" ||
    action === "setup" ||
    action === "setup" + TEMPLATE_LABEL.replace(/\s/g, "") + "Settings";
}

function isContentRequest(action, template) {
  return template === TEMPLATE_ID ||
    action === "content" ||
    action === TEMPLATE_ID + "Content";
}

function doGet(e) {
  const action = e && e.parameter ? e.parameter.action : "";
  const template = e && e.parameter ? e.parameter.template : "";

  try {
    if (isSetupAction(action)) {
      const sheetNames = setupSettingsSheets();
      return jsonResponse({
        ok: true,
        template: TEMPLATE_ID,
        message: "Created and formatted the " + TEMPLATE_LABEL + " settings tabs.",
        sheets: sheetNames,
      });
    }

    if (isContentRequest(action, template)) {
      return jsonResponse({
        ok: true,
        template: TEMPLATE_ID,
        updatedAt: new Date().toISOString(),
        content: readContentMap(),
      });
    }

    return jsonResponse({
      ok: true,
      template: TEMPLATE_ID,
      message: TEMPLATE_LABEL + " Google Apps Script endpoint is ready.",
      actions: ["setupSalonSettings", "setupSettings", "setupContent", "salonContent", "content"],
    });
  } catch (error) {
    return jsonResponse({
      ok: false,
      template: TEMPLATE_ID,
      error: error && error.message ? error.message : String(error),
    });
  }
}

function doPost(e) {
  if (!e || !e.postData || !e.postData.contents) {
    return jsonResponse({
      ok: false,
      template: TEMPLATE_ID,
      error: "No form data received. Submit the website form or run testDoPost instead.",
    });
  }

  const data = JSON.parse(e.postData.contents);
  const sheet = getLeadSheet();

  sheet.appendRow([
    new Date(),
    data.template || TEMPLATE_ID,
    data.businessName || "",
    data.name || "",
    data.email || "",
    data.phone || "",
    data.subject || "",
    data.message || "",
    data.sourcePage || "",
  ]);

  SpreadsheetApp.flush();

  return jsonResponse({ ok: true, template: TEMPLATE_ID });
}

function testDoPost() {
  return doPost({
    postData: {
      contents: JSON.stringify({
        template: TEMPLATE_ID,
        businessName: "Demo Salon",
        name: "Test Lead",
        email: "test@example.com",
        phone: "0712345678",
        subject: "Website enquiry",
        message: "Testing the " + TEMPLATE_LABEL + " website form",
        sourcePage: "/templates/" + TEMPLATE_ID,
      }),
    },
  });
}
