import type { Car } from "../types/Car";

import toyotaAygoImage from "../assets/cars/aygo.png";
import volkswagenPoloImage from "../assets/cars/polo.png";
import peugeot2008Image from "../assets/cars/peugeot.png";

export const cars: Car[] = [
  {
    id: 1,
    name: "Toyota Aygo",
    category: "Economy",
    transmission: "Manual",
    passengers: 4,
    luggage: 2,
    doors: 5,
    airConditioning: true,
    image: toyotaAygoImage,
    pricePerDay: 35,
  },

  {
    id: 2,
    name: "Volkswagen Polo",
    category: "Compact",
    transmission: "Manual",
    passengers: 5,
    luggage: 2,
    doors: 5,
    airConditioning: true,
    image: volkswagenPoloImage,
    pricePerDay: 45,
  },

  {
    id: 3,
    name: "Peugeot 2008",
    category: "SUV",
    transmission: "Automatic",
    passengers: 5,
    luggage: 3,
    doors: 5,
    airConditioning: true,
    image: peugeot2008Image,
    pricePerDay: 65,
  },
];