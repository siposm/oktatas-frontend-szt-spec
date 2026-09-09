import { Component } from '@angular/core';
import { Developer } from '../developer';
import { Router } from '@angular/router';
import { DeveloperService } from '../developer.service';

@Component({
  selector: 'app-list',
  standalone: false,
  templateUrl: './list.component.html',
  styleUrl: './list.component.sass'
})
export class ListComponent {
  constructor(private router: Router, public devService: DeveloperService) { }

  remove(developer: Developer): void {
    this.devService.remove(developer)
  }

  edit(developer: Developer): void {
    this.router.navigate(["/edit/" + developer.id])
  }
}
