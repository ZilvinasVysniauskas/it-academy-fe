import {Component, OnInit} from '@angular/core';
import {NotificationService} from "../../service/notification/notification.service";
import {Notification} from "../../interfaces/notification";

import {MatDialog} from "@angular/material/dialog";
import {NotificationDialogComponent} from "../modals/notification-dialog/notification-dialog.component";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  items = Array.from({length: 100000}).map((_, i) => `Item #${i}`);
  allNotifications!: Notification[];
  unOpenedNotifications!: Notification[];

  constructor(private notificationService: NotificationService, private matDialog: MatDialog) {
    this.notificationService.getAllNotifications().subscribe(notifications => {
      this.allNotifications = notifications;
    })
    this.notificationService.getUnopenedNotifications().subscribe(notifications => {
      this.unOpenedNotifications = notifications;
      if (this.unOpenedNotifications.length > 0) {
        let index = 0;
        this.displayNotification(this.unOpenedNotifications, index);
      }
    })
  }

  ngOnInit(): void {
  }

  private displayNotification(notifications: Notification[], index: number) {
    console.log(index)
    let notification = notifications[index];
    this.matDialog.open(NotificationDialogComponent, {data: {notification}})
      .afterClosed()
      .subscribe((result) => {
        setTimeout(() => {
          if (this.unOpenedNotifications.length - 1> index){
            this.displayNotification(notifications, ++index)
          }
        }, 300)
      });
  }


}
