import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { IMovie } from './IMovieType';

@Injectable({
  providedIn: 'root',
})
export class ApiClientService {
  private url: string = 'https://movied.herokuapp.com';
  constructor(private http: HttpClient) {}

  // Get the box-office list of movies
  getDiscoverMovies (): Observable<IMovie[]> {
    return this.http.get<IMovie[]>(`${this.url}/discover`);
  }

  // Get the list of movies for a given category
  getCategoryMovies(categoryId: number): Observable<IMovie[]> {
    return this.http.get<IMovie[]>(`${this.url}/categories/${categoryId}`);
  }

  getDetailsbyMovie(movieId: number): Observable<IMovie[]> {
    return this.http.get<IMovie[]>(`${this.url}/movie/${movieId}`);
  }
}
