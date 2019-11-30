import { FoodItem } from './../../food/FoodItem';
export interface Cart {
    cartItems: FoodItem[];
    total: number;
}