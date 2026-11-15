// Textos de docs/contenido.md. Crece por fase.

export const name = "Ottoniel Menéndez";

export const social = {
  github: "https://github.com/ottooniel",
  linkedin: "https://www.linkedin.com/in/ottoniel-men%C3%A9ndez/",
  email: "ottonielm64@gmail.com",
};

export const navLinks = [
  { label: "Sobre mí", href: "/#sobre-mi" },
  { label: "Proyectos", href: "/#proyectos" },
  { label: "Experiencia", href: "/#experiencia" },
  { label: "Stack", href: "/#stack" },
  { label: "Contacto", href: "/#contacto" },
];

// Las partes con `em` van en color `text` dentro de la frase.
export type RichText = (string | { em: string })[];

export const hero = {
  firstName: "Ottoniel",
  lastName: "Menéndez",
  role: "Full Stack Developer",
  phrase: [
    "Construyo aplicaciones web de punta a punta: interfaces en ",
    { em: "React" },
    ", APIs en ",
    { em: "Node.js" },
    " y datos en ",
    { em: "MongoDB" },
    " y ",
    { em: "MySQL" },
    ".",
  ] satisfies RichText,
  primary: { label: "Ver proyectos", href: "/#proyectos" },
  secondary: { label: "Contactar", href: "/#contacto" },
  location: "Guatemala",
};
