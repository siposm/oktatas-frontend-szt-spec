import { Component, OnDestroy, OnInit } from '@angular/core';

@Component({
  selector: 'app-component-a',
  standalone: false,
  templateUrl: './component-a.component.html',
  styleUrl: './component-a.component.sass'
})
export class ComponentAComponent implements OnInit, OnDestroy {
  constructor() {
    console.log("Comp A constructor runs")
  }

  ngOnDestroy(): void {
    console.log("Comp A OnDestroy runs")
  }
  
  ngOnInit(): void {
    console.log("Comp A OnInit runs")
  }
}
