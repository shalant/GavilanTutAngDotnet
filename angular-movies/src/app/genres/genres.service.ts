import { inject, Injectable } from '@angular/core';
import { GenreDTO } from './genres.models';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})

export class GenresService {

  constructor() { }

  private http = inject(HttpClient);

  private baseUrl = environment.apiUrl + '/genres'

  public getAll(): Observable<GenreDTO[]> {
    return this.http.get<GenreDTO[]>(this.baseUrl)
  }
}
