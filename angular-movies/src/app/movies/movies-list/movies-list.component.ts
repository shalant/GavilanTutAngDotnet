import { CurrencyPipe, DatePipe, UpperCasePipe } from '@angular/common';
import { Component, Input, input } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { GenericListComponent } from "../../shared/components/generic-list/generic-list.component";
import { MatButtonModule } from "@angular/material/button"
import { MatIconModule } from "@angular/material/icon"

@Component({
  selector: 'app-movies-list',
  standalone: true,
  imports: [
    DatePipe,
    UpperCasePipe,
    CurrencyPipe,
    GenericListComponent,
    MatButtonModule,
    MatIconModule, RouterLink
],
  templateUrl: './movies-list.component.html',
  styleUrl: './movies-list.component.css'
})

export class MoviesListComponent {
  title = 'angular-movies';
  @Input({required: true})
  movies!: any[];    


  addMovie() {
    this.movies?.push({
      title: 'Inception',
      releaseDate: new Date('2012-07-03'),
      price: 500
    })
  }

  removeMovie(movie: any) {
    let index = this.movies.findIndex((m:any) => m.title === movie.title);
    this.movies.splice(index, 1);
  }

}
