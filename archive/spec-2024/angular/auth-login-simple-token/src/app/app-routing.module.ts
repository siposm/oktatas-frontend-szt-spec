import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DemoCompAComponent } from './demo-comp-a/demo-comp-a.component';
import { DemoCompBComponent } from './demo-comp-b/demo-comp-b.component';
import { LoginComponent } from './login/login.component';
import { LogoutComponent } from './logout/logout.component';
import { authGuard } from './auth.guard';

const routes: Routes = [

  { path: "", redirectTo: "login", pathMatch: "full" },
  { path: "compa", component: DemoCompAComponent },
  { path: "compb", component: DemoCompBComponent, canActivate: [authGuard] },
  { path: "login", component: LoginComponent }, 
  { path: "logout", component: LogoutComponent },
  { path: "**", redirectTo: "login", pathMatch: "full" }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
