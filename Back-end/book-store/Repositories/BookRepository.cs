using BookStore.models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace BookStore.Repositories
{
    public class BookRepository : IBookRepository
    {
        StoreContext db;

        public BookRepository(StoreContext db)
        {
            this.db = db;
        }
        public Book GetById(int id)
        {
            return db.Book.Single(Book => Book.BookId == id);

        }
        public IEnumerable<Book> GetAll()
        {
           return db.Book.ToList();
        }
        public void Create(Book book)
        {
            db.Book.Add(book);
            db.SaveChanges();
        }
    }
}
