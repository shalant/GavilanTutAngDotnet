﻿using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.OutputCaching;
using MoviesApi.Entities;

namespace MoviesApi.Controllers
{
    [Route("api/genres")]
    [ApiController]
    public class GenresController : ControllerBase
    {
        private readonly IRepository repository;

        public GenresController(IRepository repository)
        {
            this.repository = repository;
        }

        [HttpGet]
        public List<Genre> Get()
        {
            var genres = repository.GetAllGenres();
            return genres;
        }

        [HttpGet("{id:int}")]
        [OutputCache]
        public async Task<ActionResult<Genre>> Get(int id)
        {
            var genre = await repository.GetById(id);
            if (genre == null)
            {
                return NotFound();
            }
            return genre;
        }

        [HttpGet("{name}")] // api/genres/comedy?id=7
        [OutputCache]
        public async Task<ActionResult<Genre>> Get(string name, [FromQuery] int id)
        {
            return new Genre { Id = id, Name = name };
        }

        [HttpPost]
        public ActionResult<Genre> Post([FromBody] Genre genre)
        {
            var genreWithSameNameExists = repository.Exists(genre.Name);

            if (genreWithSameNameExists)
            {
                return BadRequest($"There's already a genre with the name {genre.Name}");
            }

            genre.Id = 3;
            return genre;
        }

        [HttpPut]
        public void Put() { }

        [HttpDelete]
        public void Delete() { }
    }
}
