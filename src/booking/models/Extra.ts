export type ExtraPricingType = "per-day" | "one-time";

export interface Extra{
    id: string;
    name: string;
    description?: string;
    pricingType: ExtraPricingType;
    price: number;
    currency: "EUR";
}