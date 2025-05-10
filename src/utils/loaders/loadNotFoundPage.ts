import { SimpleData } from "../../types/types";
import { loadMarkdown } from "./base/markdownLoader";

export const loadNotFoundPage = (): SimpleData => {
  const markdown = import.meta.glob("@content/not-found/not-found.md", {
    eager: true,
  }) as Record<string, { attributes: SimpleData }>;

  return loadMarkdown(markdown);
};
