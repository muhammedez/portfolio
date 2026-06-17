"use client";

import { type FormEvent } from "react";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { siteConfig } from "@/lib/data";
import { Github, Linkedin, Send, Twitter, Mail, MapPin } from "lucide-react";

export function ContactSection() {
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);
    const name = data.get("name") as string;
    const email = data.get("email") as string;
    const subject = data.get("subject") as string;
    const message = data.get("message") as string;

    const body = `From: ${name} (${email})\n\n${message}`;
    window.location.href = `mailto:${siteConfig.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    form.reset();
  };

  return (
    <section id="contact" className="py-24 sm:py-32 px-4 sm:px-6">
      <div className="max-w-3xl mx-auto">
        <div className="grid sm:grid-cols-5 gap-6 sm:gap-8">
          {/* Left: Info */}
          <div className="sm:col-span-2">
            <AnimatedSection>
              <h2 className="text-3xl sm:text-4xl font-bold tracking-[-0.03em] text-foreground mb-3">
                Get in touch
              </h2>
              <p className="text-muted-foreground text-sm leading-relaxed mb-6">
                I&apos;m open to junior developer roles, freelance projects, and collaboration. Let&apos;s build something great together.
              </p>
            </AnimatedSection>

            <div className="space-y-3">
              <AnimatedSection delay={0.1}>
                <div className="rounded-xl bg-card border border-border p-4 hover:border-accent/30 transition-colors duration-300">
                  <div className="flex items-center gap-3">
                    <Mail className="h-4 w-4 text-accent shrink-0" />
                    <div className="min-w-0">
                      <p className="text-[11px] text-muted-foreground uppercase tracking-wider">Email</p>
                      <a href={`mailto:${siteConfig.email}`} className="text-sm text-foreground hover:text-accent transition-colors font-mono truncate block">
                        {siteConfig.email}
                      </a>
                    </div>
                  </div>
                </div>
              </AnimatedSection>

              <AnimatedSection delay={0.15}>
                <div className="rounded-xl bg-card border border-border p-4 hover:border-accent/30 transition-colors duration-300">
                  <div className="flex items-center gap-3">
                    <MapPin className="h-4 w-4 text-accent shrink-0" />
                    <div className="min-w-0">
                      <p className="text-[11px] text-muted-foreground uppercase tracking-wider">Location</p>
                      <p className="text-sm text-foreground">Available remotely</p>
                    </div>
                  </div>
                </div>
              </AnimatedSection>

              <AnimatedSection delay={0.2}>
                <div className="flex items-center gap-2 pt-2">
                  <a
                    href={siteConfig.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-md text-xs font-medium text-muted-foreground hover:text-accent hover:bg-surface transition-colors duration-200"
                  >
                    <Github className="h-3.5 w-3.5" />
                    GitHub
                  </a>
                  <a
                    href={siteConfig.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-md text-xs font-medium text-muted-foreground hover:text-accent hover:bg-surface transition-colors duration-200"
                  >
                    <Linkedin className="h-3.5 w-3.5" />
                    LinkedIn
                  </a>
                  <a
                    href={siteConfig.twitter}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-md text-xs font-medium text-muted-foreground hover:text-accent hover:bg-surface transition-colors duration-200"
                  >
                    <Twitter className="h-3.5 w-3.5" />
                    X
                  </a>
                </div>
              </AnimatedSection>
            </div>
          </div>

          {/* Right: Form */}
          <div className="sm:col-span-3">
            <AnimatedSection delay={0.15}>
              <div className="rounded-2xl bg-card border border-border p-5 sm:p-7 shadow-sm">
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="name" className="block text-xs font-mono text-muted-foreground uppercase tracking-wider mb-1.5">
                        Name
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        required
                        className="w-full px-3 py-2.5 rounded-lg border border-border bg-surface text-sm text-foreground placeholder:text-muted-foreground/40 focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent/20 transition-all duration-200"
                        placeholder="Your name"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-xs font-mono text-muted-foreground uppercase tracking-wider mb-1.5">
                        Email
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        required
                        className="w-full px-3 py-2.5 rounded-lg border border-border bg-surface text-sm text-foreground placeholder:text-muted-foreground/40 focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent/20 transition-all duration-200"
                        placeholder="you@example.com"
                      />
                    </div>
                  </div>
                  <div>
                    <label htmlFor="subject" className="block text-xs font-mono text-muted-foreground uppercase tracking-wider mb-1.5">
                      Subject
                    </label>
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      required
                      className="w-full px-3 py-2.5 rounded-lg border border-border bg-surface text-sm text-foreground placeholder:text-muted-foreground/40 focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent/20 transition-all duration-200"
                      placeholder="What's this about?"
                    />
                  </div>
                  <div>
                    <label htmlFor="message" className="block text-xs font-mono text-muted-foreground uppercase tracking-wider mb-1.5">
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      required
                      rows={5}
                      className="w-full px-3 py-2.5 rounded-lg border border-border bg-surface text-sm text-foreground placeholder:text-muted-foreground/40 focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent/20 transition-all duration-200 resize-none"
                      placeholder="Tell me about your project or opportunity..."
                    />
                  </div>
                  <button
                    type="submit"
                    className="w-full inline-flex items-center justify-center gap-2 px-5 py-3 bg-accent text-white rounded-lg font-medium text-sm hover:bg-accent/90 transition-all duration-200 hover:shadow-lg hover:shadow-accent/25 hover:-translate-y-0.5"
                  >
                    <Send className="h-4 w-4" />
                    Send Message
                  </button>
                </form>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </div>
    </section>
  );
}
