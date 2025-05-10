import { Cat } from "../../../types/types";
import { loadMarkdowns } from "../base/markdownLoader";

export const loadAllStuds = (): Cat[] => {
  const markdowns = import.meta.glob("@content/cats/studs/*.md", {
    eager: true,
  }) as Record<string, { attributes: Cat }>;

  return loadMarkdowns(markdowns);
};
