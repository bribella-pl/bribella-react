import { SimpleData } from "../../../types/types";
import { loadMarkdown } from "../base/markdownLoader";

export const loadTomcatsPage = (): SimpleData => {
  const markdown = import.meta.glob("@content/cats/tomcat.md", {
    eager: true,
  }) as Record<string, { attributes: SimpleData }>;

  return loadMarkdown(markdown);
};
