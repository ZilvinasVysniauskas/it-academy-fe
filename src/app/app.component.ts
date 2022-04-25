import { Component } from '@angular/core';
import {NavigationStart, Router} from "@angular/router";
import {environment} from "../environments/environment.prod";


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'it-academy-fe';

  showHead: boolean = false;

  ngOnInit() {
  }

  constructor(private router: Router) {
    console.log(environment.baseUrl)
    router.events.forEach((event) => {
      if (event instanceof NavigationStart) {
        if (event['url'] == '/login') {
          this.showHead = false;
        } else {
          this.showHead = true;
        }
      }
    });
  }
}
