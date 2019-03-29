using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
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
            return db.Categorys.Single(Category => Category.CategoryId == id);

        }
        public IEnumerable<Category> GetAll()
        {
            throw new NotImplementedException();
        }

        public void Create(Category category)
        {
            db.Categorys.Add(category);
            db.SaveChanges();
        }
    }
}

