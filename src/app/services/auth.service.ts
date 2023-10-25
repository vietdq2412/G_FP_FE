import {Injectable, OnInit} from '@angular/core';
import {Router} from "@angular/router";
import {BehaviorSubject, Observable} from "rxjs";


@Injectable({
  providedIn: 'root'
})
export class AuthService implements OnInit{
  private _isloggedIn: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
  private role: BehaviorSubject<string> = new BehaviorSubject<string>('');
  constructor(private route:Router) { }

  ngOnInit(): void {
  }

  public isloggedIn(): Observable<boolean> {

    if (localStorage.getItem('role')){
      this._isloggedIn.next(true);
    }
    return this._isloggedIn.asObservable();
  }

  public getRole():Observable<string>{
    // @ts-ignore
    this.role.next(localStorage.getItem('role').toString());
    console.log(this.role.asObservable())
    return this.role.asObservable();
  }
  public login(role:string): void{
    localStorage.setItem('token', Math.random().toString());
    localStorage.setItem('role',role);
    this._isloggedIn.next(true);
    this.route.navigate(['job-page']).then(r => {})
  }
  public logout(): void{
    localStorage.removeItem('token');
    localStorage.removeItem('role');
    this._isloggedIn.next(false);

    console.log("logout")
  }
}
