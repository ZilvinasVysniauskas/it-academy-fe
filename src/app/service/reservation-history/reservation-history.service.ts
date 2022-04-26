import { Observable } from 'rxjs/Rx';
import {HttpClient} from "@angular/common/http";
import { Injectable } from '@angular/core';
import { Reservation } from 'src/app/interfaces/reservation';
import {environment} from "../../../environments/environment.prod";

@Injectable({
  providedIn: 'root'
})
export class ReservationHistoryService {



  private apiUserReservationHistory = environment.baseUrl + "api/v1/reservations";

  fetchReservation: any;


  constructor(private httpClient: HttpClient) { }

  fetchReservationHistory(): Observable<Reservation[]> {
    return this.httpClient.get<Reservation[]>(this.apiUserReservationHistory);
  }


  cancelReservationById(reservationId: number): Observable<any> {
    return this.httpClient.delete(this.apiUserReservationHistory + reservationId);
  }

}
