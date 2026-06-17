export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-border bg-background py-6">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 flex flex-col sm:flex-row items-center justify-between gap-2 text-sm text-muted">
        <span>
          Alex Chen &copy; {currentYear}
        </span>
        <span>
          Built with Next.js
        </span>
      </div>
    </footer>
  );
}
