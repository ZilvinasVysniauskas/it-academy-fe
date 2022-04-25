import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";
import {Notification} from "../../../interfaces/notification";
import {NotificationService} from "../../../service/notification/notification.service";

@Component({
  selector: 'app-notification-display',
  templateUrl: './notification-display.component.html',
  styleUrls: ['./notification-display.component.scss']
})
export class NotificationDisplayComponent {
  notification: Notification;

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: { notification: Notification },
    public dialogRef: MatDialogRef<NotificationDisplayComponent>,
    private notificationService: NotificationService) {
    this.notification = data.notification;
  }

  deleteNotificationById(id: number) {
    this.notificationService.deleteNotificationById(id).subscribe(a => this.closeDialog())
  }
  closeDialog() {
    this.dialogRef.close()
  }



}
