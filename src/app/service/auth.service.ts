import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Router} from "@angular/router";
import {FormControl, Validators} from "@angular/forms";

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  loginFormControl = new FormControl('', [Validators.required]);
  passwordFormControl = new FormControl('', [Validators.required])

  constructor(private httpClient: HttpClient, private router: Router) { }

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
  logout() {
    this.router.navigate(['/login']);
    sessionStorage.clear();
  }
}

