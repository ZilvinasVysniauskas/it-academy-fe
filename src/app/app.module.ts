import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatInputModule } from '@angular/material/input';
import { LoginComponent } from './components/login/login.component';
import { MatButtonModule } from '@angular/material/button';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { CalendarComponent } from './components/calendar/calendar.component';
import { MatDatepickerModule } from '@angular/material/datepicker';
import {
  DateAdapter,
  MAT_DATE_FORMATS,
  MAT_DATE_LOCALE,
  MatNativeDateModule,
  MatOptionModule
} from '@angular/material/core';
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
import { EditUserFormComponent } from './components/forms/edit-user-form/edit-user-form.component';
import {AdminAddUserComponent} from "./components/adim-add-user/adim-add-user.component";
import { UserDialogComponentComponent } from './components/modals/user-dialog-component/user-dialog-component.component';
import { MatDialogModule } from '@angular/material/dialog';
import {MatSelectModule} from "@angular/material/select";
import { HistoryLogComponent } from './components/history-log/history-log.component';
import {Routes} from "@angular/router";
import { ReservationsDialogComponent } from './components/modals/reservations-dialog/reservations-dialog.component';
import {TokenInterceptor} from "./service/interpretor";





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
    SearchUserComponent,
    EditUserFormComponent,
    AdminAddUserComponent,
    UserDialogComponentComponent,
    HistoryLogComponent,
    ReservationsDialogComponent,
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
    MatCheckboxModule,
    MatDialogModule,
    MatOptionModule,
    MatSelectModule,
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
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenInterceptor,
      multi: true
    }
  ],
  bootstrap: [AppComponent],
})
export class AppModule {

  userRoutes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'reservations', component: ReservationsComponent },
    { path: 'history', component:  HistoryLogComponent}
  ];

  adminRoutes: Routes = [
    { path: '', component: LoginComponent },
    { path: '1', component: ReservationsComponent },
    { path: '2', component: AdminComponent },
    { path: '3', component: AdminAddUserComponent },
  ];
}

/*
@NgModule({
  imports: [MatDatepickerModule, MatMomentDateModule],
  providers: [
    {provide: MAT_MOMENT_DATE_ADAPTER_OPTIONS, useValue: {useUtc: true}}
  ]
 */
