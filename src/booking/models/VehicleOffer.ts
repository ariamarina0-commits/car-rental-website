import type { RentalVehicle } from "./RentalVehicle";

export interface VehicleOffer {
  vehicle: RentalVehicle;

  available: boolean;

  pricing: {
    rentalDays: number;
    basePrice: number;
    totalPrice: number;
    currency: "EUR";
  };
}