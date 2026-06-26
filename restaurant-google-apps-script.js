const SHEET_ID = "1RdyFAjZj60LggkaO9epDX2lU5t7AygFShTUqFH8CK94";
const TEMPLATE_ID = "restaurant";
const TEMPLATE_LABEL = "Restaurant";
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
        "Spice Route Kitchen",
        "Brand name in navbars, footers, forms, and metadata."
      ],
      [
        "Basic Info",
        "tagline",
        "Tagline",
        "An Unforgettable Culinary Journey",
        "Short brand tagline."
      ],
      [
        "Basic Info",
        "description",
        "Description",
        "A celebrated dining destination where authentic Sri Lankan flavours meet contemporary gastronomy. Experience food that tells a story.",
        "About/summary description."
      ],
      [
        "Basic Info",
        "phone",
        "Phone",
        "+94 11 234 5678",
        "Main phone number."
      ],
      [
        "Basic Info",
        "email",
        "Email",
        "reservations@spiceroutekitchen.lk",
        "Main email address."
      ],
      [
        "Basic Info",
        "address",
        "Address",
        "78 Park Street",
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
        "An Unforgettable\nCulinary Journey",
        "Hero headline. Line breaks are preserved."
      ],
      [
        "Basic Info",
        "heroSubtitle",
        "Hero subtitle",
        "Where authentic Sri Lankan spices meet modern gastronomy. Each dish is a masterpiece crafted from the freshest local ingredients.",
        "Hero supporting copy."
      ],
      [
        "Basic Info",
        "heroCtaText",
        "Hero CTA text",
        "Reserve a Table",
        "Main hero button text."
      ],
      [
        "Basic Info",
        "heroImage",
        "Hero image URL",
        "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=1600&q=80",
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
        "cuisine",
        "Cuisine",
        "Sri Lankan Contemporary",
        "Cuisine style shown on restaurant sections."
      ],
      [
        "Business Details",
        "reservationPhone",
        "Reservation phone",
        "+94 11 234 5678",
        "Phone number used for reservations."
      ],
      [
        "SEO",
        "seo.title",
        "SEO title",
        "Spice Route Kitchen | Fine Dining Restaurant in Colombo",
        "Browser/search title."
      ],
      [
        "SEO",
        "seo.description",
        "SEO description",
        "Experience authentic Sri Lankan cuisine elevated to fine dining at Spice Route Kitchen, Colombo. Reserve your table today.",
        "Search/social description."
      ],
      [
        "SEO",
        "seo.ogImage",
        "Open Graph image",
        "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=1200&q=80",
        "Social sharing image."
      ],
      [
        "SEO",
        "seo.keywords.1",
        "SEO keyword 1",
        "restaurant colombo",
        "One keyword or phrase per row."
      ],
      [
        "SEO",
        "seo.keywords.2",
        "SEO keyword 2",
        "sri lankan food",
        "One keyword or phrase per row."
      ],
      [
        "SEO",
        "seo.keywords.3",
        "SEO keyword 3",
        "fine dining",
        "One keyword or phrase per row."
      ],
      [
        "SEO",
        "seo.keywords.4",
        "SEO keyword 4",
        "best restaurant colombo",
        "One keyword or phrase per row."
      ],
      [
        "SEO",
        "seo.keywords.5",
        "SEO keyword 5",
        "dinner reservation",
        "One keyword or phrase per row."
      ],
      [
        "SEO",
        "seo.keywords.6",
        "SEO keyword 6",
        "authentic cuisine",
        "One keyword or phrase per row."
      ],
      [
        "Social WhatsApp",
        "socialLinks.facebook",
        "Facebook URL",
        "https://facebook.com/spiceroutekitchen",
        "Leave blank if unused."
      ],
      [
        "Social WhatsApp",
        "socialLinks.instagram",
        "Instagram URL",
        "https://instagram.com/spiceroutekitchen",
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
        "94112345678",
        "Country code + number, no plus sign or spaces."
      ],
      [
        "Social WhatsApp",
        "whatsapp.defaultMessage",
        "WhatsApp default message",
        "Hello Spice Route Kitchen! I'd like to make a reservation. Please let me know your availability.",
        "Pre-filled WhatsApp message."
      ]
    ]
  },
  {
    "name": "Settings - Menu",
    "rows": [
      [
        "Menu Categories",
        "menuCategories.1",
        "Menu category 1",
        "Starters",
        "Used for menu filters."
      ],
      [
        "Menu Categories",
        "menuCategories.2",
        "Menu category 2",
        "Mains",
        "Used for menu filters."
      ],
      [
        "Menu Categories",
        "menuCategories.3",
        "Menu category 3",
        "Seafood",
        "Used for menu filters."
      ],
      [
        "Menu Categories",
        "menuCategories.4",
        "Menu category 4",
        "Vegetarian",
        "Used for menu filters."
      ],
      [
        "Menu Categories",
        "menuCategories.5",
        "Menu category 5",
        "Desserts",
        "Used for menu filters."
      ],
      [
        "Menu Categories",
        "menuCategories.6",
        "Menu category 6",
        "Drinks",
        "Used for menu filters."
      ],
      [
        "Menu Items",
        "menu.1.id",
        "Menu item 1 id",
        "m1",
        "Keep stable unless you update related rows."
      ],
      [
        "Menu Items",
        "menu.1.name",
        "Menu item 1 name",
        "Coconut Prawn Soup",
        ""
      ],
      [
        "Menu Items",
        "menu.1.description",
        "Menu item 1 description",
        "Succulent prawns in a rich coconut broth with lemongrass and kaffir lime",
        ""
      ],
      [
        "Menu Items",
        "menu.1.price",
        "Menu item 1 price",
        "1800",
        "Numbers only."
      ],
      [
        "Menu Items",
        "menu.1.category",
        "Menu item 1 category",
        "Starters",
        "Must match one menu category."
      ],
      [
        "Menu Items",
        "menu.1.featured",
        "Menu item 1 featured",
        "TRUE",
        "TRUE or FALSE."
      ],
      [
        "Menu Items",
        "menu.1.vegetarian",
        "Menu item 1 vegetarian",
        "",
        "TRUE or FALSE."
      ],
      [
        "Menu Items",
        "menu.1.spicy",
        "Menu item 1 spicy",
        "",
        "TRUE or FALSE."
      ],
      [
        "Menu Items",
        "menu.1.image",
        "Menu item 1 image",
        "https://images.unsplash.com/photo-1547592180-85f173990554?w=400&q=80",
        "Optional image URL."
      ],
      [
        "Menu Items",
        "menu.2.id",
        "Menu item 2 id",
        "m2",
        "Keep stable unless you update related rows."
      ],
      [
        "Menu Items",
        "menu.2.name",
        "Menu item 2 name",
        "Mutton Kottu",
        ""
      ],
      [
        "Menu Items",
        "menu.2.description",
        "Menu item 2 description",
        "Shredded roti wok-fried with tender mutton, eggs, vegetables and house spices",
        ""
      ],
      [
        "Menu Items",
        "menu.2.price",
        "Menu item 2 price",
        "2200",
        "Numbers only."
      ],
      [
        "Menu Items",
        "menu.2.category",
        "Menu item 2 category",
        "Mains",
        "Must match one menu category."
      ],
      [
        "Menu Items",
        "menu.2.featured",
        "Menu item 2 featured",
        "TRUE",
        "TRUE or FALSE."
      ],
      [
        "Menu Items",
        "menu.2.vegetarian",
        "Menu item 2 vegetarian",
        "",
        "TRUE or FALSE."
      ],
      [
        "Menu Items",
        "menu.2.spicy",
        "Menu item 2 spicy",
        "TRUE",
        "TRUE or FALSE."
      ],
      [
        "Menu Items",
        "menu.2.image",
        "Menu item 2 image",
        "https://images.unsplash.com/photo-1565557623262-b51c2513a641?w=400&q=80",
        "Optional image URL."
      ],
      [
        "Menu Items",
        "menu.3.id",
        "Menu item 3 id",
        "m3",
        "Keep stable unless you update related rows."
      ],
      [
        "Menu Items",
        "menu.3.name",
        "Menu item 3 name",
        "Devilled Crab",
        ""
      ],
      [
        "Menu Items",
        "menu.3.description",
        "Menu item 3 description",
        "Fresh blue swimmer crab tossed in our signature devilled sauce with chilli and onions",
        ""
      ],
      [
        "Menu Items",
        "menu.3.price",
        "Menu item 3 price",
        "4500",
        "Numbers only."
      ],
      [
        "Menu Items",
        "menu.3.category",
        "Menu item 3 category",
        "Seafood",
        "Must match one menu category."
      ],
      [
        "Menu Items",
        "menu.3.featured",
        "Menu item 3 featured",
        "TRUE",
        "TRUE or FALSE."
      ],
      [
        "Menu Items",
        "menu.3.vegetarian",
        "Menu item 3 vegetarian",
        "",
        "TRUE or FALSE."
      ],
      [
        "Menu Items",
        "menu.3.spicy",
        "Menu item 3 spicy",
        "TRUE",
        "TRUE or FALSE."
      ],
      [
        "Menu Items",
        "menu.3.image",
        "Menu item 3 image",
        "https://images.unsplash.com/photo-1588166524941-3bf61a9c41db?w=400&q=80",
        "Optional image URL."
      ],
      [
        "Menu Items",
        "menu.4.id",
        "Menu item 4 id",
        "m4",
        "Keep stable unless you update related rows."
      ],
      [
        "Menu Items",
        "menu.4.name",
        "Menu item 4 name",
        "Dhal & Coconut Curry",
        ""
      ],
      [
        "Menu Items",
        "menu.4.description",
        "Menu item 4 description",
        "Slow-cooked red lentils with coconut milk, turmeric and curry leaves",
        ""
      ],
      [
        "Menu Items",
        "menu.4.price",
        "Menu item 4 price",
        "1500",
        "Numbers only."
      ],
      [
        "Menu Items",
        "menu.4.category",
        "Menu item 4 category",
        "Vegetarian",
        "Must match one menu category."
      ],
      [
        "Menu Items",
        "menu.4.featured",
        "Menu item 4 featured",
        "",
        "TRUE or FALSE."
      ],
      [
        "Menu Items",
        "menu.4.vegetarian",
        "Menu item 4 vegetarian",
        "TRUE",
        "TRUE or FALSE."
      ],
      [
        "Menu Items",
        "menu.4.spicy",
        "Menu item 4 spicy",
        "",
        "TRUE or FALSE."
      ],
      [
        "Menu Items",
        "menu.4.image",
        "Menu item 4 image",
        "https://images.unsplash.com/photo-1585937421612-70a008356fbe?w=400&q=80",
        "Optional image URL."
      ],
      [
        "Menu Items",
        "menu.5.id",
        "Menu item 5 id",
        "m5",
        "Keep stable unless you update related rows."
      ],
      [
        "Menu Items",
        "menu.5.name",
        "Menu item 5 name",
        "Watalappam",
        ""
      ],
      [
        "Menu Items",
        "menu.5.description",
        "Menu item 5 description",
        "Traditional jaggery and coconut custard pudding with a hint of cardamom",
        ""
      ],
      [
        "Menu Items",
        "menu.5.price",
        "Menu item 5 price",
        "900",
        "Numbers only."
      ],
      [
        "Menu Items",
        "menu.5.category",
        "Menu item 5 category",
        "Desserts",
        "Must match one menu category."
      ],
      [
        "Menu Items",
        "menu.5.featured",
        "Menu item 5 featured",
        "TRUE",
        "TRUE or FALSE."
      ],
      [
        "Menu Items",
        "menu.5.vegetarian",
        "Menu item 5 vegetarian",
        "TRUE",
        "TRUE or FALSE."
      ],
      [
        "Menu Items",
        "menu.5.spicy",
        "Menu item 5 spicy",
        "",
        "TRUE or FALSE."
      ],
      [
        "Menu Items",
        "menu.5.image",
        "Menu item 5 image",
        "https://images.unsplash.com/photo-1551024506-0bccd828d307?w=400&q=80",
        "Optional image URL."
      ],
      [
        "Menu Items",
        "menu.6.id",
        "Menu item 6 id",
        "m6",
        "Keep stable unless you update related rows."
      ],
      [
        "Menu Items",
        "menu.6.name",
        "Menu item 6 name",
        "King Prawn Curry",
        ""
      ],
      [
        "Menu Items",
        "menu.6.description",
        "Menu item 6 description",
        "Jumbo prawns simmered in a tangy tamarind and tomato curry sauce",
        ""
      ],
      [
        "Menu Items",
        "menu.6.price",
        "Menu item 6 price",
        "3800",
        "Numbers only."
      ],
      [
        "Menu Items",
        "menu.6.category",
        "Menu item 6 category",
        "Seafood",
        "Must match one menu category."
      ],
      [
        "Menu Items",
        "menu.6.featured",
        "Menu item 6 featured",
        "",
        "TRUE or FALSE."
      ],
      [
        "Menu Items",
        "menu.6.vegetarian",
        "Menu item 6 vegetarian",
        "",
        "TRUE or FALSE."
      ],
      [
        "Menu Items",
        "menu.6.spicy",
        "Menu item 6 spicy",
        "",
        "TRUE or FALSE."
      ],
      [
        "Menu Items",
        "menu.6.image",
        "Menu item 6 image",
        "https://images.unsplash.com/photo-1565557623262-b51c2513a641?w=400&q=80",
        "Optional image URL."
      ],
      [
        "Menu Items",
        "menu.7.id",
        "Menu item 7 id",
        "m7",
        "Keep stable unless you update related rows."
      ],
      [
        "Menu Items",
        "menu.7.name",
        "Menu item 7 name",
        "Lamb Biryani",
        ""
      ],
      [
        "Menu Items",
        "menu.7.description",
        "Menu item 7 description",
        "Fragrant basmati rice with slow-cooked lamb, saffron and caramelised onions",
        ""
      ],
      [
        "Menu Items",
        "menu.7.price",
        "Menu item 7 price",
        "3200",
        "Numbers only."
      ],
      [
        "Menu Items",
        "menu.7.category",
        "Menu item 7 category",
        "Mains",
        "Must match one menu category."
      ],
      [
        "Menu Items",
        "menu.7.featured",
        "Menu item 7 featured",
        "",
        "TRUE or FALSE."
      ],
      [
        "Menu Items",
        "menu.7.vegetarian",
        "Menu item 7 vegetarian",
        "",
        "TRUE or FALSE."
      ],
      [
        "Menu Items",
        "menu.7.spicy",
        "Menu item 7 spicy",
        "",
        "TRUE or FALSE."
      ],
      [
        "Menu Items",
        "menu.7.image",
        "Menu item 7 image",
        "https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?w=400&q=80",
        "Optional image URL."
      ],
      [
        "Menu Items",
        "menu.8.id",
        "Menu item 8 id",
        "m8",
        "Keep stable unless you update related rows."
      ],
      [
        "Menu Items",
        "menu.8.name",
        "Menu item 8 name",
        "Pol Sambola Bruschetta",
        ""
      ],
      [
        "Menu Items",
        "menu.8.description",
        "Menu item 8 description",
        "Toasted bread with fresh coconut sambol, tomatoes and lime — a Sri Lankan twist",
        ""
      ],
      [
        "Menu Items",
        "menu.8.price",
        "Menu item 8 price",
        "1200",
        "Numbers only."
      ],
      [
        "Menu Items",
        "menu.8.category",
        "Menu item 8 category",
        "Starters",
        "Must match one menu category."
      ],
      [
        "Menu Items",
        "menu.8.featured",
        "Menu item 8 featured",
        "",
        "TRUE or FALSE."
      ],
      [
        "Menu Items",
        "menu.8.vegetarian",
        "Menu item 8 vegetarian",
        "TRUE",
        "TRUE or FALSE."
      ],
      [
        "Menu Items",
        "menu.8.spicy",
        "Menu item 8 spicy",
        "",
        "TRUE or FALSE."
      ],
      [
        "Menu Items",
        "menu.8.image",
        "Menu item 8 image",
        "https://images.unsplash.com/photo-1572695157366-5e585ab2b69f?w=400&q=80",
        "Optional image URL."
      ],
      [
        "Menu Items",
        "menu.9.id",
        "Menu item 9 id",
        "m9",
        "Keep stable unless you update related rows."
      ],
      [
        "Menu Items",
        "menu.9.name",
        "Menu item 9 name",
        "Passion Fruit Cheesecake",
        ""
      ],
      [
        "Menu Items",
        "menu.9.description",
        "Menu item 9 description",
        "Creamy New York-style cheesecake with a tangy passion fruit coulis",
        ""
      ],
      [
        "Menu Items",
        "menu.9.price",
        "Menu item 9 price",
        "1100",
        "Numbers only."
      ],
      [
        "Menu Items",
        "menu.9.category",
        "Menu item 9 category",
        "Desserts",
        "Must match one menu category."
      ],
      [
        "Menu Items",
        "menu.9.featured",
        "Menu item 9 featured",
        "",
        "TRUE or FALSE."
      ],
      [
        "Menu Items",
        "menu.9.vegetarian",
        "Menu item 9 vegetarian",
        "TRUE",
        "TRUE or FALSE."
      ],
      [
        "Menu Items",
        "menu.9.spicy",
        "Menu item 9 spicy",
        "",
        "TRUE or FALSE."
      ],
      [
        "Menu Items",
        "menu.9.image",
        "Menu item 9 image",
        "https://images.unsplash.com/photo-1533134242443-d4fd215305ad?w=400&q=80",
        "Optional image URL."
      ],
      [
        "Menu Items",
        "menu.10.id",
        "Menu item 10 id",
        "m10",
        "Keep stable unless you update related rows."
      ],
      [
        "Menu Items",
        "menu.10.name",
        "Menu item 10 name",
        "Fresh Lime Juice",
        ""
      ],
      [
        "Menu Items",
        "menu.10.description",
        "Menu item 10 description",
        "Freshly squeezed limes with mint and a pinch of salt or sugar",
        ""
      ],
      [
        "Menu Items",
        "menu.10.price",
        "Menu item 10 price",
        "450",
        "Numbers only."
      ],
      [
        "Menu Items",
        "menu.10.category",
        "Menu item 10 category",
        "Drinks",
        "Must match one menu category."
      ],
      [
        "Menu Items",
        "menu.10.featured",
        "Menu item 10 featured",
        "",
        "TRUE or FALSE."
      ],
      [
        "Menu Items",
        "menu.10.vegetarian",
        "Menu item 10 vegetarian",
        "TRUE",
        "TRUE or FALSE."
      ],
      [
        "Menu Items",
        "menu.10.spicy",
        "Menu item 10 spicy",
        "",
        "TRUE or FALSE."
      ],
      [
        "Menu Items",
        "menu.10.image",
        "Menu item 10 image",
        "",
        "Optional image URL."
      ]
    ]
  },
  {
    "name": "Settings - Hours",
    "rows": [
      [
        "Opening Hours",
        "openingHours.1.day",
        "Day 1 day",
        "Monday",
        ""
      ],
      [
        "Opening Hours",
        "openingHours.1.open",
        "Day 1 open",
        "12:00 PM",
        ""
      ],
      [
        "Opening Hours",
        "openingHours.1.close",
        "Day 1 close",
        "10:00 PM",
        ""
      ],
      [
        "Opening Hours",
        "openingHours.1.closed",
        "Day 1 closed",
        "",
        "TRUE when closed for the day."
      ],
      [
        "Opening Hours",
        "openingHours.2.day",
        "Day 2 day",
        "Tuesday",
        ""
      ],
      [
        "Opening Hours",
        "openingHours.2.open",
        "Day 2 open",
        "12:00 PM",
        ""
      ],
      [
        "Opening Hours",
        "openingHours.2.close",
        "Day 2 close",
        "10:00 PM",
        ""
      ],
      [
        "Opening Hours",
        "openingHours.2.closed",
        "Day 2 closed",
        "",
        "TRUE when closed for the day."
      ],
      [
        "Opening Hours",
        "openingHours.3.day",
        "Day 3 day",
        "Wednesday",
        ""
      ],
      [
        "Opening Hours",
        "openingHours.3.open",
        "Day 3 open",
        "12:00 PM",
        ""
      ],
      [
        "Opening Hours",
        "openingHours.3.close",
        "Day 3 close",
        "10:00 PM",
        ""
      ],
      [
        "Opening Hours",
        "openingHours.3.closed",
        "Day 3 closed",
        "",
        "TRUE when closed for the day."
      ],
      [
        "Opening Hours",
        "openingHours.4.day",
        "Day 4 day",
        "Thursday",
        ""
      ],
      [
        "Opening Hours",
        "openingHours.4.open",
        "Day 4 open",
        "12:00 PM",
        ""
      ],
      [
        "Opening Hours",
        "openingHours.4.close",
        "Day 4 close",
        "10:00 PM",
        ""
      ],
      [
        "Opening Hours",
        "openingHours.4.closed",
        "Day 4 closed",
        "",
        "TRUE when closed for the day."
      ],
      [
        "Opening Hours",
        "openingHours.5.day",
        "Day 5 day",
        "Friday",
        ""
      ],
      [
        "Opening Hours",
        "openingHours.5.open",
        "Day 5 open",
        "12:00 PM",
        ""
      ],
      [
        "Opening Hours",
        "openingHours.5.close",
        "Day 5 close",
        "11:00 PM",
        ""
      ],
      [
        "Opening Hours",
        "openingHours.5.closed",
        "Day 5 closed",
        "",
        "TRUE when closed for the day."
      ],
      [
        "Opening Hours",
        "openingHours.6.day",
        "Day 6 day",
        "Saturday",
        ""
      ],
      [
        "Opening Hours",
        "openingHours.6.open",
        "Day 6 open",
        "11:00 AM",
        ""
      ],
      [
        "Opening Hours",
        "openingHours.6.close",
        "Day 6 close",
        "11:00 PM",
        ""
      ],
      [
        "Opening Hours",
        "openingHours.6.closed",
        "Day 6 closed",
        "",
        "TRUE when closed for the day."
      ],
      [
        "Opening Hours",
        "openingHours.7.day",
        "Day 7 day",
        "Sunday",
        ""
      ],
      [
        "Opening Hours",
        "openingHours.7.open",
        "Day 7 open",
        "11:00 AM",
        ""
      ],
      [
        "Opening Hours",
        "openingHours.7.close",
        "Day 7 close",
        "10:00 PM",
        ""
      ],
      [
        "Opening Hours",
        "openingHours.7.closed",
        "Day 7 closed",
        "",
        "TRUE when closed for the day."
      ]
    ]
  },
  {
    "name": "Settings - Media",
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
        "Mahesh Bandara",
        ""
      ],
      [
        "Testimonials",
        "testimonials.1.role",
        "Testimonial 1 role",
        "Food Critic",
        ""
      ],
      [
        "Testimonials",
        "testimonials.1.content",
        "Testimonial 1 content",
        "Spice Route Kitchen has reinvented Sri Lankan dining. The Devilled Crab is the best I've had anywhere in the country. A must-visit!",
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
        "te2",
        ""
      ],
      [
        "Testimonials",
        "testimonials.2.name",
        "Testimonial 2 name",
        "Anusha Pathirana",
        ""
      ],
      [
        "Testimonials",
        "testimonials.2.role",
        "Testimonial 2 role",
        "Regular Diner",
        ""
      ],
      [
        "Testimonials",
        "testimonials.2.content",
        "Testimonial 2 content",
        "We celebrated our anniversary here and it was perfect. Impeccable service, beautiful ambience, and flavours that were simply divine.",
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
        "te3",
        ""
      ],
      [
        "Testimonials",
        "testimonials.3.name",
        "Testimonial 3 name",
        "James Mitchell",
        ""
      ],
      [
        "Testimonials",
        "testimonials.3.role",
        "Testimonial 3 role",
        "Visiting Tourist",
        ""
      ],
      [
        "Testimonials",
        "testimonials.3.content",
        "Testimonial 3 content",
        "As someone experiencing Sri Lankan food for the first time, this was extraordinary. The Watalappam dessert alone is worth the visit!",
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
      ],
      [
        "Gallery Images",
        "galleryImages.1.id",
        "Gallery image 1 id",
        "g1",
        ""
      ],
      [
        "Gallery Images",
        "galleryImages.1.src",
        "Gallery image 1 src",
        "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=600&q=80",
        ""
      ],
      [
        "Gallery Images",
        "galleryImages.1.alt",
        "Gallery image 1 alt",
        "Restaurant dining room",
        ""
      ],
      [
        "Gallery Images",
        "galleryImages.1.category",
        "Gallery image 1 category",
        "Interior",
        ""
      ],
      [
        "Gallery Images",
        "galleryImages.2.id",
        "Gallery image 2 id",
        "g2",
        ""
      ],
      [
        "Gallery Images",
        "galleryImages.2.src",
        "Gallery image 2 src",
        "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=600&q=80",
        ""
      ],
      [
        "Gallery Images",
        "galleryImages.2.alt",
        "Gallery image 2 alt",
        "Chef preparing dish",
        ""
      ],
      [
        "Gallery Images",
        "galleryImages.2.category",
        "Gallery image 2 category",
        "Kitchen",
        ""
      ],
      [
        "Gallery Images",
        "galleryImages.3.id",
        "Gallery image 3 id",
        "g3",
        ""
      ],
      [
        "Gallery Images",
        "galleryImages.3.src",
        "Gallery image 3 src",
        "https://images.unsplash.com/photo-1565557623262-b51c2513a641?w=600&q=80",
        ""
      ],
      [
        "Gallery Images",
        "galleryImages.3.alt",
        "Gallery image 3 alt",
        "Signature dishes",
        ""
      ],
      [
        "Gallery Images",
        "galleryImages.3.category",
        "Gallery image 3 category",
        "Food",
        ""
      ],
      [
        "Gallery Images",
        "galleryImages.4.id",
        "Gallery image 4 id",
        "g4",
        ""
      ],
      [
        "Gallery Images",
        "galleryImages.4.src",
        "Gallery image 4 src",
        "https://images.unsplash.com/photo-1466978913421-dad2ebd01d17?w=600&q=80",
        ""
      ],
      [
        "Gallery Images",
        "galleryImages.4.alt",
        "Gallery image 4 alt",
        "Private dining",
        ""
      ],
      [
        "Gallery Images",
        "galleryImages.4.category",
        "Gallery image 4 category",
        "Interior",
        ""
      ],
      [
        "Gallery Images",
        "galleryImages.5.id",
        "Gallery image 5 id",
        "g5",
        ""
      ],
      [
        "Gallery Images",
        "galleryImages.5.src",
        "Gallery image 5 src",
        "https://images.unsplash.com/photo-1481833761820-0509d3217039?w=600&q=80",
        ""
      ],
      [
        "Gallery Images",
        "galleryImages.5.alt",
        "Gallery image 5 alt",
        "Dessert platter",
        ""
      ],
      [
        "Gallery Images",
        "galleryImages.5.category",
        "Gallery image 5 category",
        "Food",
        ""
      ],
      [
        "Gallery Images",
        "galleryImages.6.id",
        "Gallery image 6 id",
        "g6",
        ""
      ],
      [
        "Gallery Images",
        "galleryImages.6.src",
        "Gallery image 6 src",
        "https://images.unsplash.com/photo-1514190051997-0f6f39ca5cde?w=600&q=80",
        ""
      ],
      [
        "Gallery Images",
        "galleryImages.6.alt",
        "Gallery image 6 alt",
        "Bar area",
        ""
      ],
      [
        "Gallery Images",
        "galleryImages.6.category",
        "Gallery image 6 category",
        "Interior",
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
