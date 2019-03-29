using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using BookStore.Models;

namespace BookStore.Repositories
{
    public interface  ICategoryRepository
    {
        Category GetById(int id);
        IEnumerable<Category> GetAll();
        void Create(Category category);
    }
}
