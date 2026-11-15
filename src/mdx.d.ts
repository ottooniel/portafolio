// Los MDX de proyectos exportan `meta` además del componente por defecto.
declare module "*.mdx" {
  export const meta: import("@/content/projects").ProjectMeta;
}
