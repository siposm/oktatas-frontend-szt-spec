import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component } from '@angular/core';
import { environment } from '../../environments/environment.development';

@Component({
  selector: 'app-demo-comp-b',
  standalone: false,
  templateUrl: './demo-comp-b.component.html',
  styleUrl: './demo-comp-b.component.sass'
})
export class DemoCompBComponent {
  jobId: string = ""
  constructor(private http: HttpClient) { }
  deleteJob(): void {

    const token = JSON.parse(localStorage.getItem(environment.tokenKey)!).token

    const headers = new HttpHeaders()
      .set("Authorization", `Bearer ${token}`)
      .set("Content-Type", "application/json")

    this.http.delete(`${environment.apis.job}`, {
      headers,
      body: { id: this.jobId }
    }).subscribe(x => {
      console.log(x)
    })
  }
}
