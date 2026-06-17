"use client";

import { motion } from "framer-motion";

interface SkillBadgeProps {
  skill: string;
}

export function SkillBadge({ skill }: SkillBadgeProps) {
  return (
    <motion.span
      className="inline-block px-3 py-1.5 text-sm font-mono border border-border rounded-md text-foreground hover:border-accent hover:text-accent transition-colors duration-200 cursor-default"
      whileHover={{ scale: 1.05 }}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
    >
      {skill}
    </motion.span>
  );
}
