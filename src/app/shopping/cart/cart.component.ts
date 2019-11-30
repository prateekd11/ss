import { FoodService } from './../../food/food.service';
import { FoodItem } from './../../food/FoodItem';
import { CartService } from './cart.service';
import { Cart } from './Cart';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-shopping-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  cart: Cart;
  cartItems: FoodItem[];
  constructor(private cartService: CartService, private foodService: FoodService) {
  }

  ngOnInit() {
    this.cartService.calcPrice();
    this.cart = this.cartService.getCart();
    this.cartItems = this.cart.cartItems;
  }

}
