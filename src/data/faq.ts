export type FaqItem = {
  id: number;
  question: string;
  answer: string;
};

export const faqItems: FaqItem[] = [
  {
    id: 1,
    question: "What is the minimum age to rent a car?",
    answer:
      "Drivers must be between 21 and 79 years of age and must have held a valid driving licence for at least one year.",
  },
  {
    id: 2,
    question: "What documents do I need to rent a car?",
    answer:
      "You will need a valid driving licence together with a passport or national identity card. An International Driving Permit may also be required for licences issued outside the European Union where applicable.",
  },
  {
    id: 3,
    question: "What payment methods are accepted?",
    answer:
      "Caring Rent Car accepts credit cards, debit cards and cash where applicable. All reservations are subject to vehicle availability.",
  },
  {
    id: 4,
    question: "What is the fuel policy?",
    answer:
      "The fuel policy is Same to Same. The vehicle must be returned with the same fuel level it had when collected. Missing fuel may be charged together with applicable service costs.",
  },
  {
    id: 5,
    question: "Can I cancel my reservation for free?",
    answer:
      "Yes. Free cancellation is available up to 48 hours before the scheduled pickup time. Later cancellations or a No Show may result in cancellation charges.",
  },
  {
    id: 6,
    question: "What does Premium Insurance include?",
    answer:
      "Premium Insurance includes vehicle body damage protection, windscreen and glass protection, tyre protection and theft protection. Certain cases such as negligent driving, off-road use, wrong fuel and traffic-law violations are excluded.",
  },
  {
    id: 7,
    question: "Is roadside assistance available?",
    answer:
      "Yes. 24-hour roadside assistance is available throughout Crete. Customers should contact Caring Rent Car immediately if the vehicle develops a mechanical problem.",
  },
  {
    id: 8,
    question: "Can I take the rental car on a ferry?",
    answer:
      "Vehicles are not permitted to leave Crete by ferry unless prior written approval has been obtained from Caring Rent Car.",
  },
  {
    id: 9,
    question: "Can I drive the vehicle off-road?",
    answer:
      "No. Driving on beaches, rough terrain or unpaved roads is strictly prohibited, and damage caused by off-road driving is not covered by insurance.",
  },
  {
    id: 10,
    question: "Can I add an additional driver?",
    answer:
      "Yes. Additional drivers may be added upon request, provided they meet the same age and driving licence requirements as the main driver.",
  },
  {
    id: 11,
    question: "Are child seats available?",
    answer:
      "Yes. Child seats and booster seats are available upon request. They should be requested during the reservation to help ensure availability.",
  },
];