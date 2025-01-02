import { inject, Injectable } from '@angular/core';
import { GenreCreationDTO, GenreDTO } from './genres.models';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';
import { PaginationDTO } from '../shared/models/PaginationDTO';
import { buildQueryParams } from '../shared/functions/buildQueryParams';
import { ICRUDService } from '../shared/interfaces/ICRUDService';

@Injectable({
  providedIn: 'root'
})

export class GenresService implements ICRUDService<GenreDTO, GenreCreationDTO> {

  constructor() { }

  private http = inject(HttpClient);

  private baseUrl = environment.apiUrl + '/genres'

  public getPaginated(pagination: PaginationDTO): Observable<HttpResponse<GenreDTO[]>> {
    let queryParams = buildQueryParams(pagination);
    return this.http.get<GenreDTO[]>(this.baseUrl, {params: queryParams, observe: 'response'})
  }

  public getById(id: number): Observable<GenreDTO> {
    return this.http.get<GenreDTO>(`${this.baseUrl}/${id}`);
  }

  public update(id: number, genre: GenreCreationDTO) {
    return this.http.put<GenreDTO>(`${this.baseUrl}/${id}`, genre);
  }

  public create(genre: GenreCreationDTO) {
    return this.http.post(this.baseUrl, genre);
  }

  public delete(id: number) {
    return this.http.delete(`${this.baseUrl}/${id}`);
  }
}
