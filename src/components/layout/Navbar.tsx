import { useState, useEffect } from "react";
import { useActiveSection } from "@/hooks/use-active-section";
import { navItems, siteConfig } from "@/lib/data";
import { Sun, Moon, Menu, X } from "lucide-react";

export function Navbar() {
  const activeSection = useActiveSection();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    const stored = localStorage.getItem("theme");
    const next = stored === "dark" || (!stored && window.matchMedia("(prefers-color-scheme: dark)").matches);
    setIsDark(next);
    document.documentElement.classList.add(next ? "dark" : "light");
  }, []);

  const toggleTheme = () => {
    const next = !isDark;
    setIsDark(next);
    document.documentElement.classList.remove("light", "dark");
    document.documentElement.classList.add(next ? "dark" : "light");
    localStorage.setItem("theme", next ? "dark" : "light");
  };

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (href: string) => {
    setIsMobileOpen(false);
    document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <nav className={`navbar ${isScrolled ? "scrolled" : ""}`}>
        <a
          href="#"
          className="navbar-logo"
          onClick={(e) => {
            e.preventDefault();
            window.scrollTo({ top: 0, behavior: "smooth" });
          }}
        >
          {siteConfig.name}
          <span>.</span>
        </a>

        <ul className="navbar-links">
          {navItems.map((item) => {
            const isActive = activeSection === item.href.replace("#", "");
            return (
              <li key={item.href}>
                <a
                  href={item.href}
                  onClick={(e) => {
                    e.preventDefault();
                    handleNavClick(item.href);
                  }}
                  className={`navbar-link ${isActive ? "active" : ""}`}
                >
                  {item.label}
                </a>
              </li>
            );
          })}
          <button className="theme-btn" onClick={toggleTheme} aria-label="Toggle theme">
            {isDark ? <Sun size={16} /> : <Moon size={16} />}
          </button>
        </ul>

        <div className="navbar-mobile-actions">
          <button className="theme-btn" onClick={toggleTheme} aria-label="Toggle theme">
            {isDark ? <Sun size={16} /> : <Moon size={16} />}
          </button>
          <button
            className="theme-btn"
            onClick={() => setIsMobileOpen(!isMobileOpen)}
            aria-label="Toggle menu"
          >
            {isMobileOpen ? <X size={16} /> : <Menu size={16} />}
          </button>
        </div>
      </nav>

      {isMobileOpen && (
        <div
          className="mobile-nav-overlay"
          style={{ position: "fixed", top: "4rem", left: 0, right: 0, zIndex: 49 }}
        >
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
                className={`mobile-nav-link ${isActive ? "active" : ""}`}
              >
                {item.label}
              </a>
            );
          })}
        </div>
      )}
    </>
  );
}
