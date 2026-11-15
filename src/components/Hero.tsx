import Image from "next/image";
import { hero, social } from "@/content/site";
import Button from "./Button";
import HeroVideo from "./HeroVideo";
import TextLink from "./TextLink";

export default function Hero() {
  return (
    <section
      data-hero
      aria-labelledby="hero-title"
      className="relative isolate flex min-h-[760px] items-end overflow-hidden md:min-h-[810px] md:items-center"
    >
      {/* El póster se pinta de inmediato (LCP) y queda solo cuando el video no corre. */}
      <Image
        src="/hero_poster.webp"
        alt=""
        fill
        priority
        sizes="100vw"
        className="-z-20 object-cover object-[78%_center] md:object-right"
      />
      <HeroVideo />
      {/* Legibilidad: degradado vertical en móvil; desvanecido inferior de 160 px en escritorio. */}
      <div aria-hidden="true" className="absolute inset-0 -z-10 bg-linear-to-b from-bg/55 to-bg md:hidden" />
      <div
        aria-hidden="true"
        className="absolute inset-x-0 bottom-0 -z-10 hidden h-40 bg-linear-to-b from-transparent to-bg md:block"
      />

      <div className="site-container pt-28 pb-14 md:py-32">
        <h1
          id="hero-title"
          className="font-display text-[clamp(52px,7.2vw,104px)] leading-[0.98] font-bold tracking-[-0.035em] text-text"
        >
          {hero.firstName}
          <br />
          {hero.lastName}
        </h1>
        <p className="mt-4 font-display text-2xl leading-tight font-semibold tracking-[-0.03em] text-text-muted md:mt-5 md:text-[clamp(26px,3vw,40px)]">
          {hero.role}
        </p>
        <p className="mt-6 max-w-[520px] text-base leading-[1.65] md:mt-8 md:text-lg">
          {hero.phrase.map((part, i) =>
            typeof part === "string" ? part : (
              <span key={i} className="text-text">
                {part.em}
              </span>
            ),
          )}
        </p>
        <div className="mt-8 flex items-center gap-8 md:mt-10">
          <Button href={hero.primary.href}>{hero.primary.label}</Button>
          <TextLink href={hero.secondary.href}>{hero.secondary.label}</TextLink>
        </div>
        <div className="mt-10 flex items-center gap-4 md:mt-14">
          <a
            href={social.github}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub de Ottoniel Menéndez (abre en una pestaña nueva)"
            className="flex size-11 items-center justify-center rounded-full border border-line-strong text-text transition-colors duration-200 hover:border-accent motion-reduce:transition-none"
          >
            <svg aria-hidden="true" viewBox="0 0 24 24" className="size-[18px] fill-none stroke-current stroke-[1.75]">
              <path d="M8 6 2 12l6 6M16 6l6 6-6 6" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </a>
          <span aria-hidden="true" className="h-6 w-px bg-line-strong" />
          <span className="font-mono text-xs font-medium tracking-[0.12em] text-text-muted uppercase">
            {hero.location}
          </span>
        </div>
      </div>
    </section>
  );
}
