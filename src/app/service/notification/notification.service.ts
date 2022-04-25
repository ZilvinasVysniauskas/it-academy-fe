import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Notification} from "../../interfaces/notification";
import {NotificationRequest} from "../../interfaces/notificationRequest";
import {environment} from "../../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class NotificationService {

  notificationsApi = environment.baseUrl + "api/v1/notifications/"

  constructor(private httpClient: HttpClient) { }

  getAllNotifications(): Observable<Notification[]> {
    return this.httpClient.get<Notification[]>(this.notificationsApi)
  }

  getUnopenedNotifications(): Observable<Notification[]> {
    return this.httpClient.get<Notification[]>(this.notificationsApi + 'new')
  }

  getNotificationsFromAdmin(): Observable<Notification[]> {
    return this.httpClient.get<Notification[]>(this.notificationsApi + 'admin')
  }

  sendNotificationToUser($event: NotificationRequest) {
    return this.httpClient.post(this.notificationsApi, $event);
  }

  sendNotificationToDepartment($event: NotificationRequest) {
    return this.httpClient.post(this.notificationsApi + $event.department, $event);
  }

  sendNotificationToAll($event: NotificationRequest) {
    return this.httpClient.post(this.notificationsApi + 'all', $event);
  }

  deleteNotificationById(id: number) {
    return this.httpClient.delete(this.notificationsApi + id);
  }


}
