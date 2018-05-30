import { Injectable } from '@angular/core';
import { Router, CanActivate } from '@angular/router';
import { UserService } from './user.service';
@Injectable({
  providedIn: 'root'
})
export class AuthGuardService implements CanActivate {

  constructor(
    private userService: UserService,
    private router: Router
  ) { }

  public canActivate(): boolean {
    let user = this.userService.gotIt();
    console.log(JSON.stringify(user));
    if (user.hasOwnProperty('nom')) {
      return true;
    }
    this.router.navigate(['signup']);
    return false;
  }
}
