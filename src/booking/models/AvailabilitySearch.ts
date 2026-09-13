export interface AvailabilitySearch {
  pickupLocationId: string;
  dropoffLocationId: string;

  pickupDateTime: string;
  dropoffDateTime: string;

  driverAge?: number;
}