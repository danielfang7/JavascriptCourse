// Remember, we're gonna use strict mode in all scripts now!
'use strict';

const xyz = 26;

if (xyz === 23) {
  console.log(23);
} else {
  console.log(`no`);
}

const calcAge = (birthYear) => 2024 - birthYear;

console.log(calcAge(1997));
