'use strict';

///////////////////////////////////////
// Modal window

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.btn--close-modal');
const btnsOpenModal = document.querySelectorAll('.btn--show-modal');

const openModal = function (e) {
  e.preventDefault();
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};

const closeModal = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};

btnsOpenModal.forEach(btn => btn.addEventListener('click', openModal));

btnCloseModal.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);

document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
    closeModal();
  }
});

///////////////////////////////
/*
// Selecting Entire HTML
console.log(document.documentElement);
console.log(document.head);
console.log(document.body);

// Selecting Elements
const header = document.querySelector(`.header`); // selects first element that matches class
const allSections = document.querySelectorAll(`.section`); // selects all elements that match class
console.log(allSections);

// Other ways to Select Elements for HTML Collection
document.getElementById(`section--1`);
const allButtons = document.getElementsByTagName(`button`); // returns HTML collection of all buttons, not Node list (HTML collection updates automatically with live changes of elements)
console.log(allButtons);

console.log(document.getElementsByClassName(`btn`)); // also returns live HTML collection

// Creating and Inserting HTML Elements
// .insertAdjacentHTML - simple way

const message = document.createElement(`div`);
message.classList.add(`cookie-message`);
// message.textContent = `We use cookies for improved functionality and analytics.`;
message.innerHTML = `We use cookies for improved functionality and analytics. <button class="btn btn--close-cookie">Got it!</button>`;
// header.prepend(message); // adds element as first child of header
// header.append(message); // appends element as last child (moves it from first to last) as DOM elements are unique

// header.append(message.cloneNode(true)); // we can use this to make a copy to have it in both places

header.before(message); // inserts before header as a sibling
header.after(message); // inserts after header as sibling

// Deleting Elements
document
  .querySelector(`.btn--close-cookie`)
  .addEventListener(`click`, function () {
    message.remove();
  });

// Inline Styles
message.style.backgroundColor = `#37383d`;
message.style.width = `120%`;

// To get Computed Styles (as appears on page)
console.log(getComputedStyle(message).color);

// To adjust Computed Styles
message.style.height =
  Number.parseFloat(getComputedStyle(message).height, 10) + 30 + `px`;

// To adjust Custom Properties
document.documentElement.style.setProperty(`--color-primary`, `orangered`);

// Attributes (accessing and modifying standard attributes)
const logo = document.querySelector(`.nav__logo`);
console.log(logo.alt);
console.log(logo.src); // if we need the relative src or href link and not the absolute, use getAttribute instead
console.log(logo.className);

logo.alt = `Beautiful minimalist logo`;

// Non-standard attribute
console.log(logo.designer); // returns undefined
console.log(logo.getAttribute(`designer`)); // works
logo.setAttribute(`company`, `Bankist`); // creates and sets new attribute

// Data Attributes (specially stored in dataset attribute)
console.log(logo.dataset.versionNumber);

// Classes
logo.classList.add(`c`);
logo.classList.remove(`c`);
logo.classList.toggle(`c`);
logo.classList.contains(`c`);

// Don't Use, overrides/only allows one
logo.className = `Daniel`;
*/

const btnScrollTo = document.querySelector(`.btn--scroll-to`);
const section1 = document.querySelector(`#section--1`);

btnScrollTo.addEventListener(`click`, function (e) {
  const s1coords = section1.getBoundingClientRect();
  console.log(s1coords);
  console.log(e.target.getBoundingClientRect());
  console.log(`Current scroll (X/Y)`, window.pageXOffset, pageYOffset);
  console.log(document.documentElement.clientHeight);
  console.log(document.documentElement.clientWidth);

  // Scrolling (current position + current scroll)
  // window.scrollTo(
  //   s1coords.left + window.pageXOffset,
  //   s1coords.top + window.pageYOffset
  // );

  // // Smooth Scroll
  // window.scrollTo({
  //   left: s1coords.left + window.pageXOffset,
  //   top: s1coords.top + window.pageYOffset,
  //   behavior: `smooth`,
  // });

  // New method of Scroll - way easier, only works in Modern Browsers
  section1.scrollIntoView({ behavior: `smooth` });
});
