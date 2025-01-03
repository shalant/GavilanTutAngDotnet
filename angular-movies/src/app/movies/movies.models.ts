import { ActorsAutoCompleteDTO } from "../actors/actors.models";
import { GenreDTO } from "../genres/genres.models";
import { TheaterDTO } from "../theaters/theaters.models";

export interface MovieDTO {
    id: number;
    title: string;
    releaseDate: Date;
    trailer: string;
    poster?: string;
    genresIds?: number[];

}

export interface MovieCreationDTO {
    title: string;
    releaseDate: Date;
    trailer: string;
    poster?: File;
    genresIds?: number[];
    theatersIds?: number[];
    actors?: ActorsAutoCompleteDTO[];
}

export interface MoviesPostGetDTO {
    genres: GenreDTO[];
    theaters: TheaterDTO[];
}