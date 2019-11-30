import { Cart } from './Cart';
import { Injectable, Output, EventEmitter } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  @Output() cartUpdated = new EventEmitter();
  cart: Cart = { cartItems: [], total: 0 };

  constructor() {

  }

  calcPrice() {
    let sum = 0;
    this.cart.cartItems.forEach(cartItem => {
      sum += cartItem.price;
    });
    this.cart.total = sum;
    this.cartUpdated.emit;

  }

  getCartItems() {
    return this.cart.cartItems;
  }

  getCart() {
    return this.cart;
  }

}
