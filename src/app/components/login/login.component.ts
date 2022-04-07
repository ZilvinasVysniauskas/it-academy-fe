import { Component, OnInit } from '@angular/core';
import {FormControl, Validator, Validators} from "@angular/forms";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginFormControl = new FormControl('', [Validators.required]);

  constructor() { }

  ngOnInit(): void {
  }

}
