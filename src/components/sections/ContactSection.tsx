import { type FormEvent, useEffect, useRef, useState } from "react";
import { siteConfig } from "@/lib/data";
import { Send, Github, Linkedin, Twitter, Mail } from "lucide-react";

export function ContactSection() {
  const [visible, setVisible] = useState(false);
  const ref = useRef<HTMLElement>(null);
  const [status, setStatus] = useState<"idle" | "success">("idle");

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true); },
      { threshold: 0.1 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

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
    setStatus("success");
    setTimeout(() => setStatus("idle"), 3000);
  };

  return (
    <section ref={ref} id="contact" className="py-24 sm:py-32 px-4 sm:px-6">
      <div className="section-container">
        <span className={`section-label reveal ${visible ? "reveal-visible" : ""}`}>Contact</span>

        <p className={`contact-intro reveal ${visible ? "reveal-visible" : ""}`}>
          I&apos;m open to junior developer roles, freelance projects, and collaboration. Let&apos;s build something great together.
        </p>

        <div className={`about-card contact-form-card reveal ${visible ? "reveal-visible" : ""}`} style={{ transitionDelay: "0.1s" }}>
          <form onSubmit={handleSubmit} className="contact-form">
            <div className="grid sm:grid-cols-2 gap-4">
              <div className="form-field">
                <label htmlFor="name" className="form-label">Name</label>
                <input type="text" id="name" name="name" required className="form-input" placeholder="Your name" />
              </div>
              <div className="form-field">
                <label htmlFor="email" className="form-label">Email</label>
                <input type="email" id="email" name="email" required className="form-input" placeholder="you@example.com" />
              </div>
            </div>
            <div className="form-field">
              <label htmlFor="subject" className="form-label">Subject</label>
              <input type="text" id="subject" name="subject" required className="form-input" placeholder="What's this about?" />
            </div>
            <div className="form-field">
              <label htmlFor="message" className="form-label">Message</label>
              <textarea id="message" name="message" required className="form-textarea" placeholder="Tell me about your project or opportunity..." />
            </div>
            <button type="submit" className="btn-primary contact-submit">
              <Send size={14} />
              Start a Conversation
            </button>
            {status === "success" && <p className="form-status-success">Message sent! Opening your email client...</p>}
          </form>
        </div>

        <div className={`contact-meta reveal ${visible ? "reveal-visible" : ""}`} style={{ transitionDelay: "0.15s" }}>
          <a href={`mailto:${siteConfig.email}`} className="contact-direct-link">
            <Mail size={16} />
            <span>Email</span>
            <strong>{siteConfig.email}</strong>
          </a>

          <div className="contact-socials">
            <a href={siteConfig.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub">
              <Github size={16} />
            </a>
            <a href={siteConfig.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
              <Linkedin size={16} />
            </a>
            <a href={siteConfig.twitter} target="_blank" rel="noopener noreferrer" aria-label="X">
              <Twitter size={16} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
