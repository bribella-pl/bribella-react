import { decode } from "he";

const decodeAttributes = <T extends Record<string, unknown>>(data: T): T => {
  return Object.fromEntries(
    Object.entries(data).map(([key, value]) => [
      key,
      typeof value === "string" ? decode(value) : value,
    ])
  ) as T;
};

export const loadMarkdown = <T extends Record<string, unknown>>(
  markdown: Record<string, { attributes: T }>
): T => {
  const raw = Object.values(markdown)[0].attributes;
  return decodeAttributes(raw);
};

export const loadMarkdowns = <T extends Record<string, unknown>>(
  markdowns: Record<string, { attributes: T }>
): T[] => {
  return Object.values(markdowns).map(({ attributes }) =>
    decodeAttributes(attributes)
  );
};
