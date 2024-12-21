import { CurrencyPipe, DatePipe, UpperCasePipe } from '@angular/common';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-movies-list',
  standalone: true,
  imports: [
    RouterOutlet,
    DatePipe,
    UpperCasePipe,
    CurrencyPipe
  ],
  templateUrl: './movies-list.component.html',
  styleUrl: './movies-list.component.css'
})

export class MoviesListComponent {
  title = 'angular-movies';
  movies?: any[];

  constructor() {
    setTimeout(() => {
      this.movies = [
        {
        title: 'Inside Out 2',
        releaseDate: new Date(),
        price: 1400.99,
        poster: "https://upload.wikimedia.org/wikipedia/en/f/f7/Inside_Out_2_poster.jpg"
        },
        {
          title: 'Moana',
          releaseDate: new Date("2016-05-03"),
          price: 420.00,
          poster: "https://upload.wikimedia.org/wikipedia/en/f/f7/Inside_Out_2_poster.jpg"
        }
      ]
    }, 2000)
  }
    


  duplicateNumber(value: number): number {
    return value * 2;
  }

}
