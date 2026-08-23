import { MapPin } from "lucide-react";

import { locations } from "../../../data/locations";
import styles from "./PickupLocations.module.css";

function PickupLocations() {
  return (
    <section className={styles.section}>
      <div className="container">
        <div className={styles.heading}>
          <span>Pick-up locations</span>

          <h2>
            Start your journey from the location that suits you best.
          </h2>

          <p>
            Choose a convenient pick-up point and begin exploring Crete
            without unnecessary delays.
          </p>
        </div>

        <div className={styles.grid}>
          {locations.map((location) => (
            <article
              key={location.id}
              className={styles.card}
            >
              <div className={styles.icon}>
                <MapPin
                  size={26}
                  strokeWidth={1.8}
                  aria-hidden="true"
                />
              </div>

              <h3>{location.name}</h3>

              <p>{location.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default PickupLocations;