import {Component} from '@angular/core';
import {Reservation} from 'src/app/interfaces/reservation';
import {MatDialog} from "@angular/material/dialog";
import {CancelReservationComponent} from "../cancel-reservation/cancel-reservation.component";
import {DeskReservationService} from "../../service/reservations/desk-reservation.service";
import {FormControl} from "@angular/forms";
import {Building} from "../../interfaces/building";
import {BuildingService} from "../../service/building/building.service";

@Component({
  selector: 'app-reservation-history',
  templateUrl: './reservation-history.component.html',
  styleUrls: ['./reservation-history.component.scss']
})

export class ReservationHistoryComponent {

  displayedColumns: string[] = ['date', 'buildingName', 'floorNumber', 'roomName', 'deskName', 'reservationStatus'];

  reservations!: Reservation[];

  reservationsForDisplay!: Reservation[]
  buildings!: Building[];
  desc = true;

  constructor(private reservationService: DeskReservationService, private matDialog: MatDialog, private buildingService:BuildingService) {
    this.fetchReservations();
    this.buildingService.getAllBuilding().subscribe(b => this.buildings = b)
  }

  buildingSelect = new FormControl();
  statusSelected = new FormControl();

  sortReservationsByDate() {
    if (this.desc) {
      this.desc = false;
      this.reservationsForDisplay.sort((x, y) => +new Date(x.date) - +new Date(y.date));
    } else {
      this.desc = true;
      this.reservationsForDisplay.sort((x, y) => +new Date(y.date) - +new Date(x.date));
    }
  }

  fetchReservations() {
    this.reservationService.fetchReservationHistory().subscribe(reservation => {
      this.reservationsForDisplay = this.reservations = reservation;
    })
  }

  cancelReservationById(reservation: Reservation) {
    if (reservation.reservationStatus == "ACTIVE") {
      this.matDialog.open(CancelReservationComponent, {data: {reservation}})
        .afterClosed()
        .subscribe(() => {
          this.fetchReservations()
        });
    }
  }

  filterList() {
    if (this.buildingSelect.value && this.statusSelected.value) {
      this.reservationsForDisplay = this.reservations.filter(reservation =>
        reservation.reservationStatus == this.statusSelected.value && reservation.buildingName == this.buildingSelect.value.buildingName)
    }
    else if (this.buildingSelect.value) {
      this.reservationsForDisplay = this.reservations.filter(reservation => reservation.buildingName == this.buildingSelect.value.buildingName)
    }
    else if (this.statusSelected.value) {
      this.reservationsForDisplay = this.reservations.filter(reservation => reservation.reservationStatus == this.statusSelected.value)
    }
    else {
      this.reservationsForDisplay = this.reservations;
    }
  }
}
