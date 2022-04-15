import {Component, OnInit} from '@angular/core';
import {FormControl, Validators} from "@angular/forms";
import {AuthService} from "../../service/auth.service";

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
    loginFormControl = this.authService.loginFormControl;
    passwordFormControl = this.authService.passwordFormControl;

    constructor(private authService: AuthService) {
    }

    ngOnInit(): void {
    }

    login() {
        this.authService.login();
    }

    logout() {
        this.authService.logout();
    }

    resetForm() {
        this.loginFormControl.reset();
        this.passwordFormControl.reset();
    }


}
