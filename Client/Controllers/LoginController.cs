using Microsoft.AspNetCore.Mvc;
using System;
using System.Diagnostics;

namespace Client.Controllers
{
    public class LoginController: Controller
    {
        public IActionResult Index()
        {
            return View();
        }
    }
}