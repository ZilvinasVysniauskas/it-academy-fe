import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatInputModule } from '@angular/material/input';
import { LoginComponent } from './components/login/login.component';
import { MatButtonModule } from '@angular/material/button';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { CalendarComponent } from './components/calendar/calendar.component';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { DateAdapter, MAT_DATE_FORMATS, MAT_DATE_LOCALE, MatNativeDateModule } from '@angular/material/core';
import { MatCardModule } from '@angular/material/card';
import { HeaderComponent } from './components/header/header.component';
import { HomeComponent } from './components/home/home.component';
import { ReservationsComponent } from './components/reservations/reservations.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { ContentComponent } from './components/content/content.component';
import { MAT_MOMENT_DATE_ADAPTER_OPTIONS, MomentDateAdapter } from '@angular/material-moment-adapter';
import {MatCheckboxModule} from "@angular/material/checkbox";
import {BookingMessagesComponent} from "./components/booking-messages/booking-messages.component";
import {AdminComponent} from "./components/admin/admin.component";
import { SearchUserComponent } from './components/forms/search-user/search-user.component';





export const MY_DATE_FORMATS = {
  parse: {
    dateInput: 'YYYY-MM-DD',
  },
  display: {
    dateInput: 'YYYY-MM-DD',
    monthYearLabel: 'MMMM YYYY',
    dateA11yLabel: 'LL',
    monthYearA11yLabel: 'MMMM YYYY'
  },
};


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    CalendarComponent,
    HeaderComponent,
    HomeComponent,
    ReservationsComponent,
    ContentComponent,
    BookingMessagesComponent,
    AdminComponent,
    SearchUserComponent
  ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        HttpClientModule,
        BrowserAnimationsModule,
        MatInputModule,
        MatButtonModule,
        ReactiveFormsModule,
        MatDatepickerModule,
        MatNativeDateModule,
        MatCardModule,
        FlexLayoutModule,
        FormsModule,
        MatCheckboxModule
    ],
  providers: [
    {
      provide: DateAdapter,
      useClass: MomentDateAdapter,
      deps: [MAT_DATE_LOCALE, MAT_MOMENT_DATE_ADAPTER_OPTIONS],
    },
    {
      provide: MAT_DATE_FORMATS,
      useValue: MY_DATE_FORMATS,
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}

/*
@NgModule({
  imports: [MatDatepickerModule, MatMomentDateModule],
  providers: [
    {provide: MAT_MOMENT_DATE_ADAPTER_OPTIONS, useValue: {useUtc: true}}
  ]
 */
