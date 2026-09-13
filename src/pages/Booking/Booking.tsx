import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

import { bookingService } from "../../booking/bookingService";
import type { AvailabilitySearch } from "../../booking/models/AvailabilitySearch";
import type { VehicleOffer } from "../../booking/models/VehicleOffer";
import BookingCarCard from "./BookingCarCard/BookingCarCard";
import styles from "./Booking.module.css";

function Booking() {
  const location = useLocation();
  const navigate = useNavigate();

  const search = location.state?.search as AvailabilitySearch | undefined;

  const [offers, setOffers] = useState<VehicleOffer[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  
  function handleSelectCar(offer: VehicleOffer) {
    navigate("/booking/details", {
      state: {
        search,
        selectedOffer: offer,
      },
    });
  }

  useEffect(() => {
    if (!search) {
      setError("No booking search was provided.");
      setLoading(false);
      return;
    }

    bookingService
      .searchAvailability(search)
      .then((results) => {
        setOffers(results);
      })
      .catch((error) => {
        console.error(error);

        setError(
          error instanceof Error
            ? error.message
            : "Something went wrong while searching for cars."
        );
      })
      .finally(() => {
        setLoading(false);
      });
  }, [search]);

  if (loading) {
    return (
      <section className="container">
        <h1>Searching available cars...</h1>
      </section>
    );
  }

  if (error) {
    return (
      <section className="container">
        <h1>Booking</h1>

        <p>{error}</p>

        <button
          type="button"
          onClick={() => navigate("/")}
        >
          Back to search
        </button>
      </section>
    );
  }

  return (
    <section className={`container ${styles.page}`}>
      <div className={styles.header}>
        <h1>Available cars</h1>

        <p className={styles.searchSummary}>
          {search?.pickupDateTime} →{" "}
          {search?.dropoffDateTime}
        </p>
      </div>

      <div className={styles.results}>
        {offers.map((offer) => (
          <BookingCarCard
            key={offer.vehicle.id}
            offer={offer}
            onSelect={handleSelectCar}
          />
        ))}
      </div>
    </section>
  );
}

export default Booking;