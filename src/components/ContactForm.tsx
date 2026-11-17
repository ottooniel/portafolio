"use client";

import { useState } from "react";
import { buttonClass } from "./Button";

type Status = "idle" | "sending" | "sent" | "error";

type Copy = {
  name: string;
  email: string;
  message: string;
  submit: string;
  sending: string;
  retry: string;
  sent: { label: string; text: string };
  // El correo va entre las dos partes del texto, como enlace.
  error: { label: string; text: [string, string] };
};

const labelClass = "font-mono text-[11px] font-medium tracking-[0.14em] uppercase";
// Sin caja: solo la línea inferior, que pasa a `accent` con foco (es el indicador de foco del campo).
const fieldClass =
  "w-full rounded-none border-b border-line-strong bg-transparent text-base text-text outline-none transition-colors duration-200 focus:border-accent motion-reduce:transition-none md:text-[17px]";

export default function ContactForm({ copy, mailto }: { copy: Copy; mailto: string }) {
  const [status, setStatus] = useState<Status>("idle");
  const sending = status === "sending";
  // Mientras se envía, el campo entero (etiqueta y línea incluidas) se atenúa.
  const groupClass = `flex flex-col gap-1.5 transition-opacity duration-200 motion-reduce:transition-none ${sending ? "opacity-60" : ""}`;

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (sending) return;
    const form = event.currentTarget;
    setStatus("sending");
    try {
      const id = process.env.NEXT_PUBLIC_FORMSPREE_ID;
      if (!id) throw new Error("Falta NEXT_PUBLIC_FORMSPREE_ID");
      const response = await fetch(`https://formspree.io/f/${id}`, {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify(Object.fromEntries(new FormData(form))),
      });
      if (!response.ok) throw new Error(`Formspree respondió ${response.status}`);
      form.reset();
      setStatus("sent");
    } catch {
      setStatus("error");
    }
  }

  return (
    <form onSubmit={handleSubmit} aria-busy={sending} className="relative">
      <div className="flex flex-col gap-7 md:gap-8">
        <div className={groupClass}>
          <label htmlFor="contact-name" className={`${labelClass} text-text-muted`}>
            {copy.name}
          </label>
          <input
            id="contact-name"
            name="name"
            type="text"
            autoComplete="name"
            required
            readOnly={sending}
            className={`${fieldClass} h-[52px]`}
          />
        </div>
        <div className={groupClass}>
          <label htmlFor="contact-email" className={`${labelClass} text-text-muted`}>
            {copy.email}
          </label>
          <input
            id="contact-email"
            name="email"
            type="email"
            autoComplete="email"
            required
            readOnly={sending}
            className={`${fieldClass} h-[52px]`}
          />
        </div>
        <div className={groupClass}>
          <label htmlFor="contact-message" className={`${labelClass} text-text-muted`}>
            {copy.message}
          </label>
          <textarea
            id="contact-message"
            name="message"
            required
            readOnly={sending}
            className={`${fieldClass} block min-h-[120px] resize-y pt-3.5 leading-[1.6] md:min-h-32`}
          />
        </div>
        {/* Trampa para bots: fuera de pantalla, sin foco y oculta a lectores de pantalla. */}
        <input
          name="_gotcha"
          type="text"
          tabIndex={-1}
          autoComplete="off"
          aria-hidden="true"
          className="absolute -left-[9999px] size-px"
        />
        <button
          type="submit"
          disabled={sending}
          className={`${buttonClass} w-full justify-center disabled:cursor-progress disabled:gap-3 max-md:min-h-[52px] md:w-auto md:min-w-[196px] md:self-start`}
        >
          {sending && (
            <svg
              aria-hidden="true"
              viewBox="0 0 16 16"
              className="size-4 animate-loader fill-none stroke-[1.75] motion-reduce:animate-none"
            >
              <circle cx="8" cy="8" r="6.5" className="stroke-bg/20" />
              <path d="M8 1.5a6.5 6.5 0 0 1 6.5 6.5" strokeLinecap="round" className="stroke-bg" />
            </svg>
          )}
          {sending ? copy.sending : status === "error" ? copy.retry : copy.submit}
          {!sending && <span aria-hidden="true">→</span>}
        </button>
      </div>
      {/* La región existe desde el inicio: así el lector de pantalla anuncia el mensaje cuando aparece. */}
      <div role="status" aria-live="polite">
        {(status === "sent" || status === "error") && (
          <div className={`mt-7 border-t pt-5 md:mt-8 ${status === "sent" ? "border-line" : "border-danger/35"}`}>
            <p className={`${labelClass} ${status === "sent" ? "text-accent" : "text-danger"}`}>
              {copy[status].label}
            </p>
            <p className="mt-2 text-base leading-[1.6] text-text">
              {status === "sent" ? (
                copy.sent.text
              ) : (
                <>
                  {copy.error.text[0]}
                  <a
                    href={`mailto:${mailto}`}
                    className="underline decoration-text/35 decoration-1 underline-offset-4 transition-colors duration-200 hover:decoration-accent motion-reduce:transition-none"
                  >
                    {mailto}
                  </a>
                  {copy.error.text[1]}
                </>
              )}
            </p>
          </div>
        )}
      </div>
    </form>
  );
}
