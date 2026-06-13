import type { TuitionConfig } from "@/types";

export const tuitionConfig: TuitionConfig = {
  name: "Apex Academy",
  tagline: "Unlocking Academic Excellence",
  description:
    "Sri Lanka's most trusted tuition centre for O/L and A/L students. Expert teachers, proven results, and a nurturing environment for success.",
  phone: "+94 77 345 6789",
  email: "info@apexacademy.lk",
  address: "23 High Level Road",
  city: "Nugegoda, Sri Lanka",
  heroTitle: "Unlock Your\nAcademic Potential",
  heroSubtitle:
    "Join over 2,000 students who achieved their dream results at Apex Academy. Expert teachers, small class sizes, and guaranteed results.",
  heroCtaText: "Register Now",
  heroImage:
    "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=1600&q=80",
  socialLinks: {
    facebook: "https://facebook.com/apexacademylk",
    youtube: "https://youtube.com/apexacademylk",
  },
  whatsapp: {
    phone: "94773456789",
    defaultMessage:
      "Hello Apex Academy! I'd like to register my child for tuition classes. Please provide more details.",
  },
  seo: {
    title: "Apex Academy | O/L & A/L Tuition Centre in Nugegoda",
    description:
      "Sri Lanka's top tuition centre for O/L and A/L students. Expert teachers, proven results. Enrol at Apex Academy Nugegoda today.",
    keywords: [
      "tuition class colombo",
      "al tuition sri lanka",
      "ol tuition",
      "best tuition centre",
      "maths tuition",
      "science tuition nugegoda",
    ],
    ogImage:
      "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=1200&q=80",
  },
  subjects: [
    {
      id: "sub1",
      name: "Mathematics",
      description:
        "From algebra to calculus — our structured approach makes maths accessible and enjoyable for every student.",
      levels: ["Grade 6-9", "O/L", "A/L (Combined Maths)"],
      icon: "Calculator",
      studentsCount: 450,
    },
    {
      id: "sub2",
      name: "Science (Triple)",
      description:
        "Physics, Chemistry and Biology taught individually or as a combined science for O/L students.",
      levels: ["Grade 6-9", "O/L"],
      icon: "FlaskConical",
      studentsCount: 380,
    },
    {
      id: "sub3",
      name: "Physics",
      description:
        "A/L Physics with intensive problem-solving sessions and past paper practice.",
      levels: ["A/L"],
      icon: "Atom",
      studentsCount: 220,
    },
    {
      id: "sub4",
      name: "Chemistry",
      description:
        "Comprehensive A/L Chemistry with practical demonstrations and conceptual clarity.",
      levels: ["A/L"],
      icon: "FlaskConical",
      studentsCount: 195,
    },
    {
      id: "sub5",
      name: "English Language",
      description:
        "Grammar, comprehension, essay writing and spoken English to ensure top marks.",
      levels: ["Grade 6-9", "O/L", "A/L"],
      icon: "BookOpen",
      studentsCount: 310,
    },
    {
      id: "sub6",
      name: "ICT",
      description:
        "Practical ICT skills and theory to excel in O/L and A/L ICT examinations.",
      levels: ["O/L", "A/L"],
      icon: "Monitor",
      studentsCount: 175,
    },
  ],
  teachers: [
    {
      id: "te1",
      name: "Mr. Saman Wickramasinghe",
      subject: "Combined Mathematics",
      qualification: "B.Sc. (Hons) Mathematics, University of Colombo",
      experience: "18 years",
      image:
        "https://images.unsplash.com/photo-1544717297-fa95b6ee9643?w=400&q=80",
      bio: "Mr. Saman is a legend in the A/L Mathematics field. With an unmatched record of students achieving A grades, his teaching method transforms even the most reluctant maths student.",
      rating: 5,
      studentsCount: 890,
    },
    {
      id: "te2",
      name: "Ms. Nilmini Bandara",
      subject: "Physics",
      qualification: "B.Sc. Physics, M.Sc. Applied Physics",
      experience: "12 years",
      image:
        "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&q=80",
      bio: "Ms. Nilmini makes complex physics concepts crystal clear. Former university lecturer who returned to school-level teaching to make a direct impact.",
      rating: 5,
      studentsCount: 620,
    },
    {
      id: "te3",
      name: "Mr. Prasanna Herath",
      subject: "Chemistry",
      qualification: "B.Sc. Chemistry (Special), PhD Candidate",
      experience: "10 years",
      image:
        "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400&q=80",
      bio: "Mr. Prasanna's passion for chemistry is infectious. His practical demonstrations and memory techniques have helped hundreds of students score A grades.",
      rating: 5,
      studentsCount: 480,
    },
    {
      id: "te4",
      name: "Ms. Rashika Fernando",
      subject: "English Language",
      qualification: "B.A. English (Hons), PGDE",
      experience: "9 years",
      image:
        "https://images.unsplash.com/photo-1551836022-deb4988cc6c0?w=400&q=80",
      bio: "Ms. Rashika has a remarkable ability to build confidence in students who struggle with English. Her students consistently achieve A and B grades in O/L and A/L English.",
      rating: 5,
      studentsCount: 340,
    },
  ],
  results: [
    {
      id: "r1",
      studentName: "Tharusha Perera",
      subject: "Combined Mathematics",
      grade: "A",
      year: "2024",
      testimonial: "Mr. Saman's classes were the turning point for me. I went from D grades to getting into Engineering at Moratuwa.",
      avatar:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=80&q=80",
    },
    {
      id: "r2",
      studentName: "Oneli Senarathna",
      subject: "Physics",
      grade: "A",
      year: "2024",
      testimonial: "Ms. Nilmini made me love Physics. I got the island's 4th best result in Physics — couldn't have done it without Apex.",
      avatar:
        "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=80&q=80",
    },
    {
      id: "r3",
      studentName: "Devinda Karunaratne",
      subject: "Chemistry",
      grade: "A",
      year: "2024",
      testimonial: "Chemistry was my weakest subject. After joining Mr. Prasanna's class, I scored an A and got into Medicine. Life-changing!",
      avatar:
        "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=80&q=80",
    },
    {
      id: "r4",
      studentName: "Sanduni Ranaweera",
      subject: "English Language",
      grade: "A",
      year: "2024",
      testimonial: "My O/L English result was a dream. Ms. Rashika's structured classes and constant encouragement made all the difference.",
      avatar:
        "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=80&q=80",
    },
  ],
  schedule: [
    {
      id: "sc1",
      subject: "Combined Mathematics",
      teacher: "Mr. Saman Wickramasinghe",
      day: "Saturday",
      time: "8:00 AM",
      duration: "3 hours",
      level: "A/L",
      seatsAvailable: 5,
    },
    {
      id: "sc2",
      subject: "Combined Mathematics",
      teacher: "Mr. Saman Wickramasinghe",
      day: "Sunday",
      time: "8:00 AM",
      duration: "3 hours",
      level: "A/L",
      seatsAvailable: 8,
    },
    {
      id: "sc3",
      subject: "Physics",
      teacher: "Ms. Nilmini Bandara",
      day: "Saturday",
      time: "12:00 PM",
      duration: "2.5 hours",
      level: "A/L",
      seatsAvailable: 12,
    },
    {
      id: "sc4",
      subject: "Chemistry",
      teacher: "Mr. Prasanna Herath",
      day: "Sunday",
      time: "12:00 PM",
      duration: "2.5 hours",
      level: "A/L",
      seatsAvailable: 10,
    },
    {
      id: "sc5",
      subject: "O/L Mathematics",
      teacher: "Mr. Saman Wickramasinghe",
      day: "Wednesday",
      time: "4:00 PM",
      duration: "2 hours",
      level: "O/L",
      seatsAvailable: 15,
    },
    {
      id: "sc6",
      subject: "English Language",
      teacher: "Ms. Rashika Fernando",
      day: "Thursday",
      time: "4:00 PM",
      duration: "2 hours",
      level: "O/L & A/L",
      seatsAvailable: 20,
    },
  ],
  testimonials: [
    {
      id: "tt1",
      name: "Mr. Ananda Perera",
      role: "Parent of O/L Student",
      content:
        "My daughter's grades improved dramatically after joining Apex. The teachers are dedicated and the environment is excellent. Best decision we made!",
      rating: 5,
      avatar:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&q=80",
    },
    {
      id: "tt2",
      name: "Chamodi Jayasinghe",
      role: "A/L Student",
      content:
        "I joined Apex in my A/L year and it was the best decision. The past paper sessions and personalised feedback helped me score 3 A's.",
      rating: 5,
      avatar:
        "https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?w=100&q=80",
    },
    {
      id: "tt3",
      name: "Mrs. Kumari Silva",
      role: "Parent of A/L Student",
      content:
        "Apex Academy is not just a tuition class — it's a second family. The teachers genuinely care about each student's future. 10/10!",
      rating: 5,
      avatar:
        "https://images.unsplash.com/photo-1488426862026-3ee34a7d66df?w=100&q=80",
    },
  ],
  achievements: [
    { id: "a1", label: "Students Enrolled", value: "2,000+" },
    { id: "a2", label: "A-Grade Results (2024)", value: "380+" },
    { id: "a3", label: "Years of Excellence", value: "15" },
    { id: "a4", label: "University Admissions", value: "95%" },
  ],
};
