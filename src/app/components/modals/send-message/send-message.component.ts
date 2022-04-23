import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";
import {Reservation} from "../../../interfaces/reservation";
import {DeskReservationService} from "../../../service/reservations/desk-reservation.service";
import {NotificationService} from "../../../service/notification/notification.service";
import {NotificationRequest} from "../../../interfaces/notificationRequest";

@Component({
  selector: 'app-send-message',
  templateUrl: './send-message.component.html',
  styleUrls: ['./send-message.component.scss']
})
export class SendMessageComponent {
  constructor(public dialogRef: MatDialogRef<SendMessageComponent>,private notificationService: NotificationService) {
  }

  sendNotification($event: NotificationRequest) {
    if ($event.userId) {
      this.notificationService.sendNotificationToUser($event).subscribe(this.dialogRef.close);
    }
    else  {
      this.notificationService.sendNotificationToDepartment($event).subscribe(this.dialogRef.close)
    }

  }

  handleCancel() {
    this.dialogRef.close({event: 'closed'});
  }

}
