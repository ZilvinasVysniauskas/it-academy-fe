import { Component, OnInit } from '@angular/core';
import {AdminPageService} from "../../../service/admin/admin-page.service";
import {MatDialogRef} from "@angular/material/dialog";
import {ChangePasswordRequest} from "../../../interfaces/changePasswordRequest";

@Component({
  selector: 'app-change-password-dialog',
  templateUrl: './change-password-dialog.component.html',
  styleUrls: ['./change-password-dialog.component.scss']
})
export class ChangePasswordDialogComponent implements OnInit {

  constructor(private adminService: AdminPageService, private dialogRef: MatDialogRef<ChangePasswordDialogComponent>) { }

  ngOnInit(): void {
  }

  changePasswordRequest($event: ChangePasswordRequest) {
    this.adminService.changePassword($event).subscribe(
      message => {
      alert(message)
      this.dialogRef.close()
    },
      error => {
        console.log(error.error)
      });
  }

  closeForm() {
    this.dialogRef.close();
  }
}
