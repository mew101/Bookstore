using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using BookStore.Models;
using BookStore.Repositories;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace BookStore.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class BookController : ControllerBase
    {

        IBookRepository repo;
        public BookController(IBookRepository repo)
        {
            this.repo = repo;
        }

        public ActionResult<IEnumerable<Book>> Get()
        {
            var model = repo.GetAll().ToArray();
            return model;
        }

        // GET api/values/5
        [HttpGet("{id}")]
        public ActionResult<Book> Get(int id)
        {
            var model = repo.GetById(id);
            return model;
        }

        // POST api/values
        [HttpPost]
        public void Post([FromBody] Book book)
        {
            repo.Create(book);
        }

        // PUT api/values/5
        [HttpPut("{id}")]
        public void Put(int id, [FromBody] Book book)
        {
            book = repo.GetById(id);
            repo.Update(book);
        }

        // DELETE api/values/5
        [HttpDelete("{id}")]
        public void Delete(int id)
        {
            Book model = repo.GetById(id);
            repo.Delete(model);
        }
    }
}