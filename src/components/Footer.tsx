import { footer, name, social } from "@/content/site";

const linkClass =
  "text-sm text-text-muted transition-colors duration-200 hover:text-text motion-reduce:transition-none";

const external = [
  { label: "GitHub", href: social.github },
  { label: "LinkedIn", href: social.linkedin },
];

export default function Footer() {
  return (
    <footer className="border-t border-line bg-bg">
      <div className="site-container flex flex-col-reverse gap-4 pt-7 pb-9 md:flex-row md:flex-wrap md:items-center md:justify-between md:gap-x-8 md:py-8">
        {/* El año queda fijo en el HTML al hacer el build. */}
        <p className="font-mono text-xs font-medium tracking-[0.06em] text-text-muted">
          © {new Date().getFullYear()} {name}
        </p>
        <ul className="flex flex-wrap gap-6 md:gap-7">
          {external.map((link) => (
            <li key={link.href}>
              <a href={link.href} target="_blank" rel="noopener noreferrer" className={linkClass}>
                {link.label}
                <span className="sr-only"> (abre en una pestaña nueva)</span>
              </a>
            </li>
          ))}
          <li>
            <a href="#inicio" className={linkClass}>
              {footer.backToTop} <span aria-hidden="true">↑</span>
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
}
