import { Injectable } from '@angular/core';
import { User } from './../models/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor() { }

  public gotIt(): User {
    let user: User;
    user = new User(JSON.parse(localStorage.getItem('user')));
    return user;
  }

  public keepIt(user: User) {
    return new Promise((resolve) => {
      localStorage.setItem('user', JSON.stringify(user));
      resolve({'message': 'Yohhh ! Bienvenue dans myTodo !'});
    });
  }
}
