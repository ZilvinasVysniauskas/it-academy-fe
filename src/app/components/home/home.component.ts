import {Component, OnInit} from '@angular/core';
import {NotificationService} from "../../service/notification/notification.service";
import {Notification} from "../../interfaces/notification";
import {MatDialog} from "@angular/material/dialog";
import {NotificationMessageComponent} from "../forms/notification-message/notification-message.component";
import {NotificationDisplayComponent} from "../forms/notification-display/notification-display.component";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  items = Array.from({length: 100000}).map((_, i) => `Item #${i}`);
  allNotifications!: Notification[];
  unOpenedNotifications!: Notification[];
  allAdminNotifications!: Notification[];

  constructor(private notificationService: NotificationService, private matDialog: MatDialog) {
    this.getAllAdminMessages();
    this.getAllNotifications();
    this.getAllUnopenedMessagesAndDisplay();
  }

  getAllUnopenedMessagesAndDisplay() {
    this.notificationService.getUnopenedNotifications().subscribe(notifications => {
      this.unOpenedNotifications = notifications;
      if (this.unOpenedNotifications.length > 0) {
        this.displayNotification(this.unOpenedNotifications);
      }
    })
  }

  getAllAdminMessages() {
    this.notificationService.getNotificationsFromAdmin().subscribe(adminNotifications => {
      this.allAdminNotifications = adminNotifications
    })
  }

  getAllNotifications() {
    this.notificationService.getAllNotifications().subscribe(notifications => {
      this.allNotifications = notifications;
    })
  }

  ngOnInit(): void {

  }

  private displayNotification(notifications: Notification[]) {

    this.matDialog.open(NotificationMessageComponent, {data: {notifications}})
      .afterClosed()
      .subscribe((result) => {
      });
  }


  notificationTable(notification: Notification) {
    this.matDialog.open(NotificationDisplayComponent, {data: {notification}})
      .afterClosed()
      .subscribe((result) => {
        this.getAllNotifications();
        this.getAllAdminMessages();
      });
  }
}
