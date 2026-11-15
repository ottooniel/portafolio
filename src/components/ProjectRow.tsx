import Image from "next/image";
import { diagramNote, type ProjectMeta } from "@/content/projects";
import EchoTrailer from "./EchoTrailer";
import FlowDiagram from "./FlowDiagram";
import TextLink from "./TextLink";

const monoLabel = "font-mono text-[11px] font-medium tracking-[0.14em] uppercase";
const mediaTag = `absolute top-3 left-3 rounded-[3px] bg-bg/85 px-2 py-1 text-text-muted ${monoLabel}`;

function Media({ meta }: { meta: ProjectMeta }) {
  const { media, mediaLabel } = meta;

  if (media.type === "diagram") {
    return (
      <div className="flex min-h-[420px] flex-col justify-between gap-10 border border-line bg-white/2 px-5 py-8 md:px-12 md:py-14">
        <p className={`text-text-muted ${monoLabel}`}>{mediaLabel}</p>
        <FlowDiagram nodes={media.nodes} data={media.data} emphasizeCenter={media.emphasizeCenter} />
        <p className="font-mono text-[10px] font-medium tracking-[0.14em] text-text-muted uppercase">{diagramNote}</p>
      </div>
    );
  }

  return (
    <div className="relative overflow-hidden rounded-[6px] border border-line">
      {media.type === "trailer" ? (
        <div className="aspect-[4/5] bg-black md:aspect-[16/10]">
          <EchoTrailer />
        </div>
      ) : (
        <Image
          src={media.src}
          alt=""
          width={media.width}
          height={media.height}
          loading="lazy"
          sizes="(min-width: 1024px) 620px, 100vw"
          className="aspect-[16/10] w-full object-cover object-right"
        />
      )}
      <span className={mediaTag}>{mediaLabel}</span>
    </div>
  );
}

export default function ProjectRow({ meta, children }: { meta: ProjectMeta; children: React.ReactNode }) {
  const titleId = `proyecto-${meta.number}`;
  const stack = meta.stack.join(" · ");

  return (
    <article
      aria-labelledby={titleId}
      className="group grid gap-10 border-t border-line py-[72px] lg:grid-cols-[55fr_45fr] lg:items-start lg:gap-12 xl:gap-[72px]"
    >
      <Media meta={meta} />

      <div>
        <div className="flex items-end gap-5">
          <span
            aria-hidden="true"
            className="text-outline font-display text-[56px] leading-[0.8] font-semibold md:text-7xl"
          >
            {meta.number}
          </span>
          <p className={`${monoLabel} text-accent`}>
            {meta.tag}
            {meta.note && (
              <span className="mt-1.5 block tracking-normal normal-case text-text-muted">{meta.note}</span>
            )}
          </p>
        </div>

        <h3
          id={titleId}
          className="mt-8 font-display text-[30px] leading-[1.1] font-semibold tracking-[-0.03em] text-text md:text-4xl"
        >
          {meta.title}
        </h3>

        {meta.kind === "public" ? (
          <>
            <div className="mt-5 text-base leading-[1.65] md:text-[17px]">{children}</div>
            <dl className="mt-8 flex flex-col gap-5 border-t border-line pt-6">
              <div>
                <dt className={`text-text-muted ${monoLabel}`}>Arquitectura</dt>
                <dd className="mt-2 text-[15px] leading-[1.65]">{meta.architecture.join(" · ")}</dd>
              </div>
              <div>
                <dt className={`text-text-muted ${monoLabel}`}>Stack</dt>
                <dd className="mt-2 text-base text-text">{stack}</dd>
              </div>
            </dl>
            <div className="mt-8 flex flex-wrap gap-7">
              {meta.links.map((link) => (
                <TextLink key={link.href} href={link.href} external>
                  {link.label}
                </TextLink>
              ))}
            </div>
          </>
        ) : (
          <>
            <dl className="mt-8 grid grid-cols-2 gap-x-8 gap-y-6 border-t border-line pt-6">{children}</dl>
            <p className="mt-8 font-mono text-xs leading-[1.65] text-text-muted">{stack}</p>
          </>
        )}
      </div>
    </article>
  );
}
