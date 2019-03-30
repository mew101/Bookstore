using System;
using System.Collections.Generic;
using System.Text;

using BookStore.Models;
using BookStore.Controllers;
using BookStore.Repositories;

using Xunit;
using NSubstitute;
using System.Linq;

namespace book_store.Tests
{
  public class CategoryControllerTests
    {
        ICategoryRepository repo;
        CategoryController underTest;
        public CategoryControllerTests()
        {
            repo = Substitute.For<ICategoryRepository>();
            underTest = new CategoryController(repo);
        }
        [Fact]
        public void GET_Returns_List_of_Categories()
        {
            var expectedmodel = new List<Category>() { new Category(), new Category() };
            repo.GetAll().Returns(expectedmodel);

            var result = underTest.Get();

            Assert.Equal(2, result.Value.Count());
        }
    }
}

