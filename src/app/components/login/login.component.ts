import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {AuthService} from "../../service/authentification/auth.service";
import {UserLoginRequest} from "../../interfaces/userLoginRequest";
import {validateEmail} from "../../validators/emailValidator";
import {Router} from "@angular/router";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginFormGroup: FormGroup;

  get getUserId() {
    return this.loginFormGroup.get('userId')
  }

  get getPassword () {
    return this.loginFormGroup.get('password')
  }

  constructor(private authService: AuthService, private router: Router) {
    this.loginFormGroup = new FormGroup({
        userId: new FormControl('', {validators:
            [Validators.required],
        }),
        password: new FormControl('', {validators:
            [Validators.required]
        })
      }
    );
  }

  ngOnInit(): void {
    console.log('AAAAAAAAAAAAA')
    this.router.navigate(['/admin'])
  }

  login() {
    const loginRequest: UserLoginRequest =  {
      userId: this.getUserId!.value,
      password: this.getPassword!.value
    }
    this.authService.login(loginRequest);
  }

  resetForm() {
    this.loginFormGroup.reset();
  }


}
