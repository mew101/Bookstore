using System;
using System.Collections.Generic;
using System.Text;

using BookStore.Models;
using BookStore.Controllers;
using BookStore.Repositories;

using Xunit;
using NSubstitute;

namespace BookStore.Tests
{
   public class BookControllerTests
    {
        IBookRepository repo;
        BookController underTest;
        public BookControllerTests()
        {
            repo = Substitute.For<IBookRepository>();
            underTest = new BookController(repo);
        }
        [Fact]
        public void GET_Returns_List_of_Books()
        {
           
        }
    }
}
