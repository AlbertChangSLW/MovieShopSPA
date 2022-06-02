import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { MovieCard } from 'src/app/shared/Models/MovieCard';

@Injectable({
  providedIn: 'root'
})
export class MovieService {

  constructor(private http: HttpClient) { }

  getTopGrossingMovies() : Observable<MovieCard[]>{
    return this.http.get<MovieCard[]>('https://localhost:7046/api/Movies/top-grossing')
  }

  getMovieDetails(id: number){

  }

  getMoviesByGenre(genreId: number){

  }
}
