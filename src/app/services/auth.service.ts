import {Injectable, OnInit} from '@angular/core';
import {Router} from "@angular/router";
import {BehaviorSubject, Observable} from "rxjs";
import {User} from "../entity/user";


@Injectable({
  providedIn: 'root'
})
export class AuthService implements OnInit {
  private user: BehaviorSubject<NonNullable<User>> = new BehaviorSubject<NonNullable<User>>(new User());


  constructor(private route: Router) {

  }

  ngOnInit(): void {
  }

  getUser(): Observable<NonNullable<User>> {
    const userStr = localStorage.getItem('userPrinciple');
    if (userStr) {
      this.user.next(JSON.parse(userStr));
    }
    console.log("getuser athservice", this.user)
    return this.user.asObservable();
  }


  public login(role: string): void {
    const userLogin = new User();
    userLogin.role = role;

    // get token + user principle API
    localStorage.setItem('token', Math.random().toString());
    localStorage.setItem('userPrinciple', JSON.stringify(userLogin));
    this.user.next(userLogin);
    this.route.navigate(['job-page']).then(r => {
    })
  }

  public logout(): void {
    localStorage.removeItem('token');
    localStorage.removeItem('userPrinciple');
    this.user.next(new User());
    console.log("logout")
  }
}
