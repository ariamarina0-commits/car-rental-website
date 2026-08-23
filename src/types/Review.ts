export type Review = {
  id: number;
  author: string;
  authorPhoto?: string;
  authorProfileUrl?: string;

  rating: number;
  text: string;

  date: string;
  reviewUrl?: string;

  source: "Google";
};