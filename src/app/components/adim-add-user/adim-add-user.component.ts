import { Component, OnInit } from '@angular/core';
import {AdminPageService} from "../../service/admin/admin-page.service";
import {UserRequest} from "../../interfaces/user-request";
import { MatDialog } from '@angular/material/dialog';
import {EditUserFormComponent} from "../forms/edit-user-form/edit-user-form.component";

@Component({
  selector: 'app-adim-add-user',
  templateUrl: './adim-add-user.component.html',
  styleUrls: ['./adim-add-user.component.scss']
})
export class AdminAddUserComponent implements OnInit {

  constructor(private adminService: AdminPageService,
              private matDialog: MatDialog,) { }

  ngOnInit(): void {
    this.matDialog.open(EditUserFormComponent, { data: { } })
      .afterClosed()
      .subscribe((result?: boolean) => {
        console.log('mat dialog result', result);
        if (result === true) {
          console.log('Create success');
        }
      });
  }
}
