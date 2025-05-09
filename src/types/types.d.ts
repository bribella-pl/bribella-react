export type SimpleData = {
  title: string;
  content: string;
  itemsPerPage?: string;
};

export type NewsData = {
  date: string;
  title: string;
  body: string;
  images: string[];
};

export type HomeData = {
  mainImage: string;
  section1Title: string;
  section1Text: string;
  secondImage: string;
  section2Title: string;
  section2Text: string;
  thirdImage: string;
};

export type Quote = {
  author: string;
  quote: string;
};
