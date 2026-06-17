"use client";

import type { Experience } from "@/lib/types";

interface TimelineItemProps {
  experience: Experience;
}

export function TimelineItem({ experience }: TimelineItemProps) {
  return (
    <div className="relative pl-8 pb-10 last:pb-0">
      {/* Vertical line */}
      <div className="absolute left-[7px] top-2 bottom-0 w-px bg-border" />

      {/* Dot marker */}
      <div className="absolute left-0 top-2 w-[15px] h-[15px] rounded-full border-2 border-accent bg-background" />

      {/* Content */}
      <div className="ml-2">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-1">
          <h3 className="text-lg font-bold text-foreground">
            {experience.role}
          </h3>
          <span className="text-sm text-muted font-mono">
            {experience.period}
          </span>
        </div>
        <p className="text-accent font-medium mb-3">{experience.company}</p>
        <ul className="space-y-2">
          {experience.bullets.map((bullet, i) => (
            <li
              key={i}
              className="text-sm text-muted-foreground leading-relaxed flex gap-2"
            >
              <span className="text-accent mt-1 shrink-0">▹</span>
              <span>{bullet}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
