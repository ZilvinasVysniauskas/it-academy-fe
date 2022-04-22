import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Building} from "../../interfaces/building";
import {BuildingRequest} from "../../interfaces/buildingRequest";

@Injectable({
  providedIn: 'root'
})
export class BuildingService {

  buildingApi = "api/v1/buildings/";

  constructor(private httpClient: HttpClient) { }

  getAllBuilding(): Observable<Building[]> {
    return this.httpClient.get<Building[]>(this.buildingApi);
  }

  addBuilding($event: BuildingRequest): Observable<any> {
    return this.httpClient.post(this.buildingApi, $event)
  }

  editBuilding(building: BuildingRequest): Observable<any> {
    return this.httpClient.put(this.buildingApi, building);
  }
}
