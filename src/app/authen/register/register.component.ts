import {Component, EventEmitter, Input, Output} from '@angular/core';
import {User} from "../../entity/user";
import {AuthService} from "../../services/auth.service";
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {Account} from "../../entity/account";
import {Router} from "@angular/router";
import {MatSnackBar} from "@angular/material/snack-bar";
import {SnackBarComponent} from "../../snack-bar/snack-bar.component";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  @Output()
  loginFormEvent= new EventEmitter<any>();

  registerForm: FormGroup;
  duplicatedEmail: boolean = false;

  constructor(private authService: AuthService,
              private route: Router,
              private snackBar: MatSnackBar) {
    this.registerForm = new FormGroup({
      email: new FormControl('', [Validators.required]),
      password: new FormControl('', [Validators.required]),
      role: new FormControl('2', [Validators.required])
    });
  }

  register(): void {
    if (this.registerForm.valid) {
      let account: Account = {
        email: this.registerForm.value.email,
        password: this.registerForm.value.password
      }
      this.authService.registerAPI(account, this.registerForm.value.role).subscribe(
        response => {
          console.log('Registration successful', response);
          this.duplicatedEmail = false;
          this.loginFormEvent.emit(this.loginFormEvent);
          this.openSnackBar('Register success!', '#34ad22');
        },
        error => {
          console.log('Error during registration', error);
          this.duplicatedEmail = true;
        }
      );
    }
  };

  openSnackBar(messenger:string, bgColor:any) {
    this.snackBar.openFromComponent(SnackBarComponent, {
      duration: 2000,
      data: { message: messenger, bgColor: bgColor },
      panelClass: ['white-snackbar'],
      horizontalPosition: 'right',
      verticalPosition: 'top',
    });
  }
}
