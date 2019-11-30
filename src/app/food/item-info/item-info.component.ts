import { FoodItem } from './../FoodItem';
import { FoodService } from './../food.service';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { AuthService } from 'src/app/site/auth.service';

@Component({
  selector: 'app-food-item-info',
  templateUrl: './item-info.component.html',
  styleUrls: ['./item-info.component.css']
})
export class FoodItemComponent implements OnInit {

  @Input() foodItem: FoodItem;
  @Output() addToCartClicked = new EventEmitter();
  isAdmin: boolean = false;
  cartAddedId: number;

  constructor(private foodService: FoodService, private authService: AuthService) {

  }

  ngOnInit() {
    this.isAdmin = this.foodService.isAdmin;
  }

  displayAddToCart(id: number) {
    this.cartAddedId = id;
    console.log(this.cartAddedId)
  }


}
