# Contenido del portafolio de Ottoniel Menéndez

Fuente única de textos del sitio. Idioma: español. Voz: primera persona, directa.

## Reglas de contenido

- Cargo en el hero: "Full Stack Developer". Cargo en la experiencia: "Ingeniero de software" (igual que LinkedIn).
- Nombre público: "Ottoniel Menéndez". No usar ningún otro nombre completo.
- Confidencialidad: solo se dice "sector financiero". No nombrar al cliente ni mostrar código, capturas ni datos internos de NIU Solutions.
- Sin etiquetas de estado: nada de "en desarrollo", "próximamente" ni "en progreso". Solo lo que ya existe.
- No incluir hackathons ni eventos. Los proyectos nuevos se agregan cuando existan, como PR y versión nueva.
- Sin cifras ni métricas inventadas.
- El sitio se despliega pero no se difunde: debe llevar `noindex` hasta que Ottoniel decida hacerlo público.

## Meta (SEO)

- Título: Ottoniel Menéndez | Full Stack Developer
- Descripción: Portafolio de Ottoniel Menéndez, Full Stack Developer en Guatemala. Proyectos con React, Node.js, MongoDB y MySQL.

## Hero

- H1: Ottoniel Menéndez
- Subtítulo: Full Stack Developer
- Frase: Construyo aplicaciones web de punta a punta: interfaces en React, APIs en Node.js y datos en MongoDB y MySQL.
- Botones: `Ver proyectos` · `Contactar`
- Palabras en color `text` dentro de la frase: React, Node.js, MongoDB y MySQL.
- Debajo: enlace a GitHub y "Guatemala". Las tecnologías ya van en la frase; no se repiten como etiquetas.

## Sobre mí

Soy desarrollador full stack. Construyo portales web para el sector financiero sobre HubSpot CMS, con JavaScript, funciones serverless y datos en HubDB.

Me gusta cuidar el producto completo: desde la pantalla que usa el agente hasta cómo el área de negocio puede cambiarla sin tocar código.

Sin palabras resaltadas en los párrafos. Ubicación, estudios y trabajo no se repiten en el texto: están en la lista de datos.

Datos (etiqueta → valor, tal cual):
- UBICACIÓN → Guatemala
- ESTUDIOS → UMG (en curso)
- TRABAJO → NIU Solutions desde dic. 2024 ("NIU Solutions" es enlace externo a https://niu.solutions/)

### Cómo trabajo

1. **Diseño antes de código.** Defino contenido, estructura y diseño antes de programar. Este sitio empezó como maqueta.
2. **Ramas cortas y PR.** Cada cambio vive en una rama corta y entra a main por pull request, aunque trabaje solo.
3. **Historial legible.** Commits convencionales (feat, fix, docs), tags de versión y CHANGELOG.
4. **CI en cada cambio.** Lint, typecheck, build y Lighthouse antes de integrar. main siempre se puede desplegar.

Regla: estos cuatro puntos tienen que ser verdad en el repo cuando el sitio se publique.

## Proyectos

Cinco filas, en este orden: Echo, banguat-mcp, Este portafolio, Portal 360, Portal para agentes de campo.

Etiquetas sobre el medio: `01 / ECHO` · `02 / BANGUAT-MCP` · `03 / PORTAFOLIO` · `04 / PORTAL 360` · `05 / AGENTES DE CAMPO`.

### Echo

Juego arcade · Build&Play de Open2

Juego de supervivencia en el navegador: cada ronda graba tu recorrido y lo convierte en un eco que te persigue en la siguiente. Entero en 32 KB, sin librerías ni assets, con simulación determinista a 60 Hz.

- Arquitectura: Bucle de juego con paso fijo a 60 Hz · render en Canvas 2D · sonido generado con Web Audio
- Stack: JavaScript, Canvas 2D, Web Audio
- Medio: tráiler del juego en bucle, sin sonido (`echo_preview.mp4`, póster `echo_poster.webp`). El tráiler confirma: index.html de 30.380 bytes y "hasta el sonido es código".
- Jugar: https://ottooniel.github.io/echo/
- Repositorio: https://github.com/ottooniel/echo

### banguat-mcp

Servidor MCP · npm y MCP Registry

Servidor MCP que conecta agentes de IA como Claude y Cursor con el tipo de cambio del Banco de Guatemala: dólar del día, series históricas y conversión de montos a quetzales. Publicado en npm y en el registro oficial de MCP; se instala con `npx -y banguat-mcp`.

- Arquitectura: Servidor MCP por stdio con seis herramientas · cliente SOAP del web service del Banguat con caché · conversión a quetzales de las monedas del catálogo
- Stack: TypeScript, Node.js, MCP SDK, Zod, Vitest, GitHub Actions
- Imagen: respaldo genérico (`cover.webp`) hasta tener captura propia
- Repositorio: https://github.com/ottooniel/banguat-mcp
- npm: https://www.npmjs.com/package/banguat-mcp

### Este portafolio

Sitio web

Sitio estático con contenido en MDX, CI con lint, typecheck, build y Lighthouse, y vista previa por PR.

- Arquitectura: Next.js con exportación estática · contenido en MDX · CI en GitHub Actions con vista previa por PR
- Stack: Next.js, TypeScript, Tailwind, GitHub Actions
- Imagen: captura del hero del sitio ya construido (`portafolio.webp`)
- Repositorio: https://github.com/ottooniel/portafolio

### Portal 360

Caso de estudio · Proyecto privado de cliente, sin demo pública

- Contexto: Portal de atención al cliente para el sector financiero. Los agentes ven toda la información del cliente en una sola pantalla y gestionan sus tickets, como parte de la migración de un sistema anterior a HubSpot.
- Mi rol: Desarrollé la mayor parte, del frontend a la integración con funciones serverless de HubSpot.
- Qué construí: Búsqueda de clientes, ficha del cliente y creación guiada de tickets en 3 pasos con seguimiento de gestiones.
- Decisión clave: Formularios dinámicos configurados desde tablas HubDB, para que el área de negocio cambie razones, asuntos y campos sin tocar código.
- Resultado: Los usuarios describieron la experiencia como fluida e intuitiva.
- Stack: HubSpot CMS, HubL, JavaScript, Funciones serverless, HubDB
- Visual: diagrama propio simplificado, sin datos ni marca del cliente.

### Portal para agentes de campo

Caso de estudio · Proyecto privado de cliente, sin demo pública

- Contexto: Portal responsive de ventas y cobranza en campo.
- Mi rol: Desarrollé gran parte del portal.
- Qué construí: Agenda, planificación de visitas, formularios de visita y cobranza, cotizador de productos de crédito y administración de usuarios y roles.
- Decisión clave: Roles y permisos (vendedor, supervisor, administrador) administrados desde HubDB, con autenticación contra una API externa e integración con la API de HubSpot.
- Integraciones: APIs de Google para ubicar clientes y sucursales en mapa y manejar rutas de visita.
- Stack: HubSpot CMS, JavaScript, APIs de Google, HubDB

## Experiencia

**Ingeniero de software · NIU Solutions** (la empresa es enlace externo a https://niu.solutions/) · dic. 2024 – Actualidad · Híbrido

- Portales web para el sector financiero sobre HubSpot CMS (HubL, JavaScript, funciones serverless y HubDB).
- Portal 360: desarrollé la mayor parte, del frontend a la integración con funciones serverless.
- Portal para agentes de campo: desarrollé gran parte; mapas y rutas con APIs de Google, roles y permisos desde HubDB, autenticación contra una API externa e integración con la API de HubSpot.

**Educación:** Ingeniería en Sistemas de Información y Ciencias de la Computación · Universidad Mariano Gálvez de Guatemala · En curso

**Certificaciones** (nombre · emisor; el nombre es enlace externo a la credencial pública cuando existe):

- Middle Developer Front End JavaScript - React · ADA School — https://innova.learn.ada-school.org/certifications/682beee15399469ed776b1b1
- Registered Scrum Basics · Scrum Inc. (sin enlace: no hay credencial pública)
- Desarrollo de software con Claude Code · DataCamp — https://www.datacamp.com/completed/statement-of-accomplishment/course/1fffbd277d68e277f0eb9a760f487241b6fa2984
- Software Development with Cursor · DataCamp — https://www.datacamp.com/completed/statement-of-accomplishment/course/14f5c07fa48141b6cc8fdf45686c1dd4b2bf226a

Criterio: solo lo que respalda el perfil (React/JavaScript, trabajo en equipo con Scrum y desarrollo con herramientas de IA). Fuera: cursos introductorios de Cisco, "ISC2 Candidate" (no es una certificación) y Angular 17 (no es parte del stack). Más adelante se puede agregar cualquier otra que apunte al mismo perfil.

## Stack

- Frontend: React, Next.js, TypeScript, Tailwind CSS, HubL
- Backend: Node.js, Funciones serverless
- Datos: MongoDB, MySQL, HubDB
- CMS: HubSpot CMS
- Herramientas: Git, GitHub, GitHub Actions, APIs de Google

## Contacto

- Título: ¿Tienes un proyecto o una oportunidad?
- Texto: Escríbeme y te respondo lo antes posible.
- Formulario: Nombre · Correo · Mensaje · botón `Enviar mensaje →`
- Validación: la nativa del navegador (campos `required`, correo con `type="email"`). Sin mensajes propios.
- Enviando: el botón muestra un loader y el texto `Enviando` (sin flecha), queda deshabilitado y el formulario lleva `aria-busy="true"`.
- Enviado: etiqueta `MENSAJE ENVIADO` y el texto "¡Gracias! Recibí tu mensaje y te responderé pronto." Los campos se vacían.
- Error: etiqueta `NO SE ENVIÓ` y el texto "No se pudo enviar. Inténtalo de nuevo o escríbeme a ottonielm64@gmail.com." (el correo como enlace `mailto:`). Los campos conservan lo escrito y el botón dice `Reintentar →`.
- Enlaces:
  - GitHub: https://github.com/ottooniel
  - LinkedIn: https://www.linkedin.com/in/ottoniel-men%C3%A9ndez/
  - Correo: ottonielm64@gmail.com
- Sin CV descargable por ahora.
- Pie: © {año} Ottoniel Menéndez · GitHub · LinkedIn · Volver arriba ↑ (el año se calcula al hacer el build).

## Accesibilidad

- Enlace para saltar la navegación: `Saltar al contenido` (a `#contenido`, el `main`). Solo se ve con el foco del teclado.

## Página 404

- Número decorativo: 404
- Rótulo: `[ 404 ]  Ruta no encontrada`
- H1: Página no encontrada
- Texto: La página que buscas no existe o cambió de lugar.
- Línea de ruta: `GET {ruta} → 404`, con la ruta que el visitante intentó abrir (si no se puede leer, la línea no se muestra).
- Botón: `← Volver al inicio` (a `/`). Enlaces: `Ver proyectos` (a `/#proyectos`) · `Contactar` (a `/#contacto`).
- Título de la pestaña: Página no encontrada | Ottoniel Menéndez

## Assets

Optimizados en WebP: `bg.webp`, `cover.webp`, `hs_glasses.webp`, `hero_poster.webp`, `echo_poster.webp`, `echo.webp`, `portafolio.webp`. Videos: `hero_loop.mp4` (hero) y `echo_preview.mp4` (tráiler de Echo, 720×900, sin audio, 1,1 MB).
`cover.webp` queda solo como respaldo para un proyecto nuevo sin captura.
Imagen para redes (`og.jpg`): 1200×630, fondo `hero_poster.webp`, "Ottoniel Menéndez" y "Full Stack Developer" en Space Grotesk, sin la palabra "Portafolio".
Favicon: "OM" en Space Grotesk 600, color `text` sobre `bg` (`src/app/icon.svg`).
URL del sitio: por ahora `*.vercel.app`, leída de `NEXT_PUBLIC_SITE_URL` para cambiarla cuando haya dominio (sin ella, se usa el dominio de producción de Vercel).

Colores y tipografía: ver `docs/diseno.md`.