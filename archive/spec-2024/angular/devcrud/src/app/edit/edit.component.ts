import { Component } from '@angular/core';
import { Developer } from '../developer';
import { ActivatedRoute, Router } from '@angular/router';
import { DeveloperService } from '../developer.service';

@Component({
  selector: 'app-edit',
  standalone: false,
  templateUrl: './edit.component.html',
  styleUrl: './edit.component.sass'
})
export class EditComponent {
  developer: Developer = new Developer()

  constructor(private route: ActivatedRoute, private router: Router, private devService: DeveloperService) {
    route.params.subscribe(param => {
      // let developers: Developer[] = Array<Developer>()
      // let data = JSON.parse(localStorage.getItem("bprof_devs") ?? "[]")
      // Object.values(data).map(x => developers.push(Object.assign(new Developer(), x)))
      this.developer = devService.developers.filter(x => x.id == param["id"])[0]
    })

  }

  save(): void {
    // let developers: Developer[] = Array<Developer>()
    // let data = JSON.parse(localStorage.getItem("bprof_devs") ?? "[]")
    // Object.values(data).map(x => developers.push(Object.assign(new Developer(), x)))

    // let idx = developers.findIndex(x => x.id == this.developer.id)
    // developers[idx] = this.developer

    // localStorage.setItem("bprof_devs", JSON.stringify(developers))

    this.devService.update(this.developer)
    this.router.navigate(["/list"])
  }
}
