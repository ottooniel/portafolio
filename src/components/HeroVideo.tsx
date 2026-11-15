"use client";

import { useEffect, useRef } from "react";

// Video de fondo del hero. Con prefers-reduced-motion se oculta (queda el póster de debajo) y se pausa.
export default function HeroVideo() {
  const ref = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (matchMedia("(prefers-reduced-motion: reduce)").matches) ref.current?.pause();
  }, []);

  return (
    <video
      ref={ref}
      muted
      autoPlay
      loop
      playsInline
      poster="/hero_poster.webp"
      aria-hidden="true"
      className="absolute inset-0 -z-10 size-full object-cover object-[78%_center] motion-reduce:hidden md:object-right"
    >
      <source src="/hero_loop.mp4" type="video/mp4" />
    </video>
  );
}
