import type { MDXComponents } from "mdx/types";
import Fact from "@/components/Fact";

const components: MDXComponents = { Fact };

export function useMDXComponents(): MDXComponents {
  return components;
}
