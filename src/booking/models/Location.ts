export interface Location{
    id: string;
    name: string;
    type?: "airport" | "port" | "office"|"hotel"|"other";
}