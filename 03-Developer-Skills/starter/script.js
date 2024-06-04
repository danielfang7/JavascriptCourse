// Remember, we're gonna use strict mode in all scripts now!
'use strict';

/*
// const xyz = 26;

// if (xyz === 23) {
//   console.log(23);
// } else {
//   console.log(`no`);
// }

// const calcAge = (birthYear) => 2024 - birthYear;

// console.log(calcAge(1997));

// Practice problem
const temperatures = [3, -2, -6, -1, 'error', 9, 13, 17, 15, 14, 9, 5];
const temperatures2 = [125, 1];

// 1. Understand problem
// Amplitude = difference between highest and lowest temp
// how to compute max and min temperatures?
// What's a sensor error? And what to do?

// 2. Breaking up into sub-problems
// how to ignore errors?
// find max value in temp array, find min value
// subtract min from max, return it

const calcTempAmplitude = function (temps) {
  let max = temps[0];
  let min = temps[0];
  for (let i = 0; i < temps.length; i++) {
    const currentTemp = temps[i];
    if (typeof currentTemp !== `number`) continue;
    if (currentTemp > max) max = currentTemp;
    if (currentTemp < min) min = currentTemp;
  }
  return max - min;
};

const amplitude = calcTempAmplitude(temperatures, temperatures2);
console.log(amplitude);

// Problem 2: function should receive 2 arrays of temps

// 1. Understand problem
// do we need to implement same functionality twice? we can just merge two arrays

// 2. subproblems
// how to merge two arrays?

const calcTempAmplitudeNew = function (temps1, temps2) {
  let temps = temps1.concat(temps2);
  let max = temps[0];
  let min = temps[0];
  for (let i = 0; i < temps.length; i++) {
    const currentTemp = temps[i];
    if (typeof currentTemp !== `number`) continue;
    if (currentTemp > max) max = currentTemp;
    if (currentTemp < min) min = currentTemp;
  }
  return max - min;
};

const amplitude2 = calcTempAmplitudeNew(temperatures, temperatures2);
console.log(amplitude2);

// Do measurements in Kelvin
const measureKelvin = function () {
  const measurement = {
    type: `temperature`,
    unit: `celsius`,
    value: 10,
  };

  console.table(measurement);

  const kelvin = measurement.value + 273;
  return kelvin;
};

console.log(measureKelvin());

// Using a debugger

const calcTempAmplitudeBug = function (temps1, temps2) {
  let temps = temps1.concat(temps2);
  let max = 0;
  let min = 0;
  for (let i = 0; i < temps.length; i++) {
    const currentTemp = temps[i];
    if (typeof currentTemp !== `number`) continue;
    if (currentTemp > max) max = currentTemp;
    if (currentTemp < min) min = currentTemp;
  }
  return max - min;
};

const amplitudeBug = calcTempAmplitudeBug([3, 5, 1], [9, 4, 5]);

// A) Identify bug
console.log(amplitudeBug);

// B) use debugger: saw that min wasn't being updated, even when 1 went through (lowest number in array)

// C) fix code
*/

// Coding Challenge #1: Given array of max temps, thermometer should display string certain way

// 1. Understanding the Problem
// We need to create a function that takes an input array of Arr and prints each element of the array individually in a string in certain positions

// 2. Breaking down the problem
// First, to work on an array of any size, we need to loop through the length of the array.
// For each iteration of the loop for each element, we should add/concatenate the value to a string variable with certain filler text
// After looping through each element, the string variable is done and we simply log it

const printForecast = function (arr) {
  let stringVar = `...`;
  for (let i = 0; i < arr.length; i++) {
    stringVar += `${arr[i]}°C in ${i + 1} days ...`;
  }
  console.log(stringVar);
};

printForecast([1, 2, 3]);
