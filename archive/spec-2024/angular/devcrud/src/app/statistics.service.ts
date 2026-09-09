import { Injectable } from '@angular/core';
import { Developer } from './developer';

@Injectable({
  providedIn: 'root'
})
export class StatisticsService {

  averageSalary(developers: Developer[]): number {
    if (!developers.length) return 0
    let sum = developers.map(x => x.salary).reduce((a, b) => a! + b!)!
    return Math.round(sum / developers.length)
  }

  oldestDeveloper(developers: Developer[]): Developer {
    return developers.reduce((a, b) => a.age! < b.age! ? b : a)
  }

  highestEarningDeveloper(developers: Developer[]): Developer {
    return developers.reduce((a, b) => a.salary! < b.salary! ? b : a)
  }

  lowestEarningDeveloper(developers: Developer[]): Developer {
    return developers.reduce((a, b) => a.salary! < b.salary! ? a : b)
  }

  mostSkilledDeveloper(developers: Developer[]): Developer {
    return [...developers].sort((a, b) => b.skills.length - a.skills.length)[0]
  }

  getAllSkills(developers: Developer[]): string[] {
    return Array.from(new Set(developers.map(x => x.skills).flat().sort()))
  }
}