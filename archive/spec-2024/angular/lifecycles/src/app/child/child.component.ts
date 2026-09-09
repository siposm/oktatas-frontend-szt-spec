import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { StringContent } from '../string-content';

@Component({
  selector: 'app-child',
  standalone: false,
  templateUrl: './child.component.html',
  styleUrl: './child.component.sass'
})
export class ChildComponent implements OnChanges {
  @Input() content: StringContent = new StringContent()
  @Input() message: string = ""

  constructor() {
    console.log("Child constructor runs")
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log("Child OnChanges runs")
  }
}
