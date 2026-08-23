import ReviewCard from "../../common/ReviewCard/ReviewCard";
import { reviews } from "../../../data/reviews";
import styles from "./Reviews.module.css";

function Reviews() {
  return (
    <section className={styles.section}>
      <div className="container">
        <div className={styles.heading}>
          <span>Customer reviews</span>

          <h2>
            Trusted by travellers exploring Crete.
          </h2>

          <p>
            Real experiences from customers who chose us
            for their journey around the island.
          </p>
        </div>

        <div className={styles.grid}>
          {reviews.map((review) => (
            <ReviewCard
              key={review.id}
              review={review}
            />
          ))}
        </div>

        <div className={styles.googleNote}>
          <span>
            Google Reviews integration will be connected
            before launch.
          </span>
        </div>
      </div>
    </section>
  );
}

export default Reviews;