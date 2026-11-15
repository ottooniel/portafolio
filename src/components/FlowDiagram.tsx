// Diagrama de tres nodos en fila con un nodo de datos debajo del central. Es una imagen para
// el lector de pantalla (role="img"): el aria-label describe el flujo y los nodos no se leen sueltos.
export default function FlowDiagram({
  nodes,
  data,
  emphasizeCenter = false,
}: {
  nodes: [string, string, string];
  data: string;
  emphasizeCenter?: boolean;
}) {
  const [left, center, right] = nodes;
  const node = "flex-1 basis-0 rounded-[4px] border px-2.5 py-3.5 text-center";
  const connector = <span className="h-px w-3.5 shrink-0 bg-outline-num md:w-8" />;

  return (
    <div
      role="img"
      aria-label={`Diagrama: ${left}, ${center} y ${right} conectados en fila; ${center} se apoya en ${data}.`}
      className="w-full font-mono text-[10px] leading-snug text-text-body md:text-xs"
    >
      <div className="flex items-center">
        <span className={`${node} border-line-strong`}>{left}</span>
        {connector}
        <span className={`${node} ${emphasizeCenter ? "border-white/55" : "border-line-strong"}`}>{center}</span>
        {connector}
        <span className={`${node} border-line-strong`}>{right}</span>
      </div>
      <span className="mx-auto block h-7 w-px bg-outline-num md:h-10" />
      <span className="mx-auto block w-[62%] rounded-[4px] border border-accent px-2.5 py-3.5 text-center md:w-[46%]">
        {data}
      </span>
    </div>
  );
}
