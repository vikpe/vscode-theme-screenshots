def greet(name):
    greeting = f"Hello, {name}!"
    print(greeting)

class Person:
    def __init__(self, name, age):
        self.name = name
        self.age = age

    def introduce(self):
        print(f"Hi, I'm {self.name} and I'm {self.age} years old.")

john = Person('John', 30)
john.introduce()
greet('World')
