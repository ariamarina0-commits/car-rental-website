import {
  BriefcaseBusiness,
  CarFront,
  Snowflake,
  Users,
} from "lucide-react";

import { Link } from "react-router-dom";

import type { Car } from "../../../types/Car";
import styles from "./CarCard.module.css";

type CarCardProps = {
  car: Car;
};

function CarCard({ car }: CarCardProps) {
  return (
    <article className={styles.card}>
      <div className={styles.imageWrapper}>
        {car.image ? (
          <img
            src={car.image}
            alt={car.name}
            className={styles.image}
          />
        ) : (
          <div className={styles.placeholder}>
            <div className={styles.placeholderIcon}>
              <CarFront size={52} strokeWidth={1.4} />
            </div>

            <span>Client photo pending</span>
          </div>
        )}

        <span className={styles.category}>
          {car.category}
        </span>
      </div>

      <div className={styles.content}>
        <div className={styles.heading}>
          <div>
            <p className={styles.transmission}>
              {car.transmission}
            </p>

            <h3>{car.name}</h3>
          </div>

          <div className={styles.price}>
            <span>From</span>

            <div>
              <strong>€{car.pricePerDay}</strong>
              <small>/ day</small>
            </div>
          </div>
        </div>

        <ul
          className={styles.specs}
          aria-label={`${car.name} specifications`}
        >
          <li>
            <Users size={18} aria-hidden="true" />
            <span>{car.passengers} seats</span>
          </li>

          <li>
            <BriefcaseBusiness size={18} aria-hidden="true" />
            <span>{car.luggage} bags</span>
          </li>

          <li>
            <CarFront size={18} aria-hidden="true" />
            <span>{car.doors} doors</span>
          </li>

          {car.airConditioning && (
            <li>
              <Snowflake size={18} aria-hidden="true" />
              <span>A/C</span>
            </li>
          )}
        </ul>

        <Link
          to={`/fleet/${car.id}`}
          className={styles.viewCar}
        >
          View car
        </Link>
      </div>
    </article>
  );
}

export default CarCard;