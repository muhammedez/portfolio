import { experience } from "@/lib/data";
import { useEffect, useRef, useState } from "react";

export function ExperienceSection() {
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
    <section ref={ref} id="experience" className="py-24 sm:py-32 px-4 sm:px-6 bg-surface/30">
      <div className="max-w-3xl mx-auto">
        <span className={`section-label reveal ${visible ? "reveal-visible" : ""}`}>Experience</span>

        <div className={`timeline reveal ${visible ? "reveal-visible" : ""}`} style={{ transitionDelay: "0.1s" }}>
          {experience.map((exp) => (
            <div key={exp.id} className="timeline-item">
              <div className="timeline-meta">
                <span className="font-medium text-foreground">{exp.company}</span>
                <span className="timeline-meta-sep">·</span>
                <span>{exp.period}</span>
              </div>

              <h3 className="timeline-role">{exp.role}</h3>

              <ul className="timeline-highlights">
                {exp.bullets.map((bullet, i) => (
                  <li key={i} className="timeline-highlight">
                    <span className="timeline-highlight-marker">▹</span>
                    <span>{bullet}</span>
                  </li>
                ))}
              </ul>

              {exp.tags && (
                <div className="timeline-tags">
                  {exp.tags.map((tag) => (
                    <span key={tag} className="timeline-tag">{tag}</span>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
