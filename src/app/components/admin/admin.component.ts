import {Component, OnInit} from '@angular/core';
import {User} from "../../interfaces/user";
import {AdminPageService} from "../../service/admin/admin-page.service";
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {map, startWith} from "rxjs/operators";
import {combineLatest, Observable, of} from "rxjs";
import {UserRequest} from "../../interfaces/user-request";

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit {

  maxLength = 20;

  searchUserForm: FormGroup;

  users$!: Observable<User[]>;

  user?: User | null;

  get expFirstName() {
    return this.searchUserForm.get('firstName')
  }

  get expLastName() {
    return this.searchUserForm.get('lastName')
  }

  get expUserId() {
    return this.searchUserForm.get('userId')
  }


  constructor(private adminService: AdminPageService) {
    this.searchUserForm = new FormGroup({
        userId: new FormControl(''),
        firstName: new FormControl(''),
        lastName: new FormControl('')
      }
    );
    this.setUsers();
  }

  private setUsers(): void {
    this.users$ = combineLatest([
      this.expUserId!.valueChanges.pipe(startWith('')),
      this.expFirstName!.valueChanges.pipe(startWith('')),
      this.expLastName!.valueChanges.pipe(startWith('')),
      this.adminService.fetchAllUsers(),
    ]).pipe(
      map(([userId, firstName, lastName, allUsers]: [string, string, string, User[]]): User[] => allUsers.filter(
        (user: User): boolean => user.firstName.toLocaleLowerCase().startsWith(firstName)
          && user.lastName.toLocaleLowerCase().startsWith(lastName)
          && user.userId.toString().toLocaleLowerCase().startsWith(userId),
      )),
    );
  }

  ngOnInit(): void {
  }

  editUser(user: User) {
    this.user = user;
  }

  saveUser($event: UserRequest) {
    this.adminService.updateUser($event).subscribe(a => {
        this.user = null;
        this.setUsers();
      }
    )

  }
}

