export type SimpleData = {
  title: string;
  body: string;
  itemsPerPage?: string;
};

export type NewsData = {
  date: string;
  title: string;
  body: string;
  images: string[];
};

export type HomeData = {
  section1Title: string;
  section1Text: string;
  section2Title: string;
  section2Text: string;
};

export type Quote = {
  author: string;
  quote: string;
};
