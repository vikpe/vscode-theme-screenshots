require 'json'

def greet(name)
    greeting = "Hello, #{name}!"
    puts greeting
  end
  
  class Person
    attr_accessor :name, :age
  
    def initialize(name, age)
      @name = name
      @age = age
    end
  
    def introduce
      puts "Hi, I'm #{@name} and I'm #{@age} years old."
    end
  end
  
  john = Person.new("John", 30)
  john.introduce
  greet("World")