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
language = "English";

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