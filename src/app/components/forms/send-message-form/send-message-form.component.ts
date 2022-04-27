import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {NotificationRequest} from "../../../interfaces/notificationRequest";
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {MatDialog, MatDialogRef} from "@angular/material/dialog";
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

  departments = [
    'SALES', 'MARKETING', 'DEVELOPERS', 'MANAGEMENT'
  ]

  sendToList = [
    'ALL USERS', 'DEPARTMENT', 'USER'
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

  get getSendTo() {
    return this.notificationRequestForm.get('sendTo')
  }

  constructor(public dialogRef: MatDialogRef<SendMessageFormComponent>, private notificationService: NotificationService,
              private matDialog: MatDialog) {
    this.notificationRequestForm = new FormGroup({
      message: new FormControl('', {
        validators:
          [Validators.required, Validators.maxLength(100)]
      }),
      userId: new FormControl(''),
      department: new FormControl(''),
      sendTo: new FormControl('', {
        validators:
          [Validators.required]
      }),
    })
  }

  changeValidators() {
    if (this.getSendTo?.value == 'USER') {
      this.getUserId?.setValidators(Validators.required)
      this.getDepartment?.clearValidators()
      this.updateValidity()
    }
    else if (this.getSendTo?.value == 'DEPARTMENT') {
      this.getDepartment?.setValidators(Validators.required)
      this.getUserId?.clearValidators()
      this.updateValidity()
    }
    else {
      console.log("HERE")
      this.getDepartment?.removeValidators(Validators.required)
      this.getUserId?.clearValidators()
      this.updateValidity()
    }
  }

  private updateValidity() {
    this.getUserId?.updateValueAndValidity()
    this.getDepartment?.updateValueAndValidity()
  }

  createAndSendNotification() {
    if (this.getSendTo?.value == 'USER') {
      this.getUserId?.setValidators(Validators.required)
      const notificationRequest: NotificationRequest = {
        message: this.getMessage?.value,
        userId: this.getUserId?.value
      }
      this.notificationService.sendNotificationToUser(notificationRequest).subscribe(a => this.closeDialog());
    } else if (this.getSendTo?.value == 'DEPARTMENT') {
      const notificationRequest: NotificationRequest = {
        message: this.getMessage?.value,
        department: this.getDepartment?.value,
      }
      this.notificationService.sendNotificationToDepartment(notificationRequest).subscribe(a => this.closeDialog())
    } else {
      const notificationRequest: NotificationRequest = {
        message: this.getMessage?.value,
      }
      this.notificationService.sendNotificationToAll(notificationRequest).subscribe(a => this.closeDialog())
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
