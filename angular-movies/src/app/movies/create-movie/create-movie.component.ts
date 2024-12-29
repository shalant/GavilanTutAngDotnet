import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { RouterLink } from '@angular/router';
import { MovieCreationDTO } from '../movies.models';
import { MoviesFormComponent } from "../movies-form/movies-form.component";
import { MultipleSelectorDTO } from '../../shared/components/multiple-selector/MultipleSelectorDTO';

@Component({
  selector: 'app-create-movie',
  imports: [MatIconModule, MatButtonModule, RouterLink, MoviesFormComponent],
  templateUrl: './create-movie.component.html',
  styleUrl: './create-movie.component.css'
})

export class CreateMovieComponent {

  nonSelectedGenres: MultipleSelectorDTO[] = [
    {key: 1, description: 'Drama'},
    {key: 2, description: 'Action'},
    {key: 3, description: 'Comedy'},
  ]

  selectedGenres: MultipleSelectorDTO[] = [];

  nonSelectedTheaters: MultipleSelectorDTO[] = [
    {key: 1, description: 'Acropolis'},
    {key: 2, description: 'Agora Mall'},
  ]

  selectedTheaters: MultipleSelectorDTO[] = [];

  saveChanges(movie: MovieCreationDTO) {
    console.log('creating the movie', movie);
  }
}
