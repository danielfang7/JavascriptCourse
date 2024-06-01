'use strict';

// Assignment 1
function describeCountry(country, population, capitalCity) {
    return `${country} has ${population} million people and its capital city is ${capitalCity}`;
}

const descPortugal = describeCountry('Portugal', 10, 'Lisbon');
const descGermany = describeCountry('Germany', 83, 'Berlin');
const descFinland = describeCountry('Finland', 6, 'Helsinki');

console.log(descPortugal, descGermany, descFinland);

// Assignment 2
const worldPopulation = 7900;
function percentageOfWorld1(population) {
    return (population / worldPopulation) * 100;
}

const usaPercPopulation = percentageOfWorld1(333);
const chinaPercPopulation = percentageOfWorld1(1441);
const portugalPercPopulation = percentageOfWorld1(10);

console.log(usaPercPopulation, chinaPercPopulation, portugalPercPopulation);

const percentageOfWorld2 = function (population) {
    return (population / worldPopulation) * 100;
}

// Assignment 3 - Arrow functions
const percentageOfWorld3 = population => (population / worldPopulation) * 100;
console.log(percentageOfWorld3(333));

// Assignment 4 - Functions calling other functions

const describePopulation = function (country, population) {
    return `${country} has ${population} million people, which is about ${percentageOfWorld3(population)}% of the world`;
}

console.log(describePopulation('USA', 333));
console.log(describePopulation('China', 1441));
console.log(describePopulation('Portugal', 10));

// Assignment 5 - Intro to Arrays
const populationsArray = [333, 1441, 10, 83];
console.log(populationsArray.length === 4 ? true : false);

const percentagesArray = [
    percentageOfWorld1(populationsArray[0]),
    percentageOfWorld1(populationsArray[1]),
    percentageOfWorld1(populationsArray[2]),
    percentageOfWorld1(populationsArray[3])
];

console.log(percentagesArray);

// Assignment 6 - Basic Array Operations
const neighbors = [`Canada`, `Mexico`];
neighbors.push(`Utopia`);
neighbors.pop();
console.log(neighbors.includes(`Germany`) ? `Central European Country` : `Probably not a central European country`);
neighbors[neighbors.indexOf(`Canada`)] = `Republic of Canada`;
console.log(neighbors);

// Assignment 7 - Intro to Objects
const myCountry = {
    country: `USA`,
    capital: `Washington DC`,
    language: `English`,
    population: 333,
    neighbors: [`Canada`, `Mexico`],

    describe: function () {
        console.log(`${this.country} has ${this.population} million ${this.language} speaking people, ${this.neighbors.length} neighboring countries and a capital called ${this.capital}`)
    },

    checkIsland: function () {
        this.isIsland = this.neighbors.length < 1 ? true : false;
        return this.isIsland;
    }

};

// Assignment 8 - Dot vs Bracket Notation
console.log(`${myCountry.country} has ${myCountry.population} million ${myCountry.language} speaking people, ${myCountry.neighbors.length} neighboring countries and a capital called ${myCountry.capital}`);

myCountry.population += 2;
console.log(myCountry.population);

myCountry[`population`] -= 2;
console.log(myCountry.population);

// Assignment 9 - Object Methods
myCountry.describe();
myCountry.checkIsland();

console.log(myCountry.isIsland);


