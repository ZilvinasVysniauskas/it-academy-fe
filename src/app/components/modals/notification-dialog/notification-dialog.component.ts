import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";
import {Notification} from "../../../interfaces/notification";

@Component({
  selector: 'app-notification-dialog',
  templateUrl: './notification-dialog.component.html',
  styleUrls: ['./notification-dialog.component.scss']
})
export class NotificationDialogComponent implements OnInit {

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: { notification: Notification },
    public dialogRef: MatDialogRef<NotificationDialogComponent>) {
  }

  ngOnInit(): void {
  }

  closeForm() {
    this.dialogRef.close();
  }

}
