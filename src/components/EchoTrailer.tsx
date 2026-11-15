"use client";

import { useEffect, useRef } from "react";

// Tráiler de Echo: con preload="none" no se descarga hasta que la fila entra en pantalla.
// Se reproduce solo mientras se ve; con prefers-reduced-motion se queda en el póster.
export default function EchoTrailer() {
  const ref = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = ref.current;
    if (!video) return;
    const reduced = matchMedia("(prefers-reduced-motion: reduce)");

    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting && !reduced.matches) video.play().catch(() => {});
      else video.pause();
    });
    observer.observe(video);
    return () => observer.disconnect();
  }, []);

  return (
    <video
      ref={ref}
      muted
      loop
      playsInline
      preload="none"
      poster="/echo_poster.webp"
      aria-hidden="true"
      className="size-full object-contain"
    >
      <source src="/echo_preview.mp4" type="video/mp4" />
    </video>
  );
}
