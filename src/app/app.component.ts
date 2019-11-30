import { AuthService } from './site/auth.service';
import { Component } from '@angular/core';
import { FoodService } from './food/food.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  isLoggedIn = false;

  constructor(private authService: AuthService, public router: Router, private foodService: FoodService) {

  }


  loggedIn(): boolean {
    if (this.authService.loggedInUser != null) {
      this.isLoggedIn = true;
      return true;
    } else {
      this.isLoggedIn = false;
      return false;
    }
  }
  clickOnAddCart() {
    this.foodService.clickedOnAdd = false;
    this.foodService.addedToCart = false;
  }

  logout() {
    this.authService.logout();
  }




}
