export const loadQuotes = () => {
  const modules = import.meta.glob("@content/quotes/*.md", {
    eager: true,
  }) as Record<string, { attributes: { author: string; value: string } }>;
  console.log(modules);

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  return Object.values(modules).map((mod: any) => mod.attributes);
};
