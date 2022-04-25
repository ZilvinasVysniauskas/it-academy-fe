import {Component, EventEmitter, Inject, Input, OnInit, Output} from '@angular/core';
import {Reservation} from "../../interfaces/reservation";
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";
import {DeskReservationService} from "../../service/reservations/desk-reservation.service";

@Component({
  selector: 'app-booking-messages',
  templateUrl: './booking-messages.component.html',
  styleUrls: ['./booking-messages.component.scss']
})
export class BookingMessagesComponent implements OnInit {

  currentReservation!: Reservation;
  message!: string;
  @Output() cancelButtonClick: EventEmitter<number> = new EventEmitter<number>()
  @Output() keepReservationButtonClick: EventEmitter<any> = new EventEmitter<any>()
  @Output() okClicked: EventEmitter<any> = new EventEmitter<any>();

  constructor(@Inject(MAT_DIALOG_DATA) public data: { message: string, currentReservation: Reservation },
              public dialogRef: MatDialogRef<BookingMessagesComponent>,private reservationService: DeskReservationService) {
    this.message = data.message;
    this.currentReservation = data.currentReservation;
  }

  inputIdToCancelButton(id: number) {
   this.reservationService.cancelReservationById(id).subscribe( a => this.dialogRef.close({event: 'canceled'}));
  }
  keepReservationButtonClickEvent() {
    this.dialogRef.close({event: 'closed'});
  }

  ngOnInit(): void {
  }




}
