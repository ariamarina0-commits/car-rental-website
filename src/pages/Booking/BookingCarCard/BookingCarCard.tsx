import {
  BriefcaseBusiness,
  CarFront,
  Users,
} from "lucide-react";

import type { VehicleOffer } from "../../../booking/models/VehicleOffer";
import styles from "./BookingCarCard.module.css";


type BookingCarCardProps = {
  offer: VehicleOffer;
  onSelect: (offer: VehicleOffer) => void;
};

function BookingCarCard({
  offer,
  onSelect,
}: BookingCarCardProps) {
  const { vehicle, pricing } = offer;

  return (
    <article className={styles.card}>
      <div className={styles.imageWrapper}>
        {vehicle.image ? (
          <img
            src={vehicle.image}
            alt={vehicle.name}
            className={styles.image}
          />
        ) : (
          <div className={styles.placeholder}>
            <div className={styles.placeholderIcon}>
              <CarFront size={52} strokeWidth={1.4} />
              <span>Vehicle photo pending</span>
            </div>
          </div>
        )}

        <span className={styles.category}>
          {vehicle.category}
        </span>
      </div>

      <div className={styles.content}>
        <div className={styles.heading}>
          <div>
            <p className={styles.transmission}>
              {vehicle.transmission === "automatic"
                ? "Automatic"
                : "Manual"}
            </p>

            <h2>{vehicle.name}</h2>
          </div>

          <div className={styles.price}>
            <span>
              {pricing.rentalDays}{" "}
              {pricing.rentalDays === 1 ? "day" : "days"}
            </span>

            <strong>
              €{pricing.totalPrice}
            </strong>

            <small>
              €{pricing.basePrice} / day
            </small>
          </div>
        </div>

        <ul
          className={styles.specs}
          aria-label={`${vehicle.name} specifications`}
        >
          <li>
            <Users size={18} aria-hidden="true" />
            <span>{vehicle.seats} seats</span>
          </li>

          {vehicle.luggage !== undefined && (
            <li>
              <BriefcaseBusiness
                size={18}
                aria-hidden="true"
              />
              <span>{vehicle.luggage} bags</span>
            </li>
          )}

          {vehicle.doors !== undefined && (
            <li>
              <CarFront size={18} aria-hidden="true" />
              <span>{vehicle.doors} doors</span>
            </li>
          )}
        </ul>

        <button
          type="button"
          className={styles.selectButton}
          onClick={() => onSelect(offer)}
          disabled={!offer.available}
        >
          {offer.available
            ? "Select car"
            : "Unavailable"}
        </button>
      </div>
    </article>
  );
}

export default BookingCarCard;