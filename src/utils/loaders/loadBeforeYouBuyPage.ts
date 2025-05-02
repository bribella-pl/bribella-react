import { SimpleData } from "../../types/types";
import { loadMarkdown } from "./base/markdownLoader";

export const loadBeforeYouBuyPage = (): SimpleData => {
  const markdown = import.meta.glob(
    "@content/before-you-buy/before-you-buy.md",
    {
      eager: true,
    }
  ) as Record<string, { attributes: SimpleData }>;

  return loadMarkdown(markdown);
};
