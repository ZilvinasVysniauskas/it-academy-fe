import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Reservation} from "../../interfaces/reservation";

@Component({
  selector: 'app-error-reservation',
  templateUrl: './error-reservation.component.html',
  styleUrls: ['./error-reservation.component.scss']
})
export class ErrorReservationComponent implements OnInit {

  @Input() currentReservation?: Reservation;
  @Output() cancelButtonClick: EventEmitter<number> = new EventEmitter<number>()
  @Output() keepReservationButtonClick: EventEmitter<any> = new EventEmitter<any>()

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
