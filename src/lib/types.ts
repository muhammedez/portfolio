export interface ProjectLink {
  label: string;
  href: string;
}

export interface Project {
  id: string;
  title: string;
  problem: string;
  description: string;
  stack: string[];
  github: string;
  codeLinks?: ProjectLink[];
  live?: string;
  image?: string;
}

export interface Experience {
  id: string;
  company: string;
  role: string;
  period: string;
  bullets: string[];
  tags?: string[];
}

export interface SkillGroup {
  category: string;
  skills: string[];
}

export interface NavItem {
  label: string;
  href: string;
}
