using System.Collections.Generic;
using System.Linq;

using BookStore.Models;

namespace BookStore.Repositories
{
    public class CategoryRepository : ICategoryRepository
    {
        StoreContext db;
        public CategoryRepository(StoreContext db)
        {
            this.db = db;
        }
        public Category GetById(int id)
        {
            return db.Categories.Single(Category => Category.CategoryId == id);
        }
        public IEnumerable<Category> GetAll()
        {
            return db.Categories.ToList();
        } 
        public void Create(Category category)
        {
            db.Categories.Add(category);
            db.SaveChanges();
        }
        public void Delete(Category category)
        {
            db.Categories.Remove(category);
            db.SaveChanges();
        }         
        public void Update(Category category)
        {
            db.Categories.Update(category);
            db.SaveChanges();
        }
    }
}

