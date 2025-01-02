using MoviesApi.DTOs;
using NetTopologySuite.Geometries;
using System.ComponentModel.DataAnnotations;

namespace MoviesApi.Entities
{
    public class Theater: IId
    {
        public int Id { get; set; }

        [Required]
        [StringLength(75)]
        public required string Name { get; set; }

        public Point Location { get; set; }
    }
}
