import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ReservationsComponent } from './components/reservations/reservations.component';
import { LoginComponent } from './components/login/login.component';
import {AdminComponent} from "./components/admin/admin.component";
import {AdminAddUserComponent} from "./components/adim-add-user/adim-add-user.component";
import {HomeComponent} from "./components/home/home.component";
import {HistoryLogComponent} from "./components/history-log/history-log.component";


sessionStorage.setItem('role', 'user')
sessionStorage.setItem('userId', '12345678')

const userRoutes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'reservations', component: ReservationsComponent },
  { path: 'history', component:  HistoryLogComponent}
];

const adminRoutes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'edit', component: AdminComponent },
  { path: '2', component: AdminComponent },
  { path: '3', component: AdminAddUserComponent },
];


function getRoutes() {
  if (sessionStorage.getItem('role') == 'admin'){
    return adminRoutes
  }
  return userRoutes;
}

@NgModule({
  imports: [RouterModule.forRoot(getRoutes())],
  exports: [RouterModule]
})
export class AppRoutingModule { }
