import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatInputModule } from '@angular/material/input';
import { LoginComponent } from './components/login/login.component';
import { MatButtonModule } from '@angular/material/button';
import {FormGroup, FormsModule, ReactiveFormsModule} from '@angular/forms';
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
import { MatDialogModule } from '@angular/material/dialog';
import {MatSelectModule} from "@angular/material/select";
import { ReservationHistoryComponent } from './components/reservation-history/reservation-history.component';
import {RouterModule, Routes} from "@angular/router";
import {TokenInterceptor} from "./service/interpretor";
import { ManageDesksComponent } from './components/manage-desks/manage-desks.component';
import { AddDesksFormComponent } from './components/forms/add-desks-form/add-desks-form.component';
import { AddNewRoomComponent } from './components/forms/add-new-room/add-new-room.component';
import { ClickToEditComponent } from './components/click-to-edit/click-to-edit.component';
import { ChangePasswordComponent } from './components/forms/change-password/change-password.component';

import {MatTableModule} from "@angular/material/table";

import { SelectFloorComponent } from './components/forms/select-floor/select-floor.component';
import { AddNewBuildingComponent } from './components/forms/add-new-building/add-new-building.component';
import { AddNewFloorComponent } from './components/forms/add-new-floor/add-new-floor.component';
import { NotificationMessageComponent } from './components/forms/notification-message/notification-message.component';
import {MatFormField, MatFormFieldControl, MatFormFieldModule} from "@angular/material/form-field";
import {ScrollingModule} from "@angular/cdk/scrolling";
import { SendMessageFormComponent } from './components/forms/send-message-form/send-message-form.component';

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
    ManageDesksComponent,
    AddDesksFormComponent,
    AddNewRoomComponent,
    ClickToEditComponent,
    ChangePasswordComponent,
    ReservationHistoryComponent,
    SelectFloorComponent,
    AddNewBuildingComponent,
    AddNewFloorComponent,
    NotificationMessageComponent,
    SendMessageFormComponent,
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
    MatTableModule,
    MatFormFieldModule,
    ScrollingModule,
    RouterModule,
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
export class AppModule {}

/*
@NgModule({
  imports: [MatDatepickerModule, MatMomentDateModule],
  providers: [
    {provide: MAT_MOMENT_DATE_ADAPTER_OPTIONS, useValue: {useUtc: true}}
  ]
 */
