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

const displayMovements = function (movements, sort = false) {
  // Empty container
  containerMovements.innerHTML = `;`;
  // Sorting
  const movs = sort ? movements.slice().sort((a, b) => a - b) : movements;
  // Display movements
  movs.forEach(function (mov, i) {
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

// Calculate and Print Balance
const calcDisplayBalance = function (acc) {
  acc.balance = acc.movements.reduce((acc, mov) => acc + mov, 0);
  labelBalance.textContent = `${acc.balance} €`;
};

// Calculate Income and Outflow Summary
const calcDisplaySummary = function (acc) {
  const incomes = acc.movements
    .filter(mov => mov > 0)
    .reduce((acc, mov) => acc + mov, 0);
  labelSumIn.textContent = `${incomes} €`;
  const outflow = acc.movements
    .filter(mov => mov < 0)
    .reduce((acc, mov) => acc + mov);
  labelSumOut.textContent = `${Math.abs(outflow)} €`;

  // Simplification assuming interest paid on each deposit (1.2%) and interest paid must be > $1 for each deposit
  const interest = acc.movements
    .filter(mov => mov > 0)
    .map(deposit => (deposit * acc.interestRate) / 100)
    .filter((int, i, arr) => {
      return int >= 1;
    })
    .reduce((acc, int) => acc + int, 0);
  labelSumInterest.textContent = `${interest} €`;
};

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

const updateUI = function (acc) {
  // Display Movements
  displayMovements(acc.movements);
  // Display Balance
  calcDisplayBalance(acc);
  // Display Summary
  calcDisplaySummary(acc);
};

// Event Handlers
let currentAccount;

btnLogin.addEventListener(`click`, function (e) {
  e.preventDefault(); // prevents form from submitting
  currentAccount = accounts.find(
    acc => acc.username === inputLoginUsername.value
  );
  console.log(currentAccount);
  if (currentAccount?.pin === Number(inputLoginPin.value)) {
    // Display UI and Welcome Message
    labelWelcome.textContent = `Welcome back, ${
      currentAccount.owner.split(` `)[0]
    }`;
    containerApp.style.opacity = 100;
    // Clear input fields
    inputLoginUsername.value = inputLoginPin.value = ``;
    inputLoginPin.blur();

    updateUI(currentAccount);
  }
});

btnTransfer.addEventListener(`click`, function (e) {
  e.preventDefault();
  const amount = Number(inputTransferAmount.value);
  const receiverAccount = accounts.find(
    acc => acc.username === inputTransferTo.value
  );
  inputTransferAmount.value = inputTransferTo.value = ``;
  inputTransferTo.blur();
  // Check if Transfer can be Made and is Positive
  if (
    amount > 0 &&
    receiverAccount &&
    currentAccount.balance >= amount &&
    receiverAccount?.username !== currentAccount.username
  ) {
    // Add Negative Movement to Current User and Positive to Receiver
    currentAccount.movements.push(-amount);
    receiverAccount.movements.push(amount);
    // Update UI
    updateUI(currentAccount);
  }
});

btnLoan.addEventListener(`click`, function (e) {
  e.preventDefault();
  const amount = Number(inputLoanAmount.value);
  if (amount > 0 && currentAccount.movements.some(mov => mov >= amount * 0.1)) {
    // Add Movement (Loan approved)
    currentAccount.movements.push(amount);
    // Update UI
    updateUI(currentAccount);
  }
  inputLoanAmount.value = ``;
});

btnClose.addEventListener(`click`, function (e) {
  e.preventDefault();
  if (
    inputCloseUsername.value === currentAccount.username &&
    Number(inputClosePin.value) === currentAccount.pin
  ) {
    const index = accounts.findIndex(
      acc => acc.username === currentAccount.username
    );
    console.log(index);
    // Delete Account
    accounts.splice(index, 1);
    // Hide UI
    containerApp.style.opacity = 0;
  }
  inputCloseUsername.value = inputClosePin.value = ``;
});

let sorted = false; // Initial State (not sorted)
btnSort.addEventListener(`click`, function (e) {
  e.preventDefault();
  displayMovements(currentAccount.movements, !sorted);
  sorted = !sorted;
});

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

// Find Method
const firstWithdrawal = movements.find(mov => mov < 0);
console.log(movements);
console.log(firstWithdrawal);

console.log(accounts);

// Finding an object with a specific property using Find Method
const account = accounts.find(acc => acc.owner === `Jessica Davis`);
console.log(account);


// .includes test for equality
console.log(movements);
console.log(movements.includes(-130));

// Some method can be used to test for specific conditions and return true/false
const anyDeposits = movements.some(mov => mov > 0);
console.log(anyDeposits);

// Every Method: same as some but only returns true if EVERY element passes the condition
console.log(movements.every(mov => mov > 0)); // false as this account has negative movements
console.log(account4.movements.every(mov => mov > 0)); // true as this account only has positive movements

// Separately defined callback can be used for methods
const deposit = mov => mov > 0;
console.log(movements.some(deposit));
console.log(movements.every(deposit));
console.log(movements.filter(deposit));


// Flat Method
const arr = [[1, 2, 3], [4, 5, 6], 7, 8];
console.log(arr.flat());

const arrDeep = [[[1, 2], 3], [4, [5, 6]], 7, 8];
console.log(arrDeep.flat(2));

// Flat Method to get Total Balance of all Accounts
const overallBalance1 = accounts
  .map(acc => acc.movements)
  .flat()
  .reduce((acc, mov) => acc + mov);
console.log(overallBalance1);

// flatMap
const overallBalance2 = accounts
  .flatMap(acc => acc.movements)
  .reduce((acc, mov) => acc + mov, 0);
console.log(overallBalance2);


// Sort converts everything to strings and  mutates the original array
const owners = [`Jonas`, `Zach`, `Adam`, `Martha`];
console.log(owners.sort());

// Sort numbers ascending (return < 0, A, B) (return > 0, B, A)
console.log(movements);
movements.sort((a, b) => {
  if (a > b) return 1; // switch order
  if (a < b) return -1; // keep order
});
console.log(movements);

// Improved version of sorting numbers (ascending)
movements.sort((a, b) => a - b);
*/

// Generating arrays programatically with fill method + empty arrays
const x = new Array(7); // creates array of 7 empty elements
console.log(x);
x.fill(1, 3, 5); // fills the empty array with 1 starting index 3 to 5 (mutates original)
console.log(x);

const arr = [1, 2, 3, 4, 5, 6];

const y = Array.from({ length: 7 }, () => 1);
console.log(y); // logs [1, 1, 1, 1, 1, 1, 1]

// _ Underscore represents throwaway parameter
const z = Array.from({ length: 7 }, (_, i) => i + 1);
console.log(z); // logs [1, 2, 3, 4, 5, 6, 7]

labelBalance.addEventListener(`click`, function () {
  // lets say we don't have movements array containing values - we need to get them from UI
  const movementsUI = Array.from(
    document.querySelectorAll(`.movements__value`),
    el => Number(el.textContent.replace(`€`, ``))
  );
  console.log(movementsUI);
});

// Array Exercises
//1
const bankDepositSum = accounts
  .flatMap(acc => acc.movements)
  .filter(mov => mov > 0)
  .reduce((acc, mov) => acc + mov, 0);
console.log(bankDepositSum);

//2 how many deposits in bank > $1000
const numDeposits = accounts
  .flatMap(acc => acc.movements)
  .filter(mov => mov >= 1000).length;
console.log(numDeposits);

//3 second way of doing //2 - we can use reduce to count something in an array. Note that we can't use count++ as ++ operator increments value but still returns previous value. So we use prefixed ++ operator instead (++x)
const numDeposits2 = accounts
  .flatMap(acc => acc.movements)
  .reduce((count, mov) => (mov >= 1000 ? ++count : count), 0);
console.log(numDeposits2);

//4 Advanced Reduce: create an object which contains sum of deposits and withdrawals
const sums = accounts
  .flatMap(acc => acc.movements)
  .reduce(
    (acc, cur) => {
      // cur > 0 ? (acc.deposits += cur) : (acc.withdrawals += cur);
      acc[cur > 0 ? `deposits` : `withdrawals`] += cur;
      return acc;
    },
    { deposits: 0, withdrawals: 0 }
  );
console.log(sums);

// 5 Convert any string to Title Case
// this is a nice title -> This Is a Nice Title
const convertTitleCase = function (title) {
  const capitalize = str => str[0].toUpperCase() + str.slice(1);
  const exceptions = [`a`, `an`, `and`, `the`, `but`, `or`, `on`, `in`, `with`];
  const titleCase = title
    .toLowerCase()
    .split(` `)
    .map(word => (exceptions.includes(word) ? word : capitalize(word)))
    .join(` `);
  return capitalize(titleCase);
};
console.log(convertTitleCase(`this is a nice title`));
console.log(convertTitleCase(`this is a LONG title, but not too long`));
console.log(convertTitleCase(`and here is another title with an EXAMPLE`));
