import { inject, Injectable } from '@angular/core';
import { GenreCreationDTO, GenreDTO } from './genres.models';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';
import { PaginationDTO } from '../shared/models/PaginationDTO';
import { buildQueryParams } from '../shared/functions/buildQueryParams';

@Injectable({
  providedIn: 'root'
})

export class GenresService {

  constructor() { }

  private http = inject(HttpClient);

  private baseUrl = environment.apiUrl + '/genres'

  public getPaginated(pagination: PaginationDTO): Observable<HttpResponse<GenreDTO[]>> {
    let queryParams = buildQueryParams(pagination);
    return this.http.get<GenreDTO[]>(this.baseUrl, {params: queryParams, observe: 'response'})
  }

  public create(genre: GenreCreationDTO) {
    return this.http.post(this.baseUrl, genre);
  }
}
