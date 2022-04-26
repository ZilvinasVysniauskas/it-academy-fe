import {Component, EventEmitter, Inject, Input, OnInit, Output} from '@angular/core';
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
import {MAT_DIALOG_DATA, MatDialog, MatDialogRef} from "@angular/material/dialog";
import {SelectFloorComponent} from "../select-floor/select-floor.component";

@Component({
  selector: 'app-edit-user-form',
  templateUrl: './edit-user-form.component.html',
  styleUrls: ['./edit-user-form.component.scss']
})
export class EditUserFormComponent implements OnInit {

  user: User | undefined;
  isEdit!: boolean;
  displaySuccessMessage: boolean = false;
  editUserForm: FormGroup;
  password: string | undefined;
  passwordChanged: boolean = false;
  userRequest?: UserRequest;
  selected!: string;
  selectedDepartment!: string;
  currentFloor?: Floor;
  floor: Floor | null = null;
  department!: string;


  states = [
    'STANDARD_USER', 'ADMINISTRATOR'
  ]

  departments = [
    'SALES', 'MARKETING', 'DEVELOPERS', 'MANAGEMENT', 'JOINED'
  ]

  floorIsPresent: boolean = false;


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

  get getDepartment() {
    return this.editUserForm.get('department')
  }


  constructor(
    @Inject(MAT_DIALOG_DATA) public data: { user?: User },
    public dialogRef: MatDialogRef<EditUserFormComponent>,
    private adminService: AdminPageService, private floorService: FloorService, private matDialog: MatDialog) {
    this.user = data.user;
    this.isEdit = data.user !== undefined;
    this.editUserForm = new FormGroup({
        userId: new FormControl({value: '', disabled: this.isEdit}, {
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
        department: new FormControl(''),
        defaultFloor: new FormControl(''),
        active: new FormControl('')
      }
    );
  }

  ngOnInit(): void {
    if (this.user) {
      this.floorIsPresent = true;
      this.floorService.getFloorById(this.user!.defaultFloorId.toString()).subscribe(floor => {
        this.currentFloor = floor;
        this.department = floor.department;
      });
      this.password = this.user.password;
      this.getUserId?.setValue(this.user.userId);
      this.getFirstName?.setValue(this.user.firstName);
      this.getLastName?.setValue(this.user.lastName);
      this.getMiddleName?.setValue(this.user.middleName);
      this.getEmail?.setValue(this.user.email);
      this.getRole?.setValue(this.user.role);
      this.getDepartment?.setValue(this.user.department);
      this.getActive?.setValue(this.user.active);
      this.editUserForm.get('email')?.setAsyncValidators(validateEmailUnique(this.adminService))
      this.selected = this.getRole?.value;
      this.selectedDepartment = this.getDepartment?.value;
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
      if (this.isEdit) {
        return this.user!.userId;
      }
      return this.getUserId?.value;
    }
    const password = () => {
      if (this.isEdit) {
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
      defaultFloorId: this.currentFloor!.id,
      department: this.getDepartment?.value
    }
    this.userRequest = user;
    if (this.editUserForm.valid) {
      this.handleSavedUser(user)
    }
  }

  handleSavedUser(userRequest: UserRequest) {
    if (this.user) {
      this.adminService.updateUser(userRequest).subscribe(() => {
        this.displaySuccessMessage = true;
        this.dialogRef.close(true);
      })
    } else {
      this.adminService.addNewUser(userRequest).subscribe(() => {
        this.displaySuccessMessage = true;
      })
    }
  }

  handleCancel() {
    this.dialogRef.close();
  }

  resetPassword() {
    this.password = generatePassword();
    this.passwordChanged = true;
  }


  changeFloorDialog() {
    let floorInject = this.currentFloor;
    let chooseReplacementOnDelete = false;
    let department = this.department;
    this.matDialog.open(SelectFloorComponent, {data: {floorInject, chooseReplacementOnDelete, department}})
      .afterClosed()
      .subscribe((floor) => {
        this.currentFloor = floor.floor;
        this.floorIsPresent = true;
      });
  }

  idReadOnly() {
    return this.isEdit;
  }

  departmentChanged() {
    this.currentFloor = undefined;
    this.floorIsPresent = false;
    this.department = this.getDepartment?.value
  }
}
