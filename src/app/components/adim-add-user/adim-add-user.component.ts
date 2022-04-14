import { Component, OnInit } from '@angular/core';
import {AdminPageService} from "../../service/admin/admin-page.service";
import {UserRequest} from "../../interfaces/user-request";

@Component({
  selector: 'app-adim-add-user',
  templateUrl: './adim-add-user.component.html',
  styleUrls: ['./adim-add-user.component.scss']
})
export class AdminAddUserComponent implements OnInit {

  displaySuccessMessage = false;

  constructor(private adminService: AdminPageService) { }

  ngOnInit(): void {
  }

  addNewUser($event: UserRequest) {
    this.adminService.addNewUser($event).subscribe()
    this.displaySuccessMessage = true;
  }
}
