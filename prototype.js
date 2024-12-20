function Person(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;

};

const p1 = new Person('John', 'Doe');
const p2 = new Person('John1', 'Doe1');

// p1.getFullName = function () {
//     return this.firstName + ' ' + this.lastName;
// };

Person.prototype.getFullName = function () {
    return this.firstName + ' ' + this.lastName;
};

console.log(p2.getFullName());
console.log(p1.getFullName());

//! prototypes is used to share properties & methods across all instances of a class


//? prototype inheritance
function SuperHero(firstName, lastName) {
    this.isSuperHero = true;
    // inherit properties from Person
    Person.call(this, firstName, lastName);

}

SuperHero.prototype.fight = function () {
    console.log('fighting');
};

// inherit methods from Person
SuperHero.prototype = Object.create(Person.prototype);

const batman = new SuperHero('Bruce', 'Wayne');
SuperHero.prototype.constructor = SuperHero; // otherwise it will point to Person


