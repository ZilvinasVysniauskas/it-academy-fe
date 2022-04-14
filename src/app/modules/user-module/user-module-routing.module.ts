import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomeComponent} from "../../shared-componets-module/home/home.component";
import {ReservationsComponent} from "./components/reservations/reservations.component";
import {HistoryLogComponent} from "./components/history-log/history-log.component";

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'reservations', component: ReservationsComponent },
  { path: 'history', component:  HistoryLogComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserModuleRoutingModule { }
