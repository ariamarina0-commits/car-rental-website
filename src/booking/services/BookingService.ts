import type { BookingProvider } from "../providers/BookingProvider";
import type { AvailabilitySearch } from "../models/AvailabilitySearch";
import type { Location } from "../models/Location";
import type { RentalVehicle } from "../models/RentalVehicle";
import type { VehicleOffer } from "../models/VehicleOffer";
import type { Extra } from "../models/Extra";

export class BookingService {
  private provider: BookingProvider;

  constructor(provider: BookingProvider) {
    this.provider = provider;
  }

  async getLocations(): Promise<Location[]> {
    return this.provider.getLocations();
  }

  async getVehicle(id: string): Promise<RentalVehicle | null> {
    return this.provider.getVehicle(id);
  }

  async searchAvailability(
    search: AvailabilitySearch
  ): Promise<VehicleOffer[]> {
    this.validateSearch(search);

    return this.provider.searchAvailability(search);
  }

  async getExtras(): Promise<Extra[]>{
    return this.provider.getExtras();
  }

  private validateSearch(search: AvailabilitySearch): void {
    const pickup = new Date(search.pickupDateTime);
    const dropoff = new Date(search.dropoffDateTime);

    if (Number.isNaN(pickup.getTime())) {
      throw new Error("Invalid pickup date.");
    }

    if (Number.isNaN(dropoff.getTime())) {
      throw new Error("Invalid drop-off date.");
    }

    if (dropoff <= pickup) {
      throw new Error("Drop-off must be after pickup.");
    }

    if (!search.pickupLocationId) {
      throw new Error("Pickup location is required.");
    }

    if (!search.dropoffLocationId) {
      throw new Error("Drop-off location is required.");
    }

    if (
      search.driverAge !== undefined &&
      (search.driverAge < 21 || search.driverAge > 79)
    ) {
      throw new Error("Driver age must be between 21 and 79.");
    }
  }
}