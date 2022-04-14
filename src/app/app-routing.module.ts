import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ReservationsComponent } from './components/reservations/reservations.component';
import { LoginComponent } from './components/login/login.component';
import {AdminComponent} from "./components/admin/admin.component";
import {AdminAddUserComponent} from "./components/adim-add-user/adim-add-user.component";



const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: '1', component: ReservationsComponent },
  { path: '2', component: AdminComponent },
  { path: '3', component: AdminAddUserComponent },
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
