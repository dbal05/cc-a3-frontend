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

  // fetchActorData() {
  //   this.sailsService.getActors()
  //     .subscribe(res => this.actors = res.actors);
  // }

  getActorByAge() {
    this.maxAge = this.minAge;
    this.sailsService.getActorByAge(this.minAge, this.maxAge)
      .subscribe((res) => {this.actors = res.actor; this.actorTableFlag = true; });
    this.maxAge = null;
  }

  getActorByAgeAdv() {
    this.sailsService.getActorByAge(this.minAge, this.maxAge)
      .subscribe((res) => {this.actors = res.actor; this.actorTableFlag = true; });
  }

  getActorByName() {
    this.sailsService.getActorByName(this.firstname, this.lastname)
      .subscribe((res) => {this.actors = res.actor; this.actorTableFlag = true; });
  }

  onActorDelete(id: number) {
    this.sailsService.deleteActor(id).subscribe(() => this.actors = this.actors.filter((actor) => { return actor.id != id }));
  }

  getMovieByYear() {

  }

  getMovieByYearAdv() {

  }

  getMovieByTitle() {

  }

  getMovieByLanguage() {

  }

  onMovieDelete(id: number) {
    this.sailsService.deleteMovie(id).subscribe(() => this.movies = this.movies.filter((movie) => { return movie.id != id }));
  }
}
