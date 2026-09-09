import { Component } from '@angular/core';
import { Developer } from '../developer';
import { Router } from '@angular/router';
import { DeveloperService } from '../developer.service';

@Component({
  selector: 'app-create',
  standalone: false,
  templateUrl: './create.component.html',
  styleUrl: './create.component.sass'
})
export class CreateComponent {
  developer: Developer = new Developer()

  constructor(private router: Router, private devService: DeveloperService) { }

  create(): void {
    this.devService.create(this.developer)
    this.router.navigate(["list"])
  }

  // loadAndSave(): void {
  //   let developers = []
  //   let data = JSON.parse(localStorage.getItem("bprof_devs") ?? "[]")
  //   Object.values(data).map(x => developers.push(Object.assign(new Developer(), x)))

  //   developers.push(this.developer)

  //   localStorage.setItem("bprof_devs", JSON.stringify(developers))
  // }
}
