import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import {
  BriefcaseBusiness,
  CalendarDays,
  CarFront,
  MapPin,
  Users,
} from "lucide-react";

import { bookingService } from "../../booking/bookingService";
import type { AvailabilitySearch } from "../../booking/models/AvailabilitySearch";
import type { Extra } from "../../booking/models/Extra";
import type { VehicleOffer } from "../../booking/models/VehicleOffer";

import styles from "./BookingDetails.module.css";

function BookingDetails() {
  const location = useLocation();
  const navigate = useNavigate();

  const [extras, setExtras] = useState<Extra[]>([]);
  const [selectedExtraIds, setSelectedExtraIds] = useState<string[]>([]);

  const search = location.state?.search as AvailabilitySearch | undefined;

  const selectedOffer = location.state?.selectedOffer as
    | VehicleOffer
    | undefined;

  useEffect(() => {
    bookingService
      .getExtras()
      .then(setExtras)
      .catch((error) => {
        console.error("Failed to load extras:", error);
      });
  }, []);

  if (!search || !selectedOffer) {
    return (
      <section className="container">
        <h1>Booking details</h1>
        <p>No selected car was provided.</p>

        <button type="button" onClick={() => navigate("/")}>
          Back to search
        </button>
      </section>
    );
  }

  const { vehicle, pricing } = selectedOffer;

  function formatDateTime(dateTime: string): string {
    return new Intl.DateTimeFormat("en-GB", {
      day: "2-digit",
      month: "short",
      year: "numeric",
      hour: "2-digit",
      minute: "2-digit",
    }).format(new Date(dateTime));
  }

  function formatLocationName(locationId: string): string {
    const locationNames: Record<string, string> = {
      "heraklion-airport": "Heraklion Airport",
      "heraklion-office": "Heraklion Office",
      "heraklion-port": "Heraklion Port",
    };

    return locationNames[locationId] ?? locationId;
  }

  function toggleExtra(extraId: string) {
    setSelectedExtraIds((current) =>
      current.includes(extraId)
        ? current.filter((id) => id !== extraId)
        : [...current, extraId]
    );
  }

  function getExtraPrice(extra: Extra): number {
    if (extra.pricingType === "per-day") {
      return extra.price * pricing.rentalDays;
    }

    return extra.price;
  }

  const selectedExtras = extras.filter((extra) =>
    selectedExtraIds.includes(extra.id)
  );

  const extrasTotal = selectedExtras.reduce(
    (total, extra) => total + getExtraPrice(extra),
    0
  );

  const grandTotal = pricing.totalPrice + extrasTotal;

  return (
    <main className={`container ${styles.page}`}>
      <div className={styles.header}>
        <p className={styles.eyebrow}>Your booking</p>

        <h1>Review your rental</h1>

        <p>
          Check your vehicle and rental details before continuing.
        </p>
      </div>

      <div className={styles.layout}>
        <section className={styles.mainContent}>
          <article className={styles.vehicleCard}>
            <div className={styles.imageWrapper}>
              {vehicle.image ? (
                <img
                  src={vehicle.image}
                  alt={vehicle.name}
                  className={styles.image}
                />
              ) : (
                <div className={styles.placeholder}>
                  <CarFront size={56} />
                </div>
              )}
            </div>

            <div className={styles.vehicleContent}>
              <div>
                <p className={styles.category}>
                  {vehicle.category}
                </p>

                <h2>{vehicle.name}</h2>

                <p className={styles.transmission}>
                  {vehicle.transmission === "automatic"
                    ? "Automatic"
                    : "Manual"}
                </p>
              </div>

              <ul className={styles.specs}>
                <li>
                  <Users size={18} />
                  {vehicle.seats} seats
                </li>

                {vehicle.luggage !== undefined && (
                  <li>
                    <BriefcaseBusiness size={18} />
                    {vehicle.luggage} bags
                  </li>
                )}

                {vehicle.doors !== undefined && (
                  <li>
                    <CarFront size={18} />
                    {vehicle.doors} doors
                  </li>
                )}
              </ul>
            </div>
          </article>

          <section className={styles.rentalDetails}>
            <h2>Rental details</h2>

            <div className={styles.detailsGrid}>
              <div className={styles.detail}>
                <MapPin size={20} />

                <div>
                  <span>Pick-up location</span>

                  <strong>
                    {formatLocationName(search.pickupLocationId)}
                  </strong>
                </div>
              </div>

              <div className={styles.detail}>
                <MapPin size={20} />

                <div>
                  <span>Drop-off location</span>

                  <strong>
                    {formatLocationName(search.dropoffLocationId)}
                  </strong>
                </div>
              </div>

              <div className={styles.detail}>
                <CalendarDays size={20} />

                <div>
                  <span>Pick-up</span>

                  <strong>
                    {formatDateTime(search.pickupDateTime)}
                  </strong>
                </div>
              </div>

              <div className={styles.detail}>
                <CalendarDays size={20} />

                <div>
                  <span>Drop-off</span>

                  <strong>
                    {formatDateTime(search.dropoffDateTime)}
                  </strong>
                </div>
              </div>
            </div>
          </section>

          <section className={styles.extrasSection}>
            <h2>Optional extras</h2>

            <div className={styles.extrasGrid}>
              {extras.map((extra) => {
                const selected = selectedExtraIds.includes(extra.id);

                return (
                  <button
                    key={extra.id}
                    type="button"
                    className={`${styles.extraCard} ${
                      selected ? styles.extraSelected : ""
                    }`}
                    onClick={() => toggleExtra(extra.id)}
                  >
                    <div>
                      <h3>{extra.name}</h3>

                      {extra.description && (
                        <p>{extra.description}</p>
                      )}
                    </div>

                    <strong>
                      €{extra.price}
                      {extra.pricingType === "per-day"
                        ? " / day"
                        : ""}
                    </strong>
                  </button>
                );
              })}
            </div>
          </section>
        </section>

        <aside className={styles.summary}>
          <h2>Price summary</h2>

          <div className={styles.priceRow}>
            <span>
              €{pricing.basePrice} × {pricing.rentalDays}{" "}
              {pricing.rentalDays === 1 ? "day" : "days"}
            </span>

            <strong>€{pricing.totalPrice}</strong>
          </div>

          {selectedExtras.map((extra) => (
            <div
              key={extra.id}
              className={styles.priceRow}
            >
              <span>
                {extra.name}

                {extra.pricingType === "per-day" &&
                  ` × ${pricing.rentalDays} ${
                    pricing.rentalDays === 1 ? "day" : "days"
                  }`}
              </span>

              <strong>
                €{getExtraPrice(extra)}
              </strong>
            </div>
          ))}

          <div className={styles.total}>
            <span>Total</span>

            <strong>€{grandTotal}</strong>
          </div>

          <button
            type="button"
            className={styles.continueButton}
          >
            Continue
          </button>

          <button
            type="button"
            className={styles.backButton}
            onClick={() => navigate(-1)}
          >
            Change car
          </button>
        </aside>
      </div>
    </main>
  );
}

export default BookingDetails;