import { Component, Input, numberAttribute } from '@angular/core';
import { MovieCreationDTO, MovieDTO } from '../movies.models';
import { MoviesFormComponent } from "../movies-form/movies-form.component";
import { MultipleSelectorDTO } from '../../shared/components/multiple-selector/MultipleSelectorDTO';

@Component({
  selector: 'app-edit-movie',
  standalone: true,
  imports: [MoviesFormComponent],
  templateUrl: './edit-movie.component.html',
  styleUrl: './edit-movie.component.css'
})
export class EditMovieComponent {

  nonSelectedGenres: MultipleSelectorDTO[] = [
      {key: 1, description: 'Drama'},
      {key: 3, description: 'Comedy'},
    ]
  
  selectedGenres: MultipleSelectorDTO[] = [
    {key: 2, description: 'Action'},
  ];

  nonSelectedTheaters: MultipleSelectorDTO[] = [
    {key: 1, description: 'Acropolis'},
  ]

  selectedTheaters: MultipleSelectorDTO[] = [
    {key: 2, description: 'Agora Mall'},
  ];

  @Input({transform: numberAttribute})
  id!: number;

  model: MovieDTO = {id:1, title: 'SpiderMan: Far from Home', 
    releaseDate: new Date('2019-07-22'), trailer: 'aabc', 
    poster:'https://upload.wikimedia.org/wikipedia/en/b/bd/Spider-Man_Far_From_Home_poster.jpg'}

  saveChanges(movie: MovieCreationDTO) {
    console.log('editing the movie', movie);
  }
}
