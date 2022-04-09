import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validator, Validators} from "@angular/forms";
import {Router} from "@angular/router";
import {ActivatedRoute} from "@angular/router";

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


    constructor(private router: Router, private route: ActivatedRoute) {
    }


    ngOnInit(): void {
    }

    login() {
        this.userId = this.loginFormControl.value;
        this.password = this.passwordFormControl.value;
        this.router.navigate(['/home']);
    }

    resetForm() {
        this.userId = '';
        this.password = '';
    }


}
