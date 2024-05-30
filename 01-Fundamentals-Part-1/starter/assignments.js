// Assignment 1
const country = "United States";
const continent = "North America";
let population = "341";

console.log(country);
console.log(continent);
console.log(population);

// Assignment 2
const isIsland = false;
let language;

console.log(typeof isIsland, typeof population, typeof country, typeof language);

// Assignment 3
language = "english";

// Assignment 4 - Basic Operators
let halvedPopulation = population / 2;
console.log(halvedPopulation);

population++;
console.log(population);
console.log(population > 6);
console.log(population < 33);

const description1 =
    country +
    ' is in ' +
    continent +
    ', and its ' +
    population +
    ' million people speak ' +
    language;

console.log(description1);

// Assignment 5 - Strings and Template Literals 
const description2 = `${country} is in ${continent}, and its ${population} million people speak ${language}`;
console.log(description2);

// Assignment 6 - If Else Statements
if (population > 33) {
    console.log(`${country}'s population is above average`);
}
else {
    console.log(`${country}'s population is ${33 - population} million below average`);
}

// Assignment 7: Type Coercion
console.log('9' - '5'); // -> 4
console.log('19' - '13' + '17'); // -> 617
console.log('19' - '13' + 17); // -> 23
console.log('123' < 57); // -> false
console.log(5 + 6 + '4' + 9 - 4 - 2); // ->1143

// Assignment 8: Equality Operators
// const numNeighbors = Number(prompt('How many neighbor countries does your country have?'));

// if (numNeighbors === 1) {
//     console.log(`Only 1 border!`);
// }
// else if (numNeighbors > 1) {
//     console.log(`More than 1 border`);
// }
// else {
//     console.log(`No borders`);
// }

// Assignment 9: Logical Operators
if (language === "english" && population < 50 && isIsland === false) {
    console.log(`You should live in the USA`);
}
else {
    console.log(`USA does not meet your criteria :(`);
}

// Assignment 10: Switch Statement
switch (language) {
    case `chinese`:
    case `mandarin`:
        console.log(`MOST number of native speakers!`);
        break;
    case `spanish`:
        console.log(`2nd MOST`);
        break;
    case `english`:
        console.log(`3rd`);
        break;
    case `hindi`:
        console.log(`4th`);
        break;
    case `arabic`:
        console.log(`5th`);
        break;
    default:
        console.log(`Great language too!`);
}