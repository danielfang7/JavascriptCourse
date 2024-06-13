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
*/

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
