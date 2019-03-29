using BookStore.models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace BookStore.Repositories
{
    public interface IBookRepository
    {
        Book GetById(int id);
        IEnumerable<Book> GetAll();
        void Create(Book book);
    }
}
