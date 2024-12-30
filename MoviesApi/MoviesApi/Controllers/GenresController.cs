using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.OutputCaching;
using MoviesApi.Entities;

namespace MoviesApi.Controllers
{
    [Route("api/genres")]
    public class GenresController : ControllerBase
    {
        [HttpGet]
        public List<Genre> Get()
        {
            var repository = new InMemoryRepository();
            var genres = repository.GetAllGenres();
            return genres;
        }

        [HttpGet("{id:int}")]
        [OutputCache]
        public async Task<ActionResult<Genre>> Get(int id)
        {
            var repository = new InMemoryRepository();
            var genre = await repository.GetById(id);
            if (genre == null)
            {
                return NotFound();
            }
            return genre;
        }

        [HttpGet("{name}")]
        [OutputCache]
        public async Task<ActionResult<Genre>> Get(string name)
        {
            return new Genre { Name = name };

        [HttpPost]
        public void Post()
        {

        }

        [HttpPut]
        public void Put() { }

        [HttpDelete]
        public void Delete() { }
    }
}
