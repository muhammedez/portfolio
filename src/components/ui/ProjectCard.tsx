"use client";

import { motion } from "framer-motion";
import { Github, ExternalLink, ImageIcon } from "lucide-react";
import { SkillBadge } from "./SkillBadge";
import type { Project } from "@/lib/types";

interface ProjectCardProps {
  project: Project;
  variant?: "featured" | "compact";
}

export function ProjectCard({ project, variant = "compact" }: ProjectCardProps) {
  const isFeatured = variant === "featured";

  return (
    <motion.div
      className={`group relative rounded-xl border bg-card transition-all duration-300 hover:shadow-md overflow-hidden ${
        isFeatured
          ? "border-accent/20 hover:border-accent/50 shadow-sm"
          : "border-border hover:border-accent/40"
      }`}
      whileHover={{ y: isFeatured ? -3 : -2 }}
      transition={{ type: "spring", stiffness: 200, damping: 20 }}
    >
      <div className={`relative overflow-hidden border-b border-border/50 ${
        isFeatured ? "h-44 sm:h-48" : "h-36"
      }`}>
        {project.image ? (
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-surface/80 via-surface/40 to-accent/5">
            <div className="text-center">
              <ImageIcon className="h-8 w-8 text-muted-foreground/20 mx-auto mb-1" />
              {isFeatured && (
                <span className="text-[10px] text-muted-foreground/30 font-mono uppercase tracking-wider">
                  Screenshot
                </span>
              )}
            </div>
          </div>
        )}
      </div>

      <div className={`flex flex-col h-full ${isFeatured ? "p-5 sm:p-6" : "p-4 sm:p-5"}`}>
        <h3 className={`font-bold tracking-tight text-foreground group-hover:text-accent transition-colors duration-200 ${
          isFeatured ? "text-lg mb-3" : "text-base mb-2"
        }`}>
          {project.title}
        </h3>

        {/* Problem — visually distinct callout */}
        <div className={`rounded-lg bg-surface/50 border border-border/60 px-3 py-2.5 mb-3`}>
          <p className={`text-muted-foreground leading-relaxed ${
            isFeatured ? "text-sm" : "text-sm"
          }`}>
            <span className="text-foreground/80 font-medium">{project.problem}</span>
          </p>
        </div>

        {/* Description */}
        <p className={`text-muted-foreground/80 leading-relaxed ${
          isFeatured ? "text-sm mb-4" : "text-sm mb-3"
        }`}>
          {project.description}
        </p>

        <div className="mt-auto">
          <div className="flex flex-wrap gap-1.5 mb-4">
            {project.stack.map((tech) => (
              <SkillBadge key={tech} skill={tech} />
            ))}
          </div>

          <div className={`flex items-center gap-4 pt-3 border-t ${
            isFeatured ? "border-accent/20" : "border-border/50"
          }`}>
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-xs font-medium text-muted-foreground hover:text-accent transition-colors duration-200"
            >
              <Github className="h-3.5 w-3.5" />
              <span>Code</span>
            </a>
            {project.live && (
              <a
                href={project.live}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-xs font-medium text-muted-foreground hover:text-accent transition-colors duration-200"
              >
                <ExternalLink className="h-3.5 w-3.5" />
                <span>Live Demo</span>
              </a>
            )}
          </div>
        </div>
      </div>
    </motion.div>
  );
}
