import { SimpleData } from "../../types/types";
import { loadMarkdown } from "./base/markdownLoader";

export const loadContactPage = (): SimpleData => {
  const markdown = import.meta.glob("@content/contact/contact.md", {
    eager: true,
  }) as Record<string, { attributes: SimpleData }>;

  return loadMarkdown(markdown);
};
