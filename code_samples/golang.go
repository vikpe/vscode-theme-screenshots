package main

import (
    "fmt"
)

// Greet function that takes a name and returns a greeting message
func Greet(name string) string {
    return fmt.Sprintf("Hello, %s!", name)
}

// Person struct with Name and Age fields
type Person struct {
    Name string
    Age  int
}

// Introduce method for the Person struct
func (p Person) Introduce() {
    fmt.Printf("Hi, I'm %s and I'm %d years old.\n", p.Name, p.Age)
}

func main() {
    // Create a new Person instance
    john := Person{Name: "John", Age: 30}
    john.Introduce()

    // Call the Greet function
    greeting := Greet("World")
    fmt.Println(greeting)
}