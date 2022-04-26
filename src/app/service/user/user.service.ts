import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {environment} from "../../../environments/environment";
import {Observable} from "rxjs";
import {User} from "../../interfaces/user";

@Injectable({
  providedIn: 'root'
})
export class UserService {

  baseUrl = environment.baseUrl;
  userApi = this.baseUrl + 'api/v1/users/';

  constructor(private httpClient: HttpClient) { }

  public getUser(): Observable<User> {
    return this.httpClient.get<User>(this.userApi + 'user');
  }
}
