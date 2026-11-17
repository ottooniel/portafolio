"use client";

import Link from "next/link";
import { useEffect, useRef } from "react";

// Nombre de la barra. Mientras el hero ([data-hero]) está bajo la barra, marca el <header> con
// data-over-hero: el nombre se oculta y la barra queda transparente (variante over-hero en globals.css).
export default function NavBrand({ name }: { name: string }) {
  const ref = useRef<HTMLAnchorElement>(null);

  useEffect(() => {
    const header = ref.current?.closest("header");
    const hero = document.querySelector("[data-hero]");
    if (!header || !hero) return;

    // El margen superior negativo descuenta la barra: el hero "sale" cuando su borde pasa por debajo de ella.
    const observer = new IntersectionObserver(
      ([entry]) => header.toggleAttribute("data-over-hero", entry.isIntersecting),
      { rootMargin: `-${header.offsetHeight}px 0px 0px 0px` },
    );
    observer.observe(hero);
    return () => observer.disconnect();
  }, []);

  return (
    <Link
      ref={ref}
      href="/"
      className="tap-target font-display text-[17px] font-semibold text-text transition-[opacity,visibility] duration-200 over-hero:invisible over-hero:opacity-0 motion-reduce:transition-none md:text-[18px]"
    >
      {name}
    </Link>
  );
}
