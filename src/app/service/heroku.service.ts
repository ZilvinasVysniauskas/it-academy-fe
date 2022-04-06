import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class HerokuService {

  constructor(private http: HttpClient) { }

  public fetchThis() {
    return this.http.get('https://it-academy-be.herokuapp.com/api/v1/test', {responseType: "text"})
  }

}
