import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-search-user',
  templateUrl: './search-user.component.html',
  styleUrls: ['./search-user.component.scss']
})
export class SearchUserComponent implements OnInit {

  searchUserForm!: FormGroup;

  get expUserId() {
    return this.searchUserForm.get('userId')
  }

  get expFirstName() {
    return this.searchUserForm.get('firstName')
  }

  get expLastName() {
    return this.searchUserForm.get('lastName')
  }

  constructor() {
    this.searchUserForm = new FormGroup({
      userId: new FormControl(''),
      firstName: new FormControl(''),
      lastName: new FormControl('')
    }
  );}

  ngOnInit(): void {
    this.expLastName?.valueChanges
  }

  searchUser() {

  }
}
