﻿using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore.Metadata.Internal;
using System.Data;
using System.Net;
using WebAppDTS_API.Base;
using WebAppDTS_API.Models;
using WebAppDTS_API.Repository;
using WebAppDTS_API.Repository.Contracts;

namespace WebAppDTS_API.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    //[Authorize(Policy = "Create")]
    public class EducationController : BaseController<IEducationRepository, Education, int>
    {
        public EducationController(IEducationRepository repository) : base(repository) {}

        [Authorize(Roles = "admin")]
        [HttpPost]
        public override async Task<IActionResult> InsertAsync(Education education)
        {
            return await base.InsertAsync(education);
        }

        [Authorize(Roles = "admin")]
        [HttpPut("{id}")]
        public override async Task<IActionResult> UpdateAsync(Education education, int id)
        {
            return await base.UpdateAsync(education, id);
        }

        [Authorize(Roles = "admin")]
        [HttpDelete("{id}")]
        public async Task<IActionResult> Delete(int id)
        {
            return await base.Delete(id);
        }
    }
}
