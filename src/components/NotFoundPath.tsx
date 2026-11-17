"use client";

import { useSyncExternalStore } from "react";

const subscribe = () => () => {};

// Línea "GET {ruta} → 404". La ruta solo existe en el navegador: en el HTML estático no se pinta nada.
export default function NotFoundPath() {
  const path = useSyncExternalStore(
    subscribe,
    () => window.location.pathname,
    () => "",
  );
  if (!path) return null;

  return (
    <p className="mt-4 w-fit max-w-full rounded-[4px] border border-line px-3 py-[9px] font-mono text-xs font-medium wrap-anywhere text-text-muted md:mt-5 md:px-3.5 md:py-2.5 md:text-[13px]">
      GET <span className="text-text">{path}</span> → 404
    </p>
  );
}
