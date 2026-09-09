import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ProductService } from './services/product.service';
import { StatusResponse } from './models/status-response';
import { Product } from './models/product';
import { AuthService } from './services/auth.service';
import { LoginModel } from './models/login-model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.sass'
})
export class AppComponent implements OnInit {
  
  loginModel: LoginModel = new LoginModel()
  deleteId: string = ""
  status$: Observable<StatusResponse> = new Observable<StatusResponse>()
  products$: Observable<Product[]> = new Observable<Product[]>()
  newProduct: Product = { name: "Lorem Ipsum", price: 100, stock: 20, category: "lorem" }

  constructor(private productService: ProductService,
    private authService: AuthService) { }

  ngOnInit(): void {
    this.productService.init()
    this.products$ = this.productService.products$
    this.status$ = this.productService.status()
  }

  create(): void {
    this.productService.create(this.newProduct).subscribe(x => console.log(x))
  }

  delete(): void {
    this.productService.delete(this.deleteId)
  }

  login(): void {
    this.authService.login(this.loginModel)
  }

  logout(): void {
    this.authService.logout()
  }
}
