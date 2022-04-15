import {Component, OnInit} from '@angular/core';
import {FormControl, Validators} from "@angular/forms";
import {Router} from "@angular/router";
import {ActivatedRoute} from "@angular/router";
import {Observable} from "rxjs";
import {HttpClient} from "@angular/common/http";

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
    loginFormControl = new FormControl('', [Validators.required]);
    passwordFormControl = new FormControl('', [Validators.required])
    userId: string = '';
    password: string = '';


    constructor(private router: Router, private route: ActivatedRoute, private httpClient: HttpClient) {
    }

    ngOnInit(): void {
    }

    login() {
        let url = 'http://localhost:8080/login';
        this.httpClient.post<Observable<boolean>>(url, {
            userName: this.loginFormControl.value,
            password: this.passwordFormControl.value
        }).subscribe(isValid => {
            if (isValid) {
                sessionStorage.setItem(
                    'token',
                    btoa(this.loginFormControl.value + ':' + this.passwordFormControl.value)
                );
                this.router.navigate(['']);
            } else {
                alert("Authentication failed.")
            }
        });
    }

    resetForm() {
        this.loginFormControl.reset();
        this.passwordFormControl.reset();
    }


}
