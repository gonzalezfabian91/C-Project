using System;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using C_Project.Models;

namespace Casino.Models
{
    public class User
    {
        [Key]
        public int UserId{get;set;}

        [Required]
        [MinLength(2, ErrorMessage = "First Name must be at least 2 Characters")]
        [Display(Name = "First Name")]
        public string FirstName {get;set;}

        [Required]
        [MinLength(2, ErrorMessage = "Last Name must be at least 2 Characters")]
        [Display(Name = "Last Name")]
        public string LastName {get;set;}

        [Required]
        [EmailAddress]
        [Display(Name = "Email")]
        public string Email {get;set;}

        [Required]
        [MinLength(8, ErrorMessage = "Password must be at least 8 Characters")]
        [DataType(DataType.Password)]
        [Display(Name = "Password")]
        public string Password {get;set;}

        [NotMapped]
        [DataType(DataType.Password)]
        [Compare("Password", ErrorMessage = "Passwords do not match")]
        [Display(Name = "Confirm Password")]
        public string ConfirmPassword {get;set;}

        public int Balance {get;set;} = 1000;

        public DateTime CreatedAt {get;set;} = DateTime.Now;
        public DateTime UpdatedAt {get;set;} = DateTime.Now;

        
    }
}

        
