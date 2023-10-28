import {Component, Input} from '@angular/core';
import {User} from "../entity/user";
import {AuthService} from "../services/auth.service";

@Component({
  selector: 'app-job',
  templateUrl: './job.component.html',
  styleUrls: ['./job.component.css']
})
export class JobComponent {
  @Input() user: User = new User();

  constructor(private authService:AuthService) {
  }
  getUser() {
    this.authService.getUser();
  }
}
