'use strict';

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// BANKIST APP

// Data
const account1 = {
  owner: 'Jonas Schmedtmann',
  movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
  interestRate: 1.2, // %
  pin: 1111,
};

const account2 = {
  owner: 'Jessica Davis',
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222,
};

const account3 = {
  owner: 'Steven Thomas Williams',
  movements: [200, -200, 340, -300, -20, 50, 400, -460],
  interestRate: 0.7,
  pin: 3333,
};

const account4 = {
  owner: 'Sarah Smith',
  movements: [430, 1000, 700, 50, 90],
  interestRate: 1,
  pin: 4444,
};

const accounts = [account1, account2, account3, account4];

// Elements
const labelWelcome = document.querySelector('.welcome');
const labelDate = document.querySelector('.date');
const labelBalance = document.querySelector('.balance__value');
const labelSumIn = document.querySelector('.summary__value--in');
const labelSumOut = document.querySelector('.summary__value--out');
const labelSumInterest = document.querySelector('.summary__value--interest');
const labelTimer = document.querySelector('.timer');

const containerApp = document.querySelector('.app');
const containerMovements = document.querySelector('.movements');

const btnLogin = document.querySelector('.login__btn');
const btnTransfer = document.querySelector('.form__btn--transfer');
const btnLoan = document.querySelector('.form__btn--loan');
const btnClose = document.querySelector('.form__btn--close');
const btnSort = document.querySelector('.btn--sort');

const inputLoginUsername = document.querySelector('.login__input--user');
const inputLoginPin = document.querySelector('.login__input--pin');
const inputTransferTo = document.querySelector('.form__input--to');
const inputTransferAmount = document.querySelector('.form__input--amount');
const inputLoanAmount = document.querySelector('.form__input--loan-amount');
const inputCloseUsername = document.querySelector('.form__input--user');
const inputClosePin = document.querySelector('.form__input--pin');

const displayMovements = function (movements) {
  // Empty container
  containerMovements.innerHTML = `;`;

  // Display movements
  movements.forEach(function (mov, i) {
    const type = mov > 0 ? `deposit` : `withdrawal`;
    const html = `
    <div class="movements__row">
          <div class="movements__type movements__type--${type}">${
      i + 1
    } ${type} </div>
          <div class="movements__value">${mov}€</div>
        </div>
        `;
    containerMovements.insertAdjacentHTML(`afterbegin`, html);
  });
};
displayMovements(account1.movements);

// Calculate and Print Balance
const calcDisplayBalance = function (movements) {
  const balance = movements.reduce((acc, mov) => acc + mov, 0);
  labelBalance.textContent = `${balance} €`;
};
calcDisplayBalance(account1.movements);

// Calculate Income and Outflow Summary
const calcDisplaySummary = function (movements) {
  const incomes = movements
    .filter(mov => mov > 0)
    .reduce((acc, mov) => acc + mov, 0);
  labelSumIn.textContent = `${incomes} €`;
  const outflow = movements
    .filter(mov => mov < 0)
    .reduce((acc, mov) => acc + mov);
  labelSumOut.textContent = `${Math.abs(outflow)} €`;

  // Simplification assuming interest paid on each deposit (1.2%) and interest paid must be > $1 for each deposit
  const interest = movements
    .filter(mov => mov > 0)
    .map(deposit => (deposit * 1.2) / 100)
    .filter((int, i, arr) => {
      console.log(arr);
      return int >= 1;
    })
    .reduce((acc, int) => acc + int, 0);
  labelSumInterest.textContent = `${interest} €`;
};
calcDisplaySummary(account1.movements);

// Create Username function
// Side effect: mutate the actual accounts array using forEach
const createUsernames = function (accs) {
  accs.forEach(function (acc) {
    acc.username = acc.owner
      .toLowerCase()
      .split(` `)
      .map(name => name[0])
      .join(``);
  });
};
createUsernames(accounts);

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// LECTURES

// const currencies = new Map([
//   ['USD', 'United States dollar'],
//   ['EUR', 'Euro'],
//   ['GBP', 'Pound sterling'],
// ]);

const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

/////////////////////////////////////////////////
/*
let arr = [`a`, `b`, `c`, `d`, `e`];

// Slice
console.log(arr.slice(2)); // logs [c, d, e]
console.log(arr.slice(2, 4)); // logs [c, d]
console.log(arr.slice(-2)); // logs [d, e]
console.log(arr.slice(1, -2)); // logs [b, c]
console.log(arr.slice()); // creates shallow copy
console.log([...arr]); // also creates shallow copy

// Splice: mutates original array (takes part of it and returns it, original array loses part extracted)
arr.splice(-1); // removes last element of array
console.log(arr);
arr.splice(1, 2); // removes elements in position 1 and 2
console.log(arr);

// Reverse
const arr2 = [`j`, `i`, `h`, `g`, `f`];
console.log(arr2.reverse());
console.log(arr2); // original array is mutated

// Concat
arr = [`a`, `b`, `c`, `d`, `e`];
const letters = arr.concat(arr2); // does not mutate original arrays
console.log(letters);
console.log([...arr, ...arr2]); // does same thing as concat

// Join
console.log(letters.join(` - `)); // results in string of array elements separated by specifed input

// At Method
const arr = [23, 11, 64];
console.log(arr[0]);
console.log(arr.at(0));

// Getting Last Element of Array
console.log(arr[arr.length - 1]); // logs 64
console.log(arr.slice(-1)[0]); // logs 64
console.log(arr.at(-1)); // logs 64
console.log(`daniel`.at(2)); // AT method can be used on strings too

// For Each Method
const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

movements.forEach(function (movement, i, arr) {
  if (movement > 0) {
    console.log(`Movement ${i + 1}: You deposited ${movement}`);
  } else {
    console.log(`Movement ${i + 1}: You withdrew ${Math.abs(movement)}`);
  }
});

console.log(`----SPACER----`);
// For Of <Method (slower)
for (const [i, movement] of movements.entries()) {
  if (movement > 0) {
    console.log(`Movement ${i + 1}: You deposited ${movement}`);
  } else {
    console.log(`Movement ${i + 1}: You withdrew ${Math.abs(movement)}`);
  }
}


// For Each on Maps
const currencies = new Map([
  ['USD', 'United States dollar'],
  ['EUR', 'Euro'],
  ['GBP', 'Pound sterling'],
]);

currencies.forEach(function (value, key, map) {
  console.log(`${key}: ${value}`);
});

// Set
const currenciesUnique = new Set([`USD`, `GBP`, `USD`, `EUR`, `EUR`]);

// The second argument is useless for Sets when using forEach, as sets don't have "indexes"
currenciesUnique.forEach(function (value, _, map) {
  console.log(`${value}`);
});
  

// Map method: returns new array with new elements
const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];
const eurToUsd = 1.1;
const movementsUSD = movements.map(mov => mov * eurToUsd);

console.log(movements);
console.log(movementsUSD);

// Using For of instead: different paradigm (not functional programming)
const movementsUSDfor = [];
for (const mov of movements) movementsUSDfor.push(mov * eurToUsd);
console.log(movementsUSDfor);

// Map also has access to value, index, and the whole array
const movementDesc = movements.map(
  (mov, i, arr) =>
    `Movement ${i + 1}: You ${mov > 0 ? `deposited` : `withdrew`} ${Math.abs(
      mov
    )}`
);

console.log(movementDesc);


// Filter Method (return a boolean)
const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];
const deposits = movements.filter(function (movement) {
  return movement > 0;
});
console.log(deposits);

// For Of (less efficient method)
const depositsFor = [];
for (const move of movements) if (move > 0) depositsFor.push(move);
console.log(depositsFor);

// Filter method challenge for withdrawals
const withdrawals = movements.filter(mov => mov < 0);
console.log(withdrawals);

// Reduce method (accumulator is like a snowball)
const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];
const balance = movements.reduce(function (acc, cur, i) {
  return acc + cur;
}, 0);
console.log(balance);

// Using For Of instead: need external variable
let balance2 = 0;
for (const mov of movements) balance2 += mov;
console.log(balance2);

// Maximum Value of Array using Reduce
const maximum = movements.reduce((acc, mov) => {
  if (acc > mov) return acc;
  else return (acc = mov);
}, movements[0]);
console.log(maximum); // logs max value in array


// Chaining Methods
const eurToUsd = 1.1;
const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];
const totalDepositsInUSD = movements
  .filter((mov, i, arr) => {
    return mov > 0;
  })
  .map((mov, i, arr) => {
    return mov * eurToUsd;
  })
  .reduce((acc, mov, i, arr) => {
    return acc + mov;
  }, 0);
console.log(totalDepositsInUSD); // logs 5522
*/

// Find Method
const firstWithdrawal = movements.find(mov => mov < 0);
console.log(movements);
console.log(firstWithdrawal);

console.log(accounts);

// Finding an object with a specific property using Find Method
const account = accounts.find(acc => acc.owner === `Jessica Davis`);
console.log(account);
