import { Observable } from 'rxjs/Rx';
import {HttpClient} from "@angular/common/http";
import { Injectable } from '@angular/core';
import { Reservation } from 'src/app/interfaces/reservation';
import {environment} from "../../../environments/environment.prod";

@Injectable({
  providedIn: 'root'
})
export class ReservationHistoryService {
  cancelReservationById(id: number) {
    throw new Error('Method not implemented.');
  }

  baseUrl = environment.baseUrl;
  private apiUserReservationHistory = this.baseUrl + "api/v1/reservations";

  fetchReservation: any;

  constructor(private httpClient: HttpClient) { }

  fetchReservationHistory(): Observable<Reservation[]> {
    return this.httpClient.get<Reservation[]>(this.apiUserReservationHistory);
  }

  // cancelReservationById(id: number): Observable<any> {
  //   return this.httpClient.delete("/api/v1/reservations");
  // }
}
