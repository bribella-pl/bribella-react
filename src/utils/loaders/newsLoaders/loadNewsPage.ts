import { SimpleData } from "../../../types/types";
import { loadMarkdown } from "../base/markdownLoader";

export const loadNewsPage = (): SimpleData => {
  const markdown = import.meta.glob("@content/news/simple/news.md", {
    eager: true,
  }) as Record<string, { attributes: SimpleData }>;

  return loadMarkdown(markdown);
};
