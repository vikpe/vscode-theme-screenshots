interface IPerson {
    name: string;
    age: number;
    introduce(): void;
}

function greet(name: string): void {
	const greeting: string = `Hello, ${name}!`;
	console.log(greeting);
}

class Person implements IPerson {
	name: string;
	age: number;

	constructor(name: string, age: number) {
		this.name = name;
		this.age = age;
	}

	introduce(): void {
		console.log(`Hi, I'm ${this.name} and I'm ${this.age} years old.`);
	}
}

const john: Person = new Person("John", 30);
john.introduce();
greet("World");
