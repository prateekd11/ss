export interface FoodItem {
    id: number;
    name: string;
    category: string;
    price: number;
    freeDelivery: boolean;
    dateOfLaunch: Date;
    active: boolean;
    imageUrl: string;
}