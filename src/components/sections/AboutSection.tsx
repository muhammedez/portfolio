"use client";

import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { aboutText, aboutStats } from "@/lib/data";
import { Code2, Server, Layers, Target, Clock } from "lucide-react";

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

        <div className="grid sm:grid-cols-5 gap-6">
          {/* Bio text */}
          <div className="sm:col-span-3">
            <AnimatedSection delay={0.1}>
              <div className="rounded-2xl bg-card border border-border p-6 sm:p-7 h-full">
                {aboutText.map((paragraph, i) => (
                  <p
                    key={i}
                    className="text-muted-foreground leading-[1.75] text-sm sm:text-base [&:not(:last-child)]:mb-4"
                  >
                    {paragraph}
                  </p>
                ))}
              </div>
            </AnimatedSection>
          </div>

          {/* Side cards */}
          <div className="sm:col-span-2 space-y-4">
            {/* Stats */}
            <AnimatedSection delay={0.15}>
              <div className="rounded-xl bg-card border border-border p-4 hover:border-accent/30 transition-colors duration-300">
                <div className="text-accent mb-3">
                  <Target className="h-5 w-5" />
                </div>
                <p className="text-xs text-muted-foreground uppercase tracking-wider mb-3">
                  Currently focused on
                </p>
                <div className="space-y-2">
                  <div className="flex items-center gap-2 text-sm">
                    <Clock className="h-3.5 w-3.5 text-accent shrink-0" />
                    <span className="text-foreground/80">Laravel + React apps</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <Clock className="h-3.5 w-3.5 text-accent shrink-0" />
                    <span className="text-foreground/80">REST API development</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <Clock className="h-3.5 w-3.5 text-accent shrink-0" />
                    <span className="text-foreground/80">Open source contributions</span>
                  </div>
                </div>
              </div>
            </AnimatedSection>

            {/* Stat cards */}
            <div className="space-y-2">
              {aboutStats.map((stat, i) => (
                <AnimatedSection key={stat.label} delay={0.2 + i * 0.05}>
                  <div className="rounded-xl bg-card border border-border p-4 hover:border-accent/30 transition-colors duration-300">
                    <div className="flex items-center gap-3">
                      <div className="text-accent shrink-0">
                        {statIcons[stat.label]}
                      </div>
                      <div className="min-w-0">
                        <p className="text-[11px] text-muted-foreground uppercase tracking-wider">{stat.label}</p>
                        <p className="text-sm font-bold text-foreground font-mono truncate">{stat.value}</p>
                      </div>
                    </div>
                  </div>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
