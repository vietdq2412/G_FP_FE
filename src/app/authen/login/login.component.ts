import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Router} from "@angular/router";
import {AuthService} from "../../services/auth.service";
import {User} from "../../entity/user";
import {Account} from "../../entity/account";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  private user: User = new User();
  showLoginForm = true;

  constructor(private route: Router,
              private authService: AuthService) {
  }

  ngOnInit(): void {
  }

  login(email: string, password: string) {
    let account: Account = {
      email, password
    }
    this.authService.loginAPI(account).subscribe(userPrinciple => {
      console.log(userPrinciple.roles)
      this.user = new User(userPrinciple.accountId,userPrinciple.profileId
        ,userPrinciple.username,userPrinciple.status, userPrinciple.token, userPrinciple.roles[0].name)
      localStorage.setItem('token', userPrinciple.token);
      localStorage.setItem('userPrinciple', JSON.stringify(this.user));
      this.authService.setUser(this.user);
      this.route.navigate(['job/job-content']).then(r => {})
    });
  }


  toggleForm() {
    this.showLoginForm = !this.showLoginForm;
  }}
