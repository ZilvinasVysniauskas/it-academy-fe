import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminModuleRoutingModule } from './admin-module-routing.module';
import { AdminModuleComponent } from './admin-module.component';
import {AppModule} from "../../app.module";


@NgModule({
  declarations: [
    AdminModuleComponent
  ],
  imports: [
    CommonModule,
    AdminModuleRoutingModule,
    AppModule
  ]
})
export class AdminModuleModule { }
