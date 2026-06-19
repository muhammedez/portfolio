import { projects } from "@/lib/data";
import { Github, ExternalLink, ImageIcon } from "lucide-react";
import { useEffect, useRef, useState } from "react";

export function ProjectsSection() {
  const [visible, setVisible] = useState(false);
  const ref = useRef<HTMLElement>(null);

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

  return (
    <section ref={ref} id="projects" className="py-24 sm:py-32 px-4 sm:px-6 bg-surface/30">
      <div className="section-container">
        <span className={`section-label reveal ${visible ? "reveal-visible" : ""}`}>Projects</span>

        <p className={`text-muted-foreground text-sm mb-8 reveal ${visible ? "reveal-visible" : ""}`} style={{ transitionDelay: "0.05s" }}>
          A selection of things I&apos;ve built to solve real problems.
        </p>

        <div className="projects-grid">
          {projects.map((project, i) => (
            <div
              key={project.id}
              className={`case-study-card reveal ${visible ? "reveal-visible" : ""}`}
              style={{ transitionDelay: `${0.1 + i * 0.08}s` }}
            >
              <div className="project-image-main">
                {project.image ? (
                  <img src={project.image} alt={project.title} className="project-image-img" />
                ) : (
                  <div className={`project-mockup project-mockup-${(i % 3) + 1}`} aria-hidden="true">
                    <div className="project-mockup-window">
                      <div className="project-mockup-toolbar">
                        <span />
                        <span />
                        <span />
                      </div>
                      <div className="project-mockup-body">
                        <div className="project-mockup-sidebar" />
                        <div className="project-mockup-content">
                          <div className="project-mockup-line project-mockup-line-lg" />
                          <div className="project-mockup-line" />
                          <div className="project-mockup-grid">
                            <span />
                            <span />
                            <span />
                            <span />
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="project-mockup-label">
                      <ImageIcon size={12} />
                      Interface preview
                    </div>
                  </div>
                )}
              </div>
              <div className="project-card-body">
                <h3 className="text-base font-bold tracking-tight text-foreground mb-3">
                  {project.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed mb-3">
                  {project.problem}
                </p>
                <p className="project-card-summary text-muted-foreground/80 text-sm leading-relaxed">
                  {project.description}
                </p>
                <div className="project-stack">
                  {project.stack.map((tech) => (
                    <span key={tech} className="case-study-tag">{tech}</span>
                  ))}
                </div>
                <div className="project-card-links">
                  <a href={project.github} target="_blank" rel="noopener noreferrer" className="btn-secondary project-card-link">
                    <Github size={14} /> Code
                  </a>
                  {project.live && (
                    <a href={project.live} target="_blank" rel="noopener noreferrer" className="btn-secondary project-card-link">
                      <ExternalLink size={14} /> Live
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
