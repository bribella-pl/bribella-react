import { Cat } from "../../../types/types";
import { loadMarkdowns } from "../base/markdownLoader";

export const loadAllQueens = (): Cat[] => {
  const markdowns = import.meta.glob("@content/cats/queens/*.md", {
    eager: true,
  }) as Record<string, { attributes: Cat }>;

  return loadMarkdowns(markdowns);
};
