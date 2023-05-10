using System.ComponentModel.DataAnnotations;

namespace Client.Models
{
    public class University
    {
        public int Id { get; set; }
        [Required]
        public string Name { get; set; } = null!;

    }
}
