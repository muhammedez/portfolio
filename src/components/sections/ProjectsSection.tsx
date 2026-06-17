"use client";

import { motion } from "framer-motion";
import { AnimatedSection, staggerContainer, staggerItem } from "@/components/ui/AnimatedSection";
import { ProjectCard } from "@/components/ui/ProjectCard";
import { projects } from "@/lib/data";

export function ProjectsSection() {
  const featured = projects.filter((p) => p.featured);
  const others = projects.filter((p) => !p.featured);

  return (
    <section id="projects" className="py-20 sm:py-28 px-4 sm:px-6 bg-surface/30">
      <div className="max-w-5xl mx-auto">
        <AnimatedSection>
          <h2 className="text-4xl font-bold tracking-[-0.03em] text-foreground mb-4">
            Projects
          </h2>
          <p className="text-muted-foreground mb-12 max-w-2xl text-base leading-relaxed">
            A selection of things I&apos;ve built. Some are open-source tools, others are production applications.
          </p>
        </AnimatedSection>

        {/* Featured Projects */}
        <motion.div
          className="grid md:grid-cols-2 gap-6 mb-6"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
        >
          {featured.map((project) => (
            <motion.div key={project.id} variants={staggerItem}>
              <ProjectCard project={project} />
            </motion.div>
          ))}
        </motion.div>

        {/* Other Projects */}
        <motion.div
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
        >
          {others.map((project) => (
            <motion.div key={project.id} variants={staggerItem}>
              <ProjectCard project={project} />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
