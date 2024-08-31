<?php

function greet(string $name): void {
    $greeting = "Hello, $name!";
    echo $greeting . PHP_EOL;
}

class Person {
    private string $name;
    private int $age;

    public function __construct(string $name, int $age) {
        $this->name = $name;
        $this->age = $age;
    }

    public function introduce(): void {
        echo "Hi, I'm {$this->name} and I'm {$this->age} years old." . PHP_EOL;
    }
}

$john = new Person("John", 30);
$john->introduce();
greet("World");

?>