import type { Metadata } from "next";
import { Inter, JetBrains_Mono, Space_Grotesk } from "next/font/google";
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

export const metadata: Metadata = {
  title: "Ottoniel Menéndez | Full Stack Developer",
  description:
    "Portafolio de Ottoniel Menéndez, Full Stack Developer en Guatemala. Proyectos con React, Node.js, MongoDB y MySQL.",
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
