using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace BookStore.models
{
    public class Book
    {
        public int BookId { get; set; }
        public string Author { get; set; }
        public string ImagePath { get; set; }
    }
}
