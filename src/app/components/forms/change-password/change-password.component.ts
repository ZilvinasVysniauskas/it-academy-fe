import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {ChangePasswordRequest} from "../../../interfaces/changePasswordRequest";
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {MatDialogRef} from "@angular/material/dialog";
import {AdminPageService} from "../../../service/admin/admin-page.service";


@Component({
  selector: 'app-change-password',
  templateUrl: './change-password.component.html',
  styleUrls: ['./change-password.component.scss']
})
export class ChangePasswordComponent implements OnInit {

  @Output() changePassword: EventEmitter<ChangePasswordRequest> = new EventEmitter<ChangePasswordRequest>();
  @Output() cancel: EventEmitter<any> = new EventEmitter<any>();

  changePasswordForm: FormGroup;
  errorMessage?: String;


  get getCurrentPassword() {
    return this.changePasswordForm.get('currentPassword')
  }
  get getNewPassword() {
    return this.changePasswordForm.get('newPassword')
  }

  get getNewPasswordRepeat() {
    return this.changePasswordForm.get('newPasswordRepeat')
  }

  constructor(private adminService: AdminPageService,
              private dialogRef: MatDialogRef<ChangePasswordComponent>) {
    this.changePasswordForm = new FormGroup({
        currentPassword: new FormControl('', {
          validators:
            [Validators.required]
        }),
        newPassword: new FormControl('', {
          validators:
            [Validators.required,
              Validators.pattern('(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&].{8,}')]
        }),
        newPasswordRepeat: new FormControl('', {
          validators:
            [Validators.required]
        })
      }
    );
  }

  changePasswordRequest() {
    const passwordChangeRequest: ChangePasswordRequest = {
      currentPassword: this.getCurrentPassword?.value,
      newPassword: this.getNewPassword?.value,
      newPasswordRepeat: this.getNewPasswordRepeat?.value
    }
    this.adminService.changePassword(passwordChangeRequest).subscribe(
      message => {
        alert(message)
        this.dialogRef.close()
      },
      error => {
        this.errorMessage = error.error;
      });

  }

  closeDialog() {
    this.dialogRef.close()
  }


  ngOnInit(): void {
  }


}
