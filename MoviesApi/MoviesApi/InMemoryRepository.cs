using MoviesApi.Entities;

namespace MoviesApi
{
    public class InMemoryRepository : IRepository
    {
        private List<Genre> _genres;

        public InMemoryRepository()
        {
            _genres = new List<Genre>
            {
                new Genre{Id=1, Name="Comedy"},
                new Genre{Id=2, Name="Action"}
            };
        }

        public List<Genre> GetAllGenres()
        {
            return _genres; 
        }

        public async Task<Genre?> GetById(int id)
        {
            await Task.Delay(TimeSpan.FromSeconds(3));
            return _genres.FirstOrDefault(x => x.Id == id);
        }

        public bool Exists(string name)
        {
            return _genres.Any(x => x.Name == name);
        }
    }
}
