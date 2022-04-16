import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Router} from "@angular/router";
import {UserLoginRequest} from "../../interfaces/userLoginRequest";
import {User} from "../../interfaces/user";

@Injectable({
    providedIn: 'root'
})
export class AuthService {

    constructor(private httpClient: HttpClient, private router: Router) {
    }

    isLoggedIn: boolean = false;

    login(loginRequest: UserLoginRequest) {
        let loginUrl = 'http://localhost:8080/api/v1/login';
        this.httpClient.post<User>(loginUrl, loginRequest, {observe: 'response'})
            .subscribe(response => {
                if (response.status == 200) {
                    sessionStorage.setItem(
                        'token',
                        btoa(loginRequest.userId + ':' + loginRequest.password)
                    );
                    this.isLoggedIn = true;
                    if (response.body!.role === 'admin') {
                        this.router.navigate(['/adminpage'])
                    } else {
                        this.router.navigate(['/home']);
                    }
                } else {
                    alert("Authentication failed.")
                }
            });
    }

    logout() {
        this.router.navigate(['/login']);
        sessionStorage.removeItem('token');
    }
}


