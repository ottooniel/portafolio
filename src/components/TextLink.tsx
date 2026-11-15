// Enlace de texto con subrayado fino que pasa a `accent` en hover. `external` abre en otra pestaña y agrega ↗.
export default function TextLink({
  href,
  external = false,
  children,
}: {
  href: string;
  external?: boolean;
  children: React.ReactNode;
}) {
  return (
    <a
      href={href}
      {...(external && { target: "_blank", rel: "noopener noreferrer" })}
      className="text-[15px] font-medium text-text underline decoration-text/35 decoration-1 underline-offset-4 transition-colors duration-200 hover:decoration-accent motion-reduce:transition-none"
    >
      {children}
      {external && (
        <>
          <span aria-hidden="true"> ↗</span>
          <span className="sr-only"> (abre en una pestaña nueva)</span>
        </>
      )}
    </a>
  );
}
