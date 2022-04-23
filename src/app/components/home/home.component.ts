import { Component, OnInit } from '@angular/core';
import {NotificationService} from "../../service/notification/notification.service";
import {Notification} from "../../interfaces/notification";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  allNotifications!: Notification[];
  unOpenedNotifications!: Notification[];

  constructor(private notificationService:NotificationService) {
    console.log('console')
    this.notificationService.getAllNotifications().subscribe(notifications => {
      this.allNotifications = notifications;
    })
    this.notificationService.getUnopenedNotifications().subscribe(notifications => {
      this.unOpenedNotifications = notifications;
      this.displayNotification();
    })
  }

  ngOnInit(): void {
  }

  private displayNotification() {
    this.unOpenedNotifications.forEach(notification => {
      alert(notification.message)
    })
  }
}
