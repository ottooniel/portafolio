"use client";

import Link from "next/link";
import { useRef, useState } from "react";
import { name, navLinks, social } from "@/content/site";

// Menú móvil sobre <dialog> con showModal(): el navegador atrapa el foco, cierra con Esc
// y devuelve el foco a la hamburguesa al cerrar.
export default function MobileMenu() {
  const dialog = useRef<HTMLDialogElement>(null);
  const [open, setOpen] = useState(false);

  const close = () => dialog.current?.close();

  return (
    <>
      <button
        type="button"
        aria-label="Abrir menú"
        aria-expanded={open}
        aria-controls="menu-movil"
        onClick={() => {
          dialog.current?.showModal();
          setOpen(true);
        }}
        className="-mr-2.5 flex size-11 flex-col items-center justify-center gap-1.5 md:hidden"
      >
        <span aria-hidden="true" className="h-[1.5px] w-5 bg-text" />
        <span aria-hidden="true" className="h-[1.5px] w-5 bg-text" />
      </button>

      <dialog
        ref={dialog}
        id="menu-movil"
        aria-label="Menú"
        onClose={() => setOpen(false)}
        className="m-0 h-dvh max-h-none w-full max-w-none overflow-y-auto bg-bg p-0 text-text md:hidden"
      >
        <div className="flex h-16 items-center justify-between border-b border-white/8 px-5">
          <Link href="/" onClick={close} className="font-display text-[17px] font-semibold">
            {name}
          </Link>
          <button
            type="button"
            aria-label="Cerrar menú"
            onClick={close}
            className="relative -mr-2.5 size-11"
          >
            <span aria-hidden="true" className="absolute top-1/2 left-1/2 h-[1.5px] w-5 -translate-1/2 rotate-45 bg-text" />
            <span aria-hidden="true" className="absolute top-1/2 left-1/2 h-[1.5px] w-5 -translate-1/2 -rotate-45 bg-text" />
          </button>
        </div>

        <nav aria-label="Principal">
          <ol className="px-5 pt-8">
            {navLinks.map((link, i) => (
              <li key={link.href} className="border-t border-line last:border-b">
                <a href={link.href} onClick={close} className="flex items-baseline gap-4 py-5">
                  <span className="font-mono text-[11px] font-medium text-accent">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span className="font-display text-[32px] leading-none font-semibold">{link.label}</span>
                </a>
              </li>
            ))}
          </ol>
        </nav>

        <div className="flex flex-col gap-4 px-5 pt-6 pb-10">
          <a href={`mailto:${social.email}`} className="text-base font-medium">
            {social.email}
          </a>
          <div className="flex gap-6 font-mono text-xs font-medium tracking-[0.08em] text-text-muted">
            {[
              ["GITHUB", social.github],
              ["LINKEDIN", social.linkedin],
            ].map(([label, href]) => (
              <a key={href} href={href} target="_blank" rel="noopener noreferrer" className="hover:text-text">
                {label}
                <span aria-hidden="true"> ↗</span>
                <span className="sr-only"> (abre en una pestaña nueva)</span>
              </a>
            ))}
          </div>
        </div>
      </dialog>
    </>
  );
}
