using System;
using System.ComponentModel.DataAnnotations;

namespace Casino.Models
{
    public class Bet
    {
        [Key]
        public int BetId{get;set;}
        public int BetAmount{get;set;}
        public DateTime CreatedAt {get;set;} = DateTime.Now;
        public DateTime UpdatedAt {get;set;} = DateTime.Now;

        public int AccountId{get;set;}
        public Account Account{get;set;}
        


    }
}