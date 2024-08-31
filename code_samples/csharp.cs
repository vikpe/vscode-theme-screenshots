using System;

namespace SampleApp
{
    // Greet method that takes a name and returns a greeting message
    public static class Greeter
    {
        public static string Greet(string name)
        {
            return $"Hello, {name}!";
        }
    }

    // Person class with Name and Age properties
    public class Person
    {
        public string Name { get; set; }
        public int Age { get; set; }

        public Person(string name, int age)
        {
            Name = name;
            Age = age;
        }

        // Introduce method for the Person class
        public void Introduce()
        {
            Console.WriteLine($"Hi, I'm {Name} and I'm {Age} years old.");
        }
    }

    class Program
    {
        static void Main(string[] args)
        {
            // Create a new Person instance
            Person john = new Person("John", 30);
            john.Introduce();

            // Call the Greet method
            string greeting = Greeter.Greet("World");
            Console.WriteLine(greeting);
        }
    }
}