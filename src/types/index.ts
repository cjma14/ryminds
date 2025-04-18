export interface Titles {
  title: string;
  highlightedText: string;
  tag: string;
  desc: string;
}

export interface TitlesAbout {
  title: string;
  highlightedText: string;
  tag: string;
  desc?: string;
  desc_1?: string;
  desc_2?: string;
  lightImg: string;
  darkImg: string;
}

export interface TitlesStatsFact {
  title: string;
  tag: string;
  highlightedText: string;
  desc: string;
  img: string;
}

export interface TitlesFaq {
  title: string;
  highlightedText: string;
  tag: string;
}

export interface TitlesPortafolioTab {
  title: string;
  tag: string;
  highlightedText: string;
  desc_1: string;
  desc_2: string;
  lightImg: string;
  darkImg: string;
}

export interface Features {
  title: string;
  desc: string;
  img: string;
}

export interface TitlesCta {
  title: string;
  desc: string;
  img: string;
}

export interface FeatureTab {
  featureName: string;
  title?: string;
  lightImg?: string;
  darkImg?: string;
  desc1?: string;
  desc2?: string;
}

export interface Faq {
  question: string;
  ans: string;
}

export interface Review {
  user: string;
  img: string;
  occupation: string;
  review: string;
}

export interface Price {
  title: string;
  desc: string;
  price: number;
  link: string;
  type: string;
  points: string[];
}

export interface BlogTypes {
  title: string;
  date: Date;
  category?: string;
  author?: string;
  tags?: string[];
  bannerImg?: string;
  cardImg?: string;
}
