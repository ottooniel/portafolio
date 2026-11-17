import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { buttonClass } from "@/components/Button";
import Nav from "@/components/Nav";
import NotFoundPath from "@/components/NotFoundPath";
import TextLink from "@/components/TextLink";
import { name, notFound } from "@/content/site";

export const metadata: Metadata = { title: notFound.tabTitle };

export default function NotFound() {
  return (
    <>
      <Nav />
      <div className="relative isolate flex min-h-dvh flex-col pt-16 md:pt-20">
        {/* Mismo fondo que el hero, pero fijo: solo el póster, atenuado y con degradado hacia `bg`. */}
        <Image
          src="/hero_poster.webp"
          alt=""
          fill
          priority
          sizes="100vw"
          className="-z-20 object-cover object-[78%_center] opacity-40 md:object-right md:opacity-55"
        />
        <div
          aria-hidden="true"
          className="absolute inset-0 -z-10 bg-linear-to-b from-bg/50 via-bg/75 via-45% to-bg to-75% md:bg-linear-to-r md:from-bg md:from-30% md:via-bg/60 md:via-65% md:to-bg/20 md:to-100%"
        />

        <main id="contenido" tabIndex={-1} className="site-container outline-none flex flex-1 flex-col justify-end pt-10 pb-12 md:justify-center md:pt-[72px] md:pb-24">
          <p
            aria-hidden="true"
            className="text-outline font-display text-[132px] leading-[0.8] font-semibold tracking-[-0.04em] md:text-[clamp(140px,17vw,240px)]"
          >
            {notFound.number}
          </p>
          <p className="mt-9 font-mono text-[11px] font-medium tracking-[0.14em] whitespace-pre text-text-muted uppercase md:mt-12">
            <span className="text-accent">[ {notFound.number} ]</span>
            {"  "}
            {notFound.label}
          </p>
          <h1 className="mt-4 font-display text-[38px] leading-[1.02] font-bold tracking-[-0.035em] text-text md:mt-5 md:text-[clamp(40px,4.4vw,64px)] md:leading-none">
            {notFound.title}
          </h1>
          <p className="mt-[18px] max-w-[480px] text-base leading-[1.6] md:mt-6 md:text-lg md:leading-[1.65]">
            {notFound.text}
          </p>
          <NotFoundPath />
          <div className="mt-8 flex flex-col gap-6 md:mt-10 md:flex-row md:items-center md:gap-8">
            <Link href={notFound.back.href} className={`${buttonClass} justify-center max-md:min-h-[52px]`}>
              <span aria-hidden="true">←</span>
              {notFound.back.label}
            </Link>
            <div className="flex gap-6 md:gap-8">
              {notFound.links.map((link) => (
                <TextLink key={link.href} href={link.href}>
                  {link.label}
                </TextLink>
              ))}
            </div>
          </div>
        </main>

        <footer className="hidden border-t border-line md:block">
          {/* El año queda fijo en el HTML al hacer el build. */}
          <p className="site-container py-8 font-mono text-xs font-medium tracking-[0.06em] text-text-muted">
            © {new Date().getFullYear()} {name}
          </p>
        </footer>
      </div>
    </>
  );
}
