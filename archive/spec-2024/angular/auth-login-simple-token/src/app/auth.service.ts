import { Injectable } from '@angular/core';
import { LoginModel } from './models/login-model';
import { HttpClient } from '@angular/common/http';
import { AuthToken } from './models/auth-token';
import { environment } from '../environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }

  // canActivate(): boolean {
  //   return this.isLoggedIn()
  // }

  isLoggedIn(): boolean {
    const value = localStorage.getItem(environment.tokenKey)
    if (!value) return false
    return value.length > 10
  }

  login(loginModel: LoginModel): void {
    this.http.post<AuthToken>(environment.apis.login, loginModel).subscribe(token => {
      // check and set token expiration etc. here
      localStorage.setItem(environment.tokenKey, JSON.stringify(token))
    })
  }

  logout(): void {
    localStorage.removeItem(environment.tokenKey)
    // call backend logout etc.
  }
}
