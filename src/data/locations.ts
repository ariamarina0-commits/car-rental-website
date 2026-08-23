export type PickupLocation = {
  id: number;
  name: string;
  description: string;
};

export const locations: PickupLocation[] = [
  {
    id: 1,
    name: "Heraklion Airport",
    description:
      "Convenient pick-up and drop-off close to the airport for an easy start to your trip.",
  },
  {
    id: 2,
    name: "Heraklion Port",
    description:
      "Ideal for travellers arriving by ferry and continuing their journey by car.",
  },
  {
    id: 3,
    name: "Heraklion City",
    description:
      "Flexible collection in the city for local visitors and hotel guests.",
  },
];