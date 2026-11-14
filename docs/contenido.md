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
- Debajo: enlace a GitHub y "Guatemala". Las tecnologías ya van en la frase; no se repiten como etiquetas.

## Sobre mí

Soy desarrollador full stack en Guatemala y estudio Ingeniería en Sistemas de Información y Ciencias de la Computación en la Universidad Mariano Gálvez. Desde diciembre de 2024 trabajo en NIU Solutions construyendo portales web para el sector financiero sobre HubSpot CMS, con JavaScript, funciones serverless y datos en HubDB.

Me gusta cuidar el producto completo: desde la pantalla que usa el agente hasta cómo el área de negocio puede cambiarla sin tocar código.

Datos: Guatemala · UMG (en curso) · NIU Solutions desde dic. 2024

### Cómo trabajo

1. **Diseño antes de código.** Defino contenido, estructura y diseño antes de programar. Este sitio empezó como maqueta.
2. **Ramas cortas y PR.** Cada cambio vive en una rama corta y entra a main por pull request, aunque trabaje solo.
3. **Historial legible.** Commits convencionales (feat, fix, docs), tags de versión y CHANGELOG.
4. **CI en cada cambio.** Lint, typecheck, build y Lighthouse antes de integrar. main siempre se puede desplegar.

Regla: estos cuatro puntos tienen que ser verdad en el repo cuando el sitio se publique.

## Proyectos

Cuatro tarjetas, en este orden: Echo, Este portafolio, Portal 360, Portal para agentes de campo.

### Echo

Juego arcade · Build&Play de Open2

Juego de supervivencia en el navegador: cada ronda graba tu recorrido y lo convierte en un eco que te persigue en la siguiente. Entero en 32 KB, sin librerías ni assets, con simulación determinista a 60 Hz.

- Arquitectura: bucle de juego con paso fijo a 60 Hz · render en Canvas 2D · sonido generado con Web Audio
- Stack: JavaScript, Canvas 2D, Web Audio
- Medio: tráiler del juego en bucle, sin sonido (`echo_preview.mp4`, póster `echo_poster.webp`). El tráiler confirma: index.html de 30.380 bytes y "hasta el sonido es código".
- Jugar: https://ottooniel.github.io/echo/
- Repositorio: https://github.com/ottooniel/echo

### Este portafolio

Sitio estático con contenido en MDX, CI con lint, typecheck, build y Lighthouse, y vista previa por PR.

- Arquitectura: Next.js con exportación estática · contenido en MDX · CI en GitHub Actions con vista previa por PR
- Stack: Next.js, TypeScript, Tailwind, GitHub Actions
- Imagen: captura del hero del sitio ya construido (mientras tanto, `hero_poster.webp`)
- Repositorio: https://github.com/ottooniel/portafolio

### Portal 360

Caso de estudio · Proyecto privado de cliente, sin demo pública

- Contexto: portal de atención al cliente para el sector financiero. Los agentes ven toda la información del cliente en una sola pantalla y gestionan sus tickets, como parte de la migración de un sistema anterior a HubSpot.
- Mi rol: desarrollé la mayor parte, del frontend a la integración con funciones serverless de HubSpot.
- Qué construí: búsqueda de clientes, ficha del cliente y creación guiada de tickets en 3 pasos con seguimiento de gestiones.
- Decisión clave: formularios dinámicos configurados desde tablas HubDB, para que el área de negocio cambie razones, asuntos y campos sin tocar código.
- Resultado: los usuarios describieron la experiencia como fluida e intuitiva.
- Stack: HubSpot CMS, HubL, JavaScript, funciones serverless, HubDB
- Visual: diagrama propio simplificado, sin datos ni marca del cliente.

### Portal para agentes de campo

Caso de estudio · Proyecto privado de cliente, sin demo pública

- Contexto: portal responsive de ventas y cobranza en campo.
- Mi rol: desarrollé gran parte del portal.
- Qué construí: agenda, planificación de visitas, formularios de visita y cobranza, cotizador de productos de crédito y administración de usuarios y roles.
- Decisión clave: roles y permisos (vendedor, supervisor, administrador) administrados desde HubDB, con autenticación contra una API externa e integración con la API de HubSpot.
- Integraciones: APIs de Google para ubicar clientes y sucursales en mapa y manejar rutas de visita.
- Stack: HubSpot CMS, JavaScript, APIs de Google, HubDB

## Experiencia

**Ingeniero de software · NIU Solutions** · dic. 2024 – Actualidad · Híbrido

- Portales web para el sector financiero sobre HubSpot CMS (HubL, JavaScript, funciones serverless y HubDB).
- Portal 360: desarrollé la mayor parte, del frontend a la integración con funciones serverless.
- Portal para agentes de campo: desarrollé gran parte; mapas y rutas con APIs de Google, roles y permisos desde HubDB, autenticación contra una API externa e integración con la API de HubSpot.

**Educación:** Ingeniería en Sistemas de Información y Ciencias de la Computación · Universidad Mariano Gálvez de Guatemala · En curso

**Certificaciones** (nombre · emisor, sin enlaces a las credenciales):

- Registered Scrum Basics · Scrum Inc.
- Curso de Angular 17 · Platzi
- ISC2 Candidate · ISC2
- Endpoint Security · Cisco
- Introduction to Cybersecurity · Cisco
- Networking Devices and Initial Configuration · Cisco

## Stack

- Frontend: React, Next.js, TypeScript, Tailwind CSS, HubL
- Backend: Node.js, funciones serverless
- Datos: MongoDB, MySQL, HubDB
- CMS: HubSpot CMS
- Herramientas: Git, GitHub, GitHub Actions, APIs de Google

## Contacto

- Título: ¿Tienes un proyecto o una oportunidad?
- Texto: Escríbeme y te respondo lo antes posible.
- Formulario: Nombre · Correo · Mensaje · botón `Enviar mensaje`
- Mensaje de éxito: ¡Gracias! Recibí tu mensaje y te responderé pronto.
- Mensaje de error: No se pudo enviar. Inténtalo de nuevo o escríbeme a ottonielm64@gmail.com.
- Enlaces:
  - GitHub: https://github.com/ottooniel
  - LinkedIn: https://www.linkedin.com/in/ottoniel-men%C3%A9ndez/
  - Correo: ottonielm64@gmail.com
- Sin CV descargable por ahora.
- Pie: © 2026 Ottoniel Menéndez · GitHub · LinkedIn · Volver arriba ↑

## Assets

Optimizados en WebP: `bg.webp`, `cover.webp`, `hs_glasses.webp`, `hero_poster.webp`, `echo_poster.webp`, `echo.webp`. Videos: `hero_loop.mp4` (hero) y `echo_preview.mp4` (tráiler de Echo, 720×900, sin audio, 1,1 MB).
`cover.webp` queda solo como respaldo para un proyecto nuevo sin captura.
Pendiente: imagen para redes (`og`) en JPG de 1200×630, con su nombre y cargo.

Colores y tipografía: ver `docs/diseno.md`.