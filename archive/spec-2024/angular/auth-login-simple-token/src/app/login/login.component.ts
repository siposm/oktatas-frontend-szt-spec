import { Component } from '@angular/core';
import { AuthService } from '../auth.service';
import { LoginModel } from '../models/login-model';

@Component({
  selector: 'app-login',
  standalone: false,
  templateUrl: './login.component.html',
  styleUrl: './login.component.sass'
})
export class LoginComponent {
  loginModel: LoginModel = new LoginModel()
  
  constructor(public authService: AuthService) { }

  inputCheck(): boolean {
    return !(this.loginModel.username.length > 3 && this.loginModel.password.length > 3)
  }
}
