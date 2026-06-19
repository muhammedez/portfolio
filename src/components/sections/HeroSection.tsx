import { motion } from "framer-motion";
import { siteConfig, heroMetadata, heroTechChips } from "@/lib/data";
import { Mail, ArrowDown } from "lucide-react";

export function HeroSection() {
  return (
    <section id="hero" className="hero-section">
      <div className="hero-bg" />

      <div className="hero-content">
        <motion.p
          className="hero-greeting"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.1 }}
        >
          {siteConfig.greeting}
        </motion.p>

        <motion.h1
          className="hero-name"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          {siteConfig.name}
        </motion.h1>

        <motion.div
          className="hero-rule"
          initial={{ opacity: 0, scaleX: 0 }}
          animate={{ opacity: 1, scaleX: 1 }}
          transition={{ duration: 0.6, delay: 0.35 }}
        />

        <motion.p
          className="hero-subtitle"
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.45 }}
        >
          {siteConfig.role}
        </motion.p>

        <motion.div
          className="hero-dash-rule"
          initial={{ opacity: 0, scaleX: 0 }}
          animate={{ opacity: 1, scaleX: 1 }}
          transition={{ duration: 0.5, delay: 0.55 }}
        />

        <motion.p
          className="hero-description"
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
        >
          {siteConfig.bio}
        </motion.p>

        <motion.div
          className="hero-metadata"
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.7 }}
        >
          {heroMetadata.map((item, i) => (
            <span key={item.label} className="flex items-center gap-1">
              <span>{item.value}</span>
              {i < heroMetadata.length - 1 && <span className="hero-metadata-sep">·</span>}
            </span>
          ))}
        </motion.div>

        <motion.div
          className="hero-status-strip"
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.76 }}
        >
          <span className="hero-status-dot" />
          <span>Open to junior roles and freelance work</span>
        </motion.div>

        <motion.div
          className="hero-actions"
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.86 }}
        >
          <a
            href="#projects"
            onClick={(e) => {
              e.preventDefault();
              document.querySelector("#projects")?.scrollIntoView({ behavior: "smooth" });
            }}
            className="btn-primary"
          >
            <ArrowDown size={14} />
            View Projects
          </a>
          <a href={`mailto:${siteConfig.email}`} className="btn-secondary">
            <Mail size={14} />
            Get in Touch
          </a>
        </motion.div>

        <motion.div
          className="hero-chips"
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 1 }}
        >
          {heroTechChips.map((tech, i) => (
            <motion.span
              key={tech}
              className="hero-chip"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3, delay: 1 + i * 0.05 }}
            >
              {tech}
            </motion.span>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
