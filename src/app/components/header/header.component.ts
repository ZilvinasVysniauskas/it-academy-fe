import {Component, OnInit} from '@angular/core';
import {MatDialog} from "@angular/material/dialog";
import {AuthService} from "../../service/authentification/auth.service";
import {ChangePasswordComponent} from "../forms/change-password/change-password.component";
import {SendMessageFormComponent} from "../forms/send-message-form/send-message-form.component";
import {EditUserFormComponent} from "../forms/edit-user-form/edit-user-form.component";

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

    isLogged: boolean;

    isAdmin: boolean;

    constructor(private matDialog: MatDialog, private authService: AuthService) {
        this.isLogged = authService.isLoggedIn();
        this.isAdmin = authService.getRole()! == 'ADMINISTRATOR';
    }

    addUser() {
        this.matDialog.open(EditUserFormComponent, {data: {}})
            .afterClosed()
            .subscribe((result?: boolean) => {
                console.log('mat dialog result', result);
                if (result === true) {
                    console.log('Create success');
                }
            });
    }

  sendNotification() {
    this.matDialog.open(SendMessageFormComponent)
      .afterClosed()
      .subscribe((result?: boolean) => {
      });
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

    logout() {
        this.authService.logout();
    }
}
