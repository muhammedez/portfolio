import type { Project, Experience, SkillGroup, NavItem } from "./types";

export const siteConfig = {
  name: "Mahamed Izedin",
  role: "Full Stack Web Developer",
  title: "Full Stack Developer",
  bio: "I build full-stack web applications with React, Next.js, Node.js, Express, and Laravel, backed by reliable APIs, clean database design, authentication, integrations, and maintainable SaaS-ready systems.",
  email: "muhammadezedn@gmail.com",
  github: "https://github.com/muhammedez",
  linkedin: "https://linkedin.com/in/yourusername",
  twitter: "https://x.com/yourusername",
  greeting: "Hi, I'm",
};

export const navItems: NavItem[] = [
  { label: "About", href: "#about" },
  { label: "Projects", href: "#projects" },
  { label: "Skills", href: "#skills" },
  { label: "Experience", href: "#experience" },
  { label: "Contact", href: "#contact" },
];

export const heroMetadata: { label: string; value: string }[] = [
  { label: "Experience", value: "2+ years" },
  { label: "Focus", value: "Full-stack + SaaS APIs" },
];

export const heroTechChips: string[] = [
  "React",
  "Next.js",
  "TypeScript",
  "Python",
  "Node.js",
  "Express",
  "PostgreSQL",
  "MongoDB",
  "Mongoose",
  "Laravel",
  "PHP",
  "MySQL",
  "Tailwind CSS",
  "Docker",
];

export const aboutParagraphs: string[] = [
  "I'm a full-stack web developer with 3+ years of hands-on experience building complete applications from responsive interfaces to production-ready APIs and database-backed services.",
  "My stack covers React, Next.js, Node.js, Express, Python, PostgreSQL, MongoDB/Mongoose, Laravel, PHP, MySQL, Tailwind CSS, authentication systems, Docker, and API integrations.",
  "I'm looking for full-stack roles where I can contribute to SaaS products, collaborate with engineering and product teams, and keep building reliable systems used by real businesses.",
];

export const aboutStats: { label: string; value: string }[] = [
  { label: "Frontend Stack", value: "React / Next.js" },
  { label: "Backend Stack", value: "Node.js / Express / Laravel" },
  { label: "Data Stack", value: "PostgreSQL / MongoDB / MySQL" },
];

export const aboutFocusList: string[] = [
  "React/Next.js full-stack applications",
  "Node.js/Express APIs and microservices",
  "SaaS auth, billing, and database work",
];

export const projects: Project[] = [
  {
    id: "inventory-management-system",
    title: "Inventory Management System",
    problem: "Small shops need one place to manage stock, sales, purchases, customers, suppliers, and cash flow instead of juggling spreadsheets.",
    description:
      "Laravel inventory app with a dashboard, POS workflow, purchase receiving, finance ledger, customer and supplier records, low-stock tracking, and dynamic currency settings.",
    stack: ["Laravel 12", "Livewire", "Alpine.js", "Tailwind CSS", "MySQL", "ApexCharts"],
    github: "https://github.com/muhammedez/inventory-management-system",
    image: "https://raw.githubusercontent.com/muhammedez/inventory-management-system/main/public/images/screenshot.png",
  },
  {
    id: "recallify",
    title: "Recallify",
    problem: "Missed calls are easy to forget once they disappear into the Android call log.",
    description:
      "Android missed-call reminder app that detects missed calls locally, creates reminders, sends repeat notifications, supports snooze/call-back actions, and keeps history on-device.",
    stack: ["Kotlin", "Jetpack Compose", "Material 3", "Room", "WorkManager", "DataStore"],
    github: "https://github.com/muhammedez/recallify",
  },
  {
    id: "portfolio",
    title: "Portfolio Website",
    problem: "A developer portfolio needs to present work, skills, experience, and contact paths clearly without feeling like a generic template.",
    description:
      "Responsive personal portfolio built with typed content, reusable React sections, dark mode, animated section reveals, and Vercel-ready deployment config.",
    stack: ["React", "TypeScript", "Vite", "Tailwind CSS", "Lucide React", "Vercel"],
    github: "https://github.com/muhammedez/portfolio",
    live: "https://mahamed-izedin.vercel.app/",
  },
  {
    id: "jebena-cafe",
    title: "Jebena Cafe",
    problem: "A local cafe needs a lightweight web presence that communicates its story, menu highlights, and visit intent fast.",
    description:
      "Static cafe landing page with a branded hero, Ethiopian coffee positioning, feature cards, quote section, call to action, and GitHub Pages deployment.",
    stack: ["HTML", "CSS", "Responsive Layout", "GitHub Pages"],
    github: "https://github.com/muhammedez/jebena-cafe",
    live: "https://muhammedez.github.io/jebena-cafe/",
    image: "https://raw.githubusercontent.com/muhammedez/jebena-cafe/main/images/jebena-cafe.jpg",
  },
  {
    id: "chatbot",
    title: "Chatbot",
    problem: "Chat interfaces need authenticated conversation history and persistent messages without a heavy frontend stack.",
    description:
      "Laravel chat application with login/register flows, conversation and message models, Blade views, Livewire-powered chat UI, and Vite-built assets.",
    stack: ["Laravel 13", "Livewire", "Blade", "Tailwind CSS", "Vite"],
    github: "https://github.com/muhammedez/chatbot",
  },
  {
    id: "yourplaces",
    title: "YourPlaces App",
    problem: "Location-sharing products need a clean split between the user-facing React app and secure backend APIs.",
    description:
      "Full-stack place-sharing project with React routes and forms on the frontend, plus an Express API for users, places, authentication, validation, uploads, and MongoDB persistence.",
    stack: ["React", "React Router", "Node.js", "Express", "MongoDB", "Mongoose"],
    github: "https://github.com/muhammedez/yourplaces-frontend",
    codeLinks: [
      { label: "Frontend", href: "https://github.com/muhammedez/yourplaces-frontend" },
      { label: "API", href: "https://github.com/muhammedez/yourplaces-api" },
    ],
  },
];

export const experience: Experience[] = [
  {
    id: "freelance-2",
    company: "Self-Employed",
    role: "Full Stack Developer",
    period: "2024 – Present",
    bullets: [
      "Design, build, and deploy full-stack web applications for small businesses and startups using React, Next.js, Node.js/Express, and Laravel.",
      "Engineer RESTful APIs, authentication flows, relational and NoSQL data models, payment integrations, and third-party service connections.",
      "Craft responsive interfaces and maintainable backend services with Git-based collaboration, testing, and deployment workflows.",
    ],
    tags: ["React", "Next.js", "Node.js", "Express", "Laravel", "REST API"],
  },
  {
    id: "freelance-1",
    company: "Freelance",
    role: "Web Developer",
    period: "2023 – 2024",
    bullets: [
      "Delivered end-to-end web projects including landing pages, e-commerce storefronts, custom CMS solutions, dashboards, and backend APIs.",
      "Built tailored Node.js and Laravel backends with CRUD workflows, authentication, SQL queries, and external API integrations.",
      "Owned the full project lifecycle: gathering requirements, scoping, development, QA, Git iteration, and deployment.",
    ],
    tags: ["JavaScript", "Node.js", "Laravel", "PHP", "MySQL", "Git"],
  },
  {
    id: "learning",
    company: "Self-Taught Developer",
    role: "Learning & Building",
    period: "2022 – 2023",
    bullets: [
      "Mastered core web fundamentals including HTML, CSS, JavaScript, PHP, SQL, Git, HTTP, REST APIs, and database design.",
      "Built a portfolio of full-stack and backend projects using React, Node.js, Express, Laravel, PostgreSQL, and MongoDB.",
      "Practiced clean code, debugging, documentation, API testing, and team-style workflows through GitHub-based project work.",
    ],
    tags: ["PHP", "JavaScript", "TypeScript", "SQL", "Git", "REST APIs"],
  },
];

export const skillGroups: SkillGroup[] = [
  {
    category: "Languages",
    skills: ["JavaScript", "TypeScript", "Python", "SQL", "PHP", "HTML", "CSS"],
  },
  {
    category: "Frontend",
    skills: ["React", "Next.js", "Tailwind CSS", "Livewire", "Alpine.js"],
  },
  {
    category: "Backend",
    skills: ["Node.js", "Express", "REST APIs", "Microservices", "Authentication", "JWT Auth", "Laravel"],
  },
  {
    category: "Databases",
    skills: ["PostgreSQL", "MongoDB", "Mongoose", "MySQL", "SQLite", "Data Modeling"],
  },
  {
    category: "Tools",
    skills: ["Git", "GitHub", "Docker", "Linux", "VS Code", "Postman", "Vercel", "Cloud Deployment"],
  },
];
