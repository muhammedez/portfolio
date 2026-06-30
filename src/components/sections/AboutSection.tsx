import { aboutParagraphs, aboutStats, aboutFocusList } from "@/lib/data";
import { Code2, Database, Server, Clock, Target } from "lucide-react";
import { useEffect, useRef, useState } from "react";

const statIcons: Record<string, React.ReactNode> = {
  "Frontend Stack": <Code2 size={14} />,
  "Backend Stack": <Server size={14} />,
  "API Stack": <Server size={14} />,
  "Data Stack": <Database size={14} />,
};

export function AboutSection() {
  const [visible, setVisible] = useState(false);
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true); },
      { threshold: 0.15 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={ref} id="about" className="py-24 sm:py-32 px-4 sm:px-6">
      <div className="section-container">
        <span className={`section-label reveal ${visible ? "reveal-visible" : ""}`}>About</span>

        <div className="about-grid">
          <div>
            <div
              className={`about-card reveal ${visible ? "reveal-visible" : ""}`}
              style={{ transitionDelay: "0.1s" }}
            >
              {aboutParagraphs.map((text, i) => (
                <p key={i} className="text-muted-foreground leading-relaxed text-[0.9375rem] not-last:mb-4">
                  {text}
                </p>
              ))}
            </div>
          </div>

          <div className="flex flex-col gap-3">
            <div
              className={`about-card reveal ${visible ? "reveal-visible" : ""}`}
              style={{ transitionDelay: "0.15s" }}
            >
              <div className="flex items-center gap-2.5 mb-3">
                <Target size={16} className="text-accent shrink-0" />
                <span className="font-mono text-[11px] text-muted-foreground uppercase tracking-wider font-semibold">
                  Currently focused on
                </span>
              </div>
              <div className="space-y-2">
                {aboutFocusList.map((item, i) => (
                  <div key={i} className="flex items-center gap-2 text-[0.875rem] text-muted-foreground">
                    <Clock size={13} className="text-accent shrink-0" />
                    {item}
                  </div>
                ))}
              </div>
            </div>

            <div className="space-y-2">
              {aboutStats.map((stat, i) => (
                <div
                  key={stat.label}
                  className={`about-card reveal ${visible ? "reveal-visible" : ""}`}
                  style={{ transitionDelay: `${0.2 + i * 0.05}s`, padding: "1rem" }}
                >
                  <div className="about-stat">
                    <span className="about-stat-icon">{statIcons[stat.label]}</span>
                    <div>
                      <p className="text-[10px] font-mono text-muted-foreground uppercase tracking-wider">{stat.label}</p>
                      <strong className="font-mono text-[0.9375rem]">{stat.value}</strong>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
