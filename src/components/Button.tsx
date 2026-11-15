// Botón primario: relleno `text`, texto `bg`, 48 px, radio 6, hover blanco.
export default function Button({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <a
      href={href}
      className="inline-flex min-h-12 items-center gap-2.5 rounded-[6px] bg-text px-[22px] text-[15px] font-semibold text-bg transition-colors md:px-6 duration-200 hover:bg-white motion-reduce:transition-none"
    >
      {children}
      <span aria-hidden="true">→</span>
    </a>
  );
}
