import { FoodItem } from './../FoodItem';
import { FoodService } from './../food.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-food-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class FoodSearchComponent implements OnInit {

  searchKey: string;
  foodItemList: FoodItem[] = [];
  searchedFoodItemList: FoodItem[] = [];
  isAdmin: boolean;

  constructor(private foodService: FoodService) {

  }

  ngOnInit() {

    if (this.foodService.isAdmin) {
      this.foodItemList = this.foodService.getFoodItems();
    } else {
      this.foodItemList = this.foodService.getFoodItemsCustomer();
    }
    this.searchedFoodItemList = this.foodItemList;
  }



  search(value: string) {
    this.searchedFoodItemList = this.foodItemList.filter((foodItem) => foodItem.name.toLowerCase().includes(value.toLowerCase()));
    this.foodService.getSubject().next(this.searchedFoodItemList);
  }

}
