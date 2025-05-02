import { NewsData } from "../../../types/types";
import { loadMarkdowns } from "../base/markdownLoader";

export const loadAllNews = (): NewsData[] => {
  const markdowns = import.meta.glob("@content/news/*.md", {
    eager: true,
  }) as Record<string, { attributes: NewsData }>;

  return loadMarkdowns(markdowns);
};
