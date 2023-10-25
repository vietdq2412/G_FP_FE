import {Component, Input} from '@angular/core';
import {User} from "../entity/user";

@Component({
  selector: 'app-job',
  templateUrl: './job.component.html',
  styleUrls: ['./job.component.css']
})
export class JobComponent {
  @Input() user: User = new User();

}
