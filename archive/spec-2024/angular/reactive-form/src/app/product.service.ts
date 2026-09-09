import { Injectable } from '@angular/core';
import { Product } from './models/product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor() { }

  getProducts(): Product[] {
    return [
      { id: "p1", name: "Termék A" },
      { id: "p2", name: "Termék B" },
      { id: "p3", name: "Termék C" },
    ]
  }
}
