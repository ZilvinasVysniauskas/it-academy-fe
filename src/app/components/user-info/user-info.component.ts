import { Component, OnInit } from '@angular/core';
import {UserService} from "../../service/user/user.service";
import {User} from "../../interfaces/user";
import {MatDialog, MatDialogRef} from "@angular/material/dialog";
import {ChangePasswordComponent} from "../forms/change-password/change-password.component";
import {Observable} from "rxjs";
import {FloorService} from "../../service/floor/floor.service";
import {Floor} from "../../interfaces/floor";

@Component({
  selector: 'app-user-info',
  templateUrl: './user-info.component.html',
  styleUrls: ['./user-info.component.scss']
})
export class UserInfoComponent implements OnInit {

  user!: User;
  floorName!: string;

  constructor(private userService: UserService, private floorService: FloorService, private matDialogRef: MatDialogRef<UserInfoComponent>) {
    userService.getUser().subscribe(user => {
      this.user = user;
      this.floorService.getFloorById(user.defaultFloorId.toString()).subscribe(f => this.floorName = f.floorName);
    });
  }

  closeDialog() {
    this.matDialogRef.close();
  }

  ngOnInit(): void {
  }

}
