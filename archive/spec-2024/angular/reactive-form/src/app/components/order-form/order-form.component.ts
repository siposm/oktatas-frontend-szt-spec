import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ProductService } from '../../product.service';
import { Product } from '../../models/product';
import { OrderFormGroup } from '../../models/order-form.model';

@Component({
  selector: 'app-order-form',
  templateUrl: './order-form.component.html',
  styleUrls: ['./order-form.component.sass']
})
export class OrderFormComponent implements OnInit {

  products: Product[] = []
  form: OrderFormGroup

  constructor(public fb: FormBuilder, public prodServ: ProductService) {
    this.form = this.fb.nonNullable.group({
      customerName: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      zip: ['', [Validators.required, Validators.pattern(/^\d{4}$/)]],
      productId: ['', [Validators.required]],
    })
    // https://angular.dev/api/forms/Validators
  }

  ngOnInit(): void {
    // ha szinkron a service:
    this.products = this.prodServ.getProducts()

    // ha később aszinkron lesz:
    // this.prodServ.getProducts().subscribe(p => this.products = p)
  }

  // Bootstrap "is-invalid" jelzőhöz hasznos
  isInvalid(ctrlName: keyof OrderFormGroup['controls']): boolean {
    const ctrl = this.form.controls[ctrlName]
    return ctrl.invalid && (ctrl.touched || ctrl.dirty)
  }

  submit(): void {
    if (this.form.invalid) {
      this.form.markAllAsTouched()
      return
    }
    const orderData = this.form.getRawValue()
    
    console.log(">> ORDER:", orderData)
    
    // backend hívás...

    // opcionális: reset
    this.form.reset({ customerName: '', email: '', zip: '', productId: '' })
  }
}
