import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { RouterLink } from '@angular/router';
import { MovieCreationDTO } from '../movies.models';
import { MoviesFormComponent } from "../movies-form/movies-form.component";

@Component({
  selector: 'app-create-movie',
  imports: [MatIconModule, MatButtonModule, RouterLink, MoviesFormComponent],
  templateUrl: './create-movie.component.html',
  styleUrl: './create-movie.component.css'
})

export class CreateMovieComponent {

  saveChanges(movie: MovieCreationDTO) {
    console.log('creating the movie', movie);
  }
}
