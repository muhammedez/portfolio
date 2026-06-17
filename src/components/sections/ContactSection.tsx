"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { siteConfig } from "@/lib/data";
import { Github, Linkedin, Twitter, Mail, Check } from "lucide-react";

export function ContactSection() {
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = async () => {
    try {
      await navigator.clipboard.writeText(siteConfig.email);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      // Fallback
      const textArea = document.createElement("textarea");
      textArea.value = siteConfig.email;
      document.body.appendChild(textArea);
      textArea.select();
      document.execCommand("copy");
      document.body.removeChild(textArea);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  const socialLinks = [
    {
      label: "GitHub",
      href: siteConfig.github,
      icon: Github,
    },
    {
      label: "LinkedIn",
      href: siteConfig.linkedin,
      icon: Linkedin,
    },
    {
      label: "Twitter/X",
      href: siteConfig.twitter,
      icon: Twitter,
    },
  ];

  return (
    <section id="contact" className="py-20 sm:py-28 px-4 sm:px-6">
      <div className="max-w-6xl mx-auto text-center">
        <AnimatedSection>
          <h2 className="text-4xl font-bold tracking-[-0.03em] text-foreground mb-4">
            Let&apos;s work together.
          </h2>
          <p className="text-muted-foreground mb-10 max-w-lg mx-auto text-base leading-relaxed">
            I&apos;m always open to new opportunities, collaborations, or just a friendly chat about tech. Reach out!
          </p>
        </AnimatedSection>

        <AnimatedSection delay={0.2}>
          <div className="flex items-center justify-center gap-4 mb-8">
            {socialLinks.map((link) => (
              <motion.a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 rounded-lg border border-border flex items-center justify-center text-muted hover:text-accent hover:border-accent transition-colors duration-200"
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.95 }}
                aria-label={link.label}
              >
                <link.icon className="h-5 w-5" />
              </motion.a>
            ))}
          </div>

          {/* Email with copy-to-clipboard */}
          <div className="flex items-center justify-center gap-2">
            <Mail className="h-5 w-5 text-muted" />
            <button
              onClick={handleCopyEmail}
              className="relative group font-mono text-base text-foreground hover:text-accent transition-colors duration-200 cursor-pointer"
              aria-label="Copy email address"
            >
              {siteConfig.email}
              {/* Tooltip */}
              <span className="absolute -top-8 left-1/2 -translate-x-1/2 px-2 py-1 bg-foreground text-background text-xs rounded opacity-0 group-hover:opacity-100 transition-opacity duration-200 whitespace-nowrap pointer-events-none">
                Click to copy
              </span>
            </button>
            {/* Copied confirmation */}
            {copied && (
              <motion.span
                className="inline-flex items-center gap-1 text-accent text-sm font-medium"
                initial={{ opacity: 0, y: 5 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 5 }}
              >
                <Check className="h-4 w-4" />
                Copied!
              </motion.span>
            )}
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
