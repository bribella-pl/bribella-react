import { SimpleData } from "../../../types/types";
import { loadMarkdown } from "../base/markdownLoader";

export const loadKittensPage = (): SimpleData => {
  const markdown = import.meta.glob("@content/cats/kittens.md", {
    eager: true,
  }) as Record<string, { attributes: SimpleData }>;

  return loadMarkdown(markdown);
};
