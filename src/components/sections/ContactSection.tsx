"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { siteConfig } from "@/lib/data";
import { Github, Linkedin, Mail, Check, ArrowUpRight } from "lucide-react";

export function ContactSection() {
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = async () => {
    try {
      await navigator.clipboard.writeText(siteConfig.email);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
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

  const contactLinks = [
    {
      label: "Email",
      href: `mailto:${siteConfig.email}`,
      icon: Mail,
    },
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
  ];

  return (
    <section id="contact" className="py-24 sm:py-32 px-4 sm:px-6">
      <div className="max-w-xl mx-auto">
        <AnimatedSection>
          <div className="rounded-2xl bg-card border border-border p-8 sm:p-10 text-center">
            <h2 className="text-3xl sm:text-4xl font-bold tracking-[-0.03em] text-foreground mb-3">
              Let&apos;s work together
            </h2>
            <p className="text-muted-foreground text-base mb-2 max-w-md mx-auto leading-relaxed">
              I&apos;m open to junior developer roles, freelance projects, and collaboration opportunities.
            </p>
            <p className="text-muted-foreground/80 text-sm mb-8 max-w-md mx-auto">
              Whether you have a project in mind or just want to chat about tech — reach out and I&apos;ll get back to you.
            </p>

            {/* Contact buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3 mb-8">
              {contactLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  target={link.label !== "Email" ? "_blank" : undefined}
                  rel={link.label !== "Email" ? "noopener noreferrer" : undefined}
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-3 rounded-lg border border-border bg-surface hover:border-accent/50 hover:text-accent transition-all duration-200 text-sm font-medium"
                >
                  <link.icon className="h-4 w-4" />
                  <span>{link.label}</span>
                  <ArrowUpRight className="h-3.5 w-3.5 text-muted-foreground/50" />
                </a>
              ))}
            </div>

            {/* Copy email */}
            <div className="inline-flex items-center gap-2 text-sm">
              <span className="text-muted-foreground">Or copy my email:</span>
              <button
                onClick={handleCopyEmail}
                className="font-mono text-foreground hover:text-accent transition-colors duration-200 cursor-pointer"
                aria-label="Copy email address"
              >
                {siteConfig.email}
              </button>
              {copied && (
                <motion.span
                  className="inline-flex items-center gap-1 text-accent text-sm font-medium"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                >
                  <Check className="h-4 w-4" />
                  Copied!
                </motion.span>
              )}
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
