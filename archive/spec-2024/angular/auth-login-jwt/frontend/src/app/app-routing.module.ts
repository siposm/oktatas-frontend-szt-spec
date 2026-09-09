import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DemoCompAComponent } from './demo-comp-a/demo-comp-a.component';
import { DemoCompBComponent } from './demo-comp-b/demo-comp-b.component';
import { LoginComponent } from './login/login.component';
import { LogoutComponent } from './logout/logout.component';
import { authGuard } from './auth.guard';
import { AdminOnlyComponent } from './admin-only/admin-only.component';

const routes: Routes = [
  { path: "", redirectTo: "login", pathMatch: "full" },
  { path: "compa", component: DemoCompAComponent },
  
  // Bejelentkezés szükséges (de nincs role megkötés)
  { path: "compb", component: DemoCompBComponent, canActivate: [authGuard] },
  
  // Csak ADMIN számára elérhető útvonal
  {
    path: 'admin', component: AdminOnlyComponent,
    canActivate: [authGuard],
    data: { roles: ['ADMIN'] }
  },
  { path: "login", component: LoginComponent },
  { path: "logout", component: LogoutComponent },
  { path: "**", redirectTo: "login", pathMatch: "full" }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
