"use client";

import { motion } from "framer-motion";
import { TypewriterText } from "@/components/ui/TypewriterText";
import { siteConfig, typewriterStrings, heroTechChips } from "@/lib/data";
import { ArrowDown } from "lucide-react";

export function HeroSection() {
  return (
    <section
      id="hero"
      className="relative min-h-[calc(100vh-4rem)] flex items-center px-4 sm:px-6 pt-24 sm:pt-28 pb-16 overflow-hidden"
    >
      {/* Background gradient */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-accent/5 via-background to-background pointer-events-none" />

      <div className="max-w-3xl mx-auto w-full relative">
        {/* Status badge */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.1 }}
          className="text-center"
        >
          <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-accent/30 bg-accent/5 text-accent text-sm font-medium mb-6">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500" />
            </span>
            Open to junior/full-stack roles
          </span>
        </motion.div>

        {/* Name */}
        <motion.h1
          className="text-foreground font-bold tracking-[-0.03em] leading-[1.05] mb-3 text-center"
          style={{ fontSize: "clamp(40px, 7vw, 68px)" }}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          {siteConfig.name}
        </motion.h1>

        {/* Typewriter */}
        <motion.div
          className="text-xl sm:text-2xl md:text-3xl text-muted font-medium mb-4 h-10 text-center"
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.35 }}
        >
          <TypewriterText strings={typewriterStrings} />
        </motion.div>

        {/* Bio */}
        <motion.p
          className="text-muted-foreground text-base sm:text-lg max-w-xl mx-auto mb-8 leading-relaxed text-center"
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
        >
          {siteConfig.bio}
        </motion.p>

        {/* CTA */}
        <motion.div
          className="flex justify-center mb-8"
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.65 }}
        >
          <a
            href="#projects"
            onClick={(e) => {
              e.preventDefault();
              document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" });
            }}
            className="inline-flex items-center gap-2 px-6 py-3 bg-accent text-white rounded-lg font-medium text-sm hover:bg-accent/90 transition-all duration-200 hover:shadow-lg hover:shadow-accent/25 hover:-translate-y-0.5"
          >
            View Projects
            <ArrowDown className="h-4 w-4" />
          </a>
        </motion.div>

        {/* Tech stack chips */}
        <motion.div
          className="flex flex-wrap gap-2 justify-center"
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.8 }}
        >
          {heroTechChips.map((tech, i) => (
            <motion.span
              key={tech}
              className="px-3 py-1.5 text-xs font-mono rounded-md border border-border bg-surface/50 text-muted-foreground hover:border-accent/40 hover:text-accent transition-colors duration-200 cursor-default"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3, delay: 0.85 + i * 0.05 }}
            >
              {tech}
            </motion.span>
          ))}
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-6 left-1/2 -translate-x-1/2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
      >
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="w-5 h-8 border-2 border-muted rounded-full flex items-start justify-center p-1"
        >
          <div className="w-1 h-2 bg-muted rounded-full" />
        </motion.div>
      </motion.div>
    </section>
  );
}
