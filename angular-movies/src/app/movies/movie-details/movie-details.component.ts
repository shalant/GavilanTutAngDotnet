import { Component, inject, Input, numberAttribute, OnInit } from '@angular/core';
import { MoviesService } from '../movies.service';
import { MovieDTO } from '../movies.models';
import { LoadingComponent } from "../../shared/components/loading/loading.component";
import { RouterLink } from '@angular/router';
import { MatChipsModule} from '@angular/material/chips'
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { appConfig } from '../../app.config';
import { MapComponent } from "../../shared/components/map/map.component";
import { Coordinate } from '../../shared/components/map/coordinate.model';

@Component({
  selector: 'app-movie-details',
  imports: [LoadingComponent, MatChipsModule, RouterLink, MapComponent],
  templateUrl: './movie-details.component.html',
  styleUrl: './movie-details.component.css'
})

export class MovieDetailsComponent implements OnInit {

  @Input({transform: numberAttribute})
  id!: number;
  movie!: MovieDTO;
  trailerURL!: SafeResourceUrl;
  sanitizer = inject(DomSanitizer);
  moviesService = inject(MoviesService);
  coordinates: Coordinate[] = [];

  ngOnInit(): void {
    this.moviesService.getById(this.id).subscribe(movie => {
      this.movie = movie;
      movie.releaseDate = new Date(movie.releaseDate);
      this.trailerURL = this.transformYoutubeURLToEmbed(movie.trailer);
      if(movie.theaters) {
        this.coordinates = movie.theaters.map(theater => {
          return { latitude: theater.latitude, longitude: theater.longitude, text: theater.name}
        });
      }
    })
  }

  transformYoutubeURLToEmbed(url: string): SafeResourceUrl | string {
    if(!url) {
      return '';
    }

    let videoId = url.split('v=')[1];
    let ampersandPosition = videoId.indexOf('&');
    if(ampersandPosition !== -1) {
      videoId = videoId.substring(0, ampersandPosition);
    }

    return this.sanitizer.bypassSecurityTrustResourceUrl(`https://www.youtube.com/embed/${videoId}`);
  }
}
