//Exercise 1
class Person {
    constructor(name, pets, residence, hobbies) {
        this.name = name;
        this.pets = pets;
        this.residence = residence;
        this.hobbies = hobbies;
    }

    addHobby(hobby) {
        this.hobbies.push(hobby);
    }

    removeHobby (hobby) {
        let foundIdx = this.hobbies.indexOf(hobby);
        let valuesBefore = this.hobbies.slice(0, foundIdx);
        let valuesAfter = this.hobbies.slice(foundIdx + 1);
        this.hobbies = valuesBefore.concat(valuesAfter);
    }

    greeting() {
        console.log("Hello fellow person!");
    }
}

//Exercise 2
class Coder extends Person {
    constructor(name, pets, residence, hobbies, occupation) {
        super(name, pets, residence, hobbies);
        this.occupation = occupation;
    }

    greeting() {
        console.log("Hello, I am a coder!");
    }
}

//Exercise 3
let coder = new Coder("Diana", 1, "Phoenix", ["going to shows", "LEGO"], "Full Stack Web Developer");

coder.addHobby("reading");

console.log(coder);

coder.removeHobby("LEGO");

console.log(coder);

coder.greeting();


//Exercise 4
class Calculator {
    result = 0;
        
    add(a, b) {
        this.result = a + b;
        return this.result;

    }

    subtract(a, b) {
        this.result = b - a;
        return this.result;

    }

    multiply(a, b) {
        this.result = a * b;
        return this.result;

    }

    divide(a, b) {
        this.result = b / a;
        return this.result;

    }

    displayResult() {
        console.log(this.result);
    }
}

const myCalc = new Calculator();
myCalc.displayResult();
myCalc.add(4, 7);
myCalc.displayResult();