import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";
import {Reservation} from "../../interfaces/reservation";
import {DeskReservationService} from "../../service/reservations/desk-reservation.service";

@Component({
  selector: 'app-cancel-reservation',
  templateUrl: './cancel-reservation.component.html',
  styleUrls: ['./cancel-reservation.component.scss']
})
export class CancelReservationComponent implements OnInit {

  reservation: Reservation;

  constructor(@Inject(MAT_DIALOG_DATA) public data: { reservation: Reservation },
              private reservationService:DeskReservationService,
              public dialogRef: MatDialogRef<CancelReservationComponent>) {
    this.reservation = data.reservation;
  }


  ngOnInit(): void {
  }


  cancelReservationById(reservationId: number) {
    this.reservationService.cancelReservationById(reservationId).subscribe(a => this.dialogRef.close({event: 'canceled'}));
  }

  keepReservationButtonClickEvent() {
    this.dialogRef.close({event: this.reservation});
  }

}
