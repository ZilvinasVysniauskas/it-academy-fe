import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class UserService {

  roomApi = '/api/v1/rooms/';

  constructor(private httpClient: HttpClient) { }
}
