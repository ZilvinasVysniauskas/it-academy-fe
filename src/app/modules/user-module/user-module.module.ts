import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserModuleRoutingModule } from './user-module-routing.module';
import { UserModuleComponent } from './user-module.component';
import {AppModule} from "../../app.module";


@NgModule({
  declarations: [
    UserModuleComponent
  ],
  imports: [
    CommonModule,
    UserModuleRoutingModule,
    AppModule
  ]
})
export class UserModuleModule { }
