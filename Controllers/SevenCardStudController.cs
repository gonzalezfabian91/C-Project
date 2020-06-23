using Casino.Models;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace C_Project.Controllers
{
    public class SevenCardStudController :Controller
    {
        private CasinoContext db;

        private int? uid
        {
            get
            {
                return HttpContext.Session.GetInt32("UserId");
            }
        }

        private bool isLoggedIn
        {
            get
            {
                return uid != null;
            }
        }
        public SevenCardStudController(CasinoContext context)
        {
            db = context;
        }

        [HttpGet("SevenCardStud")]
        public IActionResult SevenCardStud()
        {
            return View("SevenCardStud");
        }
    }
}