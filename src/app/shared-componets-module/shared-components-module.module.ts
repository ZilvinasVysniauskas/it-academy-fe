import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {CalendarComponent} from "./calendar/calendar.component";
import {MatDatepickerModule} from "@angular/material/datepicker";
import {MatCardModule} from "@angular/material/card";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {MatInputModule} from "@angular/material/input";
import {MatButtonModule} from "@angular/material/button";
import {MatNativeDateModule, MatOptionModule} from "@angular/material/core";
import {FlexLayoutModule} from "@angular/flex-layout";
import {MatCheckboxModule} from "@angular/material/checkbox";
import {HeaderComponent} from "./header/header.component";
import {HomeComponent} from "./home/home.component";
import {LoginComponent} from "./login/login.component";
import {RouterModule} from "@angular/router";


@NgModule({
  declarations: [CalendarComponent, HeaderComponent, HomeComponent, LoginComponent],
  imports: [
    RouterModule,
    MatInputModule,
    MatButtonModule,
    ReactiveFormsModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatCardModule,
    FlexLayoutModule,
    FormsModule,
    MatCheckboxModule,
    MatOptionModule,
    CommonModule,
  ],
  exports: [CalendarComponent, HeaderComponent]
})
export class SharedComponentsModuleModule {
}
