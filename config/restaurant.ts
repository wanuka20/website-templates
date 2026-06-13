import type { RestaurantConfig } from "@/types";

export const restaurantConfig: RestaurantConfig = {
  name: "Spice Route Kitchen",
  tagline: "An Unforgettable Culinary Journey",
  description:
    "A celebrated dining destination where authentic Sri Lankan flavours meet contemporary gastronomy. Experience food that tells a story.",
  phone: "+94 11 234 5678",
  email: "reservations@spiceroutekitchen.lk",
  address: "78 Park Street",
  city: "Colombo 02, Sri Lanka",
  heroTitle: "An Unforgettable\nCulinary Journey",
  heroSubtitle:
    "Where authentic Sri Lankan spices meet modern gastronomy. Each dish is a masterpiece crafted from the freshest local ingredients.",
  heroCtaText: "Reserve a Table",
  heroImage:
    "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=1600&q=80",
  socialLinks: {
    facebook: "https://facebook.com/spiceroutekitchen",
    instagram: "https://instagram.com/spiceroutekitchen",
  },
  whatsapp: {
    phone: "94112345678",
    defaultMessage:
      "Hello Spice Route Kitchen! I'd like to make a reservation. Please let me know your availability.",
  },
  seo: {
    title: "Spice Route Kitchen | Fine Dining Restaurant in Colombo",
    description:
      "Experience authentic Sri Lankan cuisine elevated to fine dining at Spice Route Kitchen, Colombo. Reserve your table today.",
    keywords: [
      "restaurant colombo",
      "sri lankan food",
      "fine dining",
      "best restaurant colombo",
      "dinner reservation",
      "authentic cuisine",
    ],
    ogImage:
      "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=1200&q=80",
  },
  cuisine: "Sri Lankan Contemporary",
  reservationPhone: "+94 11 234 5678",
  openingHours: [
    { day: "Monday", open: "12:00 PM", close: "10:00 PM" },
    { day: "Tuesday", open: "12:00 PM", close: "10:00 PM" },
    { day: "Wednesday", open: "12:00 PM", close: "10:00 PM" },
    { day: "Thursday", open: "12:00 PM", close: "10:00 PM" },
    { day: "Friday", open: "12:00 PM", close: "11:00 PM" },
    { day: "Saturday", open: "11:00 AM", close: "11:00 PM" },
    { day: "Sunday", open: "11:00 AM", close: "10:00 PM" },
  ],
  menuCategories: ["Starters", "Mains", "Seafood", "Vegetarian", "Desserts", "Drinks"],
  menu: [
    {
      id: "m1",
      name: "Coconut Prawn Soup",
      description:
        "Succulent prawns in a rich coconut broth with lemongrass and kaffir lime",
      price: 1800,
      category: "Starters",
      featured: true,
      image:
        "https://images.unsplash.com/photo-1547592180-85f173990554?w=400&q=80",
    },
    {
      id: "m2",
      name: "Mutton Kottu",
      description:
        "Shredded roti wok-fried with tender mutton, eggs, vegetables and house spices",
      price: 2200,
      category: "Mains",
      featured: true,
      spicy: true,
      image:
        "https://images.unsplash.com/photo-1565557623262-b51c2513a641?w=400&q=80",
    },
    {
      id: "m3",
      name: "Devilled Crab",
      description:
        "Fresh blue swimmer crab tossed in our signature devilled sauce with chilli and onions",
      price: 4500,
      category: "Seafood",
      featured: true,
      spicy: true,
      image:
        "https://images.unsplash.com/photo-1588166524941-3bf61a9c41db?w=400&q=80",
    },
    {
      id: "m4",
      name: "Dhal & Coconut Curry",
      description:
        "Slow-cooked red lentils with coconut milk, turmeric and curry leaves",
      price: 1500,
      category: "Vegetarian",
      vegetarian: true,
      image:
        "https://images.unsplash.com/photo-1585937421612-70a008356fbe?w=400&q=80",
    },
    {
      id: "m5",
      name: "Watalappam",
      description:
        "Traditional jaggery and coconut custard pudding with a hint of cardamom",
      price: 900,
      category: "Desserts",
      featured: true,
      vegetarian: true,
      image:
        "https://images.unsplash.com/photo-1551024506-0bccd828d307?w=400&q=80",
    },
    {
      id: "m6",
      name: "King Prawn Curry",
      description:
        "Jumbo prawns simmered in a tangy tamarind and tomato curry sauce",
      price: 3800,
      category: "Seafood",
      image:
        "https://images.unsplash.com/photo-1565557623262-b51c2513a641?w=400&q=80",
    },
    {
      id: "m7",
      name: "Lamb Biryani",
      description:
        "Fragrant basmati rice with slow-cooked lamb, saffron and caramelised onions",
      price: 3200,
      category: "Mains",
      image:
        "https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?w=400&q=80",
    },
    {
      id: "m8",
      name: "Pol Sambola Bruschetta",
      description:
        "Toasted bread with fresh coconut sambol, tomatoes and lime — a Sri Lankan twist",
      price: 1200,
      category: "Starters",
      vegetarian: true,
      image:
        "https://images.unsplash.com/photo-1572695157366-5e585ab2b69f?w=400&q=80",
    },
    {
      id: "m9",
      name: "Passion Fruit Cheesecake",
      description:
        "Creamy New York-style cheesecake with a tangy passion fruit coulis",
      price: 1100,
      category: "Desserts",
      vegetarian: true,
      image:
        "https://images.unsplash.com/photo-1533134242443-d4fd215305ad?w=400&q=80",
    },
    {
      id: "m10",
      name: "Fresh Lime Juice",
      description:
        "Freshly squeezed limes with mint and a pinch of salt or sugar",
      price: 450,
      category: "Drinks",
      vegetarian: true,
    },
  ],
  featuredDishes: [],
  testimonials: [
    {
      id: "te1",
      name: "Mahesh Bandara",
      role: "Food Critic",
      content:
        "Spice Route Kitchen has reinvented Sri Lankan dining. The Devilled Crab is the best I've had anywhere in the country. A must-visit!",
      rating: 5,
      avatar:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&q=80",
    },
    {
      id: "te2",
      name: "Anusha Pathirana",
      role: "Regular Diner",
      content:
        "We celebrated our anniversary here and it was perfect. Impeccable service, beautiful ambience, and flavours that were simply divine.",
      rating: 5,
      avatar:
        "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&q=80",
    },
    {
      id: "te3",
      name: "James Mitchell",
      role: "Visiting Tourist",
      content:
        "As someone experiencing Sri Lankan food for the first time, this was extraordinary. The Watalappam dessert alone is worth the visit!",
      rating: 5,
      avatar:
        "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&q=80",
    },
  ],
  galleryImages: [
    {
      id: "g1",
      src: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=600&q=80",
      alt: "Restaurant dining room",
      category: "Interior",
    },
    {
      id: "g2",
      src: "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=600&q=80",
      alt: "Chef preparing dish",
      category: "Kitchen",
    },
    {
      id: "g3",
      src: "https://images.unsplash.com/photo-1565557623262-b51c2513a641?w=600&q=80",
      alt: "Signature dishes",
      category: "Food",
    },
    {
      id: "g4",
      src: "https://images.unsplash.com/photo-1466978913421-dad2ebd01d17?w=600&q=80",
      alt: "Private dining",
      category: "Interior",
    },
    {
      id: "g5",
      src: "https://images.unsplash.com/photo-1481833761820-0509d3217039?w=600&q=80",
      alt: "Dessert platter",
      category: "Food",
    },
    {
      id: "g6",
      src: "https://images.unsplash.com/photo-1514190051997-0f6f39ca5cde?w=600&q=80",
      alt: "Bar area",
      category: "Interior",
    },
  ],
};

restaurantConfig.featuredDishes = restaurantConfig.menu.filter((item) => item.featured);
