import { Component, OnInit } from '@angular/core';
import {UserDialogComponentComponent} from "../modals/user-dialog-component/user-dialog-component.component";
import {MatDialog} from "@angular/material/dialog";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {


  role = sessionStorage.getItem('role')

  constructor(private matDialog: MatDialog) { }

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

}
