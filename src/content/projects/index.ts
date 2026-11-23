import Echo, { meta as echo } from "./echo.mdx";
import BanguatMcp, { meta as banguatMcp } from "./banguat-mcp.mdx";
import Portafolio, { meta as portafolio } from "./portafolio.mdx";
import Portal360, { meta as portal360 } from "./portal-360.mdx";
import PortalCampo, { meta as portalCampo } from "./portal-campo.mdx";

export type ProjectMedia =
  | { type: "trailer" }
  | { type: "image"; src: string; width: number; height: number }
  | { type: "diagram"; nodes: [string, string, string]; data: string; emphasizeCenter?: boolean };

// Públicos: el cuerpo del MDX es la descripción. Casos de estudio: el cuerpo son <Fact> (lista de definiciones).
export type ProjectMeta = {
  number: string;
  title: string;
  mediaLabel: string;
  tag: string;
  note?: string;
  media: ProjectMedia;
  stack: string[];
} & (
  | { kind: "public"; architecture: string[]; links: { label: string; href: string }[] }
  | { kind: "case" }
);

export const projectsHeader = { number: "02", label: "Trabajo seleccionado", title: "Proyectos" };

export const diagramNote = "Diagrama simplificado, sin datos del cliente";

// Orden de las filas.
export const projects = [
  { meta: echo, Body: Echo },
  { meta: banguatMcp, Body: BanguatMcp },
  { meta: portafolio, Body: Portafolio },
  { meta: portal360, Body: Portal360 },
  { meta: portalCampo, Body: PortalCampo },
];
