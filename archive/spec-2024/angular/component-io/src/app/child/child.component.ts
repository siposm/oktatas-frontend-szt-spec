import { Component, EventEmitter, Input, Output } from '@angular/core';
import { MyObject } from '../parent/parent.component';

@Component({
  selector: 'app-child',
  standalone: false,
  templateUrl: './child.component.html',
  styleUrl: './child.component.scss'
})
export class ChildComponent {
  @Input() item: MyObject = new MyObject()
  @Output() message: EventEmitter<MyObject>= new EventEmitter<MyObject>()

  childHello(): void {
    this.message.emit(this.item)
  }
}
