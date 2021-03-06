import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Floor} from "../../interfaces/floor";
import {Observable} from "rxjs";
import {FloorRequest} from "../../interfaces/floorRequest";
import {environment} from "../../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class FloorService {

  floorApi = environment.baseUrl + "api/v1/floors/"
  imageApi = environment.baseUrl + "api/v1/images/"

  constructor(private httpClient: HttpClient) { }

  getFloorsByBuildingId(id: number): Observable<Floor[]> {
    return this.httpClient.get<Floor[]>(this.floorApi + id);
  }

  getFloorById(id: string | null): Observable<Floor> {
    return this.httpClient.get<Floor>(`${this.floorApi}floor/${id}`);
  }

  getFirstFloor(): Observable<Floor> {
    return this.httpClient.get<Floor>(this.floorApi + 'first')
  }

  addFloor($event: FormData): Observable<any> {
    return this.httpClient.post(this.floorApi, $event)
  }

  deleteFloor(idToDelete: number, idToReplace: number) {
    return this.httpClient.delete(`${this.floorApi}${idToDelete}/${idToReplace}`)
  }

  editFloor(floor: FloorRequest): Observable<any> {
    return this.httpClient.put(this.floorApi, floor);
  }

  addFloorImage(uploadData: FormData) {
    return this.httpClient.post(this.imageApi, uploadData)
  }

  changeFloorPlan(uploadData: FormData) {
    return  this.httpClient.put(this.floorApi + 'plan', uploadData )
  }


}
