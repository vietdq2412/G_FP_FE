import {Component, Input} from '@angular/core';
import {User} from "../../entity/user";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  @Input() user: User = new User();

}
