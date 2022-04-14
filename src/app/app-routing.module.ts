import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './shared-componets-module/login/login.component';

const routes: Routes = [
  {path: '', component: LoginComponent},
  { path: 'admin', loadChildren: () => import('./modules/admin-module/admin-module.module').then(m => m.AdminModuleModule) },
  { path: 'user', loadChildren: () => import('./modules/user-module/user-module.module').then(m => m.UserModuleModule)}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
