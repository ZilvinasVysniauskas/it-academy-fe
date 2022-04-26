import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {environment} from "../../../environments/environment.prod";

@Injectable({
  providedIn: 'root'
})
export class UserService {

  baseUrl = environment.baseUrl;
  roomApi = this.baseUrl + '/api/v1/rooms/';

  constructor(private httpClient: HttpClient) { }
}
