
class Person {
    constructor(name = 'Anonymous', age = 0) {
        this.name = name;
        this.age = age;
    };
    getGreeting() {
        return `Hi ${this.name}`;
    }
    getDescription() {
        return `${this.name} is ${this.age} years old.`;
    }
}

class Student extends Person {
    constructor(name, age, degree) {
        super(name, age);
        this.degree = degree
    }
    hasDegree() {
        return !!this.degree;
    }
    getDescription() {
        let description = super.getDescription();

        if (this.hasDegree()) {
            description += ` Their degree is ${this.degree}.`;
        }
        
        return description;
    }
}

class Traveler extends Person {
    constructor(name, age, homeLocation) {
        super(name, age);
        this.homeLocation = homeLocation;
    }
    getGreeting() {
        let description = super.getDescription();

        if (this.homeLocation) {
            description += ` I'm visiting from ${this.homeLocation}.`
        }
        return description;
    }
}

const me = new Traveler('Tom Bradley', 31, 'London');

console.log(me.getGreeting());

const other = new Traveler();

console.log(other.getGreeting());