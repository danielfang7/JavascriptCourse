/*
let js = "amazing";
console.log(40 + 8 + 23 - 10);

console.log("Jonas");
console.log("23");

// Variable name conventions
let firstName = "Jonas";
console.log(firstName);

let javascriptIsFun = true;
console.log(javascriptIsFun);
console.log(typeof javascriptIsFun);

javascriptIsFun = "YES!";
console.log(javascriptIsFun);
console.log(typeof javascriptIsFun);

// Undefined Example
let year;
console.log(year);
console.log(typeof year);


// Math operators
const now = 2024;
const ageDaniel = now - 1997;
const ageSarah = now - 2018;
console.log(ageDaniel, ageSarah);

// String concatentation with +
const firstName = "Daniel";
const lastName = "Fang";
console.log(firstName + " " + lastName);

// Assignment Operators
let x = 10 + 5;
x += 10;
x *= 4;
x++;
console.log(x);

// Comparison operators
console.log(ageDaniel > ageSarah);
console.log(ageSarah >= 6);
const isOverSix = ageSarah >= 6;

// Operator Precedence
const now = 2024;
const ageDaniel = now - 1997;
const ageSarah = now - 2018;
console.log(now - 1991 > now - 2018);

let x, y;
x = y = 25 - 10 - 5;
console.log(x, y);

const averageAge = (ageDaniel + ageSarah) / 2;
console.log(ageDaniel, ageSarah);
console.log(averageAge);

const firstName = 'Daniel';
const job = 'teacher';
const birthYear = 1997;
const currentYear = 2024;

const daniel = "I'm " + firstName + ", a " + (currentYear - birthYear) + " year old " + job + "!";
console.log(daniel);

const danielNew = `I'm ${firstName}, a ${currentYear - birthYear} year old ${job}!`;
console.log(danielNew);

console.log(`String
multiple
lines`);

const age = 15;

// If Else Control Structure

if (age >= 18) {
    console.log("Daniel can start driving license 😊");
}
else {
    const yearsLeft = 18 - age;
    console.log(`Daniel can start driving in ${yearsLeft} years`)
}

// If Else Control Structure
const birthYear = 1997;
let century;
if (birthYear <= 2000) {
    century = 20;
}
else {
    century = 21;
}
console.log(century);


// Type Conversion
const inputYear = '1991';
console.log(Number(inputYear));
console.log(Number(inputYear) + 18);

console.log(Number(`Daniel`));

console.log(String(`23`), 23);

// Type Coercion
console.log(`I am ` + 23 + ` years old`);
console.log(`I am ` + `23` + ` years old`);

// Prints 23103
console.log(`23` + `10` + 3);
// Prints 16
console.log(`23` - `10` + 3);

console.log(`23` * `2`);

// Prints 10
let n = '1' + 1;
n = n - 1;
console.log(n);


console.log(Boolean(0));
console.log(Boolean(undefined));
console.log(Boolean('Daniel'));
console.log(Boolean({}));

// Logs You Should Get a Job because 0 is falsy
// 0 is converted to false due to type coercion
const money = 0;
if (money) {
    console.log("Don't spend it all :)")
}
else {
    console.log("You should get a job")
}

// Logs Height is undefined because variable is not assigned any value (undefined is falsy)
let height;
if (height) {
    console.log(`Height is defined`)
}
else {
    console.log(`Height is undefined`)
}

// Equality Operators
const age = '18';
if (age === 18) console.log('You are an adult (strict)');
if (age == 18) console.log('You are an adult (loose)');

const favorite = prompt("What's your favorite number?");
console.log(favorite);

// '7' == 7 will return true
if (favorite == 7) {
    console.log('Cool, 7 is an amazing number')
}
else if (favorite == 8) {
    console.log('8 is also a cool number')
}
else {
    console.log('Number is not 7 or 8')
}


// Boolean Logic
const hasDriversLicense = true; //A
const hasGoodVision = true; //B

console.log(hasDriversLicense && hasGoodVision);
console.log(hasDriversLicense || hasGoodVision);
console.log(!hasDriversLicense);

if (hasDriversLicense && hasGoodVision) {
    console.log(`Sarah is able to drive`)
}
else {
    console.log(`Someone else should drive`)
}

const isTired = false; //C
console.log(hasDriversLicense && hasGoodVision && isTired);

if (hasDriversLicense && hasGoodVision && !isTired) {
    console.log(`Sarah is able to drive`);
}
else {
    console.log(`Someone else should drive`);
}


// Switch Statements
const day = `wednesday`;

switch (day) {
    case `monday`:
        console.log(`Plan course structure`);
        console.log(`Go to coding meetup`);
        break;
    case `tuesday`:
        console.log(`Prepare theory videos`);
        break;
    case `wednesday`:
    case `thursday`:
        console.log(`Write code examples`);
        break;
    case `friday`:
        console.log(`Record Videos`);
        break;
    case `saturday`:
    case `sunday`:
        console.log(`Enjoy the weekend`);
        break;
    default:
        console.log(`Not a valid day`);
}
*/

// Ternary Operator: executes drink wine
const age = 23;
age >= 18 ? console.log(`I like to drink wine`) : console.log(`I like to drink water`);

// With Ternary
const drink = age >= 18 ? 'wine' : 'water';

// Without Ternary
let drink2;
if (age >= 18) {
    drink2 = 'wine';
}
else {
    drink2 = 'water';
}

console.log(`I like to drink ${age >= 18 ? 'wine' : 'water'}`);
