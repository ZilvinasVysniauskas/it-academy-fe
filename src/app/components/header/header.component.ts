import {Component, OnInit} from '@angular/core';
import {UserDialogComponentComponent} from "../modals/user-dialog-component/user-dialog-component.component";
import {MatDialog} from "@angular/material/dialog";
import {AuthService} from "../../service/authentification/auth.service";
import {ChangePasswordDialogComponent} from "../modals/change-password-dialog/change-password-dialog.component";
import {SendMessageComponent} from "../modals/send-message/send-message.component";

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
        this.matDialog.open(UserDialogComponentComponent, {data: {}})
            .afterClosed()
            .subscribe((result?: boolean) => {
                console.log('mat dialog result', result);
                if (result === true) {
                    console.log('Create success');
                }
            });
    }

  sendNotification() {
    this.matDialog.open(SendMessageComponent)
      .afterClosed()
      .subscribe((result?: boolean) => {
      });
  }

  changePassword() {
    this.matDialog.open(ChangePasswordDialogComponent)
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
