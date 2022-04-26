import { Component, OnInit } from '@angular/core';
import {UserService} from "../../service/user/user.service";
import {User} from "../../interfaces/user";
import {MatDialog} from "@angular/material/dialog";
import {ChangePasswordComponent} from "../forms/change-password/change-password.component";
import {Observable} from "rxjs";

@Component({
  selector: 'app-user-info',
  templateUrl: './user-info.component.html',
  styleUrls: ['./user-info.component.scss']
})
export class UserInfoComponent implements OnInit {

  user$: Observable<User>;

  constructor(private userService: UserService, private matDialog: MatDialog) {
    this.user$ = userService.getUser();
  }

  changePassword() {
    this.matDialog.open(ChangePasswordComponent)
      .afterClosed()
      .subscribe((result?: boolean) => {
        console.log('mat dialog result', result);
      });
  }

  ngOnInit(): void {
  }

}
