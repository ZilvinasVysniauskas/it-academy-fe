import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Notification} from "../../interfaces/notification";
import {NotificationRequest} from "../../interfaces/notificationRequest";
import {environment} from "../../../environments/environment.prod";

@Injectable({
  providedIn: 'root'
})
export class NotificationService {

  baseUrl = environment.baseUrl;

  notificationsApi = this.baseUrl +  "api/v1/notifications/"

  constructor(private httpClient: HttpClient) { }

  getAllNotifications(): Observable<Notification[]> {
    return this.httpClient.get<Notification[]>(this.notificationsApi)
  }

  getUnopenedNotifications(): Observable<Notification[]> {
    return this.httpClient.get<Notification[]>(this.notificationsApi + 'new')
  }

  sendNotificationToUser($event: NotificationRequest) {
    return this.httpClient.post(this.notificationsApi, $event);
  }

  sendNotificationToDepartment($event: NotificationRequest) {
    return this.httpClient.post(this.notificationsApi + $event.department, $event);
  }
}
