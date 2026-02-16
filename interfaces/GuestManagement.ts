export interface Guest {
    id: string;
    name: string;
    idCard: string;
    phone: string;
    email: string;
    country: string;
    status: "Single" | "Married" | "Divorced";
}