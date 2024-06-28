'use strict';

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// BANKIST APP

/////////////////////////////////////////////////
// Data

// DIFFERENT DATA! Contains movement dates, currency and locale

const account1 = {
  owner: 'Jonas Schmedtmann',
  movements: [200, 455.23, -306.5, 25000, -642.21, -133.9, 79.97, 1300],
  interestRate: 1.2, // %
  pin: 1111,

  movementsDates: [
    '2019-11-18T21:31:17.178Z',
    '2019-12-23T07:42:02.383Z',
    '2020-01-28T09:15:04.904Z',
    '2020-04-01T10:17:24.185Z',
    '2020-05-08T14:11:59.604Z',
    '2024-06-20T17:01:17.194Z',
    '2024-06-22T23:36:17.929Z',
    '2024-06-24T10:51:36.790Z',
  ],
  currency: 'EUR',
  locale: 'pt-PT', // de-DE
};

const account2 = {
  owner: 'Jessica Davis',
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222,

  movementsDates: [
    '2019-11-01T13:15:33.035Z',
    '2019-11-30T09:48:16.867Z',
    '2019-12-25T06:04:23.907Z',
    '2020-01-25T14:18:46.235Z',
    '2020-02-05T16:33:06.386Z',
    '2020-04-10T14:43:26.374Z',
    '2020-06-25T18:49:59.371Z',
    '2020-07-26T12:01:20.894Z',
  ],
  currency: 'USD',
  locale: 'en-US',
};

const accounts = [account1, account2];

/////////////////////////////////////////////////
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

/////////////////////////////////////////////////
// Functions

const formatMovementDate = function (date, locale) {
  const calcDaysPassed = (date1, date2) =>
    Math.round(Math.abs((date2 - date1) / (1000 * 60 * 60 * 24)));

  // Finds days passed between Today and Movement Date, and returns based on it
  const daysPassed = calcDaysPassed(new Date(), date);
  if (daysPassed === 0) return `Today`;
  if (daysPassed === 1) return `Yesterday`;
  if (daysPassed <= 7) return `${daysPassed} days ago`;

  return new Intl.DateTimeFormat(locale).format(date);

  // Old Code
  // const day = `${date.getDate()}`.padStart(2, 0);
  // const month = `${date.getMonth() + 1}`.padStart(2, 0);
  // const year = date.getFullYear();
  // return `${month}/${day}/${year}`;
};

const formatCurrency = function (value, locale, currency) {
  return new Intl.NumberFormat(locale, {
    style: `currency`,
    currency: currency,
  }).format(value);
};

const displayMovements = function (acc, sort = false) {
  containerMovements.innerHTML = '';

  const movs = sort
    ? acc.movements.slice().sort((a, b) => a - b)
    : acc.movements;

  movs.forEach(function (mov, i) {
    const type = mov > 0 ? 'deposit' : 'withdrawal';

    // Loop over second array at same time, using current index to get other array's values
    const date = new Date(acc.movementsDates[i]);
    const displayDate = formatMovementDate(date, acc.locale);

    const formattedMov = formatCurrency(mov, acc.locale, acc.currency);

    const html = `
      <div class="movements__row">
        <div class="movements__type movements__type--${type}">${
      i + 1
    } ${type}</div>
        <div class="movements__date">${displayDate}</div>
        <div class="movements__value">${formattedMov}</div>
      </div>
    `;

    containerMovements.insertAdjacentHTML('afterbegin', html);
  });
};

const calcDisplayBalance = function (acc) {
  acc.balance = acc.movements.reduce((acc, mov) => acc + mov, 0);
  labelBalance.textContent = formatCurrency(
    acc.balance,
    acc.locale,
    acc.currency
  );
};

const calcDisplaySummary = function (acc) {
  const incomes = acc.movements
    .filter(mov => mov > 0)
    .reduce((acc, mov) => acc + mov, 0);
  labelSumIn.textContent = formatCurrency(incomes, acc.locale, acc.currency);

  const out = acc.movements
    .filter(mov => mov < 0)
    .reduce((acc, mov) => acc + mov, 0);
  labelSumOut.textContent = formatCurrency(
    Math.abs(out),
    acc.locale,
    acc.currency
  );

  const interest = acc.movements
    .filter(mov => mov > 0)
    .map(deposit => (deposit * acc.interestRate) / 100)
    .filter((int, i, arr) => {
      // console.log(arr);
      return int >= 1;
    })
    .reduce((acc, int) => acc + int, 0);
  labelSumInterest.textContent = formatCurrency(
    interest,
    acc.locale,
    acc.currency
  );
};

const createUsernames = function (accs) {
  accs.forEach(function (acc) {
    acc.username = acc.owner
      .toLowerCase()
      .split(' ')
      .map(name => name[0])
      .join('');
  });
};
createUsernames(accounts);

const updateUI = function (acc) {
  // Display movements
  displayMovements(acc);

  // Display balance
  calcDisplayBalance(acc);

  // Display summary
  calcDisplaySummary(acc);
};

const startLogOutTimer = function () {
  const tick = function () {
    const min = String(Math.trunc(time / 60)).padStart(2, 0);
    const sec = String(time % 60).padStart(2, 0);
    // In each call, print the remaining time to UI
    labelTimer.textContent = `${min}:${sec}`;
    // When time is at 0 seconds, stop timer and logout user
    if (time === 0) {
      clearInterval(timer);
      labelWelcome.textContent = `Log in to get started`;
      containerApp.style.opacity = 0;
    }
    // Decrease by 1s
    time--;
  };
  // Set time to 10 minutes
  let time = 10;

  // Call the timer every second
  tick();
  const timer = setInterval(tick, 1000);

  return timer;
};

///////////////////////////////////////
// Event handlers
let currentAccount, timer;

btnLogin.addEventListener('click', function (e) {
  // Prevent form from submitting
  e.preventDefault();

  currentAccount = accounts.find(
    acc => acc.username === inputLoginUsername.value
  );
  console.log(currentAccount);

  if (currentAccount?.pin === Number(inputLoginPin.value)) {
    // Display UI and message
    labelWelcome.textContent = `Welcome back, ${
      currentAccount.owner.split(' ')[0]
    }`;
    containerApp.style.opacity = 100;

    // Create and show current date and time
    const now = new Date();
    const options = {
      hour: `numeric`,
      minute: `numeric`,
      day: `numeric`,
      month: `numeric`,
      year: `numeric`,
    };
    labelDate.textContent = new Intl.DateTimeFormat(
      currentAccount.locale,
      options
    ).format(now); // formats date for specified locale

    // OLD CODE
    // const day = `${now.getDate()}`.padStart(2, 0);
    // const month = `${now.getMonth() + 1}`.padStart(2, 0);
    // const year = now.getFullYear();
    // const hour = `${now.getHours()}`.padStart(2, 0);
    // const minutes = `${now.getMinutes()}`.padStart(2, 0);
    // labelDate.textContent = `${month}/${day}/${year}, ${hour}:${minutes}`;

    // Start logout timer
    if (timer) clearInterval(timer);
    timer = startLogOutTimer();

    // Clear input fields
    inputLoginUsername.value = inputLoginPin.value = '';
    inputLoginPin.blur();

    // Update UI
    updateUI(currentAccount);
  }
});

btnTransfer.addEventListener('click', function (e) {
  e.preventDefault();
  const amount = Number(inputTransferAmount.value);
  const receiverAcc = accounts.find(
    acc => acc.username === inputTransferTo.value
  );
  inputTransferAmount.value = inputTransferTo.value = '';

  if (
    amount > 0 &&
    receiverAcc &&
    currentAccount.balance >= amount &&
    receiverAcc?.username !== currentAccount.username
  ) {
    // Doing the transfer
    currentAccount.movements.push(-amount);
    receiverAcc.movements.push(amount);

    // Add Transfer Date
    currentAccount.movementsDates.push(new Date().toISOString());
    receiverAcc.movementsDates.push(new Date().toISOString());

    // Update UI
    updateUI(currentAccount);

    // Reset Timer
    clearInterval(timer);
    timer = startLogOutTimer();
  }
});

btnLoan.addEventListener('click', function (e) {
  e.preventDefault();

  const amount = Math.floor(inputLoanAmount.value);

  if (amount > 0 && currentAccount.movements.some(mov => mov >= amount * 0.1)) {
    setTimeout(function () {
      // Add movement
      currentAccount.movements.push(amount);

      // Add Loan Date
      currentAccount.movementsDates.push(new Date().toISOString());

      // Update UI
      updateUI(currentAccount);

      // Reset Timer
      clearInterval(timer);
      timer = startLogOutTimer();
    }, 2500);
  }
  inputLoanAmount.value = '';
});

btnClose.addEventListener('click', function (e) {
  e.preventDefault();

  if (
    inputCloseUsername.value === currentAccount.username &&
    Number(inputClosePin.value) === currentAccount.pin
  ) {
    const index = accounts.findIndex(
      acc => acc.username === currentAccount.username
    );
    console.log(index);
    // .indexOf(23)

    // Delete account
    accounts.splice(index, 1);

    // Hide UI
    containerApp.style.opacity = 0;
  }

  inputCloseUsername.value = inputClosePin.value = '';
});

let sorted = false;
btnSort.addEventListener('click', function (e) {
  e.preventDefault();
  displayMovements(currentAccount, !sorted);
  sorted = !sorted;
});

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// LECTURES

/*

console.log(23.0 === 23);
console.log(0.1 + 0.2); // returns 0.30000000000004
console.log(0.1 + 0.2 === 0.3); // returns false

// These do the same thing as JS automatically type coerces +`23`
console.log(Number(`23`));
console.log(+`23`);

// Parsing
console.log(Number.parseInt(`30px`, 10)); // returns 30 as a number. string needs to start with a number, specify base 10
console.log(Number.parseFloat(`  2.5rem `)); // logs 2.5, whereas int would stop at 2

// isNaN
console.log(Number.isNaN(`string`)); // false
console.log(Number.isNaN(20)); // false
console.log(Number.isNaN(+`20X`)); // true
console.log(Number.isNaN(23 / 0)); // false (infinity is a special value that exists)

// isFinite - better to use to check if something is a real number
console.log(Number.isFinite(`20`)); // false
console.log(Number.isFinite(20 / 0)); // false


// Square Root
console.log(Math.sqrt(25)); // logs 5
console.log(25 ** (1 / 2)); // logs 5

// Max/Min
console.log(Math.max(1, 5, 10, '23')); // does type coercion, but not parsing
console.log(Math.min(1, 5, 10, 23));

console.log(Math.PI * Number.parseFloat(`10px`) ** 2); // calculate area of circle with 10px radius
console.log(Math.trunc(Math.random() * 6) + 1); // random dice roll

// Random Int function
const randomInt = (min, max) =>
  Math.floor(Math.random() * (max - min) + 1) + min;
console.log(randomInt(10, 20));

// Rounding Integers
console.log(Math.trunc(23.3)); // removes any decimal
console.log(Math.round(23.9)); // nearest integer rounding
console.log(Math.ceil(23.3)); // round up force (24)
console.log(Math.floor(23.9)); // round down force (23)

// Rounding decimals/floating point
console.log((2.757).toFixed(2)); // returns a string and not a number (to specified decimal places)
console.log(+(2.757).toFixed(2)); // forces number


console.log(5 % 2);
console.log(5 / 2); // 5 = 2 * 2 + 1

console.log(6 % 2);

// Using Remainders to check if number is even
const isEven = n => n % 2 === 0;
console.log(isEven(8));
console.log(isEven(23));

// Painting rows of deposits using Remainders
labelBalance.addEventListener(`click`, function () {
  [...document.querySelectorAll(`.movements__row`)].forEach(function (row, i) {
    if (i % 2 === 0) row.style.backgroundColor = `orangered`;
    if (i % 3 === 0) row.style.backgroundColor = `blue`;
  });
});

// Numeric Separators
const diameter = 287_460_000_000;
console.log(diameter); // engine ignores underscores

// Underscores can help give different meanings
const transferFee = 15_00;
const transferFee2 = 1_500;

// BigInt
console.log(4324234238493829428934829348294829n); // n transforms regular number into BigInt
console.log(BigInt(4324234238493829428934829348294829)); // constructor should only be used with smaller numbers

// Operations (you cannot mix regular numbers with big ints, except for comparison operations)
console.log(10000n + 10000n); // works normally
console.log(54529529n * 10000n); // works normally

// Exceptions
console.log(20n > 15); // works
console.log(20n === 20); // returns false given types of them are different
console.log(20n == `20`); //this works as not forcing type coercion

// Division
console.log(10n / 3n); // returns 3n (closest big int, cuts decimal part off)


// Create a Date (4 ways with diff parameters)
const now = new Date();
console.log(now);

// Parsing Date from String
console.log(new Date(`Mon Jun 24 2024 17:28:24 `)); // Parse date from string
console.log(new Date(`December 24, 2015`)); // Parse date from string (this could be unreliable)
console.log(new Date(account1.movementsDates[0]));

// Using Y/M/D/Hours/Min/Seconds
console.log(new Date(2037, 10, 19, 15, 23, 5)); // Parse year, month (zero based), day, hours, min, second
console.log(new Date(2037, 10, 31, 15, 23, 5)); // Nov 31 auto-corrects to Dec 1

// Creating date using MS (timestamp) from initial Unix time (1/1/1970)
console.log(new Date(0));
console.log(new Date(3 * 24 * 60 * 60 * 1000)); // convert 3 days to milliseconds

const future = new Date(2037, 10, 19, 15, 23);
console.log(future);
console.log(future.getFullYear()); // returns 2037
console.log(future.getMonth()); // returns 10
console.log(future.getDate()); // returns 19
console.log(future.getDay()); // returns 4 (thursday)
console.log(future.getHours());
console.log(future.getMinutes());
console.log(future.getSeconds());
console.log(future.toISOString()); // follows international standard (as time/date string)
console.log(future.getTime()); // number of milliseconds passed since Unix time
console.log(new Date(future.getTime()));
console.log(Date.now()); // gives current timestamp

future.setFullYear(2040); // changes/sets the year/month/date or whatever
console.log(future);


// Operations with dates
const future = new Date(2037, 10, 19, 15, 23);
console.log(+future);

const calcDaysPassed = (date1, date2) =>
  Math.abs((date2 - date1) / (1000 * 60 * 60 * 24)); // converting to days from ms

const days1 = calcDaysPassed(new Date(2037, 3, 28), new Date(2037, 3, 24));
console.log(days1); // logs 4 (days)

// Internationalizing Numbers
const num = 3884764.23;
const options = {
  style: `unit`,
  unit: `mile-per-hour`,
};
console.log(new Intl.NumberFormat(`en-US`, options).format(num)); // separates with commas for US, period for decimal, and we get unit of mph


// Set Timeout
const ingredients = [`olives`, `spinach`];
const pizzaTimer = setTimeout(
  (ing1, ing2) => console.log(`Here is your pizza with ${ing1} and ${ing2}`),
  3000,
  ...ingredients // pass in parameters to your callback by adding more parameters to setTimeout
);
console.log(`Waiting...`); // setTimeout doesn't freeze code execution: JS will count time in the background (ASYNC JS)

if (ingredients.includes(`spinach`)) clearTimeout(pizzaTimer); // deletes specified timer

// Set Interval - executes callback function in loop based on specific time interval
setInterval(function () {
  const now = new Date();
  console.log(now);
}, 1000);
*/
