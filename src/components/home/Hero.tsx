import { useEffect, useState, type FormEvent } from "react";
import {
  CalendarDays,
  CarFront,
  Search,
} from "lucide-react";
import {
  Link,
  useNavigate,
} from "react-router-dom";

import { bookingService } from "../../booking/bookingService";
import type { Location as RentalLocation } from "../../booking/models/Location";

import heroImage from "./../../assets/images/hero-image.png";
import styles from "./Hero.module.css";

function Hero() {
  const navigate = useNavigate();

  const [locations, setLocations] = useState<RentalLocation[]>([]);

  const [pickupLocationId, setPickupLocationId] = useState("");
  const [dropoffLocationId, setDropoffLocationId] = useState("");

  const [pickupDate, setPickupDate] = useState("");
  const [pickupTime, setPickupTime] = useState("10:00");

  const [dropoffDate, setDropoffDate] = useState("");
  const [dropoffTime, setDropoffTime] = useState("10:00");

  useEffect(() => {
    bookingService
      .getLocations()
      .then(setLocations)
      .catch((error) => {
        console.error("Failed to load locations:", error);
      });
  }, []);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const search = {
      pickupLocationId,
      dropoffLocationId,
      pickupDateTime: `${pickupDate}T${pickupTime}`,
      dropoffDateTime: `${dropoffDate}T${dropoffTime}`,
    };

    navigate("/booking", {
      state: {
        search,
      },
    });
  }

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
        <form
          className={styles.bookingCard}
          onSubmit={handleSubmit}
        >
          <div className={styles.field}>
            <label htmlFor="pickup-location">
              Pick-up Location
            </label>

            <select
              id="pickup-location"
              value={pickupLocationId}
              onChange={(event) =>
                setPickupLocationId(event.target.value)
              }
              required
            >
              <option value="" disabled>
                Select a location
              </option>

              {locations.map((location) => (
                <option
                  key={location.id}
                  value={location.id}
                >
                  {location.name}
                </option>
              ))}
            </select>
          </div>

          <div className={styles.field}>
            <label htmlFor="dropoff-location">
              Drop-off Location
            </label>

            <select
              id="dropoff-location"
              value={dropoffLocationId}
              onChange={(event) =>
                setDropoffLocationId(event.target.value)
              }
              required
            >
              <option value="" disabled>
                Select a location
              </option>

              {locations.map((location) => (
                <option
                  key={location.id}
                  value={location.id}
                >
                  {location.name}
                </option>
              ))}
            </select>
          </div>

          <div className={styles.field}>
            <label htmlFor="pickup-date">
              Pick-up Date
            </label>

            <input
              type="date"
              id="pickup-date"
              value={pickupDate}
              onChange={(event) =>
                setPickupDate(event.target.value)
              }
              required
            />
          </div>

          <div className={styles.field}>
            <label htmlFor="pickup-time">
              Pick-up Time
            </label>

            <input
              type="time"
              id="pickup-time"
              value={pickupTime}
              onChange={(event) =>
                setPickupTime(event.target.value)
              }
              required
            />
          </div>

          <div className={styles.field}>
            <label htmlFor="dropoff-date">
              Drop-off Date
            </label>

            <input
              type="date"
              id="dropoff-date"
              value={dropoffDate}
              onChange={(event) =>
                setDropoffDate(event.target.value)
              }
              required
            />
          </div>

          <div className={styles.field}>
            <label htmlFor="dropoff-time">
              Drop-off Time
            </label>

            <input
              type="time"
              id="dropoff-time"
              value={dropoffTime}
              onChange={(event) =>
                setDropoffTime(event.target.value)
              }
              required
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