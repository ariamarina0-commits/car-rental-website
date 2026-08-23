export type GoogleText = {
  text: string;
  languageCode: string;
};

export type GoogleAuthorAttribution = {
  displayName: string;
  uri?: string;
  photoUri?: string;
};

export type GoogleReview = {
  name: string;
  relativePublishTimeDescription: string;
  rating: number;
  text?: GoogleText;
  originalText?: GoogleText;
  authorAttribution: GoogleAuthorAttribution;
  publishTime: string;
  googleMapsUri?: string;
};

export type GooglePlaceDetails = {
  id: string;

  displayName: GoogleText;

  rating?: number;
  userRatingCount?: number;

  reviews?: GoogleReview[];
};