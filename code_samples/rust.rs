pub mod hello;

// Greet function that takes a name and returns a greeting message
fn greet(name: &str) -> String {
    format!("Hello, {}!", name)
}

// Person struct with name and age fields
#[derive(Debug, Clone, PartialEq)]
pub struct Person {
    name: String,
    age: u32,
}

impl Person {
    // Method to introduce the person
    fn introduce(&self) {
        println!("Hi, I'm {} and I'm {} years old.", self.name, self.age);
    }
}

pub fn main() {
    // Create a new Person instance
    let john = Person {
        name: String::from("John"),
        age: 30,
    };
    john.introduce();

    // Call the greet function
    let greeting = greet("World");
    println!("{}", greeting);
}
