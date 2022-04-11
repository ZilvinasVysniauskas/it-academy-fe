import {Component, OnInit} from '@angular/core';
import {Room} from "../../interfaces/room";
import {DeskReservationService} from "../../service/reservations/desk-reservation.service";
import {ReservationRequest} from "../../interfaces/reservationRequest";
import {error} from "@angular/compiler/src/util";
import {Reservation} from "../../interfaces/reservation";
import * as moment from "moment";
import {Observable} from "rxjs";

@Component({
  selector: 'app-reservations',
  templateUrl: './reservations.component.html',
  styleUrls: ['./reservations.component.scss']
})
export class ReservationsComponent implements OnInit {
  reservationDate: Date | null = new Date;

  desksReservationsByDate!: Room[];

  errorMsg!: string;

  currentReservation?: Reservation;

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
      this.fetchDesksByDate();
    });
  }

  placeReservation(deskId: number) {
    const reservationRequest: ReservationRequest = {
      userId: 12345678,
      deskId: deskId,
      date: moment(this.reservationDate).add(1, 'days').toDate().toISOString().split('T')[0]
    }
    this.reservationService.reserveTable(reservationRequest).subscribe( a =>
      this.checkUserCurrentDateReservations()
    );
  }

  handleReservationChange(date: Date | null) {
    this.reservationDate = date;
    this.checkUserCurrentDateReservations();

  }

  cancelReservation(id: number | undefined) {
    return this.reservationService.cancelReservationById(id).subscribe(a => this.checkUserCurrentDateReservations());
  }
}
