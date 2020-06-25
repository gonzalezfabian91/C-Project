using System.Collections.Generic;
using Casino.Models;

namespace C_Project.Models
{
    
    public class ViewModel
    {
        public User User {get;set;}
        public List<User> Users{get;set;}
        public Account Account{get;set;}
        public List<Account> Accounts {get;set;}

        public Bet Bet {get;set;}
        public List<Bet> Bets{get;set;}

    }
}