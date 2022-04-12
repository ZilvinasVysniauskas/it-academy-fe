import { Component, OnInit } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {User} from "../../interfaces/user";
import {AdminPageService} from "../../service/admin/admin-page.service";
import {FormControl, FormGroup} from "@angular/forms";
import {map, startWith} from "rxjs/operators";
import {combineLatest, Observable, of} from "rxjs";

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit {

  maxLength = 20;


  searchUserForm!: FormGroup;

  get expUserId() {
    return this.searchUserForm.get('userId')
  }



  get expLastName() {
    return this.searchUserForm.get('lastName')
  }

  get expFirstName() {
    return this.searchUserForm.get('firstName')
  }

  constructor(private adminService: AdminPageService) {
    this.searchUserForm = new FormGroup({
        userId: new FormControl(''),
        firstName: new FormControl(''),
        lastName: new FormControl('')
      }
    );
  }
  users!: User[];

  ngOnInit(): void {
    this.adminService.fetchAllUsers().subscribe(u => {
      this.users = u;
    });
    this.expFirstName!.valueChanges.pipe(
      startWith(''),
      map(value => this.users.filter(user => user.firstName.includes(value)))
    ).subscribe(u => this.users = u)
  }


}
