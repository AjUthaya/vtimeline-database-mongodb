using System;
using System.IO;
using System.Text;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.Configuration.FileExtensions;
using Microsoft.Extensions.Configuration.Json;
using Microsoft.EntityFrameworkCore;

namespace Database
{
    class Program
    {
        public static IConfigurationRoot Configuration;

        static void Main(string[] args)
        {

            var builder = new ConfigurationBuilder()
                           .SetBasePath(Directory.GetCurrentDirectory())
                           .AddJsonFile("appsettings.json", optional: true, reloadOnChange: true)
                           .AddEnvironmentVariables();

            IConfigurationRoot Configuration = builder.Build();
            var mySettingsConfig = new MySettingsConfig();
            Configuration.GetSection("MySettings").Bind(mySettingsConfig);

            Console.WriteLine("Setting from appsettings.json: " + mySettingsConfig.AccountName);
            Console.WriteLine("Setting from secrets.json: " + mySettingsConfig.ApiSecret);
            Console.WriteLine("Connection string: " + Configuration.GetConnectionString("DefaultConnection"));

            Console.ReadKey();

            //InsertData();
            //PrintData();

        }

        public class MySettingsConfig
        {
            public string AccountName { get; set; }
            public string ApiKey { get; set; }
            public string ApiSecret { get; set; }
        }

        private static void InsertData()
        {
            using (var context = new LibraryContext())
            {
                // Creates the database if not exists
                context.Database.EnsureCreated();

                // Adds a publisher
                var publisher = new Publisher
                {
                    Name = "Mariner Books"
                };
                context.Publisher.Add(publisher);

                // Adds some books
                context.Book.Add(new Book
                {
                    ISBN = "978-0544003415",
                    Title = "The Lord of the Rings",
                    Author = "J.R.R. Tolkien",
                    Language = "English",
                    Pages = 1216,
                    Publisher = publisher
                });
                context.Book.Add(new Book
                {
                    ISBN = "978-0547247762",
                    Title = "The Sealed Letter",
                    Author = "Emma Donoghue",
                    Language = "English",
                    Pages = 416,
                    Publisher = publisher
                });

                // Saves changes
                context.SaveChanges();
            }
        }

        private static void PrintData()
        {
            // Gets and prints all books in database
            using (var context = new LibraryContext())
            {
                var books = context.Book
                  .Include(p => p.Publisher);
                foreach (var book in books)
                {
                    var data = new StringBuilder();
                    data.AppendLine($"ISBN: {book.ISBN}");
                    data.AppendLine($"Title: {book.Title}");
                    data.AppendLine($"Publisher: {book.Publisher.Name}");
                    Console.WriteLine(data.ToString());
                }
            }
        }
    }
}