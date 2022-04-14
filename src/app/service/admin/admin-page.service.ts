import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {User} from "../../interfaces/user";
import {Observable} from "rxjs";
import {UserRequest} from "../../interfaces/user-request";
import {ReservationAdmin} from "../../interfaces/reservationAdmin";

@Injectable({
  providedIn: 'root'
})
export class AdminPageService {

  constructor(private httpClient: HttpClient) { }

  private apiUser = "api/v1/admin/user/";
  private apiReservations = "api/v1/admin/reservations/"

  fetchAllUsers(): Observable<User[]> {
    return this.httpClient.get<User[]>(this.apiUser);
  }

  updateUser(user: UserRequest): Observable<UserRequest> {
    console.log(user)
    return this.httpClient.put<UserRequest>(this.apiUser, user)
  }

  addNewUser(user: UserRequest): Observable<UserRequest> {
    return this.httpClient.post<UserRequest>(this.apiUser, user)
  }

  fetchAllReservations(): Observable<ReservationAdmin[]> {
    return this.httpClient.get<ReservationAdmin[]>(this.apiReservations);
  }
  checkIfUserIdExists(value: string): Observable<boolean> {
    return this.httpClient.get<boolean>(this.apiUser + `/id/${value}`);
  }

}
