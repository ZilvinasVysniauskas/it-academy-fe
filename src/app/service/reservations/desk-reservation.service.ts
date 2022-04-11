import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Room} from "../../interfaces/room";
import {ReservationRequest} from "../../interfaces/reservationRequest";

@Injectable({
  providedIn: 'root'
})
export class DeskReservationService {

  constructor(private httpClient: HttpClient) { }

  getReservationsByDate(reservationDate: Date | null): Observable<Room[]> {
    let date = reservationDate?.toISOString().split('T')[0]
    console.log(date);
    return this.httpClient.get<Room[]>("http://localhost:8080/api/v1/reservations/" + date);
  }

  reserveTable(reservationRequest: ReservationRequest): Observable<ReservationRequest> {
    console.log("ger")
    return this.httpClient.post<ReservationRequest>("http://localhost:8080/api/v1/reservations", reservationRequest)
  }
}