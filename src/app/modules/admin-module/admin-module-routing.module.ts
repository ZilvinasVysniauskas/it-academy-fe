import { NgModule } from '@angular/core';
// import { RouterModule, Routes } from '@angular/router';
import {AdminComponent} from "./components/admin/admin.component";
import {HomeComponent} from "../../components/home/home.component";
import {RouterModule, Routes} from "@angular/router";

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'edit', component: AdminComponent },
]
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminModuleRoutingModule { }
