import {Component, CUSTOM_ELEMENTS_SCHEMA, OnInit} from '@angular/core';
import {HerokuService} from "../service/heroku.service";
import {Observable} from "rxjs";

@Component({
  selector: 'app-heroku-test',
  templateUrl: './heroku-test.component.html',
  styleUrls: ['./heroku-test.component.scss'],
})
export class HerokuTestComponent implements OnInit {

  test$!: Observable<string>;
  nonObs!: string;

  constructor(private service: HerokuService) { }

  ngOnInit(): void {
    this.test$ = this.service.fetchThis();
    this.service.fetchThis().subscribe(a => this.nonObs = a);
  }

}
