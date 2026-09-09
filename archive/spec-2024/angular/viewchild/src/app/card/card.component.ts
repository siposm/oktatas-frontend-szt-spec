import { Component } from '@angular/core';

@Component({
  selector: 'app-card',
  standalone: false,
  templateUrl: './card.component.html',
  styleUrl: './card.component.sass'
})
export class CardComponent {

  message: string = "Lorem ipsum dolor sit amet"
  secret: string = "valami titkos üzenet"

  changeMessage(): void {
    this.message = "**NEW CONTENT**"
  }
}
