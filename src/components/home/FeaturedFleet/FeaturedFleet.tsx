import { Link } from "react-router-dom";

import CarCard from "../../fleet/CarCard/CarCard";
import { cars } from "../../../data/cars";
import styles from "./FeaturedFleet.module.css";

function FeaturedFleet() {
  return (
    <section className={styles.section}>
      <div className="container">
        <div className={styles.topRow}>
          <div className={styles.heading}>
            <span>Our fleet</span>
            <h2>Choose the right car for your journey.</h2>
            <p>
              From compact city cars to comfortable SUVs, find the vehicle
              that best suits your trip around Crete.
            </p>
          </div>

          <Link to="/fleet" className={styles.viewAll}>
            View full fleet
          </Link>
        </div>

        <div className={styles.grid}>
          {cars.slice(0, 3).map((car) => (
            <CarCard key={car.id} car={car} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default FeaturedFleet;