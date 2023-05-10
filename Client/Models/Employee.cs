using System;
using System.Collections.Generic;
using System.Text.Json.Serialization;

namespace Client.Models;

public partial class Employee
{
    public string NIK { get; set; } = null!;
    public string FirstName { get; set; } = null!;
    public string? LastName { get; set; }
    public DateTime BirthDate { get; set; }
    public GenderEnum Gender { get; set; }
    public DateTime HiringDate { get; set; } = DateTime.Now;
    public string Email { get; set; } = null!;
    public string? PhoneNumber { get; set; }
    public bool IsActive { get; set; }
}
public enum GenderEnum
{
    Female, Male
}