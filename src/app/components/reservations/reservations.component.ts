import {Component, OnInit} from '@angular/core';
import {Room} from "../../interfaces/room";
import {DeskReservationService} from "../../service/reservations/desk-reservation.service";
import {ReservationRequest} from "../../interfaces/reservationRequest";

@Component({
  selector: 'app-reservations',
  templateUrl: './reservations.component.html',
  styleUrls: ['./reservations.component.scss']
})
export class ReservationsComponent implements OnInit {
  reservationDate: Date | null = new Date();

  desksReservationsByDate!: Room[];

  constructor(private reservationService: DeskReservationService) {
  }

  ngOnInit(): void {
    this.fetchDesksByDate();
  }

  fetchDesksByDate() {
    this.reservationService.getReservationsByDate(this.reservationDate)
        .subscribe(res => this.desksReservationsByDate = res);
  }

  placeReservation(deskId: number) {
    const reservationRequest: ReservationRequest = {
      userId: 12345678,
      deskId: deskId,
      date: this.reservationDate!.toISOString().split('T')[0]
    }
    this.reservationService.reserveTable(reservationRequest).subscribe();
    this.fetchDesksByDate();
  }

  handleReservationChange(date: Date | null) {
    this.reservationDate = date;
    this.fetchDesksByDate();
  }

}