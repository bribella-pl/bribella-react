import { SimpleData } from "../../../types/types";
import { loadMarkdown } from "../base/markdownLoader";

export const loadStudsPage = (): SimpleData => {
  const markdown = import.meta.glob("@content/cats/studs.md", {
    eager: true,
  }) as Record<string, { attributes: SimpleData }>;

  return loadMarkdown(markdown);
};
