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
*/

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