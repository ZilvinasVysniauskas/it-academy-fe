import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HerokuTestComponent} from "./heroku-test/heroku-test.component";
import { HomeComponent } from './components/home/home.component';
import { ReservationsComponent } from './components/reservations/reservations.component';
import { LoginComponent } from './components/login/login.component';
import { ContentComponent } from './components/content/content.component';

const routes: Routes = [
  // {path: '', component: HerokuTestComponent},
  // { path: '', component: LoginComponent },
  // { path: '', component: ContentComponent, children: [
  //     {path: '', component: HomeComponent},
  //     {path: 'reservations', component: ReservationsComponent},
  //   ] }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
