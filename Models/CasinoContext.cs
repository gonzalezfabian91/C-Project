using C_Project.Models;
using Microsoft.EntityFrameworkCore;

namespace Casino.Models
{
    public class CasinoContext : DbContext
    {
        public CasinoContext(DbContextOptions options) : base(options) {}

        public DbSet<User> Users {get;set;}
        public DbSet<Account> Accounts {get;set;}
        public DbSet<Bet> Bets{get;set;}
    }
}