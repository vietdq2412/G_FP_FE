import {Component, Input} from '@angular/core';
import {User} from "../../entity/user";
import {AuthService} from "../../services/auth.service";
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {Account} from "../../entity/account";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  @Input("showLoginForm")
  showLoginForm = true;

  registerForm: FormGroup;

  constructor(private authService: AuthService) {
    this.registerForm = new FormGroup({
      email: new FormControl('', [Validators.required]),
      password: new FormControl('', [Validators.required]),
      role: new FormControl('2', [Validators.required])
    });
  }

  register(): void {
    if (this.registerForm.valid) {
      let account:Account = {
        email:this.registerForm.value.email,
        password:this.registerForm.value.password
      }
      this.authService.registerAPI(account, this.registerForm.value.role)
        .subscribe(
          response => {
            console.log('Registration successful', response);
          },
          error => {
            console.log('Error during registration', error);
          }
        );
    }
  }
}
