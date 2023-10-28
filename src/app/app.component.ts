import {Component, OnChanges, OnInit, SimpleChanges} from '@angular/core';
import {User} from "./entity/user";
import {AuthService} from "./services/auth.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, OnChanges {
  title = 'VJB';
  role: string | null = '';

  constructor(private authService: AuthService) {
  }

  ngOnInit(): void {
  }

  ngOnChanges(changes: SimpleChanges): void {
    for (const propName in changes) {
      const changedProp = changes[propName];

    }
  }

}
