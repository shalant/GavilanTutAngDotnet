import { Component, inject } from '@angular/core';
import { MoviesListComponent } from "../movies/movies-list/movies-list.component";
import { MoviesService } from '../movies/movies.service';
import { AuthorizedComponent } from "../security/authorized/authorized.component";

@Component({
  selector: 'app-landing-page',
  standalone:true,
  imports: [MoviesListComponent, AuthorizedComponent],
  templateUrl: './landing-page.component.html',
  styleUrl: './landing-page.component.css'
})

export class LandingPageComponent {
  upcomingReleasesMovies: any;
  inTheatresMovies: any;

  moviesService = inject(MoviesService);

  constructor() {
    this.loadMovies();
  }

  loadMovies() {
    this.moviesService.getLanding().subscribe(response => {
      this.upcomingReleasesMovies = response.upcomingReleases;
      this.inTheatresMovies = response.inTheaters;
    })
  }

  handleDelete() {
    this.loadMovies();
  }
}







// setTimeout(() => {
//   this.inTheatresMovies = [
//     {
//     title: 'Inside Out 2',
//     releaseDate: new Date(),
//     price: 1400.99,
//     poster: "https://upload.wikimedia.org/wikipedia/en/f/f7/Inside_Out_2_poster.jpg"
//     },
//     {
//       title: 'Moana',
//       releaseDate: new Date("2016-05-03"),
//       price: 420.00,
//       poster: "https://upload.wikimedia.org/wikipedia/en/f/f7/Inside_Out_2_poster.jpg"
//     },
//     {
//       title: 'Bad Boys: Ride or Die',
//       releaseDate: new Date('2016-05-03'),
//       price: 300.99,
//       poster: 'https://upload.wikimedia.org/wikipedia/en/8/8b/Bad_Boys_Ride_or_Die_%282024%29_poster.jpg'
//     }],
//   this.upcomingReleasesMovies = [
//     {
//       title: 'Inside Out 2',
//       releaseDate: new Date(),
//       price: 1400.99,
//       poster: "https://upload.wikimedia.org/wikipedia/en/f/f7/Inside_Out_2_poster.jpg"
//     },
//     {
//       title: 'Moana',
//       releaseDate: new Date("2016-05-03"),
//       price: 420.00,
//       poster: "https://upload.wikimedia.org/wikipedia/en/f/f7/Inside_Out_2_poster.jpg"
//     },
//   ]
// }, 500)