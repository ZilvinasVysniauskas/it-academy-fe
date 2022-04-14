import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Reservation} from "../../../../interfaces/reservation";

@Component({
  selector: 'app-booking-messages',
  templateUrl: './booking-messages.component.html',
  styleUrls: ['./booking-messages.component.scss']
})
export class BookingMessagesComponent implements OnInit {

  @Input() currentReservation!: Reservation;
  @Input() message!: string;
  @Output() cancelButtonClick: EventEmitter<number> = new EventEmitter<number>()
  @Output() keepReservationButtonClick: EventEmitter<any> = new EventEmitter<any>()
  @Output() okClicked: EventEmitter<any> = new EventEmitter<any>();

  inputIdToCancelButton(id: number) {
    this.cancelButtonClick.emit(id);
  }
  keepReservationButtonClickEvent() {
    this.keepReservationButtonClick.emit();
  }

  constructor() { }

  ngOnInit(): void {
  }




}
