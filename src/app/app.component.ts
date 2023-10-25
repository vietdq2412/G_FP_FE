import {Component, OnChanges, OnInit, SimpleChanges} from '@angular/core';
import {User} from "./entity/user";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, OnChanges{
  title = 'VJB';
  user:User = new User();
  role:string|null = '';
  constructor() {
  }
  ngOnInit(): void {
    this.user = new User();
    this.user.role = localStorage.getItem('role');
  }

  ngOnChanges(changes: SimpleChanges): void {
    for (const propName in changes){
      const changedProp = changes[propName];

    }
  }

}
