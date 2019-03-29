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
      public string Type { get; set; }
      public string DetailDescription { get; set; }

      public virtual IEnumerable<Book> Books { get; set; }
    }
}
