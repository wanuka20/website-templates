const SHEET_ID = "1blS_rZbJsM3S0SngnzepSMF7MJqAqiPzz0IsoQTv4aA";
const TEMPLATE_ID = "gym";
const TEMPLATE_LABEL = "Gym";
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
        "IronPeak Fitness",
        "Brand name in navbars, footers, forms, and metadata."
      ],
      [
        "Basic Info",
        "tagline",
        "Tagline",
        "Forge Your\nBest Self",
        "Short brand tagline."
      ],
      [
        "Basic Info",
        "description",
        "Description",
        "Sri Lanka's premier fitness destination. State-of-the-art equipment, world-class trainers, and a community that pushes you beyond your limits.",
        "About/summary description."
      ],
      [
        "Basic Info",
        "phone",
        "Phone",
        "+94 77 123 4567",
        "Main phone number."
      ],
      [
        "Basic Info",
        "email",
        "Email",
        "info@ironpeakfitness.lk",
        "Main email address."
      ],
      [
        "Basic Info",
        "address",
        "Address",
        "42 Galle Road",
        "Street address."
      ],
      [
        "Basic Info",
        "city",
        "City",
        "Colombo 03, Sri Lanka",
        "City/location text."
      ],
      [
        "Basic Info",
        "heroTitle",
        "Hero title",
        "Forge Your\nBody",
        "Hero headline. Line breaks are preserved."
      ],
      [
        "Basic Info",
        "heroSubtitle",
        "Hero subtitle",
        "Join IronPeak Fitness — where champions are built. State-of-the-art equipment, expert trainers, and a community unlike any other.",
        "Hero supporting copy."
      ],
      [
        "Basic Info",
        "heroCtaText",
        "Hero CTA text",
        "Start Free Trial",
        "Main hero button text."
      ],
      [
        "Basic Info",
        "heroImage",
        "Hero image URL",
        "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=1600&q=80",
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
        "IronPeak Fitness | Premier Gym in Colombo, Sri Lanka",
        "Browser/search title."
      ],
      [
        "SEO",
        "seo.description",
        "SEO description",
        "Join IronPeak Fitness — Colombo's top gym with expert trainers, modern equipment, and flexible membership plans. Start your free trial today!",
        "Search/social description."
      ],
      [
        "SEO",
        "seo.ogImage",
        "Open Graph image",
        "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=1200&q=80",
        "Social sharing image."
      ],
      [
        "SEO",
        "seo.keywords.1",
        "SEO keyword 1",
        "gym colombo",
        "One keyword or phrase per row."
      ],
      [
        "SEO",
        "seo.keywords.2",
        "SEO keyword 2",
        "fitness center sri lanka",
        "One keyword or phrase per row."
      ],
      [
        "SEO",
        "seo.keywords.3",
        "SEO keyword 3",
        "personal training",
        "One keyword or phrase per row."
      ],
      [
        "SEO",
        "seo.keywords.4",
        "SEO keyword 4",
        "gym membership",
        "One keyword or phrase per row."
      ],
      [
        "SEO",
        "seo.keywords.5",
        "SEO keyword 5",
        "weight loss",
        "One keyword or phrase per row."
      ],
      [
        "SEO",
        "seo.keywords.6",
        "SEO keyword 6",
        "bodybuilding",
        "One keyword or phrase per row."
      ],
      [
        "Social WhatsApp",
        "socialLinks.facebook",
        "Facebook URL",
        "https://facebook.com/ironpeakfitness",
        "Leave blank if unused."
      ],
      [
        "Social WhatsApp",
        "socialLinks.instagram",
        "Instagram URL",
        "https://instagram.com/ironpeakfitness",
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
        "YouTube URL",
        "https://youtube.com/ironpeakfitness",
        "Leave blank if unused."
      ],
      [
        "Social WhatsApp",
        "socialLinks.linkedin",
        "LinkedIn URL",
        "",
        "Leave blank if unused."
      ],
      [
        "Social WhatsApp",
        "whatsapp.phone",
        "WhatsApp phone",
        "94771234567",
        "Country code + number, no plus sign or spaces."
      ],
      [
        "Social WhatsApp",
        "whatsapp.defaultMessage",
        "WhatsApp default message",
        "Hi IronPeak Fitness! I'd like to learn more about your membership plans and facilities.",
        "Pre-filled WhatsApp message."
      ],
      [
        "Amenities",
        "amenities.1",
        "Amenity 1",
        "Olympic Weight Room",
        ""
      ],
      [
        "Amenities",
        "amenities.2",
        "Amenity 2",
        "Cardio Zone (50+ machines)",
        ""
      ],
      [
        "Amenities",
        "amenities.3",
        "Amenity 3",
        "Group Fitness Studio",
        ""
      ],
      [
        "Amenities",
        "amenities.4",
        "Amenity 4",
        "Indoor Swimming Pool",
        ""
      ],
      [
        "Amenities",
        "amenities.5",
        "Amenity 5",
        "Sauna & Steam Room",
        ""
      ],
      [
        "Amenities",
        "amenities.6",
        "Amenity 6",
        "Juice Bar",
        ""
      ],
      [
        "Amenities",
        "amenities.7",
        "Amenity 7",
        "Locker Rooms",
        ""
      ],
      [
        "Amenities",
        "amenities.8",
        "Amenity 8",
        "Free Parking",
        ""
      ],
      [
        "Amenities",
        "amenities.9",
        "Amenity 9",
        "24/7 Access",
        ""
      ],
      [
        "Amenities",
        "amenities.10",
        "Amenity 10",
        "Personal Training",
        ""
      ]
    ]
  },
  {
    "name": "Settings - Plans",
    "rows": [
      [
        "Membership Plans",
        "membership.1.id",
        "Plan 1 ID",
        "basic",
        "Keep stable unless you update related rows."
      ],
      [
        "Membership Plans",
        "membership.1.name",
        "Plan 1 name",
        "Starter",
        ""
      ],
      [
        "Membership Plans",
        "membership.1.price",
        "Plan 1 price",
        "2500",
        "Numbers only."
      ],
      [
        "Membership Plans",
        "membership.1.currency",
        "Plan 1 currency",
        "LKR",
        ""
      ],
      [
        "Membership Plans",
        "membership.1.period",
        "Plan 1 period",
        "month",
        ""
      ],
      [
        "Membership Plans",
        "membership.1.description",
        "Plan 1 description",
        "Perfect for beginners starting their fitness journey.",
        ""
      ],
      [
        "Membership Plans",
        "membership.1.highlighted",
        "Plan 1 highlighted",
        "0",
        "TRUE or FALSE."
      ],
      [
        "Membership Plans",
        "membership.1.badge",
        "Plan 1 badge",
        "",
        "Optional badge text."
      ],
      [
        "Plan Features",
        "membership.1.features.1",
        "Plan 1 feature 1",
        "Full gym access (6am–10pm)",
        ""
      ],
      [
        "Plan Features",
        "membership.1.features.2",
        "Plan 1 feature 2",
        "2 group classes per month",
        ""
      ],
      [
        "Plan Features",
        "membership.1.features.3",
        "Plan 1 feature 3",
        "Locker room access",
        ""
      ],
      [
        "Plan Features",
        "membership.1.features.4",
        "Plan 1 feature 4",
        "Fitness assessment",
        ""
      ],
      [
        "Plan Features",
        "membership.1.features.5",
        "Plan 1 feature 5",
        "Mobile app access",
        ""
      ],
      [
        "Membership Plans",
        "membership.2.id",
        "Plan 2 ID",
        "pro",
        "Keep stable unless you update related rows."
      ],
      [
        "Membership Plans",
        "membership.2.name",
        "Plan 2 name",
        "Pro",
        ""
      ],
      [
        "Membership Plans",
        "membership.2.price",
        "Plan 2 price",
        "4500",
        "Numbers only."
      ],
      [
        "Membership Plans",
        "membership.2.currency",
        "Plan 2 currency",
        "LKR",
        ""
      ],
      [
        "Membership Plans",
        "membership.2.period",
        "Plan 2 period",
        "month",
        ""
      ],
      [
        "Membership Plans",
        "membership.2.description",
        "Plan 2 description",
        "Most popular plan for serious fitness enthusiasts.",
        ""
      ],
      [
        "Membership Plans",
        "membership.2.highlighted",
        "Plan 2 highlighted",
        "1",
        "TRUE or FALSE."
      ],
      [
        "Membership Plans",
        "membership.2.badge",
        "Plan 2 badge",
        "Most Popular",
        "Optional badge text."
      ],
      [
        "Plan Features",
        "membership.2.features.1",
        "Plan 2 feature 1",
        "24/7 gym access",
        ""
      ],
      [
        "Plan Features",
        "membership.2.features.2",
        "Plan 2 feature 2",
        "Unlimited group classes",
        ""
      ],
      [
        "Plan Features",
        "membership.2.features.3",
        "Plan 2 feature 3",
        "1 PT session per month",
        ""
      ],
      [
        "Plan Features",
        "membership.2.features.4",
        "Plan 2 feature 4",
        "Nutrition consultation",
        ""
      ],
      [
        "Plan Features",
        "membership.2.features.5",
        "Plan 2 feature 5",
        "Sauna & steam room",
        ""
      ],
      [
        "Plan Features",
        "membership.2.features.6",
        "Plan 2 feature 6",
        "Guest pass (2/month)",
        ""
      ],
      [
        "Plan Features",
        "membership.2.features.7",
        "Plan 2 feature 7",
        "Priority booking",
        ""
      ],
      [
        "Membership Plans",
        "membership.3.id",
        "Plan 3 ID",
        "elite",
        "Keep stable unless you update related rows."
      ],
      [
        "Membership Plans",
        "membership.3.name",
        "Plan 3 name",
        "Elite",
        ""
      ],
      [
        "Membership Plans",
        "membership.3.price",
        "Plan 3 price",
        "8500",
        "Numbers only."
      ],
      [
        "Membership Plans",
        "membership.3.currency",
        "Plan 3 currency",
        "LKR",
        ""
      ],
      [
        "Membership Plans",
        "membership.3.period",
        "Plan 3 period",
        "month",
        ""
      ],
      [
        "Membership Plans",
        "membership.3.description",
        "Plan 3 description",
        "The ultimate fitness experience with personal coaching.",
        ""
      ],
      [
        "Membership Plans",
        "membership.3.highlighted",
        "Plan 3 highlighted",
        "0",
        "TRUE or FALSE."
      ],
      [
        "Membership Plans",
        "membership.3.badge",
        "Plan 3 badge",
        "",
        "Optional badge text."
      ],
      [
        "Plan Features",
        "membership.3.features.1",
        "Plan 3 feature 1",
        "Everything in Pro",
        ""
      ],
      [
        "Plan Features",
        "membership.3.features.2",
        "Plan 3 feature 2",
        "4 PT sessions per month",
        ""
      ],
      [
        "Plan Features",
        "membership.3.features.3",
        "Plan 3 feature 3",
        "Customised meal plan",
        ""
      ],
      [
        "Plan Features",
        "membership.3.features.4",
        "Plan 3 feature 4",
        "Body composition analysis",
        ""
      ],
      [
        "Plan Features",
        "membership.3.features.5",
        "Plan 3 feature 5",
        "Exclusive Elite lounge",
        ""
      ],
      [
        "Plan Features",
        "membership.3.features.6",
        "Plan 3 feature 6",
        "Unlimited guest passes",
        ""
      ],
      [
        "Plan Features",
        "membership.3.features.7",
        "Plan 3 feature 7",
        "Recovery suite access",
        ""
      ]
    ]
  },
  {
    "name": "Settings - Team",
    "rows": [
      [
        "Trainers",
        "trainers.1.id",
        "Trainer 1 ID",
        "t1",
        ""
      ],
      [
        "Trainers",
        "trainers.1.name",
        "Trainer 1 name",
        "Kamal Perera",
        ""
      ],
      [
        "Trainers",
        "trainers.1.specialization",
        "Trainer 1 specialization",
        "Strength & Conditioning",
        ""
      ],
      [
        "Trainers",
        "trainers.1.experience",
        "Trainer 1 experience",
        "8 years",
        ""
      ],
      [
        "Trainers",
        "trainers.1.image",
        "Trainer 1 image URL",
        "https://images.unsplash.com/photo-1567013127542-490d757e51fc?w=400&q=80",
        ""
      ],
      [
        "Trainers",
        "trainers.1.bio",
        "Trainer 1 bio",
        "Former national-level powerlifter turned elite coach. Kamal has helped over 300 clients achieve their peak performance.",
        ""
      ],
      [
        "Trainer Certs",
        "trainers.1.certifications.1",
        "Trainer 1 certification 1",
        "NSCA-CSCS",
        ""
      ],
      [
        "Trainer Certs",
        "trainers.1.certifications.2",
        "Trainer 1 certification 2",
        "ACE Certified PT",
        ""
      ],
      [
        "Trainer Certs",
        "trainers.1.certifications.3",
        "Trainer 1 certification 3",
        "FMS Level 2",
        ""
      ],
      [
        "Trainers",
        "trainers.2.id",
        "Trainer 2 ID",
        "t2",
        ""
      ],
      [
        "Trainers",
        "trainers.2.name",
        "Trainer 2 name",
        "Dilani Jayawardena",
        ""
      ],
      [
        "Trainers",
        "trainers.2.specialization",
        "Trainer 2 specialization",
        "Weight Loss & Nutrition",
        ""
      ],
      [
        "Trainers",
        "trainers.2.experience",
        "Trainer 2 experience",
        "6 years",
        ""
      ],
      [
        "Trainers",
        "trainers.2.image",
        "Trainer 2 image URL",
        "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400&q=80",
        ""
      ],
      [
        "Trainers",
        "trainers.2.bio",
        "Trainer 2 bio",
        "Certified nutritionist and personal trainer specialising in sustainable weight loss. Dilani's holistic approach has transformed hundreds of lives.",
        ""
      ],
      [
        "Trainer Certs",
        "trainers.2.certifications.1",
        "Trainer 2 certification 1",
        "NASM-CPT",
        ""
      ],
      [
        "Trainer Certs",
        "trainers.2.certifications.2",
        "Trainer 2 certification 2",
        "Precision Nutrition L2",
        ""
      ],
      [
        "Trainer Certs",
        "trainers.2.certifications.3",
        "Trainer 2 certification 3",
        "Yoga Alliance 200HR",
        ""
      ],
      [
        "Trainers",
        "trainers.3.id",
        "Trainer 3 ID",
        "t3",
        ""
      ],
      [
        "Trainers",
        "trainers.3.name",
        "Trainer 3 name",
        "Ruwan Silva",
        ""
      ],
      [
        "Trainers",
        "trainers.3.specialization",
        "Trainer 3 specialization",
        "Functional Fitness & MMA",
        ""
      ],
      [
        "Trainers",
        "trainers.3.experience",
        "Trainer 3 experience",
        "10 years",
        ""
      ],
      [
        "Trainers",
        "trainers.3.image",
        "Trainer 3 image URL",
        "https://images.unsplash.com/photo-1530822847156-5df684ec5933?w=400&q=80",
        ""
      ],
      [
        "Trainers",
        "trainers.3.bio",
        "Trainer 3 bio",
        "Ex-national MMA champion with a decade of coaching experience. Ruwan brings intensity and expertise to every session.",
        ""
      ],
      [
        "Trainer Certs",
        "trainers.3.certifications.1",
        "Trainer 3 certification 1",
        "NSCA-CPT",
        ""
      ],
      [
        "Trainer Certs",
        "trainers.3.certifications.2",
        "Trainer 3 certification 2",
        "CrossFit L2",
        ""
      ],
      [
        "Trainer Certs",
        "trainers.3.certifications.3",
        "Trainer 3 certification 3",
        "Boxing Coach Certified",
        ""
      ],
      [
        "Trainers",
        "trainers.4.id",
        "Trainer 4 ID",
        "t4",
        ""
      ],
      [
        "Trainers",
        "trainers.4.name",
        "Trainer 4 name",
        "Priya Mendis",
        ""
      ],
      [
        "Trainers",
        "trainers.4.specialization",
        "Trainer 4 specialization",
        "Yoga & Flexibility",
        ""
      ],
      [
        "Trainers",
        "trainers.4.experience",
        "Trainer 4 experience",
        "7 years",
        ""
      ],
      [
        "Trainers",
        "trainers.4.image",
        "Trainer 4 image URL",
        "https://images.unsplash.com/photo-1594381898411-846e7d193883?w=400&q=80",
        ""
      ],
      [
        "Trainers",
        "trainers.4.bio",
        "Trainer 4 bio",
        "Internationally certified yoga instructor who blends traditional practices with modern fitness science for mind-body transformation.",
        ""
      ],
      [
        "Trainer Certs",
        "trainers.4.certifications.1",
        "Trainer 4 certification 1",
        "RYT-500",
        ""
      ],
      [
        "Trainer Certs",
        "trainers.4.certifications.2",
        "Trainer 4 certification 2",
        "Pilates Certified",
        ""
      ],
      [
        "Trainer Certs",
        "trainers.4.certifications.3",
        "Trainer 4 certification 3",
        "ACE Health Coach",
        ""
      ]
    ]
  },
  {
    "name": "Settings - Classes",
    "rows": [
      [
        "Class Schedule",
        "classes.1.id",
        "Class 1 ID",
        "c1",
        ""
      ],
      [
        "Class Schedule",
        "classes.1.name",
        "Class 1 name",
        "HIIT Blast",
        ""
      ],
      [
        "Class Schedule",
        "classes.1.instructor",
        "Class 1 instructor",
        "Kamal Perera",
        ""
      ],
      [
        "Class Schedule",
        "classes.1.day",
        "Class 1 day",
        "Monday",
        ""
      ],
      [
        "Class Schedule",
        "classes.1.time",
        "Class 1 time",
        "6:00 AM",
        ""
      ],
      [
        "Class Schedule",
        "classes.1.duration",
        "Class 1 duration",
        "45 min",
        ""
      ],
      [
        "Class Schedule",
        "classes.1.level",
        "Class 1 level",
        "Intermediate",
        "Beginner, Intermediate, Advanced, or All Levels."
      ],
      [
        "Class Schedule",
        "classes.1.spots",
        "Class 1 spots",
        "20",
        "Numbers only."
      ],
      [
        "Class Schedule",
        "classes.2.id",
        "Class 2 ID",
        "c2",
        ""
      ],
      [
        "Class Schedule",
        "classes.2.name",
        "Class 2 name",
        "Power Yoga",
        ""
      ],
      [
        "Class Schedule",
        "classes.2.instructor",
        "Class 2 instructor",
        "Priya Mendis",
        ""
      ],
      [
        "Class Schedule",
        "classes.2.day",
        "Class 2 day",
        "Monday",
        ""
      ],
      [
        "Class Schedule",
        "classes.2.time",
        "Class 2 time",
        "7:00 PM",
        ""
      ],
      [
        "Class Schedule",
        "classes.2.duration",
        "Class 2 duration",
        "60 min",
        ""
      ],
      [
        "Class Schedule",
        "classes.2.level",
        "Class 2 level",
        "All Levels",
        "Beginner, Intermediate, Advanced, or All Levels."
      ],
      [
        "Class Schedule",
        "classes.2.spots",
        "Class 2 spots",
        "25",
        "Numbers only."
      ],
      [
        "Class Schedule",
        "classes.3.id",
        "Class 3 ID",
        "c3",
        ""
      ],
      [
        "Class Schedule",
        "classes.3.name",
        "Class 3 name",
        "Zumba Dance",
        ""
      ],
      [
        "Class Schedule",
        "classes.3.instructor",
        "Class 3 instructor",
        "Dilani Jayawardena",
        ""
      ],
      [
        "Class Schedule",
        "classes.3.day",
        "Class 3 day",
        "Tuesday",
        ""
      ],
      [
        "Class Schedule",
        "classes.3.time",
        "Class 3 time",
        "5:30 PM",
        ""
      ],
      [
        "Class Schedule",
        "classes.3.duration",
        "Class 3 duration",
        "50 min",
        ""
      ],
      [
        "Class Schedule",
        "classes.3.level",
        "Class 3 level",
        "All Levels",
        "Beginner, Intermediate, Advanced, or All Levels."
      ],
      [
        "Class Schedule",
        "classes.3.spots",
        "Class 3 spots",
        "30",
        "Numbers only."
      ],
      [
        "Class Schedule",
        "classes.4.id",
        "Class 4 ID",
        "c4",
        ""
      ],
      [
        "Class Schedule",
        "classes.4.name",
        "Class 4 name",
        "MMA Conditioning",
        ""
      ],
      [
        "Class Schedule",
        "classes.4.instructor",
        "Class 4 instructor",
        "Ruwan Silva",
        ""
      ],
      [
        "Class Schedule",
        "classes.4.day",
        "Class 4 day",
        "Wednesday",
        ""
      ],
      [
        "Class Schedule",
        "classes.4.time",
        "Class 4 time",
        "7:00 AM",
        ""
      ],
      [
        "Class Schedule",
        "classes.4.duration",
        "Class 4 duration",
        "60 min",
        ""
      ],
      [
        "Class Schedule",
        "classes.4.level",
        "Class 4 level",
        "Advanced",
        "Beginner, Intermediate, Advanced, or All Levels."
      ],
      [
        "Class Schedule",
        "classes.4.spots",
        "Class 4 spots",
        "15",
        "Numbers only."
      ],
      [
        "Class Schedule",
        "classes.5.id",
        "Class 5 ID",
        "c5",
        ""
      ],
      [
        "Class Schedule",
        "classes.5.name",
        "Class 5 name",
        "Body Pump",
        ""
      ],
      [
        "Class Schedule",
        "classes.5.instructor",
        "Class 5 instructor",
        "Kamal Perera",
        ""
      ],
      [
        "Class Schedule",
        "classes.5.day",
        "Class 5 day",
        "Thursday",
        ""
      ],
      [
        "Class Schedule",
        "classes.5.time",
        "Class 5 time",
        "6:00 AM",
        ""
      ],
      [
        "Class Schedule",
        "classes.5.duration",
        "Class 5 duration",
        "55 min",
        ""
      ],
      [
        "Class Schedule",
        "classes.5.level",
        "Class 5 level",
        "Intermediate",
        "Beginner, Intermediate, Advanced, or All Levels."
      ],
      [
        "Class Schedule",
        "classes.5.spots",
        "Class 5 spots",
        "20",
        "Numbers only."
      ],
      [
        "Class Schedule",
        "classes.6.id",
        "Class 6 ID",
        "c6",
        ""
      ],
      [
        "Class Schedule",
        "classes.6.name",
        "Class 6 name",
        "Flexibility & Stretch",
        ""
      ],
      [
        "Class Schedule",
        "classes.6.instructor",
        "Class 6 instructor",
        "Priya Mendis",
        ""
      ],
      [
        "Class Schedule",
        "classes.6.day",
        "Class 6 day",
        "Friday",
        ""
      ],
      [
        "Class Schedule",
        "classes.6.time",
        "Class 6 time",
        "7:00 PM",
        ""
      ],
      [
        "Class Schedule",
        "classes.6.duration",
        "Class 6 duration",
        "45 min",
        ""
      ],
      [
        "Class Schedule",
        "classes.6.level",
        "Class 6 level",
        "Beginner",
        "Beginner, Intermediate, Advanced, or All Levels."
      ],
      [
        "Class Schedule",
        "classes.6.spots",
        "Class 6 spots",
        "25",
        "Numbers only."
      ],
      [
        "Class Schedule",
        "classes.7.id",
        "Class 7 ID",
        "c7",
        ""
      ],
      [
        "Class Schedule",
        "classes.7.name",
        "Class 7 name",
        "Bootcamp",
        ""
      ],
      [
        "Class Schedule",
        "classes.7.instructor",
        "Class 7 instructor",
        "Ruwan Silva",
        ""
      ],
      [
        "Class Schedule",
        "classes.7.day",
        "Class 7 day",
        "Saturday",
        ""
      ],
      [
        "Class Schedule",
        "classes.7.time",
        "Class 7 time",
        "7:00 AM",
        ""
      ],
      [
        "Class Schedule",
        "classes.7.duration",
        "Class 7 duration",
        "60 min",
        ""
      ],
      [
        "Class Schedule",
        "classes.7.level",
        "Class 7 level",
        "Intermediate",
        "Beginner, Intermediate, Advanced, or All Levels."
      ],
      [
        "Class Schedule",
        "classes.7.spots",
        "Class 7 spots",
        "20",
        "Numbers only."
      ],
      [
        "Class Schedule",
        "classes.8.id",
        "Class 8 ID",
        "c8",
        ""
      ],
      [
        "Class Schedule",
        "classes.8.name",
        "Class 8 name",
        "Meditation & Mindfulness",
        ""
      ],
      [
        "Class Schedule",
        "classes.8.instructor",
        "Class 8 instructor",
        "Priya Mendis",
        ""
      ],
      [
        "Class Schedule",
        "classes.8.day",
        "Class 8 day",
        "Sunday",
        ""
      ],
      [
        "Class Schedule",
        "classes.8.time",
        "Class 8 time",
        "9:00 AM",
        ""
      ],
      [
        "Class Schedule",
        "classes.8.duration",
        "Class 8 duration",
        "45 min",
        ""
      ],
      [
        "Class Schedule",
        "classes.8.level",
        "Class 8 level",
        "All Levels",
        "Beginner, Intermediate, Advanced, or All Levels."
      ],
      [
        "Class Schedule",
        "classes.8.spots",
        "Class 8 spots",
        "30",
        "Numbers only."
      ]
    ]
  },
  {
    "name": "Settings - Media",
    "rows": [
      [
        "Testimonials",
        "testimonials.1.id",
        "Testimonial 1 ID",
        "te1",
        ""
      ],
      [
        "Testimonials",
        "testimonials.1.name",
        "Testimonial 1 name",
        "Ashan Wijesinghe",
        ""
      ],
      [
        "Testimonials",
        "testimonials.1.role",
        "Testimonial 1 role",
        "Pro Member",
        ""
      ],
      [
        "Testimonials",
        "testimonials.1.content",
        "Testimonial 1 content",
        "IronPeak completely transformed my body and confidence. Lost 20kg in 6 months with the Pro plan. The trainers are exceptional!",
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
        "Testimonial 2 ID",
        "te2",
        ""
      ],
      [
        "Testimonials",
        "testimonials.2.name",
        "Testimonial 2 name",
        "Nadeesha Fernando",
        ""
      ],
      [
        "Testimonials",
        "testimonials.2.role",
        "Testimonial 2 role",
        "Elite Member",
        ""
      ],
      [
        "Testimonials",
        "testimonials.2.content",
        "Testimonial 2 content",
        "Worth every rupee! The Elite package with personalised meal plans made all the difference. I've never felt better at 35.",
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
        "Testimonial 3 ID",
        "te3",
        ""
      ],
      [
        "Testimonials",
        "testimonials.3.name",
        "Testimonial 3 name",
        "Chamara Rajapaksha",
        ""
      ],
      [
        "Testimonials",
        "testimonials.3.role",
        "Testimonial 3 role",
        "Pro Member",
        ""
      ],
      [
        "Testimonials",
        "testimonials.3.content",
        "Testimonial 3 content",
        "Best gym in Colombo, hands down. Excellent equipment, great atmosphere, and coaches who genuinely care about your progress.",
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
        "Gallery image 1 ID",
        "g1",
        ""
      ],
      [
        "Gallery Images",
        "galleryImages.1.src",
        "Gallery image 1 URL",
        "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=600&q=80",
        ""
      ],
      [
        "Gallery Images",
        "galleryImages.1.alt",
        "Gallery image 1 alt",
        "Weight room",
        ""
      ],
      [
        "Gallery Images",
        "galleryImages.1.category",
        "Gallery image 1 category",
        "Facilities",
        ""
      ],
      [
        "Gallery Images",
        "galleryImages.2.id",
        "Gallery image 2 ID",
        "g2",
        ""
      ],
      [
        "Gallery Images",
        "galleryImages.2.src",
        "Gallery image 2 URL",
        "https://images.unsplash.com/photo-1571902943202-507ec2618e8f?w=600&q=80",
        ""
      ],
      [
        "Gallery Images",
        "galleryImages.2.alt",
        "Gallery image 2 alt",
        "Cardio zone",
        ""
      ],
      [
        "Gallery Images",
        "galleryImages.2.category",
        "Gallery image 2 category",
        "Facilities",
        ""
      ],
      [
        "Gallery Images",
        "galleryImages.3.id",
        "Gallery image 3 ID",
        "g3",
        ""
      ],
      [
        "Gallery Images",
        "galleryImages.3.src",
        "Gallery image 3 URL",
        "https://images.unsplash.com/photo-1549060279-7e168fcee0c2?w=600&q=80",
        ""
      ],
      [
        "Gallery Images",
        "galleryImages.3.alt",
        "Gallery image 3 alt",
        "Group class",
        ""
      ],
      [
        "Gallery Images",
        "galleryImages.3.category",
        "Gallery image 3 category",
        "Classes",
        ""
      ],
      [
        "Gallery Images",
        "galleryImages.4.id",
        "Gallery image 4 ID",
        "g4",
        ""
      ],
      [
        "Gallery Images",
        "galleryImages.4.src",
        "Gallery image 4 URL",
        "https://images.unsplash.com/photo-1594381898411-846e7d193883?w=600&q=80",
        ""
      ],
      [
        "Gallery Images",
        "galleryImages.4.alt",
        "Gallery image 4 alt",
        "Yoga studio",
        ""
      ],
      [
        "Gallery Images",
        "galleryImages.4.category",
        "Gallery image 4 category",
        "Classes",
        ""
      ],
      [
        "Gallery Images",
        "galleryImages.5.id",
        "Gallery image 5 ID",
        "g5",
        ""
      ],
      [
        "Gallery Images",
        "galleryImages.5.src",
        "Gallery image 5 URL",
        "https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?w=600&q=80",
        ""
      ],
      [
        "Gallery Images",
        "galleryImages.5.alt",
        "Gallery image 5 alt",
        "Personal training",
        ""
      ],
      [
        "Gallery Images",
        "galleryImages.5.category",
        "Gallery image 5 category",
        "Training",
        ""
      ],
      [
        "Gallery Images",
        "galleryImages.6.id",
        "Gallery image 6 ID",
        "g6",
        ""
      ],
      [
        "Gallery Images",
        "galleryImages.6.src",
        "Gallery image 6 URL",
        "https://images.unsplash.com/photo-1605296867304-46d5465a13f1?w=600&q=80",
        ""
      ],
      [
        "Gallery Images",
        "galleryImages.6.alt",
        "Gallery image 6 alt",
        "Boxing area",
        ""
      ],
      [
        "Gallery Images",
        "galleryImages.6.category",
        "Gallery image 6 category",
        "Training",
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
      actions: ["setupGymSettings", "setupSettings", "setupContent", "gymContent", "content"],
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
        businessName: "Demo Gym",
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
