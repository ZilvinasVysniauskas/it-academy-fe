import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Router} from "@angular/router";

@Injectable({
    providedIn: 'root'
})
export class AuthService {

    constructor(private httpClient: HttpClient, private router: Router) {
    }

    login(userId: string, password: string) {
        let loginUrl = 'http://localhost:8080/api/v1/login';
        this.httpClient.get('http://localhost:8080/api/v1/user');
        this.httpClient.post<Observable<boolean>>(loginUrl, {
            userId: userId,
            password: password
        }).subscribe(isValid => {
            if (isValid) {
                sessionStorage.setItem(
                    'token',
                    btoa(userId + ':' + password)
                );
                this.router.navigate(['/home']);
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


