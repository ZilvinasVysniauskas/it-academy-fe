import {Component, OnInit} from '@angular/core';
import {Room} from "../../interfaces/room";
import {DeskReservationService} from "../../service/reservations/desk-reservation.service";
import {ReservationRequest} from "../../interfaces/reservationRequest";
import {Reservation} from "../../interfaces/reservation";
import * as moment from "moment";
import {dateToString} from "../../shared/utils";
import {UserDialogComponentComponent} from "../modals/user-dialog-component/user-dialog-component.component";
import {MatDialog} from "@angular/material/dialog";
import {ReservationsDialogComponent} from "../modals/reservations-dialog/reservations-dialog.component";


@Component({
  selector: 'app-reservations',
  templateUrl: './reservations.component.html',
  styleUrls: ['./reservations.component.scss']
})
export class ReservationsComponent implements OnInit {
  reservationDate: moment.Moment =  moment();

  placedReservation: boolean = false;

  displayReservationInfo: boolean = true;

  displayReservationMessage!: boolean;

  isCurrentReservationActive!: boolean;

  desksReservationsByDate!: Room[];

  currentReservation?: Reservation;

  selected?: number;

  hoverId?: number;

  constructor(private reservationService: DeskReservationService, private matDialog: MatDialog) {
  }


  ngOnInit(): void {
    this.checkUserCurrentDateReservations();
  }

  fetchDesksByDate() {
    this.reservationService.getReservationsByDate(dateToString(this.reservationDate))
      .subscribe(res => this.desksReservationsByDate = res);
  }

  checkUserCurrentDateReservations() {
    this.reservationService.getUserCurrentDayReservation(dateToString(this.reservationDate)).subscribe(reservation => {
      this.currentReservation = reservation;
      this.displayReservationMessage = this.isCurrentReservationActive = reservation?.date !== undefined;
      if (this.displayReservationMessage){
        this.displayErrorMessage(this.placedReservation, this.currentReservation);
      }
      this.fetchDesksByDate();
      this.selected = undefined;
    });
  }
  displayErrorMessage(placedReservation: boolean, currentReservation: Reservation) {
    this.matDialog.open(ReservationsDialogComponent, {data: {placedReservation, currentReservation}})
      .afterClosed()
      .subscribe((result) => {
        if (result?.event == 'canceled') {
          this.checkUserCurrentDateReservations()
        }
        if (this.placedReservation) {
          this.placedReservation = false;
        }
      });
  }

  placeReservation() {
    const reservationRequest: ReservationRequest = {
      userId: 12345678,
      deskId: this.selected!,
      date: dateToString(this.reservationDate)
    }
    this.reservationService.reserveTable(reservationRequest).subscribe( a =>{
      this.placedReservation = true;
      this.checkUserCurrentDateReservations();
    });
  }

  handleReservationChange(date: moment.Moment) {
    console.log(this.placedReservation)
    this.reservationDate = date;
    this.checkUserCurrentDateReservations();
  }

  validateClick(id: number) {
    if (this.isCurrentReservationActive) {
      this.displayErrorMessage(this.placedReservation, this.currentReservation!);
    } else if (this.selected == id) {
      this.selected = undefined;
    } else {
      this.selected = id;
    }
  }

  minusOneDay(){
    if (this.reservationDate >= moment()){
      this.reservationDate = moment(this.reservationDate.add(-1, 'day').format())
      this.checkUserCurrentDateReservations();
    }
  }

  plusOneDay() {
    this.reservationDate = moment(this.reservationDate.add(1, 'day').format())
    this.checkUserCurrentDateReservations();
  }

}
