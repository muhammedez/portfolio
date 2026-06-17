"use client";

import type { Experience } from "@/lib/types";

interface TimelineItemProps {
  experience: Experience;
}

export function TimelineItem({ experience }: TimelineItemProps) {
  return (
    <div className="relative pl-8">
      {/* Vertical line — stops before the gap */}
      <div className="absolute left-[5px] top-2 bottom-0 w-px bg-border" />

      {/* Dot marker */}
      <div className="absolute left-0 top-1.5 w-[11px] h-[11px] rounded-full border-2 border-accent bg-card ring-4 ring-background" />

      {/* Content */}
      <div className="ml-3">
        <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-1 mb-1">
          <h3 className="text-base font-bold text-foreground">
            {experience.role}
          </h3>
          <span className="text-xs text-muted font-mono whitespace-nowrap">
            {experience.period}
          </span>
        </div>
        <p className="text-sm text-accent font-medium mb-3">{experience.company}</p>
        <ul className="space-y-1.5">
          {experience.bullets.map((bullet, i) => (
            <li
              key={i}
              className="text-sm text-muted-foreground leading-snug pl-4 relative before:absolute before:left-0 before:top-[0.55em] before:w-1 before:h-1 before:rounded-full before:bg-accent/50"
            >
              {bullet}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
