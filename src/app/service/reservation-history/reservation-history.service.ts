import { Observable } from 'rxjs/Rx';
import {HttpClient} from "@angular/common/http";
import { Injectable } from '@angular/core';
import { Reservation } from 'src/app/interfaces/reservation';

@Injectable({
  providedIn: 'root'
})
export class ReservationHistoryService {

  private apiUserReservationHistory = "api/v1/reservations";

  constructor(private httpClient: HttpClient) { }

  fetchReservationHistory(): Observable<Reservation[]> {
    return this.httpClient.get<Reservation[]>(this.apiUserReservationHistory);
  }

  cancelReservationById(reservationId: number): Observable<any> {
    return this.httpClient.delete("/api/v1/reservations/"+reservationId);
  }
}
