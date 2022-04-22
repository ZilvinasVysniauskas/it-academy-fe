import { ReservationHistoryService } from './../../service/reservation-history/reservation-history.service';
import { Component, OnInit } from '@angular/core';
import { mergeMap } from 'rxjs-compat/operator/mergeMap';

@Component({
  selector: 'app-reservation-history',
  templateUrl: './reservation-history.component.html',
  styleUrls: ['./reservation-history.component.scss']
})

export class ReservationHistoryComponent implements OnInit {

  displayedColumns: string[] = ['date', 'buildingName', 'floorNumber', 'roomName', 'deskName', 'reservationStatus'];

  history:any;
  
  constructor(private reservationHistoryData:ReservationHistoryService) {}

  ngOnInit(): void {
    this.reservationHistoryData.fetchReservationHistory().subscribe((result)=>{
      console.log("result",result)
      this.history=result;
    });  
  }
  
  //  cancelReservation(id: number) {
  //   return this.reservationHistoryData.cancelReservationById(id).subscribe(_a => this.checkReservations());
  //  }
  // checkReservations() {
  //   throw new Error('Method not implemented.');
  // }

}
