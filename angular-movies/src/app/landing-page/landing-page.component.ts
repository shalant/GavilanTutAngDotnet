import { Component } from '@angular/core';
import { MoviesListComponent } from "../movies/movies-list/movies-list.component";

@Component({
  selector: 'app-landing-page',
  standalone:true,
  imports: [MoviesListComponent],
  templateUrl: './landing-page.component.html',
  styleUrl: './landing-page.component.css'
})

export class LandingPageComponent {
  upcomingReleasesMovies: any;
  inTheatresMovies: any;

  constructor() {
    setTimeout(() => {
      this.inTheatresMovies = [
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
        },
        {
          title: 'Bad Boys: Ride or Die',
          releaseDate: new Date('2016-05-03'),
          price: 300.99,
          poster: 'https://upload.wikimedia.org/wikipedia/en/8/8b/Bad_Boys_Ride_or_Die_%282024%29_poster.jpg'
        }],
      this.upcomingReleasesMovies = [
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
        },
      ]
    }, 500)
  }
}
