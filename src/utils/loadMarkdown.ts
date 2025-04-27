export const loadQuotes = () => {
  const markdowns = import.meta.glob("@content/quotes/*.md", {
    eager: true,
  }) as Record<string, { attributes: { author: string; value: string } }>;

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  return Object.values(markdowns).map((mod: any) => mod.attributes);
};

export type NewsData = {
  date: string;
  title: string;
  body: string;
  images: string[];
};

export const loadNews = () => {
  const markdowns = import.meta.glob("@content/news/*.md", {
    eager: true,
  }) as Record<string, { attributes: NewsData }>;

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  return Object.values(markdowns).map((md: any) => md.attributes);
};
