import Image from "next/image";
import { about } from "@/content/site";
import HowIWork from "./HowIWork";
import Section from "./Section";
import SectionHeader from "./SectionHeader";
import TextLink from "./TextLink";

// Escritorio: la foto ocupa la columna izquierda en ambas filas; encabezado y texto van a la derecha.
// La segunda fila es 1fr para que el alto de la foto no empuje el texto hacia abajo.
export default function About() {
  return (
    <Section id="sobre-mi">
      <div className="lg:grid lg:grid-cols-[400px_1fr] lg:grid-rows-[auto_1fr] lg:items-start lg:gap-x-24">
        <SectionHeader id="sobre-mi-title" className="mb-8 lg:col-start-2 lg:mb-9" {...about.header} />
        <Image
          src="/hs_glasses.webp"
          alt={about.photoAlt}
          width={1000}
          height={1241}
          loading="lazy"
          sizes="(min-width: 768px) 400px, 100vw"
          className="aspect-[4/5] w-full rounded-[6px] border border-white/12 object-cover object-top md:max-w-[400px] lg:col-start-1 lg:row-span-2 lg:row-start-1"
        />
        <div className="mt-8 lg:col-start-2 lg:mt-0">
          {about.paragraphs.map((text, i) => (
            <p
              key={i}
              className="max-w-[620px] text-base leading-[1.7] not-first:mt-[18px] md:text-[19px] md:not-first:mt-5"
            >
              {text}
            </p>
          ))}
          <dl className="mt-10 max-w-[620px] border-b border-line md:mt-12">
            {about.facts.map((fact) => (
              <div key={fact.label} className="flex items-baseline gap-4 border-t border-line py-[14px] md:gap-6 md:py-4">
                <dt className="w-[104px] shrink-0 font-mono text-[11px] font-medium tracking-[0.14em] text-text-muted md:w-[140px]">
                  {fact.label}
                </dt>
                <dd className="text-[15px] text-text md:text-base">
                  {fact.link && (
                    <>
                      <TextLink href={fact.link.href} external className="text-text">
                        {fact.link.label}
                      </TextLink>{" "}
                    </>
                  )}
                  {fact.value}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
      <HowIWork />
    </Section>
  );
}
