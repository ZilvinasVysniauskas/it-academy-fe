import { NgModule } from '@angular/core';
import { UserModuleComponent } from './user-module.component';
import {SharedComponentsModuleModule} from "../../shared-componets-module/shared-components-module.module";

import {MatInputModule} from "@angular/material/input";
import {MatButtonModule} from "@angular/material/button";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {MatDatepickerModule} from "@angular/material/datepicker";
import {MatNativeDateModule, MatOptionModule} from "@angular/material/core";
import {MatCardModule} from "@angular/material/card";
import {FlexLayoutModule} from "@angular/flex-layout";
import {MatCheckboxModule} from "@angular/material/checkbox";
import {HistoryLogComponent} from "./components/history-log/history-log.component";
import {ReservationsComponent} from "./components/reservations/reservations.component";
import {ReservationsDialogComponent} from "./modal/reservations-dialog/reservations-dialog.component";
import {BookingMessagesComponent} from "./components/booking-messages/booking-messages.component";
import {RouterModule} from "@angular/router";

@NgModule({
  declarations: [
    UserModuleComponent,
    HistoryLogComponent,
    ReservationsComponent,
    ReservationsDialogComponent,
    BookingMessagesComponent
  ],
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
    SharedComponentsModuleModule
  ]
})
export class UserModuleModule { }
