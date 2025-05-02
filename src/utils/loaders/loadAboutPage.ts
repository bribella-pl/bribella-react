import { SimpleData } from "../../types/types";
import { loadMarkdown } from "./base/markdownLoader";

export const loadAboutPage = (): SimpleData => {
  const markdown = import.meta.glob("@content/about/about.md", {
    eager: true,
  }) as Record<string, { attributes: SimpleData }>;

  return loadMarkdown(markdown);
};
