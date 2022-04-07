import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-reservations',
  templateUrl: './reservations.component.html',
  styleUrls: ['./reservations.component.scss']
})
export class ReservationsComponent implements OnInit {
  reservationDate: Date | null = new Date();

  constructor() { }

  ngOnInit(): void {
  }

  handleReservationChange(date: Date | null) {
    this.reservationDate = date;
  }

}
