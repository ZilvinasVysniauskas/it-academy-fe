import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Notification} from "../../interfaces/notification";
import {NotificationRequest} from "../../interfaces/notificationRequest";

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

  sendNotificationToUser($event: NotificationRequest) {
    return this.httpClient.post(this.notificationsApi, $event);
  }

  sendNotificationToDepartment($event: NotificationRequest) {
    return this.httpClient.post(this.notificationsApi + $event.department, $event);
  }
}
