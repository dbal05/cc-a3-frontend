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

  getActors889() {
    return this.http.get<any>(API_URL + '/actor/getActors889', this.options)
      .pipe(
        catchError(err => throwError(new Error('Get Actors'))),
      )
  }

  getMovies889() {
    return this.http.get<any>(API_URL + '/movie/getMovies889', this.options)
      .pipe(
        catchError(err => throwError(new Error('Get Movies'))),
      )
  }

  getMovieByYear889(minYear: number, maxYear: number) {
    this.options.params = minYear && maxYear ? {minYear: minYear, maxYear: maxYear} : minYear ? {minYear: minYear} : maxYear ? {maxYear: maxYear} : {};
    console.log(this.options.params);
    return this.http.get<any>(API_URL + '/movie/getMoviesByYear889', this.options) 
      .pipe(
        catchError(err => throwError(new Error ('Get Movie By Year'))),
      )
  }

  getMovieByTitle889(title: string) {
    this.options.params = title ? {title: title} : {};
    return this.http.get<any>(API_URL + '/movie/getMovieByTitle889', this.options)
      .pipe(
        catchError(err => throwError(new Error ('Get Movie By Title'))),
      )
  }

  getMovieByLanguage889(lang: string) {
    this.options.params = lang ? {language: lang} : {};
    return this.http.get<any>(API_URL + '/movie/getMoviesByLanguage889', this.options)
      .pipe(
        catchError(err => throwError(new Error ('Get Movie By Language'))),
      )
  }

  getActorByName889(firstname: string, lastname: string) {
    this.options.params = firstname && lastname ? {firstname: firstname, lastname: lastname} : 
      firstname ? {firstname: firstname} : 
      lastname ? {lastname: lastname} : {};

    return this.http.get<any>(API_URL + '/actor/getActorByName889', this.options)
      .pipe(
        catchError(err => throwError(new Error('Get Actor By Name'))),
      )
  }

  getActorByAge889(minAge: number, maxAge: number) {
    this.options.params = minAge && maxAge ? {minAge: minAge, maxAge: maxAge} : minAge ? {minAge: minAge} : maxAge ? {maxAge: maxAge} : {};
    return this.http.get<any>(API_URL + '/actor/getActorByAge889', this.options)
      .pipe(
        catchError(err => throwError(new Error('Get Actor By Age'))),
      )
  }

  deleteActor889(id: number) {
    const url = `${API_URL}/actor/deleteActorById889?id=${id}`;
    return this.http.delete(url, this.options)
      .pipe(
        catchError(err => throwError(new Error('Delete Actor'))),
      )
  }

  deleteMovie889(id: number) {
    const url = `${API_URL}/movie/deleteMovieById889?id=${id}`;
    return this.http.delete(url, this.options)
      .pipe(
        catchError(err => throwError(new Error('Delete Movie'))),
      )
  }
}
