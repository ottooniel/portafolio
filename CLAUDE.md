@AGENTS.md

# Portafolio de Ottoniel Menéndez

Sitio estático de una sola página: hero, sobre mí, proyectos, experiencia, stack y contacto. Es un portafolio simple; la parte full stack se demuestra en los proyectos que enlaza, no en el sitio.

## Fuentes de verdad

- `docs/contenido.md`: todos los textos del sitio. No inventes ni reescribas contenido: si falta algo, pregunta.
- `docs/diseno.md`: tokens y reglas visuales por sección. Si algo no está ahí, pregunta: no improvises diseño.
- `docs/plan.md`: plan de fases aprobado por Ottoniel. Sigue el orden y el alcance de cada fase; si hay que cambiarlo, propónlo antes.
- `public/`: assets ya optimizados (WebP, `hero_loop.mp4` y `echo_preview.mp4`). No agregues imágenes pesadas; todo nuevo va en WebP.

## Stack y decisiones

- Next.js (App Router, `src/`) + TypeScript + Tailwind. Exportación estática (`output: 'export'`): sin API routes, sin servidor, y `images.unoptimized: true`.
- Proyectos como MDX dentro del repo. Sin base de datos.
- Formulario de contacto con servicio externo (Formspree o Resend). Las claves van en variables de entorno, nunca en el repo.
- CI con GitHub Actions: lint, typecheck, build y Lighthouse. Dependabot para dependencias.
- Despliegue en Vercel con vista previa por PR. El sitio lleva `noindex` hasta que Ottoniel decida hacerlo público.
- Español primero. Versión en inglés en una segunda fase: no la implementes ahora.

## Comandos

- `npm run dev`: servidor de desarrollo
- `npm run lint`
- `npm run typecheck`: agrégalo en `package.json` como `tsc --noEmit` si no existe
- `npm run build`

## Flujo de trabajo (obligatorio)

- Nunca hagas push directo a `main`: está protegida. Todo entra por rama corta + PR + squash merge.
- Ramas: `feat/…`, `fix/…`, `docs/…`, `chore/…`.
- Commits convencionales en español: `feat: agregar sección hero`, `fix: corregir contraste del botón`, `docs: …`, `chore: …`.
- Trabaja por fases, una rama y un PR por fase. Al terminar una fase, detente y espera la revisión. No empieces la siguiente por tu cuenta.
- Antes de cada commit corre `lint`, `typecheck` y `build`. No abras el PR si alguno falla.
- En fases visuales, abre el sitio en el navegador (escritorio y móvil) y compáralo con `docs/diseno.md` antes de abrir el PR. Describe en el PR qué verificaste.
- Descripción del PR: qué cambia, por qué y cómo se verificó.
- No cambies ajustes del repo en GitHub (rulesets, permisos, ramas protegidas).
- Nunca ejecutes `npm audit fix --force`. Para vulnerabilidades, `npm audit --omit=dev`; las de herramientas de desarrollo no bloquean.

## Convenciones de código

- Código, nombres y componentes en inglés. Textos visibles, commits y documentación en español.
- Componentes pequeños y reutilizables (`src/components`). Contenido separado del código (`src/content`).
- Estilos con Tailwind y tokens del tema; sin valores de color sueltos en los componentes.
- Server Components por defecto; `"use client"` solo donde haga falta (formulario, interacciones).
- No agregues dependencias nuevas sin explicar por qué en el PR.

## Calidad

- Accesibilidad: HTML semántico, un solo `h1`, contraste suficiente, foco visible con teclado, `alt` en imágenes.
- Hero: el video lleva `muted autoplay loop playsinline` y el póster `hero_poster.webp`. Con `prefers-reduced-motion` se muestra solo el póster. En móvil se prioriza el lado derecho del video (`object-position`).
- Rendimiento: objetivo de Lighthouse ≥ 90 en las cuatro categorías.

## Contenido y confidencialidad

- Nunca nombres al cliente de NIU Solutions ni muestres código, capturas ni datos internos de sus portales. Solo se dice "sector financiero".
- Sin etiquetas de estado: nada de "en desarrollo", "próximamente" ni "en progreso".
- Sin cifras, métricas ni logros inventados.
- Nombre público: "Ottoniel Menéndez".