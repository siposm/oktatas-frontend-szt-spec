import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component } from '@angular/core';
import { Person } from '../models/person';
import { environment } from '../../environments/environment.development';

@Component({
  selector: 'app-admin-only',
  standalone: false,
  templateUrl: './admin-only.component.html',
  styleUrl: './admin-only.component.sass'
})
export class AdminOnlyComponent {

  items: Person[] = []

  constructor(private http: HttpClient) { }

  load(): void {
    const token = localStorage.getItem(environment.tokenKey) ?? ''
    const headers = new HttpHeaders().set("Authorization", `Bearer ${token}`)
    this.http.get<Person[]>(environment.apis.person, { headers }).subscribe(x => this.items = x)
  }
}
