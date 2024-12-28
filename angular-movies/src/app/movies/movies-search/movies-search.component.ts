import { Component, inject, OnInit } from '@angular/core';
import { FormBuilder, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatSelectModule } from '@angular/material/select';
import { GenreDTO } from '../../genres/genres.models';
import { MoviesListComponent } from "../movies-list/movies-list.component";
import { MoviesSearchDTO } from './movies-search.models';

@Component({
  selector: 'app-movies-search',
  imports: [MatButtonModule, ReactiveFormsModule, MatFormFieldModule, MatInputModule, MatCheckboxModule, MatSelectModule, MoviesListComponent],
  templateUrl: './movies-search.component.html',
  styleUrl: './movies-search.component.css'
})

export class MoviesSearchComponent implements OnInit {

  ngOnInit(): void {
    this.form.valueChanges.subscribe(values => {
      this.movies = this.moviesOriginal;
      this.filterMovies(values as MoviesSearchDTO);
    })
  }

  filterMovies(values: MoviesSearchDTO) {
    if(values.title) {
      this.movies = this.movies.filter(movie => movie.title.indexOf(values.title) !== -1);
    }
  }

  private formBuilder = inject(FormBuilder);

  form = this.formBuilder.group({
    title: '',
    genreId: 0,
    upcomingReleases: false,
    inTheaters: false
  })

  genres: GenreDTO[] = [
    {id: 1, name: 'Comedy'},
    {id: 2, name: 'Action'},
    {id: 3, name: 'Drama'}
  ]

  upComingReleasesMovies: any;
  inTheatersMovies: any;

  moviesOriginal = [
        {
        title: 'Inside Out',
        releaseDate: new Date(),
        price: 1400.99,
        poster: "https://upload.wikimedia.org/wikipedia/en/f/f7/Inside_Out_2_poster.jpg"
        },
        {
          title: 'Moana',
          releaseDate: new Date("2016-05-03"),
          price: 420.00,
          poster: "https://upload.wikimedia.org/wikipedia/en/f/f7/Inside_Out_2_poster.jpg"
        },
        {
          title: 'Inside Out 2',
          releaseDate: new Date(),
          price: 1400.99,
          poster: "https://upload.wikimedia.org/wikipedia/en/f/f7/Inside_Out_2_poster.jpg"
        },
        {
          title: 'Moana 2',
          releaseDate: new Date("2016-05-03"),
          price: 420.00,
          poster: "https://upload.wikimedia.org/wikipedia/en/f/f7/Inside_Out_2_poster.jpg"
        },
        {
          title: 'Bad Boys: Ride or Die',
          releaseDate: new Date('2016-05-03'),
          price: 300.99,
          poster: 'https://upload.wikimedia.org/wikipedia/en/8/8b/Bad_Boys_Ride_or_Die_%282024%29_poster.jpg'
        }
      ];

  movies = this.moviesOriginal;

  clear() {
    this.form.patchValue(
      {title: '',
        genreId: 0,
        upcomingReleases: false,
        inTheaters: false
      }
    )
  }
}
