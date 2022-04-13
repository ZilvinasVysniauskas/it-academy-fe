import { Component, OnInit } from '@angular/core';
import {AdminPageService} from "../../../../service/admin/admin-page.service";
import {UserRequest} from "../../../../interfaces/user-request";
import { MatDialog } from '@angular/material/dialog';
import { UserDialogComponentComponent } from '../../modal/user-dialog-component/user-dialog-component.component';

@Component({
  selector: 'app-adim-add-user',
  templateUrl: './adim-add-user.component.html',
  styleUrls: ['./adim-add-user.component.scss']
})
export class AdminAddUserComponent implements OnInit {

  constructor(private adminService: AdminPageService,
              private matDialog: MatDialog,) { }

  ngOnInit(): void {
    this.matDialog.open(UserDialogComponentComponent, { data: { } })
      .afterClosed()
      .subscribe((result?: boolean) => {
        console.log('mat dialog result', result);
        if (result === true) {
          console.log('Create success');
        }
      });
  }
}
