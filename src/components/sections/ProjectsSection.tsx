import { projects } from "@/lib/data";
import { Github, ExternalLink } from "lucide-react";
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
              <div className="project-card-body">
                <div className="project-card-heading">
                  <span className="project-card-index">{String(i + 1).padStart(2, "0")}</span>
                  <h3>{project.title}</h3>
                </div>

                <div className="project-screenshot" aria-label={`${project.title} screenshot preview`}>
                  {project.image ? (
                    <img src={project.image} alt={`${project.title} screenshot`} />
                  ) : (
                    <div className="project-screenshot-placeholder" aria-hidden="true">
                      <div className="project-screenshot-bar">
                        <span />
                        <span />
                        <span />
                      </div>
                      <div className="project-screenshot-body">
                        <span className="project-screenshot-line project-screenshot-line-short" />
                        <span className="project-screenshot-line" />
                        <span className="project-screenshot-block" />
                      </div>
                    </div>
                  )}
                </div>

                <div className="project-case-block">
                  <span>Problem</span>
                  <p>{project.problem}</p>
                </div>

                <div className="project-case-block">
                  <span>Build</span>
                  <p>{project.description}</p>
                </div>

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
