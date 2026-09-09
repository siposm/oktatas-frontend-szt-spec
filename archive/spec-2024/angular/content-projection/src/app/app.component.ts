import { Component, OnInit } from '@angular/core';
import { Movie } from './movie';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  standalone: false,
  styleUrl: './app.component.sass'
})
export class AppComponent implements OnInit {
  movies: Movie[] = []

  ngOnInit(): void {
    this.movies.push(
      new Movie("The Matrix", 1999, "Lorem ipsum dolor sit amet..."),
      new Movie("Inception", 2010, "Lorem ipsumamet..."),
      new Movie("Interstellar", 2014, "Lorem ipsum dolor sit ipsum dolor sit ipsum dolor sit amet..."),
      new Movie("The Dark Knight", 2008, "Lorem ipsum dolor ..."),
    )
  }
}
