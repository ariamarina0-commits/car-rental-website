import { CalendarDays, CarFront, Search } from "lucide-react";
import { Link } from "react-router-dom";

import heroImage from "./../../assets/images/hero-image.png";
import styles from "./Hero.module.css";

function Hero() {
  return (
    <section
      className={styles.hero}
      style={{ backgroundImage: `url(${heroImage})` }}
    >
      <div className={styles.overlay} />

      <div className={`container ${styles.heroContent}`}>
        <div className={styles.copy}>
          <span className={styles.eyebrow}>
            Car rental in Crete
          </span>

          <h1>
            Explore Crete with
            <span> Freedom and comfort.</span>
          </h1>

          <p>
            Choose the car that fits your trip and discover
            the island at your own pace.
          </p>

          <div className={styles.actions}>
            <Link
              to="/#booking"
              className={`${styles.cta} ${styles.primaryCta}`}
            >
              <CalendarDays size={19} aria-hidden="true" />
              <span>Book your car</span>
            </Link>

            <Link
              to="/fleet"
              className={`${styles.cta} ${styles.secondaryCta}`}
            >
              <CarFront size={19} aria-hidden="true" />
              <span>View our fleet</span>
            </Link>
          </div>
        </div>
      </div>

      <div
        id="booking"
        className={`container ${styles.bookingWrapper}`}
      >
        <form className={styles.bookingCard}>
          <div className={styles.field}>
            <label htmlFor="pickup-location">
              Pick-up Location
            </label>

            <select id="pickup-location" defaultValue="">
              <option value="" disabled>
                Select a location
              </option>

              <option value="heraklion-airport">
                Heraklion Airport
              </option>

              <option value="heraklion-port">
                Heraklion Port
              </option>

              <option value="heraklion-city">
                Heraklion City
              </option>
            </select>
          </div>

          <div className={styles.field}>
            <label htmlFor="pickup-date">
              Pick-up Date
            </label>

            <input
              type="date"
              id="pickup-date"
            />
          </div>

          <div className={styles.field}>
            <label htmlFor="return-date">
              Return Date
            </label>

            <input
              type="date"
              id="return-date"
            />
          </div>

          <button
            type="submit"
            className={styles.searchButton}
          >
            <Search size={19} aria-hidden="true" />
            <span>Search cars</span>
          </button>
        </form>
      </div>
    </section>
  );
}

export default Hero;