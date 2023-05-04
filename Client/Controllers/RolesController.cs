using Microsoft.AspNetCore.Mvc;
using System;
using System.Diagnostics;

namespace Client.Controllers
{
    public class RolesController : Controller
    {
        public IActionResult Index()
        {
            return View();
        }

        //[HttpPost]
        //public IActionResult Index(UniversityVM model)
        //{
        //    return View(model);
        //}
    }
}