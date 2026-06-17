"use client";

import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { ProjectCard } from "@/components/ui/ProjectCard";
import { projects } from "@/lib/data";

export function ProjectsSection() {
  return (
    <section id="projects" className="py-24 sm:py-32 px-4 sm:px-6 bg-surface/30">
      <div className="max-w-4xl mx-auto">
        <AnimatedSection>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-[-0.03em] text-foreground mb-2">
            Projects
          </h2>
          <p className="text-muted-foreground text-base mb-8 max-w-2xl">
            A selection of things I&apos;ve built. Here are some projects that solve real problems.
          </p>
        </AnimatedSection>

        <div className="grid sm:grid-cols-2 gap-4 sm:gap-5">
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} featured={project.featured} />
          ))}
        </div>
      </div>
    </section>
  );
}
