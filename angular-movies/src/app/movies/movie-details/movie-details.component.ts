import { Component, inject, Input, numberAttribute, OnInit } from '@angular/core';
import { MoviesService } from '../movies.service';
import { MovieDTO } from '../movies.models';
import { LoadingComponent } from "../../shared/components/loading/loading.component";
import { RouterLink } from '@angular/router';
import { MatChipsModule} from '@angular/material/chips'
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { appConfig } from '../../app.config';

@Component({
  selector: 'app-movie-details',
  imports: [LoadingComponent, MatChipsModule, RouterLink],
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

  ngOnInit(): void {
    this.moviesService.getById(this.id).subscribe(movie => {
      this.movie = movie;
      movie.releaseDate = new Date(movie.releaseDate);
      this.trailerURL = this.transformYoutubeURLToEmbed(movie.trailer);
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
