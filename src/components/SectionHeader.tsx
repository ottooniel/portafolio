// `id` debe ser el de la sección + "-title": Section lo usa en aria-labelledby.
// `className` fija el margen inferior, que cambia por sección.
export default function SectionHeader({
  id,
  number,
  label,
  title,
  className,
}: {
  id: string;
  number: string;
  label: string;
  title: string;
  className?: string;
}) {
  return (
    <header className={className}>
      <p className="font-mono text-[11px] font-medium tracking-[0.14em] whitespace-pre text-text-muted uppercase">
        <span className="text-accent">[ {number} ]</span>
        {"  "}
        {label}
      </p>
      <h2
        id={id}
        className="mt-4 font-display text-4xl leading-[1.02] font-semibold tracking-[-0.035em] text-text md:mt-5 md:text-5xl"
      >
        {title}
      </h2>
    </header>
  );
}
