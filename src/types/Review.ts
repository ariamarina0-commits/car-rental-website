export type Review = {
  id: string;
  author: string;
  authorPhoto?: string;
  authorProfileUrl?: string;

  rating: number;
  text: string;

  date: string;
  reviewUrl?: string;

  source: "Google";
};