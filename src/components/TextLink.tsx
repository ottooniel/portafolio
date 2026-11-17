// Enlace de texto con subrayado fino que pasa a `accent` en hover. `external` abre en otra pestaña y agrega ↗.
// `className` reemplaza la tipografía por defecto (tamaño, peso y color).
export default function TextLink({
  href,
  external = false,
  className = "text-[15px] font-medium text-text",
  children,
}: {
  href: string;
  external?: boolean;
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <a
      href={href}
      {...(external && { target: "_blank", rel: "noopener noreferrer" })}
      className={`${className} underline decoration-text/35 decoration-1 underline-offset-4 transition-colors duration-200 hover:decoration-accent motion-reduce:transition-none`}
    >
      {children}
      {external && (
        <>
          {/* Espacio duro: el ↗ no queda solo en otra línea. */}
          <span aria-hidden="true">&nbsp;↗</span>
          <span className="sr-only"> (abre en una pestaña nueva)</span>
        </>
      )}
    </a>
  );
}
