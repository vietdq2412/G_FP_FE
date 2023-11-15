import {Component, Input, OnChanges, OnInit, SimpleChanges} from '@angular/core';
import {AuthService} from "../../services/auth.service";
import {Observable} from "rxjs";
import {User} from "../../entity/user";

@Component({
  selector: 'app-topbar',
  templateUrl: './topbar.component.html',
  styleUrls: ['./topbar.component.css']
})
export class TopbarComponent implements OnInit, OnChanges {
  user: NonNullable<User> = new User();

  isLoggedIn: Observable<boolean> = new Observable<boolean>();
  currentUser: Observable<NonNullable<User>> = new Observable<NonNullable<User>>();

  constructor(private authService: AuthService) {
  }

  ngOnInit(): void {
    this.currentUser = this.authService.getUserAsObservable()
    this.currentUser.subscribe(user => {
      this.user = user;
    });
    console.log("topbar ts", this.user)
  }

  ngOnChanges(changes: SimpleChanges): void {

  }

  logout() {
    this.authService.logout();
    console.log(this.user)
    console.log(this.currentUser)
  }


}
