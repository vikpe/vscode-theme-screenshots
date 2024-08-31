#include <stdio.h>

// Function to greet a user
void greet(const char *name) {
    printf("Hello, %s!\n", name);
}

// Structure to represent a person
struct Person {
    char name[50];
    int age;
};

// Function to introduce a person
void introduce(struct Person person) {
    printf("Hi, I'm %s and I'm %d years old.\n", person.name, person.age);
}

int main() {
    // Create a Person instance
    struct Person john;
    snprintf(john.name, sizeof(john.name), "John");
    john.age = 30;

    // Introduce the person
    introduce(john);

    // Greet the world
    greet("World");

    return 0;
}
