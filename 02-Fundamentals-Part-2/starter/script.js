'use strict';

/*
let hasDriversLicense = false;
const passTest = true;

if (passTest) hasDriversLicense = true;
if (hasDriversLicense) console.log(`I can drive`);


function logger() {
    console.log(`Function has been run`);
}

// Calling / Running / Invoking the Function
logger();
logger();
logger();

function fruitProcessor(apples, oranges) {
    const juice = `Juice with ${apples} apples and ${oranges} oranges`;
    return juice;
}

const appleJuice = fruitProcessor(5, 0);
console.log(appleJuice);

const appleOrangeJuice = fruitProcessor(2, 4);
console.log(appleOrangeJuice);

// Function Declaration
function calcAge1(birthYear) {
    return 2024 - birthYear;
}

const myAge = calcAge1(1997);
console.log(myAge);

// Function Expression (Anonymous Function)
const calcAge2 = function (birthYear) {
    return 2024 - birthYear;
}

const myAge2 = calcAge2(1997);
console.log(myAge2);


// Arrow Functions
const calcAge3 = birthYear => 2024 - birthYear;
const myAge = calcAge3(1997);
console.log(myAge);

// Arrow Function with Multiple Params and Multiple Lines
const yearsUntilRetirement = (birthYear, firstName) => {
    const age = 2024 - birthYear;
    const retirement = 65 - age;
    return `${firstName} retires in ${retirement} years`;
}

console.log(yearsUntilRetirement(1997, `Daniel`));


// Functions Calling Other Functions

function cutFruitPieces(fruit) {
    return fruit * 4; 
}

function fruitProcessor(apples, oranges) {
    const applePieces = cutFruitPieces(apples);
    const orangePieces = cutFruitPieces(oranges);
    const juice = `Juice with ${applePieces} pieces of apples and ${orangePieces} pieces of oranges`;
    return juice;
}

console.log(fruitProcessor(2, 3));

const calcAge = function(birthYear) {
    return 2024 - birthYear;
}

const yearsUntilRetirement = function (birthYear, firstName) {
    const age = calcAge(birthYear);
    const retirement = 65 - age;
    if (retirement > 0) {
        console.log(`${firstName} retires in ${retirement} years`);
        return retirement;
    }
    else {
        console.log(`${firstName} has already retired`);
        return -1;
    }
}

console.log(yearsUntilRetirement(1997, `Daniel`));
console.log(yearsUntilRetirement(1950, `Mike`));


const calcAverage = (score1, score2, score3) => (score1 + score2+ score3) / 3;

const scoreDolphins = calcAverage(44, 23, 71);
const scoreKoalas = calcAverage(65, 54, 49);

const checkWinner = function(avgDolphins, avgKoalas) {
    if (avgDolphins >= avgKoalas * 2) {
        console.log(`Dolphins win (${avgDolphins}) vs. (${avgKoalas})`);
        return 0;
    }
    else if (avgKoalas >= avgDolphins * 2) {
        console.log(`Koalas win (${avgKoalas}) vs. (${avgDolphins})`);
        return 0;
    }
    else {
        console.log(`No team wins...`);
        return -1;
    }
}

checkWinner(scoreDolphins, scoreKoalas);

const friend1 = `Michael`;
const friend2 = `Steven`;
const friend3 = `Peter`;

// Creating an Array (literal syntax)
const friends = [`Michael`, `Steven`, `Peter`];
console.log(friends);

// Another way to create an Array
const years = new Array(1991, 1984, 2008, 2020);

console.log(friends[0]);
console.log(friends[2]);

// Returns true length of array, not zero based like accessing index
console.log(friends.length);
console.log(friends[friends.length - 1]);

// Add or mutate elements in array
friends[2] = `Jay`;
console.log(friends);

// Arrays can house any expressions, even other arrays within arrays
const firstName = `Daniel`;
const daniel = [firstName, `Fang`, 2024 - 1997, `teacher`, friends];
console.log(daniel);

// Exercise
const calcAge = function(birthYear) {
    return 2024 - birthYear;
}
const years2 = [1990, 1967, 2002, 2010, 2018];

const age1 = calcAge(years2[0]);
const age2 = calcAge(years2[1]);
const age3 = calcAge(years2[years2.length - 1]);
console.log(age1, age2, age3);

const ages = [calcAge(years2[0]), calcAge(years2[1]), calcAge(years2[years2.length - 1])];
console.log(ages);

const friends = [`Michael`, `Steven`, `Peter`];

// Add elements
const newLength = friends.push(`Jay`);
friends.unshift(`John`);
console.log(friends);

// Remove elements
friends.pop();
friends.shift();
console.log(friends);

// Returns index location of element (-1 if missing)
console.log(friends.indexOf(`Steven`));

// Returns true or false (whether element exists in array)
console.log(friends.includes(`Steven`));

const calcTip = function(billValue) {
    if (billValue >= 50 && billValue <= 300)
    {
        return billValue * 0.15;
    }
    else {
        return billValue * 0.2;
    }
}

const bills = [125, 555, 44];
const tips = [calcTip(bills[0]), calcTip(bills[1]), calcTip(bills[2])];
const totals = [bills[0] + tips[0], bills[1] + tips[1], bills[2] + tips[2]];

console.log(calcTip(10));
console.log(bills);
console.log(tips);
console.log(totals);


// Creating an Object
const daniel = {
    firstName: `Daniel`,
    lastName: `Fang`,
    age: `27`, 
    job: `founder`,
    friends: [`Aaron`, `Michael`, `Jeffrey`]
};
console.log(daniel);

// Object property access
console.log(daniel.lastName);
console.log(daniel[`lastName`]); 

// For bracket notation, put any expression. Can't do that for . notation.
const nameKey = `Name`;
console.log(daniel[`first` + nameKey]);
console.log(daniel[`last` + nameKey]);

const interestedIn = prompt(`What do you want to know about Daniel? Choose between firstName, lastName, age, job, and friends`);

// This makes sure the Expression evaluated is Truthy, as undefined is false
if (daniel[interestedIn]) {
    console.log(daniel[interestedIn]);
}
else {
    console.log(`Wrong request! Choose between options`)
}

// Adding properties to the Object
daniel.location = `United States`;
daniel[`instagram`] = `@danielfang7`;
console.log(daniel);

// Challenge (dot member access is higher priority than computed member access {}, both are left to right)
console.log(`${daniel.firstName} has ${daniel.friends.length} friends, and his best friend is called ${daniel.friends[daniel.friends.length - 1]}`);


const daniel = {
    firstName: `Daniel`,
    lastName: `Fang`,
    birthYear: `1997`,
    job: `founder`,
    friends: [`Aaron`, `Michael`, `Jeffrey`],
    hasDriversLicense: true,

    // calcAge: function (birthYear) {
    //     return 2024 - birthYear;
    // }

    // calcAge: function () {
    //     return 2024 - this.birthYear;
    // }

    // Create a new property on the object using a function with 'this'
    calcAge: function () {
        this.age = 2024 - this.birthYear;
        return this.age;
    },

    getSummary: function () {
        return `${this.firstName} is a ${this.calcAge()}-year old ${this.job}, and he has ${this.hasDriversLicense === true ? `a` : `no`} driver's license`;
    }
};

// Calling function methods from Objects
console.log(daniel.calcAge());
console.log(daniel.age);
console.log(daniel.age);

// console.log(daniel[`calcAge`](daniel.birthYear));

// Challenge
console.log(daniel.getSummary());


// Coding challenge
const mark = {
    fullName: `Mark Miller`,
    mass: 78,
    height: 1.69,
    calcBMI: function () {
        this.bmi = this.mass / (this.height * this.height);
        return this.bmi;
    }
}

const john = {
    fullName: `John Smith`,
    mass: 92,
    height: 1.95,
    calcBMI: function () {
        this.bmi = this.mass / (this.height * this.height);
        return this.bmi;
    }
}

const markHigherBMI = mark.calcBMI() > john.calcBMI() ? true : false;

if (markHigherBMI) {
    console.log(`${mark.fullName}'s BMI (${mark.calcBMI()}) is higher than ${john.fullName}'s (${john.calcBMI()})`);
}
else if (!markHigherBMI) {
    console.log(`${john.fullName}'s BMI (${john.calcBMI()}) is higher than ${mark.fullName}'s (${mark.calcBMI()})`);
}
else {
    console.log(`They have the same BMI!`);
}

// For Loop - keeps running while condition is true
for (let rep = 1; rep <= 10; rep++) {
    console.log(`Lifting weights repetition ${rep}`);
}


const danielArray = [ 
    `Daniel`,
    `Fang`,
    2024 - 1997, 
    `founder`,
    [`Aaron`, `Michael`, `Jeffrey`],
    true
];

const types = [];
for (let i = 0; i < danielArray.length; i++) {
    // Reading from danielArray
    console.log(danielArray[i], typeof danielArray[i]);

    // Filling types array
    // types[i] = typeof danielArray[i];

    types.push(typeof danielArray[i]);
}

console.log(types);

const years = [1991, 2007, 1997, 2020];
const ages = [];
for (let i = 0; i < years.length; i++) {
    ages.push(2024 - years[i]);
}
console.log(ages);

// Continue Statement - Skip to next iteration of loop
for (let i = 0; i < danielArray.length; i++) {
    if (typeof danielArray[i] !== 'string') continue;
    console.log(danielArray[i], typeof danielArray[i]);
}

// Break Statement - Loop terminated completely on break
for (let i = 0; i < danielArray.length; i++) {
    if (typeof danielArray[i] === 'number') break;
    console.log(danielArray[i], typeof danielArray[i]);
}

const danielArray = [ 
    `Daniel`,
    `Fang`,
    2024 - 1997, 
    `founder`,
    [`Aaron`, `Michael`, `Jeffrey`],
    true
];

// Looping Backwards
for (let i = danielArray.length - 1; i >= 0; i--) {
    console.log(i, danielArray[i]);
}

// Loops Inside a Loop
for (let exercise = 1; exercise < 4; exercise++) {
    console.log(`---------- Starting Exercise ${exercise}`);
    for (let rep = 1; rep < 6; rep++) {
        console.log(`Exercise ${exercise}: Lifting weight repetition ${rep}`);
    }
}


// for (let rep = 1; rep <= 10; rep++) {
//     console.log(`Lifting weights repetition ${rep}`);
// }

// While Loop example - more versatile as it does not need a counter
let rep = 1;
while (rep <= 10) {
    console.log(`Lifting weights repetition ${rep}`);
    rep++;
}

// While is better when we don't know how many iterations we need - such as dice roll
let dice = Math.trunc(Math.random() * 6) + 1;
while (dice !== 6) {
    console.log(`You rolled a ${dice}`);
    dice = Math.trunc(Math.random() * 6) + 1;
    if (dice === 6) console.log(`Loop is about to end...`);
}
*/

// Exercise Challenge 4

const calcTip = function (bill) {
    return bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
}

const calcAverage = function (arr) {
    let counter = 0;
    for (let i = 0; i < arr.length; i++) {
        counter += arr[i];
    }
    return counter / arr.length; 
}

const bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];
const tips = [];
const totals = [];

for (let i = 0; i < 10; i++) {
    tips[i] = calcTip(bills[i]);
    totals[i] = bills[i] + tips[i];
}

console.log(bills, tips, totals);
console.log(calcAverage(totals));

