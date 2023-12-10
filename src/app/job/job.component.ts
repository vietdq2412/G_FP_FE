import {Component, Input, OnInit} from '@angular/core';
import {User} from "../entity/user";
import {AuthService} from "../services/auth.service";
import {JobService} from "../services/job.service";

@Component({
  selector: 'app-job',
  templateUrl: './job.component.html',
  styleUrls: ['./job.component.css']
})
export class JobComponent implements OnInit{
  @Input() user: User = new User();

  constructor(private authService:AuthService,
              private jobService:JobService,
  ) {
  }
  getUser() {
    this.authService.getUserAsObservable();
  }

  ngOnInit(): void {
  }
}
