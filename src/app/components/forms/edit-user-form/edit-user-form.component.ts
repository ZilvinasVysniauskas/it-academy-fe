import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {User} from "../../../interfaces/user";
import {FormControl, FormGroup} from "@angular/forms";
import {UserRequest} from "../../../interfaces/user-request";

@Component({
  selector: 'app-edit-user-form',
  templateUrl: './edit-user-form.component.html',
  styleUrls: ['./edit-user-form.component.scss']
})
export class EditUserFormComponent implements OnInit {

  @Input() user!: User;
  @Output() savedUser: EventEmitter<UserRequest> = new EventEmitter<UserRequest>();
  @Output() cancelUpdate: EventEmitter<any> = new EventEmitter<any>();

  editUserForm: FormGroup;

  get expFirstName() {
    return this.editUserForm.get('firstName')
  }
  get expLastName() {
    return this.editUserForm.get('lastName')
  }

  get expMiddleName() {
    return this.editUserForm.get('middleName')
  }
  get expEmail() {
    return this.editUserForm.get('email')
  }
  get expPassword() {
    return this.editUserForm.get('password')
  }
  get expRole() {
    return this.editUserForm.get('role')
  }
  get expActive() {
    return this.editUserForm.get('active')
  }


  constructor() {
    this.editUserForm = new FormGroup({
        firstName: new FormControl(''),
        lastName: new FormControl(''),
        middleName: new FormControl(''),
        email: new FormControl(''),
        password: new FormControl(''),
        role: new FormControl(''),
        active: new FormControl('')
      }
    );
  }

  ngOnInit(): void {
    this.expFirstName?.setValue(this.user.firstName);
    this.expLastName?.setValue(this.user.lastName);
    this.expMiddleName?.setValue(this.user.middleName);
    this.expEmail?.setValue(this.user.email);
    this.expPassword?.setValue(this.user.password);
    this.expRole?.setValue(this.user.role);
    this.expActive?.setValue(this.user.active);
  }

  saveUpdatedUser() {
    const isActive = () => {
      if (this.expActive?.value){
        return 1;
      }
      return 0;
    }
    const user: UserRequest = {
      userId: this.user.userId,
      firstName: this.expFirstName?.value,
      middleName: this.expMiddleName?.value,
      lastName: this.expLastName?.value,
      password: this.expPassword?.value,
      passwordRepeat: this.expPassword?.value,
      isActive: isActive(),
      email: this.expEmail?.value,
      role: this.expRole?.value
    }
    this.savedUser.emit(user)
  }
}
