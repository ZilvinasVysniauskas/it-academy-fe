import {Injectable} from '@angular/core';
import {HttpClient, HttpErrorResponse} from "@angular/common/http";
import {Observable} from 'rxjs/Rx';
import {Room} from "../../interfaces/room";
import {ReservationRequest} from "../../interfaces/reservationRequest";
import 'rxjs/add/operator/catch';
import {Reservation} from "../../interfaces/reservation";
import * as moment from 'moment';

@Injectable({
  providedIn: 'root'
})
export class DeskReservationService {

  constructor(private httpClient: HttpClient) {
  }

  getReservationsByDate(reservationDate: string ): Observable<Room[]> {
    return this.httpClient.get<Room[]>("http://localhost:8080/api/v1/reservations/" + reservationDate!);
  }


  reserveTable(reservationRequest: ReservationRequest): Observable<ReservationRequest> {
    return this.httpClient.post<ReservationRequest>("http://localhost:8080/api/v1/reservations", reservationRequest)
  }

  getUserCurrentDayReservation(reservationDate: string): Observable<Reservation> {
    return this.httpClient.get<Reservation>("http://localhost:8080/api/v1/reservations/" + reservationDate + "/12345678")
  }

  // private dateToString(reservationDate: string): string {
  //   //TODO fix date problem
  //   return moment(reservationDate).add(1, 'days').toDate().toISOString().split('T')[0];
  // }

  cancelReservationById(id: number | undefined): Observable<any> {
    return this.httpClient.delete("http://localhost:8080/api/v1/reservations/" + id);
  }
}
