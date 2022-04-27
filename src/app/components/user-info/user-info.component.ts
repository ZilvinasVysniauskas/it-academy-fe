import { Component, OnInit } from '@angular/core';
import {UserService} from "../../service/user/user.service";
import {User} from "../../interfaces/user";
import {MatDialog, MatDialogRef} from "@angular/material/dialog";
import {ChangePasswordComponent} from "../forms/change-password/change-password.component";
import {Observable} from "rxjs";

@Component({
  selector: 'app-user-info',
  templateUrl: './user-info.component.html',
  styleUrls: ['./user-info.component.scss']
})
export class UserInfoComponent implements OnInit {

  user$: Observable<User>;

  constructor(private userService: UserService, private matDialogRef: MatDialogRef<UserInfoComponent>) {
    this.user$ = userService.getUser();
  }

  closeDialog() {
    this.matDialogRef.close();
  }

  ngOnInit(): void {
  }

}
