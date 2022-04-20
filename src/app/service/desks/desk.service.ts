import { Injectable } from '@angular/core';
import {DeskRequest} from "../../interfaces/deskRequest";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Room} from "../../interfaces/room";

@Injectable({
  providedIn: 'root'
})
export class DeskService {

  desksApi = '/api/v1/desks/';

  constructor(private httpClient: HttpClient) { }

  addNewDesk($event: DeskRequest): Observable<any> {
    return this.httpClient.post(this.desksApi, $event)
  }

  deleteDesk(id: number): Observable<any> {
    return this.httpClient.delete(this.desksApi + id);
  }

  getDesks(): Observable<Room[]> {
    return this.httpClient.get<Room[]>(this.desksApi);
  }

  editDest(desk: DeskRequest): Observable<any> {
    return this.httpClient.put(this.desksApi, desk);
  }
}
