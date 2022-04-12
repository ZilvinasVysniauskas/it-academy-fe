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
  reservationDate: moment.Moment | null =  moment();

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
    this.checkUserCurrentDateReservations();
  }

  fetchDesksByDate() {
    this.reservationService.getReservationsByDate(this.dateToString(this.reservationDate!))
      .subscribe(res => this.desksReservationsByDate = res);
  }

  checkUserCurrentDateReservations() {
    console.log(this.reservationDate)
    this.reservationService.getUserCurrentDayReservation(this.dateToString(this.reservationDate!)).subscribe(reservation => {
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
      date: this.dateToString(this.reservationDate!)
    }
    this.reservationService.reserveTable(reservationRequest).subscribe(a =>
      this.checkUserCurrentDateReservations()
    );
  }

  handleReservationChange(date: moment.Moment) {
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

  private dateToString(date: moment.Moment): string {
    console.log(date.format('YYYY-MM-DD'))
    return date.format('YYYY-MM-DD');
  }


}
