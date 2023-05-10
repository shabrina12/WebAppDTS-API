using System.ComponentModel.DataAnnotations;
using WebAppDTS_API.Models;
using System.Reflection;

namespace WebAppDTS_API.ViewModels
{
    public class RegisterVM
    {
        // NIK
        public string NIK { get; set; } = null!;

        // First Name
        [Display(Name = "First Name")]
        public string FirstName { get; set; } = null!;

        // Last Name
        [Display(Name = "Last Name")]
        public string? LastName { get; set; }

        // Birth Date
        [Display(Name = "Birth Date")]
        public DateTime BirthDate { get; set; }

        // Gender
        public GenderEnum Gender { get; set; }

        // Email
        [EmailAddress]
        public string Email { get; set; } = null!;

        // Phone
        [Display(Name = "Phone Number"), Phone]
        public string PhoneNumber { get; set; } = null!;

        // Major
        public string Major { get; set; } = null!;

        // Degree
        public string Degree { get; set; } = null!;

        // GPA
        [Range(0, 4, ErrorMessage = "The {0} Tidak boleh kurang {1} dan lebih dari {2}")]
        public decimal GPA { get; set; }

        // University Name
        [Display(Name = "University Name")]
        public string UniversityName { get; set; } = null!;

        // Password
        [DataType(DataType.Password)]
        public string Password { get; set; } = null!;

        // Confirm Password
        [DataType(DataType.Password), Display(Name = "Confirm Password")]
        [Compare("Password", ErrorMessage = "Password and confirmation password do not match.")]
        public string ConfirmPassword { get; set; } = null!;
    }
}
