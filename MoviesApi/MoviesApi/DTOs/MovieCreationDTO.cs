using Microsoft.EntityFrameworkCore;
using System.ComponentModel.DataAnnotations;

namespace MoviesApi.DTOs
{
    public class MovieCreationDTO
    {
        [Required]
        [StringLength(300)]
        public required string Title { get; set; }
        public string? Trailer { get; set; }
        public DateTime ReleaseDate { get; set; }
        public IFormFile? Poster { get; set; }
    }
}
