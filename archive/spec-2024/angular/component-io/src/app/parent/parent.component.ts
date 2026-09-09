import { Component } from '@angular/core';

@Component({
  selector: 'app-parent',
  standalone: false,
  templateUrl: './parent.component.html',
  styleUrl: './parent.component.scss'
})
export class ParentComponent {
  dataItems: MyObject[] = []
  constructor() {
    this.dataItems.push(new MyObject("alma", 3))
    this.dataItems.push(new MyObject("körte", 5))
    this.dataItems.push(new MyObject("szilva", 10))
    this.dataItems.push(new MyObject("barack", 2))
  }
  hello(message: MyObject): void {
    console.log(message)
  }
}

export class MyObject {
  content: string = ""
  priority: number = 0
  constructor(content: string = "", priority: number = 0) {
    this.content = content
    this.priority = priority
  }
}
