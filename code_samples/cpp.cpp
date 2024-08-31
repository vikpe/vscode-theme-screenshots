#include <iostream>
#include <string>

// Class to represent a person
class Person {
public:
    // Constructor
    Person(const std::string& name, int age) : name(name), age(age) {}

    // Method to introduce the person
    void introduce() const {
        std::cout << "Hi, I'm " << name << " and I'm " << age << " years old." << std::endl;
    }

private:
    std::string name;
    int age;
};

// Function to greet a user
void greet(const std::string& name) {
    std::cout << "Hello, " << name << "!" << std::endl;
}

int main() {
    // Create a Person instance
    Person john("John", 30);
    john.introduce();

    // Greet the world
    greet("World");

    return 0;
}
