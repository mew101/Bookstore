using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using BookStore.Models;

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
            return db.Books.Single(book => book.BookId == id);
        }
        public IEnumerable<Book> GetAll()
        {
            return db.Books.ToList();
        }
        public void Create(Book book)
        {
            db.Books.Add(book);
            db.SaveChanges();
        }
        public void Delete(Book book)
        {
            db.Books.Remove(book);
        }    
        public void Update(Book book)
        {
            db.Books.Update(book);
            db.SaveChanges();
        }
    }
}
