import type { BookingProvider } from "../BookingProvider";
import type { AvailabilitySearch } from "../../models/AvailabilitySearch";
import type { Location } from "../../models/Location";
import type { RentalVehicle } from "../../models/RentalVehicle";
import type { VehicleOffer } from "../../models/VehicleOffer";
import type { Extra } from "../../models/Extra";

import toyotaAygoImage from "../../../assets/cars/aygo.png";
import volkswagenPoloImage from "../../../assets/cars/polo.png";
import peugeot2008Image from "../../../assets/cars/peugeot.png";

const locations: Location[] = [
  {
    id: "heraklion-airport",
    name: "Heraklion Airport",
    type: "airport",
  },
  {
    id: "heraklion-office",
    name: "Heraklion Office",
    type: "office",
  },
  {
    id: "heraklion-port",
    name: "Heraklion Port",
    type: "port",
  },
];

const vehicles: RentalVehicle[] = [
  {
    id: "toyota-aygo",
    name: "Toyota Aygo",
    category: "Economy",
    transmission: "manual",
    fuelType: "Petrol",
    seats: 4,
    doors: 5,
    luggage: 2,
    image: toyotaAygoImage,
  },
  {
    id: "volkswagen-polo",
    name: "Volkswagen Polo",
    category: "Compact",
    transmission: "manual",
    fuelType: "Petrol",
    seats: 5,
    doors: 5,
    luggage: 2,
    image: volkswagenPoloImage,
  },
  {
    id: "peugeot-2008",
    name: "Peugeot 2008",
    category: "SUV",
    transmission: "automatic",
    fuelType: "Petrol",
    seats: 5,
    doors: 5,
    luggage: 3,
    image: peugeot2008Image,
  },
];

const extras: Extra[] = [
  {
    id: "additional-driver",
    name: "Additional driver",
    description: "Add one extra authorised driver.",
    pricingType: "per-day",
    price: 5,
    currency: "EUR",
  },
  {
    id: "baby-seat",
    name: "Baby seat",
    description: "Suitable for babies and very young children.",
    pricingType: "one-time",
    price: 15,
    currency: "EUR",
  },
  {
    id: "child-seat",
    name: "Child seat",
    description: "Child safety seat for your rental.",
    pricingType: "one-time",
    price: 15,
    currency: "EUR",
  },
  {
    id: "gps",
    name: "GPS",
    description: "Portable GPS navigation device.",
    pricingType: "per-day",
    price: 4,
    currency: "EUR",
  },
];


const dailyRates: Record<string, number> = {
  "toyota-aygo": 35,
  "volkswagen-polo": 45,
  "peugeot-2008": 65,
};

function calculateRentalDays(
  pickupDateTime: string,
  dropoffDateTime: string
): number {
  const pickup = new Date(pickupDateTime);
  const dropoff = new Date(dropoffDateTime);

  const differenceMs = dropoff.getTime() - pickup.getTime();

  const dayMs = 1000 * 60 * 60 * 24;

  return Math.max(1, Math.ceil(differenceMs / dayMs));
}

export class MockBookingProvider implements BookingProvider {
  async getLocations(): Promise<Location[]> {
    return locations;
  }

  async getVehicle(id: string): Promise<RentalVehicle | null> {
    return vehicles.find((vehicle) => vehicle.id === id) ?? null;
  }

  async getExtras(): Promise<Extra[]>{
    return extras;
  }

  async searchAvailability(
    search: AvailabilitySearch
  ): Promise<VehicleOffer[]> {
    const rentalDays = calculateRentalDays(
      search.pickupDateTime,
      search.dropoffDateTime
    );

    return vehicles.map((vehicle) => {
      const basePrice = dailyRates[vehicle.id] ?? 0;

      return {
        vehicle,
        available: true,
        pricing: {
          rentalDays,
          basePrice,
          totalPrice: basePrice * rentalDays,
          currency: "EUR",
        },
      };
    });
  }
}