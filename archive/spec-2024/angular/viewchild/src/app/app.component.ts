import { Component, ViewChild } from '@angular/core';
import { CardComponent } from './card/card.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  standalone: false,
  styleUrl: './app.component.sass'
})
export class AppComponent {
  
  @ViewChild("card") cardComp !: CardComponent

  update(): void {
    console.log(this.cardComp.secret)
    this.cardComp.changeMessage()
  }
}
