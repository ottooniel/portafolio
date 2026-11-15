# Diseño del portafolio de Ottoniel Menéndez (v5)

Especificación visual para implementar. Los textos viven en `docs/contenido.md`; este archivo define cómo se ven. Lo que no esté aquí, se pregunta: no se improvisa.

Maqueta de referencia (solo para Ottoniel): https://claude.ai/artifact/NsQJgyMtq3zUTLQLRFV8UF. Escritorio 1440 px y móvil 390 px. Esta especificación es autosuficiente y manda sobre la maqueta si hay diferencias.

## Cobertura de la maqueta

- Escritorio: la página completa (nav, hero, Sobre mí con Cómo trabajo, cuatro proyectos, Experiencia, Stack, Contacto y pie).
- Móvil: la página completa, pero en Proyectos solo se dibujaron Echo y Portal 360; Este portafolio y Portal para agentes de campo siguen el mismo patrón.
- Móvil con el menú abierto: tablero aparte.
- Página 404: escritorio y móvil.
- Estados del formulario de contacto (enviando, enviado, error): tablero aparte.

## Dirección de estilo

Editorial, plano y sobrio. La identidad (azul marino casi negro y video de circuitos del hero) se conserva solo en el hero; el resto de la página es limpio, con mucho aire y jerarquía tipográfica. La regla es **quitar**, no agregar:

- Sin tarjetas con fondo translúcido ni brillos (glow), sin sombras, sin degradados decorativos, sin emojis.
- Sin chips ni píldoras: las tecnologías van como una línea de texto mono separada por ` · `.
- Separación entre secciones y filas con líneas finas (hairlines), no con cajas.
- Una sola vez por pantalla el acento azul: etiquetas mono, números de sección, hover y enlaces. Nunca como relleno grande.
- Nada de texto "decorativo" ni frases de relleno; el copy es el de `contenido.md`.

## Tokens de color

| Token | Valor | Uso |
|---|---|---|
| `bg` | `#030a1a` | Fondo de página y hero |
| `bg-alt` | `#050d22` | Fondo alterno de secciones (Proyectos, Stack) |
| `text` | `#f0f2f6` | Títulos y texto destacado |
| `text-body` | `#c3cad6` | Párrafos |
| `text-muted` | `#929baa` | Etiquetas, notas, subtítulo del hero, enlaces del nav |
| `accent` | `#1E90FF` | Etiquetas mono, números de sección, borde del nodo HubDB, hover |
| `line` | `rgba(255,255,255,.10)` | Hairlines de sección y filas |
| `line-strong` | `rgba(255,255,255,.22)` | Nodos de diagrama, botón circular |
| `outline-num` | `rgba(255,255,255,.30)` | Trazo de los números grandes 01–04 y del 404 |
| `danger` | `#ff7a7a` | Solo la etiqueta y la línea del estado de error del formulario (≈ 7.7:1 sobre `bg`) |
| `white` | `#ffffff` | Contorno de foco y hover del botón primario |
| `black` | `#000000` | Fondo del marco del tráiler de Echo |

El acento se cambia desde una sola variable CSS (`--accent`). Los demás colores se definen como variables en `globals.css` / `@theme` de Tailwind.

Contraste (calculado): `text` sobre `bg` ≈ 18:1; `text-body` ≈ 11:1; `text-muted` ≈ 6.5:1; `accent` sobre `bg` 6.1:1. El texto sobre fondo claro (`text` como relleno) usa `#030a1a`. Regla: nunca texto blanco sobre `#1E90FF` (3.2:1). El acento se usa solo como texto/línea sobre fondo oscuro.

## Tipografía

Tres familias con `next/font/google`:

- **Space Grotesk** (500, 600, 700): títulos y wordmark. Tracking `-0.035em` en títulos grandes, `-0.03em` en H3.
- **Inter** (400, 500, 600): cuerpo, botones, enlaces.
- **JetBrains Mono** (500): etiquetas, números `[ 01 ]`, datos, diagramas. Siempre pequeña, en mayúsculas con tracking amplio (`.12em`–`.14em`), salvo el texto de los nodos y la línea de stack.

Escala (escritorio / móvil):

| Elemento | Escritorio | Móvil | Peso |
|---|---|---|---|
| H1 hero (2 líneas: "Ottoniel" / "Menéndez") | `clamp(52px, 7.2vw, 104px)`, lh .98 | 52 px | 700 |
| Subtítulo hero | `clamp(26px, 3vw, 40px)`, color `text-muted` | 24 px | 600 |
| H2 de sección | 48 px, lh 1.02 | 36 px | 600 |
| H3 de proyecto | 36 px | 30 px | 600 |
| Frase del hero | 18 px, lh 1.65, máx. 520 px | 16 px | 400 |
| Cuerpo Sobre mí | 19 px, lh 1.7, máx. 620 px | 16 px | 400 |
| Cuerpo proyectos | 17 px (pública) / 15 px (definiciones) | 16 / 15 px | 400 |
| "Decisión clave" | 16 px | 16 px | 500, color `text` |
| Etiquetas mono | 11 px, `.12em`–`.14em` | 11 px | 500 |
| Número grande de proyecto | 72 px, solo trazo 1 px `outline-num` | 56 px | 600 |

Énfasis por color, no por negrita: dentro de texto `text-body`, algunas palabras van en `text`. En la frase del hero: React, Node.js, MongoDB y MySQL. En Sobre mí: solo "NIU Solutions".

## Espaciado y forma

- Contenedor: máx. 1200 px, centrado, padding lateral 24 px (móvil 20 px).
- Padding vertical de sección: 112 px (móvil 72 px). Cada sección empieza con `border-top: 1px solid line`.
- Fondo alterno: Sobre mí y Contacto en `bg`; Proyectos y Stack en `bg-alt`. Experiencia en `bg`.
- Radios: botón 6 px, foto 6 px, nodos de diagrama 4 px, botón circular 50 %.
- Cada sección abre con un rótulo mono `[ 0N ]  Nombre` (el número en `accent`, el texto en `text-muted`) y debajo el H2: `[ 01 ] Perfil` / Sobre mí, `[ 02 ] Trabajo seleccionado` / Proyectos, `[ 03 ] Trayectoria` / Experiencia, `[ 04 ] Herramientas` / Stack, `[ 05 ] Contacto` / el título de contacto de `contenido.md`.

## Puntos de quiebre

- < 768 px: navegación móvil (hamburguesa).
- ≥ 1024 px: dos columnas en Sobre mí, Proyectos y Contacto. Debajo de 1024 px, una columna (medio o foto arriba).
- Proyectos usa proporciones y no anchos fijos: medio ≈ 55 % y texto ≈ 45 %, con 72 px de separación (48 px entre 1024 y 1279 px).
- Experiencia y Stack mantienen la columna de etiqueta de 240 px desde 1024 px; debajo, la etiqueta va arriba.

## Navegación

- Barra fija, superpuesta al hero al cargar, alto 80 px (móvil 64 px), con hairline inferior `rgba(255,255,255,.08)`.
- Izquierda: el nombre "Ottoniel Menéndez" como texto (Space Grotesk 600, 18 px; móvil 17 px), enlace a `/`. Sin monograma, sin caja y sin raya. **Aparece solo cuando el hero sale de la pantalla**, para no repetir el H1 (ver "Comportamiento de la barra").
- Derecha (escritorio): Sobre mí, Proyectos, Experiencia, Stack, Contacto; Inter 14 px, peso 500, `text-muted`, hover `text`, separación 40 px.
- Móvil (< 768 px): botón hamburguesa de 44 px (dos líneas de 1.5 px, `aria-label="Abrir menú"`, `aria-expanded`).
- Comportamiento de la barra (la maqueta muestra solo el estado inicial, sobre el hero):
  - La barra es `position: fixed` arriba, ancho completo, z-index sobre el contenido. Al cargar es transparente, con el hairline inferior, y el nombre está oculto: solo se ven los enlaces (a la derecha) o la hamburguesa.
  - Cuando el hero sale de la pantalla (`IntersectionObserver` sobre el hero), la barra pasa a fondo `bg` sólido, mantiene el hairline y el nombre aparece a la izquierda con un fundido de 200 ms. Al volver al hero, se invierte. Con `prefers-reduced-motion: reduce` el cambio es inmediato.
  - Oculto significa `visibility: hidden` (no recibe foco ni lo lee un lector de pantalla); el espacio se conserva para que los enlaces no se muevan.
  - Sin JavaScript, el nombre queda visible y la barra con fondo `bg`.
  - Cada ancla (`#sobre-mi`, etc.) lleva `scroll-margin-top` igual al alto de la barra (80 px, móvil 64 px) para que el título de la sección no quede tapado.
  - En la 404 no hay hero: el nombre se muestra siempre y la barra va con fondo `bg`.
  - El menú móvil abierto es un panel aparte que cubre la página: su barra muestra siempre el nombre (el H1 queda tapado, así que no hay repetición).
- Menú abierto (maquetado): panel a pantalla completa con fondo `bg`, la misma barra de 64 px arriba (hairline inferior) con la hamburguesa convertida en X (`aria-label="Cerrar menú"`).
  - Lista: padding `32px 20px 0`. Cada fila: padding `20px 0`, hairline arriba (y abajo en la última), número mono 11 px en `accent` y texto en Space Grotesk 600 de 32 px con `line-height: 1`, separados 16 px y alineados a la línea base.
  - Bloque inferior: padding `24px 20px 40px`, separación 16 px. Correo en Inter 500 de 16 px; debajo "GITHUB ↗" y "LINKEDIN ↗" en mono 12 px, tracking .08em, `text-muted`, separados 24 px. Se cierra con la X, con `Esc` y al elegir un enlace; el foco queda atrapado mientras está abierto.

## Hero

- Altura mínima 810 px (móvil 760 px).
- Fondo: `hero_loop.mp4` a pantalla completa, `object-fit: cover`, `object-position: right center` (móvil `78% center`). Atributos `muted autoplay loop playsinline` y póster `hero_poster.webp`. Con `prefers-reduced-motion: reduce`, solo el póster.
- Capa de legibilidad en móvil: degradado vertical de `rgba(3,10,26,.55)` arriba a `bg` abajo. Abajo del hero, desvanecido de 160 px hacia `bg` en escritorio.
- Contenido alineado a la izquierda (en móvil, anclado abajo), en este orden: H1, subtítulo, frase, botones, fila de GitHub + ubicación.
- Capa de legibilidad en móvil, con tres paradas (como la maqueta): `rgba(3,10,26,.55)` arriba, `rgba(3,10,26,.2)` al 40 % y `bg` abajo. Reemplaza la descripción de dos paradas de arriba.
- Medidas (escritorio ≥ 768 px / móvil). El contenido va dentro del contenedor de 1200 px:
  - Posición: escritorio, centrado en vertical; el padding del contenido es 56 px arriba y 120 px abajo, medido debajo de la barra de 80 px. Móvil: anclado abajo, padding `40px 20px 72px`.
  - H1: Space Grotesk 700, `clamp(52px, 7.2vw, 104px)` (móvil 52 px), `line-height: .98`, tracking −.035em.
  - Subtítulo: margen superior 20 / 16 px; Space Grotesk 600, `clamp(26px, 3vw, 40px)` (móvil 24 px), `line-height: 1.1`, tracking −.03em, `text-muted`.
  - Frase: margen superior 28 / 22 px; 18 / 16 px, `line-height: 1.65`, `text-body`, ancho máximo 520 px.
  - Fila de botones: margen superior 40 / 32 px; separación entre botón y enlace 32 / 24 px; alineados al centro.
  - Botón primario: alto mínimo 48 px, padding horizontal 24 / 22 px, radio 6, texto Inter 15 px **600**, flecha a 10 px.
  - "Contactar": Inter 15 px 500, color `text`, subrayado fino a 4 px del texto.
  - Fila inferior: margen superior 56 / 40 px, separación 20 / 16 px. Círculo de 44 px con borde `rgba(255,255,255,.18)` (no `line-strong`), que contiene un ícono de código `</>` de 18 px (trazo 2, `path` "M8 8l-4 4 4 4M16 8l4 4-4 4"). Es un botón sin texto: lleva `aria-label="GitHub de Ottoniel (abre en una pestaña nueva)"`. Después, un separador vertical de 1 × 24 px en `rgba(255,255,255,.18)` y "Guatemala" en mono 12 px, tracking .08em, peso 400, `text-muted`, **tal cual está escrito (sin mayúsculas forzadas)**.
- Botones: primario relleno `text` (`#f0f2f6`) con texto `bg` y flecha →, 48 px de alto, radio 6, hover blanco puro; secundario es un enlace de texto "Contactar" con subrayado fino `rgba(240,242,246,.35)` que pasa a `accent` en hover. Separación 32 px entre ambos.
- Fila inferior: botón circular de 44 px con borde `line-strong` e icono de código (`<>`) que enlaza a GitHub (`aria-label` con "abre en una pestaña nueva"), una línea vertical de 24 px y "Guatemala" en mono 12 px `text-muted`.
- La línea de tecnologías (React · Node.js · MongoDB · MySQL) ya va dentro de la frase del hero; no se repite como chips.

## Sobre mí

- Escritorio: foto a la izquierda (400 px, proporción 4:5, `object-position: top`, radio 6, borde `rgba(255,255,255,.12)`, sin brillo) y texto a la derecha; separación 96 px, alineados arriba. Móvil: título, foto a todo el ancho y texto debajo.
- Dos párrafos de `contenido.md`. Debajo, lista de definiciones con hairlines (arriba de cada fila y abajo de la última): etiqueta mono a 140 px (UBICACIÓN, ESTUDIOS, TRABAJO) y valor en `text` 16 px. Sin iconos.
- Sin `bg.webp` en esta sección.

### Cómo trabajo (dentro de Sobre mí)
- Debajo de las dos columnas, a 96 px (móvil 56 px), un subtítulo mono "CÓMO TRABAJO" en `text-muted` (es un `h3`).
- Escritorio: cuadrícula de 4 columnas (`repeat(auto-fit, minmax(240px, 1fr))`, separación 40 px). Cada punto tiene hairline arriba, número mono `01`–`04` en `accent`, título en Space Grotesk 600 de 20 px y una línea de texto `text-body` de 15 px.
- Móvil: lista vertical; número a la izquierda (22 px) y título de 18 px con el texto debajo, con hairlines entre filas.
- Textos en `contenido.md`.

## Proyectos

Cuatro filas editoriales apiladas, cada una separada por hairline y con 72 px de padding vertical. Orden: 01 Echo, 02 Este portafolio, 03 Portal 360, 04 Portal para agentes de campo.

Estructura de cada fila (≥ 1024 px): dos columnas, medio a la izquierda (≈ 55 %) y texto a la derecha (≈ 45 %), separación 72 px (48 px entre 1024 y 1279 px). Debajo de 1024 px: una columna, medio arriba.

**Columna de texto, en orden:**
1. Número grande `01`–`04` (solo trazo) alineado a la base con una etiqueta mono en `accent` (por ejemplo "Juego arcade · Build&Play de Open2", "Sitio web", "Caso de estudio" + debajo, en `text-muted`, "Proyecto privado de cliente, sin demo pública"). En hover de la fila, el trazo del número pasa a `accent` (transición 250 ms).
2. H3.
3. Proyectos públicos: descripción (`text-body`) y, con hairline arriba, dos definiciones apiladas: "Arquitectura" (una línea `text-body` 15 px con las piezas separadas por ` · `) y "Stack" (línea `text` 16 px). Casos de estudio: lista de definiciones en cuadrícula de 2 columnas con hairline arriba: Contexto (ancho completo), Mi rol / Qué construí (o Integraciones), Decisión clave (ancho completo, etiqueta en `accent`, texto en `text` peso 500), Resultado (si aplica).
4. Casos: línea de stack en mono 12 px `text-muted` al final. Públicos: enlaces de texto con subrayado fino y flecha ↗ ("Jugar ↗", "Repositorio ↗"), separación 28 px. Casos de estudio: sin enlaces.

**Columna de medio:**
- Echo: el tráiler vertical (4:5) dentro del marco 16:10 con fondo `#000` y `object-fit: contain`. El fondo del juego es negro, así que las franjas laterales no se notan. `<video muted loop playsinline preload="none" poster="echo_poster.webp">` con `echo_preview.mp4`. Se reproduce solo mientras está en pantalla (IntersectionObserver) y se pausa al salir; con `prefers-reduced-motion: reduce` se queda en el póster. Sin controles ni sonido; el video es decorativo (`aria-hidden="true"`) porque el texto de la fila ya lo describe. En móvil, el marco pasa a 4:5 y el video ocupa todo el ancho.
- Este portafolio: miniatura 16:10, radio 6, borde `line`, con `hero_poster.webp` y `object-position: right center` hasta tener la captura del sitio construido. La captura final (fase 7) es el hero a 1440 px de ancho en 16:10, tomada de la vista previa de Vercel, en WebP.
- En ambos, una etiqueta mono arriba a la izquierda sobre fondo `rgba(3,10,26,.85)`, radio 3, p. ej. "01 / ECHO".
- Casos: caja con borde `line` y fondo `rgba(255,255,255,.02)` (único "contenedor" permitido) con el diagrama centrado, padding 56 px 48 px, alto mínimo 420 px, etiqueta superior "03 / PORTAL 360" y al pie "Diagrama simplificado, sin datos del cliente" en mono 10 px mayúsculas `text-muted`.

### Diagramas
HTML y CSS, no imágenes (accesibles y editables).

- Nodos: texto mono 12 px (10 px en móvil), borde 1 px `line-strong`, radio 4, sin relleno, padding 14 px 10 px, centrados.
- Conectores: líneas de 1 px `rgba(255,255,255,.3)`; 32 px horizontales (14 px en móvil). Una línea vertical de 40 px (28 px en móvil) baja del nodo central al nodo de datos.
- El nodo de datos (HubDB) es el único con borde `accent`, al 46 % del ancho (62 % en móvil). En el portal de campo, el nodo central ("Portal responsive") lleva borde `rgba(255,255,255,.55)` para marcarlo.
- Portal 360: Pantallas HubL → Funciones serverless → API de HubSpot; debajo, HubDB · formularios dinámicos.
- Portal de campo: API externa · acceso → Portal responsive → APIs de Google · mapas; debajo, HubDB · roles y permisos.
- El diagrama es una fila de tres nodos incluso en móvil (con tipografía menor). Contenedor con `role="img"` y `aria-label` que describe el flujo.

## Accesibilidad

- Un solo `h1`. HTML semántico: `header`, `nav`, `section` con `id`, `article`, `dl`.
- Foco visible: contorno blanco de 2 px con desplazamiento de 4 px en enlaces y botones.
- Áreas táctiles de al menos 44 px (botón circular, hamburguesa) y 48 px en botones de texto.
- Iconos decorativos con `aria-hidden="true"`. La foto lleva `alt` ("Retrato de Ottoniel Menéndez"); las miniaturas decorativas, `alt=""`.
- Movimiento: solo las transiciones de hover (≤ 250 ms), el video del hero y el tráiler de Echo; los dos videos respetan `prefers-reduced-motion`.
- Los números grandes de proyecto son decorativos (`aria-hidden="true"`).

## Assets

| Archivo | Uso |
|---|---|
| `hero_loop.mp4` + `hero_poster.webp` | Fondo del hero |
| `hs_glasses.webp` | Foto de Sobre mí |
| `echo_preview.mp4` + `echo_poster.webp` | Tráiler de Echo en la fila del proyecto (720×900, sin audio, 1,1 MB); póster en el fotograma de "Ronda 4 · 3 ecos" |
| `echo.webp` | Versión 16:10 del póster (1600×1000) para usos estáticos, como una futura imagen `og` del proyecto |
| `cover.webp` | Respaldo para un proyecto nuevo sin captura |
| `bg.webp` | Sin uso en esta versión; se conserva en el repo por si hace falta |
| `og` (fase 7) | Imagen para redes de 1200×630: fondo `hero_poster.webp`, nombre y cargo en Space Grotesk, sin la palabra "Portafolio". Generada con `opengraph-image` de Next si funciona con export estático; si no, un JPG en `public/` |

Todo formato nuevo en WebP, salvo `og`. Pendiente: la captura del portafolio una vez construido (fase 7).

## Experiencia (`[ 03 ] Trayectoria`, fondo `bg`)

- Filas con hairline arriba y 40 px de padding vertical (móvil 28 px). Escritorio: columna izquierda fija de 240 px y contenido a la derecha, separación 48 px.
- Puesto: a la izquierda, fechas en mono 11 px mayúsculas (`DIC. 2024 — ACTUALIDAD` en `text`, `HÍBRIDO` debajo en `text-muted`). A la derecha, el cargo como H3 (Space Grotesk 600, 28 px; móvil 24), la empresa en `text-muted` 16 px y las viñetas en `text-body` 16 px (marcador `text-muted`, máx. 720 px).
- Educación: etiqueta mono a la izquierda; a la derecha la carrera en Space Grotesk 600 de 20 px y "Universidad Mariano Gálvez de Guatemala · En curso" en `text-muted`.
- Certificaciones: etiqueta mono a la izquierda; a la derecha una lista con separadores muy tenues (`rgba(255,255,255,.07)`): nombre en `text` 16 px a la izquierda y emisor en mono 12 px `text-muted` a la derecha (en móvil, el emisor debajo). Sin enlaces a las credenciales.
- En móvil todo va en una columna: la etiqueta o las fechas arriba de cada bloque.

## Stack (`[ 04 ] Herramientas`, fondo `bg-alt`)

- Lista de definiciones con hairlines, una fila por categoría: Frontend, Backend, Datos, CMS, Herramientas.
- Escritorio: etiqueta mono de 240 px a la izquierda y, a la derecha, las tecnologías en Space Grotesk 500 de 24 px (móvil 19 px, debajo de la etiqueta). Los separadores ` · ` van en `text-muted`. Sin chips ni logos.

## Contacto (`[ 05 ] Contacto`, fondo `bg`)

- Escritorio en dos columnas (separación 96 px). Móvil: una columna con el formulario debajo.
- Izquierda: rótulo, H2 con el título de `contenido.md` (48 px, máx. 520 px; móvil 34 px), el texto en `text-body` 18 px, el correo como enlace `mailto:` en Space Grotesk 500 de 26 px (móvil 21 px) con subrayado fino y, debajo, "GitHub ↗" y "LinkedIn ↗" como enlaces de texto.
- Derecha: formulario sin cajas. Cada campo tiene su `label` mono 11 px arriba y solo una línea inferior `line-strong`; 52 px de alto (el mensaje, mínimo 128 px). Con foco, la línea pasa a `accent`. Botón primario igual al del hero: "Enviar mensaje →" (en móvil, a todo el ancho).
- Estados (maquetados en su tablero; textos en `contenido.md`):
  - **Enviando:** los campos quedan de solo lectura al 60 % de opacidad y el formulario lleva `aria-busy="true"`. El botón queda deshabilitado (`cursor: progress`) con un loader en lugar de la flecha: anillo SVG de 16 px, trazo 1.75 px, pista `rgba(3,10,26,.2)` y arco `bg` que gira en 0.8 s lineal. Con `prefers-reduced-motion: reduce` el anillo no gira. El botón tiene `min-width: 196px` para que no cambie de ancho entre estados.
  - **Enviado:** los campos se vacían. Debajo del botón, una región `role="status"` / `aria-live="polite"` con hairline arriba (`line`), etiqueta mono 11 px en `accent` y el mensaje en `text` 16 px.
  - **Error:** los campos conservan lo escrito y el botón dice "Reintentar →". La misma región, con la línea superior en `rgba(255,122,122,.35)`, etiqueta en `danger` y el mensaje en `text` con el correo como enlace subrayado. El estado no depende solo del color: la etiqueta dice qué pasó.
  - Sin cajas, sin íconos de check o cruz.
- Hover: el botón circular del hero y los enlaces de contacto y pie siguen el mismo criterio que el resto: el borde o subrayado pasa a `accent` y el texto a `text`.
- Sin botón de CV por ahora.

## Página 404 (`src/app/not-found.tsx`)

- Misma nav que el sitio (los enlaces apuntan a `/#seccion`) y un pie mínimo con el © bajo hairline.
- Fondo: `hero_poster.webp` a pantalla completa al 55 % de opacidad (móvil 40 %, `object-position: 78% center`) con un degradado hacia `bg`: de izquierda a derecha en escritorio (`bg` hasta el 30 %), de arriba a abajo en móvil. Es imagen fija: sin video.
- Contenido alineado a la izquierda y centrado en vertical (en móvil, anclado abajo), en este orden:
  1. "404" decorativo (`aria-hidden`) en Space Grotesk 600, solo trazo `outline-num` como los números de proyecto: `clamp(140px, 17vw, 240px)`; móvil 132 px.
  2. Rótulo mono `[ 404 ]  Ruta no encontrada` (número en `accent`).
  3. H1 "Página no encontrada": Space Grotesk 700, `clamp(40px, 4.4vw, 64px)`; móvil 38 px.
  4. Texto en `text-body` 18 px (móvil 16), máx. 480 px.
  5. Línea de ruta en mono 13 px (móvil 12) dentro de un recuadro con borde `line` y radio 4: `GET` y `→ 404` en `text-muted`, la ruta en `text`. La ruta se lee en el cliente (`window.location.pathname`) y la línea no se muestra si no hay ruta. Cortar palabras largas (`overflow-wrap: anywhere`).
  6. Botón primario "← Volver al inicio" y enlaces de texto "Ver proyectos" y "Contactar". En móvil el botón va a todo el ancho (52 px) y los enlaces debajo.
- Con export estático, Next genera `out/404.html` y Vercel lo sirve en cualquier ruta inexistente.

## Pie

- Hairline arriba y 32 px de padding. Escritorio: "© {año} Ottoniel Menéndez" (año calculado en el build) en mono 12 px `text-muted` a la izquierda; a la derecha GitHub, LinkedIn y "Volver arriba ↑" en Inter 14 px `text-muted` (hover `text`). Móvil: los enlaces arriba y el © debajo.