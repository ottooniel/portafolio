import type { RichText as RichTextParts } from "@/content/site";

// Las partes `em` se resaltan con color, no con negrita.
export default function RichText({ parts }: { parts: RichTextParts }) {
  return parts.map((part, i) =>
    typeof part === "string" ? (
      part
    ) : (
      <span key={i} className="text-text">
        {part.em}
      </span>
    ),
  );
}
