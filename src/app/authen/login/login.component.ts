import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Router} from "@angular/router";
import {AuthService} from "../../services/auth.service";
import {User} from "../../entity/user";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit{
private user : User = new User();
@Output() userEmitter = new EventEmitter<User>();
  constructor(private route: Router,
    private authService: AuthService) {
  }

  ngOnInit(): void {
  }

  emmit(){
    this.user.role = 'company';
    this.userEmitter.emit(this.user);
  }
  login(role:string) {
    this.authService.login(role);
  }



}
