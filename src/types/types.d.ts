export type SimpleData = {
  title: string;
  content?: string;
  mainImageUrl: string;
  itemsPerPage?: string;
};

export type Cat = {
  date: string;
  name: string;
  content: string;
  images: string[];
  litter?: string;
};

export type NewsData = {
  date: string;
  title: string;
  content: string;
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
  section3Title: string;
  section3Text: string;
  fourthImageUrl: string;
  section4Title: string;
  section4Text: string;
  fifthImageUrl: string;
};

export type Quote = {
  author: string;
  quote: string;
};
