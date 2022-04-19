import {Component, OnInit} from '@angular/core';
import {Room} from "../../interfaces/room";
import {DeskReservationService} from "../../service/reservations/desk-reservation.service";
import {ReservationRequest} from "../../interfaces/reservationRequest";
import {Reservation} from "../../interfaces/reservation";
import * as moment from "moment";
import {dateToString} from "../../shared/utils";
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
    this.reservationService.getDesksByDate(dateToString(this.reservationDate))
      .subscribe(rooms => {
        console.log(this.isThereAvailableDesks(rooms) +  " HERE")
        this.desksReservationsByDate = rooms;
        if (this.displayReservationMessage || !this.isThereAvailableDesks(rooms)){
          this.displayErrorMessage(this.getMessage() , this.currentReservation!);
        }
      })
  };

  private getMessage(): string {
    if (this.placedReservation){
      return "successful"
    }
    if (this.displayReservationMessage){
      return "reservationExists"
    }
    return "noDesks"
  }

  isThereAvailableDesks(rooms: Room[]): boolean {
    for (let room of rooms){
      for (let desk of room.desks){
        if (desk.available){
          return true;
        }
      }
    }
    return false;
  }

  checkUserCurrentDateReservations() {
    this.reservationService.getUserCurrentDayReservation(dateToString(this.reservationDate)).pipe()
      .subscribe(reservation => {
        if (reservation.status == 200){
          this.currentReservation = reservation.body!;
          this.displayReservationMessage = true;
        }
        else {
          this.currentReservation = undefined;
          this.displayReservationMessage = false;
        }
      this.fetchDesksByDate();
      this.selected = undefined;
    });
  }

  displayErrorMessage(message: string, currentReservation: Reservation) {
    this.matDialog.open(ReservationsDialogComponent, {data: {message, currentReservation}})
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
    if (this.currentReservation) {
      this.displayErrorMessage(this.getMessage(), this.currentReservation!);
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
