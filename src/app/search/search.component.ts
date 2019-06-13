import { Component, OnInit } from '@angular/core';
import { SailsService } from './../sails.service';
import { Actor } from '../interface/actor';
import { Movie } from './../interface/movie';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  actors: Actor[];
  movies: Movie[];
  actorTableFlag: boolean = false;
  movieTableFlag: boolean = false;
  advAgeFlag: boolean = false;
  advYearFlag: boolean = false;

  firstname: string;
  lastname: string;
  minAge: number;
  maxAge: number;

  title:string;
  minYear:number;
  maxYear:number;
  language:string;

  constructor(private sailsService: SailsService) { }

  ngOnInit() {
  }

  getActorByAge889() {
    this.maxAge = this.minAge;
    this.sailsService.getActorByAge889(this.minAge, this.maxAge)
      .subscribe((res) => {this.actors = res.actor; this.actorTableFlag = true; });
    this.maxAge = null;
  }

  getActorByAgeAdv889() {
    this.sailsService.getActorByAge889(this.minAge, this.maxAge)
      .subscribe((res) => {this.actors = res.actor; this.actorTableFlag = true; });
  }

  getActorByName889() {
    this.sailsService.getActorByName889(this.firstname, this.lastname)
      .subscribe((res) => {this.actors = res.actor; this.actorTableFlag = true; });
  }

  onActorDelete889(id: number) {
    this.sailsService.deleteActor889(id).subscribe(() => this.actors = this.actors.filter((actor) => { return actor.id != id }));
  }

  getMovieByYear889() {
    this.maxYear = this.minYear;
    this.sailsService.getMovieByYear889(this.minYear, this.maxYear)
      .subscribe((res) => {this.movies = res.movies; this.movieTableFlag = true; });
    this.maxYear = null;
  }

  getMovieByYearAdv889() {
    this.sailsService.getMovieByYear889(this.minYear, this.maxYear)
      .subscribe((res) => {this.movies = res.movies; this.movieTableFlag = true; });
  }

  getMovieByTitle889() {
    this.sailsService.getMovieByTitle889(this.title) 
      .subscribe((res) => { this.movies = res.movie; this.movieTableFlag = true; })
  }

  getMovieByLanguage889() {
    this.sailsService.getMovieByLanguage889(this.language)
      .subscribe((res) => { this.movies = res.movies; this.movieTableFlag = true; })
  }

  onMovieDelete889(id: number) {
    this.sailsService.deleteMovie889(id).subscribe(() => this.movies = this.movies.filter((movie) => { return movie.id != id }));
  }
}
