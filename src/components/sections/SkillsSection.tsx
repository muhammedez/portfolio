"use client";

import { motion } from "framer-motion";
import { AnimatedSection, staggerContainer, staggerItem } from "@/components/ui/AnimatedSection";
import { SkillBadge } from "@/components/ui/SkillBadge";
import { skillGroups } from "@/lib/data";

export function SkillsSection() {
  return (
    <section id="skills" className="py-20 sm:py-28 px-4 sm:px-6">
      <div className="max-w-5xl mx-auto">
        <AnimatedSection>
          <h2 className="text-4xl font-bold tracking-[-0.03em] text-foreground mb-4">
            Skills
          </h2>
          <p className="text-muted-foreground mb-12 max-w-2xl text-base leading-relaxed">
            Technologies and tools I work with regularly. No arbitrary ratings — just what I use day to day.
          </p>
        </AnimatedSection>

        <motion.div
          className="grid md:grid-cols-2 gap-10"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
        >
          {skillGroups.map((group) => (
            <motion.div
              key={group.category}
              variants={staggerItem}
              className="rounded-xl border border-border bg-card p-6"
            >
              <h3 className="text-lg font-bold text-foreground mb-4">
                {group.category}
              </h3>
              <div className="flex flex-wrap gap-2">
                {group.skills.map((skill) => (
                  <SkillBadge key={skill} skill={skill} />
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
