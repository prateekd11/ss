import { FoodService } from './../../food/food.service';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  username = '';
  password = '';

  loginForm: FormGroup;
  submitted = false;

  validCredentials = true;

  constructor(private formBuilder: FormBuilder, private router: Router, private authService: AuthService, private foodService: FoodService) { }

  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      'username': new FormControl(this.username, [Validators.required, Validators.minLength(4)]),
      'password': new FormControl(this.password, [Validators.required, Validators.minLength(8)]),
    });
  }

  get f() {
    return this.loginForm.controls;
  }

  onSubmit() {
    this.submitted = true;

    if (this.loginForm.invalid) {
      return;
    }

    console.log(this.loginForm.value)

    let successLogin = this.authService.authenticateUser(this.loginForm.value.username, this.loginForm.value.password);

    if (successLogin) {
      this.router.navigateByUrl('');
      this.validCredentials = true;
    } else {
      this.validCredentials = false;
    }


  }


}
