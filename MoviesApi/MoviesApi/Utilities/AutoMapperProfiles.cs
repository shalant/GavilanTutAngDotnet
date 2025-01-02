using AutoMapper;
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
        }

        private void ConfigureGenres()
        {
            CreateMap<GenreCreationDTO, Genre>();
            CreateMap<Genre, GenreDTO>();
        }
    }
}
