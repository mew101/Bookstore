using System;
using System.Collections.Generic;
using Microsoft.AspNetCore.Mvc;

using BookStore.Models;
using BookStore.Repositories;
using System.Linq;

namespace BookStore.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class CategoryController : ControllerBase
    {
        ICategoryRepository repo;
        public CategoryController(ICategoryRepository repo)
        {
            this.repo = repo;
        }
        public ActionResult<IEnumerable<Category>> Get()
        {
            var model = repo.GetAll().ToArray();
            return model;
        }

        // GET api/values/5
        [HttpGet("{id}")]
        public ActionResult<string> Get(int id)
        {
            return "value";
        }

        // POST api/values
        [HttpPost]
        public void Post([FromBody] string value)
        {
        }

        // PUT api/values/5
        [HttpPut("{id}")]
        public void Put(int id, [FromBody] string value)
        {
        }

        // DELETE api/values/5
        [HttpDelete("{id}")]
        public void Delete(int id)
        {
        }
    }

}