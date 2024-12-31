using MoviesApi.Validations;
using System.ComponentModel.DataAnnotations;

namespace MoviesApi.DTOs
{
    public class GenreDTO
    {
        public int Id { get; set; }
        public required string Name { get; set; }
    }
}
