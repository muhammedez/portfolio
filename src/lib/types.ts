export interface Project {
  id: string;
  title: string;
  description: string;
  stack: string[];
  github: string;
  live?: string;
  image?: string;
  featured: boolean;
}

export interface Experience {
  id: string;
  company: string;
  role: string;
  period: string;
  bullets: string[];
}

export interface SkillGroup {
  category: string;
  skills: string[];
}

export interface NavItem {
  label: string;
  href: string;
}
