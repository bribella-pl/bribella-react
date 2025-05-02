import { HomeData } from "../../types/types";
import { loadMarkdown } from "./base/markdownLoader";

export const loadHomePage = (): HomeData => {
  const markdown = import.meta.glob("@content/home/home.md", {
    eager: true,
  }) as Record<string, { attributes: HomeData }>;

  return loadMarkdown(markdown);
};
