import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrl: './button.component.sass'
})
export class ButtonComponent {
  @Input() text: string = ""
  @Input() type: string = ""
  @Input() icon: string = ""

  content(): string {
    return this.icon + this.text
  }
}
