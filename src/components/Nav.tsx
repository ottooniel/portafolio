import { name, navLinks } from "@/content/site";
import MobileMenu from "./MobileMenu";
import NavBrand from "./NavBrand";

// `overHero`: la página empieza con el hero bajo la barra (la home). En la 404 va sin él y el nombre se ve siempre.
export default function Nav({ overHero = false }: { overHero?: boolean }) {
  return (
    <header
      data-over-hero={overHero || undefined}
      className="fixed inset-x-0 top-0 z-50 border-b border-white/8 bg-bg transition-colors duration-200 over-hero:bg-transparent motion-reduce:transition-none"
    >
      <div className="site-container flex h-16 items-center justify-between md:h-20">
        <NavBrand name={name} />
        <nav aria-label="Principal" className="hidden md:block">
          <ul className="flex gap-10">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="tap-target text-sm font-medium text-text-muted transition-colors duration-200 hover:text-text motion-reduce:transition-none"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
        <MobileMenu />
      </div>
    </header>
  );
}
