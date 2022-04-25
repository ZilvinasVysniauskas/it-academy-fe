import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {RoomRequest} from "../../interfaces/RoomRequest";
import {Observable} from "rxjs";
import {environment} from "../../../environments/environment.prod";


@Injectable({
  providedIn: 'root'
})
export class RoomService {

  baseUrl = environment.baseUrl;
  roomApi = this.baseUrl + '/api/v1/rooms/';

  constructor(private httpClient: HttpClient) { }

  addRoom(room: RoomRequest): Observable<any> {
    return this.httpClient.post(this.roomApi, room);
  }

  deleteRoom(id: number): Observable<any> {
    return this.httpClient.delete(this.roomApi + id);
  }

  editRoom(room: RoomRequest): Observable<any> {
    return this.httpClient.put(this.roomApi, room);
  }
}
