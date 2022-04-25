import {Injectable} from '@angular/core';
import {DeskRequest} from "../../interfaces/deskRequest";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Room} from "../../interfaces/room";
import {environment} from "../../../environments/environment.prod";

@Injectable({
  providedIn: 'root'
})
export class DeskService {

  baseUrl = environment.baseUrl;

  desksApi = this.baseUrl + '/api/v1/desks/';


  constructor(private httpClient: HttpClient) {
  }

  addNewDesk($event: DeskRequest): Observable<any> {
    return this.httpClient.post(this.desksApi, $event)
  }

  deleteDesk(id: number): Observable<any> {
    return this.httpClient.delete(this.desksApi + id);
  }

  getRooms(floorId: number): Observable<Room[]> {
    return this.httpClient.get<Room[]>(this.desksApi +  floorId);
  }

  editDest(desk: DeskRequest): Observable<any> {
    return this.httpClient.put(this.desksApi, desk);
  }

  setDeskUnavailableById(id: number) {
    return this.httpClient.get(`${this.desksApi}/disable/${id}`)
  }

  setDeskAvailableById(id: number) {
    return this.httpClient.get(`${this.desksApi}/enable/${id}`)
  }
}
