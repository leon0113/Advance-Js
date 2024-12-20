class Person {
    constructor(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
    }

    getFullName() {
        return this.firstName + ' ' + this.lastName;
    }

}


const classP1 = new Person('John', 'Doe');
console.log(classP1.getFullName()); // Outputs: John Doe
console.log(classP1.firstName); // Outputs: John

// inheritance 
class SuperHero extends Person {
    constructor(firstName, lastName) {
        super(firstName, lastName);
        this.superPower = true;
    };

    getSuperPower() {
        console.log("I have super power");
    }
};

const batman = new SuperHero('Bruce', 'Wayne');
console.log(batman.getFullName()); // Outputs: Bruce Wayne