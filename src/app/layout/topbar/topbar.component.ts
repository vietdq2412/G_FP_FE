import {Component, Input, OnChanges, OnInit, SimpleChanges} from '@angular/core';
import {AuthService} from "../../services/auth.service";
import {Observable} from "rxjs";
import {User} from "../../entity/user";

@Component({
  selector: 'app-topbar',
  templateUrl: './topbar.component.html',
  styleUrls: ['./topbar.component.css']
})
export class TopbarComponent implements OnInit, OnChanges{
  @Input() user: User = new User();

  isLoggedIn : Observable<boolean> = new Observable<boolean>();
  role: Observable<string> = new Observable<string>();

  constructor(private authService:AuthService) {
  }
  ngOnInit(): void {
    this.isLoggedIn = this.authService.isloggedIn();
    this.role = this.authService.getRole();

    console.log(this.user)
  }

  ngOnChanges(changes: SimpleChanges): void {
  }
  logout(){
    this.authService.logout();
  }




}
