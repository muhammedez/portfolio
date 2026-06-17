"use client";

import { motion } from "framer-motion";
import { Github, ExternalLink } from "lucide-react";
import { SkillBadge } from "./SkillBadge";
import type { Project } from "@/lib/types";

interface ProjectCardProps {
  project: Project;
}

export function ProjectCard({ project }: ProjectCardProps) {
  return (
    <motion.div
      className={`group relative rounded-xl border border-border bg-card p-6 transition-colors duration-300 hover:border-accent ${
        project.featured ? "md:col-span-2 lg:col-span-3" : ""
      }`}
      whileHover={{ y: -6 }}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
    >
      <div className="flex flex-col h-full">
        {/* Project image placeholder */}
        {project.image && (
          <div className="mb-4 overflow-hidden rounded-lg">
            <motion.img
              src={project.image}
              alt={project.title}
              className="w-full h-40 object-cover rounded-lg"
              whileHover={{ scale: 1.04 }}
              transition={{ duration: 0.3 }}
            />
          </div>
        )}

        {/* Featured badge */}
        {project.featured && !project.image && (
          <div className="mb-4 overflow-hidden rounded-lg bg-surface h-40 flex items-center justify-center">
            <span className="text-muted text-sm font-mono">Featured Project</span>
          </div>
        )}

        {/* Title & Description */}
        <h3 className="text-xl font-bold tracking-tight mb-2 text-foreground group-hover:text-accent transition-colors duration-200">
          {project.title}
        </h3>
        <p className="text-muted-foreground text-sm leading-relaxed mb-4 flex-grow">
          {project.description}
        </p>

        {/* Tech Stack */}
        <div className="flex flex-wrap gap-2 mb-4">
          {project.stack.map((tech) => (
            <SkillBadge key={tech} skill={tech} />
          ))}
        </div>

        {/* Links */}
        <div className="flex items-center gap-3">
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-sm text-muted hover:text-accent transition-colors duration-200"
            aria-label={`${project.title} GitHub repository`}
          >
            <Github className="h-4 w-4" />
            <span>Code</span>
          </a>
          {project.live && (
            <a
              href={project.live}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-sm text-muted hover:text-accent transition-colors duration-200"
              aria-label={`${project.title} live demo`}
            >
              <ExternalLink className="h-4 w-4" />
              <span>Live</span>
            </a>
          )}
        </div>
      </div>
    </motion.div>
  );
}
