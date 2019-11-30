import { CartService } from './../shopping/cart/cart.service';
import { FoodItem } from './FoodItem';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class FoodService {

  private subject = new Subject<FoodItem[]>();
  isAdmin = false;
  addedToCart = false;
  cartAddedId: number;
  foodItemsList: FoodItem[];
  isLoggedIn = false;
  clickedOnAdd = false;

  constructor(private cartService: CartService, private router: Router) {
    
  }

  getSubject(): Subject<FoodItem[]> {
    return this.subject;
  }

  getFoodItems() {
    return this.foodItemsList;
  }

  getFoodItemsCustomer() {
    return this.foodItemsList.filter((foodItem) => foodItem.active && foodItem.dateOfLaunch <= new Date());
  }

  addToCart(foodItemId: number) {
    if (this.isLoggedIn) {
      for (const foodItem of this.foodItemsList) {
        if (foodItem.id == foodItemId) {
          this.cartService.getCart().cartItems.push(foodItem);
          this.cartService.calcPrice();
          this.addedToCart = true;
          this.cartAddedId = foodItemId;
        }
      }
    } else {
      this.clickedOnAdd = true;
      this.router.navigate(['login']);
    }
  }

  removeFromCart(foodItemId: number) {
    for (let i = 0; i < this.cartService.getCart().cartItems.length; i++) {
      if (this.cartService.getCart().cartItems[i].id === foodItemId) {
        this.cartService.getCart().cartItems.splice(i, 1);
        this.cartService.calcPrice();
        break;
      }
    }
  }



  updateFoodItem(foodItem: FoodItem) {
    let count = 0;
    for (const fItem of this.foodItemsList) {

      if (fItem.id === foodItem.id) {
        this.foodItemsList[count] = foodItem;
        break;
      }
      count++;
    }
    console.log(this.foodItemsList);
  }

}
