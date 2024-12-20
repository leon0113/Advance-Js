// function sayMyName(name) {
//     console.log(`My name is ${name}`);
// };

// sayMyName('John Doe');
// sayMyName('Jane Doe2');


const person = {
    name: 'John Doe',
    sayMyName: function () {
        console.log(`My name is ${this.name}`);
    }
};

person.sayMyName(); // implicit binding


function sayMyName() {
    console.log(`My name is ${this.name}`);
};
sayMyName.call(person); // explicit binding



function Person(name) {
    this.name = name;
};

const john = new Person('John Doe'); // new binding



sayMyName(); // default binding