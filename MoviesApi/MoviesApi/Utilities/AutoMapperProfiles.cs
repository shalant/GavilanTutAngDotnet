﻿using AutoMapper;
using MoviesApi.DTOs;
using MoviesApi.Entities;
using NetTopologySuite.Geometries;

namespace MoviesApi.Utilities
{
    public class AutoMapperProfiles : Profile
    {
        public AutoMapperProfiles(GeometryFactory geometryFactory)
        {
            ConfigureGenres();
            ConfigureActors();
            ConfigureTheaters(geometryFactory);
            ConfigureMovies();
        }

        private void ConfigureMovies()
        {
            CreateMap<MovieCreationDTO, Movie>()
                .ForMember(ent => ent.Poster, options => options.Ignore())
                .ForMember(ent => ent.MoviesGenres, dto =>
                    dto.MapFrom(p => p.GenresIds!.Select(id => new MovieGenre {  GenreId = id })))
                .ForMember(ent => ent.MoviesTheaters, dto =>
                    dto.MapFrom(p => p.TheatersIds!.Select(id => new MovieTheater { TheaterId = id })))
                .ForMember(ent => ent.MoviesActors, dto =>
                    dto.MapFrom(p => p.Actors!.Select(actor => 
                    new MovieActor { ActorId = actor.Id, Character = actor.Character })));

            CreateMap<Movie, MovieDTO>();
        }

        private void ConfigureTheaters(GeometryFactory geometryFactory)
        {
            CreateMap<Theater, TheaterDTO>()
                .ForMember(x => x.Latitude, x => x.MapFrom(p => p.Location.Y))
                .ForMember(x => x.Longitude, x => x.MapFrom(p => p.Location.X));
            CreateMap<TheaterCreationDTO, Theater>()
                .ForMember(entity => entity.Location, dto => dto.MapFrom(p =>
                    geometryFactory.CreatePoint(new Coordinate(p.Longitude, p.Latitude
                ))));
        }

        private void ConfigureActors()
        {
            CreateMap<ActorCreationDTO, Actor>()
                .ForMember(x => x.Picture, options => options.Ignore());
            CreateMap<Actor, ActorDTO>();
            CreateMap<Actor, MovieActorDTO>();
        }

        private void ConfigureGenres()
        {
            CreateMap<GenreCreationDTO, Genre>();
            CreateMap<Genre, GenreDTO>();
        }
    }
}
