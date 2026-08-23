import { Star } from "lucide-react";

import type { Review } from "../../../types/Review";
import styles from "./ReviewCard.module.css";

type ReviewCardProps = {
  review: Review;
};

function ReviewCard({ review }: ReviewCardProps) {
  return (
    <article className={styles.card}>
      <div
        className={styles.rating}
        aria-label={`${review.rating} out of 5 stars`}
      >
        {Array.from({ length: 5 }).map((_, index) => (
          <Star
            key={index}
            size={18}
            strokeWidth={1.8}
            aria-hidden="true"
            className={
              index < review.rating
                ? styles.starActive
                : styles.starInactive
            }
          />
        ))}
      </div>

      <blockquote className={styles.quote}>
        “{review.text}”
      </blockquote>

      <footer className={styles.footer}>
        <div>
          <strong>{review.author}</strong>
          <span>{review.date}</span>
        </div>

        <span className={styles.source}>
          {review.source}
        </span>
      </footer>
    </article>
  );
}

export default ReviewCard;