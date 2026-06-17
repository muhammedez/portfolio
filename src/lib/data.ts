import type { Project, Experience, SkillGroup, NavItem } from "./types";

export const siteConfig = {
  name: "Muhammed Izedin",
  role: "Full Stack Web Developer",
  bio: "I build responsive web applications using Laravel, React, Next.js, Livewire, Tailwind CSS, and MySQL.",
  email: "muhammadezedn@gmail.com",
  github: "https://github.com/muhammedez",
  linkedin: "LinkedIn",
  twitter: "X",
};

export const navItems: NavItem[] = [
  { label: "About", href: "#about" },
  { label: "Projects", href: "#projects" },
  { label: "Skills", href: "#skills" },
  { label: "Experience", href: "#experience" },
  { label: "Contact", href: "#contact" },
];

export const typewriterStrings: string[] = [
  "Fullstack Developer",
  "React Engineer",
  "Open Source Contributor",
  "TypeScript Enthusiast",
];

export const aboutStats: { label: string; value: string }[] = [
  { label: "Years Experience", value: "5+" },
  { label: "Projects Shipped", value: "20+" },
  { label: "Open Source Repos", value: "8" },
  { label: "Cups of Coffee", value: "∞" },
];

export const aboutText: string[] = [
  "I'm a fullstack developer based in San Francisco with a deep love for building things that live on the web. My journey started with tinkering on WordPress themes and evolved into architecting scalable applications with React, Node.js, and cloud-native infrastructure.",
  "When I'm not writing code, I'm contributing to open-source projects, mentoring junior developers, or exploring the latest in WebAssembly and edge computing. I believe great software is built at the intersection of empathy and engineering rigor.",
  "I thrive in cross-functional teams where design and engineering collaborate closely. Whether it's a pixel-perfect UI or a resilient API, I care about the details that make products feel right.",
];

export const projects: Project[] = [
  {
    id: "devflow",
    title: "DevFlow",
    description:
      "A developer workflow orchestrator that connects GitHub, Jira, and Slack into a unified pipeline dashboard. Real-time CI status, PR reviews, and deployment tracking.",
    stack: ["Next.js", "TypeScript", "PostgreSQL", "Redis", "Docker"],
    github: "https://github.com/alexchen/devflow",
    live: "https://devflow.app",
    featured: true,
  },
  {
    id: "synth-ui",
    title: "Synth UI",
    description:
      "An open-source component library inspired by retro synthesizer aesthetics. 40+ accessible React components with built-in dark mode and animation primitives.",
    stack: ["React", "Storybook", "Tailwind CSS", "Radix UI", "Framer Motion"],
    github: "https://github.com/alexchen/synth-ui",
    live: "https://synth-ui.dev",
    featured: true,
  },
  {
    id: "notegraph",
    title: "NoteGraph",
    description:
      "A local-first knowledge graph notebook. Bidirectional linking, Markdown + LaTeX, and offline sync powered by CRDTs.",
    stack: ["Next.js", "Y.js", "IndexedDB", "WebRTC", "TypeScript"],
    github: "https://github.com/alexchen/notegraph",
    featured: false,
  },
  {
    id: "cloudbench",
    title: "CloudBench",
    description:
      "Serverless benchmarking tool that runs performance tests across AWS Lambda, Cloudflare Workers, and Deno Deploy simultaneously.",
    stack: ["Go", "AWS CDK", "Cloudflare Workers", "Deno", "TypeScript"],
    github: "https://github.com/alexchen/cloudbench",
    live: "https://cloudbench.io",
    featured: false,
  },
  {
    id: "pixelcraft",
    title: "PixelCraft",
    description:
      "Browser-based pixel art editor with real-time collaboration, animation timeline, and export to sprite sheets or GIF.",
    stack: ["React", "Canvas API", "Socket.io", "Express", "WebAssembly"],
    github: "https://github.com/alexchen/pixelcraft",
    featured: false,
  },
  {
    id: "termiterm",
    title: "TermiTerm",
    description:
      "A GPU-accelerated terminal emulator built with Rust and WebGPU. Supports tabs, split panes, and custom shader themes.",
    stack: ["Rust", "WebGPU", "WGSL", "TypeScript", "Electron"],
    github: "https://github.com/alexchen/termiterm",
    featured: false,
  },
];

export const experience: Experience[] = [
  {
    id: "vercel",
    company: "Vercel",
    role: "Senior Frontend Engineer",
    period: "Jan 2023 – Present",
    bullets: [
      "Led the redesign of the deployment dashboard, reducing time-to-first-deploy by 40% through improved UX flows and optimistic UI updates.",
      "Built a real-time log streaming feature using Server-Sent Events, handling 10k+ concurrent connections with zero data loss.",
      "Mentored 3 junior engineers and established a frontend code review culture that cut PR review time by 60%.",
    ],
  },
  {
    id: "stripe",
    company: "Stripe",
    role: "Fullstack Engineer",
    period: "Jun 2021 – Dec 2022",
    bullets: [
      "Developed the merchant analytics dashboard serving 100k+ businesses, with interactive charts and CSV/PDF export.",
      "Designed and implemented a rate-limiting middleware layer in Go that reduced API abuse incidents by 75%.",
      "Collaborated with the design systems team to ship a unified component library across 5 product surfaces.",
    ],
  },
  {
    id: "freelance",
    company: "Freelance",
    role: "Web Developer",
    period: "Mar 2019 – May 2021",
    bullets: [
      "Delivered 12+ client projects from concept to production, including e-commerce platforms, SaaS dashboards, and marketing sites.",
      "Specialized in Jamstack architectures with Next.js, reducing average page load times from 4s to under 1s.",
      "Maintained a 98% client satisfaction rate and generated consistent referrals through quality-first delivery.",
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
      "Framer Motion",
      "Vue.js",
      "HTML/CSS",
      "Storybook",
    ],
  },
  {
    category: "Backend",
    skills: [
      "Node.js",
      "Go",
      "Python",
      "PostgreSQL",
      "Redis",
      "GraphQL",
      "REST APIs",
      "WebSockets",
    ],
  },
  {
    category: "DevOps",
    skills: [
      "Docker",
      "AWS",
      "Vercel",
      "CI/CD",
      "Terraform",
      "Kubernetes",
      "Cloudflare",
      "Linux",
    ],
  },
  {
    category: "Tools",
    skills: [
      "Git",
      "VS Code",
      "Figma",
      "Neovim",
      "Zsh",
      "Postman",
      "Notion",
      "Linear",
    ],
  },
];
