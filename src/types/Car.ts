export type Transmission = "Manual" | "Automatic";

export type Car={
    id: number;
    name: string;
    category: string;
    transmission:Transmission;
    passengers: number;
    luggage: number;
    doors: number;
    airConditioning: boolean;
    image: string;
    pricePerDay: number;
};