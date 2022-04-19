import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";
import {Reservation} from "../../../interfaces/reservation";
import {DeskReservationService} from "../../../service/reservations/desk-reservation.service";

@Component({
  selector: 'app-reservations-dialog',
  templateUrl: './reservations-dialog.component.html',
  styleUrls: ['./reservations-dialog.component.scss']
})
export class ReservationsDialogComponent {

  test = "test"

  constructor(@Inject(MAT_DIALOG_DATA) public data: { message: string, currentReservation: Reservation },
              public dialogRef: MatDialogRef<ReservationsDialogComponent>,private reservationService: DeskReservationService) {
  }

  cancelReservation($event: number) {
    return this.reservationService.cancelReservationById($event).subscribe( a => this.dialogRef.close({event: 'canceled'}));
  }

  handleCancel() {
    this.dialogRef.close({event: 'closed'});
  }
}
