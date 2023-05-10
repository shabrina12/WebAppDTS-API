using System.ComponentModel.DataAnnotations;
using Client.Models;
using System.Reflection;

namespace Client.ViewModels
{
    public class RegisterVM
    {
        [MaxLength(5), MinLength(5, ErrorMessage = "{0} harus terdapat minimal {1} kombinasi Huruf Dan/Atau Angka")]
        public string NIK { get; set; } = null!;
        public string FirstName { get; set; } = null!;
        public string? LastName { get; set; }
        public DateTime BirthDate { get; set; }
        public GenderEnum Gender { get; set; }
        public DateTime HiringDate { get; set; }
        [EmailAddress]
        public string Email { get; set; } = null!;
        [Phone]
        public string PhoneNumber { get; set; } = null!;
        public string Major { get; set; } = null!;
        public string Degree { get; set; } = null!;
        [Range(0, 4, ErrorMessage = "{0} Gk Boleh Kurang Dari {1} dan Lebih dari {2}")]
        public string GPA { get; set; } = null!;
        public string UniversityName { get; set; } = null!;
        [DataType(DataType.Password)]
        public string Password { get; set; } = null!;
        [DataType(DataType.Password)]
        [Compare(nameof(Password), ErrorMessage = "Password Harus Sama BosQ")]
        public string ConfirmPassword { get; set; } = null!;
    }
}
