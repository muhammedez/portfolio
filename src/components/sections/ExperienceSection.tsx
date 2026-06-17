"use client";

import { motion } from "framer-motion";
import { AnimatedSection, staggerContainer, staggerItem } from "@/components/ui/AnimatedSection";
import { TimelineItem } from "@/components/ui/TimelineItem";
import { experience } from "@/lib/data";

export function ExperienceSection() {
  return (
    <section id="experience" className="py-20 sm:py-28 px-4 sm:px-6 bg-surface/30">
      <div className="max-w-5xl mx-auto">
        <AnimatedSection>
          <h2 className="text-4xl font-bold tracking-[-0.03em] text-foreground mb-4">
            Experience
          </h2>
          <p className="text-muted-foreground mb-12 max-w-2xl text-base leading-relaxed">
            Where I&apos;ve worked and what I&apos;ve done. Most recent first.
          </p>
        </AnimatedSection>

        <motion.div
          className="max-w-3xl"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
        >
          {experience.map((exp) => (
            <motion.div key={exp.id} variants={staggerItem}>
              <TimelineItem experience={exp} />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
