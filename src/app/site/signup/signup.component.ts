import { UserService } from './../user.service';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  username = '';
  firstname = '';
  lastname = '';
  password = '';
  confirmPassword = '';


  signUpForm: FormGroup;
  submitted = false;

  constructor(private formBuilder: FormBuilder, private router: Router, private userService: UserService) {
  }

  ngOnInit() {
    this.signUpForm = this.formBuilder.group({
      'username': new FormControl(this.username, [Validators.required, Validators.minLength(4)]),
      'firstname': new FormControl(this.firstname, [Validators.required]),
      'lastname': new FormControl(this.lastname, [Validators.required]),
      'password': new FormControl(this.password, [Validators.required, Validators.minLength(8)]),
      'confirmPassword': new FormControl(this.confirmPassword, [Validators.required, Validators.minLength(8)]),
    }, {
      validator: this.MustMatch('password', 'confirmPassword')
    });
  }

  get f() { return this.signUpForm.controls; }

  onSubmit() {
    this.submitted = true;

    if (this.signUpForm.invalid) {
      return;
    }

    console.log(this.signUpForm.value)

    this.userService.addUser({
      userName: this.signUpForm.value.username,
      firstName: this.signUpForm.value.firstname,
      lastName: this.signUpForm.value.lastname,
      password: this.signUpForm.value.password,
    });
    
    console.log(this.userService.getUsers());


    alert("Signup Successful. Now Login!")
    this.router.navigateByUrl('/login')


  }

  MustMatch(controlName: string, matchingControlName: string) {
    return (formGroup: FormGroup) => {
      const control = formGroup.controls[controlName];
      const matchingControl = formGroup.controls[matchingControlName];

      if (matchingControl.errors && !matchingControl.errors.mustMatch) {
        // return if another validator has already found an error on the matchingControl
        return;
      }

      // set error on matchingControl if validation fails
      if (control.value !== matchingControl.value) {
        matchingControl.setErrors({ mustMatch: true });
      } else {
        matchingControl.setErrors(null);
      }
    }
  }

}
