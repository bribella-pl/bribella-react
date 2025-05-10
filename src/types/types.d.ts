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
  mainImageUrl: string;
  section1Title: string;
  section1Text: string;
  secondImageUrl: string;
  section2Title: string;
  section2Text: string;
  thirdImageUrl: string;
};

export type Quote = {
  author: string;
  quote: string;
};
