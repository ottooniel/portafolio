import { Fragment } from "react";
import { stack } from "@/content/site";
import Section from "./Section";
import SectionHeader from "./SectionHeader";

export default function Stack() {
  return (
    <Section id="stack" alt>
      <SectionHeader id="stack-title" className="mb-10 md:mb-16" {...stack.header} />
      <dl className="border-b border-line">
        {stack.rows.map((row) => (
          <div
            key={row.label}
            className="reveal border-t border-line py-5 md:py-7 lg:grid lg:grid-cols-[240px_1fr] lg:items-baseline lg:gap-12"
          >
            <dt className="font-mono text-[11px] font-medium tracking-[0.14em] text-text-muted uppercase">
              {row.label}
            </dt>
            <dd className="mt-2 font-display text-[19px] leading-[1.45] font-medium tracking-[-0.02em] text-text md:text-2xl md:leading-[1.4] lg:mt-0">
              {row.items.map((item, i) => (
                <Fragment key={item}>
                  {i > 0 && <span className="text-text-muted"> · </span>}
                  {item}
                </Fragment>
              ))}
            </dd>
          </div>
        ))}
      </dl>
    </Section>
  );
}
