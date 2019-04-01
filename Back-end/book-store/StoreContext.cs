using BookStore.Models;
using Microsoft.EntityFrameworkCore;

namespace BookStore
{
    public class StoreContext : DbContext
    {
        public DbSet<Category> Categories { get; set; }
        public DbSet<Book> Books { get; set; }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<Category>().HasData(
                new Category() { CategoryId = 1, CategoryName = "Romantic" },
                new Category() { CategoryId = 2, CategoryName = "Kids" },
                new Category() { CategoryId = 3, CategoryName = "Programming " }
            );
            modelBuilder.Entity<Book>().HasData(
            new Book() {
                 BookId = 1,
                 Name = "Fifty Shades of Grey",
                 DetailDescription = "When college senior Anastasia Steele (Dakota Johnson) steps in for her sick roommate to interview prominent businessman Christian Grey (Jamie Dornan) for their campus paper, little does she realize the path her life will take. Christian, ",
                 Author= " James. Erika Leonard",
                 CategoryId = 1
            },             
            new Book()
            {
                 BookId = 2,
                 Name = "Dog Man",
                 DetailDescription = "A Tale of Two Kitties is the story of Nick's unlikely trajectory from cat hater to reluctant cat owner and finally to cat lover, via a global investigation of the weirdly fascinating domestic cat ",
                 Author = " Nigel Flanagan",
                 CategoryId = 2
            },
             new Book() {
                 BookId = 3,
                 Name = "C# 7.0 in a Nutshell",
                 DetailDescription = "Organized around concepts and use cases, this updated edition provides intermediate and advanced programmers with a concise map of C# and .NET knowledge. Dive in and discover why this Nutshell guide is considered the definitive reference on C#. ",
                 Author = " Ben Albahari",
                 CategoryId = 3
             },
              new Book()
              {
                  BookId = 4,
                  Name = "Goodnight Moon",
                  DetailDescription = "In a great green room, tucked away in bed, is a little bunny. Goodnight room, goodnight moon. And to all the familiar things in the softly lit room—to the picture of the three little bears sitting on chairs, to the clocks and his socks, to the mittens and the kittens, to everything one by one—the little bunny says goodnight.",
                  Author = " Margaret Wise Brown",
                  CategoryId = 2
              },
               new Book()
               {
                   BookId = 5,
                   Name = "HTML and CSS: Design and Build Websites",
                   DetailDescription = "Every day, more and more people want to learn some HTML and CSS. Joining the professional web designers and programmers are new audiences who need to know a little bit of code at work (update a content management system or e-commerce store) and those who want to make their personal blogs more attractive. Many books teaching HTML and CSS are dry and only written for those who want to become programmers, which is why this book takes an entirely new approach.",
                   Author = " Jon Duckett",
                   CategoryId = 3
               }

              );
            base.OnModelCreating(modelBuilder);
        }
        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            string connectionString = "Server=(localdb)\\mssqllocaldb;Database=BookStore;Trusted_Connection=True;";

            optionsBuilder.UseSqlServer(connectionString)
                .UseLazyLoadingProxies();

            base.OnConfiguring(optionsBuilder);
        }

    }
}