import {Component, OnInit} from '@angular/core';
import {Room} from "../../interfaces/room";
import {DeskReservationService} from "../../service/reservations/desk-reservation.service";
import {ReservationRequest} from "../../interfaces/reservationRequest";
import {Reservation} from "../../interfaces/reservation";
import * as moment from "moment";


@Component({
  selector: 'app-reservations',
  templateUrl: './reservations.component.html',
  styleUrls: ['./reservations.component.scss']
})
export class ReservationsComponent implements OnInit {
  reservationDate: Date | null = new Date;

  displayReservationInfo: boolean = true;

  displayReservationMessage!: boolean;

  isCurrentReservationActive!: boolean;

  desksReservationsByDate!: Room[];

  currentReservation?: Reservation;

  selected?: number;

  hoverId?: number;

  constructor(private reservationService: DeskReservationService) {
  }

  ngOnInit(): void {
    // this.checkUserCurrentDateReservations();
    this.fetchDesksByDate();
  }

  fetchDesksByDate() {
    this.reservationService.getReservationsByDate(this.reservationDate)
      .subscribe(res => this.desksReservationsByDate = res);
  }

  checkUserCurrentDateReservations() {
    this.reservationService.getUserCurrentDayReservation(this.reservationDate).subscribe(reservation => {
      this.currentReservation = reservation;
      this.displayReservationMessage = this.isCurrentReservationActive = reservation?.date !== undefined;
      console.log(this.displayReservationMessage)
      this.fetchDesksByDate();
      this.selected = undefined;
    });
  }

  placeReservation() {
    const reservationRequest: ReservationRequest = {
      userId: 12345678,
      deskId: this.selected!,
      date: moment(this.reservationDate).add(1, 'days').toDate().toISOString().split('T')[0]
    }
    this.reservationService.reserveTable(reservationRequest).subscribe(a =>
      this.checkUserCurrentDateReservations()
    );
  }

  handleReservationChange(date: Date | null) {
    this.reservationDate = date;
    this.checkUserCurrentDateReservations();

  }

  validateClick(id: number) {
    if (this.isCurrentReservationActive) {
      this.displayReservationMessage = true;
    } else if (this.selected == id) {
      this.selected = undefined;
    } else {
      this.selected = id;
    }
  }

  cancelReservation(id: number | undefined) {
    return this.reservationService.cancelReservationById(id).subscribe(a => this.checkUserCurrentDateReservations());
  }


}
