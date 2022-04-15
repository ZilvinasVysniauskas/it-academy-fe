import {Component, OnInit} from '@angular/core';
import {AuthService} from "../../service/auth.service";
import {FormControl, Validators} from "@angular/forms";

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

    constructor(private authService: AuthService) {
    }

    loginFormControl = new FormControl('', [Validators.required]);
    passwordFormControl = new FormControl('', [Validators.required])

    ngOnInit(): void {
    }

    login() {
        this.authService.login(this.loginFormControl.value, this.passwordFormControl.value);
    }

    resetForm() {
        this.loginFormControl.reset();
        this.passwordFormControl.reset();
    }


}
