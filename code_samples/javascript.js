function greet(name) {
	const greeting = `Hello, ${name}!`;
	console.log(greeting);
}

class Person {
	constructor(name, age) {
		this.name = name;
		this.age = age;
	}

	introduce() {
		console.log(`Hi, I'm ${this.name} and I'm ${this.age} years old.`);
	}
}

const john = new Person("John", 30);
john.introduce();
greet("World");
