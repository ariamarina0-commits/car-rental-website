import { Link } from "react-router-dom";
import styles from "./FinalCTA.module.css";

function FinalCTA() {
  return (
    <section className={styles.section}>
      <div className={`container ${styles.inner}`}>
        <div>
          <span className={styles.eyebrow}>Ready to explore Crete?</span>

          <h2>
            Choose your car and start planning your journey.
          </h2>

          <p>
            Browse the fleet, find the vehicle that suits your trip and
            continue to booking when you are ready.
          </p>
        </div>

        <div className={styles.actions}>
          <Link
            to="/fleet"
            className={styles.primary}
          >
            Explore the fleet
          </Link>

          <Link
            to="/terms"
            className={styles.secondary}
          >
            Rental terms
          </Link>
        </div>
      </div>
    </section>
  );
}

export default FinalCTA;