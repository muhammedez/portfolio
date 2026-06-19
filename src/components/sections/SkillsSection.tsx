import { skillGroups } from "@/lib/data";
import { Code2, Server, Wrench } from "lucide-react";
import { useEffect, useRef, useState } from "react";

const categoryIcons: Record<string, React.ReactNode> = {
  Languages: <Code2 size={13} />,
  Frontend: <Code2 size={13} />,
  Backend: <Server size={13} />,
  Tools: <Wrench size={13} />,
};

export function SkillsSection() {
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
    <section ref={ref} id="skills" className="py-24 sm:py-32 px-4 sm:px-6">
      <div className="max-w-3xl mx-auto">
        <span className={`section-label reveal ${visible ? "reveal-visible" : ""}`}>Skills</span>

        <div className={`skills-grid reveal ${visible ? "reveal-visible" : ""}`} style={{ transitionDelay: "0.1s" }}>
          {skillGroups.map((group) => (
            <div key={group.category} className="skills-card">
              <h4 className="skills-category-title">
                <span className="inline-flex items-center gap-1.5">
                  {categoryIcons[group.category]}
                  {group.category}
                </span>
              </h4>
              <div className="flex flex-wrap gap-1.5">
                {group.skills.map((skill) => (
                  <span key={skill} className="skill-badge">{skill}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
