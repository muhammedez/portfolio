"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { ThemeToggle } from "@/components/ui/ThemeToggle";
import { useActiveSection } from "@/hooks/use-active-section";
import { navItems, siteConfig } from "@/lib/data";
import { Menu, X } from "lucide-react";

export function Navbar() {
  const activeSection = useActiveSection();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (href: string) => {
    setIsMobileMenuOpen(false);
    const el = document.querySelector(href);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <motion.header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-background/80 backdrop-blur-lg border-b border-border"
          : "bg-transparent"
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
    >
      <nav className="max-w-5xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between">
        {/* Logo / Name */}
        <a
          href="#"
          onClick={(e) => {
            e.preventDefault();
            window.scrollTo({ top: 0, behavior: "smooth" });
          }}
          className="text-lg font-bold tracking-tight text-foreground hover:text-accent transition-colors duration-200"
        >
          {siteConfig.name}
          <span className="text-accent">.</span>
        </a>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-1">
          {navItems.map((item) => {
            const isActive = activeSection === item.href.replace("#", "");
            return (
              <a
                key={item.href}
                href={item.href}
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick(item.href);
                }}
                className={`relative px-3 py-2 text-sm font-medium transition-colors duration-200 ${
                  isActive
                    ? "text-accent"
                    : "text-muted hover:text-foreground"
                }`}
              >
                {item.label}
                {isActive && (
                  <motion.div
                    className="absolute bottom-0 left-3 right-3 h-0.5 bg-accent rounded-full"
                    layoutId="activeNav"
                    transition={{ type: "spring", stiffness: 300, damping: 30 }}
                  />
                )}
              </a>
            );
          })}
          <div className="ml-2">
            <ThemeToggle />
          </div>
        </div>

        {/* Mobile Menu Button */}
        <div className="flex items-center gap-2 md:hidden">
          <ThemeToggle />
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="p-2 rounded-lg hover:bg-surface transition-colors"
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? (
              <X className="h-5 w-5" />
            ) : (
              <Menu className="h-5 w-5" />
            )}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <motion.div
          className="md:hidden bg-background/95 backdrop-blur-lg border-b border-border"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.2 }}
        >
          <div className="px-4 py-4 space-y-1">
            {navItems.map((item) => {
              const isActive = activeSection === item.href.replace("#", "");
              return (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={(e) => {
                    e.preventDefault();
                    handleNavClick(item.href);
                  }}
                  className={`block px-3 py-2 rounded-lg text-sm font-medium transition-colors duration-200 ${
                    isActive
                      ? "text-accent bg-surface"
                      : "text-muted hover:text-foreground hover:bg-surface"
                  }`}
                >
                  {item.label}
                </a>
              );
            })}
          </div>
        </motion.div>
      )}
    </motion.header>
  );
}
