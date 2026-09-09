import { Component, OnDestroy, OnInit } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { DataService, Product } from './data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.sass'
})
export class AppComponent implements OnInit, OnDestroy {

  products$!: Observable<Product[]>
  products2!: Product[]
  private subscription!: Subscription

  constructor(private dataService: DataService) { }

  ngOnInit() {
    this.products$ = this.dataService.getProducts()

    // subscribe nélkül sosem fut le
    this.subscription = this.dataService.getProducts2().subscribe(x => {
      console.log(x)
      this.products2 = x
    })

    this.dataService.getProducts3().subscribe(x => console.log(x))
  }

  ngOnDestroy(): void {
    if (this.subscription) this.subscription.unsubscribe()
    // itt most egyébként nem lesz memory leak
    // http hívásoknál nem jellemző, mert completed-re futnak
  }
}
