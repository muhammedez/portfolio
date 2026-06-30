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
  { label: "Experience", value: "3+ years" },
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
    id: "saas-api-billing-service",
    title: "SaaS API & Billing Service",
    problem: "SaaS platforms need reliable account, subscription, and billing workflows that stay in sync with product access.",
    description:
      "Built backend services for customer records, authentication, subscription status, billing webhooks, and audit-friendly API workflows.",
    stack: ["Node.js", "Express", "TypeScript", "PostgreSQL", "MongoDB", "Mongoose", "Docker"],
    github: "https://github.com/muhammedez/saas-api-billing-service",
  },
  {
    id: "portfolio-generator",
    title: "Portfolio Generator",
    problem: "Developers spend more time building their portfolio than showcasing their actual work.",
    description:
      "A tool that turns a simple config file into a polished developer portfolio with dark mode, responsive layouts, typed content, and one-click deployment.",
    stack: ["Next.js", "TypeScript", "Tailwind CSS", "MDX", "Vercel"],
    github: "https://github.com/muhammedez/portfolio-generator",
    live: "https://portfolio-gen.vercel.app",
  },
  {
    id: "weather-dashboard",
    title: "Weather Dashboard",
    problem: "Switching between tabs to check forecasts for different cities is slow and distracting.",
    description:
      "Real-time weather dashboard that aggregates forecasts for multiple cities in one view with location search, API integration, and responsive UI states.",
    stack: ["React", "TypeScript", "Tailwind CSS", "OpenWeather API"],
    github: "https://github.com/muhammedez/weather-dashboard",
    live: "https://weather-dash-demo.vercel.app",
  },
  {
    id: "ecommerce-platform",
    title: "E-Commerce Platform",
    problem: "Small businesses lose sales to high platform fees and rigid storefront tools.",
    description:
      "Built a full-featured e-commerce platform handling product listings, cart, checkout, order tracking, admin workflows, and payment-ready backend logic.",
    stack: ["Laravel", "React", "MySQL", "Tailwind CSS", "Livewire", "REST API", "Payment Gateway"],
    github: "https://github.com/muhammedez/ecommerce-platform",
  },
  {
    id: "blog-api",
    title: "Headless Blog API",
    problem: "Content teams waste time re-publishing the same posts across different frontends.",
    description:
      "Designed a RESTful content API with JWT authentication and role-based access control, enabling a single backend to serve multiple client applications.",
    stack: ["Laravel", "PHP", "MySQL", "REST API", "JWT", "Role-Based Access"],
    github: "https://github.com/muhammedez/blog-api",
  },
  {
    id: "inventory-system",
    title: "Inventory Management System",
    problem: "Manual stock tracking in spreadsheets leads to costly errors and overselling.",
    description:
      "Web-based inventory system with barcode scanning, low-stock alerts, supplier tracking, sales reporting, and database-backed admin workflows.",
    stack: ["Laravel", "Livewire", "MySQL", "Alpine.js", "Tailwind CSS", "REST API"],
    github: "https://github.com/muhammedez/inventory-system",
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
