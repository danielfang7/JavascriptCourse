'use strict';

// Data needed for a later exercise
const flights =
  '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

// Should convert to following Console Logs
// 🔴 Delayed Departure from FAO to TXL (11h25)
//              Arrival from BRU to FAO (11h45)
//   🔴 Delayed Arrival from HEL to FAO (12h05)
//            Departure from FAO to LIS (12h30)

const getCode = str => str.slice(0, 3).toUpperCase();

for (const flight of flights.split(`+`)) {
  const [type, from, to, time] = flight.split(`;`);
  const output = `${type.startsWith(`_Delayed`) ? `🔴` : ``}${type.replaceAll(
    `_`,
    ` `
  )} ${getCode(from)} ${getCode(to)} (${time.replace(`:`, `h`)})`.padStart(36);
  console.log(output);
}

const weekdays = [`mon`, `tue`, `wed`, `thu`, `fri`, `sat`, `sun`];

const openingHours = {
  [weekdays[3]]: {
    open: 12,
    close: 22,
  },
  [weekdays[4]]: {
    open: 11,
    close: 23,
  },
  [weekdays[5]]: {
    open: 0, // Open 24 hours
    close: 24,
  },
};

// Data needed for first part of the section
const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],

  // ES6 enhanced object literals
  openingHours,

  // ES6 enhanced for function
  order(starterIndex, mainIndex) {
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

/*
// Working with Strings Part 3

// Split Method: splits everything into separate array elements in an array based on divider string
console.log(`a+very+nice+string`.split(`+`));
console.log(`Daniel Fang`.split(` `));
const [firstName, lastName] = `Daniel Fang`.split(` `);
console.log(firstName, lastName);

// Join method is opposite of split (joins multiple array elements in array into one string)
const newName = [`Mr.`, firstName, lastName.toUpperCase()].join(` `);
console.log(newName);

// Examples function using multiple string methods
const capitalizeName = function (name) {
  const names = name.split(` `);
  const namesUpper = [];
  for (const n of names) {
    namesUpper.push(n[0].toUpperCase() + n.slice(1));
  }
  console.log(namesUpper.join(` `));
};
capitalizeName(`jessica ann smith davis`);
capitalizeName(`daniel fang`);

// Padding a string (adds whatever is chosen to pad characters to begin or end of string to desired total string length)
const message = `Go to gate 23!`;
console.log(message.padStart(25, `+`).padEnd(35, `+`));

const maskCreditCard = function (number) {
  const str = number + ``;
  const last = str.slice(-4);
  return last.padStart(str.length, `*`);
};

console.log(maskCreditCard(43242429492202));
console.log(maskCreditCard(`4324242949220234234242`));

// Repeat
const message2 = `Bad weather... All departures delayed... `;
console.log(message2.repeat(5));

// Function
const planesInLine = function (n) {
  console.log(`There are ${n} planes in line`.repeat(n));
};

planesInLine(5);
planesInLine(12);


// Working with Strings PArt 1 and 2
const airline = `Tap Air Portugal`;
const plane = `A320`;

console.log(airline.toLowerCase());
console.log(airline.toUpperCase());

// Fix capitalization in name
const passenger = `jOnAS`; // Jonas
const passengerLower = passenger.toLowerCase();
const passengerCorrect =
  passengerLower[0].toUpperCase() + passengerLower.slice(1);
console.log(passengerCorrect);

// Comparing and fixing emails
const email = `hello@daniel.io`;
const loginEmail = `  Hello@Daniel.Io \n`;
const normalizedEmail = loginEmail.toLowerCase().trim();
console.log(normalizedEmail);

// Replacing string elements (note replace only replaces first occurrence, and is case sensitive)
const priceGB = '288,97E';
const priceUS = priceGB.replace('E', '$').replace(',', '.');
console.log(priceUS);

// Replacing all words occurrences
const announcement = `All passengers come to borading door 23. Boarding door 23!`;
console.log(announcement.replaceAll(`door`, `gate`));

// Booleans
const plane2 = `Airbus A320neo`;
console.log(plane2.includes(`A320`)); // returns true as long as its somewhere in the string
console.log(plane2.startsWith(`Air`)); // returns true, doesn't need to match entire word

if (plane2.startsWith(`Airbus`) && plane2.endsWith(`neo`)) {
  console.log(`Part of the NEW Airbus family`);
}

// Practice Exercise
const checkBaggage = function (items) {
  const baggage = items.toLowerCase();
  if (baggage.includes(`knife`) || baggage.includes(`gun`)) {
    console.log(`You are not allowed on board`);
  } else {
    console.log(`Welcome aboard`);
  }
};

checkBaggage(`I have a laptop, some Food, and a pocket knife`);
checkBaggage(`Socks and Camera`);
checkBaggage(`Got some snacks and a gun for protection`);


console.log(plane[0]);
console.log(`B737`[0]);
console.log(airline.length);

// Get position of given character in String
console.log(airline.indexOf(`r`));
console.log(airline.lastIndexOf(`r`));
console.log(airline.indexOf(`Portugal`)); // case sensitive

// Slice method to make a new substring (doesn't mutate as strings are primitive)
console.log(airline.slice(4));
console.log(airline.slice(4, 7)); // extracts between index 4 and 7 (7-4 = length of string)

console.log(airline.slice(0, airline.indexOf(` `))); // slices until first occurence of space

console.log(airline.slice(airline.lastIndexOf(` `) + 1)); // slices last word (last space + 1 to not include the space)

console.log(airline.slice(-2));
console.log(airline.slice(1, -1));

const checkMiddleSeat = function (seat) {
  // B and E are middle seats
  const s = seat.slice(-1);
  if (s === `B` || s === `E`) {
    console.log(`You got the middle seat`);
  } else {
    console.log(`You got lucky`);
  }
};
checkMiddleSeat(`11B`);
checkMiddleSeat(`23C`);
checkMiddleSeat(`3E`);


const question = new Map([
  ['question', 'What is the best programming language in the world?'],
  [1, 'C'],
  [2, 'Java'],
  [3, 'JavaScript'],
  ['correct', 3],
  [true, 'Correct'],
  [false, 'Try again!'],
]);
console.log(question);

// Convert Object to Map
const hoursMap = new Map(Object.entries(openingHours));
console.log(hoursMap);

// Question Answer Quiz App
console.log(question.get(`question`));
for (const [key, value] of question) {
  if (typeof key === `number`) console.log(`Answer ${key}: ${value}`);
}

const answer = Number(prompt(`Your answer`));
console.log(question.get(question.get(`correct`) === answer ? true : false));

// Convert map to array
console.log([...question]); // will return array of arrays that we started with
console.log([...question.keys()]); // returns array of keys
console.log([...question.values()]); // returns array of values


// Map
const restMap = new Map();
restMap.set('name', 'Classico Italiano');
restMap.set(1, 'Firenze, Italy');
restMap.set(2, 'Lisbon, Portugal');

// Chaining sets which will each return
restMap
  .set(`categories`, ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'])
  .set(`open`, 11)
  .set(`close`, 23)
  .set(true, 'We are open')
  .set(false, 'We are closed');

console.log(restMap.get(`name`));
console.log(restMap.get(true));

const time = 21;
console.log(
  restMap.get(time > restMap.get(`open`) && time < restMap.get(`close`))
);

// Other methods for Map
console.log(restMap.has(`categories`));
restMap.delete(2);
console.log(restMap);
console.log(restMap.size);
restMap.clear();
console.log(restMap);

// Arrays as key with Map
const arr = [1, 2];
restMap.set(arr, `Test`);
console.log(restMap.get(arr));

// Object as map keys
restMap.set(document.querySelector(`h1`), `Heading`);
console.log(restMap);


// Sets
const ordersSet = new Set([
  `Pasta`,
  `Pizza`,
  `Pizza`,
  `Risotto`,
  `Pasta`,
  `Pizza`,
]);
console.log(ordersSet); // the set will only include uniques
console.log(ordersSet.size); // logs length of set
console.log(ordersSet.has(`Pizza`)); // check if set includes a specific element
console.log(ordersSet.has(`Bread`));
ordersSet.add(`Garlic Bread`); // add element to set
ordersSet.delete(`Risotto`); // delete element from set
console.log(ordersSet);

for (const order of ordersSet) {
  console.log(order);
}

// Example - removing duplicates in an array using Spread operator on Sets
const staff = ['Waiter', 'Chef', 'Waiter', 'Manager', 'Chef', 'Waiter'];
const staffUnique = [...new Set(staff)];
console.log(staffUnique);


// Object Keys / Property Names
const properties = Object.keys(openingHours);
console.log(properties); // returns an array of the three property names

let openStr = `We are open on ${properties.length} days: `;

for (const day of properties) {
  openStr += `${day}, `;
}
console.log(openStr);

// Property Values
const values = Object.values(openingHours);
console.log(values);

// Entire object
const entries = Object.entries(openingHours);
console.log(entries);

for (const [key, { open, close }] of entries) {
  console.log(`On ${key} we are open at ${open} and close at ${close}`);
}



// With Optional Chaining (immediately return undefined if it is null)
console.log(restaurant.openingHours?.mon?.open);

// Optional Chaining Operator and Nullish Coalescing Operator
const days = [`mon`, `tue`, `wed`, `thu`, `fri`, `sat`, `sun`];
for (const day of days) {
  const open = restaurant.openingHours[day]?.open ?? `closed`;
  console.log(`On ${day}, we open at ${open}`);
}

// Optional Chaining on Methods
console.log(restaurant.order?.(0, 1) ?? `Method does not exist`);

// Optional Chaining on Arrays
const users = [{ name: `Daniel`, email: `hello@daniel.io` }];
console.log(users[0]?.name ?? `User array empty`);


// For Of Loop
const menu = [...restaurant.starterMenu, ...restaurant.mainMenu];
for (const item of menu) console.log(item);

// For of Loop - to get the element is more complicated, need to use menu.entries()
for (const item of menu.entries()) {
  console.log(item);
}

// For of Loop - to get the element is more complicated, need to use menu.entries()
for (const [i, el] of menu.entries()) {
  console.log(`${i + 1}: ${el}`);
}


const rest1 = {
  name: `Capri`,
  numGuests: 20,
};

const rest2 = {
  name: `La Piazza`,
  owner: `Giovanni Rossi`,
};

// rest1.numGuests = rest1.numGuests || 10;
// rest2.numGuests = rest2.numGuests || 10;

// OR assignment operator: assigns value to variable if that variable is currently falsy
// rest1.numGuests ||= 10;
// rest2.numGuests ||= 10;

// Logical nullish OR assignment operator (assigns only if null or undefined)
rest1.numGuests ??= 10;
rest2.numGuests ??= 10;

// Logical nullish AND assignment operator (assigns only if null or undefined)
rest1.owner &&= `<ANONYMOUS>`;
rest2.owner &&= `<ANONYMOUS>`;
console.log(rest1, rest2);


console.log(`----OR----`);
// Use any data type, return any data type, short-circuiting: if the first value is truthy, it will immediately return that value
console.log(3 || `Daniel`); // logs 3

// Setting default values by short circuiting
const guests1 = restaurant.numGuests || 10;
console.log(guests1);

console.log(`----AND----`);

restaurant.orderPizza && restaurant.orderPizza(`mushrooms`, `spinach`);

// Nullish Coalescing Operator - only considers falsy nullish values (null and undefined)
restaurant.numGuests = 0;
const guestCorrect = restaurant.numGuests ?? 10;
console.log(guestCorrect); // returns zero



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


 Lecture 01
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
