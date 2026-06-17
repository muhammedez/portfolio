import { siteConfig } from "@/lib/data";

export function Footer() {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="footer">
      <p className="footer-text">&copy; {currentYear} {siteConfig.name}. All rights reserved.</p>
      <div className="footer-links">
        <a href={siteConfig.github} target="_blank" rel="noopener noreferrer" className="footer-link">GitHub</a>
        <a href={siteConfig.linkedin} target="_blank" rel="noopener noreferrer" className="footer-link">LinkedIn</a>
        <a href={siteConfig.twitter} target="_blank" rel="noopener noreferrer" className="footer-link">X</a>
        <a href={`mailto:${siteConfig.email}`} className="footer-link">Email</a>
      </div>
    </footer>
  );
}
