// Botón primario (diseno.md → Hero): relleno `text`, texto `bg`, 48 px, radio 6, hover blanco.
export default function Button({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <a
      href={href}
      className="inline-flex h-12 items-center gap-2 rounded-[6px] bg-text px-6 text-[15px] font-medium text-bg transition-colors duration-200 hover:bg-white motion-reduce:transition-none"
    >
      {children}
      <span aria-hidden="true">→</span>
    </a>
  );
}
