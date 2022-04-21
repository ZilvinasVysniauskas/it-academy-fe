import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Building} from "../../interfaces/building";

@Injectable({
  providedIn: 'root'
})
export class BuildingService {

  buildingApi = "api/v1/buildings/";

  constructor(private httpClient: HttpClient) { }

  getAllBuilding(): Observable<Building[]> {
    return this.httpClient.get<Building[]>(this.buildingApi);
  }
}
