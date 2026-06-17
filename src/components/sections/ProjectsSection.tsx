"use client";

import { motion } from "framer-motion";
import { AnimatedSection, staggerContainer, staggerItem } from "@/components/ui/AnimatedSection";
import { ProjectCard } from "@/components/ui/ProjectCard";
import { projects } from "@/lib/data";

export function ProjectsSection() {
  const featured = projects.filter((p) => p.featured);
  const others = projects.filter((p) => !p.featured);

  return (
    <section id="projects" className="py-24 sm:py-32 px-4 sm:px-6 bg-surface/30">
      <div className="max-w-3xl mx-auto">
        <AnimatedSection>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-[-0.03em] text-foreground mb-2">
            Projects
          </h2>
          <p className="text-muted-foreground text-base mb-8">
            A selection of things I&apos;ve built. Here are some projects that solve real problems.
          </p>
        </AnimatedSection>

        {/* Featured */}
        <p className="text-xs font-mono text-muted-foreground uppercase tracking-wider mb-3">
          Featured
        </p>
        <motion.div
          className="grid sm:grid-cols-2 gap-4 sm:gap-5 mb-10"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
        >
          {featured.map((project) => (
            <motion.div key={project.id} variants={staggerItem}>
              <ProjectCard project={project} variant="featured" />
            </motion.div>
          ))}
        </motion.div>

        {/* Other Projects */}
        <p className="text-xs font-mono text-muted-foreground uppercase tracking-wider mb-3">
          More Projects
        </p>
        <motion.div
          className="grid sm:grid-cols-2 gap-4 sm:gap-5"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
        >
          {others.map((project) => (
            <motion.div key={project.id} variants={staggerItem}>
              <ProjectCard project={project} variant="compact" />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
