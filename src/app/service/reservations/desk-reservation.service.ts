import {Injectable} from '@angular/core';
import {HttpClient, HttpErrorResponse, HttpResponse} from "@angular/common/http";
import {Observable} from 'rxjs/Rx';
import {Room} from "../../interfaces/room";
import {ReservationRequest} from "../../interfaces/reservationRequest";
import 'rxjs/add/operator/catch';
import {Reservation} from "../../interfaces/reservation";

@Injectable({
  providedIn: 'root'
})
export class DeskReservationService {

  constructor(private httpClient: HttpClient) {
  }

  desksApi = '/api/v1/desks/';
  reservationsApi = '/api/v1/reservations/';

  getDesksByDate(reservationDate: string ): Observable<Room[]> {
    return this.httpClient.get<Room[]>(this.desksApi + reservationDate!);
  }

  reserveTable(reservationRequest: ReservationRequest): Observable<ReservationRequest> {
    return this.httpClient.post<ReservationRequest>(this.reservationsApi, reservationRequest)
  }

  getUserCurrentDayReservation(reservationDate: string): Observable<HttpResponse<Reservation>> {
    return this.httpClient.get<Reservation>(this.reservationsApi + reservationDate, {observe: 'response'})
  }

  cancelReservationById(id: number): Observable<any> {
    return this.httpClient.delete(this.reservationsApi + id);
  }
}
