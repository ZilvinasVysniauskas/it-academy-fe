import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Notification} from "../../interfaces/notification";

@Injectable({
  providedIn: 'root'
})
export class NotificationService {

  notificationsApi = "api/v1/notifications/"

  constructor(private httpClient: HttpClient) { }

  getAllNotifications(): Observable<Notification[]> {
    return this.httpClient.get<Notification[]>(this.notificationsApi)
  }

  getUnopenedNotifications(): Observable<Notification[]> {
    return this.httpClient.get<Notification[]>(this.notificationsApi + 'new')
  }
}
