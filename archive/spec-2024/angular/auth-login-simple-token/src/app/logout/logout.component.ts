import { Component } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-logout',
  standalone: false,
  templateUrl: './logout.component.html',
  styleUrl: './logout.component.sass'
})
export class LogoutComponent {

  constructor(private authService: AuthService, private router: Router) {
    authService.logout()
    this.router.navigate(["login"])
  }

}
