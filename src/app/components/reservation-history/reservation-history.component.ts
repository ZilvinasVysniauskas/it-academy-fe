import {Component, OnInit} from '@angular/core';
import {Reservation} from 'src/app/interfaces/reservation';
import {MatDialog} from "@angular/material/dialog";
import {CancelReservationComponent} from "../cancel-reservation/cancel-reservation.component";
import {DeskReservationService} from "../../service/reservations/desk-reservation.service";
import {FormControl} from "@angular/forms";
import {Building} from "../../interfaces/building";
import {BuildingService} from "../../service/building/building.service";
import {Floor} from "../../interfaces/floor";
import {FloorService} from "../../service/floor/floor.service";

@Component({
  selector: 'app-reservation-history',
  templateUrl: './reservation-history.component.html',
  styleUrls: ['./reservation-history.component.scss']
})

export class ReservationHistoryComponent implements OnInit{

  reservations!: Reservation[];

  reservationsForDisplay!: Reservation[]
  buildings!: Building[];
  desc = true;
  floors?: Floor[];
  selectedBuildingName: string = '';

  constructor(private reservationService: DeskReservationService, private matDialog: MatDialog, private buildingService:BuildingService, private floorService: FloorService) {
    this.fetchReservations();
    this.buildingService.getAllBuilding().subscribe(b => this.buildings = b)
    this.buildingSelect.setValue('');
    this.floorSelected.setValue('');
    this.statusSelected.setValue('');
  }

  buildingSelect = new FormControl();
  statusSelected = new FormControl();
  floorSelected = new FormControl();
  arrowUp: boolean = true;
  arrowDown: boolean = false;

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
      this.filterList()
    })
  }

  cancelReservationById(reservation: Reservation) {
    if (reservation.reservationStatus == "ACTIVE") {
      this.matDialog.open(CancelReservationComponent, {data: {reservation}})
        .afterClosed()
        .subscribe(() => {
          this.fetchReservations();
        });
    }
  }

  filterList() {
    this.reservationsForDisplay = this.reservations.filter(
      reservation => reservation.reservationStatus?.startsWith(this.statusSelected.value) &&
        reservation.buildingName.startsWith(this.selectedBuildingName) &&
        reservation.floorName.startsWith(this.floorSelected.value)
    )
  }

  getFloors() {
    if (this.buildingSelect.value.buildingName) {
      this.floorService.getFloorsByBuildingId(this.buildingSelect.value.id).subscribe(f  => {
        this.floors = f;
        this.floorSelected.setValue("");
        this.selectedBuildingName = this.buildingSelect.value.buildingName;
        this.filterList();
      })
    }else {
      this.floors = [];
      this.floorSelected.setValue("");
      this.selectedBuildingName = '';
      this.filterList()
    }
  }

  ngOnInit(): void {
  }

}
