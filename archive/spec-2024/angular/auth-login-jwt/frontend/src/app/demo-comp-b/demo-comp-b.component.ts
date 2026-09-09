import { Component } from '@angular/core';

@Component({
  selector: 'app-demo-comp-b',
  standalone: false,
  templateUrl: './demo-comp-b.component.html',
  styleUrl: './demo-comp-b.component.sass'
})
export class DemoCompBComponent {
  content: string = ""

  log(): void {
    console.log(`Your content is: ${this.content}`)
  }
}
