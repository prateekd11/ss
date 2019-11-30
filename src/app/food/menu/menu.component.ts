import { FoodService } from './../food.service';
import { FoodItem } from './../FoodItem';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-food-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class FoodMenuComponent implements OnInit {

  foodItemsList: FoodItem[];
  isAdmin: boolean;


  constructor(private foodService: FoodService) {

  }

  ngOnInit() {
    this.isAdmin = this.foodService.isAdmin;
    if (this.isAdmin) {
      this.foodItemsList = this.foodService.getFoodItems();
      this.foodService.getSubject().subscribe((data) => {
        this.foodItemsList = data;
      });
    }
    else {
      this.foodItemsList = this.foodService.getFoodItemsCustomer();
      this.foodService.getSubject().subscribe((data) => {
        this.foodItemsList = data;
      });
    }
  }

}
