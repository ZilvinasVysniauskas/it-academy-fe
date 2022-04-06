import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HerokuTestComponent} from "./heroku-test/heroku-test.component";

const routes: Routes = [
  {path: '', component: HerokuTestComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
