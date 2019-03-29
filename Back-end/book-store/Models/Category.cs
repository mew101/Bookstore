using BookStore.models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace BookStore.Models
{
    public class Category
    { 
      public int CategoryId { get; set; }
      public string CategoryName { get; set; }

      public virtual IEnumerable<Book> Books { get; set; }
    }
}
