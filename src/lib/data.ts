import type { Project, Experience, SkillGroup, NavItem } from "./types";

export const siteConfig = {
  name: "Muhammed Izedin",
  role: "Full Stack Web Developer",
  bio: "I build complete web applications — Laravel backends, React frontends, and Next.js sites. Focused on clean code and practical solutions.",
  email: "muhammadezedn@gmail.com",
  github: "https://github.com/muhammedez",
  linkedin: "https://linkedin.com/in/yourusername",
  twitter: "https://x.com/yourusername",
};

export const navItems: NavItem[] = [
  { label: "About", href: "#about" },
  { label: "Projects", href: "#projects" },
  { label: "Skills", href: "#skills" },
  { label: "Experience", href: "#experience" },
  { label: "Contact", href: "#contact" },
];

export const typewriterStrings: string[] = [
  "Full Stack Developer",
  "Laravel Developer",
  "React Developer",
  "PHP Developer",
];

export const heroTechChips: string[] = [
  "Laravel",
  "React",
  "Next.js",
  "Tailwind CSS",
  "PHP",
  "MySQL",
];

export const aboutStats: { label: string; value: string }[] = [
  { label: "Projects Built", value: "12+" },
  { label: "Frontend Stack", value: "React / Next.js" },
  { label: "Backend Stack", value: "Laravel / PHP" },
];

export const aboutText: string[] = [
  "I'm a full-stack web developer passionate about building complete applications from concept to deployment. I enjoy working across the entire stack — from crafting responsive UIs with React and Next.js, to building robust backends with Laravel and PHP.",
  "I focus on writing clean, maintainable code that solves real problems. Whether it's a web dashboard, a REST API, or a full-featured platform, I bring attention to detail and a practical approach to every project.",
  "I'm currently looking for junior developer roles and freelance opportunities where I can contribute, learn from experienced teammates, and grow my skills.",
];

export const projects: Project[] = [
  {
    id: "ecommerce-platform",
    title: "E-Commerce Platform",
    problem: "Small businesses need an affordable way to sell online without paying high platform fees.",
    description:
      "A full-featured e-commerce platform with product management, cart, checkout, order tracking, and an admin dashboard. Built with Laravel on the backend and React on the frontend.",
    stack: ["Laravel", "React", "MySQL", "Tailwind CSS", "Livewire"],
    github: "https://github.com/muhammedez/ecommerce-platform",
    featured: true,
  },
  {
    id: "blog-api",
    title: "Headless Blog API",
    problem: "Content creators need a reliable, version-controlled way to manage blog content across multiple frontends.",
    description:
      "A RESTful API for managing blog posts, categories, and authors. Features JWT authentication, role-based access, and full CRUD operations.",
    stack: ["Laravel", "PHP", "MySQL", "REST API", "JWT"],
    github: "https://github.com/muhammedez/blog-api",
    featured: true,
  },
  {
    id: "portfolio-generator",
    title: "Portfolio Generator",
    problem: "Developers spend too much time building their portfolio instead of showcasing their work.",
    description:
      "A Next.js app that generates developer portfolios from a simple config file. Supports dark mode, responsive layouts, and easy deployment to Vercel.",
    stack: ["Next.js", "TypeScript", "Tailwind CSS", "MDX"],
    github: "https://github.com/muhammedez/portfolio-generator",
    live: "https://portfolio-gen.vercel.app",
    featured: false,
  },
  {
    id: "weather-dashboard",
    title: "Weather Dashboard",
    problem: "Checking the weather across multiple cities requires opening several tabs — a unified view saves time.",
    description:
      "A weather dashboard that displays real-time forecasts for multiple cities. Features location search, 7-day forecasts, and animated weather icons.",
    stack: ["React", "TypeScript", "Tailwind CSS", "OpenWeather API"],
    github: "https://github.com/muhammedez/weather-dashboard",
    live: "https://weather-dash-demo.vercel.app",
    featured: false,
  },
  {
    id: "inventory-system",
    title: "Inventory Management System",
    problem: "Tracking stock manually with spreadsheets leads to errors and overselling.",
    description:
      "A web-based inventory system with barcode scanning, stock alerts, supplier management, and sales reporting. Built for small to medium retailers.",
    stack: ["Laravel", "Livewire", "MySQL", "Alpine.js", "Tailwind CSS"],
    github: "https://github.com/muhammedez/inventory-system",
    featured: false,
  },
];

export const experience: Experience[] = [
  {
    id: "freelance-2",
    company: "Self-Employed",
    role: "Full Stack Developer",
    period: "2024 – Present",
    bullets: [
      "Built and deployed full-stack web applications using Laravel, React, and Next.js for small businesses and startups.",
      "Developed RESTful APIs with Laravel, integrating payment gateways and third-party services.",
      "Created responsive, accessible user interfaces with Tailwind CSS and modern frontend tooling.",
    ],
  },
  {
    id: "freelance-1",
    company: "Freelance",
    role: "Web Developer",
    period: "2023 – 2024",
    bullets: [
      "Delivered web development projects for local businesses, including landing pages, e-commerce sites, and custom CMS solutions.",
      "Built custom Laravel applications and integrated third-party APIs for client projects.",
      "Managed end-to-end project delivery: requirements gathering, development, testing, and deployment.",
    ],
  },
  {
    id: "learning",
    company: "Self-Taught Developer",
    role: "Learning & Building",
    period: "2022 – 2023",
    bullets: [
      "Mastered full-stack web development fundamentals: HTML, CSS, JavaScript, PHP, and SQL.",
      "Built personal projects and contributed to open-source repositories on GitHub.",
      "Completed online certifications in Laravel, React, and modern web development.",
    ],
  },
];

export const skillGroups: SkillGroup[] = [
  {
    category: "Frontend",
    skills: [
      "React",
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "HTML/CSS",
      "JavaScript",
      "Livewire",
      "Alpine.js",
    ],
  },
  {
    category: "Backend",
    skills: [
      "Laravel",
      "PHP",
      "Node.js",
      "Express",
      "MySQL",
      "SQLite",
      "REST APIs",
      "JWT Auth",
    ],
  },
  {
    category: "Tools",
    skills: [
      "Git",
      "GitHub",
      "VS Code",
      "Docker",
      "Linux",
      "Postman",
      "Vercel",
    ],
  },
];
