import Image from "next/image";
import { about } from "@/content/site";
import HowIWork from "./HowIWork";
import RichText from "./RichText";
import Section from "./Section";
import SectionHeader from "./SectionHeader";

export default function About() {
  return (
    <Section id="sobre-mi">
      <SectionHeader id="sobre-mi-title" {...about.header} />
      <div className="mt-10 lg:mt-14 lg:grid lg:grid-cols-[400px_1fr] lg:items-start lg:gap-24">
        <Image
          src="/hs_glasses.webp"
          alt={about.photoAlt}
          width={1000}
          height={1241}
          loading="lazy"
          sizes="(min-width: 1024px) 400px, 100vw"
          className="aspect-[4/5] w-full rounded-[6px] border border-white/12 object-cover object-top"
        />
        <div className="mt-10 lg:mt-0">
          {about.paragraphs.map((parts, i) => (
            <p key={i} className="max-w-[620px] text-base leading-[1.7] not-first:mt-6 md:text-[19px]">
              <RichText parts={parts} />
            </p>
          ))}
          <dl className="mt-10 border-b border-line">
            {about.facts.map((fact) => (
              <div key={fact.label} className="flex items-baseline border-t border-line py-4">
                <dt className="w-[140px] shrink-0 font-mono text-[11px] font-medium tracking-[0.12em] text-text-muted">
                  {fact.label}
                </dt>
                <dd className="text-base text-text">{fact.value}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
      <HowIWork />
    </Section>
  );
}
