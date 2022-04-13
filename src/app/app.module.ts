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
import { ReservationsComponent } from './modules/user-module/components/reservations/reservations.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MAT_MOMENT_DATE_ADAPTER_OPTIONS, MomentDateAdapter } from '@angular/material-moment-adapter';
import {MatCheckboxModule} from "@angular/material/checkbox";
import {BookingMessagesComponent} from "./modules/admin-module/components/booking-messages/booking-messages.component";
import {AdminComponent} from "./modules/admin-module/components/admin/admin.component";
import { SearchUserComponent } from './modules/admin-module/components/forms/search-user/search-user.component';
import { EditUserFormComponent } from './modules/admin-module/components/forms/edit-user-form/edit-user-form.component';
import {AdminAddUserComponent} from "./modules/admin-module/components/adim-add-user/adim-add-user.component";
import { UserDialogComponentComponent } from './modules/admin-module/modal/user-dialog-component/user-dialog-component.component';
import { MatDialogModule } from '@angular/material/dialog';
import {MatSelectModule} from "@angular/material/select";
import { HistoryLogComponent } from './modules/user-module/components/history-log/history-log.component';
import { ReservationsDialogComponent } from './modules/user-module/modal/reservations-dialog/reservations-dialog.component';
import {AdminModuleComponent} from "./modules/admin-module/admin-module.component";
import {UserModuleComponent} from "./modules/user-module/user-module.component";


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
  ],
  bootstrap: [AppComponent],
  exports: [
    HeaderComponent
  ]
})
export class AppModule {}


