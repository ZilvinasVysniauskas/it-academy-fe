import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Router} from "@angular/router";
import {UserLoginRequest} from "../../interfaces/userLoginRequest";
import {LoginResponse} from "../../interfaces/loginResponse";

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private httpClient: HttpClient, private router: Router) {
  }

  login(loginRequest: UserLoginRequest) {
    let loginUrl = 'api/v1/login';
    console.log('here')
    this.httpClient.post<LoginResponse>(loginUrl, loginRequest, {observe: 'response'})
      .subscribe(
        response => {
        this.setRole(response.body?.user.role!)
        this.setToken(response.body?.jwtToken!)
        this.router.navigate(['home'])
      },
      error => alert("login failed")
      );
  }

  public setRole(role: string): void {
    localStorage.setItem('roles', role);
  }

  public getRole(): string | null {
    return localStorage.getItem('role');
  }

  public setToken(jwtToken: string) {
    localStorage.setItem('jwtToken', jwtToken);
  }

  public getToken(): string | null {
    return localStorage.getItem('jwtToken');
  }

  public logout() {
    this.router.navigate(['/login']);
    localStorage.clear();
  }

}


