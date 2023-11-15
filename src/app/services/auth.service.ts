import {Injectable, OnInit} from '@angular/core';
import {Router} from "@angular/router";
import {BehaviorSubject, Observable} from "rxjs";
import {User} from "../entity/user";
import {Account} from "../entity/account";
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class AuthService implements OnInit {


  private _user: BehaviorSubject<NonNullable<User>> = new BehaviorSubject<NonNullable<User>>(new User());

  private loginUrl = 'http://localhost:8080/account/login';
  private registerUrl = 'http://localhost:8080/account/register';

  constructor(private route: Router,
              private http: HttpClient) {

  }

  ngOnInit(): void {
  }

  get user(): BehaviorSubject<NonNullable<User>> {
    return this._user;
  }
  setUser(value: User) {
    console.log('set user:', value)
    this._user.next(value);
  }
  getUserAsObservable(): Observable<NonNullable<User>> {
    const userStr = localStorage.getItem('userPrinciple');
    if (userStr) {
      this._user.next(JSON.parse(userStr));
    }
    console.log("getuser athservice", this._user)
    return this._user.asObservable();
  }

  registerAPI(account: Account, roleId: string): Observable<any> {
    console.log("registerAPI")
    return this.http.post(`${this.registerUrl}/${roleId}`, account);
  }

  loginAPI(account: Account): Observable<any> {
    return this.http.post(this.loginUrl, account);
  }

  public login(role: string): void {
    const userLogin = new User();
    userLogin.role = role;

    // get token + user principle API
    localStorage.setItem('token', Math.random().toString());
    localStorage.setItem('userPrinciple', JSON.stringify(userLogin));
    this._user.next(userLogin);
    this.route.navigate(['job/job-content']).then(r => {
    })
  }

  public logout(): void {
    localStorage.removeItem('token');
    localStorage.removeItem('userPrinciple');
    this._user.next(new User());
    console.log("logout")
  }
}
