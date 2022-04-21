import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Floor} from "../../interfaces/floor";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class FloorService {

  floorApi = "api/v1/floors/"

  constructor(private httpClient: HttpClient) { }

  getFloorsByBuildingId(id: number) {
    return this.httpClient.get<Floor[]>(this.floorApi + id);
  }

  getFloorsById(id: string | null): Observable<Floor> {
    return this.httpClient.get<Floor>(`${this.floorApi}/floor/${id}`);
  }

  getFirstFloor(): Observable<Floor> {
    return this.httpClient.get<Floor>(this.floorApi + 'first')
  }
}
