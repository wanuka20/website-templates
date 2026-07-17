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
  heroImage: "/placeholder_images/restaurant-adminsheet/settings-brand-d12.jpg",
  aboutImage1: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=500&q=80",
  aboutImage2: "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=500&q=80",
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
    ogImage: "/placeholder_images/restaurant-adminsheet/settings-brand-d18.jpg",
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
      image: "/placeholder_images/restaurant-adminsheet/settings-menu-d16.jpg",
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
      image: "/placeholder_images/restaurant-adminsheet/settings-menu-d25.jpg",
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
      image: "/placeholder_images/restaurant-adminsheet/settings-menu-d34.jpg",
    },
    {
      id: "m4",
      name: "Dhal & Coconut Curry",
      description:
        "Slow-cooked red lentils with coconut milk, turmeric and curry leaves",
      price: 1500,
      category: "Vegetarian",
      vegetarian: true,
      image: "/placeholder_images/restaurant-adminsheet/settings-menu-d43.jpg",
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
      image: "/placeholder_images/restaurant-adminsheet/settings-menu-d52.jpg",
    },
    {
      id: "m6",
      name: "King Prawn Curry",
      description:
        "Jumbo prawns simmered in a tangy tamarind and tomato curry sauce",
      price: 3800,
      category: "Seafood",
      image: "/placeholder_images/restaurant-adminsheet/settings-menu-d61.jpg",
    },
    {
      id: "m7",
      name: "Lamb Biryani",
      description:
        "Fragrant basmati rice with slow-cooked lamb, saffron and caramelised onions",
      price: 3200,
      category: "Mains",
      image: "/placeholder_images/restaurant-adminsheet/settings-menu-d70.jpg",
    },
    {
      id: "m8",
      name: "Pol Sambola Bruschetta",
      description:
        "Toasted bread with fresh coconut sambol, tomatoes and lime — a Sri Lankan twist",
      price: 1200,
      category: "Starters",
      vegetarian: true,
      image: "/placeholder_images/restaurant-adminsheet/settings-menu-d79.jpg",
    },
    {
      id: "m9",
      name: "Passion Fruit Cheesecake",
      description:
        "Creamy New York-style cheesecake with a tangy passion fruit coulis",
      price: 1100,
      category: "Desserts",
      vegetarian: true,
      image: "/placeholder_images/restaurant-adminsheet/settings-menu-d88.jpg",
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
      avatar: "/placeholder_images/restaurant-adminsheet/settings-media-d7.jpg",
    },
    {
      id: "te2",
      name: "Anusha Pathirana",
      role: "Regular Diner",
      content:
        "We celebrated our anniversary here and it was perfect. Impeccable service, beautiful ambience, and flavours that were simply divine.",
      rating: 5,
      avatar: "/placeholder_images/restaurant-adminsheet/settings-media-d13.jpg",
    },
    {
      id: "te3",
      name: "James Mitchell",
      role: "Visiting Tourist",
      content:
        "As someone experiencing Sri Lankan food for the first time, this was extraordinary. The Watalappam dessert alone is worth the visit!",
      rating: 5,
      avatar: "/placeholder_images/restaurant-adminsheet/settings-media-d19.jpg",
    },
  ],
  galleryImages: [
    {
      id: "g1",
      src: "/placeholder_images/restaurant-adminsheet/settings-media-d21.jpg",
      alt: "Restaurant dining room",
      category: "Interior",
    },
    {
      id: "g2",
      src: "/placeholder_images/restaurant-adminsheet/settings-media-d25.jpg",
      alt: "Chef preparing dish",
      category: "Kitchen",
    },
    {
      id: "g3",
      src: "/placeholder_images/restaurant-adminsheet/settings-media-d29.jpg",
      alt: "Signature dishes",
      category: "Food",
    },
    {
      id: "g4",
      src: "/placeholder_images/restaurant-adminsheet/settings-media-d33.jpg",
      alt: "Private dining",
      category: "Interior",
    },
    {
      id: "g5",
      src: "/placeholder_images/restaurant-adminsheet/settings-media-d37.jpg",
      alt: "Dessert platter",
      category: "Food",
    },
    {
      id: "g6",
      src: "/placeholder_images/restaurant-adminsheet/settings-media-d41.jpg",
      alt: "Bar area",
      category: "Interior",
    },
  ],
};

restaurantConfig.featuredDishes = restaurantConfig.menu.filter((item) => item.featured);
