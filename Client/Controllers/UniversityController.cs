using Client.Models;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Diagnostics;

namespace Client.Controllers
{
    public class UniversityController: Controller
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