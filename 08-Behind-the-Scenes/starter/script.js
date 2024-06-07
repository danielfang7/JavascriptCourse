'use strict';

/*
function calcAge(birthYear) {
  const age = 2024 - birthYear;

  function printAge() {
    const output = `${firstName}, you are ${age}, born in ${birthYear}`;
    console.log(output);

    if (birthYear >= 1981 && birthYear <= 1996) {
      const str = `Oh, and you're a millenial, ${firstName}`;
      console.log(str);

      function add(a, b) {
        return a + b;
      }
    }
  }
  printAge();
  return age;
}

const firstName = `Daniel`;
calcAge(1997);


// Variables Hoisting
console.log(me);
//console.log(job);
//console.log(year);

var me = `Daniel`;
let job = `founder`;
const year = `1997`;

// Functions Hoisting
console.log(addDecl(2, 3)); // works
console.log(addExpr(2, 3)); // doesn't work (TDZ)
console.log(addArrow(2, 3)); // doesn't work (TDZ)

function addDecl(a, b) {
  return a + b;
}

const addExpr = function (a, b) {
  return a + b;
};

const addArrow = (a, b) => a + b;


// Example of pitfall
if (!numProducts) {
  // numProducts is undefined here, which is falsy, therefore it will execute even though numProducts is 10
  deleteShoppingCart();
}

var numProducts = 10;

function deleteShoppingCart() {
  console.log(`All products deleted`);
}

// Variables declared with var will create a property on the global Window object
var x = 1;
let y = 2;
const z = 3;

console.log(x === window.x);
console.log(y === window.y);
console.log(z === window.z);


// Examples of 'this' keyword
console.log(this); // this is Window (this of Global Scope)

const calcAge = function (birthYear) {
  console.log(2024 - birthYear);
  console.log(this); // this is undefined here but still its own this
};
calcAge(1997);

const calcAgeArrow = (birthYear) => {
  console.log(2024 - birthYear);
  console.log(this); // this is Window here - its simply the this of parent scope
};
calcAgeArrow(1990);

const daniel = {
  year: 1997,
  calcAge: function () {
    console.log(2024 - this.year); // this is the daniel Object
  },
};
daniel.calcAge();

const matilda = {
  year: 2017,
};
// Method borrowing
matilda.calcAge = daniel.calcAge;
matilda.calcAge(); // gives correct result: this keyword does now point to matilda object

const f = daniel.calcAge;
f(); // error because this is now undefined: it is a regular function call now


const daniel = {
  firstName: `Daniel`,
  year: 1997,
  calcAge: function () {
    console.log(2024 - this.year); // this is the daniel Object

    // // Solution 1
    // const self = this;
    // const isMillenial = function () {
    //   console.log(self.year >= 1981 && self.year <= 1996);
    // };

    // Solution 2 - Arrow Function
    const isMillenial = () => {
      console.log(this);
      console.log(this.year >= 1981 && self.year <= 1996);
    };

    isMillenial();
  },
  greet: () => console.log(`Hey ${this.firstName}`), // this is undefined, as it tries to get Window.firstName of global scope
};
daniel.greet();
daniel.calcAge();

// Arguments Keyword
const addExpr = function (a, b) {
  console.log(arguments); // returns array of arguments used in the function
  return a + b;
};
addExpr(2, 5);
addExpr(2, 5, 8, 10); // we can add more arguments than we defined to accept

const addArrow = (a, b) => {
  console.log(arguments); // arguments is not defined error
  return a + b;
};
addArrow(2, 5, 8);


let age = 30;
let oldAge = age;
age = 31;
console.log(age);
console.log(oldAge);

const me = {
  name: `Daniel`,
  age: 30,
};

const friend = me;
friend.age = 27;

console.log(friend);
console.log(me);
*/

let lastName = `Williams`;
let oldLastName = lastName;
lastName = `Davis`;
console.log(lastName);
console.log(oldLastName);

const jessica = {
  firstName: `Jessica`,
  lastName: `Williams`,
  age: 27,
};

// not a new object in the heap: they just point to the same memory address in heap
const marriedJessica = jessica;
marriedJessica.lastName = `Davis`;
console.log(`Before marriage:`, jessica);
console.log(`After marriage:`, marriedJessica);

// Copying objects
const jessica2 = {
  firstName: `Jessica`,
  lastName: `Williams`,
  age: 27,
};

const jessicaCopy = Object.assign({}, jessica2);
jessicaCopy.lastName = `Davis`;
console.log(jessica2);
console.log(jessicaCopy);
