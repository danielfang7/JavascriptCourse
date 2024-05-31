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
*/

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