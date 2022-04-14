import { Component, OnInit } from '@angular/core';
import {UserDialogComponentComponent} from "../modals/user-dialog-component/user-dialog-component.component";
import {MatDialog} from "@angular/material/dialog";
import {AuthService} from "../../service/authentification/auth.service";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  isLogged: boolean;

  role: string;

  constructor(private matDialog: MatDialog, private authService: AuthService) {
    this.isLogged = authService.isLoggedIn();
    this.role = authService.getRole()!;
  }

  addUser() {
    this.matDialog.open(UserDialogComponentComponent, { data: { } })
      .afterClosed()
      .subscribe((result?: boolean) => {
        console.log('mat dialog result', result);
        if (result === true) {
          console.log('Create success');
        }
      });
  }
  ngOnInit(): void {
  }

  logout() {
    this.authService.logout();
  }
}
