import { Injectable } from '@angular/core';
import { User } from './User';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  userList: User[] = [
    { firstName: "Amit", lastName: "Wani", userName: "mtwn105", password: "mtwn105admin" },
    { firstName: "Admin", lastName: "Admin", userName: "admin", password: "adminadmin" },
  ];

  constructor() {
  }

  addUser(user: User) {
    this.userList.push(user);
  }

  getUsers() {
    return this.userList;
  }
}
