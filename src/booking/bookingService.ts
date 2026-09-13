import { BookingService } from "./services/BookingService";
import { MockBookingProvider } from "./providers/mock/MockBookingProvider";

const bookingProvider = new MockBookingProvider();

export const bookingService = new BookingService(bookingProvider);