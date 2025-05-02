import { Quote, HomeData, SimpleData, NewsData } from "./types";

declare module "*.md" {
  const quote: Quote;
  const homePage: HomeData;
  const simplePage: SimpleData;
  const news: NewsData;
  export { quote, homePage, simplePage, news };
}
