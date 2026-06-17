"use client";

import { motion } from "framer-motion";
import { AnimatedSection, staggerContainer, staggerItem } from "@/components/ui/AnimatedSection";
import { SkillBadge } from "@/components/ui/SkillBadge";
import { skillGroups } from "@/lib/data";

export function SkillsSection() {
  return (
    <section id="skills" className="py-24 sm:py-32 px-4 sm:px-6">
      <div className="max-w-3xl mx-auto">
        <AnimatedSection>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-[-0.03em] text-foreground mb-2">
            Skills
          </h2>
          <p className="text-muted-foreground text-base mb-10">
            Technologies and tools I use regularly across the stack.
          </p>
        </AnimatedSection>

        <motion.div
          className="space-y-6"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
        >
          {skillGroups.map((group) => (
            <motion.div key={group.category} variants={staggerItem}>
              <p className="text-xs font-mono text-muted-foreground uppercase tracking-wider mb-2">
                {group.category}
              </p>
              <div className="flex flex-wrap gap-1.5">
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
