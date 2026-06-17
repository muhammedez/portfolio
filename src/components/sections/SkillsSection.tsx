"use client";

import { motion } from "framer-motion";
import { AnimatedSection, staggerContainer, staggerItem } from "@/components/ui/AnimatedSection";
import { SkillBadge } from "@/components/ui/SkillBadge";
import { skillGroups } from "@/lib/data";
import { Code2, Server, Wrench } from "lucide-react";

const categoryIcons: Record<string, React.ReactNode> = {
  Frontend: <Code2 className="h-4 w-4" />,
  Backend: <Server className="h-4 w-4" />,
  Tools: <Wrench className="h-4 w-4" />,
};

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
          className="grid sm:grid-cols-3 gap-4"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
        >
          {skillGroups.map((group) => (
            <motion.div
              key={group.category}
              variants={staggerItem}
              className="rounded-xl bg-card border border-border p-4 hover:border-accent/30 transition-colors duration-300"
            >
              <div className="flex items-center gap-2 mb-3">
                <span className="text-accent">{categoryIcons[group.category]}</span>
                <h3 className="text-sm font-bold text-foreground">{group.category}</h3>
              </div>
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
