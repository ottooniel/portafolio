import { experience } from "@/content/site";
import Section from "./Section";
import SectionHeader from "./SectionHeader";

const row = "border-t border-line py-7 md:py-10 lg:grid lg:grid-cols-[240px_1fr] lg:gap-12";
const label = "mb-4 font-mono text-[11px] font-medium tracking-[0.14em] text-text-muted uppercase lg:mb-0";

export default function Experience() {
  const { header, job, education, certifications } = experience;
  return (
    <Section id="experiencia">
      <SectionHeader id="experiencia-title" className="mb-12 md:mb-16" {...header} />

      <div className={row}>
        <p className={`${label} leading-[1.8]`}>
          <span className="text-text">{job.dates}</span>
          <br />
          {job.mode}
        </p>
        <div>
          <h3 className="font-display text-2xl leading-tight font-semibold tracking-[-0.03em] text-text md:text-[28px]">
            {job.role}
          </h3>
          <p className="mt-1 text-base text-text-muted">{job.company}</p>
          <ul className="mt-5 max-w-[720px] list-disc space-y-2.5 pl-5 text-base leading-[1.65] marker:text-text-muted">
            {job.bullets.map((b) => (
              <li key={b}>{b}</li>
            ))}
          </ul>
        </div>
      </div>

      <div className={row}>
        <p className={label}>{education.label}</p>
        <div>
          <p className="font-display text-xl leading-snug font-semibold tracking-[-0.02em] text-text">
            {education.degree}
          </p>
          <p className="mt-1 text-base text-text-muted">{education.school}</p>
        </div>
      </div>

      <div className={row}>
        <p className={label}>{certifications.label}</p>
        <ul className="divide-y divide-white/7">
          {certifications.items.map((c) => (
            <li key={c.name} className="py-3 first:pt-0 last:pb-0 sm:flex sm:items-baseline sm:justify-between sm:gap-6">
              <span className="block text-base text-text">{c.name}</span>
              <span className="mt-1 block shrink-0 font-mono text-xs text-text-muted sm:mt-0">{c.issuer}</span>
            </li>
          ))}
        </ul>
      </div>
    </Section>
  );
}
