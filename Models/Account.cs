using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using Casino.Models;

namespace Casino.Models
{
    public class Account
    {
        [Key]
        public int AccountId{get;set;}
        public double Amount{get; set;} =1000;
        
        public DateTime CreatedAt {get;set;} = DateTime.Now;
        public DateTime UpdatedAt {get;set;} = DateTime.Now;
        public int UserId{get; set;}
        public User User{get;set;}

        public List<Bet> Bets{get;set;}

    }
}