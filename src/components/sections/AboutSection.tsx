"use client";

import { motion } from "framer-motion";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { aboutText, aboutStats } from "@/lib/data";
import { User } from "lucide-react";

export function AboutSection() {
  return (
    <section id="about" className="py-20 sm:py-28 px-4 sm:px-6">
      <div className="max-w-6xl mx-auto">
        <AnimatedSection>
          <h2 className="text-4xl font-bold tracking-[-0.03em] text-foreground mb-12">
            About Me
          </h2>
        </AnimatedSection>

        <div className="grid md:grid-cols-3 gap-12">
          {/* Avatar placeholder */}
          <AnimatedSection delay={0.1}>
            <div className="flex justify-center md:justify-start">
              <div className="w-56 h-56 rounded-2xl bg-surface border border-border flex items-center justify-center">
                <User className="h-24 w-24 text-muted" />
              </div>
            </div>
          </AnimatedSection>

          {/* Text content */}
          <div className="md:col-span-2">
            <AnimatedSection delay={0.2}>
              <div className="space-y-4 mb-8">
                {aboutText.map((paragraph, i) => (
                  <p
                    key={i}
                    className="text-muted-foreground leading-[1.7] text-base"
                  >
                    {paragraph}
                  </p>
                ))}
              </div>
            </AnimatedSection>

            {/* Stats chips */}
            <AnimatedSection delay={0.3}>
              <div className="flex flex-wrap gap-3">
                {aboutStats.map((stat) => (
                  <motion.div
                    key={stat.label}
                    className="px-4 py-2 rounded-lg bg-surface border border-border text-sm"
                    whileHover={{ borderColor: "var(--accent)" }}
                    transition={{ duration: 0.2 }}
                  >
                    <span className="text-accent font-bold font-mono">
                      {stat.value}
                    </span>{" "}
                    <span className="text-muted-foreground">{stat.label}</span>
                  </motion.div>
                ))}
              </div>
            </AnimatedSection>
          </div>
        </div>
      </div>
    </section>
  );
}
