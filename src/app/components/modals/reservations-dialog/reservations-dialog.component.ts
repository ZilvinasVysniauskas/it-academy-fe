import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";
import {Reservation} from "../../../interfaces/reservation";

@Component({
  selector: 'app-reservations-dialog',
  templateUrl: './reservations-dialog.component.html',
  styleUrls: ['./reservations-dialog.component.scss']
})
export class ReservationsDialogComponent implements OnInit {

  currentReservation!: Reservation

  constructor(@Inject(MAT_DIALOG_DATA) public data: {placedReservation: boolean, currentReservation: Reservation},
              public dialogRef: MatDialogRef<ReservationsDialogComponent>) {
  }

  ngOnInit(): void {
    console.log(this.currentReservation)
    console.log('MAT')
    console.log(this.data.placedReservation)
    console.log('MAT')
  }

  cancelReservation($event: number) {

  }

  handleCancel() {
   this.dialogRef.close();
  }
}
