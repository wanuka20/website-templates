const SHEET_ID = "1QAn_v19eyCvWW8hhgPHUu5HshxwHDTgYGhHthTe8UJs";
const TEMPLATE_ID = "tuition";
const TEMPLATE_LABEL = "Tuition";
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
        "Apex Academy",
        "Brand name in navbars, footers, forms, and metadata."
      ],
      [
        "Basic Info",
        "tagline",
        "Tagline",
        "Unlocking Academic Excellence",
        "Short brand tagline."
      ],
      [
        "Basic Info",
        "description",
        "Description",
        "Sri Lanka's most trusted tuition centre for O/L and A/L students. Expert teachers, proven results, and a nurturing environment for success.",
        "About/summary description."
      ],
      [
        "Basic Info",
        "phone",
        "Phone",
        "+94 77 345 6789",
        "Main phone number."
      ],
      [
        "Basic Info",
        "email",
        "Email",
        "info@apexacademy.lk",
        "Main email address."
      ],
      [
        "Basic Info",
        "address",
        "Address",
        "23 High Level Road",
        "Street address."
      ],
      [
        "Basic Info",
        "city",
        "City",
        "Nugegoda, Sri Lanka",
        "City/location text."
      ],
      [
        "Basic Info",
        "heroTitle",
        "Hero title",
        "Unlock Your\nAcademic Potential",
        "Hero headline. Line breaks are preserved."
      ],
      [
        "Basic Info",
        "heroSubtitle",
        "Hero subtitle",
        "Join over 2,000 students who achieved their dream results at Apex Academy. Expert teachers, small class sizes, and guaranteed results.",
        "Hero supporting copy."
      ],
      [
        "Basic Info",
        "heroCtaText",
        "Hero CTA text",
        "Register Now",
        "Main hero button text."
      ],
      [
        "Basic Info",
        "heroImage",
        "Hero image URL",
        "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=1600&q=80",
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
        "Apex Academy | O/L & A/L Tuition Centre in Nugegoda",
        "Browser/search title."
      ],
      [
        "SEO",
        "seo.description",
        "SEO description",
        "Sri Lanka's top tuition centre for O/L and A/L students. Expert teachers, proven results. Enrol at Apex Academy Nugegoda today.",
        "Search/social description."
      ],
      [
        "SEO",
        "seo.ogImage",
        "Open Graph image",
        "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=1200&q=80",
        "Social sharing image."
      ],
      [
        "SEO",
        "seo.keywords.1",
        "SEO keyword 1",
        "tuition class colombo",
        "One keyword or phrase per row."
      ],
      [
        "SEO",
        "seo.keywords.2",
        "SEO keyword 2",
        "al tuition sri lanka",
        "One keyword or phrase per row."
      ],
      [
        "SEO",
        "seo.keywords.3",
        "SEO keyword 3",
        "ol tuition",
        "One keyword or phrase per row."
      ],
      [
        "SEO",
        "seo.keywords.4",
        "SEO keyword 4",
        "best tuition centre",
        "One keyword or phrase per row."
      ],
      [
        "SEO",
        "seo.keywords.5",
        "SEO keyword 5",
        "maths tuition",
        "One keyword or phrase per row."
      ],
      [
        "SEO",
        "seo.keywords.6",
        "SEO keyword 6",
        "science tuition nugegoda",
        "One keyword or phrase per row."
      ],
      [
        "Social WhatsApp",
        "socialLinks.facebook",
        "Facebook URL",
        "https://facebook.com/apexacademylk",
        "Leave blank if unused."
      ],
      [
        "Social WhatsApp",
        "socialLinks.instagram",
        "Instagram URL",
        "",
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
        "https://youtube.com/apexacademylk",
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
        "94773456789",
        "Country code + number, no plus sign or spaces."
      ],
      [
        "Social WhatsApp",
        "whatsapp.defaultMessage",
        "WhatsApp default message",
        "Hello Apex Academy! I'd like to register my child for tuition classes. Please provide more details.",
        "Pre-filled WhatsApp message."
      ]
    ]
  },
  {
    "name": "Settings - Subjects",
    "rows": [
      [
        "Subjects",
        "subjects.1.id",
        "Subject 1 id",
        "sub1",
        ""
      ],
      [
        "Subjects",
        "subjects.1.name",
        "Subject 1 name",
        "Mathematics",
        ""
      ],
      [
        "Subjects",
        "subjects.1.description",
        "Subject 1 description",
        "From algebra to calculus — our structured approach makes maths accessible and enjoyable for every student.",
        ""
      ],
      [
        "Subjects",
        "subjects.1.icon",
        "Subject 1 icon",
        "Calculator",
        ""
      ],
      [
        "Subjects",
        "subjects.1.studentsCount",
        "Subject 1 studentsCount",
        "450",
        "Numbers only."
      ],
      [
        "Subject Levels",
        "subjects.1.levels.1",
        "Subject 1 level 1",
        "Grade 6-9",
        ""
      ],
      [
        "Subject Levels",
        "subjects.1.levels.2",
        "Subject 1 level 2",
        "O/L",
        ""
      ],
      [
        "Subject Levels",
        "subjects.1.levels.3",
        "Subject 1 level 3",
        "A/L (Combined Maths)",
        ""
      ],
      [
        "Subjects",
        "subjects.2.id",
        "Subject 2 id",
        "sub2",
        ""
      ],
      [
        "Subjects",
        "subjects.2.name",
        "Subject 2 name",
        "Science (Triple)",
        ""
      ],
      [
        "Subjects",
        "subjects.2.description",
        "Subject 2 description",
        "Physics, Chemistry and Biology taught individually or as a combined science for O/L students.",
        ""
      ],
      [
        "Subjects",
        "subjects.2.icon",
        "Subject 2 icon",
        "FlaskConical",
        ""
      ],
      [
        "Subjects",
        "subjects.2.studentsCount",
        "Subject 2 studentsCount",
        "380",
        "Numbers only."
      ],
      [
        "Subject Levels",
        "subjects.2.levels.1",
        "Subject 2 level 1",
        "Grade 6-9",
        ""
      ],
      [
        "Subject Levels",
        "subjects.2.levels.2",
        "Subject 2 level 2",
        "O/L",
        ""
      ],
      [
        "Subjects",
        "subjects.3.id",
        "Subject 3 id",
        "sub3",
        ""
      ],
      [
        "Subjects",
        "subjects.3.name",
        "Subject 3 name",
        "Physics",
        ""
      ],
      [
        "Subjects",
        "subjects.3.description",
        "Subject 3 description",
        "A/L Physics with intensive problem-solving sessions and past paper practice.",
        ""
      ],
      [
        "Subjects",
        "subjects.3.icon",
        "Subject 3 icon",
        "Atom",
        ""
      ],
      [
        "Subjects",
        "subjects.3.studentsCount",
        "Subject 3 studentsCount",
        "220",
        "Numbers only."
      ],
      [
        "Subject Levels",
        "subjects.3.levels.1",
        "Subject 3 level 1",
        "A/L",
        ""
      ],
      [
        "Subjects",
        "subjects.4.id",
        "Subject 4 id",
        "sub4",
        ""
      ],
      [
        "Subjects",
        "subjects.4.name",
        "Subject 4 name",
        "Chemistry",
        ""
      ],
      [
        "Subjects",
        "subjects.4.description",
        "Subject 4 description",
        "Comprehensive A/L Chemistry with practical demonstrations and conceptual clarity.",
        ""
      ],
      [
        "Subjects",
        "subjects.4.icon",
        "Subject 4 icon",
        "FlaskConical",
        ""
      ],
      [
        "Subjects",
        "subjects.4.studentsCount",
        "Subject 4 studentsCount",
        "195",
        "Numbers only."
      ],
      [
        "Subject Levels",
        "subjects.4.levels.1",
        "Subject 4 level 1",
        "A/L",
        ""
      ],
      [
        "Subjects",
        "subjects.5.id",
        "Subject 5 id",
        "sub5",
        ""
      ],
      [
        "Subjects",
        "subjects.5.name",
        "Subject 5 name",
        "English Language",
        ""
      ],
      [
        "Subjects",
        "subjects.5.description",
        "Subject 5 description",
        "Grammar, comprehension, essay writing and spoken English to ensure top marks.",
        ""
      ],
      [
        "Subjects",
        "subjects.5.icon",
        "Subject 5 icon",
        "BookOpen",
        ""
      ],
      [
        "Subjects",
        "subjects.5.studentsCount",
        "Subject 5 studentsCount",
        "310",
        "Numbers only."
      ],
      [
        "Subject Levels",
        "subjects.5.levels.1",
        "Subject 5 level 1",
        "Grade 6-9",
        ""
      ],
      [
        "Subject Levels",
        "subjects.5.levels.2",
        "Subject 5 level 2",
        "O/L",
        ""
      ],
      [
        "Subject Levels",
        "subjects.5.levels.3",
        "Subject 5 level 3",
        "A/L",
        ""
      ],
      [
        "Subjects",
        "subjects.6.id",
        "Subject 6 id",
        "sub6",
        ""
      ],
      [
        "Subjects",
        "subjects.6.name",
        "Subject 6 name",
        "ICT",
        ""
      ],
      [
        "Subjects",
        "subjects.6.description",
        "Subject 6 description",
        "Practical ICT skills and theory to excel in O/L and A/L ICT examinations.",
        ""
      ],
      [
        "Subjects",
        "subjects.6.icon",
        "Subject 6 icon",
        "Monitor",
        ""
      ],
      [
        "Subjects",
        "subjects.6.studentsCount",
        "Subject 6 studentsCount",
        "175",
        "Numbers only."
      ],
      [
        "Subject Levels",
        "subjects.6.levels.1",
        "Subject 6 level 1",
        "O/L",
        ""
      ],
      [
        "Subject Levels",
        "subjects.6.levels.2",
        "Subject 6 level 2",
        "A/L",
        ""
      ]
    ]
  },
  {
    "name": "Settings - Teachers",
    "rows": [
      [
        "Teachers",
        "teachers.1.id",
        "Teacher 1 id",
        "te1",
        ""
      ],
      [
        "Teachers",
        "teachers.1.name",
        "Teacher 1 name",
        "Mr. Saman Wickramasinghe",
        ""
      ],
      [
        "Teachers",
        "teachers.1.subject",
        "Teacher 1 subject",
        "Combined Mathematics",
        ""
      ],
      [
        "Teachers",
        "teachers.1.qualification",
        "Teacher 1 qualification",
        "B.Sc. (Hons) Mathematics, University of Colombo",
        ""
      ],
      [
        "Teachers",
        "teachers.1.experience",
        "Teacher 1 experience",
        "18 years",
        ""
      ],
      [
        "Teachers",
        "teachers.1.image",
        "Teacher 1 image",
        "https://images.unsplash.com/photo-1544717297-fa95b6ee9643?w=400&q=80",
        ""
      ],
      [
        "Teachers",
        "teachers.1.bio",
        "Teacher 1 bio",
        "Mr. Saman is a legend in the A/L Mathematics field. With an unmatched record of students achieving A grades, his teaching method transforms even the most reluctant maths student.",
        ""
      ],
      [
        "Teachers",
        "teachers.1.rating",
        "Teacher 1 rating",
        "5",
        "Numbers only."
      ],
      [
        "Teachers",
        "teachers.1.studentsCount",
        "Teacher 1 studentsCount",
        "890",
        "Numbers only."
      ],
      [
        "Teachers",
        "teachers.2.id",
        "Teacher 2 id",
        "te2",
        ""
      ],
      [
        "Teachers",
        "teachers.2.name",
        "Teacher 2 name",
        "Ms. Nilmini Bandara",
        ""
      ],
      [
        "Teachers",
        "teachers.2.subject",
        "Teacher 2 subject",
        "Physics",
        ""
      ],
      [
        "Teachers",
        "teachers.2.qualification",
        "Teacher 2 qualification",
        "B.Sc. Physics, M.Sc. Applied Physics",
        ""
      ],
      [
        "Teachers",
        "teachers.2.experience",
        "Teacher 2 experience",
        "12 years",
        ""
      ],
      [
        "Teachers",
        "teachers.2.image",
        "Teacher 2 image",
        "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&q=80",
        ""
      ],
      [
        "Teachers",
        "teachers.2.bio",
        "Teacher 2 bio",
        "Ms. Nilmini makes complex physics concepts crystal clear. Former university lecturer who returned to school-level teaching to make a direct impact.",
        ""
      ],
      [
        "Teachers",
        "teachers.2.rating",
        "Teacher 2 rating",
        "5",
        "Numbers only."
      ],
      [
        "Teachers",
        "teachers.2.studentsCount",
        "Teacher 2 studentsCount",
        "620",
        "Numbers only."
      ],
      [
        "Teachers",
        "teachers.3.id",
        "Teacher 3 id",
        "te3",
        ""
      ],
      [
        "Teachers",
        "teachers.3.name",
        "Teacher 3 name",
        "Mr. Prasanna Herath",
        ""
      ],
      [
        "Teachers",
        "teachers.3.subject",
        "Teacher 3 subject",
        "Chemistry",
        ""
      ],
      [
        "Teachers",
        "teachers.3.qualification",
        "Teacher 3 qualification",
        "B.Sc. Chemistry (Special), PhD Candidate",
        ""
      ],
      [
        "Teachers",
        "teachers.3.experience",
        "Teacher 3 experience",
        "10 years",
        ""
      ],
      [
        "Teachers",
        "teachers.3.image",
        "Teacher 3 image",
        "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400&q=80",
        ""
      ],
      [
        "Teachers",
        "teachers.3.bio",
        "Teacher 3 bio",
        "Mr. Prasanna's passion for chemistry is infectious. His practical demonstrations and memory techniques have helped hundreds of students score A grades.",
        ""
      ],
      [
        "Teachers",
        "teachers.3.rating",
        "Teacher 3 rating",
        "5",
        "Numbers only."
      ],
      [
        "Teachers",
        "teachers.3.studentsCount",
        "Teacher 3 studentsCount",
        "480",
        "Numbers only."
      ],
      [
        "Teachers",
        "teachers.4.id",
        "Teacher 4 id",
        "te4",
        ""
      ],
      [
        "Teachers",
        "teachers.4.name",
        "Teacher 4 name",
        "Ms. Rashika Fernando",
        ""
      ],
      [
        "Teachers",
        "teachers.4.subject",
        "Teacher 4 subject",
        "English Language",
        ""
      ],
      [
        "Teachers",
        "teachers.4.qualification",
        "Teacher 4 qualification",
        "B.A. English (Hons), PGDE",
        ""
      ],
      [
        "Teachers",
        "teachers.4.experience",
        "Teacher 4 experience",
        "9 years",
        ""
      ],
      [
        "Teachers",
        "teachers.4.image",
        "Teacher 4 image",
        "https://images.unsplash.com/photo-1551836022-deb4988cc6c0?w=400&q=80",
        ""
      ],
      [
        "Teachers",
        "teachers.4.bio",
        "Teacher 4 bio",
        "Ms. Rashika has a remarkable ability to build confidence in students who struggle with English. Her students consistently achieve A and B grades in O/L and A/L English.",
        ""
      ],
      [
        "Teachers",
        "teachers.4.rating",
        "Teacher 4 rating",
        "5",
        "Numbers only."
      ],
      [
        "Teachers",
        "teachers.4.studentsCount",
        "Teacher 4 studentsCount",
        "340",
        "Numbers only."
      ]
    ]
  },
  {
    "name": "Settings - Outcomes",
    "rows": [
      [
        "Student Results",
        "results.1.id",
        "Result 1 id",
        "r1",
        ""
      ],
      [
        "Student Results",
        "results.1.studentName",
        "Result 1 studentName",
        "Tharusha Perera",
        ""
      ],
      [
        "Student Results",
        "results.1.subject",
        "Result 1 subject",
        "Combined Mathematics",
        ""
      ],
      [
        "Student Results",
        "results.1.grade",
        "Result 1 grade",
        "A",
        ""
      ],
      [
        "Student Results",
        "results.1.year",
        "Result 1 year",
        "2024",
        ""
      ],
      [
        "Student Results",
        "results.1.testimonial",
        "Result 1 testimonial",
        "Mr. Saman's classes were the turning point for me. I went from D grades to getting into Engineering at Moratuwa.",
        ""
      ],
      [
        "Student Results",
        "results.1.avatar",
        "Result 1 avatar",
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=80&q=80",
        ""
      ],
      [
        "Student Results",
        "results.2.id",
        "Result 2 id",
        "r2",
        ""
      ],
      [
        "Student Results",
        "results.2.studentName",
        "Result 2 studentName",
        "Oneli Senarathna",
        ""
      ],
      [
        "Student Results",
        "results.2.subject",
        "Result 2 subject",
        "Physics",
        ""
      ],
      [
        "Student Results",
        "results.2.grade",
        "Result 2 grade",
        "A",
        ""
      ],
      [
        "Student Results",
        "results.2.year",
        "Result 2 year",
        "2024",
        ""
      ],
      [
        "Student Results",
        "results.2.testimonial",
        "Result 2 testimonial",
        "Ms. Nilmini made me love Physics. I got the island's 4th best result in Physics — couldn't have done it without Apex.",
        ""
      ],
      [
        "Student Results",
        "results.2.avatar",
        "Result 2 avatar",
        "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=80&q=80",
        ""
      ],
      [
        "Student Results",
        "results.3.id",
        "Result 3 id",
        "r3",
        ""
      ],
      [
        "Student Results",
        "results.3.studentName",
        "Result 3 studentName",
        "Devinda Karunaratne",
        ""
      ],
      [
        "Student Results",
        "results.3.subject",
        "Result 3 subject",
        "Chemistry",
        ""
      ],
      [
        "Student Results",
        "results.3.grade",
        "Result 3 grade",
        "A",
        ""
      ],
      [
        "Student Results",
        "results.3.year",
        "Result 3 year",
        "2024",
        ""
      ],
      [
        "Student Results",
        "results.3.testimonial",
        "Result 3 testimonial",
        "Chemistry was my weakest subject. After joining Mr. Prasanna's class, I scored an A and got into Medicine. Life-changing!",
        ""
      ],
      [
        "Student Results",
        "results.3.avatar",
        "Result 3 avatar",
        "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=80&q=80",
        ""
      ],
      [
        "Student Results",
        "results.4.id",
        "Result 4 id",
        "r4",
        ""
      ],
      [
        "Student Results",
        "results.4.studentName",
        "Result 4 studentName",
        "Sanduni Ranaweera",
        ""
      ],
      [
        "Student Results",
        "results.4.subject",
        "Result 4 subject",
        "English Language",
        ""
      ],
      [
        "Student Results",
        "results.4.grade",
        "Result 4 grade",
        "A",
        ""
      ],
      [
        "Student Results",
        "results.4.year",
        "Result 4 year",
        "2024",
        ""
      ],
      [
        "Student Results",
        "results.4.testimonial",
        "Result 4 testimonial",
        "My O/L English result was a dream. Ms. Rashika's structured classes and constant encouragement made all the difference.",
        ""
      ],
      [
        "Student Results",
        "results.4.avatar",
        "Result 4 avatar",
        "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=80&q=80",
        ""
      ],
      [
        "Achievements",
        "achievements.1.id",
        "Achievement 1 id",
        "a1",
        ""
      ],
      [
        "Achievements",
        "achievements.1.label",
        "Achievement 1 label",
        "Students Enrolled",
        ""
      ],
      [
        "Achievements",
        "achievements.1.value",
        "Achievement 1 value",
        "2,000+",
        ""
      ],
      [
        "Achievements",
        "achievements.1.icon",
        "Achievement 1 icon",
        "",
        ""
      ],
      [
        "Achievements",
        "achievements.2.id",
        "Achievement 2 id",
        "a2",
        ""
      ],
      [
        "Achievements",
        "achievements.2.label",
        "Achievement 2 label",
        "A-Grade Results (2024)",
        ""
      ],
      [
        "Achievements",
        "achievements.2.value",
        "Achievement 2 value",
        "380+",
        ""
      ],
      [
        "Achievements",
        "achievements.2.icon",
        "Achievement 2 icon",
        "",
        ""
      ],
      [
        "Achievements",
        "achievements.3.id",
        "Achievement 3 id",
        "a3",
        ""
      ],
      [
        "Achievements",
        "achievements.3.label",
        "Achievement 3 label",
        "Years of Excellence",
        ""
      ],
      [
        "Achievements",
        "achievements.3.value",
        "Achievement 3 value",
        "15",
        ""
      ],
      [
        "Achievements",
        "achievements.3.icon",
        "Achievement 3 icon",
        "",
        ""
      ],
      [
        "Achievements",
        "achievements.4.id",
        "Achievement 4 id",
        "a4",
        ""
      ],
      [
        "Achievements",
        "achievements.4.label",
        "Achievement 4 label",
        "University Admissions",
        ""
      ],
      [
        "Achievements",
        "achievements.4.value",
        "Achievement 4 value",
        "95%",
        ""
      ],
      [
        "Achievements",
        "achievements.4.icon",
        "Achievement 4 icon",
        "",
        ""
      ]
    ]
  },
  {
    "name": "Settings - Schedule",
    "rows": [
      [
        "Class Schedule",
        "schedule.1.id",
        "Class 1 id",
        "sc1",
        ""
      ],
      [
        "Class Schedule",
        "schedule.1.subject",
        "Class 1 subject",
        "Combined Mathematics",
        ""
      ],
      [
        "Class Schedule",
        "schedule.1.teacher",
        "Class 1 teacher",
        "Mr. Saman Wickramasinghe",
        ""
      ],
      [
        "Class Schedule",
        "schedule.1.day",
        "Class 1 day",
        "Saturday",
        ""
      ],
      [
        "Class Schedule",
        "schedule.1.time",
        "Class 1 time",
        "8:00 AM",
        ""
      ],
      [
        "Class Schedule",
        "schedule.1.duration",
        "Class 1 duration",
        "3 hours",
        ""
      ],
      [
        "Class Schedule",
        "schedule.1.level",
        "Class 1 level",
        "A/L",
        ""
      ],
      [
        "Class Schedule",
        "schedule.1.seatsAvailable",
        "Class 1 seatsAvailable",
        "5",
        "Numbers only."
      ],
      [
        "Class Schedule",
        "schedule.2.id",
        "Class 2 id",
        "sc2",
        ""
      ],
      [
        "Class Schedule",
        "schedule.2.subject",
        "Class 2 subject",
        "Combined Mathematics",
        ""
      ],
      [
        "Class Schedule",
        "schedule.2.teacher",
        "Class 2 teacher",
        "Mr. Saman Wickramasinghe",
        ""
      ],
      [
        "Class Schedule",
        "schedule.2.day",
        "Class 2 day",
        "Sunday",
        ""
      ],
      [
        "Class Schedule",
        "schedule.2.time",
        "Class 2 time",
        "8:00 AM",
        ""
      ],
      [
        "Class Schedule",
        "schedule.2.duration",
        "Class 2 duration",
        "3 hours",
        ""
      ],
      [
        "Class Schedule",
        "schedule.2.level",
        "Class 2 level",
        "A/L",
        ""
      ],
      [
        "Class Schedule",
        "schedule.2.seatsAvailable",
        "Class 2 seatsAvailable",
        "8",
        "Numbers only."
      ],
      [
        "Class Schedule",
        "schedule.3.id",
        "Class 3 id",
        "sc3",
        ""
      ],
      [
        "Class Schedule",
        "schedule.3.subject",
        "Class 3 subject",
        "Physics",
        ""
      ],
      [
        "Class Schedule",
        "schedule.3.teacher",
        "Class 3 teacher",
        "Ms. Nilmini Bandara",
        ""
      ],
      [
        "Class Schedule",
        "schedule.3.day",
        "Class 3 day",
        "Saturday",
        ""
      ],
      [
        "Class Schedule",
        "schedule.3.time",
        "Class 3 time",
        "12:00 PM",
        ""
      ],
      [
        "Class Schedule",
        "schedule.3.duration",
        "Class 3 duration",
        "2.5 hours",
        ""
      ],
      [
        "Class Schedule",
        "schedule.3.level",
        "Class 3 level",
        "A/L",
        ""
      ],
      [
        "Class Schedule",
        "schedule.3.seatsAvailable",
        "Class 3 seatsAvailable",
        "12",
        "Numbers only."
      ],
      [
        "Class Schedule",
        "schedule.4.id",
        "Class 4 id",
        "sc4",
        ""
      ],
      [
        "Class Schedule",
        "schedule.4.subject",
        "Class 4 subject",
        "Chemistry",
        ""
      ],
      [
        "Class Schedule",
        "schedule.4.teacher",
        "Class 4 teacher",
        "Mr. Prasanna Herath",
        ""
      ],
      [
        "Class Schedule",
        "schedule.4.day",
        "Class 4 day",
        "Sunday",
        ""
      ],
      [
        "Class Schedule",
        "schedule.4.time",
        "Class 4 time",
        "12:00 PM",
        ""
      ],
      [
        "Class Schedule",
        "schedule.4.duration",
        "Class 4 duration",
        "2.5 hours",
        ""
      ],
      [
        "Class Schedule",
        "schedule.4.level",
        "Class 4 level",
        "A/L",
        ""
      ],
      [
        "Class Schedule",
        "schedule.4.seatsAvailable",
        "Class 4 seatsAvailable",
        "10",
        "Numbers only."
      ],
      [
        "Class Schedule",
        "schedule.5.id",
        "Class 5 id",
        "sc5",
        ""
      ],
      [
        "Class Schedule",
        "schedule.5.subject",
        "Class 5 subject",
        "O/L Mathematics",
        ""
      ],
      [
        "Class Schedule",
        "schedule.5.teacher",
        "Class 5 teacher",
        "Mr. Saman Wickramasinghe",
        ""
      ],
      [
        "Class Schedule",
        "schedule.5.day",
        "Class 5 day",
        "Wednesday",
        ""
      ],
      [
        "Class Schedule",
        "schedule.5.time",
        "Class 5 time",
        "4:00 PM",
        ""
      ],
      [
        "Class Schedule",
        "schedule.5.duration",
        "Class 5 duration",
        "2 hours",
        ""
      ],
      [
        "Class Schedule",
        "schedule.5.level",
        "Class 5 level",
        "O/L",
        ""
      ],
      [
        "Class Schedule",
        "schedule.5.seatsAvailable",
        "Class 5 seatsAvailable",
        "15",
        "Numbers only."
      ],
      [
        "Class Schedule",
        "schedule.6.id",
        "Class 6 id",
        "sc6",
        ""
      ],
      [
        "Class Schedule",
        "schedule.6.subject",
        "Class 6 subject",
        "English Language",
        ""
      ],
      [
        "Class Schedule",
        "schedule.6.teacher",
        "Class 6 teacher",
        "Ms. Rashika Fernando",
        ""
      ],
      [
        "Class Schedule",
        "schedule.6.day",
        "Class 6 day",
        "Thursday",
        ""
      ],
      [
        "Class Schedule",
        "schedule.6.time",
        "Class 6 time",
        "4:00 PM",
        ""
      ],
      [
        "Class Schedule",
        "schedule.6.duration",
        "Class 6 duration",
        "2 hours",
        ""
      ],
      [
        "Class Schedule",
        "schedule.6.level",
        "Class 6 level",
        "O/L & A/L",
        ""
      ],
      [
        "Class Schedule",
        "schedule.6.seatsAvailable",
        "Class 6 seatsAvailable",
        "20",
        "Numbers only."
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
        "tt1",
        ""
      ],
      [
        "Testimonials",
        "testimonials.1.name",
        "Testimonial 1 name",
        "Mr. Ananda Perera",
        ""
      ],
      [
        "Testimonials",
        "testimonials.1.role",
        "Testimonial 1 role",
        "Parent of O/L Student",
        ""
      ],
      [
        "Testimonials",
        "testimonials.1.content",
        "Testimonial 1 content",
        "My daughter's grades improved dramatically after joining Apex. The teachers are dedicated and the environment is excellent. Best decision we made!",
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
        "tt2",
        ""
      ],
      [
        "Testimonials",
        "testimonials.2.name",
        "Testimonial 2 name",
        "Chamodi Jayasinghe",
        ""
      ],
      [
        "Testimonials",
        "testimonials.2.role",
        "Testimonial 2 role",
        "A/L Student",
        ""
      ],
      [
        "Testimonials",
        "testimonials.2.content",
        "Testimonial 2 content",
        "I joined Apex in my A/L year and it was the best decision. The past paper sessions and personalised feedback helped me score 3 A's.",
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
        "https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?w=100&q=80",
        ""
      ],
      [
        "Testimonials",
        "testimonials.3.id",
        "Testimonial 3 id",
        "tt3",
        ""
      ],
      [
        "Testimonials",
        "testimonials.3.name",
        "Testimonial 3 name",
        "Mrs. Kumari Silva",
        ""
      ],
      [
        "Testimonials",
        "testimonials.3.role",
        "Testimonial 3 role",
        "Parent of A/L Student",
        ""
      ],
      [
        "Testimonials",
        "testimonials.3.content",
        "Testimonial 3 content",
        "Apex Academy is not just a tuition class — it's a second family. The teachers genuinely care about each student's future. 10/10!",
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
      actions: ["setupTuitionSettings", "setupSettings", "setupContent", "tuitionContent", "content"],
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
        businessName: "Demo Tuition",
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
