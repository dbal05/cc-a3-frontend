import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { throwError, Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';

const API_URL = environment.api_url;

@Injectable({
  providedIn: 'root'
})
export class SailsService {

  constructor(private http: HttpClient) { }

  private options = { headers: new HttpHeaders().set('Content-Type', 'application/json'), params: {}};

  getActors () {
    return this.http.get<any>(API_URL + '/actor/getActors889', this.options)
      .pipe(
        catchError(err => throwError(new Error('Get Actors'))),
      )
  }

  getMovies() {
    return this.http.get<any>(API_URL + '/movie/getMovies889', this.options)
      .pipe(
        catchError(err => throwError(new Error('Get Movies'))),
      )
  }

  getActorByName (firstname: string, lastname: string) {
    this.options.params = {firstname: firstname, lastname: lastname};

    return this.http.get<any>(API_URL + '/actor/getActorByName889', this.options)
      .pipe(
        catchError(err => throwError(new Error('Get Actor By Name'))),
      )
  }

  getActorByAge (minAge: number, maxAge: number) {
    if (minAge && maxAge) {
      this.options.params = {minAge: minAge, maxAge: maxAge};
    } else if (minAge) {
      this.options.params = {minAge: minAge};
    } else if (maxAge) {
      this.options.params = {maxAge: maxAge};
    }

    return this.http.get<any>(API_URL + '/actor/getActorByAge889', this.options)
      .pipe(
        catchError(err => throwError(new Error('Get Actor By Age'))),
      )
  }

  deleteActor (id: number) {
    const url = `${API_URL}/actor/deleteActorById889?id=${id}`;
    return this.http.delete(url, this.options)
      .pipe(
        catchError(err => throwError(new Error('Delete Actor'))),
      )
  }

  deleteMovie (id: number) {
    const url = `${API_URL}/movie/deleteMovieById889?id=${id}`;
    return this.http.delete(url, this.options)
      .pipe(
        catchError(err => throwError(new Error('Delete Movie'))),
      )
  }
}
