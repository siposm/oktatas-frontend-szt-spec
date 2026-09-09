import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { delay, map, Observable, of, tap } from 'rxjs';

export interface Product {
  id: number
  name: string
  price: number
}

@Injectable({
  providedIn: 'root'
})
export class DataService {

  private http: HttpClient = inject(HttpClient)

  private products: Product[] = [
    { id: 1, name: "Laptop", price: 400 },
    { id: 2, name: "Mouse", price: 30 },
    { id: 3, name: "Monitor", price: 200 },
  ]

  getProducts(): Observable<Product[]> {
    // of() → egyszerűen Observable-t készít a tömbből
    return of(this.products).pipe(

      // szimulálunk hálózati késleltetést
      delay(2000),

      // mellékhatások kezelése pl. logolás
      tap(() => console.log("Adatok betöltve...")),

      // áremelés 10%-kal
      map(products => products.map(p => ({ ...p, price: p.price * 1.1 }))),

      // csak 100 felettiek
      map(products => products.filter(p => p.price > 100))
    )
  }

  getProducts2(): Observable<Product[]> {
    return of(this.products).pipe(
      delay(5000),
      map(products => products.map(p => ({ ...p, name: p.name.toUpperCase() })))
    )
  }

  getProducts3(): Observable<Product[]> {
    return this.http.get<Product[]>("http://localhost:5188/api/product")
  }
}
