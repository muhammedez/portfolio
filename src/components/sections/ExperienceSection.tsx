"use client";

import { motion } from "framer-motion";
import { AnimatedSection, staggerContainer, staggerItem } from "@/components/ui/AnimatedSection";
import { TimelineItem } from "@/components/ui/TimelineItem";
import { experience } from "@/lib/data";

export function ExperienceSection() {
  return (
    <section id="experience" className="py-24 sm:py-32 px-4 sm:px-6 bg-surface/30">
      <div className="max-w-3xl mx-auto">
        <AnimatedSection>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-[-0.03em] text-foreground mb-2">
            Experience
          </h2>
          <p className="text-muted-foreground text-base mb-12 max-w-2xl">
            My journey as a developer so far — from self-taught beginnings to building for clients.
          </p>
        </AnimatedSection>

        <motion.div
          className="max-w-3xl space-y-14"
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
