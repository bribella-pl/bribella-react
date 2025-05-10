import { Cat } from "../../../types/types";
import { loadMarkdowns } from "../base/markdownLoader";

export const loadAllKittens = (): Cat[] => {
  const markdowns = import.meta.glob("@content/cats/kittens/*.md", {
    eager: true,
  }) as Record<string, { attributes: Cat }>;

  return loadMarkdowns(markdowns);
};
