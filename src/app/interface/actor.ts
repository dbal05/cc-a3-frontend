import { Movie } from './movie';

export interface Actor {
    id: number,
    firstname: string,
    lastname: string,
    gender: string,
    age: number,
    movies: Movie[],
    createdAt: number,
    updatedAt: number,
}