import {Component, OnInit, Sanitizer} from '@angular/core';
import {Room} from "../../interfaces/room";
import {DeskReservationService} from "../../service/reservations/desk-reservation.service";
import {ReservationRequest} from "../../interfaces/reservationRequest";
import {Reservation} from "../../interfaces/reservation";
import * as moment from "moment";
import {dateToString} from "../../shared/utils";
import {MatDialog} from "@angular/material/dialog";
import {Floor} from "../../interfaces/floor";
import {FloorService} from "../../service/floor/floor.service";
import {SelectFloorComponent} from "../forms/select-floor/select-floor.component";
import {BookingMessagesComponent} from "../booking-messages/booking-messages.component";
import {DomSanitizer, SafeHtml} from "@angular/platform-browser";
import {Observable} from "rxjs";
import {Desk} from "../../interfaces/desk";


@Component({
  selector: 'app-reservations',
  templateUrl: './reservations.component.html',
  styleUrls: ['./reservations.component.scss']
})
export class ReservationsComponent implements OnInit {
  reservationDate: moment.Moment = moment();

  placedReservation: boolean = false;

  displayReservationInfo: boolean = true;

  displayReservationMessage!: boolean;

  desksReservationsByDate!: Room[];

  currentReservation?: Reservation;

  selected?: number;

  hoverId?: number;

  floor$: Observable<Floor>;

  floor!: Floor;

  retrievedImage: any;

  displayImage = false;

  constructor(private reservationService: DeskReservationService,
              private floorService: FloorService,
              private matDialog: MatDialog,
              private sanitizer: DomSanitizer) {
    this.floor$ = floorService.getFloorById(localStorage.getItem("floor-id"));

  }

  ngOnInit(): void {
    this.floor$.subscribe(f => {
      this.floor = f;
      this.getFloorPlan();
      this.checkUserCurrentDateReservations();
    });
  }

  getFloorPlan() {
    this.retrievedImage = this.sanitizer.bypassSecurityTrustResourceUrl('data:image/jpg;base64,'
      + this.floor.floorPlan);
  }


  fetchDesksByDate() {
    this.reservationService.getDesksByDate(dateToString(this.reservationDate), this.floor.id)
      .subscribe(rooms => {
        console.log(this.isThereAvailableDesks(rooms) + " HERE")
        this.desksReservationsByDate = rooms;
        this.displayImage = rooms.length == 0;
        if (this.displayReservationMessage || !this.isThereAvailableDesks(rooms)) {
          this.displayErrorMessage(this.getMessage(), this.currentReservation!);
        }
      })
  };

  private getMessage(): string {
    if (this.placedReservation) {
      return "successful"
    }
    if (this.displayReservationMessage) {
      return "reservationExists"
    }
    return "noDesks"
  }

  isThereAvailableDesks(rooms: Room[]): boolean {
    for (let room of rooms) {
      for (let desk of room.desks) {
        if (desk.available) {
          return true;
        }
      }
    }
    return false;
  }

  checkUserCurrentDateReservations() {
    this.reservationService.getUserCurrentDayReservation(dateToString(this.reservationDate)).pipe()
      .subscribe(reservation => {
        if (reservation.status == 200) {
          this.currentReservation = reservation.body!;
          this.displayReservationMessage = true;
        } else {
          this.currentReservation = undefined;
          this.displayReservationMessage = false;
        }
        this.fetchDesksByDate();
        this.selected = undefined;
      });
  }

  displayErrorMessage(message: string, currentReservation: Reservation) {
    this.matDialog.open(BookingMessagesComponent, {data: {message, currentReservation}})
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
    this.reservationService.reserveTable(reservationRequest).subscribe(a => {
      this.placedReservation = true;
      this.checkUserCurrentDateReservations();
    });
  }

  handleReservationChange(date: moment.Moment) {
    console.log(this.placedReservation)
    this.reservationDate = date;
    this.checkUserCurrentDateReservations();
  }

  validateClick(desk: Desk) {
    if (this.currentReservation) {
      this.selected = undefined;
      this.displayErrorMessage(this.getMessage(), this.currentReservation!);
    } else if (this.selected == desk.id) {
      this.selected = undefined;
    } else {
      if (desk.available) {
        this.selected = desk.id;
      }
    }
  }

  minusOneDay() {
    if (this.reservationDate >= moment()) {
      this.reservationDate = moment(this.reservationDate.add(-1, 'day').format())
      this.checkUserCurrentDateReservations();
    }
  }

  plusOneDay() {
    this.reservationDate = moment(this.reservationDate.add(1, 'day').format())
    this.checkUserCurrentDateReservations();
  }

  changeFloor() {
    this.displayImage = false;
    let floorInject = this.floor;
    let department = this.floor.department;
    let chooseReplacementOnDelete = false;
    this.matDialog.open(SelectFloorComponent, {data: {floorInject, chooseReplacementOnDelete, department}})
      .afterClosed()
      .subscribe((floor) => {
        this.floor = floor.floor;
        this.getFloorPlan();
        this.checkUserCurrentDateReservations();
      });
  }

  getBookedDeskMessage(desk: Desk): string {
    if (desk.info) {
      return "Desk is booked by employee " + desk.info?.userFirstName;
    }
    return "Desk is currently unavailable";
  }
}
