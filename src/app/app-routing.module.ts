import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ReservationsComponent } from './modules/user-module/components/reservations/reservations.component';
import { LoginComponent } from './components/login/login.component';
import {AdminComponent} from "./modules/admin-module/components/admin/admin.component";
import {AdminAddUserComponent} from "./modules/admin-module/components/adim-add-user/adim-add-user.component";
import {HomeComponent} from "./components/home/home.component";
import {HistoryLogComponent} from "./modules/user-module/components/history-log/history-log.component";

const routes: Routes = [
  {path: '', component: LoginComponent},
  { path: 'admin', loadChildren: () => import('./modules/admin-module/admin-module.module').then(m => m.AdminModuleModule) },
  { path: 'user', loadChildren: () => import('./modules/user-module/user-module.module').then(m => m.UserModuleModule) }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
