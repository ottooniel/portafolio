# Plan de implementación por fases — Portafolio de Ottoniel Menéndez

## Contexto

El repo (`portafolio/`, remoto `ottooniel/portafolio`) solo tiene la plantilla de create-next-app (Next 16.4.6, React 19.3, Tailwind 4.3, fuentes Geist, `lang="en"`), los docs y los assets en `public/`. No hay `src/components`, `src/content`, `.github/`, script `typecheck`, ni `output: 'export'`. Este plan convierte `docs/contenido.md` + `docs/diseno.md` en el sitio, una rama y un PR por fase, según el flujo de `CLAUDE.md`.

Aprobado por Ottoniel el 2026-11-13. Si hay que cambiar el orden o el alcance de una fase, se propone antes y se actualiza este archivo en el mismo PR.

## Avance

- [x] Fase 0 — Base
- [ ] Fase 1 — CI y Dependabot
- [ ] Fase 2 — Nav + hero
- [ ] Fase 3 — Sobre mí + Cómo trabajo
- [ ] Fase 4 — Proyectos
- [ ] Fase 5 — Experiencia + Stack
- [ ] Fase 6 — Contacto + pie
- [ ] Fase 7 — SEO, accesibilidad, og, 404 y pulido
- [ ] Fase 8 — Despliegue y release v1.0.0

## Reglas comunes a todas las fases

- Arranque: `git switch main && git pull --prune && git switch -c <rama>`.
- Antes de cada commit y del PR: `npm run lint && npm run typecheck && npm run build` (los tres en verde).
- Antes de tocar una API de Next, leer su guía en `node_modules/next/dist/docs/` (AGENTS.md: esta versión tiene cambios incompatibles).
- Fases visuales: `npm run dev`, revisar a 1440 px y 390 px contra `docs/diseno.md`, navegar todo con teclado (foco visible) y describir en el PR lo verificado.
- Textos solo desde `docs/contenido.md`, vía `src/content/`. Colores solo por tokens.
- Al cerrar la fase: marcar la casilla en `docs/plan.md` dentro del mismo PR y detenerse a esperar revisión.
- Sin dependencias nuevas salvo las indicadas (se justifican en el PR): `@next/mdx` + `@mdx-js/loader` + `@mdx-js/react` + `@types/mdx` (fase 4). Nada más.
- Sin tests unitarios: el sitio no tiene lógica que los justifique; las barreras son lint, typecheck, build y Lighthouse.

- Puntos de quiebre (`diseno.md`): navegación móvil < 768 px; dos columnas desde 1024 px.

## Cambio al orden sugerido

Se mantiene el orden 0–8 con **un ajuste**: la *conexión* del repo a Vercel (solo vistas previas) pasa a la fase 1; la fase 8 queda como producción + release.

Razón: `CLAUDE.md` exige "vista previa por PR" y revisión visual en cada fase; si Vercel se conecta en la fase 8, las fases 2–7 se revisan sin vista previa y el punto "CI en cada cambio / vista previa por PR" no es verdad durante casi todo el proyecto. El riesgo es nulo porque el `noindex` entra en la fase 0. Es un paso manual de Ottoniel (confirmado); la captura de la fase 7 se toma de esa vista previa.

---

## Fase 0 — Base

- **Objetivo:** dejar el esqueleto técnico y visual sobre el que se montan las secciones.
- **Entra:** tokens de color en `@theme`; tres fuentes con `next/font/google`; layout raíz (`lang="es"`, metadata de título/descripción, `robots: noindex, nofollow`); exportación estática; script `typecheck`; estilos base (fondo `bg`, foco visible global de 2 px blanco con offset 4 px, utilidad de contenedor 1200 px, `scroll-behavior` suave solo sin `prefers-reduced-motion`); página con un `<main>` y un `h1` mínimo; limpieza de la plantilla.
- **No entra:** ninguna sección, nav, componentes, og, CI.
- **Rama / PR:** `chore/base-del-proyecto` · `chore: configurar base del proyecto (tokens, fuentes, exportación estática)`
- **Archivos:**
  - `next.config.ts`: `output: 'export'`, `images.unoptimized: true`. Quitar `cacheComponents` y `partialPrefetching` (PPR no aporta en un export estático de una página; se confirma con el build y se documenta en el PR). Se conserva la regla de Turbopack para Tailwind.
  - `package.json`: `"typecheck": "tsc --noEmit"`.
  - `src/app/globals.css`: tokens (`--color-bg`, `bg-alt`, `text`, `text-body`, `text-muted`, `accent` ← `--accent`, `line`, `line-strong`, `outline-num`, `danger`), `--font-display/sans/mono`, foco, contenedor. Se elimina el tema claro/oscuro de la plantilla.
  - `src/app/layout.tsx`: Space Grotesk (500/600/700), Inter (400/500/600), JetBrains Mono (500); metadata.
  - `src/app/page.tsx`: placeholder mínimo.
  - `src/app/icon.svg`: favicon "OM" (`contenido.md` → Assets); se borra `src/app/favicon.ico` de la plantilla.
  - `.gitignore`: `!.env.example`.
- **Criterios de aceptación:**
  - `npm run build` genera `out/index.html` sin advertencias de config.
  - `out/index.html` contiene `<html lang="es">`, el título y la descripción de `contenido.md` y `<meta name="robots" content="noindex, nofollow">`.
  - Las clases `bg-bg`, `text-text-muted`, `text-accent`, `border-line`, `font-display`, `font-mono` existen y resuelven a los valores de `diseno.md`; cambiar `--accent` cambia el acento en todo el sitio.
  - No queda ningún color suelto, ni Geist, ni assets de la plantilla.
  - Tab sobre un enlace muestra el contorno blanco de 2 px.
- **Verificación:** `npm run lint`, `npm run typecheck`, `npm run build`; `grep -c noindex out/index.html`; `npm run dev` y revisar en el navegador fondo `#030a1a`, las tres familias cargadas (DevTools → Computed) y el foco.

## Fase 1 — CI y Dependabot

- **Objetivo:** que ningún PR entre sin lint, typecheck, build y Lighthouse.
- **Entra:** workflow de CI en `pull_request` y `push` a `main`; Lighthouse CI sobre `out/`; Dependabot (npm y github-actions, semanal, commits con prefijo `chore`). Pasos manuales de Ottoniel: conectar el repo a Vercel (solo vistas previas) y, después del merge, marcar el check `ci` como requerido en el ruleset.
- **No entra:** despliegue a producción, dominio, release, cambios de ajustes del repo por mi parte.
- **Rama / PR:** `chore/ci-y-dependabot` · `chore: agregar CI con GitHub Actions y Dependabot`
- **Archivos:**
  - `.github/workflows/ci.yml`: un job — checkout, `setup-node` (versión fijada en `.nvmrc`, caché npm), `npm ci`, `lint`, `typecheck`, `build`, Lighthouse con `treosh/lighthouse-ci-action` (acciones fijadas por versión; `permissions: contents: read`).
  - `lighthouserc.json`: `staticDistDir: ./out`, aserciones `error` con `minScore: 0.9` en performance, accessibility, best-practices y seo; `skipAudits: ["is-crawlable"]` mientras el sitio lleve `noindex` (sin esto SEO no puede llegar a 90).
  - `.github/dependabot.yml`, `.nvmrc`.
- **Criterios de aceptación:**
  - El PR de esta fase muestra el check en verde con los cuatro pasos y las cuatro puntuaciones ≥ 90.
  - Un error de tipos o de lint introducido a propósito en una rama de prueba hace fallar el check (se prueba y se descarta, sin mergear).
  - Dependabot aparece activo en Insights → Dependency graph tras el merge.
- **Verificación:** local `npm ci && npm run lint && npm run typecheck && npm run build`; `npx @lhci/cli autorun` local opcional; en GitHub, `gh pr checks <n>` y revisar el reporte de Lighthouse enlazado en el log.

## Fase 2 — Nav + hero

- **Objetivo:** primera pantalla completa, con menú móvil.
- **Entra:** barra superpuesta (80/64 px), enlaces de ancla, hamburguesa y menú a pantalla completa; hero con video, póster, capas de legibilidad, H1 en dos líneas, subtítulo, frase con tecnologías en `text`, botones y fila GitHub + "Guatemala". Anclas `#sobre-mi`, `#proyectos`, `#experiencia`, `#stack`, `#contacto` (las secciones destino llegan en fases siguientes).
- **No entra:** el contenido de las secciones, pie.
- **Rama / PR:** `feat/nav-y-hero` · `feat: agregar navegación y hero`
- **Archivos:**
  - `src/content/site.ts` (nuevo, crece por fase): nav, hero, enlaces sociales.
  - `src/components/Nav.tsx` (server) y `MobileMenu.tsx` (`"use client"`): menú sobre `<dialog>` nativo con `showModal()` — da atrapado de foco, `Esc` y devolución del foco sin librería ni código propio; solo se añade cerrar al elegir enlace y sincronizar `aria-expanded` / `aria-label`.
  - `src/components/Hero.tsx`, `Button.tsx` (primario, reutilizado en contacto), `TextLink.tsx` (subrayado fino, variante con ↗).
  - `src/app/page.tsx`.
- **Criterios de aceptación:**
  - Un solo `h1` ("Ottoniel" / "Menéndez" en dos líneas), tamaños de la tabla de escala en 1440 y 390.
  - En la frase, solo React, Node.js, MongoDB y MySQL van en `text`.
  - Los enlaces de la nav usan `/#seccion` (sirven igual en la home y en la 404 de la fase 7).
  - Menú abierto con las medidas de `diseno.md` → Navegación (barra de 64 px, padding de lista, filas y bloque inferior).
  - Hover del botón circular: borde a `accent`.
  - `<video muted autoplay loop playsinline poster="/hero_poster.webp">`; `object-position: right center` en escritorio y `78% center` en móvil; con `prefers-reduced-motion: reduce` solo se ve el póster y el video no se reproduce.
  - Móvil: degradado vertical de legibilidad y contenido anclado abajo; escritorio: desvanecido inferior de 160 px. Altura mínima 810 / 760 px.
  - Botón primario 48 px de alto con texto `bg` sobre `text`; "Contactar" con subrayado que pasa a `accent`; botón circular de 44 px con `aria-label` que incluye "abre en una pestaña nueva" y `rel="noopener noreferrer"`.
  - < 768 px: hamburguesa de 44 px con `aria-label="Abrir menú"` y `aria-expanded`; abierto muestra 5 enlaces numerados 01–05, correo y "GITHUB ↗ · LINKEDIN ↗"; se cierra con X, `Esc` y al elegir enlace; el foco no sale del panel y vuelve a la hamburguesa al cerrar.
  - ≥ 768 px: cinco enlaces `text-muted` → hover `text`, sin hamburguesa.
  - Sin chips de tecnologías; ningún color suelto.
- **Verificación:** comandos comunes; navegador a 1440 y 390; recorrido completo con Tab/Shift+Tab/Enter/Esc; DevTools → Rendering → emular `prefers-reduced-motion`; revisar que el video no bloquea el LCP (póster visible de inmediato); Lighthouse del CI ≥ 90.

## Fase 3 — Sobre mí + Cómo trabajo

- **Objetivo:** sección `[ 01 ] Perfil`.
- **Entra:** rótulo de sección + H2, foto, dos párrafos, lista de definiciones (UBICACIÓN, ESTUDIOS, TRABAJO), bloque "CÓMO TRABAJO" con cuatro puntos.
- **No entra:** `bg.webp`, iconos.
- **Rama / PR:** `feat/sobre-mi` · `feat: agregar sección Sobre mí y Cómo trabajo`
- **Archivos:** `src/components/SectionHeader.tsx` (rótulo `[ 0N ] Nombre` + H2, reutilizado en todas las secciones), `Section.tsx` (borde superior, padding 112/72, fondo `bg`/`bg-alt`, `id`), `About.tsx`, `HowIWork.tsx`; `src/content/site.ts`; `page.tsx`.
- **Criterios de aceptación:**
  - Escritorio: foto 400 px en 4:5 a la izquierda (`object-position: top`, radio 6, borde, sin brillo), texto a la derecha con 96 px de separación. Móvil: título → foto a todo el ancho → texto.
  - Foto con `alt="Retrato de Ottoniel Menéndez"`, `width`/`height` y `loading="lazy"` (sin salto de layout).
  - Dos columnas desde 1024 px. En los párrafos, solo "NIU Solutions" va en `text`.
  - Datos en `<dl>` con hairlines y etiqueta mono de 140 px, con los valores tal cual de `contenido.md` (Guatemala · UMG (en curso) · NIU Solutions desde dic. 2024).
  - "CÓMO TRABAJO" es un `h3`; cuatro puntos con número `01`–`04` en `accent`; cuadrícula `repeat(auto-fit, minmax(240px, 1fr))` en escritorio y lista vertical con hairlines en móvil.
  - Textos idénticos a `contenido.md`; jerarquía h1 → h2 → h3 sin saltos.
- **Verificación:** comandos comunes; navegador 1440/390; comparar textos contra `contenido.md`; árbol de accesibilidad de DevTools para encabezados y `dl`.

## Fase 4 — Proyectos

- **Objetivo:** sección `[ 02 ] Trabajo seleccionado` con las cuatro filas.
- **Entra:** contenido de proyectos en MDX; fila editorial en sus dos variantes (pública / caso de estudio); tráiler de Echo; miniatura de Este portafolio; diagramas en HTML/CSS de Portal 360 y Portal de campo.
- **No entra:** páginas de detalle por proyecto, captura real del portafolio (fase 7), imágenes de los portales.
- **Rama / PR:** `feat/proyectos` · `feat: agregar sección de proyectos con tráiler y diagramas`
- **Archivos:**
  - `next.config.ts` (envolver con `@next/mdx`, sin plugins de remark: los metadatos van como `export const meta` en cada MDX, así no hacen falta dependencias de frontmatter), `mdx-components.tsx`.
  - `src/content/projects/{echo,portafolio,portal-360,portal-campo}.mdx` + `index.ts` (orden y tipo `ProjectMeta`).
  - `src/components/Projects.tsx`, `ProjectRow.tsx`, `EchoTrailer.tsx` (`"use client"`: IntersectionObserver + `matchMedia`), `FlowDiagram.tsx` (un componente, dos usos, datos por props).
- **Criterios de aceptación:**
  - Orden 01 Echo, 02 Este portafolio, 03 Portal 360, 04 Portal para agentes de campo; cada fila es un `<article>` con `h3`, hairline y 72 px de padding.
  - Desde 1024 px: medio ≈ 55 % a la izquierda y texto ≈ 45 % a la derecha, separación 72 px (48 px entre 1024 y 1279 px). Debajo: una columna, medio arriba.
  - Etiquetas sobre el medio: `01 / ECHO`, `02 / PORTAFOLIO`, `03 / PORTAL 360`, `04 / AGENTES DE CAMPO`. Etiqueta de Este portafolio: "Sitio web".
  - Número grande solo trazo (`aria-hidden`), pasa a `accent` en hover de la fila en 250 ms.
  - Echo: `<video muted loop playsinline preload="none" poster="/echo_poster.webp" aria-hidden="true">` sin controles; marco 16:10 con fondo negro (4:5 en móvil); reproduce solo en pantalla y se pausa al salir; con movimiento reducido queda en póster. En Network no se descarga `echo_preview.mp4` hasta acercarse a la fila.
  - Públicos: descripción, "Arquitectura" y "Stack", enlaces "Jugar ↗" / "Repositorio ↗" a las URLs de `contenido.md`. Casos: `<dl>` en 2 columnas (Contexto, Mi rol, Qué construí o Integraciones, Decisión clave con etiqueta `accent`, Resultado solo en Portal 360), línea de stack mono, **sin enlaces**.
  - Diagramas: tres nodos en fila también en móvil, nodo HubDB con borde `accent`, nodo central del portal de campo con borde `.55`, contenedor `role="img"` con `aria-label` que describe el flujo, pie "Diagrama simplificado, sin datos del cliente".
  - Confidencialidad: `grep` del repo sin el nombre del cliente; solo "sector financiero". Sin etiquetas de estado.
- **Verificación:** comandos comunes; navegador 1440/390; pestaña Network para la carga diferida; emular movimiento reducido; lector de pantalla o árbol de accesibilidad para los diagramas; Lighthouse del CI ≥ 90 (el peso del video no debe afectar por `preload="none"`).

## Fase 5 — Experiencia + Stack

- **Objetivo:** secciones `[ 03 ] Trayectoria` y `[ 04 ] Herramientas`.
- **Entra:** puesto en NIU Solutions, educación, seis certificaciones (sin enlaces), cinco filas de stack.
- **No entra:** logos, chips, enlaces a credenciales.
- **Rama / PR:** `feat/experiencia-y-stack` · `feat: agregar secciones de experiencia y stack`
- **Archivos:** `src/components/Experience.tsx`, `Stack.tsx`; `src/content/site.ts`; `page.tsx`. Reutilizan `Section` y `SectionHeader`.
- **Criterios de aceptación:**
  - Experiencia en `bg`: columna izquierda de 240 px desde 1024 px (fechas mono `DIC. 2024 — ACTUALIDAD`, `HÍBRIDO`), cargo "Ingeniero de software" como `h3` de 28/24 px, viñetas a máx. 720 px. Móvil: una columna con la etiqueta arriba.
  - Certificaciones: nombre a la izquierda y emisor mono a la derecha (debajo en móvil), separadores `.07`, como lista `<ul>`.
  - Stack en `bg-alt`: `<dl>` de cinco filas, tecnologías en Space Grotesk 500 de 24/19 px con ` · ` en `text-muted`.
  - Cargo del hero "Full Stack Developer" y de experiencia "Ingeniero de software" (regla de `contenido.md`).
- **Verificación:** comandos comunes; navegador 1440/390; cotejo de textos con `contenido.md`.

## Fase 6 — Contacto + pie

- **Objetivo:** sección `[ 05 ] Contacto` funcional y pie.
- **Entra:** columna de texto con `mailto:` y enlaces; formulario (Nombre, Correo, Mensaje) enviado por `fetch` a **Formspree**; estados enviando / enviado / error con loader; pie con año calculado en el build.
- **No entra:** CV descargable, backend propio, captcha de terceros.
- **Rama / PR:** `feat/contacto-y-pie` · `feat: agregar formulario de contacto y pie de página`
- **Decisión:** Formspree y no Resend. Resend necesita una clave secreta en un servidor y el sitio es un export estático sin API routes; Formspree recibe el POST directo desde el navegador y su ID de formulario es público por diseño. Sin SDK: `fetch` con `Accept: application/json`.
- **Archivos:** `src/components/Contact.tsx`, `ContactForm.tsx` (`"use client"`), `Footer.tsx`; `.env.example` (`NEXT_PUBLIC_FORMSPREE_ID=`); `src/content/site.ts`; `page.tsx`.
- **Criterios de aceptación:**
  - Cada campo con `<label>` asociado, `required`, `type="email"` y `autocomplete` (`name`, `email`); validación nativa del navegador; campo trampa oculto (`_gotcha`) contra spam.
  - Campos sin caja: solo línea inferior `line-strong`, 52 px de alto (mensaje ≥ 128 px), línea `accent` con foco además del contorno de foco.
  - Enviando: `aria-busy="true"`, campos de solo lectura al 60 %, botón deshabilitado (`cursor: progress`) con el texto `Enviando` y el anillo SVG de 16 px en lugar de la flecha (no gira con `prefers-reduced-motion`); `min-width: 196px` para que el botón no cambie de ancho. Sin doble envío.
  - Enviado: campos vacíos y región `role="status"` `aria-live="polite"` con hairline, etiqueta `MENSAJE ENVIADO` en `accent` y el texto de éxito.
  - Error (fallo de red o respuesta no-OK): los campos conservan lo escrito, el botón dice `Reintentar →`, y la misma región muestra `NO SE ENVIÓ` en `danger` con el correo como enlace `mailto:`. Sin cajas ni iconos; el estado no depende solo del color.
  - Si falta `NEXT_PUBLIC_FORMSPREE_ID`, el build no se rompe y el envío cae al mensaje de error.
  - Ningún ID ni clave en el repo. Escritorio dos columnas (96 px); móvil una columna y botón a todo el ancho.
  - Pie: "© {año} Ottoniel Menéndez" (`new Date().getFullYear()` en el build) + GitHub, LinkedIn y "Volver arriba ↑" (ancla al inicio); en móvil los enlaces arriba.
- **Verificación:** comandos comunes; con el ID en `.env.local`, enviar un mensaje real y confirmar que llega; ver el estado "enviando" con la red limitada (DevTools → Network → Slow 3G); forzar el error (DevTools → Network → Offline) y reintentar; recorrer el formulario solo con teclado; comprobar el anuncio de la región `status` en el árbol de accesibilidad; navegador 1440/390.
- **Requiere de Ottoniel:** crear el formulario en Formspree y cargar el ID como variable de entorno en Vercel (Preview y Production).

## Fase 7 — SEO, accesibilidad, og, 404 y pulido

- **Objetivo:** cerrar calidad antes de publicar.
- **Entra:** metadata completa (Open Graph, Twitter, `metadataBase` desde `NEXT_PUBLIC_SITE_URL`); imagen `og` 1200×630 (fondo `hero_poster.webp`, "Ottoniel Menéndez" y "Full Stack Developer" en Space Grotesk, sin "Portafolio"); captura real del hero a 1440 px en 16:10, tomada de la vista previa de Vercel, para la fila "Este portafolio"; página 404 con su diseño (`diseno.md` → Página 404); auditoría de accesibilidad y repaso visual fino sección por sección.
- **No entra:** quitar el `noindex`, `sitemap.xml`, analítica, versión en inglés.
- **Rama / PR:** `feat/seo-y-accesibilidad` · `feat: completar SEO, accesibilidad, imagen og y página 404`
- **Imagen og:** primero `src/app/opengraph-image.tsx` (generada en el build). Si no funciona con `output: 'export'`, un JPG 1200×630 estático. Se decide con el build y se anota en el PR.
- **Archivos:** `src/app/layout.tsx`, `src/app/not-found.tsx`, `src/components/NotFoundPath.tsx` (`"use client"`: lee `window.location.pathname`), `src/app/opengraph-image.tsx` (o el JPG), `public/portafolio.webp`, `src/content/projects/portafolio.mdx`, `src/content/site.ts` (textos de la 404), `.env.example` (`NEXT_PUBLIC_SITE_URL=`), ajustes puntuales en componentes; `docs/diseno.md` y `docs/contenido.md` (quitar los "pendiente" ya resueltos).
- **Criterios de aceptación:**
  - `out/404.html` existe: misma nav, pie mínimo, un solo `h1` "Página no encontrada", título de pestaña propio, "404" decorativo solo trazo con `aria-hidden`, fondo fijo `hero_poster.webp` (sin video) con su degradado, botón "← Volver al inicio" a `/` y enlaces a `/#proyectos` y `/#contacto`. La línea `GET {ruta} → 404` aparece solo cuando hay ruta y no desborda con rutas largas. Revisada a 1440 y 390 (botón a todo el ancho en móvil).
  - `out/index.html` con `og:title`, `og:description`, `og:image` (URL absoluta), `twitter:card=summary_large_image` y sigue con `noindex`.
  - No hay `robots.txt` con `Disallow` (bloquearía que los buscadores lean el `noindex`).
  - Lighthouse ≥ 90 en las cuatro categorías en el CI; cero fallos automáticos de accesibilidad.
  - Pasada manual: un solo `h1`, orden de encabezados, todo alcanzable y operable con teclado, foco siempre visible, áreas táctiles ≥ 44 px, contraste según `diseno.md`, sin scroll horizontal a 320 px, zoom al 200 % usable, ningún movimiento con `prefers-reduced-motion` salvo transiciones ≤ 250 ms.
  - Imágenes con `width`/`height` (CLS ≈ 0); ningún asset nuevo fuera de WebP salvo la `og`.
  - Los cuatro puntos de "Cómo trabajo" son verdad en el repo (ramas + PR, commits convencionales, CI activo).
- **Verificación:** comandos comunes; `npx serve out` y revisar el build estático real (no solo `dev`); abrir una ruta inexistente en la vista previa de Vercel y comprobar la 404; Lighthouse en DevTools móvil y escritorio; inspección de `<head>`; recorrido con teclado y lector de pantalla (NVDA) de punta a punta; vista previa de Vercel en un teléfono real.

## Fase 8 — Despliegue y release v1.0.0

- **Objetivo:** producción en Vercel y primera versión etiquetada.
- **Entra:** `README.md` propio (qué es, stack, comandos, flujo), `CHANGELOG.md` (formato Keep a Changelog, escrito a mano), `package.json` a `1.0.0`, `metadataBase` con la URL final, casillas del plan completas.
- **No entra:** quitar el `noindex` (decisión aparte de Ottoniel, irá como PR `feat:` propio y v1.1.0), dominio propio si no está definido, inglés.
- **Rama / PR:** `chore/release-1.0.0` · `chore: preparar release v1.0.0`
- **Archivos:** `README.md`, `CHANGELOG.md`, `package.json`, `package-lock.json`, `src/app/layout.tsx`, `docs/plan.md`.
- **Criterios de aceptación:**
  - Producción en Vercel sirve el build de `main` y responde con `noindex`.
  - Las variables de entorno están en Vercel y el formulario funciona en producción.
  - Tras el merge: tag `v1.0.0` sobre el commit de `main` y GitHub Release con las notas del CHANGELOG.
  - "Historial legible" es verdad: commits convencionales, tag y CHANGELOG presentes.
- **Verificación:** comandos comunes; abrir la URL de producción en escritorio y móvil; `curl -s <url> | grep -i robots`; enviar un mensaje de prueba; Lighthouse contra la URL real; `git tag -l` y `gh release view v1.0.0`.
- **Requiere de Ottoniel:** mergear el PR y crear el tag `v1.0.0` y el GitHub Release después del merge.

---

## Decisiones tomadas

Las 21 dudas del plan inicial quedaron resueltas por Ottoniel el 2026-11-13 y están incorporadas en `contenido.md`, `diseno.md` (v4) y en las fases de arriba.

- **Lighthouse:** se omite solo `is-crawlable` mientras dure el `noindex`. Al quitar el `noindex`, se quita también esa omisión.
- **Formulario:** Formspree. Ottoniel crea la cuenta y el formulario antes de la fase 6.
- **Vercel:** Ottoniel conecta el repo en la fase 1 (solo vistas previas).
- **`next.config.ts`:** se quitan `cacheComponents` y `partialPrefetching` en la fase 0.
- **Imagen og:** la compongo en la fase 7; `opengraph-image` de Next si funciona con export estático, si no un JPG 1200×630.
- **URL del sitio:** `*.vercel.app` por ahora, leída de `NEXT_PUBLIC_SITE_URL`.
- **Favicon:** "OM" en `src/app/icon.svg` (fase 0).
- **Maqueta:** es privada; no se abre. Manda `diseno.md`.
- **Release:** el tag `v1.0.0` y el GitHub Release los crea Ottoniel después del merge.
- **Ruleset:** Ottoniel marca el check `ci` como requerido después de la fase 1.
- **Año del pie:** calculado en el build.

## Dudas abiertas

Ninguna bloquea el arranque de la fase 0. Dos puntos se confirman con el build, no con una decisión:

1. Si `opengraph-image.tsx` funciona con `output: 'export'` (fase 7). Si no, JPG estático.
2. Si el build queda limpio al quitar `cacheComponents` / `partialPrefetching` (fase 0).
