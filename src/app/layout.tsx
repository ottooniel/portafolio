import type { Metadata } from "next";
import { Inter, JetBrains_Mono, Space_Grotesk } from "next/font/google";
import { hero, meta, name } from "@/content/site";
import "./globals.css";

// Las tres son fuentes variables: un archivo por familia cubre todos los pesos.
const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
});

// URL pública para las etiquetas que la necesitan absoluta (og:image). En Vercel, sin la variable propia,
// se usa el dominio de producción del proyecto.
const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL ||
  (process.env.VERCEL_PROJECT_PRODUCTION_URL
    ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`
    : "http://localhost:3000");

const ogImage = { url: "/og.jpg", width: 1200, height: 630, alt: `${name}, ${hero.role}` };

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: meta.title,
  description: meta.description,
  openGraph: {
    type: "website",
    locale: "es_GT",
    siteName: name,
    title: meta.title,
    description: meta.description,
    images: [ogImage],
  },
  twitter: {
    card: "summary_large_image",
    title: meta.title,
    description: meta.description,
    images: [ogImage],
  },
  // El sitio está desplegado pero todavía no se difunde: noindex hasta decidir hacerlo público.
  // Va como etiqueta y no en robots.txt, porque un Disallow impediría a los buscadores leerla.
  robots: { index: false, follow: false },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="es"
      className={`${spaceGrotesk.variable} ${inter.variable} ${jetbrainsMono.variable}`}
    >
      {/* `#inicio` es el destino de "Volver arriba". */}
      <body id="inicio">{children}</body>
    </html>
  );
}
