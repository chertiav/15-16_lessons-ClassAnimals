'use strict';
class Animals {
	static type = "Animals";
	static isAnimals(obj) {
		return obj instanceof this;
	}
	constructor(age, name, weight, limbAmount) {
		this.age = age;
		this.name = name;
		this.weight = weight;
		this.limbAmount = limbAmount;
	}
	move() {
		return `I am moove`
	}
	say() {
		return `I am Animals`
	}
	eat() {
		return `I like eat food`
	}
}

class Mammals extends Animals {
	static type = "Mammals";
	static isMammals(obj) {
		return obj instanceof this;
	}
	move() {
		return super.move();
	}
	say() {
		return `I am ${Mammals.type}`
	}
	eat() {
		return super.eat();
	}
};

class Birds extends Animals {
	static type = "Birds";
	static maxAge = 50;
	static maxWeight = 175;
	static isBirds(obj) {
		return obj instanceof this;
	}
	move(...arg) {
		if (arg.length !== 0 ) return `I am a ${Birds.type}, my name is ${this.name} and I like ${arg}`;
		return `I am a ${Birds.type}, my name is ${this.name} and ${super.move()}`
	}
	say(...arg) {
		if (arg.length !== 0 ) return `I am a ${Birds.type}, say ${arg}`;
		return `I am a ${Birds.type}, and ${super.say()}`;
	}
	eat(...arg) {
		if (arg.length !== 0 ) return `I like eat ${arg}`;
		return super.eat();
	}
};

class Fish extends Animals {
	static type = "Fish";
	static maxAge = 30;
	static maxWeight = 200;
	static isFish(obj) {
		return obj instanceof this;
	}
	move(...arg) {
		if (arg.length !== 0 ) return `I am a ${Fish.type}, my name is ${this.name} and I like ${arg}`;
		return `I am a ${Fish.type}, my name is ${this.name} and ${super.move()}`
	}
	say(...arg) {
		if (arg.length !== 0 ) return `I am a ${Fish.type}, say ${arg}`;
		return `I am a ${Fish.type}, and ${super.say()}`;
	}
	eat(...arg) {
		if (arg.length !== 0 ) return `I like eat ${arg}`;
		return super.eat();
	}
};

class Predators extends Mammals {
	static type = "Predators";
	static isPredators(obj) {
		return obj instanceof this;
	}
	move() {
		return super.move();
	}
	say() {
		return `I am ${Predators.type}`
	}
	eat() {
		return super.eat();
	}
};

class Whales extends Mammals {
	static type = "Whales";
	static isWhales(obj) {
		return obj instanceof this;
	}
	move() {
		return super.move();
	}
	say() {
		return `I am ${Whales.type}`
	}
	eat() {
		return super.eat();
	}
};

class Primates extends Mammals {
	static type = "Primates";
	static isPrimates(obj) {
		return obj instanceof this;
	}
	move() {
		return super.move();
	}
	say() {
		return `I am ${Primates.type}`
	}
	eat() {
		return super.eat();
	}
};

class Dog extends Predators {
	static type = "Dog";
	static maxAge = 29;
	static maxWeight = 155.6;
	static isDog(obj) {
		return obj instanceof this;
	}
	move(...arg) {
		if (arg.length !== 0 ) return `I am a ${Dog.type}, my name is ${this.name} and I like ${arg}`;
		return `I am a ${Dog.type}, my name is ${this.name} and ${super.move()}`
	}
	say(...arg) {
		if (arg.length !== 0 ) return `I am a ${Dog.type}, say ${arg}`;
		return `I am a ${Dog.type}, and ${super.say()}`;
	}
	eat(...arg) {
		if (arg.length !== 0 ) return `I like eat ${arg}`;
		return super.eat();
	}
};

class Dolphin extends Whales {
	static type = "Dolphin";
	static maxAge = 30;
	static maxWeight = 300;
	static isDolphin(obj) {
		return obj instanceof this;
	}
	move(...arg) {
		if (arg.length !== 0 ) return `I am a ${Dolphin.type}, my name is ${this.name} and I like ${arg}`;
		return `I am a ${Dolphin.type}, my name is ${this.name} and ${super.move()}`
	}
	say(...arg) {
		if (arg.length !== 0 ) return `I am a ${Dolphin.type}, say ${arg}`;
		return `I am a ${Dolphin.type}, and ${super.say()}`;
	}
	eat(...arg) {
		if (arg.length !== 0 ) return `I like eat ${arg}`;
		return super.eat();
	}
};

class Human extends Primates {
	static type = "Human";
	static maxAge = 125;
	static maxWeight = 318;
	static isHuman(obj) {
		return obj instanceof this;
	}
	move(...arg) {
		if (arg.length !== 0 ) return `I am a ${Human.type}, my name is ${this.name} and I like ${arg}`;
		return `I am a ${Human.type}, my name is ${this.name} and ${super.move()}`
	}
	say(...arg) {
		if (arg.length !== 0 ) return `I am a ${Human.type}, say ${arg}`;
		return `I am a ${Human.type}, and ${super.say()}`;
	}
	eat(...arg) {
		if (arg.length !== 0 ) return `I like eat ${arg}`;
		return super.eat();
	}
};

//=================================================================================================

const eagl = new Birds (4, 'Champion', 4, 4);

console.log(eagl); // Birds {age: 4, name: 'Champion', weight: 4, limbAmount: 4}
console.log(Birds.maxWeight); // 175
console.log(Birds.maxAge); // 50
console.log(Birds.isBirds(eagl)); //true
console.log(eagl.say()); //I am a Birds, and I am Animals
console.log(eagl.say('ku-ku','ku-ku')); //I am a Birds, say ku-ku,ku-ku
console.log(eagl.eat()); //I like eat food
console.log(eagl.eat('mouse', 'gophers')); //I like eat meat,PediGree
console.log(eagl.move()); //I am a Birds, my name is Champion and I am moove
console.log(eagl.move('fly', 'sleep')); //I am a Birds, my name is Champion and I like fly,sleep

console.log('*********************************************');

const pigeon = new Birds (4, 'Peace', 4, 4);

console.log(pigeon); // Birds {age: 4, name: 'Champion', weight: 4, limbAmount: 4}
console.log(Birds.maxWeight); // 175
console.log(Birds.maxAge); // 50
console.log(Birds.isBirds(pigeon)); //true
console.log(pigeon.say()); //I am a Birds, and I am Animals
console.log(pigeon.say('gul-gul','gul-gul')); //I am a Birds, say gul-gul,gul-gul
console.log(pigeon.eat()); //I like eat food
console.log(pigeon.eat('worms', 'insects')); //I like eat worms,insects
console.log(pigeon.move()); //I am a Birds, my name is Peace and I am moove
console.log(pigeon.move('fly','sleep')); //I am a Birds, my name is Peace and I like fly,sleep

console.log('===================================================================================');

const catfish = new Fish (30, 'Big', 190, 0);

console.log(catfish); //Fish {age: 30, name: 'Big', weight: 190, limbAmount: 0}
console.log(Fish.maxWeight); // 200
console.log(Fish.maxAge); // 30
console.log(Fish.isFish(catfish)); //true
console.log(catfish.say()); // I am a Fish, and I am Animals
console.log(catfish.say('bul','bul')); //I am a Fish, say bul,bul
console.log(catfish.eat()); // I like eat food
console.log(catfish.eat('fry', 'aquatic insects')); // I like eat fry,aquatic insects
console.log(catfish.move()); //I am a Fish, my name is Big and I am moove
console.log(catfish.move('swim', 'sleep')); //I am a Fish, my name is Big and I like swim,sleep

console.log('*********************************************');

const carp = new Fish (1, 'Junior', 0.5, 0);

console.log(carp); //Fish {age: 1, name: 'Junior', weight: 0.5, limbAmount: 0}
console.log(Fish.maxWeight); // 200
console.log(Fish.maxAge); // 30
console.log(Fish.isFish(carp)); //true
console.log(carp.say()); // I am a Fish, and I am Animals
console.log(carp.say('bul')); //I am a Fish, say bul
console.log(carp.eat()); // I like eat food
console.log(carp.eat('seaweed', 'mosguito')); // I like eat seaweed,mosguito
console.log(carp.move()); //I am a Fish, my name is Junior and I am moove
console.log(carp.move('swim', 'sleep')); //I am a Fish, my name is Junior and I like swim,sleep

console.log('===================================================================================');

const doberman = new Dog (7, 'King', 45, 4);

console.log(doberman); // Dog {age: 7, name: 'King', weight: 45, limbAmount: 4}
console.log(Dog.maxWeight); // 155.6
console.log(Dog.maxAge); // 29
console.log(Dog.isDog(doberman)); // true
console.log(doberman.say()); //I am a Dog, and I am Predators
console.log(doberman.say('gav','gav')); //I am a Dog, say gav,gav
console.log(doberman.eat()); //I like eat food
console.log(doberman.eat('meat', 'PediGree')); //I like eat meat,PediGree
console.log(doberman.move()); // I am a Dog, my name is King and I am moove
console.log(doberman.move('run', 'sleep')); //I am a Dog, my name is King and I like run,sleep

console.log('*********************************************');

const pitbul = new Dog (3, 'Boy', 30, 4);

console.log(pitbul); // Dog {age: 3, name: 'Boy', weight: 30, limbAmount: 4}
console.log(Dog.maxWeight); // 155.6
console.log(Dog.maxAge); // 29
console.log(Dog.isDog(pitbul)); // true
console.log(pitbul.say()); //I am a Dog, and I am Predators
console.log(pitbul.say('rrrr','rrrrr')); //I am a Dog, say rrrr,rrrrr
console.log(pitbul.eat()); //I like eat food
console.log(pitbul.eat('meat')); //I like eat meat
console.log(pitbul.move()); // I am a Dog, my name is Boy and I am moove
console.log(pitbul.move('play', 'sleep')); //I am a Dog, my name is Boy and I like play,sleep

console.log('===================================================================================');

const afalin = new Dolphin (400, 'BigBoy', 30, 0);

console.log(afalin); // Dolphin {age: 400, name: 'BigBoy', weight: 30, limbAmount: 0}
console.log(Dolphin.maxWeight); // 300
console.log(Dolphin.maxAge); // 30
console.log(Dolphin.isDolphin(afalin)); // true
console.log(afalin.say()); //I am a Dolphin, and I am Whales
console.log(afalin.say('prprp','pfpfp')); //I am a Dolphin, say prprp,pfpfp
console.log(afalin.eat()); //I like eat food
console.log(afalin.eat('small fish')); //I like eat small fish
console.log(afalin.move()); // I am a Dolphin, my name is BigBoy and I am moove
console.log(afalin.move('play', 'swim')); //I am a Dolphin, my name is BigBoy and I like play,swim

console.log('*********************************************');

const kasatka = new Dolphin (200, 'Smilik', 10, 0);

console.log(kasatka); // Dolphin {age: 200, name: 'Smilik', weight: 10, limbAmount: 0}
console.log(Dolphin.maxWeight); // 300
console.log(Dolphin.maxAge); // 30
console.log(Dolphin.isDolphin(kasatka)); // true
console.log(kasatka.say()); //I am a Dolphin, and I am Whales
console.log(kasatka.say('kri','kri')); //I am a Dolphin, say kri,kri
console.log(kasatka.eat()); //I like eat food
console.log(kasatka.eat('very mach fish')); //I like eat very mach fish
console.log(kasatka.move()); // I am a Dolphin, my name is Smilik and I am moove
console.log(kasatka.move('play', 'swim')); //I am a Dolphin, my name is Smilik and I like play,swim


console.log('===================================================================================');

const person = new Human (70, 'Petya', 30, 4);

console.log(person); // Human {age: 70, name: 'Petya', weight: 30, limbAmount: 4}
console.log(Human.maxWeight); // 318
console.log(Human.maxAge); // 125
console.log(Human.isHuman(person)); // true
console.log(person.say()); //I am a Human, and I am Primates
console.log(person.say('Hi','Hi')); //I am a Human, say Hi,Hi
console.log(person.eat()); //I like eat food
console.log(person.eat('fruit','meat')); //I like eat fruit,meat
console.log(person.move()); // I am a Human, my name is Petya and I am moove
console.log(person.move('play', 'slep')); //I am a Human, my name is Petya and I like play,slep

console.log('*********************************************');

const citizen = new Human (80, 'Vasya', 15, 4);

console.log(citizen); // Human {age: 80, name: 'Vasya', weight: 15, limbAmount: 4}
console.log(Human.maxWeight); // 318
console.log(Human.maxAge); // 125
console.log(Human.isHuman(citizen)); // true
console.log(citizen.say()); //I am a Human, and I am Primates
console.log(citizen.say('Hello','Hi')); //I am a Human, say Hello,Hi
console.log(citizen.eat()); //I like eat food
console.log(citizen.eat('meat','meat')); //I like eat meat,meat
console.log(citizen.move()); //I am a Human, my name is Vasya and I am moove
console.log(citizen.move('play', 'walk')); //I am a Human, my name is Vasya and I like play,walk









