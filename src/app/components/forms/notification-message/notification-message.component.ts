import {Component, EventEmitter, Inject, Input, OnInit, Output} from '@angular/core';
import {Notification} from "../../../interfaces/notification";
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";

@Component({
  selector: 'app-notification-message',
  templateUrl: './notification-message.component.html',
  styleUrls: ['./notification-message.component.scss']
})
export class NotificationMessageComponent {

  notifications!: Notification[];

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: { notifications: Notification[] },
    public dialogRef: MatDialogRef<NotificationMessageComponent>) {
    this.notifications = data.notifications;
  }

  closeForm() {
    this.dialogRef.close();
  }

}
