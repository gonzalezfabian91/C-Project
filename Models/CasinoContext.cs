using Microsoft.EntityFrameworkCore;

namespace Casino.Models
{
    public class CasinoContext : DbContext
    {
        public CasinoContext(DbContextOptions options) : base(options) {}

        public DbSet<User> Users {get;set;}
    }
}