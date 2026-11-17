import { name, navLinks, skipLink } from "@/content/site";
import MobileMenu from "./MobileMenu";
import NavBrand from "./NavBrand";

// `overHero`: la página empieza con el hero bajo la barra (la home). En la 404 va sin él y el nombre se ve siempre.
export default function Nav({ overHero = false }: { overHero?: boolean }) {
  return (
    <>
      {/* Primer elemento enfocable: fuera de pantalla hasta recibir foco; entonces queda sobre la barra. */}
      <a
        href={skipLink.href}
        className="fixed top-4 left-4 z-60 -translate-y-[200%] rounded-[6px] bg-text px-5 py-3 text-[15px] font-semibold text-bg focus:translate-y-0"
      >
        {skipLink.label}
      </a>
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
    </>
  );
}
