// Textos visibles del sitio. Crece por fase.

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

export const about = {
  header: { number: "01", label: "Perfil", title: "Sobre mí" },
  photoAlt: "Retrato de Ottoniel Menéndez",
  paragraphs: [
    [
      "Soy desarrollador full stack en Guatemala y estudio Ingeniería en Sistemas de Información y Ciencias de la Computación en la Universidad Mariano Gálvez. Desde diciembre de 2024 trabajo en ",
      { em: "NIU Solutions" },
      " construyendo portales web para el sector financiero sobre HubSpot CMS, con JavaScript, funciones serverless y datos en HubDB.",
    ],
    [
      "Me gusta cuidar el producto completo: desde la pantalla que usa el agente hasta cómo el área de negocio puede cambiarla sin tocar código.",
    ],
  ] satisfies RichText[],
  facts: [
    { label: "UBICACIÓN", value: "Guatemala" },
    { label: "ESTUDIOS", value: "UMG (en curso)" },
    { label: "TRABAJO", value: "NIU Solutions desde dic. 2024" },
  ],
};

export const howIWork = {
  title: "Cómo trabajo",
  items: [
    {
      title: "Diseño antes de código.",
      text: "Defino contenido, estructura y diseño antes de programar. Este sitio empezó como maqueta.",
    },
    {
      title: "Ramas cortas y PR.",
      text: "Cada cambio vive en una rama corta y entra a main por pull request, aunque trabaje solo.",
    },
    {
      title: "Historial legible.",
      text: "Commits convencionales (feat, fix, docs), tags de versión y CHANGELOG.",
    },
    {
      title: "CI en cada cambio.",
      text: "Lint, typecheck, build y Lighthouse antes de integrar. main siempre se puede desplegar.",
    },
  ],
};

export const experience = {
  header: { number: "03", label: "Trayectoria", title: "Experiencia" },
  job: {
    dates: "dic. 2024 — Actualidad",
    mode: "Híbrido",
    role: "Ingeniero de software",
    company: "NIU Solutions",
    bullets: [
      "Portales web para el sector financiero sobre HubSpot CMS (HubL, JavaScript, funciones serverless y HubDB).",
      "Portal 360: desarrollé la mayor parte, del frontend a la integración con funciones serverless.",
      "Portal para agentes de campo: desarrollé gran parte; mapas y rutas con APIs de Google, roles y permisos desde HubDB, autenticación contra una API externa e integración con la API de HubSpot.",
    ],
  },
  education: {
    label: "Educación",
    degree: "Ingeniería en Sistemas de Información y Ciencias de la Computación",
    school: "Universidad Mariano Gálvez de Guatemala · En curso",
  },
  certifications: {
    label: "Certificaciones",
    items: [
      { name: "Registered Scrum Basics", issuer: "Scrum Inc." },
      { name: "Curso de Angular 17", issuer: "Platzi" },
      { name: "ISC2 Candidate", issuer: "ISC2" },
      { name: "Endpoint Security", issuer: "Cisco" },
      { name: "Introduction to Cybersecurity", issuer: "Cisco" },
      { name: "Networking Devices and Initial Configuration", issuer: "Cisco" },
    ],
  },
};

export const stack = {
  header: { number: "04", label: "Herramientas", title: "Stack" },
  rows: [
    { label: "Frontend", items: ["React", "Next.js", "TypeScript", "Tailwind CSS", "HubL"] },
    { label: "Backend", items: ["Node.js", "funciones serverless"] },
    { label: "Datos", items: ["MongoDB", "MySQL", "HubDB"] },
    { label: "CMS", items: ["HubSpot CMS"] },
    { label: "Herramientas", items: ["Git", "GitHub", "GitHub Actions", "APIs de Google"] },
  ],
};
