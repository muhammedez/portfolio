import type { Project, Experience, SkillGroup, NavItem } from "./types";

export const siteConfig = {
  name: "Mahamed Izedin",
  role: "Full Stack Web Developer",
  title: "Full Stack Developer",
  bio: "I build complete web applications — Laravel backends, React frontends, and Next.js sites. Focused on clean code, practical solutions, and creating software that solves real problems.",
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
  { label: "Focus", value: "Laravel + React" },
];

export const heroTechChips: string[] = [
  "Laravel",
  "React",
  "Next.js",
  "TypeScript",
  "Tailwind CSS",
  "PHP",
  "MySQL",
];

export const aboutParagraphs: string[] = [
  "I'm a full-stack web developer passionate about building complete applications from concept to deployment. I enjoy working across the entire stack — from crafting responsive UIs with React and Next.js, to building robust backends with Laravel and PHP.",
  "I focus on writing clean, maintainable code that solves real problems. Whether it's a web dashboard, a REST API, or a full-featured platform, I bring attention to detail and a practical approach to every project.",
  "I'm currently looking for junior developer roles and freelance opportunities where I can contribute, learn from experienced teammates, and grow my skills.",
];

export const aboutStats: { label: string; value: string }[] = [
  { label: "Frontend Stack", value: "React / Next.js" },
  { label: "Backend Stack", value: "Laravel / PHP" },
];

export const aboutFocusList: string[] = [
  "Laravel + React applications",
  "REST API development",
  "Open source contributions",
];

export const projects: Project[] = [
  {
    id: "ecommerce-platform",
    title: "E-Commerce Platform",
    problem: "Small businesses lose sales to high platform fees and rigid storefront tools.",
    description:
      "Built a full-featured e-commerce platform handling product listings, cart, checkout, and order tracking — paired with an admin dashboard for inventory and sales oversight.",
    stack: ["Laravel", "React", "MySQL", "Tailwind CSS", "Livewire"],
    github: "https://github.com/muhammedez/ecommerce-platform",
  },
  {
    id: "blog-api",
    title: "Headless Blog API",
    problem: "Content teams waste time re-publishing the same posts across different frontends.",
    description:
      "Designed a RESTful content API with JWT authentication and role-based access control, enabling a single blog backend to serve multiple client applications.",
    stack: ["Laravel", "PHP", "MySQL", "REST API", "JWT"],
    github: "https://github.com/muhammedez/blog-api",
  },
  {
    id: "portfolio-generator",
    title: "Portfolio Generator",
    problem: "Developers spend more time building their portfolio than showcasing their actual work.",
    description:
      "A tool that turns a simple config file into a polished developer portfolio — dark mode, responsive layouts, and one-click deployment included.",
    stack: ["Next.js", "TypeScript", "Tailwind CSS", "MDX"],
    github: "https://github.com/muhammedez/portfolio-generator",
    live: "https://portfolio-gen.vercel.app",
  },
  {
    id: "weather-dashboard",
    title: "Weather Dashboard",
    problem: "Switching between tabs to check forecasts for different cities is slow and distracting.",
    description:
      "Real-time weather dashboard that aggregates forecasts for multiple cities in one view — location search, 7-day outlook, and smooth animated weather icons.",
    stack: ["React", "TypeScript", "Tailwind CSS", "OpenWeather API"],
    github: "https://github.com/muhammedez/weather-dashboard",
    live: "https://weather-dash-demo.vercel.app",
  },
  {
    id: "inventory-system",
    title: "Inventory Management System",
    problem: "Manual stock tracking in spreadsheets leads to costly errors and overselling.",
    description:
      "Web-based inventory system with barcode scanning, low-stock alerts, supplier tracking, and sales reporting — built to replace error-prone spreadsheets for small retailers.",
    stack: ["Laravel", "Livewire", "MySQL", "Alpine.js", "Tailwind CSS"],
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
      "Design, build, and deploy full-stack web applications for small businesses and startups using Laravel, React, and Next.js.",
      "Engineer RESTful APIs with Laravel, handling authentication, payment integrations, and third-party service connections.",
      "Craft responsive, accessible interfaces with Tailwind CSS and modern component-driven workflows.",
    ],
    tags: ["Laravel", "React", "Next.js", "Tailwind CSS", "REST API"],
  },
  {
    id: "freelance-1",
    company: "Freelance",
    role: "Web Developer",
    period: "2023 – 2024",
    bullets: [
      "Delivered end-to-end web projects — landing pages, e-commerce storefronts, and custom CMS solutions — for local businesses.",
      "Built tailored Laravel backends and integrated external APIs to meet specific client requirements.",
      "Owned the full project lifecycle: gathering requirements, scoping, development, QA, and deployment.",
    ],
    tags: ["Laravel", "PHP", "MySQL", "JavaScript", "HTML/CSS"],
  },
  {
    id: "learning",
    company: "Self-Taught Developer",
    role: "Learning & Building",
    period: "2022 – 2023",
    bullets: [
      "Mastered core web fundamentals — HTML, CSS, JavaScript, PHP, and SQL — through hands-on building and online coursework.",
      "Built a portfolio of personal projects and contributed to open-source repositories on GitHub.",
      "Completed industry-recognized certifications in Laravel, React, and modern web development practices.",
    ],
    tags: ["PHP", "JavaScript", "HTML/CSS", "Git", "SQL"],
  },
];

export const skillGroups: SkillGroup[] = [
  {
    category: "Languages",
    skills: ["PHP", "JavaScript", "TypeScript", "HTML", "CSS", "SQL"],
  },
  {
    category: "Frontend",
    skills: ["React", "Next.js", "Tailwind CSS", "Livewire", "Alpine.js"],
  },
  {
    category: "Backend",
    skills: ["Laravel", "Node.js", "Express", "REST APIs", "MySQL", "SQLite", "JWT Auth"],
  },
  {
    category: "Tools",
    skills: ["Git", "GitHub", "Docker", "Linux", "VS Code", "Postman", "Vercel"],
  },
];
