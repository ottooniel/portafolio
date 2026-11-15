export default function Section({
  id,
  alt = false,
  children,
}: {
  id: string;
  alt?: boolean;
  children: React.ReactNode;
}) {
  return (
    <section
      id={id}
      aria-labelledby={`${id}-title`}
      className={`border-t border-line py-[72px] md:py-28 ${alt ? "bg-bg-alt" : "bg-bg"}`}
    >
      <div className="site-container">{children}</div>
    </section>
  );
}
