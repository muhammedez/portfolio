"use client";

import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { aboutText, aboutStats } from "@/lib/data";
import { Code2, Server, Layers } from "lucide-react";

const statIcons: Record<string, React.ReactNode> = {
  "Projects Built": <Layers className="h-5 w-5" />,
  "Frontend Stack": <Code2 className="h-5 w-5" />,
  "Backend Stack": <Server className="h-5 w-5" />,
};

export function AboutSection() {
  return (
    <section id="about" className="py-24 sm:py-32 px-4 sm:px-6">
      <div className="max-w-3xl mx-auto">
        <AnimatedSection>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-[-0.03em] text-foreground mb-2">
            About Me
          </h2>
          <p className="text-muted-foreground text-base mb-10">
            A quick introduction to who I am and what I do.
          </p>
        </AnimatedSection>

        {/* Bio card */}
        <AnimatedSection delay={0.1}>
          <div className="rounded-2xl bg-card border border-border p-6 sm:p-8 mb-8">
            {aboutText.map((paragraph, i) => (
              <p
                key={i}
                className="text-muted-foreground leading-[1.75] text-base [&:not(:last-child)]:mb-4"
              >
                {paragraph}
              </p>
            ))}
          </div>
        </AnimatedSection>

        {/* Stats cards */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
          {aboutStats.map((stat, i) => (
            <AnimatedSection key={stat.label} delay={0.15 + i * 0.05}>
              <div className="rounded-xl bg-card border border-border p-4 hover:border-accent/30 transition-colors duration-300 h-full">
                <div className="text-accent mb-2">
                  {statIcons[stat.label]}
                </div>
                <p className="text-xs text-muted-foreground mb-1">{stat.label}</p>
                <p className="text-sm font-bold text-foreground font-mono">{stat.value}</p>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}
