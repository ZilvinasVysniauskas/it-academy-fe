import { Component, Inject, OnInit } from '@angular/core';
import { UserRequest } from '../../../../interfaces/user-request';
import { AdminPageService } from '../../../../service/admin/admin-page.service';
import { User } from '../../../../interfaces/user';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-user-dialog-component',
  templateUrl: './user-dialog-component.component.html',
  styleUrls: ['./user-dialog-component.component.scss']
})
export class UserDialogComponentComponent implements OnInit {
  displaySuccessMessage: boolean = false;
  isEdit: boolean;


  constructor(
    @Inject(MAT_DIALOG_DATA) public data: { user?: User },
    public dialogRef: MatDialogRef<UserDialogComponentComponent>,
    private adminService: AdminPageService,
  ) {

    this.isEdit = !!this.data.user;
  }

  ngOnInit(): void {

  }

  handleCancel() {
    this.dialogRef.close();
  }

  handleSavedUser(userRequest: UserRequest) {
    if (this.isEdit) {
      this.adminService.updateUser(userRequest).subscribe(() => {
        this.displaySuccessMessage = true;
        this.dialogRef.close(true);
      })
    }
    else {
      this.adminService.addNewUser(userRequest).subscribe(() => {
        this.displaySuccessMessage = true;
      })
    }
  }

}
