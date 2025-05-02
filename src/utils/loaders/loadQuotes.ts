import { Quote } from "../../types/types";
import { loadMarkdowns } from "./base/markdownLoader";

export const loadQuotes = (): Quote[] => {
  const markdowns = import.meta.glob("@content/quotes/*.md", {
    eager: true,
  }) as Record<string, { attributes: Quote }>;

  return loadMarkdowns(markdowns);
};
