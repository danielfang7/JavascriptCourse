'use strict';

// Data needed for a later exercise
const flights =
  '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

// Data needed for first part of the section
const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],
  openingHours: {
    thu: {
      open: 12,
      close: 22,
    },
    fri: {
      open: 11,
      close: 23,
    },
    sat: {
      open: 0, // Open 24 hours
      close: 24,
    },
  },
  order: function (starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },
  orderDelivery: function ({
    starterIndex = 1,
    mainIndex = 0,
    time = `20:00`,
    address,
  }) {
    console.log(
      `Order received! ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be delivered at ${time} to ${address}`
    );
  },
  orderPasta: function (ing1, ing2, ing3) {
    console.log(`Here is your delicious pasta with ${ing1}, ${ing2}, ${ing3}`);
  },
  orderPizza: function (mainIngredient, ...otherIngredients) {
    console.log(mainIngredient);
    console.log(otherIngredients);
  },
};

console.log(`----OR----`);
// Use any data type, return any data type, short-circuiting: if the first value is truthy, it will immediately return that value
console.log(3 || `Daniel`); // logs 3

// Setting default values by short circuiting
const guests1 = restaurant.numGuests || 10;
console.log(guests1);

console.log(`----AND----`);

restaurant.orderPizza && restaurant.orderPizza(`mushrooms`, `spinach`);

/*
restaurant.orderPizza('mushrooms', 'onions', 'olives', 'spinach');

// SPREAD, because on RIGHT side of =
const arr = [1, 2, ...[3, 4]];

// REST, because on LEFT side of =
const [a, b, ...others] = [1, 2, 3, 4, 5];
console.log(a, b, others);

// Rest element must be last element, and will not include any skipped elements
const [pizza, , risotto, ...otherFood] = [
  ...restaurant.mainMenu,
  ...restaurant.starterMenu,
];
console.log(pizza, risotto, otherFood);

// Rest in Objects
const { sat, ...weekdays } = restaurant.openingHours;
console.log(sat, weekdays);

// 2) Rest in Functions
const add = function (...numbers) {
  let sum = 0;
  for (let i = 0; i < numbers.length; i++) {
    sum += numbers[i];
  }
  console.log(sum);
};

add(2, 3);
add(5, 3, 7, 2);
add(8, 2, 5, 3, 2, 1, 4);

const x = [23, 5, 7];
add(...x);
/*

/*
restaurant.orderDelivery({
  time: `22:30`,
  address: `Via del Sole, 21`,
  mainIndex: 2,
  starterIndex: 2,
});

restaurant.orderDelivery({
  address: `Via del Sole, 21`,
  starterIndex: 2,
});
/*
/*
// Use curly braces to destructure objects
const { name, categories, openingHours } = restaurant;
console.log(name, categories, openingHours);

// Destructuring while setting new variable names for object properties
const {
  name: restaurantName,
  openingHours: hours,
  categories: tags,
} = restaurant;
console.log(restaurantName, hours, tags);

// Assigning default values while setting new variable names for properties
const { menu = [], starterMenu: starters = [] } = restaurant;
console.log(menu, starters);

// Mutating variables for object destructuring
let a = 111;
let b = 999;
const obj = { a: 23, b: 7, c: 14 };
({ a, b } = obj); // You need to wrap destructuring assignment into parentheses
console.log(a, b);

// Nested destructuring for Objects
const {
  fri: { open: o, close: c },
} = restaurant.openingHours;
console.log(o, c);
*/

/* Lecture 01
// Retreiving elements manually
const arr = [2, 3, 4];
const a = arr[0];
const b = arr[1];
const c = arr[2];

// Destructuring to declare variables
const [x, y, z] = arr;
console.log(x, y, z); // logs 2 3 4
console.log(arr); // original array not affected

// We can skip elements by leaving a hole
let [main, , secondary] = restaurant.categories;
console.log(main, secondary);

// Swapping variables
[main, secondary] = [secondary, main];
console.log(main, secondary);

// Receive 2 return values from a function
const [starter, mainCourse] = restaurant.order(2, 0);
console.log(starter, mainCourse);

// Destructuring inside of destructuring
const nested = [2, 4, [5, 6]];
const [i, , [j, k]] = nested;
console.log(i, j, k);

// Default values in destructuring
const [p = 1, q = 1, r = 1] = [8, 9];
console.log(p, q, r); // values are set to 1 by default if they don't exist
*/

/*
// Inefficient way of operating array
const arr1 = [7, 8, 9];
const badNewArr = [1, 2, arr1[0], arr1[1], arr1[2]];
console.log(badNewArr);

// Spread Operator - writes out all individual elements of array
const arr2 = [7, 8, 9];
const newArr = [1, 2, ...arr2];
console.log(newArr);
console.log(...newArr);

const newMenu = [...restaurant.mainMenu];

// Copy array (shallow copy)
const mainMenuCopy = [...restaurant.mainMenu];

// Join 2 arrays or more
const menu = [...restaurant.mainMenu, ...restaurant.starterMenu];
console.log(menu);

const str = 'Daniel';
const letters = [...str, ' ', 'F.'];
console.log(letters);

// Using spread operator as function input
// const ingredients = [
//   prompt(`Let's make pasta! Ingredient 1?`),
//   prompt(`Ingredient 2?`),
//   prompt(`Ingredient 3?`),
// ];
// restaurant.orderPasta(...ingredients);

// Using spread operator on objects (ES 2018)
const newRestaurant = {
  ...restaurant,
  newData: {
    AItool: true,
    AIsales: 50,
  },
};
console.log(newRestaurant);

// Making shallow copies of objects (can change one without impacting other)
const restaurantCopy = { ...restaurant };
console.log(restaurantCopy);
*/
