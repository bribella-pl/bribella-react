import { SimpleData } from "../../../types/types";
import { loadMarkdown } from "../base/markdownLoader";

export const loadQueensPage = (): SimpleData => {
  const markdown = import.meta.glob("@content/cats/queens.md", {
    eager: true,
  }) as Record<string, { attributes: SimpleData }>;

  return loadMarkdown(markdown);
};
