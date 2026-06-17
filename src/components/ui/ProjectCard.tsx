"use client";

import { motion } from "framer-motion";
import { Github, ExternalLink, ImageIcon } from "lucide-react";
import { SkillBadge } from "./SkillBadge";
import type { Project } from "@/lib/types";

interface ProjectCardProps {
  project: Project;
  featured?: boolean;
}

export function ProjectCard({ project, featured }: ProjectCardProps) {
  return (
    <motion.div
      className="group relative rounded-xl border border-border bg-card transition-all duration-300 hover:border-accent/60 hover:shadow-md overflow-hidden"
      whileHover={{ y: -2 }}
      transition={{ type: "spring", stiffness: 200, damping: 20 }}
    >
      {/* Screenshot area */}
      <div className={`relative overflow-hidden bg-surface/50 border-b border-border/50 ${featured ? "h-40" : "h-36"}`}>
        {project.image ? (
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center">
            <ImageIcon className="h-6 w-6 text-muted-foreground/25" />
          </div>
        )}
      </div>

      <div className="p-5 sm:p-6">
        {/* Title */}
        <h3 className={`font-bold tracking-tight text-foreground group-hover:text-accent transition-colors duration-200 mb-2 ${featured ? "text-lg" : "text-base"}`}>
          {project.title}
        </h3>

        {/* Description */}
        <p className="text-sm text-muted-foreground leading-relaxed mb-4">
          <span className="font-medium text-foreground/80">{project.problem}</span>{" "}
          {project.description}
        </p>

        {/* Tech stack */}
        <div className="flex flex-wrap gap-1.5 mb-4">
          {project.stack.map((tech) => (
            <SkillBadge key={tech} skill={tech} />
          ))}
        </div>

        {/* Links */}
        <div className="flex items-center gap-4 pt-3 border-t border-border/50">
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-xs text-muted-foreground hover:text-accent transition-colors duration-200"
            aria-label={`${project.title} GitHub repository`}
          >
            <Github className="h-3.5 w-3.5" />
            <span>Code</span>
          </a>
          {project.live && (
            <a
              href={project.live}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-xs text-muted-foreground hover:text-accent transition-colors duration-200"
              aria-label={`${project.title} live demo`}
            >
              <ExternalLink className="h-3.5 w-3.5" />
              <span>Live Demo</span>
            </a>
          )}
        </div>
      </div>
    </motion.div>
  );
}
