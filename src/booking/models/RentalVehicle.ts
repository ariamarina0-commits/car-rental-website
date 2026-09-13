export interface RentalVehicle {
  id: string;

  name: string;
  category: string;

  transmission: "manual" | "automatic";

  fuelType?: string;

  seats: number;
  doors?: number;
  luggage?: number;

  image?: string;
}