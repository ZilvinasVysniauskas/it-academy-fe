import {Component, OnInit} from '@angular/core';
import {FormControl, Validators} from "@angular/forms";
import {Router} from "@angular/router";
import {ActivatedRoute} from "@angular/router";
import {Observable} from "rxjs";
import {HttpClient} from "@angular/common/http";
import {AuthService} from "../../service/auth.service";

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
    loginFormControl = new FormControl('', [Validators.required]);
    passwordFormControl = new FormControl('', [Validators.required])

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
