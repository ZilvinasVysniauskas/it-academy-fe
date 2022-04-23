import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {UserRequest} from "../../../interfaces/user-request";
import {NotificationRequest} from "../../../interfaces/notificationRequest";
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {ReservationsDialogComponent} from "../../modals/reservations-dialog/reservations-dialog.component";
import {MatDialog, MatDialogRef} from "@angular/material/dialog";
import {SearchUserComponent} from "../search-user/search-user.component";
import {ChangePasswordComponent} from "../change-password/change-password.component";
import {NotificationService} from "../../../service/notification/notification.service";


@Component({
  selector: 'app-send-message-form',
  templateUrl: './send-message-form.component.html',
  styleUrls: ['./send-message-form.component.scss']
})
export class SendMessageFormComponent implements OnInit {


  @Output() sendNotification: EventEmitter<NotificationRequest> = new EventEmitter<NotificationRequest>();
  @Output() cancel: EventEmitter<any> = new EventEmitter<any>();

  notificationRequestForm: FormGroup;
  toUser: boolean = false;
  toDepartment: boolean = true;

  departments = [
    'SALES', 'MARKETING', 'DEVELOPERS', 'MANAGEMENT'
  ]

  get getMessage() {
    return this.notificationRequestForm.get('message')
  }

  get getUserId() {
    return this.notificationRequestForm.get('userId')
  }

  get getDepartment() {
    return this.notificationRequestForm.get('department')
  }

  constructor(public dialogRef: MatDialogRef<SendMessageFormComponent>,private notificationService: NotificationService,
  private matDialog: MatDialog) {
    this.notificationRequestForm = new FormGroup({
      message: new FormControl('', {
        validators:
          [Validators.required, Validators.maxLength(100)]
      }),
      userId: new FormControl(''),
      department: new FormControl('')
    })
  }

  createAndSendNotification() {
    if (this.toUser) {
      const notificationRequest: NotificationRequest = {
        message: this.getMessage?.value,
        userId: this.getUserId?.value
      }
      this.notificationService.sendNotificationToUser(notificationRequest).subscribe(this.dialogRef.close);
    } else {
      const notificationRequest: NotificationRequest = {
        message: this.getMessage?.value,
        department: this.getDepartment?.value,
      }
      this.notificationService.sendNotificationToDepartment(notificationRequest).subscribe(this.dialogRef.close)
    }
  }

  closeDialog() {
    this.dialogRef.close();
  }
  ngOnInit(): void {
  }

  searchForUser() {
    this.matDialog.open(ChangePasswordComponent)
      .afterClosed()
      .subscribe((userId) => {
        this.getUserId?.setValue(userId.userId)
      });
  }
}
