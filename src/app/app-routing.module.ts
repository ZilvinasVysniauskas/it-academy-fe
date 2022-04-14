import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ReservationsComponent } from './components/reservations/reservations.component';
import { LoginComponent } from './components/login/login.component';
import {AdminComponent} from "./components/admin/admin.component";
import {HomeComponent} from "./components/home/home.component";
import {HistoryLogComponent} from "./components/history-log/history-log.component";
import {AuthentificationGuard} from "./service/authentification.guard";

sessionStorage.setItem('role', 'user')
sessionStorage.setItem('userId', '12345678')

const routes: Routes = [
  { path: 'home',canActivate: [AuthentificationGuard], component: HomeComponent },
  { path: 'reservations', canActivate: [AuthentificationGuard], component: ReservationsComponent },
  { path: 'history', canActivate: [AuthentificationGuard], component:  HistoryLogComponent},
  { path: 'edit', canActivate: [AuthentificationGuard], component:  AdminComponent},
  { path: 'login', component:  LoginComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
