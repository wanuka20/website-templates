const SHEET_ID = "129P7GmuOeGKudve63Nxrj3PVinEVamLOinTg18SeqhM";
const TEMPLATE_ID = "realestate";
const TEMPLATE_LABEL = "Real Estate";
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
        "Keshan Realty",
        "Brand name in navbars, footers, forms, and metadata."
      ],
      [
        "Basic Info",
        "tagline",
        "Tagline",
        "Finding You Home",
        "Short brand tagline."
      ],
      [
        "Basic Info",
        "description",
        "Description",
        "Colombo's most trusted real estate agent. From luxury apartments to family homes, Keshan de Silva makes property buying and selling effortless.",
        "About/summary description."
      ],
      [
        "Basic Info",
        "phone",
        "Phone",
        "+94 77 567 8901",
        "Main phone number."
      ],
      [
        "Basic Info",
        "email",
        "Email",
        "keshan@keshanrealty.lk",
        "Main email address."
      ],
      [
        "Basic Info",
        "address",
        "Address",
        "55 Flower Road",
        "Street address."
      ],
      [
        "Basic Info",
        "city",
        "City",
        "Colombo 07, Sri Lanka",
        "City/location text."
      ],
      [
        "Basic Info",
        "heroTitle",
        "Hero title",
        "Find Your\nPerfect Home",
        "Hero headline. Line breaks are preserved."
      ],
      [
        "Basic Info",
        "heroSubtitle",
        "Hero subtitle",
        "Trusted by over 500 families across Colombo. Let Sri Lanka's leading property agent guide you to your dream property.",
        "Hero supporting copy."
      ],
      [
        "Basic Info",
        "heroCtaText",
        "Hero CTA text",
        "View Properties",
        "Main hero button text."
      ],
      [
        "Basic Info",
        "heroImage",
        "Hero image URL",
        "https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=1600&q=80",
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
        "SEO",
        "seo.title",
        "SEO title",
        "Keshan Realty | Top Real Estate Agent in Colombo, Sri Lanka",
        "Browser/search title."
      ],
      [
        "SEO",
        "seo.description",
        "SEO description",
        "Find your dream home in Colombo with Keshan de Silva, Sri Lanka's most trusted real estate agent. Homes, apartments & villas for sale and rent.",
        "Search/social description."
      ],
      [
        "SEO",
        "seo.ogImage",
        "Open Graph image",
        "https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=1200&q=80",
        "Social sharing image."
      ],
      [
        "SEO",
        "seo.keywords.1",
        "SEO keyword 1",
        "real estate colombo",
        "One keyword or phrase per row."
      ],
      [
        "SEO",
        "seo.keywords.2",
        "SEO keyword 2",
        "houses for sale sri lanka",
        "One keyword or phrase per row."
      ],
      [
        "SEO",
        "seo.keywords.3",
        "SEO keyword 3",
        "apartments colombo",
        "One keyword or phrase per row."
      ],
      [
        "SEO",
        "seo.keywords.4",
        "SEO keyword 4",
        "property agent",
        "One keyword or phrase per row."
      ],
      [
        "SEO",
        "seo.keywords.5",
        "SEO keyword 5",
        "buy house colombo",
        "One keyword or phrase per row."
      ],
      [
        "SEO",
        "seo.keywords.6",
        "SEO keyword 6",
        "property for sale",
        "One keyword or phrase per row."
      ],
      [
        "Social WhatsApp",
        "socialLinks.facebook",
        "Facebook URL",
        "https://facebook.com/keshanrealty",
        "Leave blank if unused."
      ],
      [
        "Social WhatsApp",
        "socialLinks.instagram",
        "Instagram URL",
        "https://instagram.com/keshanrealty",
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
        "https://linkedin.com/in/keshandesilva",
        "Leave blank if unused."
      ],
      [
        "Social WhatsApp",
        "whatsapp.phone",
        "WhatsApp phone",
        "94775678901",
        "Country code + number, no plus sign or spaces."
      ],
      [
        "Social WhatsApp",
        "whatsapp.defaultMessage",
        "WhatsApp default message",
        "Hello Keshan! I found your listing and I'm interested in learning more about properties available in Colombo. Can we connect?",
        "Pre-filled WhatsApp message."
      ]
    ]
  },
  {
    "name": "Settings - Agent",
    "rows": [
      [
        "Agent Profile",
        "agent.name",
        "Agent name",
        "Keshan de Silva",
        ""
      ],
      [
        "Agent Profile",
        "agent.title",
        "Agent title",
        "Principal Agent & Licensed Realtor",
        ""
      ],
      [
        "Agent Profile",
        "agent.image",
        "Agent image",
        "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400&q=80",
        ""
      ],
      [
        "Agent Profile",
        "agent.bio",
        "Agent bio",
        "With over 12 years of real estate experience, Keshan de Silva has built an unmatched reputation for integrity, market knowledge, and exceptional client service. He has facilitated over 500 successful property transactions in the Colombo district, covering everything from studio apartments to luxury penthouses.\n\nKeshan believes that buying or selling a home is one of life's biggest decisions — and he treats it that way. His data-driven approach, combined with genuine care for his clients, makes every transaction smooth and stress-free.",
        ""
      ],
      [
        "Agent Profile",
        "agent.experience",
        "Agent experience",
        "12 Years",
        ""
      ],
      [
        "Agent Profile",
        "agent.totalSales",
        "Agent totalSales",
        "LKR 2.8B+",
        ""
      ],
      [
        "Agent Profile",
        "agent.clientsServed",
        "Agent clientsServed",
        "500+",
        ""
      ],
      [
        "Agent Profile",
        "agent.phone",
        "Agent phone",
        "+94 77 567 8901",
        ""
      ],
      [
        "Agent Profile",
        "agent.email",
        "Agent email",
        "keshan@keshanrealty.lk",
        ""
      ],
      [
        "Agent Certifications",
        "agent.certifications.1",
        "Agent certification 1",
        "Licensed Realtor (RICS)",
        ""
      ],
      [
        "Agent Certifications",
        "agent.certifications.2",
        "Agent certification 2",
        "Certified Property Valuer",
        ""
      ],
      [
        "Agent Certifications",
        "agent.certifications.3",
        "Agent certification 3",
        "NAREB Member",
        ""
      ],
      [
        "Agent Languages",
        "agent.languages.1",
        "Agent language 1",
        "Sinhala",
        ""
      ],
      [
        "Agent Languages",
        "agent.languages.2",
        "Agent language 2",
        "English",
        ""
      ],
      [
        "Agent Languages",
        "agent.languages.3",
        "Agent language 3",
        "Tamil",
        ""
      ]
    ]
  },
  {
    "name": "Settings - Properties",
    "rows": [
      [
        "Properties",
        "properties.1.id",
        "Property 1 id",
        "p1",
        ""
      ],
      [
        "Properties",
        "properties.1.title",
        "Property 1 title",
        "Luxury Penthouse — Cinnamon Life",
        ""
      ],
      [
        "Properties",
        "properties.1.type",
        "Property 1 type",
        "Apartment",
        ""
      ],
      [
        "Properties",
        "properties.1.status",
        "Property 1 status",
        "For Sale",
        ""
      ],
      [
        "Properties",
        "properties.1.price",
        "Property 1 price",
        "95000000",
        "Numbers only."
      ],
      [
        "Properties",
        "properties.1.currency",
        "Property 1 currency",
        "LKR",
        ""
      ],
      [
        "Properties",
        "properties.1.bedrooms",
        "Property 1 bedrooms",
        "4",
        "Numbers only."
      ],
      [
        "Properties",
        "properties.1.bathrooms",
        "Property 1 bathrooms",
        "4",
        "Numbers only."
      ],
      [
        "Properties",
        "properties.1.area",
        "Property 1 area",
        "4200",
        "Numbers only."
      ],
      [
        "Properties",
        "properties.1.areaUnit",
        "Property 1 areaUnit",
        "sq ft",
        ""
      ],
      [
        "Properties",
        "properties.1.location",
        "Property 1 location",
        "Colombo 02",
        ""
      ],
      [
        "Properties",
        "properties.1.description",
        "Property 1 description",
        "An extraordinary penthouse at the iconic Cinnamon Life tower. Panoramic views of the Indian Ocean and city skyline. Features a private rooftop terrace, chef's kitchen, and concierge services.",
        ""
      ],
      [
        "Properties",
        "properties.1.featured",
        "Property 1 featured",
        "TRUE",
        "TRUE or FALSE."
      ],
      [
        "Property Features",
        "properties.1.features.1",
        "Property 1 feature 1",
        "Ocean view",
        ""
      ],
      [
        "Property Features",
        "properties.1.features.2",
        "Property 1 feature 2",
        "Private rooftop",
        ""
      ],
      [
        "Property Features",
        "properties.1.features.3",
        "Property 1 feature 3",
        "Chef's kitchen",
        ""
      ],
      [
        "Property Features",
        "properties.1.features.4",
        "Property 1 feature 4",
        "Smart home",
        ""
      ],
      [
        "Property Features",
        "properties.1.features.5",
        "Property 1 feature 5",
        "2 parking bays",
        ""
      ],
      [
        "Property Features",
        "properties.1.features.6",
        "Property 1 feature 6",
        "24/7 concierge",
        ""
      ],
      [
        "Property Features",
        "properties.1.features.7",
        "Property 1 feature 7",
        "Swimming pool access",
        ""
      ],
      [
        "Property Features",
        "properties.1.features.8",
        "Property 1 feature 8",
        "Gym access",
        ""
      ],
      [
        "Property Images",
        "properties.1.images.1",
        "Property 1 image 1",
        "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=800&q=80",
        ""
      ],
      [
        "Property Images",
        "properties.1.images.2",
        "Property 1 image 2",
        "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=800&q=80",
        ""
      ],
      [
        "Properties",
        "properties.2.id",
        "Property 2 id",
        "p2",
        ""
      ],
      [
        "Properties",
        "properties.2.title",
        "Property 2 title",
        "Modern 3BR Apartment — Rajagiriya",
        ""
      ],
      [
        "Properties",
        "properties.2.type",
        "Property 2 type",
        "Apartment",
        ""
      ],
      [
        "Properties",
        "properties.2.status",
        "Property 2 status",
        "For Sale",
        ""
      ],
      [
        "Properties",
        "properties.2.price",
        "Property 2 price",
        "28500000",
        "Numbers only."
      ],
      [
        "Properties",
        "properties.2.currency",
        "Property 2 currency",
        "LKR",
        ""
      ],
      [
        "Properties",
        "properties.2.bedrooms",
        "Property 2 bedrooms",
        "3",
        "Numbers only."
      ],
      [
        "Properties",
        "properties.2.bathrooms",
        "Property 2 bathrooms",
        "2",
        "Numbers only."
      ],
      [
        "Properties",
        "properties.2.area",
        "Property 2 area",
        "1850",
        "Numbers only."
      ],
      [
        "Properties",
        "properties.2.areaUnit",
        "Property 2 areaUnit",
        "sq ft",
        ""
      ],
      [
        "Properties",
        "properties.2.location",
        "Property 2 location",
        "Rajagiriya",
        ""
      ],
      [
        "Properties",
        "properties.2.description",
        "Property 2 description",
        "Contemporary 3-bedroom apartment in a secure gated complex. Open-plan living, modern kitchen, and a balcony with garden views. Walking distance to Rajagiriya town.",
        ""
      ],
      [
        "Properties",
        "properties.2.featured",
        "Property 2 featured",
        "TRUE",
        "TRUE or FALSE."
      ],
      [
        "Property Features",
        "properties.2.features.1",
        "Property 2 feature 1",
        "Gated security",
        ""
      ],
      [
        "Property Features",
        "properties.2.features.2",
        "Property 2 feature 2",
        "Balcony",
        ""
      ],
      [
        "Property Features",
        "properties.2.features.3",
        "Property 2 feature 3",
        "Open-plan living",
        ""
      ],
      [
        "Property Features",
        "properties.2.features.4",
        "Property 2 feature 4",
        "Modern kitchen",
        ""
      ],
      [
        "Property Features",
        "properties.2.features.5",
        "Property 2 feature 5",
        "Car park",
        ""
      ],
      [
        "Property Features",
        "properties.2.features.6",
        "Property 2 feature 6",
        "Generator backup",
        ""
      ],
      [
        "Property Features",
        "properties.2.features.7",
        "Property 2 feature 7",
        "Water tank",
        ""
      ],
      [
        "Property Images",
        "properties.2.images.1",
        "Property 2 image 1",
        "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=800&q=80",
        ""
      ],
      [
        "Properties",
        "properties.3.id",
        "Property 3 id",
        "p3",
        ""
      ],
      [
        "Properties",
        "properties.3.title",
        "Property 3 title",
        "Elegant Family Villa — Battaramulla",
        ""
      ],
      [
        "Properties",
        "properties.3.type",
        "Property 3 type",
        "Villa",
        ""
      ],
      [
        "Properties",
        "properties.3.status",
        "Property 3 status",
        "For Sale",
        ""
      ],
      [
        "Properties",
        "properties.3.price",
        "Property 3 price",
        "62000000",
        "Numbers only."
      ],
      [
        "Properties",
        "properties.3.currency",
        "Property 3 currency",
        "LKR",
        ""
      ],
      [
        "Properties",
        "properties.3.bedrooms",
        "Property 3 bedrooms",
        "5",
        "Numbers only."
      ],
      [
        "Properties",
        "properties.3.bathrooms",
        "Property 3 bathrooms",
        "4",
        "Numbers only."
      ],
      [
        "Properties",
        "properties.3.area",
        "Property 3 area",
        "5500",
        "Numbers only."
      ],
      [
        "Properties",
        "properties.3.areaUnit",
        "Property 3 areaUnit",
        "sq ft",
        ""
      ],
      [
        "Properties",
        "properties.3.location",
        "Property 3 location",
        "Battaramulla",
        ""
      ],
      [
        "Properties",
        "properties.3.description",
        "Property 3 description",
        "A stunning contemporary villa on a 20-perch plot. Features a private swimming pool, landscaped gardens, and a separate servant's quarters.",
        ""
      ],
      [
        "Properties",
        "properties.3.featured",
        "Property 3 featured",
        "TRUE",
        "TRUE or FALSE."
      ],
      [
        "Property Features",
        "properties.3.features.1",
        "Property 3 feature 1",
        "Private pool",
        ""
      ],
      [
        "Property Features",
        "properties.3.features.2",
        "Property 3 feature 2",
        "Landscaped garden",
        ""
      ],
      [
        "Property Features",
        "properties.3.features.3",
        "Property 3 feature 3",
        "Home theatre",
        ""
      ],
      [
        "Property Features",
        "properties.3.features.4",
        "Property 3 feature 4",
        "Study room",
        ""
      ],
      [
        "Property Features",
        "properties.3.features.5",
        "Property 3 feature 5",
        "Servant's quarters",
        ""
      ],
      [
        "Property Features",
        "properties.3.features.6",
        "Property 3 feature 6",
        "Double garage",
        ""
      ],
      [
        "Property Features",
        "properties.3.features.7",
        "Property 3 feature 7",
        "Solar panels",
        ""
      ],
      [
        "Property Features",
        "properties.3.features.8",
        "Property 3 feature 8",
        "Bore water",
        ""
      ],
      [
        "Property Images",
        "properties.3.images.1",
        "Property 3 image 1",
        "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=800&q=80",
        ""
      ],
      [
        "Properties",
        "properties.4.id",
        "Property 4 id",
        "p4",
        ""
      ],
      [
        "Properties",
        "properties.4.title",
        "Property 4 title",
        "Studio Apartment — Kollupitiya",
        ""
      ],
      [
        "Properties",
        "properties.4.type",
        "Property 4 type",
        "Apartment",
        ""
      ],
      [
        "Properties",
        "properties.4.status",
        "Property 4 status",
        "For Rent",
        ""
      ],
      [
        "Properties",
        "properties.4.price",
        "Property 4 price",
        "65000",
        "Numbers only."
      ],
      [
        "Properties",
        "properties.4.currency",
        "Property 4 currency",
        "LKR",
        ""
      ],
      [
        "Properties",
        "properties.4.bedrooms",
        "Property 4 bedrooms",
        "",
        "Numbers only."
      ],
      [
        "Properties",
        "properties.4.bathrooms",
        "Property 4 bathrooms",
        "",
        "Numbers only."
      ],
      [
        "Properties",
        "properties.4.area",
        "Property 4 area",
        "650",
        "Numbers only."
      ],
      [
        "Properties",
        "properties.4.areaUnit",
        "Property 4 areaUnit",
        "sq ft",
        ""
      ],
      [
        "Properties",
        "properties.4.location",
        "Property 4 location",
        "Colombo 03",
        ""
      ],
      [
        "Properties",
        "properties.4.description",
        "Property 4 description",
        "A stylish studio apartment in the heart of Colombo 3. Fully furnished with modern appliances. Ideal for young professionals.",
        ""
      ],
      [
        "Properties",
        "properties.4.featured",
        "Property 4 featured",
        "",
        "TRUE or FALSE."
      ],
      [
        "Property Features",
        "properties.4.features.1",
        "Property 4 feature 1",
        "Fully furnished",
        ""
      ],
      [
        "Property Features",
        "properties.4.features.2",
        "Property 4 feature 2",
        "Modern appliances",
        ""
      ],
      [
        "Property Features",
        "properties.4.features.3",
        "Property 4 feature 3",
        "Security",
        ""
      ],
      [
        "Property Features",
        "properties.4.features.4",
        "Property 4 feature 4",
        "Car park",
        ""
      ],
      [
        "Property Features",
        "properties.4.features.5",
        "Property 4 feature 5",
        "Gym access",
        ""
      ],
      [
        "Property Features",
        "properties.4.features.6",
        "Property 4 feature 6",
        "Rooftop pool",
        ""
      ],
      [
        "Property Images",
        "properties.4.images.1",
        "Property 4 image 1",
        "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?w=800&q=80",
        ""
      ],
      [
        "Properties",
        "properties.5.id",
        "Property 5 id",
        "p5",
        ""
      ],
      [
        "Properties",
        "properties.5.title",
        "Property 5 title",
        "Commercial Space — Maradana",
        ""
      ],
      [
        "Properties",
        "properties.5.type",
        "Property 5 type",
        "Commercial",
        ""
      ],
      [
        "Properties",
        "properties.5.status",
        "Property 5 status",
        "For Rent",
        ""
      ],
      [
        "Properties",
        "properties.5.price",
        "Property 5 price",
        "150000",
        "Numbers only."
      ],
      [
        "Properties",
        "properties.5.currency",
        "Property 5 currency",
        "LKR",
        ""
      ],
      [
        "Properties",
        "properties.5.bedrooms",
        "Property 5 bedrooms",
        "",
        "Numbers only."
      ],
      [
        "Properties",
        "properties.5.bathrooms",
        "Property 5 bathrooms",
        "",
        "Numbers only."
      ],
      [
        "Properties",
        "properties.5.area",
        "Property 5 area",
        "3000",
        "Numbers only."
      ],
      [
        "Properties",
        "properties.5.areaUnit",
        "Property 5 areaUnit",
        "sq ft",
        ""
      ],
      [
        "Properties",
        "properties.5.location",
        "Property 5 location",
        "Maradana",
        ""
      ],
      [
        "Properties",
        "properties.5.description",
        "Property 5 description",
        "Prime commercial space on a high-traffic road. Ground floor with large display windows. Suitable for retail, showroom, or office.",
        ""
      ],
      [
        "Properties",
        "properties.5.featured",
        "Property 5 featured",
        "",
        "TRUE or FALSE."
      ],
      [
        "Property Features",
        "properties.5.features.1",
        "Property 5 feature 1",
        "Street frontage",
        ""
      ],
      [
        "Property Features",
        "properties.5.features.2",
        "Property 5 feature 2",
        "High foot traffic",
        ""
      ],
      [
        "Property Features",
        "properties.5.features.3",
        "Property 5 feature 3",
        "Car parking (10 bays)",
        ""
      ],
      [
        "Property Features",
        "properties.5.features.4",
        "Property 5 feature 4",
        "Backup generator",
        ""
      ],
      [
        "Property Features",
        "properties.5.features.5",
        "Property 5 feature 5",
        "Loading bay",
        ""
      ],
      [
        "Property Images",
        "properties.5.images.1",
        "Property 5 image 1",
        "https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&q=80",
        ""
      ],
      [
        "Properties",
        "properties.6.id",
        "Property 6 id",
        "p6",
        ""
      ],
      [
        "Properties",
        "properties.6.title",
        "Property 6 title",
        "Luxury 2BR Apartment — Havelock City",
        ""
      ],
      [
        "Properties",
        "properties.6.type",
        "Property 6 type",
        "Apartment",
        ""
      ],
      [
        "Properties",
        "properties.6.status",
        "Property 6 status",
        "For Sale",
        ""
      ],
      [
        "Properties",
        "properties.6.price",
        "Property 6 price",
        "38000000",
        "Numbers only."
      ],
      [
        "Properties",
        "properties.6.currency",
        "Property 6 currency",
        "LKR",
        ""
      ],
      [
        "Properties",
        "properties.6.bedrooms",
        "Property 6 bedrooms",
        "2",
        "Numbers only."
      ],
      [
        "Properties",
        "properties.6.bathrooms",
        "Property 6 bathrooms",
        "2",
        "Numbers only."
      ],
      [
        "Properties",
        "properties.6.area",
        "Property 6 area",
        "1450",
        "Numbers only."
      ],
      [
        "Properties",
        "properties.6.areaUnit",
        "Property 6 areaUnit",
        "sq ft",
        ""
      ],
      [
        "Properties",
        "properties.6.location",
        "Property 6 location",
        "Colombo 05",
        ""
      ],
      [
        "Properties",
        "properties.6.description",
        "Property 6 description",
        "Brand new apartment in Havelock City with world-class amenities. Modern finishes, spacious layout, and stunning city views.",
        ""
      ],
      [
        "Properties",
        "properties.6.featured",
        "Property 6 featured",
        "TRUE",
        "TRUE or FALSE."
      ],
      [
        "Property Features",
        "properties.6.features.1",
        "Property 6 feature 1",
        "City view",
        ""
      ],
      [
        "Property Features",
        "properties.6.features.2",
        "Property 6 feature 2",
        "Modern finishes",
        ""
      ],
      [
        "Property Features",
        "properties.6.features.3",
        "Property 6 feature 3",
        "24/7 security",
        ""
      ],
      [
        "Property Features",
        "properties.6.features.4",
        "Property 6 feature 4",
        "Multiple pools",
        ""
      ],
      [
        "Property Features",
        "properties.6.features.5",
        "Property 6 feature 5",
        "Children's play area",
        ""
      ],
      [
        "Property Features",
        "properties.6.features.6",
        "Property 6 feature 6",
        "Supermarket access",
        ""
      ],
      [
        "Property Features",
        "properties.6.features.7",
        "Property 6 feature 7",
        "Car park",
        ""
      ],
      [
        "Property Images",
        "properties.6.images.1",
        "Property 6 image 1",
        "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=800&q=80",
        ""
      ]
    ]
  },
  {
    "name": "Settings - Services",
    "rows": [
      [
        "Services",
        "services.1.id",
        "Service 1 id",
        "sv1",
        ""
      ],
      [
        "Services",
        "services.1.name",
        "Service 1 name",
        "Property Buying",
        ""
      ],
      [
        "Services",
        "services.1.description",
        "Service 1 description",
        "From shortlisting to signing — we guide you through every step of buying your perfect property.",
        ""
      ],
      [
        "Services",
        "services.1.icon",
        "Service 1 icon",
        "Home",
        ""
      ],
      [
        "Services",
        "services.2.id",
        "Service 2 id",
        "sv2",
        ""
      ],
      [
        "Services",
        "services.2.name",
        "Service 2 name",
        "Property Selling",
        ""
      ],
      [
        "Services",
        "services.2.description",
        "Service 2 description",
        "Maximum exposure, strategic pricing, and expert negotiation to get you the best possible price.",
        ""
      ],
      [
        "Services",
        "services.2.icon",
        "Service 2 icon",
        "TrendingUp",
        ""
      ],
      [
        "Services",
        "services.3.id",
        "Service 3 id",
        "sv3",
        ""
      ],
      [
        "Services",
        "services.3.name",
        "Service 3 name",
        "Property Rental",
        ""
      ],
      [
        "Services",
        "services.3.description",
        "Service 3 description",
        "Find quality tenants fast or your ideal rental property. Full property management available.",
        ""
      ],
      [
        "Services",
        "services.3.icon",
        "Service 3 icon",
        "Key",
        ""
      ],
      [
        "Services",
        "services.4.id",
        "Service 4 id",
        "sv4",
        ""
      ],
      [
        "Services",
        "services.4.name",
        "Service 4 name",
        "Property Valuation",
        ""
      ],
      [
        "Services",
        "services.4.description",
        "Service 4 description",
        "Accurate market valuations by a certified valuer. Know your property's true worth.",
        ""
      ],
      [
        "Services",
        "services.4.icon",
        "Service 4 icon",
        "BarChart3",
        ""
      ],
      [
        "Services",
        "services.5.id",
        "Service 5 id",
        "sv5",
        ""
      ],
      [
        "Services",
        "services.5.name",
        "Service 5 name",
        "Investment Advice",
        ""
      ],
      [
        "Services",
        "services.5.description",
        "Service 5 description",
        "Data-driven property investment guidance to maximise your returns in the Sri Lankan market.",
        ""
      ],
      [
        "Services",
        "services.5.icon",
        "Service 5 icon",
        "PieChart",
        ""
      ],
      [
        "Services",
        "services.6.id",
        "Service 6 id",
        "sv6",
        ""
      ],
      [
        "Services",
        "services.6.name",
        "Service 6 name",
        "Legal Support",
        ""
      ],
      [
        "Services",
        "services.6.description",
        "Service 6 description",
        "Coordination with leading property lawyers to ensure seamless, legally sound transactions.",
        ""
      ],
      [
        "Services",
        "services.6.icon",
        "Service 6 icon",
        "FileText",
        ""
      ]
    ]
  },
  {
    "name": "Settings - Local Proof",
    "rows": [
      [
        "Areas",
        "areas.1",
        "Area 1",
        "Colombo 01–07",
        "Service area or neighborhood."
      ],
      [
        "Areas",
        "areas.2",
        "Area 2",
        "Rajagiriya",
        "Service area or neighborhood."
      ],
      [
        "Areas",
        "areas.3",
        "Area 3",
        "Battaramulla",
        "Service area or neighborhood."
      ],
      [
        "Areas",
        "areas.4",
        "Area 4",
        "Nugegoda",
        "Service area or neighborhood."
      ],
      [
        "Areas",
        "areas.5",
        "Area 5",
        "Maharagama",
        "Service area or neighborhood."
      ],
      [
        "Areas",
        "areas.6",
        "Area 6",
        "Dehiwala",
        "Service area or neighborhood."
      ],
      [
        "Areas",
        "areas.7",
        "Area 7",
        "Mount Lavinia",
        "Service area or neighborhood."
      ],
      [
        "Areas",
        "areas.8",
        "Area 8",
        "Malabe",
        "Service area or neighborhood."
      ],
      [
        "Testimonials",
        "testimonials.1.id",
        "Testimonial 1 id",
        "ts1",
        ""
      ],
      [
        "Testimonials",
        "testimonials.1.name",
        "Testimonial 1 name",
        "Rohan & Minoli Jayasuriya",
        ""
      ],
      [
        "Testimonials",
        "testimonials.1.role",
        "Testimonial 1 role",
        "Home Buyers",
        ""
      ],
      [
        "Testimonials",
        "testimonials.1.content",
        "Testimonial 1 content",
        "Keshan found us our dream home in Battaramulla within 3 weeks. His knowledge of the market is extraordinary. We couldn't be happier!",
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
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&q=80",
        ""
      ],
      [
        "Testimonials",
        "testimonials.2.id",
        "Testimonial 2 id",
        "ts2",
        ""
      ],
      [
        "Testimonials",
        "testimonials.2.name",
        "Testimonial 2 name",
        "Damitha Wickramasinghe",
        ""
      ],
      [
        "Testimonials",
        "testimonials.2.role",
        "Testimonial 2 role",
        "Property Seller",
        ""
      ],
      [
        "Testimonials",
        "testimonials.2.content",
        "Testimonial 2 content",
        "Sold my apartment at Cinnamon Life for 8% above asking price. Keshan's negotiation skills are second to none. Highly recommended!",
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
        "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&q=80",
        ""
      ],
      [
        "Testimonials",
        "testimonials.3.id",
        "Testimonial 3 id",
        "ts3",
        ""
      ],
      [
        "Testimonials",
        "testimonials.3.name",
        "Testimonial 3 name",
        "Suresh Patel",
        ""
      ],
      [
        "Testimonials",
        "testimonials.3.role",
        "Testimonial 3 role",
        "Property Investor",
        ""
      ],
      [
        "Testimonials",
        "testimonials.3.content",
        "Testimonial 3 content",
        "I've bought 3 investment properties through Keshan in the past 4 years. His market insights and integrity are unmatched in Colombo.",
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
        "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&q=80",
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
      actions: ["setupRestaurantSettings", "setupSettings", "setupContent", "restaurantContent", "content"],
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
        businessName: "Demo Restaurant",
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
