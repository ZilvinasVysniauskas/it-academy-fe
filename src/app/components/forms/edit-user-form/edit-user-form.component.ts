import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {User} from "../../../interfaces/user";
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {UserRequest} from "../../../interfaces/user-request";
import {generatePassword} from "../../../shared/generatePassword";
import {validateEmail} from "../../../validators/emailValidator";
import {AdminPageService} from "../../../service/admin/admin-page.service";
import {validateEmailUnique} from "../../../validators/emailUniqueValidator";
import {userIdValidator} from "../../../validators/userIdValidator";

@Component({
  selector: 'app-edit-user-form',
  templateUrl: './edit-user-form.component.html',
  styleUrls: ['./edit-user-form.component.scss']
})
export class EditUserFormComponent implements OnInit {

  @Input() user: User | undefined;
  @Input() isEditForm!: boolean;
  @Input() displaySuccessMessage = false;
  @Output() savedUser: EventEmitter<UserRequest> = new EventEmitter<UserRequest>();
  @Output() cancel: EventEmitter<any> = new EventEmitter<any>();
  @Output() addNewUser: EventEmitter<any> = new EventEmitter<any>();

  editUserForm: FormGroup;
  password!: string;
  passwordChanged: boolean = false;
  userRequest?: UserRequest;
  selected!: string;

  states = [
    'STANDARD_USER', 'ADMINISTRATOR'
  ]

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

  get expUserId () {
    return this.editUserForm.get('userId')
  }

  constructor(private adminService: AdminPageService) {
    this.editUserForm = new FormGroup({
        userId: new FormControl('', {validators:
            [Validators.required, Validators.maxLength(8),
              Validators.minLength(8)],
          }),
        firstName: new FormControl('', {validators:
            [Validators.required, Validators.maxLength(40)]
        }),
        lastName: new FormControl('', {validators:
            [Validators.required, Validators.maxLength(40)]
        }),
        middleName: new FormControl('', {validators:
            [Validators.maxLength(40)]
        }),
        email: new FormControl('', {validators:
            [Validators.required, validateEmail]
        }),
        role: new FormControl(''),
        active: new FormControl('')
      }
    );
  }


  ngOnInit(): void {
    if (this.user){
      this.password = this.user.password;
      this.expUserId?.setValue(this.user.userId);
      this.expFirstName?.setValue(this.user.firstName);
      this.expLastName?.setValue(this.user.lastName);
      this.expMiddleName?.setValue(this.user.middleName);
      this.expEmail?.setValue(this.user.email);
      this.expPassword?.setValue(this.user.password);
      this.expRole?.setValue(this.user.role);
      this.expActive?.setValue(this.user.active);
      this.editUserForm.get('email')?.setAsyncValidators(validateEmailUnique(this.adminService))
      this.selected = this.expRole?.value;
    }
    else {
      this.expActive?.setValue(true)
      this.editUserForm.get('userId')?.setAsyncValidators(userIdValidator(this.adminService))
      this.editUserForm.get('email')?.setAsyncValidators(validateEmailUnique(this.adminService))
    }

  }


  AddOrUpdateUser() {
    const isActive = () => {
      if (this.expActive?.value){
        return 1;
      }
      return 0;
    }
    const id = () => {
      if (this.isEditForm) {
        return this.user!.userId;
      }
      return this.expUserId?.value;
    }
    const password = () => {
      if (this.isEditForm) {
        return this.password;
      }
      return generatePassword();
    }
    const user: UserRequest = {
      userId: id(),
      firstName: this.expFirstName?.value,
      middleName: this.expMiddleName?.value,
      lastName: this.expLastName?.value,
      isActive: isActive(),
      password: password(),
      email: this.expEmail?.value,
      role: this.expRole?.value
    }
    this.userRequest = user;
    if (this.editUserForm.valid){
      this.savedUser.emit(user)
    }
  }

  resetPassword() {
    this.password = generatePassword();
    this.passwordChanged = true;
  }


}