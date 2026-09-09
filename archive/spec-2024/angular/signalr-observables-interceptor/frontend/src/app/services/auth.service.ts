import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment.development';
import { HttpClient } from '@angular/common/http';
import { LoginModel } from '../models/login-model';
import { TokenModel } from '../models/token-model';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }

  login(loginModel: LoginModel): void {
    this.http.post<TokenModel>(environment.apis.login, loginModel)
      .subscribe(res => {
        console.log(res)
        const token = res.accessToken
        if (!token) {
          console.error("Login response nem tartalmaz token-t.")
          return
        }
        localStorage.setItem(environment.tokenKey, token)
      })
  }

  logout(): void {
    localStorage.removeItem(environment.tokenKey)
  }
}
