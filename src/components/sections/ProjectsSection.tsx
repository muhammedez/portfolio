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
      <div className="max-w-3xl mx-auto">
        <span className={`section-label reveal ${visible ? "reveal-visible" : ""}`}>Projects</span>

        <p className={`text-muted-foreground text-sm mb-8 reveal ${visible ? "reveal-visible" : ""}`} style={{ transitionDelay: "0.05s" }}>
          A selection of things I&apos;ve built to solve real problems.
        </p>

        <div className="grid sm:grid-cols-2 gap-4">
          {projects.map((project, i) => (
            <div
              key={project.id}
              className={`case-study-card reveal ${visible ? "reveal-visible" : ""}`}
              style={{ transitionDelay: `${0.1 + i * 0.08}s`, padding: 0, overflow: "hidden" }}
            >
              <div className="project-image-main" style={{ borderRadius: 0, borderTopLeftRadius: 10, borderTopRightRadius: 10 }}>
                {project.image ? (
                  <img src={project.image} alt={project.title} className="project-image-img" />
                ) : (
                  <div className="w-full h-full flex items-center justify-center bg-surface/80">
                    <div className="text-center">
                      <ImageIcon size={24} className="text-muted-foreground/20 mx-auto mb-1" />
                      <span className="text-[10px] font-mono text-muted-foreground/30 uppercase tracking-wider">Screenshot</span>
                    </div>
                  </div>
                )}
              </div>
              <div style={{ padding: "1.5rem" }}>
                <h3 className="text-base font-bold tracking-tight text-foreground mb-3">
                  {project.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed mb-3">
                  {project.problem}
                </p>
                <p className="text-muted-foreground/80 text-sm leading-relaxed mb-4">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-1.5 mb-4">
                  {project.stack.map((tech) => (
                    <span key={tech} className="case-study-tag">{tech}</span>
                  ))}
                </div>
                <div className="flex items-center gap-4 pt-3 border-t border-border">
                  <a href={project.github} target="_blank" rel="noopener noreferrer" className="btn-secondary" style={{ padding: 0 }}>
                    <Github size={14} /> Code
                  </a>
                  {project.live && (
                    <a href={project.live} target="_blank" rel="noopener noreferrer" className="btn-secondary" style={{ padding: 0 }}>
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
