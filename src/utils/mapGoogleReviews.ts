import type {
  GoogleReview,
} from "../types/GooglePlace";

import type {
  Review,
} from "../types/Review";

export function mapGoogleReview(
  review: GoogleReview
): Review {
  return {
    id: review.name,

    author:
      review.authorAttribution.displayName,

    authorPhoto:
      review.authorAttribution.photoUri,

    authorProfileUrl:
      review.authorAttribution.uri,

    rating: review.rating,

    text:
      review.text?.text ??
      review.originalText?.text ??
      "",

    date:
      review.relativePublishTimeDescription,

    reviewUrl:
      review.googleMapsUri,

    source: "Google",
  };
}

export function mapGoogleReviews(
  reviews: GoogleReview[]
): Review[] {
  return reviews.map(mapGoogleReview);
}