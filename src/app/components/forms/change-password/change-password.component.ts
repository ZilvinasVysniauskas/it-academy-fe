import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {RoomRequest} from "../../../interfaces/RoomRequest";
import {ChangePasswordRequest} from "../../../interfaces/changePasswordRequest";
import {FormControl, FormGroup, Validators} from "@angular/forms";


@Component({
  selector: 'app-change-password',
  templateUrl: './change-password.component.html',
  styleUrls: ['./change-password.component.scss']
})
export class ChangePasswordComponent implements OnInit {

  @Output() changePassword: EventEmitter<ChangePasswordRequest> = new EventEmitter<ChangePasswordRequest>();
  @Output() cancel: EventEmitter<any> = new EventEmitter<any>();

  changePasswordForm: FormGroup;

  get getCurrentPassword() {
    return this.changePasswordForm.get('currentPassword')
  }
  get getNewPassword() {
    return this.changePasswordForm.get('newPassword')
  }

  get getNewPasswordRepeat() {
    return this.changePasswordForm.get('newPasswordRepeat')
  }

  constructor() {
    this.changePasswordForm = new FormGroup({
        currentPassword: new FormControl('', {
          validators:
            [Validators.required]
        }),
        newPassword: new FormControl('', {
          validators:
            [Validators.required]
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
    this.changePassword.emit(passwordChangeRequest);
  }

  ngOnInit(): void {
  }

}
