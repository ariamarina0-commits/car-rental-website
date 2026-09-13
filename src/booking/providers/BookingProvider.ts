import type { AvailabilitySearch } from "../models/AvailabilitySearch";
import type { Location } from "../models/Location";
import type { RentalVehicle } from "../models/RentalVehicle";
import type { VehicleOffer } from "../models/VehicleOffer";
import type { Extra } from "../models/Extra";

export interface BookingProvider {
  getLocations(): Promise<Location[]>;

  getVehicle(
    id: string
  ): Promise<RentalVehicle | null>;

  searchAvailability(
    search: AvailabilitySearch
  ): Promise<VehicleOffer[]>;

  getExtras(): Promise<Extra[]>;
}