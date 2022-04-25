import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {User} from "../../interfaces/user";
import {Observable} from "rxjs";
import {UserRequest} from "../../interfaces/user-request";
import {ChangePasswordRequest} from "../../interfaces/changePasswordRequest";

@Injectable({
  providedIn: 'root'
})
export class AdminPageService {

  constructor(private httpClient: HttpClient) { }

  private apiUser = "api/v1/users/";
  private apiReservations = "api/v1/reservations/"

  fetchAllUsers(): Observable<User[]> {
    return this.httpClient.get<User[]>(this.apiUser);
  }

  updateUser(user: UserRequest): Observable<UserRequest> {
    return this.httpClient.put<UserRequest>(this.apiUser, user)
  }

  addNewUser(user: UserRequest): Observable<UserRequest> {
    return this.httpClient.post<UserRequest>(this.apiUser, user)
  }

  checkIfUserIdExists(value: string): Observable<boolean> {
    return this.httpClient.get<boolean>(this.apiUser + `/id/${value}`);
  }

  checkIfEmailExists(value: boolean): Observable<boolean> {
    return this.httpClient.get<boolean>(this.apiUser + `/email/${value}`)
  }

  changePassword($event: ChangePasswordRequest) {
    return this.httpClient.put(`${this.apiUser}password`, $event, {responseType: "text"})
  }
}
