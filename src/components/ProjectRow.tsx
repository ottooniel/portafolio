import Image from "next/image";
import { diagramNote, type ProjectMeta } from "@/content/projects";
import EchoTrailer from "./EchoTrailer";
import FlowDiagram from "./FlowDiagram";
import TextLink from "./TextLink";

const monoLabel = "font-mono text-[11px] font-medium tracking-[0.14em] uppercase";

// Insignia sobre el medio, igual en el tráiler, la miniatura y los diagramas.
function MediaBadge({ children }: { children: string }) {
  return (
    <span className="absolute top-3.5 left-3.5 rounded-[3px] bg-bg/85 px-2.5 py-[5px] font-mono text-[11px] font-medium tracking-[0.1em] text-text-body uppercase">
      {children}
    </span>
  );
}

function Media({ meta }: { meta: ProjectMeta }) {
  const { media, mediaLabel } = meta;

  if (media.type === "diagram") {
    return (
      <div className="relative flex items-center rounded-[6px] border border-line bg-white/2 px-4 pt-10 pb-11 md:min-h-[420px] md:px-12 md:py-14">
        <MediaBadge>{mediaLabel}</MediaBadge>
        <FlowDiagram nodes={media.nodes} data={media.data} emphasizeCenter={media.emphasizeCenter} />
        <p className="absolute bottom-3.5 left-4 font-mono text-[9px] font-medium tracking-[0.1em] text-text-muted uppercase md:bottom-4 md:left-12 md:text-[10px] md:tracking-[0.12em]">
          {diagramNote}
        </p>
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
      <MediaBadge>{mediaLabel}</MediaBadge>
    </div>
  );
}

export default function ProjectRow({ meta, children }: { meta: ProjectMeta; children: React.ReactNode }) {
  const titleId = `proyecto-${meta.number}`;
  const stack = meta.stack.join(" · ");

  return (
    <article
      aria-labelledby={titleId}
      className="reveal group grid gap-[18px] border-t border-line py-12 md:gap-12 md:py-[72px] lg:grid-cols-[55fr_45fr] lg:items-start xl:gap-[72px]"
    >
      <Media meta={meta} />

      {/* Todos los bloques de la columna de texto van separados 20 px (18 en móvil). */}
      <div className="flex flex-col gap-[18px] md:gap-5">
        <div className="flex items-end gap-4 md:gap-5">
          <span
            aria-hidden="true"
            className="text-outline mt-1.5 font-display text-[56px] leading-[0.8] font-semibold md:mt-0 md:text-7xl"
          >
            {meta.number}
          </span>
          <p className="font-mono text-[11px] leading-normal font-medium tracking-[0.12em] text-accent uppercase">
            {meta.tag}
            {meta.note && (
              <span className="mt-1.5 block tracking-normal normal-case text-text-muted">{meta.note}</span>
            )}
          </p>
        </div>

        <h3
          id={titleId}
          className="font-display text-[30px] leading-[1.05] font-semibold tracking-[-0.03em] text-text md:text-4xl"
        >
          {meta.title}
        </h3>

        {meta.kind === "public" ? (
          <>
            <div className="text-base leading-[1.65] md:text-[17px]">{children}</div>
            <dl className="flex flex-col gap-[18px] border-t border-line pt-[18px] md:gap-5 md:pt-5">
              <div>
                <dt className={`text-text-muted ${monoLabel}`}>Arquitectura</dt>
                <dd className="mt-2 text-[15px] leading-[1.65]">{meta.architecture.join(" · ")}</dd>
              </div>
              <div>
                <dt className={`text-text-muted ${monoLabel}`}>Stack</dt>
                <dd className="mt-2 text-[15px] text-text md:text-base">{stack}</dd>
              </div>
            </dl>
            <div className="flex flex-wrap gap-6 md:mt-1 md:gap-7">
              {meta.links.map((link) => (
                <TextLink key={link.href} href={link.href} external>
                  {link.label}
                </TextLink>
              ))}
            </div>
          </>
        ) : (
          <>
            <dl className="grid gap-5 border-t border-line pt-[18px] sm:grid-cols-2 sm:gap-x-7 sm:gap-y-6 md:pt-5">
              {children}
            </dl>
            <p className="font-mono text-xs leading-[1.7] text-text-muted">{stack}</p>
          </>
        )}
      </div>
    </article>
  );
}
