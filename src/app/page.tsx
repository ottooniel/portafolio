// Página provisional de la fase 0; la fase 2 la reemplaza con nav y hero.
export default function Home() {
  return (
    <main className="site-container py-28">
      <h1 className="font-display text-5xl font-bold tracking-[-0.035em] text-text">
        Ottoniel
        <br />
        Menéndez
      </h1>
      <p className="mt-4 font-display text-2xl font-semibold text-text-muted">
        Full Stack Developer
      </p>
      <a
        href="https://github.com/ottooniel"
        className="mt-8 inline-block font-mono text-xs font-medium tracking-[0.12em] text-accent uppercase"
      >
        GitHub
      </a>
    </main>
  );
}
