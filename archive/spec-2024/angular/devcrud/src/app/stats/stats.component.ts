import { Component } from '@angular/core';
import { StatisticsService } from '../statistics.service';
import { DeveloperService } from '../developer.service';
import { Developer } from '../developer';

@Component({
  selector: 'app-stats',
  standalone: false,
  templateUrl: './stats.component.html',
  styleUrl: './stats.component.sass',
})
export class StatsComponent {
  constructor(
    public statService: StatisticsService,
    public devService: DeveloperService
  ) {}

  get developers(): Developer[] {
    return this.devService.developers
  }

  get averageSalary(): number {
    return this.statService.averageSalary(this.developers)
  }

  get oldestDeveloper(): Developer {
    return this.statService.oldestDeveloper(this.developers)
  }

  get highestEarningDeveloper(): Developer {
    return this.statService.highestEarningDeveloper(this.developers)
  }

  get lowestEarningDeveloper(): Developer {
    return this.statService.lowestEarningDeveloper(this.developers)
  }

  get mostSkilledDeveloper(): Developer {
    return this.statService.mostSkilledDeveloper(this.developers)
  }

  get allSkills(): string[] {
    return this.statService.getAllSkills(this.developers)
  }
}
