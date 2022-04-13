import { Component, OnInit } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {User} from "../../interfaces/user";
import {AdminPageService} from "../../service/admin/admin-page.service";
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {map, startWith} from "rxjs/operators";
import {combineLatest, Observable, of} from "rxjs";

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit {

  maxLength = 20;

  public readonly searchControl: FormControl;
  public readonly users$: Observable<User[]>;

  constructor(private adminService: AdminPageService) {
    this.searchControl = new FormControl('', [Validators.required]);

    this.users$ = combineLatest([
      this.searchControl.valueChanges.pipe(startWith('')),
      this.adminService.fetchAllUsers(),
    ]).pipe(
      map(([ search, allUsers ]: [ string, User[] ]): User[] => allUsers.filter(
        (user: User): boolean => user.firstName.includes(search),
      )),
    );
  }
  users!: User[];

  ngOnInit(): void {
  }


}
