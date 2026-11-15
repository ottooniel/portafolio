// Fila de la lista de definiciones de un caso de estudio (se usa desde el MDX).
// `wide` ocupa las dos columnas; `highlight` es "Decisión clave": etiqueta `accent`, texto `text` 500.
export default function Fact({
  label,
  wide = false,
  highlight = false,
  children,
}: {
  label: string;
  wide?: boolean;
  highlight?: boolean;
  children: React.ReactNode;
}) {
  return (
    <div className={wide ? "sm:col-span-2" : undefined}>
      <dt
        className={`font-mono text-[11px] font-medium tracking-[0.14em] uppercase ${highlight ? "text-accent" : "text-text-muted"}`}
      >
        {label}
      </dt>
      <dd className={`mt-2 leading-[1.65] ${highlight ? "text-base font-medium text-text" : "text-[15px]"}`}>
        {children}
      </dd>
    </div>
  );
}
