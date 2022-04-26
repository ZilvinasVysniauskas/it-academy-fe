import { ReservationHistoryService } from './../../service/reservation-history/reservation-history.service';
import { Component } from '@angular/core';
import { Reservation } from 'src/app/interfaces/reservation';
import {MatDialog} from "@angular/material/dialog";
import {CancelReservationComponent} from "../cancel-reservation/cancel-reservation.component";

@Component({
  selector: 'app-reservation-history',
  templateUrl: './reservation-history.component.html',
  styleUrls: ['./reservation-history.component.scss']
})

export class ReservationHistoryComponent {

  displayedColumns: string[] = ['date', 'buildingName', 'floorNumber', 'roomName', 'deskName', 'reservationStatus'];

  reservations!:Reservation[];

  constructor(private reservationHistoryService:ReservationHistoryService, private matDialog:MatDialog) {
    this.fetchReservations();
  }

  fetchReservations(){
    this.reservationHistoryService.fetchReservationHistory().subscribe(reservation => this.reservations = reservation);
  }

   cancelReservationById(reservation:Reservation) {
    if (reservation.reservationStatus == "ACTIVE") {
      this.matDialog.open(CancelReservationComponent, {data: {reservation}})
        .afterClosed()
        .subscribe(() => {
          this.fetchReservations()
        });
    }
  }
}
