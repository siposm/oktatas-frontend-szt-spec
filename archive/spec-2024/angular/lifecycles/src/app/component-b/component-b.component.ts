import { Component } from '@angular/core';
import { StringContent } from '../string-content';

@Component({
  selector: 'app-component-b',
  standalone: false,
  templateUrl: './component-b.component.html',
  styleUrl: './component-b.component.sass'
})
export class ComponentBComponent {
  contents: StringContent[] = []
  message: string = "This is my welcome message"

  constructor() {
    console.log("Component B constructor runs")
    this.contents.push(new StringContent("Lorem ipsum"))
    this.contents.push(new StringContent("Dolor sit"))
    this.contents.push(new StringContent("Amet ipsum dolor"))
  }

  changeItem(): void {
    this.message = this.message.replace("welcome", "goodbye")
  }
}
