import { Cat } from "../../../types/types";
import { loadMarkdowns } from "../base/markdownLoader";

export const loadAllTomcats = (): Cat[] => {
  const markdowns = import.meta.glob("@content/cats/tomcats/*.md", {
    eager: true,
  }) as Record<string, { attributes: Cat }>;

  return loadMarkdowns(markdowns);
};
