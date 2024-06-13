'use strict';

/*
// Default Parameters
const bookings = [];

const createBooking = function (
  flightNum,
  numPassengers = 1,
  price = 199 * numPassengers
) {
  // OLD ES5 Method
  //   numPassengers = numPassengers || 1;
  //   price = price || 199;

  const booking = {
    flightNum,
    numPassengers,
    price,
  };
  console.log(booking);
  bookings.push(booking);
};

createBooking(`LH123`);
createBooking(`LH123`, 2, 800);
createBooking(`LH123`, 5);
createBooking(`LH123`, undefined, 1000); // leaves numPassengers at default value of 1


// Object vs Primitives passed into functions and changing
const flight = `LH234`;
const daniel = {
  name: `Daniel Fang`,
  passport: 342414141,
};

const checkIn = function (flightNum, passenger) {
  flightNum = `LH999`; // flight is primitive type: flightNum is a copy of that original value (flightNum = flight)
  passenger.name = `Mr. ` + passenger.name; // daniel object is reference type: it copies a reference to object in memory heap (const passenger = daniel), but they both point to the same object in the memory heap

  if (passenger.passport === 342414141) {
    alert(`Check in`);
  } else {
    alert(`Wrong passport`);
  }
};

const newPassport = function (person) {
  person.passport = Math.trunc(Math.random() * 1000000000);
};

newPassport(daniel);
checkIn(flight, daniel);
console.log(daniel);


// Creating generic functions and higher order function
const oneWord = function (str) {
  return str.replaceAll(` `, ``).toLowerCase();
};

const upperFirstWord = function (str) {
  const [first, ...others] = str.split(` `);
  return [first.toUpperCase(), ...others].join(` `);
};

// Higher order function (takes in a function, operates at higher level of abstraction)
const transformer = function (str, fn) {
  console.log(`Original string: ${str}`);
  console.log(`Transformed string: ${fn(str)}`);
  console.log(`Transformed by ${fn.name}`);
};

transformer(`JavaScript is the best!`, upperFirstWord); // passing in callback functions (transformer calls them)
transformer(`JavaScript is the best!`, oneWord);


// Functions returning functions
const greet = function (greeting) {
  return function (name) {
    console.log(`${greeting} ${name}`);
  };
};

const greeterHey = greet(`Hey`);
greeterHey(`Daniel`); // logs Hey Daniel
greet(`Hey`)(`Daniel`); // also logs Hey Daniel

// Arrow function version
const greet2 = greeting => name => console.log(`${greeting} ${name}`);
greet2(`Hello`)(`Daniel`);
*/

const lufthansa = {
  airline: `Lufthansa`,
  iataCode: `LH`,
  bookings: [],
  book(flightNum, name) {
    console.log(
      `${name} booked a seat on ${this.airline} flight ${this.iataCode}${flightNum}`
    );
    this.bookings.push({ flight: `${this.iataCode}${flightNum}` });
  },
};

lufthansa.book(239, `Daniel Fang`);
lufthansa.book(635, `Mike Smith`);
console.log(lufthansa);

const eurowings = {
  airline: `Eurowings`,
  iataCode: `EW`,
  bookings: [],
};

// We can set a variable = object method
const book = lufthansa.book;

// Need to tell JS explicity what the this keyword should point to
book.call(eurowings, 23, `Sam Altman`);
console.log(eurowings);

book.call(lufthansa, 239, `Daniel Crazy`);
console.log(lufthansa);

// does not work
//book(23, `Sam Altman`);

// Apply method
const flightData = [583, `Daniel Cooper`];
book.apply(lufthansa, flightData);
console.log(lufthansa);

// Apply not used much anymore because of below method
book.call(lufthansa, ...flightData);
console.log(lufthansa);

// Bind Method - stores new function as variable with new 'this' bound
const bookEW = book.bind(eurowings);
bookEW(23, `Steven Williams`);
console.log(eurowings);

const bookLH = book.bind(lufthansa);

// Bind can pre-set parameter passed into function
const bookEW23 = book.bind(eurowings, 23);
bookEW23(`John Smith`);
bookEW23(`John Cooper`);
console.log(eurowings);

// BIND with Objects with event listeners
lufthansa.planes = 300;
lufthansa.buyPlane = function () {
  console.log(this);
  this.planes++;
  console.log(this.planes);
};
document
  .querySelector(`.buy`)
  .addEventListener(`click`, lufthansa.buyPlane.bind(lufthansa)); // need to use bind here otherwise the 'this' for an eventlistener is the element

// Partial application use of BIND
const addTax = (rate, value) => value + value * rate;
console.log(addTax(0.1, 200));

const addVAT = addTax.bind(null, 0.23);
console.log(addVAT(100)); // logs 123

// rewrite example - currying
const addTax2 = rate => value => value + value * rate;
const addVAT2 = addTax2(0.23);
console.log(addVAT2(100)); // logs 123
