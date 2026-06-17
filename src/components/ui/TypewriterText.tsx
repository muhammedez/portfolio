"use client";

import { useEffect, useState, useCallback } from "react";

interface TypewriterTextProps {
  strings: string[];
  typeSpeed?: number;
  deleteSpeed?: number;
  pauseDuration?: number;
}

export function TypewriterText({
  strings,
  typeSpeed = 50,
  deleteSpeed = 30,
  pauseDuration = 1500,
}: TypewriterTextProps) {
  const [currentStringIndex, setCurrentStringIndex] = useState(0);
  const [currentText, setCurrentText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  const tick = useCallback(() => {
    const fullText = strings[currentStringIndex];

    if (!isDeleting) {
      // Typing forward
      setCurrentText(fullText.substring(0, currentText.length + 1));

      if (currentText.length === fullText.length) {
        // Pause before deleting
        setTimeout(() => setIsDeleting(true), pauseDuration);
        return;
      }
    } else {
      // Deleting
      setCurrentText(fullText.substring(0, currentText.length - 1));

      if (currentText.length === 0) {
        setIsDeleting(false);
        setCurrentStringIndex((prev) => (prev + 1) % strings.length);
        return;
      }
    }
  }, [currentText, isDeleting, currentStringIndex, strings, pauseDuration]);

  useEffect(() => {
    const speed = isDeleting ? deleteSpeed : typeSpeed;
    const timer = setTimeout(tick, speed);
    return () => clearTimeout(timer);
  }, [tick, isDeleting, deleteSpeed, typeSpeed]);

  return (
    <span>
      {currentText}
      <span className="typewriter-cursor text-accent">|</span>
    </span>
  );
}
