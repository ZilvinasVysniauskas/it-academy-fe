import {Component, OnInit} from '@angular/core';
import {AuthService} from "../../service/auth.service";

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

    constructor(private authService: AuthService) {
    }

    loginFormControl = this.authService.loginFormControl;
    passwordFormControl = this.authService.passwordFormControl;

    ngOnInit(): void {
    }

    login() {
        this.authService.login();
    }

    resetForm() {
        this.loginFormControl.reset();
        this.passwordFormControl.reset();
    }


}
