import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {User} from "../../../interfaces/user";
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {UserRequest} from "../../../interfaces/user-request";
import {generatePassword} from "../../../shared/generatePassword";
import {validateEmail} from "../../../validators/emailValidator";
import {AdminPageService} from "../../../service/admin/admin-page.service";
import {validateEmailUnique} from "../../../validators/emailUniqueValidator";
import {userIdValidator} from "../../../validators/userIdValidator";
import {FloorService} from "../../../service/floor/floor.service";
import {Floor} from "../../../interfaces/floor";
import {AddRoomDialogComponent} from "../../modals/add-room-dialog/add-room-dialog.component";
import {ChangePlaceDialogComponent} from "../../modals/change-place-dialog/change-place-dialog.component";
import {MatDialog} from "@angular/material/dialog";

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
  password: string | undefined;
  passwordChanged: boolean = false;
  userRequest?: UserRequest;
  selected!: string;
  currentFloor!: Floor;
  floor: Floor | null = null;

  states = [
    'STANDARD_USER', 'ADMINISTRATOR'
  ]

  get getFirstName() {
    return this.editUserForm.get('firstName')
  }

  get getLastName() {
    return this.editUserForm.get('lastName')
  }

  get getMiddleName() {
    return this.editUserForm.get('middleName')
  }

  get getEmail() {
    return this.editUserForm.get('email')
  }

  get getPassword() {
    return this.editUserForm.get('password')
  }

  get getRole() {
    return this.editUserForm.get('role')
  }

  get getActive() {
    return this.editUserForm.get('active')
  }

  get getUserId() {
    return this.editUserForm.get('userId')
  }
  get getDefaultFloor() {
    return this.editUserForm.get('defaultFloor')
  }

  constructor(private adminService: AdminPageService, private floorService: FloorService, private matDialog: MatDialog) {
    this.editUserForm = new FormGroup({
        userId: new FormControl('', {
          validators:
            [Validators.required, Validators.maxLength(8),
              Validators.minLength(8)],
        }),
        firstName: new FormControl('', {
          validators:
            [Validators.required, Validators.maxLength(40)]
        }),
        lastName: new FormControl('', {
          validators:
            [Validators.required, Validators.maxLength(40)]
        }),
        middleName: new FormControl('', {
          validators:
            [Validators.maxLength(40)]
        }),
        email: new FormControl('', {
          validators:
            [Validators.required, validateEmail]
        }),
        role: new FormControl(''),
        defaultFloor: new FormControl(''),
        active: new FormControl('')
      }
    );
  }

  ngOnInit(): void {
    this.floorService.getFloorsById(this.user!.defaultFloorId.toString()).subscribe(floor => this.currentFloor = floor);
    if (this.user) {
      this.password = this.user.password;
      this.getUserId?.setValue(this.user.userId);
      this.getFirstName?.setValue(this.user.firstName);
      this.getLastName?.setValue(this.user.lastName);
      this.getMiddleName?.setValue(this.user.middleName);
      this.getEmail?.setValue(this.user.email);
      this.getRole?.setValue(this.user.role);
      this.getActive?.setValue(this.user.active);
      this.editUserForm.get('email')?.setAsyncValidators(validateEmailUnique(this.adminService))
      this.selected = this.getRole?.value;
    } else {
      this.getActive?.setValue(true)
      this.editUserForm.get('userId')?.setAsyncValidators(userIdValidator(this.adminService))
      this.editUserForm.get('email')?.setAsyncValidators(validateEmailUnique(this.adminService))
    }
  }

  AddOrUpdateUser() {
    const isActive = () => {
      if (this.getActive?.value) {
        return 1;
      }
      return 0;
    }
    const id = () => {
      if (this.isEditForm) {
        return this.user!.userId;
      }
      return this.getUserId?.value;
    }
    const password = () => {
      if (this.isEditForm) {
        return this.password;
      }
      return generatePassword();
    }
    const user: UserRequest = {
      userId: id(),
      firstName: this.getFirstName?.value,
      middleName: this.getMiddleName?.value,
      lastName: this.getLastName?.value,
      isActive: isActive(),
      password: password(),
      email: this.getEmail?.value,
      role: this.getRole?.value,
      defaultFloorId: this.currentFloor.id
    }
    this.userRequest = user;
    if (this.editUserForm.valid) {
      this.savedUser.emit(user)
    }
  }

  resetPassword() {
    this.password = generatePassword();
    this.passwordChanged = true;
  }


  changeFloorDialog() {
    let floorInjected = null;
    this.matDialog.open(ChangePlaceDialogComponent, {data: {floorInjected}})
      .afterClosed()
      .subscribe((floor) => {
        this.currentFloor = floor.floor;
      });
  }
}
