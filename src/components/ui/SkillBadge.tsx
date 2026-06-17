"use client";

interface SkillBadgeProps {
  skill: string;
}

export function SkillBadge({ skill }: SkillBadgeProps) {
  return (
    <span className="inline-block px-2.5 py-1 text-[11px] font-mono rounded-md border border-border/70 text-muted-foreground hover:border-accent/40 hover:text-accent transition-colors duration-200 cursor-default bg-surface/30">
      {skill}
    </span>
  );
}
