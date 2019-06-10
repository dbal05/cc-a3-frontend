import { Actor } from './actor';

export interface Movie {
    id: number,
    title: string,
    year: number,
    runtime: number,
    language: string,
    release_country: string,
    actors: Actor[],
    createdAt: number,
    updatedAt: number,
}